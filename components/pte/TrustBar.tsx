"use client";

export default function TrustBar() {
   return (
      <div className="bg-[#f0f7ff] relative overflow-hidden -mt-1">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

         {/* Scrolling Brand Marquee */}
         <div className="py-2.5 relative z-20 overflow-hidden font-body flex items-center shadow-[inset_0_4px_20px_rgba(0,0,0,0.1)] bg-gradient-to-r from-[#091e42] via-[#113a77] to-[#091e42]">
            <div className="max-w-[1920px] mx-auto w-full flex items-center px-4 md:px-0">
               <div className="hidden md:flex items-center gap-3 pr-8 pl-6 border-r border-[#1565d8]/40 shrink-0 z-30">
                  <span className="text-white text-xl font-black tracking-tight drop-shadow-sm">10k+</span>
                  <span className="text-blue-100 text-xs font-bold tracking-wide whitespace-nowrap">Students Joined</span>
               </div>

               <div className="flex-1 overflow-hidden relative flex items-center pl-4 md:pl-8 mask-image-[linear-gradient(to_right,transparent,black_50px,black_calc(100%-50px),transparent)]">
                  <div className="flex animate-marquee-fast whitespace-nowrap gap-10 md:gap-14 items-center">
                     {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-10 md:gap-14 items-center shrink-0">
                           {[
                              { name: "Pearson VUE", icon: "verified" },
                              { name: "Oxford University", icon: "school" },
                              { name: "Cambridge Assessment", icon: "menu_book" },
                              { name: "IDP Global", icon: "public" },
                              { name: "British Council", icon: "language" },
                              { name: "PTE Academic", icon: "workspace_premium" }
                           ].map(brand => (
                              <div key={brand.name} className="flex items-center gap-2 group cursor-default py-1">
                                 <span className="material-icons text-[#ffcc00] text-[16px] drop-shadow-sm">{brand.icon}</span>
                                 <span className="text-[11px] md:text-[12px] font-bold tracking-[0.1em] text-blue-100 group-hover:text-white transition-colors">{brand.name}</span>
                              </div>
                           ))}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Video Guide Section */}
         <section className="py-12 md:py-16 px-4 md:px-6 lg:px-16 bg-[#091e42] relative z-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-[#1565d8]/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto flex flex-col items-center relative z-20">
               <div className="text-center space-y-4 max-w-2xl mb-8 md:mb-10">
                  <div className="inline-flex items-center gap-2 bg-[#1565d8]/20 px-4 py-1.5 rounded-full border border-[#1565d8]/40 backdrop-blur-md shadow-lg">
                     <span className="material-icons text-[12px] md:text-[14px] text-[#ffcc00] animate-pulse">play_circle</span>
                     <span className="text-[10px] md:text-[13px] font-black text-blue-50 tracking-wide">Video Tutorial</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                     Book Your Slot in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#ffcc00]">Under 2 Minutes</span>
                  </h2>
                  <p className="text-xs md:text-sm text-blue-200/70 font-medium leading-relaxed max-w-xl mx-auto">
                     Don't guess where to paste your code. Watch our verified walkthrough to securely apply your voucher and guarantee your exam slot seamlessly.
                  </p>
               </div>

               {/* Floating Video Player */}
               <div className="w-full relative group max-w-3xl mx-auto cursor-pointer">
                  <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-[#1565d8] to-[#ffcc00] rounded-[1.5rem] md:rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative aspect-video bg-black/50 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-1.5 md:p-2 shadow-2xl border border-white/10 overflow-hidden">
                     <iframe className="w-full h-full rounded-[1rem] md:rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-opacity duration-700 relative z-20" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Guide" frameBorder="0" allowFullScreen></iframe>
                  </div>
               </div>

               {/* Steps */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 w-full max-w-4xl mx-auto">
                  {[
                     { icon: "ads_click", title: "Apply Code", desc: "Paste voucher securely.", color: "text-blue-400" },
                     { icon: "savings", title: "Instant Save", desc: "Fee drops directly to zero.", color: "text-[#ffcc00]" },
                     { icon: "schedule", title: "Select Slot", desc: "Choose optimal date.", color: "text-green-400" },
                     { icon: "verified", title: "Final Step", desc: "Zero extra payments.", color: "text-purple-400" }
                  ].map((item, i) => (
                     <div key={i} className="p-3 md:p-4 bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors group">
                        <span className={`material-icons text-xl md:text-2xl ${item.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>{item.icon}</span>
                        <div className="text-left space-y-0.5">
                           <h4 className="font-black text-white text-xs md:text-sm leading-tight tracking-tight">{item.title}</h4>
                           <p className="text-[9px] md:text-[10px] text-blue-200/60 font-medium leading-tight">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
}
