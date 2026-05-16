"use client";

import { INDIAN_STATES } from "@/data/pte/constants";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function HeroSection() {
   const [formData, setFormData] = useState({
      fullName: "",
      phone: "",
      email: "",
      state: "",
      quantity: ""
   });
   const [loading, setLoading] = useState(false);
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
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
      setError(null);
      try {
         const { error: dbError } = await supabase
            .from('voucher_bookings')
            .insert([{
               full_name: formData.fullName,
               whatsapp_number: formData.phone,
               email: formData.email,
               location: "N/A",
               state: formData.state,
               quantity: parseInt(formData.quantity)
            }]);
         if (dbError) throw dbError;
         setSubmitted(true);
         setFormData({ fullName: "", phone: "", email: "", state: "", quantity: "" });
      } catch (err: any) {
         console.error(err);
         setError("An unexpected error occurred.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <header className="pt-[56px] md:pt-[64px] pb-8 md:pb-12 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-[#f0f7ff] to-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1565d8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 lg:gap-12 items-start relative z-10 pt-4 md:pt-6">

            {/* Hero Left Content */}
            <div className="space-y-4 md:space-y-5 animate-in fade-in slide-in-from-left duration-700">
               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 px-2 py-2 pr-5 rounded-full border border-[#1565d8]/10 shadow-[0_4px_20px_rgba(21,101,216,0.08)] backdrop-blur-md transition-all hover:shadow-[0_4px_25px_rgba(21,101,216,0.15)] hover:-translate-y-0.5">
                  <div className="flex -space-x-2">
                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                     <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                     <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop" alt="Student" className="w-7 h-7 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div className="flex items-center gap-1.5">
                     <span className="material-icons text-[14px] text-[#1565d8]">verified</span>
                     <span className="text-[14px] font-extrabold text-[#091e42] tracking-tight">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1565d8] to-indigo-600">10,000+</span> Students
                     </span>
                  </div>
               </div>

               <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-[#091e42]">
                  The Smartest Way to <span className="text-[#1565d8]">Save ₹3,000</span> &amp; Book PTE Fast
               </h1>
               <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                  Authorized all-in-one platform for PTE vouchers. Instant delivery, 24/7 WhatsApp support, and 100% secure bookings.
               </p>

               <div className="space-y-2 lg:mt-4">
                  {["Instant delivery in 60 seconds", "No hidden charges", "Valid for 12 months"].map(f => (
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
                  <p className="text-sm font-bold text-[#091e42]">4.9/5 from 8,000+ reviews</p>
               </div>
            </div>

            {/* Hero Right: Booking Form */}
            <div className="relative w-[95%] md:w-[90%] mx-auto lg:w-full" id="purchase">
               <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-3xl p-6 md:p-8 lg:p-10 border border-slate-300 relative overflow-hidden">
                  <div className="text-center mb-6">
                     <h2 className="text-xl md:text-2xl font-black text-[#091e42] mb-1">Book Your Voucher</h2>
                     <p className="text-xs md:text-sm text-slate-400 font-bold tracking-tight">Fill details to get your discount code</p>
                  </div>

                  {submitted ? (
                     <div className="text-center py-20 space-y-6 animate-in zoom-in-95">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><span className="material-icons text-5xl">check_circle</span></div>
                        <h3 className="text-2xl font-black text-[#091e42]">Order Initiated!</h3>
                        <p className="text-slate-500 font-bold">Connecting to secure payment gateway...</p>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                        <input name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm transition-all placeholder:text-slate-300" placeholder="Full Name *" required />
                        <input name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm transition-all placeholder:text-slate-300" placeholder="Mobile Number *" maxLength={10} required />
                        <input name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm transition-all placeholder:text-slate-300" placeholder="Email Address *" type="email" required />

                        <div className="relative">
                           <select name="state" value={formData.state} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm appearance-none cursor-pointer transition-all" required>
                              <option value="" disabled>Choose State *</option>
                              {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                           </select>
                           <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                        </div>

                        <div className="relative">
                           <select name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 outline-none focus:border-[#1565d8] focus:ring-1 focus:ring-[#1565d8]/20 font-bold text-sm appearance-none cursor-pointer transition-all" required>
                              <option value="" disabled>Quantity *</option>
                              {[1, 2, 3, 4, 5].map(n => <option key={n} value={n.toString()}>{n} Voucher{n > 1 ? 's' : ''}</option>)}
                           </select>
                           <span className="material-icons absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">unfold_more</span>
                        </div>

                        <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#1565d8] to-[#091e42] text-white py-3 md:py-4 rounded-xl font-black text-base md:text-lg tracking-wide shadow-xl mt-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60">
                           {loading ? "Processing..." : <>Buy Voucher Now <span className="material-icons text-base">arrow_forward</span></>}
                        </button>

                        {error && <p className="text-center font-bold text-red-500 text-xs mt-2">{error}</p>}
                        <p className="text-center text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-widest">100% Secure Transaction</p>
                     </form>
                  )}
               </div>
            </div>
         </div>
      </header>
   );
}
