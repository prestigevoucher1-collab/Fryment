"use client";

interface StickyBarProps {
   visible: boolean;
   onDismiss: () => void;
}

export default function StickyBar({ visible, onDismiss }: StickyBarProps) {
   return (
      <div className={`fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#091e42] via-[#113a77] to-[#091e42] z-50 text-white shadow-[0_-10px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-out flex items-center px-4 md:px-8 py-3 md:py-4 border-t border-[#1565d8]/20 ${visible ? "translate-y-0" : "translate-y-full"}`}>
         <div className="flex items-center justify-between max-w-[1400px] mx-auto w-full gap-4">
            <div className="flex items-center gap-3 md:gap-4 flex-1">
               <span className="material-icons text-[#ffcc00] hidden md:block text-2xl">workspace_premium</span>
               <div>
                  <p className="font-black text-sm md:text-base leading-tight">Secure your PTE Exam Slot today!</p>
                  <p className="font-medium text-[10px] md:text-xs text-blue-100 hidden sm:block mt-0.5">Click below to claim your instant ₹2,800 discount on official registration fees.</p>
               </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
               <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-[#ffcc00] text-[#091e42] hover:bg-yellow-400 font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-md text-xs md:text-sm tracking-wide transition-colors shadow-sm">
                  Book Now
               </button>
               <button onClick={onDismiss} className="text-white/60 hover:text-white transition-colors flex items-center p-1" aria-label="Dismiss">
                  <span className="material-icons text-[20px] md:text-[24px]">close</span>
               </button>
            </div>
         </div>
      </div>
   );
}
