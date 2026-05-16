"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Zap, 
  Menu, 
  X,
  Send,
  CheckCircle2,
  Clock
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-grid-overlay opacity-40" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
            
            <div className="space-y-12">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tight">
                  Let's Talk <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-600">PTE Success</span>
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                  Have questions about voucher validity, exam dates, or rescheduling? Our team of experts is here to guide you 24/7.
                </p>
              </div>

              <div className="space-y-8">
                <a href="https://wa.me/919325216364" className="group flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-500">
                  <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Instant Support</p>
                    <p className="text-2xl font-black text-primary">WhatsApp Us Now</p>
                  </div>
                </a>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm space-y-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</p>
                      <p className="text-lg font-black text-primary">hello@fryment.com</p>
                    </div>
                  </div>
                  <div className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm space-y-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Us</p>
                      <p className="text-lg font-black text-primary">+91 93252 16364</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center gap-6">
                  <MapPin className="w-10 h-10 text-primary shrink-0" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Main Office</p>
                    <p className="text-lg font-black text-primary leading-tight">Nashik, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 to-primary/5 rounded-[3rem] blur-2xl -z-10" />
              <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,33,71,0.12)] p-10 md:p-14 border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-amber-400" />
                
                {submitted ? (
                  <div className="py-20 text-center space-y-8 animate-in zoom-in-95">
                    <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-black text-primary">Message Sent!</h3>
                      <p className="text-slate-500 font-bold max-w-xs mx-auto">Thank you for reaching out. An expert will respond within 15 minutes.</p>
                    </div>
                    <button onClick={() => setSubmitted(false)} className="text-primary font-black text-sm uppercase tracking-widest underline decoration-accent decoration-2 underline-offset-8">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Your Identity</label>
                      <input className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 font-bold text-sm outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all placeholder:text-slate-300" placeholder="Full Name" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email Address</label>
                        <input className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 font-bold text-sm outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all placeholder:text-slate-300" placeholder="Email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Phone Number</label>
                        <input className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 font-bold text-sm outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all placeholder:text-slate-300" placeholder="Mobile" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Inquiry Details</label>
                      <textarea className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 font-bold text-sm outline-none focus:ring-2 focus:ring-primary/5 focus:border-primary transition-all placeholder:text-slate-300 min-h-[160px] resize-none" placeholder="How can we help you today?" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-black text-lg tracking-wide shadow-2xl hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                      Shoot Message <Send className="w-5 h-5" />
                    </button>
                    <div className="flex items-center justify-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] pt-4">
                      <Clock className="w-4 h-4" />
                      Avg response time: 15 mins
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-primary py-12 px-6 text-white/40 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-black uppercase tracking-[0.4em]">© 2026 Fryment. All rights reserved.</p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-[0.2em]">
            <Link href="/pte" className="hover:text-white transition-colors">Home</Link>
            <Link href="/pte/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
