"use client";

import Link from "next/link";
import Image from "next/image";

interface PopupModalProps {
   onClose: () => void;
}

export default function PopupModal({ onClose }: PopupModalProps) {
   return (
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-white/10 backdrop-blur-[20px] animate-in fade-in duration-500">
         <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden animate-in zoom-in-95 duration-500">
            <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-md flex items-center justify-center text-[#091e42] transition-all z-30 border border-black/5 shadow-lg">
               <span className="material-icons text-xl font-bold">close</span>
            </button>

            <Link href="#purchase" onClick={onClose} className="block relative cursor-pointer">
               <div className="relative aspect-[1.6/1] w-full overflow-hidden">
                  <Image
                     src="/pte-offer-popup.png"
                     width={400} 
                     height={300}
                     alt="PTE Discount Offer - Save ₹3000"
                     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute bottom-[10%] right-[6%] z-20">
                     <div className="bg-[#ffcc00] hover:bg-[#ffdb4d] text-[#091e42] px-10 py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest shadow-2xl transition-all flex items-center gap-3 border-b-4 border-black/20 active:border-0 active:translate-y-1">
                        Get Coupon Now
                        <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_forward</span>
                     </div>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
}
