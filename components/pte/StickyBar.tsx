"use client";

import { X, Award, ChevronRight } from "lucide-react";

interface StickyBarProps {
   visible: boolean;
   onDismiss: () => void;
}

export default function StickyBar({ visible, onDismiss }: StickyBarProps) {
   return (
      <div 
         className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${visible ? "translate-y-0" : "translate-y-full"}`}
      >
         {/* Optional: Add a subtle gradient shadow above the bar */}
         <div className="absolute -top-6 left-0 w-full h-6 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
         
         <div className="bg-white/80 backdrop-blur-xl border-t border-outline-variant shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] px-4 md:px-8 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full gap-4">
               
               <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center shrink-0">
                     <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 pr-2">
                     <p className="font-black text-on-surface text-[13px] leading-tight sm:text-sm md:text-base md:leading-tight truncate sm:whitespace-normal">
                        Secure your PTE Exam Slot today!
                     </p>
                     <p className="font-medium text-xs text-on-surface-variant hidden sm:block mt-1 truncate">
                        Click below to claim your instant <strong className="text-primary-dark">₹1,400 discount</strong> on official registration fees.
                     </p>
                  </div>
               </div>
               
               <div className="flex items-center gap-2 md:gap-3 shrink-0">
                  <button 
                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                     className="group flex-1 justify-center sm:flex-none bg-primary hover:bg-primary-dark text-white font-bold px-4 py-2.5 md:px-5 md:py-2.5 rounded-full text-[12px] sm:text-[13px] md:text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-1 shrink-0 whitespace-nowrap"
                  >
                     Book Now
                     <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button 
                     onClick={onDismiss} 
                     className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface transition-colors" 
                     aria-label="Dismiss"
                  >
                     <X className="w-4 h-4" />
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
