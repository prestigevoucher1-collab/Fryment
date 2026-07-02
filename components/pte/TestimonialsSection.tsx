"use client";

import { testimonials } from "@/data/pte/constants";
import { Star } from "lucide-react";

function TestimonialCard({ t, prefix, i }: { t: typeof testimonials[0]; prefix: string; i: number }) {
   return (
      <div key={`${prefix}-${i}`} className="w-[300px] md:w-[380px] shrink-0 bg-white rounded-2xl md:rounded-[2rem] border border-outline-variant p-6 shadow-sm flex flex-col gap-4 whitespace-normal transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group">
         <div className="flex justify-between items-start">
            <div className="flex gap-1">
               <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
               <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
               <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
               <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
               <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-70 group-hover:opacity-100 transition-opacity">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
         </div>
         <p className="text-on-surface-variant font-medium text-sm md:text-base leading-relaxed">"{t.content}"</p>
         <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-emerald-50 bg-white">
               <img src={t.img} width={48} height={48} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <div>
               <p className="font-bold text-on-surface text-sm">{t.name}</p>
               <p className="text-primary text-xs font-semibold">{t.role}</p>
            </div>
         </div>
      </div>
   );
}

export default function TestimonialsSection() {
   const reversed = [...testimonials].reverse();

   return (
      <section className="pt-10 md:pt-16 pb-16 md:pb-24 bg-surface-dim overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none"></div>
         <div className="max-w-[1400px] mx-auto text-center mb-12 md:mb-16 relative z-10 px-4 md:px-6 lg:px-16">
            <div className="mb-10 md:mb-16">
               <div className="inline-flex items-center gap-2 bg-surface-muted/50 px-4 py-2 rounded-full border border-outline-variant mb-6">
                  <span className="text-[11px] md:text-[13px] font-bold text-emerald-800 tracking-wide uppercase">Customer Reviews</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight mb-4 leading-tight">
                  Why 10,000+ students <br className="hidden md:block" />
                  <span className="relative inline-block text-primary md:ml-2">
                     trusted us
                     <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-300/50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
                  </span>
               </h2>
               <p className="text-on-surface-variant font-medium text-sm md:text-base">Don't take our word for it. Here's what test takers say about Fryment.</p>
            </div>

            {/* Rating Platforms */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24">
               <div className="text-center group">
                  <div className="flex items-center gap-2 justify-center mb-2">
                     <div className="w-6 h-6 bg-[#ff492c] rounded-full flex items-center justify-center text-white font-bold text-[10px] shadow-sm">G2</div>
                     <span className="font-bold text-sm text-on-surface">G2</span>
                  </div>
                  <div className="font-black text-3xl text-on-surface group-hover:text-primary transition-colors">4.6<span className="text-sm text-outline font-medium">/5</span></div>
                  <div className="text-xs text-outline mt-1">(773 reviews)</div>
               </div>
               <div className="text-center group">
                  <div className="flex items-center gap-2 justify-center mb-2">
                     <div className="w-6 h-6 bg-[#00b67a] rounded-full flex items-center justify-center text-white shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-white" />
                     </div>
                     <span className="font-bold text-sm text-on-surface">Trustpilot</span>
                  </div>
                  <div className="font-black text-3xl text-on-surface group-hover:text-primary transition-colors">4.7<span className="text-sm text-outline font-medium">/5</span></div>
                  <div className="text-xs text-outline mt-1">(743 reviews)</div>
               </div>
               <div className="text-center group">
                  <div className="flex items-center gap-2 justify-center mb-2">
                     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                     </svg>
                     <span className="font-bold text-sm text-on-surface">Google</span>
                  </div>
                  <div className="font-black text-3xl text-on-surface group-hover:text-primary transition-colors">4.8<span className="text-sm text-outline font-medium">/5</span></div>
                  <div className="text-xs text-outline mt-1">(1.2k reviews)</div>
               </div>
            </div>
         </div>

         {/* Marquee Rows */}
         <div className="relative flex flex-col gap-6 md:gap-8 overflow-hidden py-4 max-w-[1920px] mx-auto mask-image-[linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)]">
            <div className="flex animate-marquee whitespace-nowrap gap-6 md:gap-8 items-center w-max hover:[animation-play-state:paused]">
               {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                  <TestimonialCard key={`r1-${i}`} t={t} prefix="r1" i={i} />
               ))}
            </div>
            <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 md:gap-8 items-center w-max hover:[animation-play-state:paused] mt-2">
               {[...reversed, ...reversed, ...reversed].map((t, i) => (
                  <TestimonialCard key={`r2-${i}`} t={t} prefix="r2" i={i} />
               ))}
            </div>
         </div>
      </section>
   );
}
