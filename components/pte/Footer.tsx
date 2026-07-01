"use client";

import Link from "next/link";
import { GraduationCap, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
   return (
      <footer className="bg-[#0A0F1C] pt-20 pb-28 md:pb-12 px-6 lg:px-16 text-slate-300 relative z-10 border-t border-white/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">

            {/* Brand Info */}
            <div className="md:col-span-5 space-y-6">
               <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                     <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-black tracking-tight text-white">Fryment</span>
               </div>
               <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
                  Empowering Indian students with secure, discounted PTE Academic vouchers. Join over 10,000+ successful test takers globally who saved on their exam fees.
               </p>
            </div>

            {/* Company Links */}
            <div className="md:col-span-2 space-y-6">
               <h5 className="text-xs font-bold tracking-widest uppercase text-white/50">Company</h5>
               <ul className="space-y-4">
                  <li><Link href="/" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">Home</Link></li>
                  <li><Link href="/#purchase" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">Buy Voucher</Link></li>
                  <li><Link href="/how-to-book" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">How to Book</Link></li>
                  <li><Link href="/faqs" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">FAQs</Link></li>
                  <li><Link href="/about" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">About Us</Link></li>
               </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-2 space-y-6">
               <h5 className="text-xs font-bold tracking-widest uppercase text-white/50">Legal</h5>
               <ul className="space-y-4">
                  <li><Link href="/privacy-policy" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">Terms &amp; Conditions</Link></li>
                  <li><Link href="/refund-policy" className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm font-medium">Refund Policy</Link></li>
               </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 space-y-6">
               <h5 className="text-xs font-bold tracking-widest uppercase text-white/50">Support &amp; Contact</h5>
               <div className="space-y-4">
                  <a href="mailto:prestigevoucher1@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                     <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-4 h-4 text-slate-400 group-hover:text-primary-light" />
                     </div>
                     <span className="text-sm font-medium">prestigevoucher1@gmail.com</span>
                  </a>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                     <p className="text-xs text-slate-400 font-medium mb-1">24/7 Support Available</p>
                     <p className="text-sm text-white font-bold">Via WhatsApp &amp; Email</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Bottom Bar */}
         <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-500 text-sm font-medium">
               © {new Date().getFullYear()} Fryment. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/5">
               <ShieldCheck className="w-4 h-4 text-emerald-400" />
               <span className="text-xs font-bold text-slate-300">100% Encrypted Payment Checkout</span>
            </div>
         </div>
      </footer>
   );
}
