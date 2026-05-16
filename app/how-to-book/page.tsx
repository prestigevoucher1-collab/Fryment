"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight, 
  Play, 
  ShoppingBag, 
  UserPlus, 
  Calendar, 
  CheckCircle2, 
  Zap, 
  X, 
  Menu,
  ChevronDown,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function HowToBook() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stepsToFollow = [
    {
      id: "01",
      title: "Purchase a Verified Voucher",
      desc: "Get your unique 12-digit code instantly via WhatsApp & Email.",
      points: [
        "Buy a valid PTE voucher code from Fryment.",
        "Complete the payment safely via Paytm/UPI.",
        "Check your inbox for the unique 12-digit code."
      ],
      icon: <ShoppingBag className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "02",
      title: "Create Pearson PTE Account",
      desc: "Setup your official exam profile on the myPTE portal.",
      points: [
        "Visit the Pearson PTE website to begin registration.",
        "Enter all personal details exactly as in your passport.",
        "Verify your email address to activate your profile."
      ],
      icon: <UserPlus className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "03",
      title: "Select Test Date & Center",
      desc: "Pick a slot that suits your schedule at any authorized center.",
      points: [
        "Choose your preferred test city and centre.",
        "Pick a suitable exam date that fits your schedule.",
        "Confirm a convenient time slot from the options."
      ],
      icon: <Calendar className="w-8 h-8" />,
      color: "from-accent to-amber-600"
    },
    {
      id: "04",
      title: "Apply Code & Confirm",
      desc: "Redeem your discount and book without international fees.",
      points: [
        "Proceed to checkout after slot selection.",
        "Enter your 12-digit code accurately at payment.",
        "Submit your booking and get official confirmation."
      ],
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "from-success to-teal-600"
    }
  ];

  const faqs = [
    { q: "What is a PTE Promo Code / Voucher?", a: "A PTE Voucher is a unique 12-digit code that acts as a form of payment for your PTE Academic exam. Instead of paying the full price directly on the Pearson site, you can buy a voucher from us at a discounted rate." },
    { q: "Is the voucher valid for all of India?", a: "Yes, it's valid for every official Pearson test center across India." },
    { q: "What is the validity of the code?", a: "Every voucher is valid for 12 months from the date of purchase." },
    { q: "Can I use this for PTE Academic UKVI?", a: "Yes, our vouchers are valid for both PTE Academic and PTE Academic UKVI exams." },
    { q: "What if the code doesn't work?", a: "Codes are pre-verified. In the rare case of an issue, our 24/7 WhatsApp support is available to assist you immediately." }
  ];

  return (
    <div className="bg-white min-h-screen font-body text-text-rich selection-premium">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[1000] h-16 md:h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/pte" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-primary">Fryment</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link href="/pte" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/pte/blog" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Blog</Link>
            <a href="https://wa.me/919325216364" className="bg-primary text-white px-6 py-3 rounded-2xl font-black text-sm tracking-wide shadow-xl flex items-center gap-2 hover:translate-y-[-2px] transition-all">
              <Zap className="w-4 h-4 fill-accent text-accent" />
              Book Voucher
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-primary">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[1001] bg-white lg:hidden flex flex-col"
          >
            <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
              <span className="text-2xl font-black text-primary">Fryment</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-primary">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 p-8 space-y-8">
              <Link href="/pte" className="flex items-center justify-between text-2xl font-black text-primary">Home <ArrowRight className="w-6 h-6 text-accent" /></Link>
              <Link href="/pte/blog" className="flex items-center justify-between text-2xl font-black text-primary">Blog <ArrowRight className="w-6 h-6 text-accent" /></Link>
              <div className="pt-8">
                <a href="https://wa.me/919325216364" className="w-full bg-primary text-white py-5 rounded-3xl flex items-center justify-center gap-3 font-black text-xl">
                  <Zap className="w-6 h-6 text-accent fill-accent" />
                  Book Voucher
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Cinematic Header */}
        <header className="bg-slate-50 py-24 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-overlay opacity-40" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Booking Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tight">
              Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-600 italic">PTE Booking</span> <br /> in 4 Easy Steps
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Follow our verified walkthrough to redeem your discount and schedule your exam slot at any authorized test center in India.
            </p>
          </div>
        </header>

        {/* Video Walkthrough Section */}
        <section className="py-24 md:py-32 px-6 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-overlay opacity-10" />
          <div className="max-w-5xl mx-auto space-y-12 relative z-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white">Visual Walkthrough</h2>
              <p className="text-lg text-blue-100/40 font-medium max-w-xl mx-auto">Watch exactly how to apply your 12-digit code on the official Pearson portal.</p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white/5 bg-black group"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-10">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-2xl animate-float cursor-pointer">
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </div>
              </div>
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&showinfo=0" 
                title="Fryment PTE Guide" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* Steps Grid - Bento Inspired */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stepsToFollow.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-start gap-8 hover:bg-white hover:shadow-2xl hover:border-primary/10 transition-all duration-500"
                >
                  <div className={cn(
                    "w-20 h-20 rounded-3xl bg-gradient-to-br flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform",
                    step.color
                  )}>
                    {step.icon}
                  </div>
                  <div className="space-y-4 flex-grow">
                    <span className="text-xs font-black text-primary/30 uppercase tracking-[0.3em]">Step {step.id}</span>
                    <h3 className="text-2xl font-black text-primary leading-tight">{step.title}</h3>
                    <p className="text-sm text-slate-400 font-bold mb-4">{step.desc}</p>
                    <ul className="space-y-4 pt-4 border-t border-slate-200/50">
                      {step.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-500 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {idx === 0 && (
                    <Link href="/pte#purchase" className="w-full bg-primary text-white py-4 rounded-2xl text-center font-black text-sm uppercase tracking-widest hover:bg-accent hover:text-primary transition-all shadow-xl shadow-primary/10">
                      Get Code Now
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final FAQ Section */}
        <section className="py-24 md:py-32 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">Booking Support</h2>
              <p className="text-lg text-slate-500 font-medium">Answers to common hurdles during the registration process.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-[1.5rem] border border-slate-200 overflow-hidden shadow-sm hover:border-primary/20 transition-all">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className={cn(
                      "w-full flex items-center justify-between p-7 text-left transition-all",
                      activeFaq === idx ? "bg-primary text-white" : "hover:bg-slate-50"
                    )}
                  >
                    <span className="font-black leading-tight">{faq.q}</span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeFaq === idx && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-7 text-slate-500 font-medium text-sm leading-relaxed border-t border-slate-50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-primary pt-24 pb-12 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 opacity-80">
           <div className="md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-10 h-10 text-accent" />
                <span className="text-3xl font-black tracking-tight">Fryment</span>
              </div>
              <p className="text-blue-100/40 text-xl font-medium max-w-xl leading-relaxed">
                Authorized PTE Voucher provider. Trusted by thousands of students for secure and fast exam bookings.
              </p>
           </div>
           <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Contact</h5>
              <div className="space-y-4">
                <p className="font-black text-white">+91 93252 16364</p>
                <p className="font-black text-white">hello@fryment.com</p>
              </div>
           </div>
           <div className="space-y-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Follow</h5>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"><MessageCircle className="w-6 h-6" /></div>
              </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 text-center opacity-20">
          <p className="text-xs font-black uppercase tracking-[0.4em]">© 2026 Fryment. Authorized Pearson Partner Hub.</p>
        </div>
      </footer>
    </div>
  );
}
