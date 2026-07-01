"use client";

import Link from "next/link";

interface NavbarProps {
   isMenuOpen: boolean;
   setIsMenuOpen: (val: boolean) => void;
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
   return (
      <nav className="fixed top-0 left-0 w-full z-[100] bg-surface/90 backdrop-blur-md h-14 md:h-16 flex items-center border-b border-accent/20 shadow-sm">
         <div className="max-w-[1920px] w-full mx-auto px-4 md:px-6 lg:px-16 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
               <div className="w-8 h-8 md:w-9 md:h-9 bg-secondary rounded-lg flex items-center justify-center shadow-lg"><span className="material-icons text-lg text-white font-bold">school</span></div>
               <span className="text-lg md:text-xl font-black tracking-tight text-primary">Fryment</span>
            </div>

            <div className="hidden lg:flex items-center gap-8">
               <a className="text-sm font-bold text-primary hover:text-secondary transition-colors" href="/how-to-book">How to Book</a>
               <Link className="text-sm font-bold text-primary hover:text-secondary transition-colors" href="/blog">Blog</Link>
               <a className="bg-gradient-to-r from-secondary to-primary text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wide shadow-md flex items-center gap-2 hover:opacity-90 transition-opacity" href="tel:+919930635149">
                  <span className="material-icons text-sm">phone</span>
                  +91 993063 5149
               </a>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-4">
               <button onClick={() => setIsMenuOpen(true)} className="text-primary p-1 focus:outline-none">
                  <span className="material-icons text-3xl">menu</span>
               </button>
            </div>
         </div>

         {/* Mobile Menu Drawer */}
         {isMenuOpen && (
            <div className="fixed inset-0 bg-surface z-[99999] flex flex-col lg:hidden">
               <div className="h-16 flex items-center justify-between px-6 border-b border-accent/20 shrink-0 bg-surface">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center shadow-md"><span className="material-icons text-white text-sm">school</span></div>
                     <span className="text-xl font-black tracking-tight text-primary">Fryment</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} className="text-secondary hover:opacity-70 transition-opacity">
                     <span className="material-icons text-3xl">close</span>
                  </button>
               </div>

               <div className="flex-1 p-8 flex flex-col space-y-6 bg-surface">
                  <a href="/how-to-book" className="text-lg font-bold text-secondary flex items-center gap-4 py-3 border-b border-accent/10" onClick={() => setIsMenuOpen(false)}>
                     <span className="material-icons text-xl">menu_book</span>
                     How to Book
                  </a>
                  <Link href="/blog" className="text-lg font-bold text-secondary flex items-center gap-4 py-3 border-b border-accent/10" onClick={() => setIsMenuOpen(false)}>
                     <span className="material-icons text-xl">rss_feed</span>
                     Our Blog
                  </Link>
                  <a href="tel:+919930635149" className="text-lg font-bold text-secondary flex items-center gap-4 py-3" onClick={() => setIsMenuOpen(false)}>
                     <span className="material-icons text-xl">phone</span>
                     +91 993063 5149
                  </a>
               </div>
            </div>
         )}
      </nav>
   );
}
