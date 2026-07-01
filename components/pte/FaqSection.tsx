"use client";

import { useState } from "react";
import { faqs } from "@/data/pte/constants";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FaqSection() {
   const [activeFaq, setActiveFaq] = useState<number | null>(null);

   return (
      <section className="py-16 md:py-32 px-4 md:px-6 lg:px-16 bg-white relative" id="faq">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] pointer-events-none"></div>
         <div className="max-w-[800px] mx-auto relative z-10">
            <div className="text-center mb-12 md:mb-16 space-y-4">
               <div className="inline-flex items-center gap-2 bg-surface-dim px-4 py-2 rounded-full border border-outline-variant">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span className="text-[11px] md:text-[13px] font-bold text-primary tracking-wide uppercase">Help Center</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="grid gap-4">
               {faqs.map((faq, idx) => {
                  const isActive = activeFaq === idx;
                  return (
                     <div key={idx} className={`bg-white rounded-2xl md:rounded-[1.5rem] border transition-all duration-300 ${isActive ? 'border-emerald-500 shadow-md shadow-primary/5' : 'border-outline hover:border-outline shadow-sm'}`}>
                        <button onClick={() => setActiveFaq(isActive ? null : idx)} className="w-full text-left px-5 md:px-8 py-4 md:py-6 flex justify-between items-center gap-4 group">
                           <span className="text-sm md:text-lg font-bold text-on-surface leading-tight pr-4">{faq.q}</span>
                           <div className={`w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'bg-surface-dim text-outline group-hover:bg-surface-dim group-hover:text-primary-light'}`}>
                              {isActive ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                           </div>
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                           <div className="px-5 md:px-8 pb-5 md:pb-8 text-sm md:text-base text-on-surface-variant font-medium leading-relaxed">
                              {faq.a}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
