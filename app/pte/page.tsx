"use client";
// Deployment trigger

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const INDIAN_STATES = [
   "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
   "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
   "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
   "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
   "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
   "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export default function PTEPage() {
   const [activeFaq, setActiveFaq] = useState<number | null>(null);
   const [showPopup, setShowPopup] = useState(false);
   const [hasShownPopup, setHasShownPopup] = useState(false);
   const [showStickyBar, setShowStickyBar] = useState(false);
   const [isStickyDismissed, setIsStickyDismissed] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [flippedCard, setFlippedCard] = useState<number | null>(null);

   // Form States
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

   useEffect(() => {
      const handleScroll = () => {
         const scrollHeight = document.documentElement.scrollHeight;
         const clientHeight = document.documentElement.clientHeight;
         const scrollPos = window.scrollY;
         const scrollPercentage = (scrollPos / (scrollHeight - clientHeight)) * 100;
         if (scrollPercentage >= 50 && !hasShownPopup) {
            setShowPopup(true);
            setHasShownPopup(true);
         }

         if (scrollPos > 500) {
            setShowStickyBar(true);
         } else {
            setShowStickyBar(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [hasShownPopup]);

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

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const testimonials = [
      { name: "Gareth Hayter", role: "Founder & CEO · Slyce Software", content: "Success on rails. Fryment really helps to guide and it creates a sense of trust in the booking process.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop" },
      { name: "Cong Nguyen", role: "Student · Synodus", content: "One of the simplest voucher automation platforms with good pricing. Customer support is highly helpful.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop" },
      { name: "Joshua Lim", role: "Managing Director", content: "A must have in your study abroad arsenal. It has everything that you're looking for to book your exam.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop" },
      { name: "Julia M.", role: "Director of English Prep", content: "Fryment is pretty easy. Minimum learning curve compared to other voucher apps, I highly recommend it.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop" },
      { name: "Arjun M.", role: "MBA Aspirant", content: "Saved me ₹2,800 instantly. The code was delivered within minutes and worked perfectly on the portal.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop" },
      { name: "Priya S.", role: "Nursing Student", content: "I was worried about legitimacy, but their WhatsApp team was incredibly helpful. 5 solid stars!", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&h=150&auto=format&fit=crop" }
   ];

   const portraitProofs = [
      "https://images.unsplash.com/photo-1541844053589-346841d0b34c?q=80&w=600&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586762522814-9a9986320341?q=80&w=600&h=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533022139590-25614ab150b0?q=80&w=600&h=700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=600&h=800&auto=format&fit=crop",
   ];

   const landscapeProofs = [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&h=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=800&h=550&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584433144859-1e1b8c160533?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=450&auto=format&fit=crop",
   ];

   const [liveBlogs, setLiveBlogs] = useState<any[]>([]);

   useEffect(() => {
      async function fetchLiveBlogs() {
         const { data } = await supabase
            .from('blogs')
            .select('title, excerpt, slug, feature_img_url, created_at')
            .eq('status', 'Published')
            .order('created_at', { ascending: false })
            .limit(3);
         if (data) setLiveBlogs(data);
      }
      fetchLiveBlogs();
   }, []);

   const faqs = [
      { q: "What is a PTE Promo Code / Voucher?", a: "A PTE Voucher is a unique 12-digit code that acts as a form of payment for your PTE Academic exam. Instead of paying the full price of ₹17,000+ directly on the Pearson site, you can buy a voucher from us at a discounted rate and use it as your payment method." },
      { q: "Is Fryment an authorized partner?", a: "Yes, we work with authorized educational partners in India to provide legitimate, verified vouchers that are 100% valid." },
      { q: "How long does it take to receive the code?", a: "Immediately after your successful payment via our secure Paytm gateway, the voucher code is sent to your registered email and WhatsApp number." },
      { q: "Do these vouchers work for PTE Core or UKVI?", a: "Our vouchers are specifically designed for the PTE Academic and PTE Academic UKVI exams, accepted globally for study and migration." },
      { q: "Can I use the voucher for rescheduling?", a: "Vouchers are primarily for new bookings. Refer to Pearson's official policy for rescheduling fees." },
      { q: "What is the validity of the purchased voucher?", a: "Each voucher is valid for 12 months from the date of issuance." },
      { q: "What if the code doesn't work?", a: "Codes are pre-verified, and we provide 24/7 WhatsApp support. In the rare case of an issue, our experts will assist immediately." }
   ];

   const comparisonPoints = [
      { feature: "Discount Savings", prestige: "Flat ₹2,800-₹3,000", others: "₹500-₹1,000" },
      { feature: "Delivery Speed", prestige: "Instant (60 Sec)", others: "2-24 Hours" },
      { feature: "Support Team", prestige: "24/7 Live WhatsApp", others: "Email Tickets Only" },
      { feature: "Payment Gateway", prestige: "Paytm (Official)", others: "Manual Bank Transfer" },
      { feature: "Voucher Type", prestige: "Official Pearson Grant", others: "Third-party Codes" },
      { feature: "Documentation", prestige: "Official Tax Invoice", others: "No Bill Provided" }
   ];

   return (
      <div className="bg-white text-[#1e293b] min-h-screen font-body text-xs md:text-base selection:bg-[#1565d8] selection:text-white">
         {/* Dynamic Pop-up - Premium Image Offer Design */}
         {showPopup && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-white/10 backdrop-blur-[20px] animate-in fade-in duration-500">
               <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-500">
                  <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md flex items-center justify-center text-[#091e42] transition-all z-30 border border-black/5 shadow-lg">
                     <span className="material-icons text-xl font-bold">close</span>
                  </button>

                  <Link href="#purchase" onClick={() => setShowPopup(false)} className="block relative cursor-pointer">
                     <div className="relative aspect-[1.6/1] w-full overflow-hidden">
                        <img
                           src="/pte-offer-popup.png"
                           alt="PTE Discount Offer - Save ₹3000"
                           className="w-full h-full object-cover"
                        />

                        <div className="absolute bottom-[10%] right-[6%] z-20">
                           <div className="bg-[#ffcc00] hover:bg-[#ffdb4d] text-[#091e42] px-10 py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest shadow-2xl transition-all flex items-center gap-3 border-b-4 border-black/20 active:border-0 active:translate-y-1">
                              Get Coupon Now
                              <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_forward</span>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         )}

         {/* TopNavBar - White & Clean */}
         <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md h-14 md:h-16 flex items-center border-b border-slate-100 shadow-sm">
            <div className="max-w-[1920px] w-full mx-auto px-4 md:px-6 lg:px-16 flex items-center justify-between">
               <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1565d8] rounded-lg flex items-center justify-center shadow-lg"><span className="material-icons text-lg text-white font-bold">school</span></div>
                  <span className="text-lg md:text-xl font-black tracking-tight text-[#091e42]">Fryment</span>
               </div>

               <div className="hidden lg:flex items-center gap-8">
                  <a className="text-sm font-bold text-[#091e42] hover:text-[#1565d8] transition-colors" href="/how-to-book">How to Book</a>
                  <Link className="text-sm font-bold text-[#091e42] hover:text-[#1565d8] transition-colors" href="/pte/blog">Blog</Link>
                  <a className="bg-gradient-to-r from-[#1565d8] to-[#091e42] text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wide shadow-md flex items-center gap-2 hover:opacity-90 transition-opacity" href="tel:+919325216364">
                     <span className="material-icons text-sm">phone</span>
                     Call: +91 93252 16364
                  </a>
               </div>

               {/* Mobile Right Controls */}
               <div className="flex lg:hidden items-center gap-4">
                  <button onClick={() => setIsMenuOpen(true)} className="text-[#091e42] p-1 focus:outline-none">
                     <span className="material-icons text-3xl">menu</span>
                  </button>
               </div>
            </div>

            {/* Mobile Menu Drawer - Clean White & Blue Design */}
            {isMenuOpen && (
               <div className="fixed inset-0 bg-white z-[99999] flex flex-col lg:hidden">
                  {/* Top Header in Menu */}
                  <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0 bg-white">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#1565d8] rounded-lg flex items-center justify-center shadow-md"><span className="material-icons text-white text-sm">school</span></div>
                        <span className="text-xl font-black tracking-tight text-[#091e42]">Fryment</span>
                     </div>
                     <button onClick={() => setIsMenuOpen(false)} className="text-[#1565d8] hover:opacity-70 transition-opacity">
                        <span className="material-icons text-3xl">close</span>
                     </button>
                  </div>

                  {/* Minimal Menu Links */}
                  <div className="flex-1 p-8 flex flex-col space-y-6 bg-white">
                     <a href="/how-to-book" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-xl">menu_book</span>
                        How to Book
                     </a>
                     <Link href="/pte/blog" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-xl">rss_feed</span>
                        Our Blog
                     </Link>
                     <a href="tel:+919325216364" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-xl">phone</span>
                        Call Support
                     </a>
                  </div>
               </div>
            )}
         </nav>

         {/* Floating WhatsApp - Always visible at bottom-right */}
         <div className="fixed bottom-10 right-6 z-[100000] md:bottom-12 md:right-10">
            <a className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-110 transition-transform animate-glow-whatsapp" href="https://wa.me/919325216364" target="_blank" rel="noopener noreferrer">
               <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.541 4.192 1.572 6.014L0 24l6.105-1.601a11.871 11.871 0 005.939 1.6h.005c6.635 0 12.032-5.394 12.035-12.034a11.84 11.84 0 00-3.517-8.503z" /></svg>
            </a>
         </div>

         <main className={`relative z-10 overflow-hidden ${isMenuOpen ? 'hidden' : 'block'}`}>
            {/* Clean Hero Section - Matches Screenshot Layout */}
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
                        The Smartest Way to <span className="text-[#1565d8]">Save ₹3,000</span> & Book PTE Fast
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

                  {/* Hero Right: THE FORM */}
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

                              <button type="submit" className="w-full bg-gradient-to-r from-[#1565d8] to-[#091e42] text-white py-3 md:py-4 rounded-xl font-black text-base md:text-lg tracking-wide shadow-xl mt-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                                 Buy Voucher Now <span className="material-icons text-base">arrow_forward</span>
                              </button>

                              {error && <p className="text-center font-bold text-red-500 text-xs mt-2">{error}</p>}
                              <p className="text-center text-[10px] md:text-xs text-slate-400 font-medium uppercase tracking-widest">100% Secure Transaction</p>
                           </form>
                        )}
                     </div>
                  </div>
               </div>
            </header>
            {/* Trust Bar & Video Section Wrapper - Unified Background to eliminate blandness */}
            <div className="bg-[#f0f7ff] relative overflow-hidden -mt-1">
               <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

               {/* Trust Bar - Moving Animation */}
               <div className="py-2.5 relative z-20 overflow-hidden font-body flex items-center shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)] bg-gradient-to-r from-[#091e42] via-[#113a77] to-[#091e42]">
                  <div className="max-w-[1920px] mx-auto w-full flex items-center px-4 md:px-0">
                     {/* Static Left Block */}
                     <div className="hidden md:flex items-center gap-3 pr-8 pl-6 border-r border-[#1565d8]/40 shrink-0 z-30">
                        <span className="text-white text-xl font-black tracking-tight drop-shadow-sm">10k+</span>
                        <span className="text-blue-100 text-xs font-bold tracking-wide whitespace-nowrap">
                           Students Joined
                        </span>
                     </div>

                     {/* Scrolling Marquee Area */}
                     <div className="flex-1 overflow-hidden relative flex items-center pl-4 md:pl-8 mask-image-[linear-gradient(to_right,transparent,black_50px,black_calc(100%-50px),transparent)]">
                        <div className="flex animate-marquee-fast whitespace-nowrap gap-10 md:gap-14 items-center">
                           {[...Array(4)].map((_, i) => (
                              <div key={i} className="flex gap-10 md:gap-14 items-center shrink-0">
                                 {[
                                    { name: "Pearson VUE", icon: "verified" },
                                    { name: "Oxford University", icon: "school" },
                                    { name: "Cambridge Assessment", icon: "menu_book" },
                                    { name: "IDP Global", icon: "public" },
                                    { name: "British Council", icon: "language" },
                                    { name: "PTE Academic", icon: "workspace_premium" }
                                 ].map(brand => (
                                    <div key={brand.name} className="flex items-center gap-2 group cursor-default py-1">
                                       <span className="material-icons text-[#ffcc00] text-[16px] drop-shadow-sm">{brand.icon}</span>
                                       <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-blue-100 group-hover:text-white transition-colors">{brand.name}</span>
                                    </div>
                                 ))}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Video Guide Section - Cinematic Redesign */}
               <section className="py-12 md:py-16 px-4 md:px-6 lg:px-16 bg-[#091e42] relative z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#1565d8]/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

                  <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-20">
                     {/* Cinematic Heading */}
                     <div className="text-center space-y-4 max-w-2xl mb-8 md:mb-10">
                        <div className="inline-flex items-center gap-2 bg-[#1565d8]/20 px-4 py-1.5 rounded-full border border-[#1565d8]/40 backdrop-blur-md shadow-lg">
                           <span className="material-icons text-[12px] md:text-[14px] text-[#ffcc00] animate-pulse">play_circle</span>
                           <span className="text-[10px] md:text-[13px] font-black text-blue-50 tracking-wide">Video Tutorial</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                           Book Your Slot in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#ffcc00]">Under 2 Minutes</span>
                        </h2>
                        <p className="text-xs md:text-sm text-blue-200/70 font-medium leading-relaxed max-w-xl mx-auto">
                           Don't guess where to paste your code. Watch our verified walkthrough to securely apply your voucher and guarantee your exam slot seamlessly.
                        </p>
                     </div>

                     {/* Floating Video Player */}
                     <div className="w-full relative group max-w-3xl mx-auto cursor-pointer">
                        <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#1565d8] to-[#ffcc00] rounded-[1.5rem] md:rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative aspect-video bg-black/50 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-2xl border border-white/10 overflow-hidden">
                           <iframe className="w-full h-full rounded-[1rem] md:rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-opacity duration-700 relative z-20" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Guide" frameBorder="0" allowFullScreen></iframe>
                        </div>
                     </div>

                     {/* Glassmorphism Steps */}
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 w-full max-w-4xl mx-auto">
                        {[
                           { icon: "ads_click", title: "Apply Code", desc: "Paste voucher securely.", color: "text-blue-400" },
                           { icon: "savings", title: "Instant Save", desc: "Fee drops directly to zero.", color: "text-[#ffcc00]" },
                           { icon: "schedule", title: "Select Slot", desc: "Choose optimal date.", color: "text-green-400" },
                           { icon: "verified", title: "Final Step", desc: "Zero extra payments.", color: "text-purple-400" }
                        ].map((item, i) => (
                           <div key={i} className="p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors group">
                              <span className={`material-icons text-xl md:text-2xl ${item.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>{item.icon}</span>
                              <div className="text-left space-y-0.5">
                                 <h4 className="font-black text-white text-xs md:text-sm leading-tight tracking-tight">{item.title}</h4>
                                 <p className="text-[9px] md:text-[10px] text-blue-200/60 font-medium leading-tight">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </section>
            </div>

            {/* The Fryment Advantage - Bento Grid Redesign */}
            <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-[#fafcff] relative z-10">
               <div className="max-w-[1200px] mx-auto space-y-8 md:space-y-10">
                  {/* Section Intro */}
                  <div className="text-center max-w-2xl mx-auto space-y-3">
                     <span className="text-[#1565d8] font-black text-xs md:text-[14px] tracking-wide inline-block mb-1">The Fryment Advantage</span>
                     <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight leading-tight">
                        Focus on the Exam.<br />We'll Handle the Rest.
                     </h2>
                     <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                        India's most trusted partner for PTE Exam Vouchers. We save you time, money, and international transaction stress.
                     </p>
                  </div>

                  {/* Bento Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[280px]">
                     {/* Box 1 - Big Highlight */}
                     <div className="md:col-span-8 bg-gradient-to-br from-[#f0f7ff] to-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden border border-[#1565d8]/10 shadow-sm">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                           <span className="material-icons text-[120px] md:text-[180px] text-[#1565d8] -rotate-12 translate-x-8 -translate-y-8">savings</span>
                        </div>
                        <div className="relative z-10 flex flex-col justify-end md:justify-center h-full max-w-md space-y-3">
                           <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-1">
                              <span className="material-icons text-[#1565d8] text-[20px]">payments</span>
                           </div>
                           <h3 className="text-2xl md:text-3xl font-black text-[#091e42] leading-tight tracking-tight">
                              <span className="text-[#1565d8]">₹2,800+</span><br />Instant Savings
                           </h3>
                           <p className="text-slate-500 font-medium leading-relaxed text-xs md:text-sm">
                              Bypass massive international transaction fees. Get heavily discounted native rates on official PTE registrations instantly.
                           </p>
                        </div>
                     </div>

                     {/* Box 2 - Dark Highlight */}
                     <div className="md:col-span-4 bg-[#091e42] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-end text-white shadow-xl">
                        <div className="absolute top-6 right-6">
                           <div className="w-10 h-10 bg-[#ffcc00] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                              <span className="material-icons text-[#091e42] text-[20px]">bolt</span>
                           </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black mb-2 leading-tight">60 Seconds<br />Delivery</h3>
                        <p className="text-blue-200/70 font-medium text-xs md:text-[13px] leading-relaxed">
                           No stressful waiting periods. Your unique voucher string arrives by securely encrypted email and WhatsApp instantly upon payment.
                        </p>
                     </div>

                     {/* Box 3 - Small Text Focused */}
                     <div className="md:col-span-4 bg-amber-50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-end">
                        <div className="absolute top-6 right-6">
                           <span className="material-icons text-amber-500 text-[40px] opacity-40">verified_user</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-[#091e42] mb-2 leading-tight">100%<br />Legitimate</h3>
                        <p className="text-slate-600 font-medium text-xs md:text-[13px] leading-relaxed">
                           Official Pearson VUE partnered codes. Valid across all certified testing centers worldwide without any document locks or expiries for 12 months.
                        </p>
                     </div>

                     {/* Box 4 - Mixed Image Highlight */}
                     <div className="md:col-span-8 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                        <div className="flex-1 space-y-3 z-10 relative">
                           <div className="inline-flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              <span className="text-[10px] md:text-[11px] font-black text-green-700 tracking-wide">Active Now</span>
                           </div>
                           <h3 className="text-xl md:text-2xl font-black text-[#091e42] leading-tight tracking-tight">Dedicated 24/7 Expert Guidance</h3>
                           <p className="text-slate-500 font-medium text-xs md:text-[13px] leading-relaxed">Questions about your slot? Form filling errors? We have experts ready to guide you step-by-step through WhatsApp or Direct Call.</p>
                        </div>
                        <div className="w-full md:w-[45%] h-32 md:h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative shadow-inner">
                           <img src="/images/support_agent.png" alt="Support" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* WALL OF LOVE TESTIMONIALS */}
            <section className="pt-6 md:pt-8 pb-16 md:pb-24 px-4 md:px-6 lg:px-16 bg-[#fafcff] overflow-hidden">
               <div className="max-w-[1400px] mx-auto text-center mb-12 md:mb-16">
                  {/* Headings */}
                  <div className="mb-8 md:mb-12">
                     <span className="text-[#1565d8] font-black text-[11px] md:text-xs tracking-wide block mb-2">Customer Reviews</span>
                     <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight mb-3 md:mb-4 leading-tight">
                        Why 10,000+ students <br className="hidden md:block" />
                        <span className="relative inline-block italic text-[#1565d8] md:ml-2 mt-1 md:mt-0">
                           trusted us
                           <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#ffcc00]/60 -z-10 rounded-sm transform -rotate-1"></span>
                        </span>
                     </h2>
                     <p className="text-slate-500 font-medium text-xs md:text-sm">Don't take our word for it. Here's what test takers say about Fryment.</p>
                  </div>

                  {/* Rating Platforms */}
                  <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 mb-10">
                     <div className="text-center">
                        <div className="flex items-center gap-1.5 justify-center mb-2">
                           <div className="w-5 h-5 bg-[#ff492c] rounded-full flex items-center justify-center text-white font-bold text-[8px]">G2</div>
                           <span className="font-bold text-sm text-slate-700">G2</span>
                        </div>
                        <div className="font-black text-3xl text-[#091e42]">4.6<span className="text-sm text-slate-400 font-medium">/5</span></div>
                        <div className="text-[10px] text-slate-400 mt-1">(773)</div>
                     </div>
                     <div className="text-center">
                        <div className="flex items-center gap-1.5 justify-center mb-2">
                           <span className="material-icons text-[#00b67a] text-lg">star</span>
                           <span className="font-bold text-sm text-slate-700">Trustpilot</span>
                        </div>
                        <div className="font-black text-3xl text-[#091e42]">4.7<span className="text-sm text-slate-400 font-medium">/5</span></div>
                        <div className="text-[10px] text-slate-400 mt-1">(743)</div>
                     </div>
                     <div className="text-center">
                        <div className="flex items-center gap-1.5 justify-center mb-2">
                           <span className="material-icons text-[#4285F4] text-lg">public</span>
                           <span className="font-bold text-sm text-slate-700">Google</span>
                        </div>
                        <div className="font-black text-3xl text-[#091e42]">4.8<span className="text-sm text-slate-400 font-medium">/5</span></div>
                        <div className="text-[10px] text-slate-400 mt-1">(1.2k)</div>
                     </div>
                  </div>
               </div>

               {/* Marquee Grids */}
               <div className="relative flex flex-col gap-5 md:gap-6 overflow-hidden py-4 md:py-6 max-w-[1920px] mx-auto mask-image-[linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)]">
                  {/* Row 1 */}
                  <div className="flex animate-marquee whitespace-nowrap gap-5 md:gap-6 items-center w-max hover:[animation-play-state:paused]">
                     {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div key={`r1-${i}`} className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-xl md:rounded-2xl border border-slate-100 p-4 md:p-5 shadow-sm flex flex-col gap-2.5 whitespace-normal transition-shadow hover:shadow-md">
                           <div className="flex justify-between items-start">
                              <div className="flex gap-1 text-[#ffcc00] text-sm">
                                 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span>
                              </div>
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                              </svg>
                           </div>
                           <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed">"{t.content}"</p>
                           <div className="flex items-center gap-2.5 pt-3 border-t border-slate-50 mt-1">
                              <img src={t.img} alt={t.name} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover bg-slate-100" />
                              <div>
                                 <p className="font-bold text-[#091e42] text-xs md:text-sm">{t.name}</p>
                                 <p className="text-slate-400 text-[9px] md:text-[10px] font-medium">{t.role}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
                  {/* Row 2 */}
                  <div className="flex animate-marquee-reverse whitespace-nowrap gap-5 md:gap-6 items-center w-max hover:[animation-play-state:paused] mt-2">
                     {[...testimonials].reverse().concat([...testimonials].reverse()).concat([...testimonials].reverse()).map((t, i) => (
                        <div key={`r2-${i}`} className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-xl md:rounded-2xl border border-slate-100 p-4 md:p-5 shadow-sm flex flex-col gap-2.5 whitespace-normal transition-shadow hover:shadow-md">
                           <div className="flex justify-between items-start">
                              <div className="flex gap-1 text-[#ffcc00] text-sm">
                                 <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span>
                              </div>
                              <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                              </svg>
                           </div>
                           <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed">"{t.content}"</p>
                           <div className="flex items-center gap-2.5 pt-3 border-t border-slate-50 mt-1">
                              <img src={t.img} alt={t.name} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover bg-slate-100" />
                              <div>
                                 <p className="font-bold text-[#091e42] text-xs md:text-sm">{t.name}</p>
                                 <p className="text-slate-400 text-[9px] md:text-[10px] font-medium">{t.role}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* PROOF GALLERY */}
            <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-white overflow-hidden">
               <div className="max-w-[1200px] mx-auto text-center mb-10 md:mb-14">
                  <span className="text-[#1565d8] font-black text-[11px] md:text-xs tracking-wide block mb-2">Verified Purchases</span>
                  <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight mb-3 md:mb-4">Live Delivery Proof</h2>
                  <p className="text-slate-500 font-medium text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                     Real unedited screenshots from students who successfully booked their official slots using our platform.
                  </p>
               </div>

               <div className="relative flex flex-col gap-8 md:gap-14 overflow-hidden py-10 max-w-[1920px] mx-auto mask-image-[linear-gradient(to_right,transparent,50px,black_calc(100%-50px),transparent)] md:mask-image-[linear-gradient(to_right,transparent,150px,black_calc(100%-150px),transparent)]">
                  {/* Mixed Row 1 */}
                  <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-8 items-center w-max hover:[animation-play-state:paused]">
                     {[...portraitProofs, ...landscapeProofs, ...portraitProofs, ...landscapeProofs].map((url, i) => {
                        const isPortrait = i % 2 === 0;
                        return (
                           <div key={`mix1-${i}`} className={`${isPortrait ? 'w-[140px] md:w-[200px] aspect-[9/19]' : 'w-[220px] md:w-[320px] aspect-[16/10]'} shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all ${isPortrait ? '-translate-y-3 md:-translate-y-6' : 'translate-y-3 md:translate-y-6'} relative group cursor-pointer`}>
                              {isPortrait && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none z-10"></div>}
                              <img src={url} alt="Delivery Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                           </div>
                        );
                     })}
                  </div>

                  {/* Mixed Row 2 */}
                  <div className="animate-marquee-reverse whitespace-nowrap flex gap-4 md:gap-8 items-center w-max hover:[animation-play-state:paused]">
                     {[...landscapeProofs, ...portraitProofs, ...landscapeProofs, ...portraitProofs].map((url, i) => {
                        const isPortrait = i % 2 !== 0;
                        return (
                           <div key={`mix2-${i}`} className={`${isPortrait ? 'w-[140px] md:w-[200px] aspect-[9/19]' : 'w-[220px] md:w-[320px] aspect-[16/10]'} shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all ${isPortrait ? 'translate-y-3 md:translate-y-6' : '-translate-y-3 md:-translate-y-6'} relative group cursor-pointer`}>
                              {isPortrait && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none z-10"></div>}
                              <img src={url} alt="Delivery Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                           </div>
                        );
                     })}
                  </div>
               </div>
            </section>

            {/* Comparison Section - Redesigned Split Cards */}
            <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-[#fafcff] relative">
               <div className="max-w-[1000px] mx-auto">
                  <div className="text-center mb-12 md:mb-16">
                     <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide block mb-2">Direct Comparison</span>
                     <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight">Why Book With Fryment?</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                     {/* The Bad Way (Others) */}
                     <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm opacity-80 backdrop-blur-sm grayscale-[0.2]">
                        <h3 className="text-slate-400 font-bold mb-6 text-base md:text-lg border-b border-slate-100 pb-3 flex items-center gap-2">
                           <span className="material-icons text-slate-300">block</span>
                           Other Platforms
                        </h3>
                        <div className="space-y-6">
                           {comparisonPoints.map((row, i) => (
                              <div key={`bad-${i}`} className="flex items-start gap-4">
                                 <span className="material-icons text-red-400 text-lg mt-0.5">close</span>
                                 <div>
                                    <p className="text-xs text-slate-400 font-bold mb-1">{row.feature}</p>
                                    <p className="text-sm font-semibold text-slate-600">{row.others}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* The Good Way (Fryment) */}
                     <div className="bg-[#091e42] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden ring-4 ring-[#1565d8]/20 group">
                        {/* Interactive Glow Effects */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1565d8] blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-full"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#1565d8] blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full"></div>

                        <h3 className="text-white font-black mb-6 text-xl md:text-2xl border-b border-white/10 pb-3 flex justify-between items-center relative z-10">
                           Fryment Advantage
                           <span className="text-[#ffcc00] material-icons bg-white/10 p-1.5 rounded-full text-lg shadow-inner">verified</span>
                        </h3>
                        <div className="space-y-6 relative z-10">
                           {comparisonPoints.map((row, i) => (
                              <div key={`good-${i}`} className="flex items-start gap-4">
                                 <span className="material-icons text-[#091e42] bg-[#00b67a] p-0.5 rounded-full text-sm mt-1 shadow-[0_0_10px_rgba(0,182,122,0.5)]">check</span>
                                 <div>
                                    <p className="text-xs text-slate-400/80 font-bold mb-1">{row.feature}</p>
                                    <p className="text-base md:text-lg font-black text-white leading-tight">{row.prestige}</p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* Blogs */}
            <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-white" id="blogs">
               <div className="max-w-[1200px] mx-auto">
                  <div className="flex items-end justify-between mb-8 md:mb-12">
                     <div>
                        <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide block mb-2">Free Guides</span>
                        <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight">PTE Resources</h2>
                     </div>
                     <Link href="/pte/blog" className="text-xs md:text-sm font-bold text-[#1565d8] hover:text-[#091e42] transition-colors flex items-center gap-1 shrink-0">
                        View All <span className="material-icons text-[16px]">arrow_forward</span>
                     </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                     {liveBlogs.map((blog, i) => (
                        <Link href={`/pte/blog/${blog.slug}`} key={i} className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 block">
                           <div className="aspect-video overflow-hidden bg-slate-50">
                              <img
                                 src={blog.feature_img_url || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop'}
                                 className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                 alt={blog.title}
                              />
                           </div>
                           <div className="p-5 md:p-6 space-y-3">
                              <span className="inline-block bg-[#1565d8]/10 text-[#1565d8] text-[10px] md:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full">PTE Guide</span>
                              <h4 className="text-base md:text-lg font-black text-[#091e42] leading-snug line-clamp-2 group-hover:text-[#1565d8] transition-colors">{blog.title}</h4>
                              <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{blog.excerpt || 'Read the full guide on Fryment.'}</p>
                              <div className="flex items-center gap-1 text-[#1565d8] text-xs font-bold pt-1">
                                 Read Article <span className="material-icons text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 md:py-32 px-4 md:px-6 lg:px-16 bg-[#fafcff]" id="faq">
               <div className="max-w-[800px] mx-auto">
                  <div className="text-center mb-10 md:mb-16">
                     <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide block mb-3">Help Center</span>
                     <h2 className="text-3xl md:text-5xl font-black text-[#091e42] tracking-tight">Frequently Asked Questions</h2>
                  </div>

                  <div className="grid gap-3">
                     {faqs.map((faq, idx) => {
                        const isActive = activeFaq === idx;
                        return (
                           <div key={idx} className={`bg-white rounded-xl md:rounded-2xl border transition-all duration-300 ${isActive ? 'border-[#1565d8] shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}>
                              <button onClick={() => setActiveFaq(isActive ? null : idx)} className="w-full text-left px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4 group">
                                 <span className="text-sm md:text-base font-bold text-[#091e42] leading-tight pr-4">{faq.q}</span>
                                 <div className={`w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-[#1565d8] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                    <span className={`material-icons text-[16px] md:text-[20px] transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>{isActive ? 'remove' : 'add'}</span>
                                 </div>
                              </button>
                              <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                 <div className="px-4 md:px-6 pb-4 md:pb-5 text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
                                    {faq.a}
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </section>
         </main>

         {/* Footer - Isolated from Menu */}
         {
            !isMenuOpen && (
               <footer className="bg-[#091e42] pt-16 md:pt-24 px-4 md:px-6 lg:px-16 text-white text-center md:text-left relative z-10 pb-28 md:pb-8">
                  <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                     {/* Brand Info */}
                     <div className="md:col-span-5 space-y-4 md:space-y-6">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                           <div className="w-8 h-8 rounded bg-[#1565d8] flex items-center justify-center shadow-lg"><span className="material-icons text-white text-base">school</span></div>
                           <span className="text-xl md:text-2xl font-black tracking-tight">Fryment</span>
                        </div>
                        <p className="text-white/60 text-sm md:text-base font-medium max-w-sm mx-auto md:mx-0 leading-relaxed">
                           Empowering Indian students with secure, discounted PTE Academic vouchers. Join over 10,000+ successful test takers globally.
                        </p>
                     </div>

                     {/* Links Column 1 */}
                     <div className="md:col-span-2 space-y-4 text-center md:text-left">
                        <h5 className="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/30 mb-2">Company</h5>
                        <ul className="space-y-3">
                           <li><Link href="/" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Home</Link></li>
                           <li><Link href="#purchase" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Buy Voucher</Link></li>
                           <li><Link href="/pte/blog" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">PTE Resources</Link></li>
                           <li><Link href="/about" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">About Us</Link></li>
                        </ul>
                     </div>

                     {/* Links Column 2 */}
                     <div className="md:col-span-2 space-y-4 text-center md:text-left">
                        <h5 className="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/30 mb-2">Legal</h5>
                        <ul className="space-y-3">
                           <li><Link href="/privacy-policy" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Privacy Policy</Link></li>
                           <li><Link href="/terms-and-conditions" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Terms & Conditions</Link></li>
                           <li><Link href="/refund-policy" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Refund Policy</Link></li>
                        </ul>
                     </div>

                     {/* Links Column 3 */}
                     <div className="md:col-span-3 space-y-4 text-left">
                        <h5 className="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/30 mb-2">Support & Contact</h5>
                        <ul className="space-y-3">
                           <li className="flex items-center gap-2 text-white/90 hover:text-[#ffcc00] transition-colors">
                              <span className="material-icons text-[16px] text-[#ffcc00] shrink-0">mail</span>
                              <a href="mailto:hello@fryment.com" className="text-sm font-semibold">hello@fryment.com</a>
                           </li>
                        </ul>
                        <p className="text-xs font-semibold text-white/30 pt-2">24/7 WhatsApp Support</p>
                     </div>
                  </div>

                  <div className="max-w-[1400px] mx-auto mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                     <p className="text-white/40 text-[11px] md:text-xs font-bold text-center md:text-left">© {new Date().getFullYear()} Fryment. All rights reserved.</p>
                     <div className="flex items-center gap-2 text-white/30">
                        <span className="material-icons text-[14px]">security</span>
                        <span className="text-[11px] md:text-xs font-bold">100% Encrypted Payment Checkout</span>
                     </div>
                  </div>
               </footer>
            )
         }

         {/* Sticky Bottom Conversion Bar */}
         <div className={`fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#091e42] via-[#113a77] to-[#091e42] z-50 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-out flex items-center px-4 md:px-8 py-3 md:py-4 border-t border-[#1565d8]/20 ${showStickyBar && !isStickyDismissed ? "translate-y-0" : "translate-y-full"}`}>
            <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full gap-4">
               <div className="flex items-center gap-3 md:gap-4 flex-1">
                  <span className="material-icons text-[#ffcc00] hidden md:block text-2xl">workspace_premium</span>
                  <div>
                     <p className="font-black text-sm md:text-base leading-tight">Secure your PTE Exam Slot today!</p>
                     <p className="font-medium text-[10px] md:text-xs text-blue-100 hidden sm:block mt-0.5">Click below to claim your instant ₹2,800 discount on official registration fees.</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 shrink-0">
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#ffcc00] text-[#091e42] hover:bg-yellow-400 font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-md text-xs md:text-sm tracking-wide transition-colors shadow-sm">
                     Book Now
                  </button>
                  <button onClick={() => setIsStickyDismissed(true)} className="text-white/60 hover:text-white transition-colors flex items-center p-1" aria-label="Dismiss">
                     <span className="material-icons text-[20px] md:text-[24px]">close</span>
                  </button>
               </div>
            </div>
         </div>

         <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes marquee-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes subtle-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes glow-whatsapp { 
          0%, 100% { 
            box-shadow: 0 0 20px rgba(37, 211, 102, 0.4); 
            transform: scale(1);
          } 
          50% { 
            box-shadow: 0 0 50px rgba(37, 211, 102, 0.9); 
            transform: scale(1.1);
          } 
        }
        .animate-marquee { animation: marquee 110s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 110s linear infinite; }
        .animate-marquee-fast { animation: marquee-fast 50s linear infinite; }
        .animate-subtle-bounce { animation: subtle-bounce 3s ease-in-out infinite; }
        .animate-glow-whatsapp { animation: glow-whatsapp 3s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .group:hover .group-hover\\:rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
      </div >
   );
}
