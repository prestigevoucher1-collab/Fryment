"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Zap, MessageCircle, Award, CheckCircle2, Menu, X,
  GraduationCap, ChevronDown, Globe, Clock, Smartphone, ChevronRight,
  User, Mail, LocateFixed, Sparkles, Gift, CreditCard, ArrowRight,
  CheckSquare, Mic, Sigma, Star, TrendingUp, Lock, BadgeCheck,
  HeadphonesIcon, BookOpen, FileText, MapPin, Phone, Send, ChevronUp,
  Flame, Timer, Users, ThumbsUp, BarChart2, Repeat, AlertCircle, Info
} from "lucide-react";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const PRICING_DATA = {
  "PTE Academic": { actual: 17000, discounted: 14200, savings: 2800 },
  "PTE UKVI": { actual: 17000, discounted: 14200, savings: 2800 },
  "PTE Core": { actual: 17000, discounted: 14200, savings: 2800 },
  "Duolingo English Test": { actual: 4900, discounted: 4200, savings: 700 },
  "TOEFL iBT": { actual: 16900, discounted: 15500, savings: 1400 },
  "GRE General": { actual: 22500, discounted: 20500, savings: 2000 },
};

const EXAM_CARDS = [
  { key: "PTE Academic", label: "PTE Academic", badge: "SAVE 15%", badgeColor: "bg-[#fde047] text-[#422006]", icon: CheckSquare, desc: "Accepted worldwide for study and migration.", href: "/pte" },
  { key: "Duolingo English Test", label: "Duolingo DET", badge: "BEST SELLER", badgeColor: "bg-[#fde047] text-[#422006]", icon: Globe, desc: "Fast results and affordable online testing.", href: "/duolingo" },
  { key: "TOEFL iBT", label: "TOEFL iBT", badge: "Limited Stock", badgeColor: "bg-[#f1f5f9] text-[#475569]", icon: Mic, desc: "The gold standard for English proficiency.", href: "/toefl" },
  { key: "GRE General", label: "GRE General", badge: "", badgeColor: "", icon: Sigma, desc: "Path to your dream Master's or MBA.", href: "/gre" },
  { key: "PTE UKVI", label: "PTE UKVI", badge: "UK VISA", badgeColor: "bg-blue-100 text-blue-800", icon: Globe, desc: "Required for UK visa and immigration.", href: "/pte-ukvi" },
  { key: "PTE Core", label: "PTE Core", badge: "CANADA PR", badgeColor: "bg-red-100 text-red-800", icon: CheckSquare, desc: "Essential for Canadian permanent residency.", href: "/pte-core" },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", city: "Ahmedabad", exam: "PTE Academic", score: "79/90", text: "Saved over ₹3000 on my PTE booking. The code arrived on WhatsApp in literally 10 seconds. Highly recommended!", rating: 5 },
  { name: "Priya Patel", city: "Surat", exam: "Duolingo DET", score: "130/160", text: "I didn't have an international credit card for Duolingo. Paid via UPI here and got the code instantly. Super smooth.", rating: 5 },
  { name: "Arjun Reddy", city: "Hyderabad", exam: "TOEFL iBT", score: "112/120", text: "The support team is amazing. They helped me through the entire TOEFL booking process after I bought the voucher.", rating: 5 },
  { name: "Sneha Mehta", city: "Mumbai", exam: "GRE General", score: "332/340", text: "Got my GRE voucher at such a discounted rate. No forex headaches, just simple UPI payment and instant delivery.", rating: 5 },
  { name: "Karan Singh", city: "Delhi", exam: "PTE Academic", score: "82/90", text: "Used Fryment for both my attempts. Saved big both times. Will recommend to every student planning abroad.", rating: 5 },
  { name: "Divya Nair", city: "Kochi", exam: "PTE UKVI", score: "76/90", text: "Needed the UKVI variant and wasn't sure about the process. The Fryment team guided me step by step. Perfect experience.", rating: 5 },
];

const FAQS = [
  { q: "Are these vouchers 100% genuine?", a: "Yes. We are official partners and bulk purchasers of exam vouchers. The codes you receive are generated directly by the official testing authorities — Pearson for PTE, ETS for TOEFL/GRE, and Duolingo for DET. Each voucher comes with a unique code that is exclusively yours." },
  { q: "How long does delivery take?", a: "Delivery is fully automated and instant. As soon as your payment is confirmed, the voucher code is displayed on screen and simultaneously sent to your registered Email and WhatsApp. Most customers receive their code within 30 seconds." },
  { q: "What payment methods are accepted?", a: "We accept all major UPI apps (GPay, PhonePe, Paytm), Net Banking, Debit/Credit Cards (Visa, Mastercard, Rupay), and EMI options. All transactions are in INR — no forex charges, no international transaction fees." },
  { q: "What is the validity of the voucher?", a: "Validity varies by exam. PTE vouchers are valid for 11 months, TOEFL for 12 months, Duolingo for 21 days, and GRE for 12 months from the date of purchase. We recommend booking your test slot promptly after purchase." },
  { q: "Can I use the voucher at any test center?", a: "Yes. Our vouchers are official and can be used to book at any Pearson VUE (for PTE), ETS (for TOEFL/GRE), or Prometric authorized test center across India or globally." },
  { q: "What if I don't receive my voucher?", a: "In the rare event of a delivery failure (network issues, etc.), our 24/7 support team will resolve it within 15 minutes. You can reach us instantly via WhatsApp at +91 93252 16364." },
  { q: "Can I get a refund if I don't use it?", a: "As these are unique digital codes, we cannot offer refunds once a code has been successfully delivered. However, if there's a technical issue on our end, we will replace your voucher immediately. Please read our full refund policy for details." },
  { q: "Do you offer bulk discounts for coaching institutes?", a: "Yes! We offer special bulk pricing for coaching institutes, universities, and study abroad consultants purchasing 10+ vouchers. Contact us on WhatsApp for a customized quote." },
];

const COMPARISON_ROWS = [
  { feature: "Price", fryment: "₹14,200", official: "₹17,000" },
  { feature: "Payment in INR", fryment: true, official: false },
  { feature: "UPI / NetBanking", fryment: true, official: false },
  { feature: "Instant Delivery", fryment: true, official: "2–3 days" },
  { feature: "WhatsApp Support", fryment: true, official: false },
  { feature: "Free Mock Tests", fryment: true, official: false },
  { feature: "Forex Markup", fryment: "None", official: "2–3.5%" },
];

const BLOG_POSTS = [
  { title: "PTE vs TOEFL: Which Exam is Right for You in 2026?", excerpt: "A comprehensive comparison of scoring, acceptance, difficulty, and cost to help you choose the right English proficiency test.", tag: "Guide", date: "May 12, 2026", readTime: "8 min" },
  { title: "How to Book PTE Academic Online: Step-by-Step Guide", excerpt: "From registering on the Pearson portal to selecting your test date — everything you need to do after receiving your voucher.", tag: "Tutorial", date: "May 8, 2026", readTime: "5 min" },
  { title: "Top 10 Universities That Accept Duolingo English Test in 2026", excerpt: "The DET is gaining rapid global acceptance. Here are 10 top-ranked universities that now accept your Duolingo score.", tag: "News", date: "May 3, 2026", readTime: "6 min" },
];

function cn(...classes) { return classes.filter(Boolean).join(" "); }

export default function FrymentLanding() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", state: "", quantity: "1", examType: "PTE Academic" });
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [liveCount, setLiveCount] = useState(47);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.email || !formData.state) {
        setError("Please complete all details to proceed.");
        return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
        setError("Please enter a valid 10-digit Indian mobile number.");
        return;
      }
      setFormStep(2);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const openBookingModal = (examType = "PTE Academic") => {
    setFormData(prev => ({ ...prev, examType }));
    setSubmitted(false);
    setFormStep(1);
    setError(null);
    setIsBookingModalOpen(true);
  };

  const currentPricing = PRICING_DATA[formData.examType] || PRICING_DATA["PTE Academic"];
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);
  const visibleTestimonials = TESTIMONIALS.slice(activeTestimonialPage * testimonialsPerPage, (activeTestimonialPage + 1) * testimonialsPerPage);

  return (
    <div className="bg-white min-h-screen text-[#0f172a] overflow-x-hidden font-sans selection:bg-amber-200 selection:text-[#0f172a]">

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-[#0f172a]/60 backdrop-blur-md overflow-y-auto pt-24 pb-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden my-auto"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-[#0f766e] p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/20">
                  <Sparkles className="w-3 h-3 text-[#fde047]" /> Special Offer
                </div>
                <h3 className="text-2xl font-black text-white">Book Your Voucher</h3>
                <p className="text-white/70 text-sm font-medium mt-1">Code delivered instantly via WhatsApp & Email.</p>
              </div>

              <div className="p-8">
                {!submitted && (
                  <div className="flex items-center gap-2 mb-8">
                    <div className={cn("h-1.5 rounded-full transition-all duration-500 w-1/2", formStep >= 1 ? "bg-[#0f766e]" : "bg-slate-100")} />
                    <div className={cn("h-1.5 rounded-full transition-all duration-500 w-1/2", formStep >= 2 ? "bg-[#0f766e]" : "bg-slate-100")} />
                  </div>
                )}

                {submitted ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-[#0f172a]">Booking Initiated!</h3>
                      <p className="text-slate-500 text-sm">Redirecting to secure payment gateway...</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Lock className="w-3 h-3" /> SSL Encrypted Connection
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <AnimatePresence mode="wait">
                      {formStep === 1 ? (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                          <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm" placeholder="Student Full Name" />
                          </div>
                          <div className="relative group">
                            <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm" placeholder="WhatsApp Number" maxLength={10} />
                          </div>
                          <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm" placeholder="Email Address" type="email" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                              <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <select value={formData.examType} onChange={e => setFormData({ ...formData, examType: e.target.value })} className="w-full pl-9 pr-3 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm appearance-none bg-white">
                                {Object.keys(PRICING_DATA).map(k => <option key={k} value={k}>{k}</option>)}
                              </select>
                            </div>
                            <div className="relative">
                              <LocateFixed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <select value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} className="w-full pl-9 pr-3 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm appearance-none bg-white">
                                <option value="" disabled>State</option>
                                {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4">
                            <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                              <span>Official Exam Fee</span>
                              <span className="line-through">₹{currentPricing.actual.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-emerald-600">You Save</span>
                              <span className="text-sm font-bold text-emerald-600">- ₹{currentPricing.savings.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-slate-200 pt-4 flex justify-between items-center text-lg font-black text-[#0f172a]">
                              <span>Fryment Price</span>
                              <span className="text-[#0f766e]">₹{currentPricing.discounted.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Number of Vouchers</p>
                            <div className="flex justify-center gap-3">
                              {[1, 2, 3].map(n => (
                                <button key={n} type="button" onClick={() => setFormData({ ...formData, quantity: n.toString() })} className={cn("w-14 h-14 rounded-xl flex items-center justify-center font-black transition-all text-lg", formData.quantity === n.toString() ? "bg-[#0f766e] text-white shadow-lg scale-105" : "bg-white border border-slate-200 text-slate-400")}>
                                  {n}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-2">
                      <button disabled={loading} type="submit" className="w-full bg-[#0f766e] text-white font-black rounded-xl py-4 text-base hover:bg-[#115e59] transition-colors flex items-center justify-center gap-2">
                        {loading ? "Processing..." : formStep === 1 ? "Continue to Payment →" : "Pay Securely"}
                      </button>
                      {formStep === 2 && (
                        <button type="button" onClick={() => setFormStep(1)} className="w-full text-center mt-4 text-xs font-bold text-slate-400 hover:text-[#0f766e] transition-colors">
                          ← Edit Details
                        </button>
                      )}
                      {error && <p className="text-center font-bold text-red-500 text-xs mt-3 bg-red-50 p-2 rounded-lg">{error}</p>}
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[1000] h-20 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
      )}>
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0f766e] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-[#0f172a]">Fryment</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {[["Vouchers", "#vouchers"], ["Compare", "#compare"], ["How to Book", "#how-to-book"], ["Testimonials", "#testimonials"], ["Blog", "#blog"], ["FAQ", "#faq"]].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-bold text-slate-600 hover:text-[#0f766e] transition-colors">{label}</a>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-2" />
            <button onClick={() => openBookingModal()} className="bg-[#0f766e] text-white font-black rounded-xl px-5 py-2.5 hover:bg-[#115e59] transition-colors shadow-lg shadow-teal-700/20">
              Buy Voucher
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-[#0f172a] hover:bg-slate-50 rounded-xl transition-colors">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-[1001] bg-white lg:hidden flex flex-col">
            <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
              <span className="text-2xl font-black text-[#0f172a] flex items-center gap-2"><GraduationCap className="w-6 h-6 text-[#0f766e]" /> Fryment</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-400 hover:text-[#0f172a] bg-slate-50 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 p-8 space-y-2 overflow-y-auto">
              {["Vouchers", "Compare", "How to Book", "Testimonials", "Blog", "FAQ"].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="flex items-center justify-between text-xl font-black text-[#0f172a] p-4 rounded-2xl hover:bg-slate-50 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item} <ChevronRight className="w-5 h-5 text-slate-300" />
                </a>
              ))}
            </div>
            <div className="p-8 border-t border-slate-100">
              <button onClick={() => { setIsMenuOpen(false); openBookingModal(); }} className="w-full bg-[#0f766e] text-white font-black rounded-xl py-4 text-lg hover:bg-[#115e59] transition-colors shadow-lg flex justify-center items-center gap-2">
                Buy Voucher
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#f4f7fb]">
          <div className="absolute right-0 top-20 translate-x-1/4 opacity-[0.04] pointer-events-none hidden lg:block">
            <GraduationCap className="w-[700px] h-[700px] text-[#0f172a]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl space-y-6 pt-4">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#0f172a] leading-[1.1]">
                Affordable Exam Vouchers,<br />
                <span className="text-[#0d9488]">Delivered Instantly</span>
              </h1>
              <p className="text-[15px] md:text-lg text-slate-500 leading-relaxed max-w-xl">
                India's most trusted platform for PTE, Duolingo, TOEFL, and GRE voucher codes. Save big on your certification — pay in INR, no forex markup.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {[
                  { icon: ShieldCheck, text: "100% Genuine Codes", color: "text-emerald-600" },
                  { icon: Zap, text: "Instant Delivery", color: "text-amber-500" },
                  { icon: Users, text: "50,000+ Students", color: "text-blue-600" },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-1.5 bg-white text-slate-700 border border-slate-200 rounded-full px-3 py-1.5 text-sm font-medium shadow-sm">
                    <Icon className={cn("w-4 h-4", color)} /> {text}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button onClick={() => openBookingModal()} className="bg-[#0f766e] text-white font-semibold text-[15px] rounded-lg px-8 py-3.5 flex items-center gap-2 hover:bg-[#115e59] transition-colors shadow-lg shadow-teal-900/20">
                  Explore All Vouchers <ArrowRight className="w-5 h-5" />
                </button>
                <div className="bg-[#eef2ff] text-[#1e40af] font-bold text-[14px] rounded-full px-6 py-3.5 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#3b82f6]" /> Official Partner Discounts
                </div>
              </div>
            </div>

            {/* EXAM CARDS — 6 cards, 3-col on lg */}
            <div id="vouchers" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-24">
              {EXAM_CARDS.map(({ key, label, badge, badgeColor, icon: Icon, desc, href }) => {
                const pricing = PRICING_DATA[key];
                return (
                  <div key={key} className="bg-white rounded-[20px] p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-[#ccfbf1] text-[#0d9488] rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      {badge && <div className={cn("text-[11px] font-black px-2.5 py-1 rounded-sm tracking-wide", badgeColor)}>{badge}</div>}
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-1">{label}</h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-grow">{desc}</p>
                    {pricing && (
                      <div className="mb-5 flex items-center gap-3">
                        <span className="text-[22px] font-black text-[#0f766e]">₹{pricing.discounted.toLocaleString()}</span>
                        <span className="text-sm text-slate-400 line-through">₹{pricing.actual.toLocaleString()}</span>
                        <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">Save ₹{pricing.savings.toLocaleString()}</span>
                      </div>
                    )}
                    <Link href={href} className="w-full bg-[#0f172a] text-white rounded-xl py-3.5 text-[15px] font-semibold hover:bg-slate-800 transition-colors mt-auto text-center block">
                      View Details
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* MARQUEE — University logos */}
        <section className="py-14 px-6 bg-white border-y border-slate-100 overflow-hidden">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Exams Accepted By 4,000+ Global Universities</p>
          <div className="flex gap-16 items-center animate-none" style={{ display: 'flex', gap: '4rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', opacity: 0.4, filter: 'grayscale(1)' }}>
            {["Harvard", "Stanford", "Oxford", "MIT", "Cambridge", "Yale", "Cornell", "Columbia", "Toronto", "Melbourne"].map(u => (
              <span key={u} className="text-xl font-black text-slate-900 whitespace-nowrap">{u}</span>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-to-book" className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto text-center space-y-14">
            <div>
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1f2937]">How It Works</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">From payment to exam booking in under 5 minutes. No paperwork, no waiting.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* connector line */}
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-slate-200 z-0" />
              {[
                { step: "01", title: "Select Your Exam", desc: "Choose from PTE, Duolingo, TOEFL, or GRE and select the number of vouchers.", icon: CheckSquare },
                { step: "02", title: "Enter Your Details", desc: "Fill in your name, WhatsApp number, email, and state. Takes under a minute.", icon: User },
                { step: "03", title: "Pay Securely in INR", desc: "Complete payment via UPI, NetBanking, or Card. No forex charges ever.", icon: CreditCard },
                { step: "04", title: "Get Code Instantly", desc: "Your voucher code is delivered to your WhatsApp and Email within seconds.", icon: Zap },
              ].map(({ step, title, desc, icon: Icon }, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-md text-[#0f766e]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-black text-slate-300 tracking-widest">{step}</span>
                  <h3 className="text-lg font-bold text-[#1f2937]">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT METRICS */}
        <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white">Trusted by India's Top Students</h2>
              <p className="text-slate-400 mt-3">Numbers that speak for themselves.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50K+", label: "Students Helped", color: "text-[#2dd4bf]" },
                { value: "₹5Cr+", label: "Money Saved", color: "text-[#fde047]" },
                { value: "100%", label: "Genuine Vouchers", color: "text-[#818cf8]" },
                { value: "4.9★", label: "Average Rating", color: "text-rose-400" },
              ].map(({ value, label, color }) => (
                <div key={label} className="space-y-3">
                  <div className={cn("text-4xl md:text-5xl font-black", color)}>{value}</div>
                  <p className="text-slate-400 font-medium text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section id="compare" className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Side by Side</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Fryment vs. Official Website</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">See exactly how much you save and what extra you get when you book through us.</p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                <div className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Feature</div>
                <div className="p-5 text-center text-sm font-black text-[#0f766e] uppercase tracking-wider border-x border-slate-200 bg-[#f0fdf9]">Fryment</div>
                <div className="p-5 text-center text-sm font-bold text-slate-400 uppercase tracking-wider">Official Site</div>
              </div>
              {COMPARISON_ROWS.map(({ feature, fryment, official }, i) => (
                <div key={i} className={cn("grid grid-cols-3 border-b border-slate-100 last:border-b-0", i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                  <div className="p-5 text-sm font-semibold text-slate-700">{feature}</div>
                  <div className="p-5 text-center border-x border-slate-200 bg-[#f0fdf9]/50">
                    {fryment === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : fryment === false ? <X className="w-5 h-5 text-slate-300 mx-auto" /> : <span className="text-sm font-bold text-[#0f766e]">{fryment}</span>}
                  </div>
                  <div className="p-5 text-center">
                    {official === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : official === false ? <X className="w-5 h-5 text-red-400 mx-auto" /> : <span className="text-sm text-slate-500">{official}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={() => openBookingModal()} className="bg-[#0f766e] text-white font-black rounded-xl px-8 py-4 hover:bg-[#115e59] transition-colors shadow-lg">
                Book at Fryment Price →
              </button>
            </div>
          </div>
        </section>

        {/* WHY FRYMENT */}
        <section className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest">Why Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Why Fryment is India's #1 Choice</h2>
              <p className="text-lg text-slate-500">We eliminate the hassle of international payments and high forex markups.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Lowest Price Guarantee", desc: "We bulk purchase official vouchers to pass the highest discount directly to you. If you find a lower price, we'll match it.", icon: <ShieldCheck className="w-6 h-6 text-emerald-500" /> },
                { title: "Zero Forex Markup", desc: "Pay in INR via UPI, NetBanking, or Cards without any hidden international transaction fees — ever.", icon: <CreditCard className="w-6 h-6 text-blue-500" /> },
                { title: "Instant WhatsApp Delivery", desc: "No waiting. Your 100% genuine code is sent immediately to your email and WhatsApp within seconds of payment.", icon: <Zap className="w-6 h-6 text-amber-500" /> },
                { title: "Valid Across India & Globe", desc: "Our vouchers are official and valid for booking at any authorized test center across India or internationally.", icon: <Globe className="w-6 h-6 text-indigo-500" /> },
                { title: "24/7 Priority Support", desc: "Stuck somewhere? Our expert team is available round-the-clock via WhatsApp to guide you through the entire process.", icon: <MessageCircle className="w-6 h-6 text-rose-500" /> },
                { title: "Free Mock Tests Included", desc: "Get complimentary access to premium mock tests with select vouchers — designed by experts to maximize your score.", icon: <GraduationCap className="w-6 h-6 text-teal-500" /> },
                { title: "Bulk Purchase for Institutes", desc: "Special rates for coaching centers, universities, and study abroad consultants buying 10+ vouchers at a time.", icon: <Users className="w-6 h-6 text-violet-500" /> },
                { title: "Transparent Refund Policy", desc: "Clear, no-nonsense policies. If there's a technical issue on our end, we resolve or replace your voucher immediately.", icon: <FileText className="w-6 h-6 text-orange-500" /> },
                { title: "Verified by 50,000+ Students", desc: "Thousands of successful exam bookings and a 4.9-star average rating from verified student reviews across India.", icon: <Star className="w-6 h-6 text-yellow-500" /> },
              ].map((feat, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-slate-100">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">{feat.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXAM ELIGIBILITY / INFO SECTION */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Exam Guide</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Which Exam Is Right for You?</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">Different exams serve different goals. Here's a quick breakdown to help you decide.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border border-slate-200 rounded-xl">
                    <th className="text-left p-4 font-bold text-slate-600 rounded-tl-xl">Exam</th>
                    <th className="text-left p-4 font-bold text-slate-600">Purpose</th>
                    <th className="text-left p-4 font-bold text-slate-600">Result Time</th>
                    <th className="text-left p-4 font-bold text-slate-600">Validity</th>
                    <th className="text-left p-4 font-bold text-slate-600">Fryment Price</th>
                    <th className="text-left p-4 font-bold text-slate-600 rounded-tr-xl">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { exam: "PTE Academic", purpose: "Study & Migration (Global)", result: "48 hours", validity: "2 years", price: "₹14,200" },
                    { exam: "Duolingo DET", purpose: "Study (US/Canada/UK)", result: "2 days", validity: "2 years", price: "₹4,200" },
                    { exam: "TOEFL iBT", purpose: "Study (US focus)", result: "6 days", validity: "2 years", price: "₹15,500" },
                    { exam: "GRE General", purpose: "Grad School / MBA", result: "10–15 days", validity: "5 years", price: "₹20,500" },
                    { exam: "PTE UKVI", purpose: "UK Visa & Immigration", result: "48 hours", validity: "As per visa", price: "₹14,200" },
                    { exam: "PTE Core", purpose: "Canada PR & Work Permit", result: "48 hours", validity: "2 years", price: "₹14,200" },
                  ].map(({ exam, purpose, result, validity, price }) => (
                    <tr key={exam} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-[#0f172a]">{exam}</td>
                      <td className="p-4 text-slate-500">{purpose}</td>
                      <td className="p-4 text-slate-500">{result}</td>
                      <td className="p-4 text-slate-500">{validity}</td>
                      <td className="p-4 font-black text-[#0f766e]">{price}</td>
                      <td className="p-4">
                        <button onClick={() => openBookingModal(exam)} className="text-xs font-black text-[#0f766e] border border-[#0f766e] rounded-lg px-3 py-1.5 hover:bg-[#0f766e] hover:text-white transition-colors">
                          Book →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 px-6 bg-[#f8fafc] border-y border-slate-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest">Student Reviews</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Loved by 50,000+ Students</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex text-amber-400">★★★★★</div>
                <span className="text-sm font-bold text-slate-600">4.9/5 from 12,400+ verified reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visibleTestimonials.map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                  <div className="flex text-amber-400 mb-5 gap-0.5">
                    {Array(review.rating).fill(null).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow">"{review.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-500 text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f172a] text-sm">{review.name}</h4>
                        <p className="text-xs text-slate-400">{review.city} · {review.exam}</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 text-xs font-black px-2 py-1 rounded-lg">{review.score}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3">
              {Array(totalPages).fill(null).map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonialPage(i)} className={cn("w-2.5 h-2.5 rounded-full transition-all", i === activeTestimonialPage ? "bg-[#0f766e] w-6" : "bg-slate-300 hover:bg-slate-400")} />
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section id="blog" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-14">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">From Our Experts</p>
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Exam Prep Resources</h2>
                <p className="text-slate-500 mt-2">Free guides, tips, and news to help you ace your exam.</p>
              </div>
              <a href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#0f766e] hover:underline">
                View All Articles <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post, i) => (
                <div key={i} className="group bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="bg-slate-200 h-44 flex items-center justify-center group-hover:bg-slate-300 transition-colors">
                    <BookOpen className="w-12 h-12 text-slate-400" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-[#0f766e] bg-[#f0fdf9] px-2 py-0.5 rounded-full">{post.tag}</span>
                      <span className="text-xs text-slate-400">{post.date} · {post.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a] leading-snug group-hover:text-[#0f766e] transition-colors">{post.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-[#0f766e] text-sm font-bold pt-2">
                      Read More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / SUPPORT STRIP */}
        <section className="py-16 px-6 bg-[#0f172a] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <MessageCircle className="w-7 h-7 text-[#2dd4bf]" />, title: "WhatsApp Support", desc: "Chat with our team 24/7 for instant help.", action: "Message Us", href: "https://wa.me/919325216364" },
                { icon: <Mail className="w-7 h-7 text-[#818cf8]" />, title: "Email Support", desc: "Send us a message and we'll reply within 2 hours.", action: "Email Us", href: "mailto:support@fryment.in" },
                { icon: <Phone className="w-7 h-7 text-[#fde047]" />, title: "Call Us", desc: "Talk to a real person Monday–Saturday, 9AM–8PM.", action: "Call Now", href: "tel:+919325216364" },
              ].map(({ icon, title, desc, action, href }) => (
                <a key={title} href={href} className="group flex items-start gap-5 p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors">
                  <div className="mt-1 shrink-0">{icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                    <p className="text-slate-400 text-sm mb-3">{desc}</p>
                    <span className="text-xs font-black text-white/60 group-hover:text-white transition-colors uppercase tracking-widest">{action} →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest">Got Questions?</p>
              <h2 className="text-3xl font-black text-[#0f172a]">Frequently Asked Questions</h2>
              <p className="text-slate-500">Everything you need to know before buying your voucher.</p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className={cn("rounded-2xl border transition-all duration-200 overflow-hidden", activeFaq === i ? "border-[#0f766e]/30 bg-[#f0fdf9]" : "border-slate-100 bg-[#f8fafc]")}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left gap-4">
                    <h4 className="text-base font-bold text-[#0f172a]">{faq.q}</h4>
                    <div className={cn("shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all", activeFaq === i ? "bg-[#0f766e] text-white rotate-180" : "bg-white border border-slate-200 text-slate-400")}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <p className="px-6 pb-6 text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-6 bg-[#f4f7fb]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#0f766e]/10 text-[#0f766e] px-4 py-2 rounded-full text-sm font-bold">
              <Flame className="w-4 h-4" /> Limited time — save up to ₹2,800 today
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Ready to Save on<br />Your Exam Booking?
            </h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto">Join 50,000+ students who've trusted Fryment for genuine, discounted exam vouchers.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => openBookingModal()} className="bg-[#0f766e] text-white font-black text-lg rounded-xl px-10 py-4 hover:bg-[#115e59] transition-colors shadow-xl shadow-teal-900/20 flex items-center gap-2">
                Get Your Voucher Now <ArrowRight className="w-5 h-5" />
              </button>
              <a href="https://wa.me/919325216364" className="font-bold text-[#0f172a] border border-slate-300 rounded-xl px-8 py-4 hover:bg-white transition-colors text-sm flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> Ask on WhatsApp
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Genuine</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-500" /> Instant Delivery</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-blue-500" /> SSL Secured</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-violet-500" /> Official Partner</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] text-slate-400 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0f766e] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-white">Fryment</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400 max-w-xs">India's most trusted platform for discounted PTE, TOEFL, GRE, and Duolingo exam vouchers. Pay in INR, get code instantly.</p>
              <div className="flex gap-4">
                <a href="https://wa.me/919325216364" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </a>
                <a href="mailto:support@fryment.in" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Vouchers</h4>
              <ul className="space-y-2 text-sm">
                {["PTE Academic", "PTE UKVI", "PTE Core", "Duolingo DET", "TOEFL iBT", "GRE General"].map(v => (
                  <li key={v}><a href="#" className="hover:text-white transition-colors">{v}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-sm">
                {["About Us", "Blog", "Contact", "Privacy Policy", "Terms of Service", "Refund Policy"].map(v => (
                  <li key={v}><a href="#" className="hover:text-white transition-colors">{v}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919325216364" className="fixed bottom-6 right-6 z-[1500] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform shadow-green-500/30">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a>
    </div>
  );
}