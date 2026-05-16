"use client";

import { comparisonPoints } from "@/data/pte/constants";

export default function ComparisonSection() {
   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-[#fafcff] relative">
         <div className="max-w-[1000px] mx-auto">
            <div className="text-center mb-12 md:mb-16">
               <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide block mb-2">Direct Comparison</span>
               <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight">Why Book With Fryment?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
               {/* Others */}
               <div className="bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm opacity-80 backdrop-blur-sm grayscale-[0.2]">
                  <h3 className="text-slate-400 font-bold mb-6 text-base md:text-lg border-b border-slate-100 pb-3 flex items-center gap-2">
                     <span className="material-icons text-slate-300">block</span>
                     Other Platforms
                  </h3>
                  <div className="space-y-6">
                     {comparisonPoints.map((row, i) => (
                        <div key={`bad-${i}`} className="flex items-start gap-4">
                           <span className="material-icons text-red-400 text-lg mt-0.5">close</span>
                           <div>
                              <p className="text-xs text-slate-400 font-bold mb-1">{row.feature}</p>
                              <p className="text-sm font-semibold text-slate-600">{row.others}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Fryment */}
               <div className="bg-[#091e42] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden ring-4 ring-[#1565d8]/20 group">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1565d8] blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 rounded-full"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#1565d8] blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full"></div>

                  <h3 className="text-white font-black mb-6 text-xl md:text-2xl border-b border-white/10 pb-3 flex justify-between items-center relative z-10">
                     Fryment Advantage
                     <span className="text-[#ffcc00] material-icons bg-white/10 p-1.5 rounded-full text-lg shadow-inner">verified</span>
                  </h3>
                  <div className="space-y-6 relative z-10">
                     {comparisonPoints.map((row, i) => (
                        <div key={`good-${i}`} className="flex items-start gap-4">
                           <span className="material-icons text-[#091e42] bg-[#00b67a] p-0.5 rounded-full text-sm mt-1 shadow-[0_0_10px_rgba(0,182,122,0.5)]">check</span>
                           <div>
                              <p className="text-xs text-slate-400/80 font-bold mb-1">{row.feature}</p>
                              <p className="text-base md:text-lg font-black text-white leading-tight">{row.prestige}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
