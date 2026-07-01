"use client";

import { comparisonPoints } from "@/data/pte/constants";
import { X, Check, ShieldCheck, AlertCircle } from "lucide-react";

export default function ComparisonSection() {
   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-white relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none"></div>
         <div className="max-w-[1000px] mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16 space-y-4">
               <div className="inline-flex items-center gap-2 bg-surface-dim px-4 py-2 rounded-full border border-outline-variant">
                  <span className="text-[11px] md:text-[13px] font-bold text-primary tracking-wide uppercase">Direct Comparison</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight">Why Book With Fryment?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
               {/* Others */}
               <div className="bg-surface-dim border border-outline rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-sm opacity-90 transition-all hover:bg-surface-muted">
                  <h3 className="text-on-surface-variant font-black mb-8 text-lg md:text-xl border-b border-outline pb-4 flex items-center gap-3">
                     <AlertCircle className="w-6 h-6 text-outline" />
                     Other Platforms
                  </h3>
                  <div className="space-y-8">
                     {comparisonPoints.map((row, i) => (
                        <div key={`bad-${i}`} className="flex items-start gap-4">
                           <div className="mt-1 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                              <X className="w-3.5 h-3.5 text-red-500" />
                           </div>
                           <div>
                              <p className="text-xs text-on-surface-variant font-bold mb-1 uppercase tracking-wider">{row.feature}</p>
                              <p className="text-sm md:text-base font-semibold text-on-surface">{row.others}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Fryment */}
               <div className="bg-gradient-to-br from-primary to-primary-dark rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all group">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>

                  <h3 className="text-white font-black mb-8 text-xl md:text-2xl border-b border-white/20 pb-4 flex justify-between items-center relative z-10">
                     Fryment Advantage
                     <div className="bg-white/20 backdrop-blur-md p-2 rounded-full shadow-inner">
                        <ShieldCheck className="w-6 h-6 text-white" />
                     </div>
                  </h3>
                  <div className="space-y-8 relative z-10">
                     {comparisonPoints.map((row, i) => (
                        <div key={`good-${i}`} className="flex items-start gap-4">
                           <div className="mt-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                              <Check className="w-4 h-4 text-primary font-bold" />
                           </div>
                           <div>
                              <p className="text-xs text-emerald-100 font-bold mb-1 uppercase tracking-wider">{row.feature}</p>
                              <p className="text-base md:text-xl font-black text-white leading-tight">{row.prestige}</p>
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
