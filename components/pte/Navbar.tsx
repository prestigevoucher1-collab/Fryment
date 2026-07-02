"use client";

import Link from "next/link";
import { QrCode } from "lucide-react";

interface NavbarProps {
   isMenuOpen: boolean;
   setIsMenuOpen: (val: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
   return (
      <nav className="fixed top-0 left-0 w-full z-[100] bg-surface/80 backdrop-blur-lg h-14 md:h-16 flex items-center border-b border-accent/10 shadow-sm">
         <div className="max-w-[1920px] w-full mx-auto px-4 md:px-6 lg:px-16 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
               <div className="w-8 h-8 md:w-9 md:h-9 bg-secondary rounded-lg flex items-center justify-center shadow-lg"><span className="material-icons text-lg text-white font-bold">school</span></div>
               <span className="text-lg md:text-xl font-black tracking-tight text-primary">Fryment</span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
               <a className="text-sm font-bold text-primary hover:text-secondary transition-colors" href="/how-to-book">How to Book</a>
               <Link className="text-sm font-bold text-primary hover:text-secondary transition-colors" href="/blog">Blog</Link>
               <Link className="text-sm font-bold text-primary hover:text-secondary transition-colors" href="/qr-payment">QR Payment</Link>
               <a className="text-sm font-bold text-primary hover:text-secondary transition-colors" href="/faqs">FAQs</a>
               <a className="bg-gradient-to-r from-secondary to-primary text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wide shadow-md flex items-center gap-2 hover:opacity-90 transition-opacity" href="tel:+919930635149">
                  <span className="material-icons text-sm">phone</span>
                  +91 993063 5149
               </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-4">
               <button onClick={() => setIsMenuOpen(true)} className="text-primary p-2 hover:bg-surface-dim rounded-xl transition-colors focus:outline-none">
                  <span className="material-icons text-3xl">menu</span>
               </button>
            </div>
         </div>

         {/* Mobile Menu Drawer */}
         {isMenuOpen && (
            <>
               <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300" onClick={() => setIsMenuOpen(false)}></div>
               <div className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] sm:w-[350px] z-[120] lg:hidden flex flex-col bg-surface shadow-2xl animate-in slide-in-from-right-8 duration-300 ease-out border-l border-outline-variant">
                  <div className="h-16 flex items-center justify-between px-5 border-b border-outline-variant shrink-0 bg-surface">
                     <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
                        <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shadow-md"><span className="material-icons text-white text-sm">school</span></div>
                        <span className="text-xl font-black tracking-tight text-primary">Fryment</span>
                     </Link>
                     <button onClick={() => setIsMenuOpen(false)} className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-dim rounded-xl transition-colors">
                        <span className="material-icons text-2xl">close</span>
                     </button>
                  </div>

                  <div className="flex-1 p-5 flex flex-col space-y-4 bg-surface">
                     <a href="/how-to-book" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-xl text-on-surface-variant">menu_book</span>
                        How to Book
                     </a>
                     <Link href="/blog" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-xl text-on-surface-variant">rss_feed</span>
                        Our Blog
                     </Link>
                     <Link href="/qr-payment" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <QrCode className="w-5 h-5 text-on-surface-variant" />
                        QR Payment
                     </Link>
                     <a href="/faqs" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-on-surface-variant">help_outline</span>
                        FAQs
                     </a>
                     <a href="tel:+919930635149" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <span className="material-icons text-xl text-on-surface-variant">phone</span>
                        +91 993063 5149
                     </a>
                  </div>
               </div>
            </>
         )}
      </nav>
   );
}
