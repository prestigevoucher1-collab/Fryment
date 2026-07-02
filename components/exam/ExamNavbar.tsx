"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Phone, Menu, X, MapPin, Info, BookOpen, HelpCircle } from "lucide-react";

interface NavbarProps {
   isMenuOpen: boolean;
   setIsMenuOpen: (val: boolean) => void;
}

export default function ExamNavbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
   const pathname = usePathname();

   return (
      <>
         <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/80 backdrop-blur-lg shadow-sm border-b border-outline-variant/50">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex items-center justify-between h-16 lg:h-20 relative">
               {/* Logo */}
               <Link href="/" className="transition-colors duration-200 flex items-center gap-2 group relative z-10">
                  <div className="relative">
                     <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-105">
                        <GraduationCap className="text-white w-5 h-5" />
                     </div>
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <span className="hidden sm:block text-2xl font-bold tracking-tight">
                     <span className="text-on-surface">Fry</span>
                     <span className="text-primary">ment</span>
                  </span>
               </Link>

               {/* Desktop Menu - Centered */}
               <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-7 z-10">

                  <Link className="transition-colors duration-200 relative group text-on-surface hover:text-primary font-bold text-sm py-1" href="/about">
                     About Us
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link className="transition-colors duration-200 relative group text-on-surface hover:text-primary font-bold text-sm py-1" href="/faqs">
                     FAQs
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link className="transition-colors duration-200 relative group text-on-surface hover:text-primary font-bold text-sm py-1" href="/how-to-book">
                     How to Book
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>


               </div>

               {/* Desktop Right CTA */}
               <div className="hidden lg:flex items-center gap-4 relative z-10">
                  <a className="group relative inline-flex items-center justify-center gap-2 transition-all duration-200 px-5 py-2 bg-surface-dim text-on-surface font-semibold rounded-xl border border-outline-variant hover:bg-white shadow-sm text-sm" href="tel:+919930635149">
                     <Phone className="w-4 h-4 text-primary" />
                     +91 993063 5149
                  </a>
                  <Link href="/#purchase" className="group relative inline-flex items-center justify-center gap-2 transition-all duration-200 px-6 py-2.5 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 text-sm">
                     Buy Voucher
                  </Link>
               </div>

               {/* Mobile Toggle */}
               <div className={`flex lg:hidden items-center gap-4 ml-auto relative ${isMenuOpen ? 'hidden' : 'z-[110]'}`}>
                  <a href="tel:+919930635149" className="text-primary hover:bg-surface-dim p-2 rounded-xl transition-colors">
                     <Phone className="w-5 h-5" />
                  </a>
                  <button onClick={() => setIsMenuOpen(true)} className="p-2.5 text-on-surface hover:bg-surface-dim rounded-2xl transition-colors shrink-0">
                     <Menu className="w-6 h-6" />
                  </button>
               </div>
            </div>
         </div>
      </nav>

         {/* Mobile Menu Drawer */}
         {isMenuOpen && (
            <>
               <div className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300" onClick={() => setIsMenuOpen(false)}></div>
               <div className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] sm:w-[350px] z-[120] lg:hidden flex flex-col bg-surface shadow-2xl animate-in slide-in-from-right-8 duration-300 ease-out border-l border-outline-variant">
                  <div className="flex items-center justify-between px-5 h-16 border-b border-outline-variant bg-surface">
                     <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                        <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                           <GraduationCap className="text-white w-4 h-4" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-on-surface">Fryment</span>
                     </Link>
                     <button onClick={() => setIsMenuOpen(false)} className="p-2.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-dim rounded-2xl transition-colors">
                        <X className="w-5 h-5" />
                     </button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-surface">
                     <div className="rounded-xl overflow-hidden border border-outline-variant">
                        <div className="px-4 py-3 bg-surface-dim border-b border-outline-variant">
                           <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Exams</span>
                        </div>
                        <div className="divide-y divide-outline-variant">
                           <Link
                              href="/"
                              onClick={() => setIsMenuOpen(false)}
                              className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-semibold transition-all text-primary bg-surface-dim"
                           >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                              PTE Academic
                           </Link>
                        </div>
                     </div>
                      <Link href="/how-to-book" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <BookOpen className="w-5 h-5 text-on-surface-variant" />
                        How to Book
                     </Link>
                      <Link href="/faqs" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <HelpCircle className="w-5 h-5 text-on-surface-variant" />
                        FAQs
                     </Link>
                      <Link href="/about" className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[15px] font-bold text-on-surface hover:text-primary hover:bg-surface-dim transition-all border border-outline-variant shadow-sm" onClick={() => setIsMenuOpen(false)}>
                        <Info className="w-5 h-5 text-on-surface-variant" />
                        About Us
                     </Link>
                  </div>

                  <div className="px-4 pb-8 pt-4 border-t border-outline-variant bg-surface space-y-3">
                     <Link href="/#purchase" className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold rounded-xl text-sm shadow-lg shadow-primary/20 transition-all" onClick={() => setIsMenuOpen(false)}>
                        Buy Voucher
                     </Link>
                     <a href="tel:+919930635149" className="group w-full flex items-center justify-center gap-2 py-3.5 bg-surface-dim border border-outline-variant text-on-surface font-bold rounded-xl text-sm transition-all">
                        <Phone className="w-4 h-4 text-primary" />
                        Call +91 993063 5149
                     </a>
                  </div>
               </div>
            </>
         )}
      </>
   );
}
