"use client";

import { CheckCircle, Play, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function TrustBar() {
   return (
      <div className="bg-white relative overflow-hidden -mt-1 border-b border-outline-variant">
         {/* Scrolling Brand Marquee */}
         <div className="py-3 relative z-20 overflow-hidden flex items-center bg-surface-dim border-y border-outline-variant">
            <div className="max-w-[1920px] mx-auto w-full flex items-center px-4 md:px-0">
               <div className="hidden md:flex items-center gap-3 pr-8 pl-6 border-r border-outline shrink-0 z-30">
                  <span className="text-emerald-800 text-xl font-black tracking-tight drop-shadow-sm">10k+</span>
                  <span className="text-primary text-xs font-bold tracking-wide whitespace-nowrap">Students Joined</span>
               </div>

               <div className="flex-1 overflow-hidden relative flex items-center pl-4 md:pl-8 mask-image-[linear-gradient(to_right,transparent,black_50px,black_calc(100%-50px),transparent)]">
                  <div className="flex animate-marquee-fast whitespace-nowrap gap-10 md:gap-14 items-center">
                     {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-10 md:gap-14 items-center shrink-0">
                           {[
                              { name: "Pearson VUE" },
                              { name: "Oxford University" },
                              { name: "Cambridge Assessment" },
                              { name: "IDP Global" },
                              { name: "British Council" },
                              { name: "PTE Academic" }
                           ].map(brand => (
                              <div key={brand.name} className="flex items-center gap-2 group cursor-default py-1">
                                 <CheckCircle className="w-4 h-4 text-primary-light" />
                                 <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-primary uppercase transition-colors">{brand.name}</span>
                              </div>
                           ))}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Video Guide Section */}
         <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-surface-dim relative z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-emerald-100 to-transparent rounded-full opacity-30 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-20">
               <div className="text-center space-y-4 max-w-2xl mb-12 md:mb-16">
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-outline-variant shadow-sm shadow-primary/5">
                     <span className="flex w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                     <span className="text-[11px] md:text-[13px] font-bold text-on-surface tracking-wide uppercase">Video Tutorial</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-on-surface leading-tight tracking-tight">
                     Book Your Slot in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Under 2 Minutes</span>
                  </h2>
                  <p className="text-sm md:text-base text-on-surface-variant font-medium leading-relaxed max-w-xl mx-auto">
                     Don't guess where to paste your code. Watch our verified walkthrough to securely apply your voucher and guarantee your exam slot seamlessly.
                  </p>
               </div>

               {/* Floating Video Player */}
               <div className="w-full relative group max-w-4xl mx-auto cursor-pointer">
                  <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-[1.5rem] md:rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition duration-1000 blur-sm"></div>
                  <div className="relative aspect-video bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden flex items-center justify-center">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                     <div className="w-16 h-16 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                        <Play className="w-8 h-8 md:w-12 md:h-12 text-primary ml-1 md:ml-2" />
                     </div>
                  </div>
               </div>

               {/* Steps */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20 w-full max-w-5xl mx-auto">
                  {[
                     { icon: Sparkles, title: "Apply Code", desc: "Paste voucher securely.", color: "text-primary-light", bg: "bg-surface-muted" },
                     { icon: CheckCircle, title: "Instant Save", desc: "Fee drops directly to zero.", color: "text-teal-500", bg: "bg-surface-muted" },
                     { icon: Clock, title: "Select Slot", desc: "Choose optimal date.", color: "text-green-500", bg: "bg-green-100" },
                     { icon: ShieldCheck, title: "Final Step", desc: "Zero extra payments.", color: "text-blue-500", bg: "bg-blue-100" }
                  ].map((item, i) => (
                     <div key={i} className="p-5 bg-white rounded-2xl border border-outline-variant flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/5 transition-all group">
                        <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center`}>
                           <item.icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div className="text-left space-y-1">
                           <h4 className="font-bold text-on-surface text-sm md:text-base leading-tight">{item.title}</h4>
                           <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
