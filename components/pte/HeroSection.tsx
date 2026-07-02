"use client";

import { INDIAN_STATES } from "@/data/pte/constants";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loadRazorpayScript } from "@/lib/razorpay";

const IS_TEST_MODE = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID?.startsWith('rzp_test_') ?? true;
// In test mode show ₹1 so the form total matches what Razorpay actually charges
const PRICE_PER_VOUCHER = IS_TEST_MODE ? 1 : 14200;

export default function HeroSection() {
   const [formData, setFormData] = useState({
      fullName: "",
      phone: "",
      email: "",
      state: "",
      quantity: ""
   });
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const router = useRouter();

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const totalAmount = formData.quantity
      ? PRICE_PER_VOUCHER * parseInt(formData.quantity)
      : null;

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      // Validation
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
         // 1. Load Razorpay script
         const scriptLoaded = await loadRazorpayScript();
         if (!scriptLoaded) {
            setError("Failed to load payment gateway. Check your internet connection.");
            setLoading(false);
            return;
         }

         // 2. Create order on server
         const orderRes = await fetch("/api/razorpay/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               quantity: formData.quantity,
               fullName: formData.fullName,
               email: formData.email,
               phone: formData.phone,
               examId: "pte",
            }),
         });

         const orderData = await orderRes.json();
         if (!orderRes.ok || !orderData.orderId) {
            setError(orderData.error || "Could not initiate payment. Please try again.");
            setLoading(false);
            return;
         }

         // 3. Open Razorpay checkout
         const options = {
            key: orderData.keyId,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Fryment",
            description: `PTE Voucher × ${formData.quantity}`,
            image: "/pte-offer-popup.png",
            order_id: orderData.orderId,
            prefill: {
               name: formData.fullName,
               email: formData.email,
               contact: formData.phone,
            },
            theme: { color: "#1565d8" },
            handler: async (response: {
               razorpay_payment_id: string;
               razorpay_order_id: string;
               razorpay_signature: string;
            }) => {
               // 4. Verify payment & save to Supabase on server
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
                  }),
               });

               const verifyData = await verifyRes.json();
               if (verifyData.success) {
                  router.push(`/thank-you?paymentId=${verifyData.paymentId}&orderId=${response.razorpay_order_id}&amount=${formData.quantity ? Number(formData.quantity) * PRICE_PER_VOUCHER : PRICE_PER_VOUCHER}`);
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
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 lg:gap-12 items-start relative z-10 pt-4 md:pt-6">

            {/* Hero Left Content */}
            <div className="space-y-5 md:space-y-6 animate-in fade-in slide-in-from-left duration-700">
               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 px-2 py-2 pr-5 rounded-full border border-secondary/10 shadow-[0_4px_20px_rgba(21,101,216,0.08)] backdrop-blur-md transition-all hover:shadow-[0_4px_25px_rgba(21,101,216,0.15)] hover:-translate-y-0.5">
                  <div className="flex -space-x-2">
                     <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" width={28} height={28} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                     <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" width={28} height={28} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                     <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop" width={28} height={28} alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div className="flex items-center gap-1.5">
                     <span className="material-icons text-[14px] text-secondary">verified</span>
                     <span className="text-[14px] font-extrabold text-primary tracking-tight">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-indigo-600">10,000+</span> Students
                     </span>
                  </div>
               </div>

               <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-primary">
                  The Smartest Way to Book PTE at <span className="text-secondary whitespace-nowrap">₹14,200</span> Fast
               </h1>
               <p className="text-base md:text-lg text-primary/70 font-medium leading-relaxed max-w-xl">
                  Authorized all-in-one platform for PTE vouchers. Instant delivery, 24/7 WhatsApp support, and 100% secure bookings.
               </p>

               <div className="space-y-3 lg:mt-4">
                  {["Instant delivery in 60 minutes", "No hidden charges", "Valid for 12 months"].map(f => (
                     <div key={f} className="flex items-center gap-3">
                        <span className="material-icons text-green-500 bg-green-50 rounded-full p-1 text-[12px] md:text-sm">check</span>
                        <span className="text-[15px] md:text-base font-bold text-primary/80">{f}</span>
                     </div>
                  ))}
               </div>

               <div className="flex items-center gap-4 pt-2">
                  <div className="flex text-amber-400">
                     {[1, 2, 3, 4, 5].map(i => <span key={i} className="material-icons text-base md:text-lg">star</span>)}
                  </div>
                  <p className="text-sm font-bold text-primary">4.9/5 from 8,000+ reviews</p>
               </div>
            </div>

            {/* Hero Right: Booking Form */}
            <section className="relative w-full mx-auto" id="purchase">
               <div className="bg-white rounded-3xl md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:shadow-[0_30px_80px_rgba(0,0,0,0.2)] p-6 md:p-10 border border-slate-100 relative overflow-hidden">

                  <div className="text-center mb-6">
                     <h2 className="text-xl md:text-2xl font-black text-primary mb-1">Book Your Voucher</h2>
                     <p className="text-xs md:text-sm text-primary/50 font-bold tracking-tight">Fill details to get your discount code</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                           name="fullName" value={formData.fullName} onChange={handleInputChange}
                           className="w-full min-h-[50px] bg-accent/10 border border-accent/40 rounded-2xl px-5 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-bold text-base transition-all placeholder:text-slate-400"
                           placeholder="Full Name *" required
                        />
                        <input
                           name="phone" value={formData.phone} onChange={handleInputChange}
                           className="w-full min-h-[50px] bg-accent/10 border border-accent/40 rounded-2xl px-5 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-bold text-base transition-all placeholder:text-slate-400"
                           placeholder="Mobile Number *" maxLength={10} required
                        />
                        <input
                           name="email" value={formData.email} onChange={handleInputChange}
                           className="w-full min-h-[50px] bg-accent/10 border border-accent/40 rounded-2xl px-5 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-bold text-base transition-all placeholder:text-slate-400"
                           placeholder="Email Address *" type="email" required
                        />

                        <div className="relative">
                           <select
                              name="state" value={formData.state} onChange={handleInputChange}
                              className="w-full min-h-[50px] bg-accent/10 border border-accent/40 rounded-2xl px-5 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-bold text-base appearance-none cursor-pointer transition-all"
                              required
                           >
                              <option value="" disabled>Choose State *</option>
                              {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                           </select>
                           <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-primary/50 pointer-events-none">expand_more</span>
                        </div>

                        <div className="relative">
                           <select
                              name="quantity" value={formData.quantity} onChange={handleInputChange}
                              className="w-full min-h-[50px] bg-accent/10 border border-accent/40 rounded-2xl px-5 py-3 outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 font-bold text-base appearance-none cursor-pointer transition-all"
                              required
                           >
                              <option value="" disabled>Quantity *</option>
                              {[1, 2, 3, 4, 5].map(n => (
                                 <option key={n} value={n.toString()}>
                                    {n} Voucher{n > 1 ? 's' : ''} — ₹{(PRICE_PER_VOUCHER * n).toLocaleString('en-IN')}
                                 </option>
                              ))}
                           </select>
                           <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-primary/50 pointer-events-none">expand_more</span>
                        </div>

                        {/* Price Summary */}
                        {totalAmount && (
                           <div className="flex items-center justify-between bg-accent/20 border border-secondary/20 rounded-xl px-5 py-3 animate-in fade-in">
                              <span className="text-xs font-bold text-primary/70">Total Amount</span>
                              <div className="text-right">
                                 <span className="text-lg font-black text-secondary">₹{totalAmount.toLocaleString('en-IN')}</span>
                                 <span className="block text-[9px] text-primary/50 font-medium">incl. all taxes</span>
                              </div>
                           </div>
                        )}

                        <button
                           type="submit"
                           disabled={loading}
                           className={`w-full min-h-[56px] bg-gradient-to-r from-secondary to-primary text-white py-3 md:py-4 rounded-2xl font-black text-base md:text-lg tracking-wide shadow-xl mt-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60`}
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

                        {error && (
                           <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                              <span className="material-icons text-red-500 text-sm mt-0.5">error_outline</span>
                              <p className="text-red-600 font-bold text-xs">{error}</p>
                           </div>
                        )}

                        {/* Trust badges */}
                        <div className="flex items-center justify-center gap-3 pt-1">
                           <Image src="https://cdn.razorpay.com/static/assets/razorpay-glyph.svg" width={60} height={16} alt="Razorpay" className="h-4 w-auto opacity-50" />
                           <span className="text-[10px] text-primary/50 font-medium">Secured by Razorpay</span>
                           <span className="text-slate-200">|</span>
                           <span className="text-[10px] text-primary/50 font-medium uppercase tracking-widest">256-bit SSL</span>
                        </div>
                     </form>
               </div>
            </section>
         </div>
      </header>
   );
}
