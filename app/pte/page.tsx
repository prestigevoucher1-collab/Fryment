"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Zap, CheckCircle2, X, GraduationCap, Globe, CreditCard,
  User, Smartphone, Mail, LocateFixed, Sparkles, ArrowRight, Star,
  Clock, Home, BarChart2, BookOpen, ChevronDown, Lock, MessageCircle,
  BadgeCheck, Laptop, Timer, FileText, ChevronRight, CheckSquare,
  Users, TrendingUp, Award, Mic, Info, ArrowLeft, ExternalLink, Flame
} from "lucide-react";

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal"
];

const PRICING_DATA = {
  "PTE Academic": { actual: 17000, discounted: 14200 },
  "PTE UKVI": { actual: 17000, discounted: 14200 },
  "PTE Core": { actual: 17000, discounted: 14200 },
  "PTE Academic": { actual: 17000, discounted: 14200 },
  "TOEFL iBT": { actual: 16900, discounted: 15500 },
  "GRE General": { actual: 22500, discounted: 20500 },
};

const FAQS = [
  { q: "How is PTE Academic different from IELTS?", a: "PTE is entirely computer-based and marked by AI, removing human bias. You get results typically within 48 hours, which is much faster than the 13 days for paper-based IELTS." },
  { q: "Is PTE Academic accepted in Australia and UK?", a: "Yes, PTE Academic is accepted by 100% of Australian and New Zealand universities, and for all UK visa and immigration applications." },
  { q: "What is the validity of the PTE voucher?", a: "Your Fryment voucher is valid for 11 months from the date of purchase. You must book your test session within that window." },
  { q: "When will I receive the voucher after payment?", a: "Delivery is instant and fully automated. As soon as your payment is confirmed, the voucher code appears on your screen and is sent simultaneously to your WhatsApp and Email." },
  { q: "Where can I take the PTE Academic test?", a: "You can take the test at any authorized Pearson VUE test center across India." }
  ,
  { q: "How is the PTE Academic different from IELTS or TOEFL?", a: "The PTE is a fully online, at-home test that takes only 1 hour and costs significantly less than IELTS or TOEFL. Results are available within 48 hours and can be shared with unlimited universities for free. It's ideal for students who want fast, affordable, and convenient certification." },
  { q: "Is the PTE Academic accepted in India's top study-abroad destinations?", a: "Yes. Over 4,000 universities in the US, UK, Canada, Australia, Germany, and other countries accept the PTE. This includes Ivy League schools, top Canadian colleges, and leading UK institutions." },
  { q: "What is the validity of the PTE Academic voucher?", a: "Your Fryment voucher is valid for 21 days from the date of purchase. You must complete your test session within that window. The test result itself is valid for 2 years." },
  { q: "When will I receive the voucher after payment?", a: "Delivery is instant and fully automated. As soon as your payment is confirmed, the voucher code appears on your screen and is sent simultaneously to your WhatsApp and Email." },
  { q: "Can I take the PTE Academic from home?", a: "Yes! That's one of the biggest advantages of the PTE. You can take it from anywhere using a computer with a webcam and a stable internet connection. No test center required." },
  { q: "What is a good PTE Academic score?", a: "Scores range from 10 to 160. Most top universities require 110–120+. An overall score of 120 is considered competitive for admission to the majority of international programs." },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", city: "Ahmedabad", score: "79/90", text: "Saved over ₹2800 on my PTE booking. The code arrived on WhatsApp in literally 10 seconds. Highly recommended!", rating: 5 },
  { name: "Karan Singh", city: "Delhi", score: "82/90", text: "Used Fryment for both my attempts. Saved big both times. Will recommend to every student planning abroad.", rating: 5 },
  { name: "Anjali Desai", city: "Mumbai", score: "88/90", text: "Very smooth process. Paid via UPI and immediately used the code on the Pearson website to book my slot for the next day.", rating: 5 }
  ,
  { name: "Priya Patel", city: "Surat", score: "130/160", text: "I didn't have an international credit card for PTE. Paid via UPI here and got the code instantly. Took the test from home the same evening!", rating: 5 },
  { name: "Ravi Sharma", city: "Pune", score: "125/160", text: "Got my voucher code on WhatsApp within 30 seconds. Booked my PTE slot immediately. The whole process from payment to test booking took 5 minutes.", rating: 5 },
  { name: "Meera Nair", city: "Kochi", score: "135/160", text: "Fryment saved me ₹2,800 compared to paying directly on the PTE website. No forex fees, just UPI. 100% recommend to anyone preparing for PTE.", rating: 5 },
];

const SCORE_BREAKDOWN = [
  { skill: "Speaking", desc: "Oral fluency and pronunciation", color: "bg-blue-500", width: "w-[85%]" },
  { skill: "Writing", desc: "Grammar, spelling, and vocabulary", color: "bg-teal-500", width: "w-[80%]" },
  { skill: "Reading", desc: "Comprehension and filling blanks", color: "bg-violet-500", width: "w-[75%]" },
  { skill: "Listening", desc: "Understanding spoken English", color: "bg-amber-500", width: "w-[78%]" }
]; //

const UNIVERSITIES = [
  "Harvard University", "Yale University", "INSEAD", "London Business School",
  "University of Melbourne", "University of Sydney", "University of Toronto",
  "McGill University", "NYU", "King's College London", "Oxford University"
  ,
  "Yale University", "Cornell University", "University of Toronto", "University College London",
  "University of Melbourne", "TU Munich", "McGill University", "NYU", "Boston University", "King's College London",
  "University of British Columbia", "Northeastern University",
];

function cn(...classes) { return classes.filter(Boolean).join(" "); }

export default function PTEPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", state: "", quantity: "1", examType: "PTE Academic" });
  const [formStep, setFormStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.email || !formData.state) {
        setError("Please complete all details to proceed."); return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone)) {
        setError("Please enter a valid 10-digit Indian mobile number."); return;
      }
      setFormStep(2); setError(null); return;
    }
    setLoading(true); setError(null);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const currentPricing = PRICING_DATA[formData.examType] || PRICING_DATA["PTE Academic"];

  return (
    <div className="bg-white min-h-screen text-[#0f172a] font-sans selection:bg-amber-200 overflow-x-hidden">

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
              <button onClick={() => setIsBookingModalOpen(false)} className="absolute top-4 right-4 z-50 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header — PTE brand green */}
              <div className="bg-[#0f766e] p-8 text-center relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="inline-flex items-center gap-1.5 bg-white/20 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/20">
                  <Sparkles className="w-3 h-3 text-[#fde047]" /> Save ₹2,800 Today
                </div>
                <h3 className="text-2xl font-black text-white">Book PTE Academic</h3>
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
                              <input
                                value={formData[key]}
                                onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm bg-slate-50"
                                placeholder={placeholder} type={type} maxLength={maxLength}
                              />
                            </div>
                          ))}
                          <div className="relative">
                            <LocateFixed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <select value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0f766e]/30 text-sm bg-slate-50 appearance-none">
                              <option value="" disabled>Select Your State</option>
                              {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-3">
                            <div className="flex justify-between text-sm font-medium text-slate-500">
                              <span>Official PTE Price</span>
                              <span className="line-through">₹17,000</span>
                            </div>
                            <div className="flex justify-between text-sm font-medium text-emerald-600">
                              <span>Your Savings</span>
                              <span>- ₹2,800</span>
                            </div>
                            <div className="border-t border-slate-200 pt-3 flex justify-between font-black text-lg">
                              <span>Fryment Price</span>
                              <span className="text-[#0f766e]">₹14,200</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Number of Vouchers</p>
                            <div className="flex justify-center gap-3">
                              {[1, 2, 3].map(n => (
                                <button key={n} type="button" onClick={() => setFormData({ ...formData, quantity: n.toString() })} className={cn("w-14 h-14 rounded-xl flex items-center justify-center font-black text-lg transition-all", formData.quantity === n.toString() ? "bg-[#0f766e] text-white shadow-lg scale-105" : "bg-white border border-slate-200 text-slate-400")}>
                                  {n}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="pt-2 space-y-3">
                      <button disabled={loading} type="submit" className="w-full bg-[#0f172a] text-white font-black rounded-xl py-4 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
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

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[1000] h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0f172a] rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-[#0f172a]">Fryment</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <a href="/" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] flex items-center gap-1.5 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Vouchers
            </a>
            <a href="#details" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] transition-colors">Details</a>
            <a href="#score" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] transition-colors">Scoring</a>
            <a href="#faq" className="text-sm font-bold text-slate-500 hover:text-[#0f172a] transition-colors">FAQ</a>
            <div className="w-px h-6 bg-slate-200" />
            <button onClick={() => setIsBookingModalOpen(true)} className="bg-[#0f766e] text-white font-black rounded-xl px-5 py-2.5 hover:bg-[#0d9488] transition-colors shadow-lg shadow-teal-500/20">
              Buy Voucher — ₹14,200
            </button>
          </div>
          {/* Mobile CTA */}
          <button onClick={() => setIsBookingModalOpen(true)} className="lg:hidden bg-[#0f766e] text-white font-black rounded-xl px-4 py-2.5 text-sm hover:bg-[#0d9488] transition-colors">
            Buy Now
          </button>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-0 px-6 overflow-hidden bg-gradient-to-b from-[#f0f9ff] to-white">
          {/* Decorative blobs */}
          <div className="absolute top-20 left-0 w-72 h-72 bg-[#0f766e]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-32 right-0 w-56 h-56 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mb-8">
              <a href="/" className="hover:text-[#0f172a] transition-colors">Home</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/" className="hover:text-[#0f172a] transition-colors">Vouchers</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#0f172a] font-bold">PTE Academic</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center pb-16">
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

                <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-black text-[#0f172a] leading-[1.1] tracking-tight">
                  Buy PTE Academic<br />
                  <span className="text-[#0f766e]">Voucher at ₹14,200</span>
                </h1>

                <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                  India's most trusted source for discounted PTE vouchers. Pay in INR via UPI or Card — zero forex charges, instant WhatsApp delivery.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Clock, label: "2 Hours", sub: "Test Duration" }, { icon: Zap, label: "48 Hours", sub: "Results" }, { icon: Home, label: "Center", sub: "Test Format" }, { icon: Globe, label: "3,000+", sub: "Universities" }
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={sub} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm text-center">
                      <Icon className="w-5 h-5 text-[#0f766e] mx-auto mb-2" />
                      <p className="font-black text-[#0f172a] text-sm">{label}</p>
                      <p className="text-xs text-slate-400 font-medium">{sub}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={() => setIsBookingModalOpen(true)} className="bg-[#0f172a] text-white font-black text-base rounded-xl px-8 py-4 hover:bg-slate-800 transition-colors shadow-xl flex items-center gap-2">
                    Buy Now — ₹14,200 <ArrowRight className="w-5 h-5" />
                  </button>
                  <a href="#details" className="border border-slate-200 text-slate-700 font-bold text-base rounded-xl px-8 py-4 hover:bg-slate-50 transition-colors flex items-center gap-2">
                    Learn More
                  </a>
                </div>

                <div className="flex flex-wrap gap-5 text-sm text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> 100% Genuine</span>
                  <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-500" /> Instant Delivery</span>
                  <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-blue-500" /> SSL Secured</span>
                </div>
              </div>

              {/* Right — Sticky Pricing Card */}
              <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#0f766e] text-white font-black text-xs px-5 py-2 rounded-bl-2xl">Save 14%</div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Exam</p>
                    <p className="text-xl font-black text-[#0f172a]">PTE Academic</p>
                  </div>

                  <div className="bg-[#f0fdfa] rounded-2xl p-5 space-y-3">
                    <div className="flex justify-between text-sm font-medium text-slate-500">
                      <span>Official Price</span>
                      <span className="line-through">₹17,000</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-emerald-600">
                      <span>Discount</span>
                      <span>− ₹2,800</span>
                    </div>
                    <div className="border-t border-[#0f766e]/20 pt-3 flex justify-between font-black text-2xl">
                      <span>You Pay</span>
                      <span className="text-[#0f766e]">₹14,200</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {[
                      "100% genuine official voucher code",
                      "Instant delivery via WhatsApp & Email",
                      "Pay in INR — zero forex charges",
                      "Valid for 21 days from purchase",
                      "24/7 WhatsApp support included",
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => setIsBookingModalOpen(true)} className="w-full bg-[#0f766e] text-white font-black text-lg rounded-xl py-4 hover:bg-[#0d9488] transition-colors shadow-lg shadow-teal-400/20 flex items-center justify-center gap-2">
                    Proceed to Buy <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <Lock className="w-3 h-3" /> Secured by RazorPay · SSL Encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="py-8 px-6 bg-[#0f172a]">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Users, text: "50,000+ Students Served" },
              { icon: BadgeCheck, text: "Official Voucher Partner" },
              { icon: Star, text: "4.9★ Average Rating" },
              { icon: Zap, text: "30-Second Delivery" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-white/80 text-sm font-bold">
                <Icon className="w-5 h-5 text-[#0f766e]" /> {text}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT THE TEST */}
        <section id="details" className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">About the Exam</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">What is the PTE Academic?</h2>
              <p className="text-slate-500 mt-4 leading-relaxed">The PTE is a modern, AI-powered English proficiency test designed for today's global student. It's fast, affordable, and accepted by thousands of universities worldwide.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#0f172a]">Key Highlights</h3>
                {[

                  { icon: Clock, title: "2 Hours Total", desc: "The test takes around 2 hours to complete, evaluating speaking, writing, reading, and listening.", color: "text-[#0f766e] bg-[#ccfbf1]" },
                  { icon: Laptop, title: "Computer-Based", desc: "100% computer-based test taken at secure Pearson VUE test centers.", color: "text-violet-600 bg-violet-50" },
                  { icon: Zap, title: "Results in 48 Hours", desc: "AI scoring means you get fast, accurate, and unbiased results within 2 days.", color: "text-amber-600 bg-amber-50" },
                  { icon: Globe, title: "Global Acceptance", desc: "Accepted by thousands of universities worldwide, including the UK, Australia, USA, and Canada.", color: "text-emerald-600 bg-emerald-50" },
                  { icon: TrendingUp, title: "Score: 10–90", desc: "Scores range from 10 to 90. Most top universities require a score between 58 and 73.", color: "text-rose-600 bg-rose-50" },
                  { icon: Award, title: "AI-Scoring Excellence", desc: "PTE uses objective AI scoring, ensuring a consistent and fair evaluation of your English proficiency.", color: "text-indigo-600 bg-indigo-50" }
                ].map(({ icon: Icon, title, desc, color }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5", color.split(" ")[1])}>
                      <Icon className={cn("w-5 h-5", color.split(" ")[0])} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0f172a] mb-1">{title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#0f172a]">Test Format</h3>
                <div className="space-y-4">
                  {[

                    { part: "Part 1", title: "Speaking & Writing (54–67 min)", desc: "Read aloud, repeat sentence, describe image, and write essay.", badge: "Scored" },
                    { part: "Part 2", title: "Reading (29–30 min)", desc: "Fill in the blanks, multiple choice, and reorder paragraphs.", badge: "Scored" },
                    { part: "Part 3", title: "Listening (30–43 min)", desc: "Summarize spoken text, highlight incorrect words, and dictation.", badge: "Scored" }
                  ].map(({ part, title, desc, badge }) => (
                    <div key={part} className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{part}</span>
                        <span className={cn("text-xs font-black px-2 py-0.5 rounded-full", badge === "Scored" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500")}>{badge}</span>
                      </div>
                      <h4 className="font-bold text-[#0f172a] mb-2">{title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#f0fdfa] rounded-2xl p-6 border border-[#0f766e]/20 mt-6">
                  <h4 className="font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#0f766e]" /> System Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {[
                      "Windows 10+ or macOS 10.14+ (No tablets/phones)",
                      "Google Chrome or Microsoft Edge browser",
                      "Working webcam and microphone",
                      "Stable internet connection (5 Mbps+)",
                      "Quiet, well-lit room without other people",
                    ].map(req => (
                      <li key={req} className="flex items-center gap-2.5">
                        <Laptop className="w-4 h-4 text-[#0f766e] shrink-0" /> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCORE BREAKDOWN */}
        <section id="score" className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto space-y-14">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Understanding Your Score</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">How PTE Scores Work</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">Your PTE result includes an overall score and four subscores that measure different language skills.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5">
                  {SCORE_BREAKDOWN.map(({ skill, desc, color, width }) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-[#0f172a]">{skill}</span>
                        <span className="text-xs text-slate-400 font-medium">{desc}</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full", color, width)} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-medium text-center">*Illustrative score distribution for a typical competitive candidate</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-black text-[#0f172a]">Score Requirements by University Tier</h3>
                {[

                  { tier: "Top 50 Global Universities", range: "73 – 90", color: "text-violet-700 bg-violet-50 border-violet-100" },
                  { tier: "Top 100–200 Universities", range: "65 – 72", color: "text-blue-700 bg-blue-50 border-blue-100" },
                  { tier: "Good Universities (200–500)", range: "58 – 64", color: "text-teal-700 bg-teal-50 border-teal-100" },
                  { tier: "Pathway Programs", range: "50 – 57", color: "text-slate-600 bg-slate-50 border-slate-100" }
                ].map(({ tier, range, color }) => (
                  <div key={tier} className={cn("flex justify-between items-center p-4 rounded-xl border", color)}>
                    <span className="text-sm font-bold">{tier}</span>
                    <span className="text-sm font-black">{range}</span>
                  </div>
                ))}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4">
                  <p className="text-sm text-amber-800 font-medium flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    Requirements vary by program and country. Always check the official university admissions page for the exact PTE score cutoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UNIVERSITY ACCEPTANCE */}
        <section className="py-20 px-6 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto space-y-10 text-center">
            <div>
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Global Reach</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0f172a]">Accepted by 4,000+ Universities Worldwide</h2>
              <p className="text-slate-400 mt-2 text-sm">Including some of the world's most prestigious institutions</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {UNIVERSITIES.map(u => (
                <span key={u} className="text-sm font-bold text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full hover:border-[#0f766e]/50 hover:text-[#0f172a] transition-colors">{u}</span>
              ))}
              <span className="text-sm font-bold text-[#0f766e] bg-[#f0fdfa] border border-[#0f766e]/20 px-4 py-2 rounded-full">+3,988 more →</span>
            </div>
          </div>
        </section>

        {/* HOW TO BOOK */}
        <section className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto space-y-14">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">How to Book Your PTE Voucher</h2>
              <p className="text-slate-500 mt-3">From payment to exam start — takes under 10 minutes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-slate-200" />
              {[
                { step: "01", icon: CreditCard, title: "Buy Voucher", desc: "Pay securely in INR via UPI, Card, or NetBanking on Fryment." },
                { step: "02", icon: Zap, title: "Get Code Instantly", desc: "Receive your unique voucher code via WhatsApp & Email within seconds." },
                { step: "03", icon: ExternalLink, title: "Go to PTE.com", desc: "Visit the official PTE Academic website and redeem your code." },
                { step: "04", icon: CheckSquare, title: "Schedule & Start", desc: "Pick your test window and begin your exam — all from home." },
              ].map(({ step, icon: Icon, title, desc }, i) => (
                <div key={step} className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-md text-[#0f766e]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-black text-slate-300 tracking-widest">{step}</span>
                  <h3 className="text-base font-bold text-[#0f172a]">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON — PTE vs Alternatives */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Comparison</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">PTE vs. IELTS vs. TOEFL</h2>
              <p className="text-slate-500 mt-3 max-w-lg mx-auto">See why thousands of Indian students are choosing the PTE Academic.</p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
                <div className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wider">Feature</div>
                <div className="p-5 text-center text-sm font-black text-[#0f766e] uppercase tracking-wider border-x border-slate-200 bg-[#f0fdfa]">PTE</div>
                <div className="p-5 text-center text-sm font-bold text-slate-400 uppercase tracking-wider border-r border-slate-200">IELTS</div>
                <div className="p-5 text-center text-sm font-bold text-slate-400 uppercase tracking-wider">TOEFL</div>
              </div>
              {[

                { feature: "Fryment Price", det: "₹14,200", ielts: "₹17,000", toefl: "₹15,500" },
                { feature: "Test Duration", det: "2 Hours", ielts: "2h 45m", toefl: "2 Hours" },
                { feature: "Result Time", det: "48 hours", ielts: "13 days", toefl: "6 days" },
                { feature: "At-Home Test", det: false, ielts: false, toefl: false },
                { feature: "Free Score Sharing", det: true, ielts: false, toefl: false },
                { feature: "Validity", det: "2 years", ielts: "2 years", toefl: "2 years" },
                { feature: "UPI Payment", det: "Via Fryment", ielts: false, toefl: false }
              ].map(({ feature, det, ielts, toefl }, i) => (
                <div key={feature} className={cn("grid grid-cols-4 border-b border-slate-100 last:border-b-0", i % 2 === 0 ? "bg-white" : "bg-slate-50/50")}>
                  <div className="p-5 text-sm font-semibold text-slate-700">{feature}</div>
                  <div className="p-5 text-center border-x border-slate-200 bg-[#f0fdfa]/50">
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
              <button onClick={() => setIsBookingModalOpen(true)} className="bg-[#0f766e] text-white font-black rounded-xl px-8 py-4 hover:bg-[#0d9488] transition-colors shadow-lg shadow-teal-400/20">
                Get PTE Voucher at ₹14,200 →
              </button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Student Stories</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f172a]">What Students Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((r, i) => (
                <div key={i} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                  <div className="flex text-amber-400 mb-4 gap-0.5">
                    {Array(r.rating).fill(null).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed text-sm flex-grow mb-6">"{r.text}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#f0fdfa] rounded-full flex items-center justify-center font-black text-[#0f766e] text-sm">{r.name.charAt(0)}</div>
                      <div>
                        <p className="font-bold text-[#0f172a] text-sm">{r.name}</p>
                        <p className="text-xs text-slate-400">{r.city}</p>
                      </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 text-xs font-black px-2.5 py-1 rounded-lg">{r.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center">
              <p className="text-xs font-bold text-[#0f766e] uppercase tracking-widest mb-3">Got Questions?</p>
              <h2 className="text-3xl font-black text-[#0f172a]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className={cn("rounded-2xl border overflow-hidden transition-all", activeFaq === i ? "border-[#0f766e]/30 bg-[#f0fdfa]" : "border-slate-100 bg-[#f8fafc]")}>
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

        {/* FINAL CTA */}
        <section className="py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_#0f766e,transparent)]" />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/10">
              <Flame className="w-4 h-4 text-[#0f766e]" /> Limited time — Save ₹2,800 on your PTE
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Ready to Take the<br />
              <span className="text-[#0f766e]">PTE Academic?</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Join 50,000+ students who've trusted Fryment for instant, discounted exam vouchers.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => setIsBookingModalOpen(true)} className="bg-[#0f766e] text-white font-black text-lg rounded-xl px-10 py-4 hover:bg-[#0d9488] transition-colors shadow-xl shadow-teal-500/20 flex items-center gap-2">
                Buy Voucher — ₹14,200 <ArrowRight className="w-5 h-5" />
              </button>
              <a href="https://wa.me/919325216364" className="border border-white/20 text-white font-bold rounded-xl px-8 py-4 hover:bg-white/10 transition-colors text-sm flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#25D366]" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0f172a] border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
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