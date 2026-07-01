"use client";

import Image from "next/image";
import { portraitProofs, landscapeProofs } from "@/data/pte/constants";

export default function ProofGallery() {
   const row1 = [...portraitProofs, ...landscapeProofs, ...portraitProofs, ...landscapeProofs];
   const row2 = [...landscapeProofs, ...portraitProofs, ...landscapeProofs, ...portraitProofs];

   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-surface overflow-hidden">
         <div className="max-w-[1200px] mx-auto text-center mb-10 md:mb-14">
            <span className="text-secondary font-black text-[11px] md:text-xs tracking-wide block mb-2">Verified Purchases</span>
            <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tight mb-3 md:mb-4">Live Delivery Proof</h2>
            <p className="text-primary/70 font-medium text-xs md:text-sm max-w-md mx-auto leading-relaxed">
               Real unedited screenshots from students who successfully booked their official slots using our platform.
            </p>
         </div>

         <div className="relative flex flex-col gap-8 md:gap-14 overflow-hidden py-10 max-w-[1920px] mx-auto mask-image-[linear-gradient(to_right,transparent,50px,black_calc(100%-50px),transparent)] md:mask-image-[linear-gradient(to_right,transparent,150px,black_calc(100%-150px),transparent)]">
            {/* Row 1 */}
            <div className="animate-marquee whitespace-nowrap flex gap-4 md:gap-8 items-center w-max hover:[animation-play-state:paused]">
               {row1.map((url, i) => {
                  const isPortrait = i % 2 === 0;
                  return (
                     <div key={`mix1-${i}`} className={`${isPortrait ? 'w-[140px] md:w-[200px] aspect-[9/19]' : 'w-[220px] md:w-[320px] aspect-[16/10]'} shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all ${isPortrait ? '-translate-y-3 md:-translate-y-6' : 'translate-y-3 md:translate-y-6'} relative group cursor-pointer`}>
                        {isPortrait && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none z-10"></div>}
                        <Image src={url} width={800} height={1000} alt="Delivery Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                  );
               })}
            </div>

            {/* Row 2 */}
            <div className="animate-marquee-reverse whitespace-nowrap flex gap-4 md:gap-8 items-center w-max hover:[animation-play-state:paused]">
               {row2.map((url, i) => {
                  const isPortrait = i % 2 !== 0;
                  return (
                     <div key={`mix2-${i}`} className={`${isPortrait ? 'w-[140px] md:w-[200px] aspect-[9/19]' : 'w-[220px] md:w-[320px] aspect-[16/10]'} shrink-0 rounded-lg md:rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] transform transition-all ${isPortrait ? 'translate-y-3 md:translate-y-6' : '-translate-y-3 md:-translate-y-6'} relative group cursor-pointer`}>
                        {isPortrait && <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none z-10"></div>}
                        <Image src={url} width={800} height={1000} alt="Delivery Proof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
