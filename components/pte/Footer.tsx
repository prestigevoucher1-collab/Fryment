"use client";

import Link from "next/link";

export default function Footer() {
   return (
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

            {/* Company Links */}
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
               <h5 className="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/30 mb-2">Company</h5>
               <ul className="space-y-3">
                  <li><Link href="/" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Home</Link></li>
                  <li><Link href="#purchase" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Buy Voucher</Link></li>
                  <li><Link href="/blog" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">PTE Resources</Link></li>
                  <li><Link href="/about" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">About Us</Link></li>
               </ul>
            </div>

            {/* Legal Links */}
            <div className="md:col-span-2 space-y-4 text-center md:text-left">
               <h5 className="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/30 mb-2">Legal</h5>
               <ul className="space-y-3">
                  <li><Link href="/privacy-policy" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-and-conditions" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Terms &amp; Conditions</Link></li>
                  <li><Link href="/refund-policy" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Refund Policy</Link></li>
               </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 space-y-4 text-left">
               <h5 className="text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/30 mb-2">Support &amp; Contact</h5>
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
   );
}
