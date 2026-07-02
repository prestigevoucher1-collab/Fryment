"use client";

import { INDIAN_STATES } from "@/data/pte/constants";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { loadRazorpayScript } from "@/lib/razorpay";
import { ExamConfig } from "@/data/pte/exams";
import { BadgeCheck, Check, Star, CheckCircle, ChevronDown, ChevronsUpDown, Lock, Loader2 } from "lucide-react";

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
   const [error, setError] = useState<string | null>(null);
   const router = useRouter();

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
                  router.push(`/thank-you?paymentId=${verifyData.paymentId}&orderId=${response.razorpay_order_id}&amount=${formData.quantity ? Number(formData.quantity) * exam.price : exam.price}`);
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
      <header className="relative min-h-[90vh] bg-surface-dim overflow-hidden pt-24 md:pt-32 pb-16">
         {/* Background Orbs */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.07] animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.05] animate-pulse" style={{ animationDelay: "2s" }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full filter blur-[120px] opacity-60 pointer-events-none"></div>
         </div>
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">

               {/* Left Column - Content */}
               <div className="space-y-8 lg:pr-8 animate-in fade-in slide-in-from-left duration-700">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-outline-variant rounded-full shadow-sm">
                     <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                     <BadgeCheck className="w-4 h-4 text-primary" />
                     <span className="text-sm font-medium text-on-surface">Official {exam.name} Partner</span>
                  </div>

                  <div className="space-y-4">
                     <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-on-surface leading-tight tracking-tight">
                        Book {exam.name} at <span className="text-primary whitespace-nowrap">₹{exam.price.toLocaleString('en-IN')}</span>
                     </h1>
                     <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-xl">
                        {exam.description}
                     </p>
                  </div>

                  <div className="flex flex-wrap gap-8 py-4">
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white border border-outline-variant shadow-sm rounded-full flex items-center justify-center">
                           <CheckCircle className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-on-surface">{exam.reviewsCount}+</div>
                           <div className="text-sm text-on-surface-variant">Vouchers Sold</div>
                        </div>
                     </div>
                     <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white border border-outline-variant shadow-sm rounded-full flex items-center justify-center">
                           <Star className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                           <div className="text-2xl font-bold text-on-surface">{exam.rating}/5</div>
                           <div className="text-sm text-on-surface-variant">Average Rating</div>
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                     {exam.features.slice(0, 2).map(f => (
                        <div key={f} className="flex items-center gap-2">
                           <Check className="w-5 h-5 text-primary" />
                           <span className="text-sm font-semibold text-on-surface">{f}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Right Column - Booking Form (Floating Card Style) */}
               <div className="relative flex items-center justify-center animate-in fade-in slide-in-from-right duration-700 delay-150 mt-12 lg:mt-0" id="purchase">
                  <div className="relative w-full max-w-lg lg:max-w-[520px] group perspective-1000">
                     {/* Decorative background cards (Shuffle Cards Effect) */}
                     <div
                        className="absolute inset-0 bg-surface-muted rounded-[2rem] border border-outline-variant/60 shadow-lg transform translate-x-3 translate-y-3 rotate-6 origin-bottom-right transition-all duration-500 ease-out group-hover:rotate-12 group-hover:translate-x-6 group-hover:translate-y-6"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23005b4a' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")` }}
                     ></div>
                     <div
                        className="absolute inset-0 bg-surface-dim rounded-[2rem] border border-outline-variant shadow-xl transform translate-x-1.5 translate-y-1.5 rotate-3 origin-bottom-right transition-all duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-3 group-hover:translate-y-3"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23005b4a' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
                     ></div>

                     <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-primary/20 overflow-hidden p-6 sm:p-8 md:p-10 border border-outline-variant transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-1 z-10">
                        <div className="mb-6 md:mb-8 relative flex flex-col md:block">
                           <div className="order-1 md:absolute md:top-0 md:right-0 w-fit mb-4 md:mb-0 bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-primary/20">
                              <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4" /> FAST BOOKING
                           </div>
                           <div className="order-2 md:pr-32">
                              <h2 className="text-2xl sm:text-3xl font-black text-on-surface mb-1 md:mb-2">Get Voucher</h2>
                              <p className="text-sm sm:text-base text-on-surface-variant font-medium">Fill details for instant delivery</p>
                           </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                           <input
                              name="fullName" value={formData.fullName} onChange={handleInputChange}
                              className="w-full bg-surface-dim border border-outline-variant rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-on-surface placeholder:text-on-surface-variant/70 font-medium"
                              placeholder="Full Name *" required
                           />
                           <input
                              name="phone" value={formData.phone} onChange={handleInputChange}
                              className="w-full bg-surface-dim border border-outline-variant rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-on-surface placeholder:text-on-surface-variant/70 font-medium"
                              placeholder="Mobile Number *" maxLength={10} required
                           />
                              <input
                                 name="email" value={formData.email} onChange={handleInputChange}
                                 className="w-full bg-surface-dim border border-outline-variant rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-on-surface placeholder:text-on-surface-variant/70 font-medium"
                                 placeholder="Email Address *" type="email" required
                              />

                              <div className="relative group">
                                 <select
                                    name="state" value={formData.state} onChange={handleInputChange}
                                    className="w-full bg-surface-dim border border-outline-variant rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-on-surface appearance-none cursor-pointer font-medium"
                                    required
                                 >
                                    <option value="" disabled>Choose State *</option>
                                    {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                                 </select>
                                 <ChevronDown className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant/70 pointer-events-none group-focus-within:text-primary" />
                              </div>

                              <div className="relative group">
                                 <select
                                    name="quantity" value={formData.quantity} onChange={handleInputChange}
                                    className="w-full bg-surface-dim border border-outline-variant rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all text-on-surface appearance-none cursor-pointer font-medium"
                                    required
                                 >
                                    <option value="" disabled>Quantity *</option>
                                    {[1, 2, 3, 4, 5].map(n => (
                                       <option key={n} value={n.toString()}>
                                          {n} Voucher{n > 1 ? 's' : ''} — ₹{(pricePerVoucher * n).toLocaleString('en-IN')}
                                       </option>
                                    ))}
                                 </select>
                                 <ChevronsUpDown className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant/70 pointer-events-none group-focus-within:text-primary" />
                              </div>

                              {totalAmount && (
                                 <div className="flex items-center justify-between bg-surface-dim border border-outline-variant rounded-xl px-5 py-4 mt-2">
                                    <span className="text-base font-semibold text-on-surface-variant">Total Amount</span>
                                    <div className="text-right">
                                       <span className="text-xl font-black text-primary">₹{totalAmount.toLocaleString('en-IN')}</span>
                                    </div>
                                 </div>
                              )}

                              <button
                                 type="submit"
                                 disabled={loading}
                                 className="w-full mt-6 bg-primary text-white py-4 rounded-xl font-black text-base shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-primary-light hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                              >
                                 {loading ? (
                                    <>
                                       <Loader2 className="w-5 h-5 animate-spin" />
                                       Processing...
                                    </>
                                 ) : (
                                    <>
                                       Pay Securely Now
                                       <Lock className="w-4 h-4" />
                                    </>
                                 )}
                              </button>
                           </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
