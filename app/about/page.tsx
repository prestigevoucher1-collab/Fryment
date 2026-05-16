"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight, 
  Target, 
  Users, 
  Award, 
  Zap, 
  Menu, 
  X,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Heart
} from "lucide-react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        {/* Story Section */}
        <section className="py-24 md:py-40 px-6 relative overflow-hidden bg-slate-50">
          <div className="absolute inset-0 bg-grid-overlay opacity-40" />
          <div className="max-w-4xl mx-auto space-y-12 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-4">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-primary leading-tight tracking-tight">
              Empowering the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-600 italic">Next Generation</span> <br /> of Global Talent
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
              Fryment was founded with a simple goal: to make international education accessible and affordable for every Indian student. We believe that financial hurdles shouldn't stand in the way of your global dreams.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 md:py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Students Helped", value: "10,000+", icon: <Users /> },
              { label: "Savings Generated", value: "₹2.5 Cr+", icon: <TrendingUp /> },
              { label: "Trust Rating", value: "4.9/5", icon: <Award /> }
            ].map(stat => (
              <div key={stat.label} className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col items-center text-center space-y-6 hover:shadow-2xl transition-all duration-500">
                <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-5xl font-black text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vision/Values Section */}
        <section className="py-24 md:py-40 px-6 bg-primary relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-grid-overlay opacity-10" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">Built on Trust, <br /> Optimized for <br /> <span className="text-accent italic">Success</span>.</h2>
              <p className="text-xl text-blue-100/40 font-medium leading-relaxed">
                We aren't just a voucher provider. We are your success partners. From the moment you land on our site to the day you receive your score, Fryment is with you.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Verified Partners", d: "Directly authorized Pearson VUE voucher distributors." },
                  { t: "Student First", d: "Pricing models designed to maximize student savings." },
                  { t: "Tech Driven", d: "Automated delivery systems for zero-wait experience." }
                ].map(item => (
                  <div key={item.t} className="flex gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-accent shrink-0 border border-white/10">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2">{item.t}</h4>
                      <p className="text-blue-100/40 text-sm font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/5 group">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Team" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <p className="text-3xl font-black text-white">Authorized Partner Hub</p>
                <p className="text-blue-100/40 font-bold">Fryment EdTech Platform</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-40 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tight">Ready to Start Your <br /> Global Journey?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/pte#purchase" className="w-full md:w-auto bg-primary text-white px-12 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
                Book Voucher
              </Link>
              <Link href="/contact" className="w-full md:w-auto bg-slate-100 text-primary px-12 py-5 rounded-3xl font-black text-xl hover:bg-slate-200 transition-colors">
                Contact Us
              </Link>
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
