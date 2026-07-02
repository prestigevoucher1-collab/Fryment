"use client";

import Link from "next/link";
import { GraduationCap, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-slate-950 pt-16 pb-28 md:pt-20 md:pb-12 px-6 lg:px-16 text-slate-300 relative z-10 border-t border-slate-900 overflow-hidden">
         {/* Subtle Background Elements for richness */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[120px] pointer-events-none rounded-full"></div>
         
         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 relative z-10">
             
             {/* Brand Info */}
             <div className="col-span-2 md:col-span-4 lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <GraduationCap className="w-6 h-6 text-white" />
                   </div>
                   <span className="text-2xl font-black tracking-tight text-white">Fryment</span>
                </div>
                <p className="text-slate-400 text-sm md:text-[15px] leading-relaxed max-w-sm">
                   Empowering Indian students with secure, discounted PTE Academic vouchers. Join over 10,000+ successful test takers globally who saved on their exam fees.
                </p>
             </div>
     
             {/* Company Links */}
             <div className="col-span-1 md:col-span-2 space-y-5 md:space-y-6">
                <h5 className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-slate-500">Company</h5>
                <ul className="space-y-3.5 md:space-y-4">
                   <li><Link href="/" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">Home</Link></li>
                   <li><Link href="/#purchase" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">Buy Voucher</Link></li>
                   <li><Link href="/how-to-book" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">How to Book</Link></li>
                   <li><Link href="/faqs" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">FAQs</Link></li>
                   <li><Link href="/about" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">About Us</Link></li>
                </ul>
             </div>
     
             {/* Legal Links */}
             <div className="col-span-1 md:col-span-2 space-y-5 md:space-y-6">
                <h5 className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-slate-500">Legal</h5>
                <ul className="space-y-3.5 md:space-y-4">
                   <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">Privacy Policy</Link></li>
                   <li><Link href="/terms-and-conditions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">Terms &amp; Conditions</Link></li>
                   <li><Link href="/refund-policy" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-[13px] md:text-sm font-medium">Refund Policy</Link></li>
                </ul>
             </div>
     
             {/* Contact */}
             <div className="col-span-2 md:col-span-4 lg:col-span-3 space-y-5 md:space-y-6 mt-2 md:mt-0 pt-8 border-t border-white/5 md:border-none md:pt-0">
                <h5 className="text-[11px] md:text-xs font-bold tracking-widest uppercase text-slate-500">Support &amp; Contact</h5>
                <div className="space-y-4">
                   <a href="mailto:prestigevoucher1@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                         <Mail className="w-4 h-4 text-slate-400 group-hover:text-primary-light" />
                      </div>
                      <span className="text-[13px] md:text-sm font-medium truncate">prestigevoucher1@gmail.com</span>
                   </a>
                   <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/5 hover:bg-white/[0.06] transition-colors">
                      <p className="text-xs text-slate-400 font-medium mb-1">24/7 Support Available</p>
                      <p className="text-sm text-white font-bold">Via WhatsApp &amp; Email</p>
                   </div>
                </div>
             </div>
         </div>
     
         {/* Bottom Bar */}
         <div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 relative z-10">
             <p className="text-slate-500 text-[13px] md:text-sm font-medium text-center md:text-left">
                © {new Date().getFullYear()} Fryment. All rights reserved.
             </p>
             <div className="flex items-center gap-2 text-slate-400 bg-emerald-500/10 px-4 py-2.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] md:text-xs font-bold text-emerald-100 tracking-wide">100% Encrypted Payment Checkout</span>
             </div>
         </div>
      </footer>
   );
}
