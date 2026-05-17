"use client";

import { INDIAN_STATES } from "@/data/pte/constants";
import { useState } from "react";
import Image from "next/image";
import { loadRazorpayScript } from "@/lib/razorpay";
import { ExamConfig } from "@/data/pte/exams";

const IS_TEST_MODE = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.startsWith('rzp_test_') ?? true;

interface ExamHeroProps {
   exam: ExamConfig;
}

export default function ExamHero({ exam }: ExamHeroProps) {
   const [formData, setFormData] = useState({
      fullName: "",
      phone: "",
      email: "",
      state: "",
      quantity: ""
   });
   const [loading, setLoading] = useState(false);
   const [submitted, setSubmitted] = useState(false);
   const [paymentId, setPaymentId] = useState<string | null>(null);
   const [error, setError] = useState<string | null>(null);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const pricePerVoucher = IS_TEST_MODE ? 1 : exam.price;
   const totalAmount = formData.quantity
      ? pricePerVoucher * parseInt(formData.quantity)
      : null;

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!formData.fullName || !formData.phone || !formData.email || !formData.state || !formData.quantity) {
         setError("Please fill out all compulsory fields.");
         return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
         setError("Please enter a valid 10-digit mobile number.");
         return;
      }

      setLoading(true);

      try {
         const scriptLoaded = await loadRazorpayScript();
         if (!scriptLoaded) {
            setError("Failed to load payment gateway. Check your internet connection.");
            setLoading(false);
            return;
         }

         const orderRes = await fetch("/api/razorpay/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               quantity: formData.quantity,
               fullName: formData.fullName,
               email: formData.email,
               phone: formData.phone,
               examId: exam.id, // Pass exam ID to server
               price: pricePerVoucher
            }),
         });

         const orderData = await orderRes.json();
         if (!orderRes.ok || !orderData.orderId) {
            setError(orderData.error || "Could not initiate payment. Please try again.");
            setLoading(false);
            return;
         }

         const options = {
            key: orderData.keyId,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Fryment",
            description: `${exam.name} Voucher × ${formData.quantity}`,
            image: "/pte-offer-popup.png",
            order_id: orderData.orderId,
            prefill: {
               name: formData.fullName,
               email: formData.email,
               contact: formData.phone,
            },
            theme: { color: "#1565d8" },
            handler: async (response: any) => {
               const verifyRes = await fetch("/api/razorpay/verify-payment", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                     ...response,
                     fullName: formData.fullName,
                     phone: formData.phone,
                     email: formData.email,
                     state: formData.state,
                     quantity: formData.quantity,
                     examId: exam.id
                  }),
               });

               const verifyData = await verifyRes.json();
               if (verifyData.success) {
                  setPaymentId(verifyData.paymentId);
                  setSubmitted(true);
                  setFormData({ fullName: "", phone: "", email: "", state: "", quantity: "" });
               } else {
                  setError("Payment received but verification failed. Contact support with your payment ID: " + response.razorpay_payment_id);
               }
               setLoading(false);
            },
            modal: {
               ondismiss: () => {
                  setLoading(false);
                  setError("Payment was cancelled. Please try again.");
               },
            },
         };

         const rzp = new (window as any).Razorpay(options);
         rzp.on("payment.failed", (resp: any) => {
            setError(`Payment failed: ${resp.error.description}`);
            setLoading(false);
         });
         rzp.open();

      } catch (err: any) {
         console.error(err);
         setError("An unexpected error occurred. Please try again.");
         setLoading(false);
      }
   };

   return (
      <header className="pt-[56px] md:pt-[64px] pb-8 md:pb-12 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-[#f0f7ff] to-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1565d8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 lg:gap-12 items-start relative z-10 pt-4 md:pt-6">

            <div className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-left duration-700">
               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 px-2 py-2 pr-5 rounded-full border border-[#1565d8]/10 shadow-[0_4px_20px_rgba(21,101,216,0.08)] backdrop-blur-md transition-all hover:shadow-[0_4px_25px_rgba(21,101,216,0.15)] hover:-translate-y-0.5">
                  <div className="flex -space-x-2">
                     <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" width={28} height={28} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" priority={true} />
                     <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" width={28} height={28} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" priority={true} />
                     <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop" width={28} height={28} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" priority={true} />
                  </div>
                  <div className="flex items-center gap-1.5">
                     <span className="material-icons text-[14px] text-[#1565d8]">verified</span>
                     <span className="text-[14px] font-extrabold text-[#091e42] tracking-tight">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565d8] to-indigo-600">{exam.reviewsCount}</span> Students
                     </span>
                  </div>
               </div>

               <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-[#091e42]">
                  The Smartest Way to Book {exam.name} at <span className="text-[#1565d8]">₹{exam.price.toLocaleString('en-IN')}</span> Fast
               </h1>
               <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                  {exam.description}
               </p>

               <div className="space-y-2 lg:mt-4">
                  {exam.features.map(f => (
                     <div key={f} className="flex items-center gap-3">
                        <span className="material-icons text-green-500 bg-green-50 rounded-full p-1 text-[10px] md:text-sm">check</span>
                        <span className="text-sm font-bold text-[#091e42]/80">{f}</span>
                     </div>
                  ))}
               </div>

               <div className="flex items-center gap-4 pt-2">
                  <div className="flex text-amber-400">
                     {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons text-base md:text-lg">star</span>)}
                  </div>
                  <p className="text-sm font-bold text-[#091e42]">{exam.rating} from {exam.reviewsCount} reviews</p>
               </div>
            </div>

            <div className="relative w-[95%] md:w-[90%] mx-auto lg:w-full" id="purchase">
               <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-3xl p-6 md:p-8 lg:p-10 border border-slate-300 relative overflow-hidden">

                  <div className="text-center mb-6">
                     <h2 className="text-xl md:text-2xl font-black text-[#091e42] mb-1">Book Your {exam.name} Voucher</h2>
                     <p className="text-xs md:text-sm text-slate-400 font-bold tracking-tight">Fill details to get your discount code</p>
                  </div>

                  {submitted ? (
                     <div className="text-center py-12 space-y-4 animate-in zoom-in-95">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                           <span className="material-icons text-5xl">check_circle</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#091e42]">Payment Successful!</h3>
                        <p className="text-slate-500 font-bold text-sm">Your {exam.name} voucher is being processed and will be sent to your email &amp; WhatsApp shortly.</p>
                        <div className="pt-2">
                           <a href="https://wa.me/919325216364" target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-black text-sm shadow-lg hover:opacity-90 transition-opacity">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.541 4.192 1.572 6.014L0 24l6.105-1.601a11.871 11.871 0 005.939 1.6h.005c6.635 0 12.032-5.394 12.035-12.034a11.84 11.84 0 00-3.517-8.503z" /></svg>
                              Track on WhatsApp
                           </a>
                        </div>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                        <input
                           name="fullName" value={formData.fullName} onChange={handleInputChange}
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm transition-all placeholder:text-slate-300"
                           placeholder="Full Name *" required
                        />
                        <input
                           name="phone" value={formData.phone} onChange={handleInputChange}
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm transition-all placeholder:text-slate-300"
                           placeholder="Mobile Number *" maxLength={10} required
                        />
                        <input
                           name="email" value={formData.email} onChange={handleInputChange}
                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm transition-all placeholder:text-slate-300"
                           placeholder="Email Address *" type="email" required
                        />

                        <div className="relative">
                           <select
                              name="state" value={formData.state} onChange={handleInputChange}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm appearance-none cursor-pointer transition-all"
                              required
                           >
                              <option value="" disabled>Choose State *</option>
                              {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                           </select>
                           <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                        </div>

                        <div className="relative">
                           <select
                              name="quantity" value={formData.quantity} onChange={handleInputChange}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm appearance-none cursor-pointer transition-all"
                              required
                           >
                              <option value="" disabled>Quantity *</option>
                              {[1, 2, 3, 4, 5].map(n => (
                                 <option key={n} value={n.toString()}>
                                    {n} Voucher{n > 1 ? 's' : ''} — ₹{(pricePerVoucher * n).toLocaleString('en-IN')}
                                 </option>
                              ))}
                           </select>
                           <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">unfold_more</span>
                        </div>

                        {totalAmount && (
                           <div className="flex items-center justify-between bg-[#f0f7ff] border border-[#1565d8]/20 rounded-xl px-5 py-3 animate-in fade-in">
                              <span className="text-xs font-bold text-slate-500">Total Amount</span>
                              <div className="text-right">
                                 <span className="text-lg font-black text-[#1565d8]">₹{totalAmount.toLocaleString('en-IN')}</span>
                                 <span className="block text-[9px] text-slate-400 font-medium">incl. all taxes</span>
                              </div>
                           </div>
                        )}

                        <button
                           type="submit"
                           disabled={loading}
                           className="w-full bg-gradient-to-r from-[#1565d8] to-[#091e42] text-white py-3 md:py-4 rounded-xl font-black text-base md:text-lg tracking-wide shadow-xl mt-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                        >
                           {loading ? (
                              <>
                                 <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                                 </svg>
                                 Processing...
                              </>
                           ) : (
                              <>
                                 Pay Securely Now
                                 <span className="material-icons text-base">lock</span>
                              </>
                           )}
                        </button>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </header>
   );
}
