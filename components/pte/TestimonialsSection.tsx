"use client";

import { testimonials } from "@/data/pte/constants";

function TestimonialCard({ t, prefix, i }: { t: typeof testimonials[0]; prefix: string; i: number }) {
   return (
      <div key={`${prefix}-${i}`} className="w-[300px] md:w-[350px] shrink-0 bg-white rounded-xl md:rounded-2xl border border-slate-100 p-4 md:p-5 shadow-sm flex flex-col gap-2.5 whitespace-normal transition-shadow hover:shadow-md">
         <div className="flex justify-between items-start">
            <div className="flex gap-1 text-[#ffcc00] text-sm">
               <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
         </div>
         <p className="text-slate-600 font-medium text-xs md:text-sm leading-relaxed">"{t.content}"</p>
         <div className="flex items-center gap-2.5 pt-3 border-t border-slate-50 mt-1">
            <img src={t.img} alt={t.name} className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover bg-slate-100" />
            <div>
               <p className="font-bold text-[#091e42] text-xs md:text-sm">{t.name}</p>
               <p className="text-slate-400 text-[9px] md:text-[10px] font-medium">{t.role}</p>
            </div>
         </div>
      </div>
   );
}

export default function TestimonialsSection() {
   const reversed = [...testimonials].reverse();

   return (
      <section className="pt-6 md:pt-8 pb-16 md:pb-24 px-4 md:px-6 lg:px-16 bg-[#fafcff] overflow-hidden">
         <div className="max-w-[1400px] mx-auto text-center mb-12 md:mb-16">
            <div className="mb-8 md:mb-12">
               <span className="text-[#1565d8] font-black text-[11px] md:text-xs tracking-wide block mb-2">Customer Reviews</span>
               <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight mb-3 md:mb-4 leading-tight">
                  Why 10,000+ students <br className="hidden md:block" />
                  <span className="relative inline-block italic text-[#1565d8] md:ml-2 mt-1 md:mt-0">
                     trusted us
                     <span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-[#ffcc00]/60 -z-10 rounded-sm transform -rotate-1"></span>
                  </span>
               </h2>
               <p className="text-slate-500 font-medium text-xs md:text-sm">Don't take our word for it. Here's what test takers say about Fryment.</p>
            </div>

            {/* Rating Platforms */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24 mb-10">
               <div className="text-center">
                  <div className="flex items-center gap-1.5 justify-center mb-2">
                     <div className="w-5 h-5 bg-[#ff492c] rounded-full flex items-center justify-center text-white font-bold text-[8px]">G2</div>
                     <span className="font-bold text-sm text-slate-700">G2</span>
                  </div>
                  <div className="font-black text-3xl text-[#091e42]">4.6<span className="text-sm text-slate-400 font-medium">/5</span></div>
                  <div className="text-[10px] text-slate-400 mt-1">(773)</div>
               </div>
               <div className="text-center">
                  <div className="flex items-center gap-1.5 justify-center mb-2">
                     <span className="material-icons text-[#00b67a] text-lg">star</span>
                     <span className="font-bold text-sm text-slate-700">Trustpilot</span>
                  </div>
                  <div className="font-black text-3xl text-[#091e42]">4.7<span className="text-sm text-slate-400 font-medium">/5</span></div>
                  <div className="text-[10px] text-slate-400 mt-1">(743)</div>
               </div>
               <div className="text-center">
                  <div className="flex items-center gap-1.5 justify-center mb-2">
                     <span className="material-icons text-[#4285F4] text-lg">public</span>
                     <span className="font-bold text-sm text-slate-700">Google</span>
                  </div>
                  <div className="font-black text-3xl text-[#091e42]">4.8<span className="text-sm text-slate-400 font-medium">/5</span></div>
                  <div className="text-[10px] text-slate-400 mt-1">(1.2k)</div>
               </div>
            </div>
         </div>

         {/* Marquee Rows */}
         <div className="relative flex flex-col gap-5 md:gap-6 overflow-hidden py-4 md:py-6 max-w-[1920px] mx-auto mask-image-[linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)]">
            <div className="flex animate-marquee whitespace-nowrap gap-5 md:gap-6 items-center w-max hover:[animation-play-state:paused]">
               {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`r1-${i}`} t={t} prefix="r1" i={i} />
               ))}
            </div>
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-5 md:gap-6 items-center w-max hover:[animation-play-state:paused] mt-2">
               {[...reversed, ...reversed, ...reversed].map((t, i) => (
                  <TestimonialCard key={`r2-${i}`} t={t} prefix="r2" i={i} />
               ))}
            </div>
         </div>
      </section>
   );
}
