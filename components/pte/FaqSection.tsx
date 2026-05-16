"use client";

import { useState } from "react";
import { faqs } from "@/data/pte/constants";

export default function FaqSection() {
   const [activeFaq, setActiveFaq] = useState<number | null>(null);

   return (
      <section className="py-16 md:py-32 px-4 md:px-6 lg:px-16 bg-[#fafcff]" id="faq">
         <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-10 md:mb-16">
               <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide block mb-3">Help Center</span>
               <h2 className="text-3xl md:text-5xl font-black text-[#091e42] tracking-tight">Frequently Asked Questions</h2>
            </div>

            <div className="grid gap-3">
               {faqs.map((faq, idx) => {
                  const isActive = activeFaq === idx;
                  return (
                     <div key={idx} className={`bg-white rounded-xl md:rounded-2xl border transition-all duration-300 ${isActive ? 'border-[#1565d8] shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}>
                        <button onClick={() => setActiveFaq(isActive ? null : idx)} className="w-full text-left px-4 md:px-6 py-3 md:py-4 flex justify-between items-center gap-4 group">
                           <span className="text-sm md:text-base font-bold text-[#091e42] leading-tight pr-4">{faq.q}</span>
                           <div className={`w-7 h-7 md:w-8 md:h-8 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-[#1565d8] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                              <span className={`material-icons text-[16px] md:text-[20px] transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`}>{isActive ? 'remove' : 'add'}</span>
                           </div>
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                           <div className="px-4 md:px-6 pb-4 md:pb-5 text-xs md:text-sm text-slate-500 font-medium leading-relaxed">
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
