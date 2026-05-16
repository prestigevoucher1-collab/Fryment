"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Zap, CheckCircle2, X, GraduationCap, Globe, CreditCard,
  User, Smartphone, Mail, LocateFixed, Sparkles, ArrowRight, Star,
  Clock, Home, Lock, MessageCircle, BadgeCheck, Laptop, FileText,
  ChevronRight, CheckSquare, Users, TrendingUp, Award, Info, Flame,
  ArrowLeft, ExternalLink, ChevronDown, BarChart2, Timer, BookOpen
} from "lucide-react";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

const PRICING_DATA = {
  "PTE Academic": { actual: 17000, discounted: 14200, savings: 2800 },
  "PTE UKVI": { actual: 17000, discounted: 14200, savings: 2800 },
  "PTE Core": { actual: 17000, discounted: 14200, savings: 2800 },
  "Duolingo English Test": { actual: 4900, discounted: 4200, savings: 700 },
  "TOEFL iBT": { actual: 16900, discounted: 15500, savings: 1400 },
  "GRE General": { actual: 22500, discounted: 20500, savings: 2000 },
};

const FAQS = [
  { q: "How is the Duolingo English Test different from IELTS or TOEFL?", a: "The DET is a fully online, at-home test that takes only 1 hour and costs significantly less than IELTS or TOEFL. Results are available within 48 hours and can be shared with unlimited universities for free. It's ideal for students who want fast, affordable, and convenient certification." },
  { q: "Is the Duolingo English Test accepted in India's top study-abroad destinations?", a: "Yes. Over 4,000 universities in the US, UK, Canada, Australia, Germany, and other countries accept the DET. This includes Ivy League schools, top Canadian colleges, and leading UK institutions." },
  { q: "What is the validity of the Duolingo English Test voucher?", a: "Your Fryment voucher is valid for 21 days from the date of purchase. You must complete your test session within that window. The test result itself is valid for 2 years." },
  { q: "When will I receive the voucher after payment?", a: "Delivery is instant and fully automated. As soon as your payment is confirmed, the voucher code appears on your screen and is sent simultaneously to your WhatsApp and Email." },
  { q: "Can I take the Duolingo English Test from home?", a: "Yes! That's one of the biggest advantages of the DET. You can take it from anywhere using a computer with a webcam and a stable internet connection. No test center required." },
  { q: "What is a good Duolingo English Test score?", a: "Scores range from 10 to 160. Most top universities require 110–120+. An overall score of 120 is considered competitive for admission to the majority of international programs." },
];

const TESTIMONIALS = [
  { name: "Priya Patel", city: "Surat", score: "130/160", exam: "Duolingo DET", text: "I didn't have an international credit card for Duolingo. Paid via UPI here and got the code instantly. Took the test from home the same evening!", rating: 5 },
  { name: "Ravi Sharma", city: "Pune", score: "125/160", exam: "Duolingo DET", text: "Got my voucher code on WhatsApp within 30 seconds. Booked my DET slot immediately. The whole process from payment to test booking took 5 minutes.", rating: 5 },
  { name: "Meera Nair", city: "Kochi", score: "135/160", exam: "Duolingo DET", text: "Fryment saved me ₹700 compared to paying directly on the Duolingo website. No forex fees, just UPI. 100% recommend to anyone preparing for DET.", rating: 5 },
];

const UNIVERSITIES = [
  "Yale University", "Cornell University", "University of Toronto", "University College London",
  "University of Melbourne", "TU Munich", "McGill University", "NYU", "Boston University",
  "King's College London", "University of British Columbia", "Northeastern University",
];

function cn(...classes) { return classes.filter(Boolean).join(" "); }

export default function DuolingoPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", state: "", quantity: "1", examType: "Duolingo English Test" });
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const openModal = () => { setSubmitted(false); setFormStep(1); setError(null); setIsBookingModalOpen(true); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.email || !formData.state) {
        setError("Please complete all details to proceed."); return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) { setError("Please enter a valid 10-digit Indian mobile number."); return; }
      setFormStep(2); setError(null); return;
    }
    setLoading(true); setError(null);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true); setLoading(false);
  };

  const currentPricing = PRICING_DATA[formData.examType] || PRICING_DATA["Duolingo English Test"];

  return (
    <div className="bg-white min-h-screen text-[#0f172a] font-sans selection:bg-amber-200 overflow-x-hidden">

      {/* ── BOOKING MODAL ── */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-[#0f172a]/60 backdrop-blur-md overflow-y-auto pt-24 pb-8">
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden my-auto">

              <button onClick={() => setIsBookingModalOpen(false)} className="absolute top-4 right-4 z-50 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* Modal header — matches landing page teal */}
              <div className="bg-[#0f766e] p-8 text-center relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/20">
                  <Sparkles className="w-3 h-3 text-[#fde047]" /> Save ₹700 Today
                </div>
                <h3 className="text-2xl font-black text-white">Book Duolingo English Test</h3>
                <p className="text-white/70 text-sm mt-1">Instant code via WhatsApp & Email.</p>
              </div>

              <div className="p-8">
                {!submitted && (
                  <div className="flex gap-2 mb-8">
                    <div className={cn("h-1.5 rounded-full transition-all duration-500 w-1/2", formStep >= 1 ? "bg-[#0f766e]" : "bg-slate-100")} />
                    <div className={cn("h-1.5 rounded-full transition-all duration-500 w-1/2", formStep >= 2 ? "bg-[#0f766e]" : "bg-slate-100")} />
                  </div>
                )}

                {submitted ? (
                  <div className="py-12 text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#0f172a]">Booking Initiated!</h3>
                      <p className="text-slate-500 text-sm mt-2">Redirecting to secure payment gateway...</p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Lock className="w-3 h-3" /> SSL Encrypted
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <AnimatePresence mode="wait">
                      {formStep === 1 ? (
                        <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                          {[
                            { icon: User, placeholder: "Student Full Name", key: "fullName", type: "text" },
                            { icon: Smartphone, placeholder: "WhatsApp Number", key: "phone", type: "tel", maxLength: 10 },
                            { icon: Mail, placeholder: "Email Address", key: "email", type: "email" },
                          ].map(({ icon: Icon, placeholder, key, type, maxLength }) => (
                            <div key={key} className="relative">
                              <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                              <input value={formData[key]} onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm bg-slate-50"
                                placeholder={placeholder} type={type} maxLength={maxLength} />
                            </div>
                          ))}
                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <select value={formData.examType} onChange={e => setFormData({ ...formData, examType: e.target.value })}
                                className="w-full pl-9 pr-3 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm bg-slate-50 appearance-none">
                                {Object.keys(PRICING_DATA).map(k => <option key={k} value={k}>{k}</option>)}
                              </select>
                            </div>
                            <div className="relative">
                              <LocateFixed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <select value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })}
                                className="w-full pl-9 pr-3 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm bg-slate-50 appearance-none">
                                <option value="" disabled>State</option>
                                {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                            <div className="flex justify-between text-sm font-medium text-slate-500">
                              <span>Official DET Price</span><span className="line-through">₹{currentPricing.actual.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-emerald-600">
                              <span>Your Savings</span><span>− ₹{currentPricing.savings.toLocaleString()}</span>
                            </div>
                            <div className="border-t border-slate-200 pt-3 flex justify-between font-black text-lg">
                              <span>Fryment Price</span>
                              <span className="text-[#0f766e]">₹{currentPricing.discounted.toLocaleString()}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Number of Vouchers</p>
                            <div className="flex justify-center gap-3">
                              {[1, 2, 3].map(n => (
                                <button key={n} type="button" onClick={() => setFormData({ ...formData, quantity: n.toString() })}
                                  className={cn("w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg transition-all", formData.quantity === n.toString() ? "bg-[#0f766e] text-white shadow-lg scale-105" : "bg-white border border-slate-200 text-slate-400")}>
                                  {n}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="pt-2 space-y-3">
                      <button disabled={loading} type="submit"
                        className="w-full bg-[#0f766e] text-white font-black rounded-xl py-4 hover:bg-[#115e59] transition-colors flex items-center justify-center gap-2">
                        {loading ? "Processing..." : formStep === 1 ? "Continue to Payment →" : "Pay Securely"}
                      </button>
                      {formStep === 2 && (
                        <button type="button" onClick={() => setFormStep(1)} className="w-full text-center text-xs font-bold text-slate-400 hover:text-[#0f766e] transition-colors">
                          ← Edit Details
                        </button>
                      )}
                      {error && <p className="text-center text-red-500 text-xs font-bold bg-red-50 p-2 rounded-lg">{error}</p>}
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 w-full z-[1000] h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#0f766e] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-[#0f172a]">Fryment</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] flex items-center gap-1.5 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Vouchers
            </a>
            <a href="#details" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] transition-colors">Details</a>
            <a href="#how-to-book" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] transition-colors">How to Book</a>
            <a href="#faq" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] transition-colors">FAQ</a>
            <div className="w-px h-6 bg-slate-200" />
            <button onClick={openModal} className="bg-[#0f766e] text-white font-black rounded-xl px-5 py-2.5 hover:bg-[#115e59] transition-colors shadow-lg shadow-teal-700/20">
              Buy Voucher — ₹4,200
            </button>
          </div>
          <button onClick={openModal} className="lg:hidden bg-[#0f766e] text-white font-black rounded-xl px-4 py-2.5 text-sm">Buy Now</button>
        </div>
      </nav>

      <main>

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-0 px-6 overflow-hidden bg-[#f4f7fb]">
          {/* Faded background icon — mirrors landing page hero pattern */}
          <div className="absolute right-0 top-16 translate-x-1/4 opacity-[0.04] pointer-events-none hidden lg:block">
            <GraduationCap className="w-[600px] h-[600px] text-[#0f172a]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-8 pt-6">
              <a href="/" className="hover:text-[#0f172a] transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/" className="hover:text-[#0f172a] transition-colors">Vouchers</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#0f172a] font-bold">Duolingo English Test</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start pb-20">

              {/* Left */}
              <div className="space-y-7">
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full font-bold text-sm">
                    <Sparkles className="w-4 h-4" /> Official Partner Discount
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full font-bold text-sm">
                    <Flame className="w-4 h-4" /> Best Seller
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.1]">
                  Buy Duolingo English Test<br />
                  <span className="text-[#0d9488]">Voucher at ₹4,200</span>
                </h1>

                <p className="text-[15px] md:text-lg text-slate-500 leading-relaxed max-w-xl">
                  India's most trusted source for discounted DET vouchers. Pay in INR via UPI or Card — zero forex charges, instant WhatsApp delivery.
                </p>

                {/* Quick Stats — same card style as landing page exam cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Clock, label: "1 Hour", sub: "Test Duration" },
                    { icon: Zap, label: "48 Hours", sub: "Results" },
                    { icon: Home, label: "At Home", sub: "Test Format" },
                    { icon: Globe, label: "4,000+", sub: "Universities" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={sub} className="bg-white rounded-[20px] p-4 border border-slate-200 shadow-sm text-center hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-[#ccfbf1] text-[#0d9488] rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="font-black text-[#0f172a] text-sm">{label}</p>
                      <p className="text-xs text-slate-400 font-medium">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={openModal} className="bg-[#0f766e] text-white font-semibold text-[15px] rounded-lg px-8 py-3.5 flex items-center gap-2 hover:bg-[#115e59] transition-colors shadow-lg shadow-teal-900/20">
                    Buy Now — ₹4,200 <ArrowRight className="w-5 h-5" />
                  </button>
                  <a href="#details" className="border border-slate-200 text-slate-600 font-bold text-[15px] rounded-lg px-8 py-3.5 hover:bg-white transition-colors">
                    Learn More
                  </a>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-slate-400 font-medium">
                  {[
                    { icon: ShieldCheck, text: "100% Genuine", color: "text-emerald-500" },
                    { icon: Zap, text: "Instant Delivery", color: "text-amber-500" },
                    { icon: Lock, text: "SSL Secured", color: "text-blue-500" },
                  ].map(({ icon: Icon, text, color }) => (
                    <span key={text} className="flex items-center gap-1.5">
                      <Icon className={cn("w-4 h-4", color)} /> {text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Pricing Card (same style as landing exam cards) */}
              <div className="bg-white rounded-[20px] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Save badge — mirrors landing card badges */}
                <div className="absolute top-5 right-5">
                  <div className="bg-[#fde047] text-[#422006] text-[11px] font-black px-2.5 py-1 rounded-sm tracking-wide">SAVE 14%</div>
                </div>

                <div className="w-12 h-12 bg-[#ccfbf1] text-[#0d9488] rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-[#0f172a] mb-1">Duolingo English Test</h3>
                <p className="text-[14px] text-slate-500 mb-6 leading-relaxed">Fast results and affordable online testing from home.</p>

                {/* Pricing row — exact landing page pattern */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-[26px] font-black text-[#0f766e]">₹4,200</span>
                  <span className="text-sm text-slate-400 line-through">₹4,900</span>
                  <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">Save ₹700</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "100% genuine official voucher",
                    "Instant WhatsApp & Email delivery",
                    "Pay in INR — zero forex charges",
                    "Valid 21 days from purchase",
                    "24/7 WhatsApp support",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>

                {/* CTA — matches landing card "Book Now" button */}
                <button onClick={openModal} className="w-full bg-[#0f172a] text-white rounded-xl py-3.5 text-[15px] font-semibold hover:bg-slate-800 transition-colors">
                  Book Now
                </button>

                <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5 mt-4">
                  <Lock className="w-3 h-3" /> Secured by RazorPay · SSL Encrypted
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="py-8 px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Users, text: "50,000+ Students Served" },
              { icon: BadgeCheck, text: "Official Voucher Partner" },
              { icon: Star, text: "4.9★ Average Rating" },
              { icon: Zap, text: "30-Second Delivery" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-white/80 text-sm font-bold">
                <Icon className="w-5 h-5 text-[#2dd4bf]" /> {text}
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT THE TEST ── */}
        <section id="details" className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">About the Exam</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">What is the Duolingo English Test?</h2>
              <p className="text-slate-500 mt-4 leading-relaxed">A modern, AI-powered English proficiency test designed for today's global student — fast, affordable, and globally accepted.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature Cards — same white card style as landing "Why Fryment" section */}
              {[
                { icon: Clock, title: "1 Hour Total", desc: "The entire test — from start to finish — takes about 60 minutes. No scheduling hassle, no long exam days.", color: "text-emerald-500 bg-emerald-50" },
                { icon: Home, title: "Take It From Home", desc: "No test center required. Take it on your laptop with a webcam from anywhere in India.", color: "text-blue-500 bg-blue-50" },
                { icon: Zap, title: "Results in 48 Hours", desc: "Get your score within 2 days. No more waiting weeks for results before applying to universities.", color: "text-amber-500 bg-amber-50" },
                { icon: Globe, title: "Free Score Sharing", desc: "Share your results with unlimited universities at no extra cost — a huge advantage over IELTS/TOEFL.", color: "text-indigo-500 bg-indigo-50" },
                { icon: TrendingUp, title: "Score: 10–160", desc: "Scores reported on a 10–160 scale. Most competitive programs require 110+.", color: "text-rose-500 bg-rose-50" },
                { icon: Award, title: "AI-Adaptive Format", desc: "The test adapts to your level as you go, making it a fair and accurate measure of real-world English ability.", color: "text-violet-500 bg-violet-50" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow flex gap-5">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0", color.split(" ")[1])}>
                    <Icon className={cn("w-6 h-6", color.split(" ")[0])} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-2">{title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Test Format + System Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#0f172a]">Test Format</h3>
                {[
                  { part: "Part 1", title: "Graded Section (45 min)", desc: "Adaptive questions covering Reading, Writing, Listening, and Speaking. Determines your final score.", badge: "Scored", color: "bg-emerald-100 text-emerald-700" },
                  { part: "Part 2", title: "Video Interview (10 min)", desc: "Record a spoken response to open-ended questions. Shared with universities but not graded.", badge: "Unscored", color: "bg-slate-100 text-slate-500" },
                ].map(({ part, title, desc, badge, color }) => (
                  <div key={part} className="bg-white rounded-2xl p-6 border border-slate-100">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{part}</span>
                      <span className={cn("text-xs font-black px-2 py-0.5 rounded-full", color)}>{badge}</span>
                    </div>
                    <h4 className="font-bold text-[#0f172a] mb-2">{title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 h-fit">
                <h4 className="font-bold text-[#0f172a] mb-5 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-[#0f766e]" /> System Requirements
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  {[
                    "Windows 10+ or macOS 10.14+ (no tablets/phones)",
                    "Google Chrome or Microsoft Edge browser",
                    "Working webcam and microphone",
                    "Stable internet connection (5 Mbps+)",
                    "Quiet, well-lit room without other people",
                  ].map(req => (
                    <li key={req} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── UNIVERSITY ACCEPTANCE ── */}
        <section className="py-16 px-6 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto space-y-8 text-center">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Accepted by 4,000+ Global Universities</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {UNIVERSITIES.map(u => (
                <span key={u} className="text-sm font-bold text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full hover:border-[#0f766e]/40 hover:text-[#0f172a] transition-colors">{u}</span>
              ))}
              <span className="text-sm font-bold text-[#0f766e] bg-[#f0fdf9] border border-[#0f766e]/20 px-4 py-2 rounded-full">+3,988 more →</span>
            </div>
          </div>
        </section>

        {/* ── IMPACT METRICS ── (mirrors landing page dark metrics section) */}
        <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Students Helped", color: "text-[#2dd4bf]" },
              { value: "₹700", label: "Avg Savings/Student", color: "text-[#fde047]" },
              { value: "100%", label: "Genuine Vouchers", color: "text-[#818cf8]" },
              { value: "4.9★", label: "Average Rating", color: "text-rose-400" },
            ].map(({ value, label, color }) => (
              <div key={label} className="space-y-3">
                <div className={cn("text-4xl md:text-5xl font-black", color)}>{value}</div>
                <p className="text-slate-400 font-medium text-sm">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW TO BOOK ── */}
        <section id="how-to-book" className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto text-center space-y-14">
            <div>
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#1f2937]">How It Works</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">From payment to exam booking in under 5 minutes. No paperwork, no waiting.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-slate-200 z-0" />
              {[
                { step: "01", icon: CreditCard, title: "Purchase Voucher", desc: "Select Duolingo DET and complete secure INR payment via UPI, Card, or NetBanking." },
                { step: "02", icon: Zap, title: "Instant Delivery", desc: "Your unique voucher code is sent instantly to your WhatsApp and Email." },
                { step: "03", icon: ExternalLink, title: "Go to Duolingo.com", desc: "Visit the official DET website and redeem your voucher code." },
                { step: "04", icon: CheckSquare, title: "Take the Test", desc: "Schedule your window and start the exam from home at your convenience." },
              ].map(({ step, icon: Icon, title, desc }, i) => (
                <div key={step} className="flex flex-col items-center text-center space-y-4 relative z-10">
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

        {/* ── COMPARISON TABLE ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Side by Side</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">DET vs. IELTS vs. TOEFL</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">See why thousands of Indian students are choosing the Duolingo English Test.</p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
                <div className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Feature</div>
                <div className="p-5 text-center text-sm font-black text-[#0f766e] uppercase tracking-wider border-x border-slate-200 bg-[#f0fdf9]">Fryment DET</div>
                <div className="p-5 text-center text-sm font-bold text-slate-400 uppercase tracking-wider border-r border-slate-200">IELTS</div>
                <div className="p-5 text-center text-sm font-bold text-slate-400 uppercase tracking-wider">TOEFL</div>
              </div>
              {[
                { feature: "Fryment Price", det: "₹4,200", ielts: "₹17,000", toefl: "₹15,500" },
                { feature: "Test Duration", det: "1 Hour", ielts: "2h 45m", toefl: "2 Hours" },
                { feature: "Result Time", det: "48 hours", ielts: "13 days", toefl: "6 days" },
                { feature: "At-Home Test", det: true, ielts: false, toefl: false },
                { feature: "Free Score Sharing", det: true, ielts: false, toefl: false },
                { feature: "Validity", det: "2 years", ielts: "2 years", toefl: "2 years" },
                { feature: "UPI Payment", det: "Via Fryment", ielts: false, toefl: false },
              ].map(({ feature, det, ielts, toefl }, i) => (
                <div key={feature} className={cn("grid grid-cols-4 border-b border-slate-100 last:border-b-0", i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                  <div className="p-5 text-sm font-semibold text-slate-700">{feature}</div>
                  <div className="p-5 text-center border-x border-slate-200 bg-[#f0fdf9]/50">
                    {det === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : det === false ? <X className="w-5 h-5 text-slate-300 mx-auto" /> : <span className="text-sm font-black text-[#0f766e]">{det}</span>}
                  </div>
                  <div className="p-5 text-center border-r border-slate-200">
                    {ielts === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : ielts === false ? <X className="w-5 h-5 text-red-400 mx-auto" /> : <span className="text-sm text-slate-500">{ielts}</span>}
                  </div>
                  <div className="p-5 text-center">
                    {toefl === true ? <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" /> : toefl === false ? <X className="w-5 h-5 text-red-400 mx-auto" /> : <span className="text-sm text-slate-500">{toefl}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button onClick={openModal} className="bg-[#0f766e] text-white font-black rounded-xl px-8 py-4 hover:bg-[#115e59] transition-colors shadow-lg shadow-teal-900/20">
                Book at Fryment Price →
              </button>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 px-6 bg-[#f8fafc] border-y border-slate-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest">Student Reviews</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">Loved by Students</h2>
              <div className="flex items-center justify-center gap-2">
                <div className="flex text-amber-400">★★★★★</div>
                <span className="text-sm font-bold text-slate-600">4.9/5 from verified reviews</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                  <div className="flex text-amber-400 mb-5 gap-0.5">
                    {Array(review.rating).fill(null).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed flex-grow mb-6">"{review.text}"</p>
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
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest">Got Questions?</p>
              <h2 className="text-3xl font-black text-[#0f172a]">Frequently Asked Questions</h2>
              <p className="text-slate-500">Everything you need to know about the Duolingo English Test voucher.</p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className={cn("rounded-2xl border overflow-hidden transition-all", activeFaq === i ? "border-[#0f766e]/30 bg-[#f0fdf9]" : "border-slate-100 bg-[#f8fafc]")}>
                  <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left gap-4">
                    <h4 className="text-base font-bold text-[#0f172a]">{faq.q}</h4>
                    <div className={cn("shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all", activeFaq === i ? "bg-[#0f766e] text-white rotate-180" : "bg-white border border-slate-200 text-slate-400")}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── (mirrors landing page CTA section) */}
        <section className="py-24 px-6 bg-[#f4f7fb]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#0f766e]/10 text-[#0f766e] px-4 py-2 rounded-full text-sm font-bold">
              <Flame className="w-4 h-4" /> Limited time — save ₹700 today
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Ready to Book Your<br />Duolingo English Test?
            </h2>
            <p className="text-slate-500 text-lg max-w-lg mx-auto">Join 50,000+ students who've trusted Fryment for genuine, discounted exam vouchers.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={openModal} className="bg-[#0f766e] text-white font-black text-lg rounded-xl px-10 py-4 hover:bg-[#115e59] transition-colors shadow-xl shadow-teal-900/20 flex items-center gap-2">
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

      {/* ── FOOTER ── (matches landing page footer) */}
      <footer className="bg-[#0f172a] text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#0f766e] rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="font-black text-white">Fryment</span>
            <span>· © 2026 Fryment EdTech. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a href="https://wa.me/919325216364" className="fixed bottom-6 right-6 z-[1500] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform shadow-green-500/30">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </a>
    </div>
  );
}