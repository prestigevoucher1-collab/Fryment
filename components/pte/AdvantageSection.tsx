"use client";
import Image from "next/image";

export default function AdvantageSection() {
   return (
      <section className="py-16 md:py-20 px-4 md:px-6 lg:px-16 bg-[#fafcff] relative z-10">
         <div className="max-w-[1200px] mx-auto space-y-8 md:space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
               <span className="text-secondary font-black text-xs md:text-[14px] tracking-wide inline-block mb-1">The Fryment Advantage</span>
               <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tight leading-tight">
                  Focus on the Exam.<br />We'll Handle the Rest.
               </h2>
               <p className="text-primary/70 font-medium text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                  India's most trusted partner for PTE Exam Vouchers. We save you time, money, and international transaction stress.
               </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 md:auto-rows-[280px]">

               {/* Box 1 - Big Highlight */}
               <div className="md:col-span-8 min-h-[220px] md:min-h-0 bg-gradient-to-br from-[#f0f7ff] to-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 relative overflow-hidden border border-secondary/10 shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                     <span className="material-icons text-[120px] md:text-[180px] text-secondary -rotate-12 translate-x-8 -translate-y-8">savings</span>
                  </div>
                  <div className="relative z-10 flex flex-col justify-end md:justify-center h-full max-w-md space-y-3">
                     <div className="w-10 h-10 bg-surface rounded-xl shadow-sm border border-accent/20 flex items-center justify-center mb-1">
                        <span className="material-icons text-secondary text-[20px]">payments</span>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-black text-primary leading-tight tracking-tight">
                        <span className="text-secondary">₹2,800+</span><br />Instant Savings
                     </h3>
                     <p className="text-primary/70 font-medium leading-relaxed text-xs md:text-sm">
                        Bypass massive international transaction fees. Get heavily discounted native rates on official PTE registrations instantly.
                     </p>
                  </div>
               </div>

               {/* Box 2 - Dark Highlight */}
               <div className="md:col-span-4 min-h-[220px] md:min-h-0 bg-primary rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-end text-white shadow-xl">
                  <div className="absolute top-6 right-6">
                     <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,204,0,0.3)]">
                        <span className="material-icons text-primary text-[20px]">bolt</span>
                     </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2 leading-tight">60 Minutes<br />Delivery</h3>
                  <p className="text-blue-200/70 font-medium text-xs md:text-[13px] leading-relaxed">
                     No stressful waiting periods. Your unique voucher string arrives by securely encrypted email and WhatsApp instantly upon payment.
                  </p>
               </div>

               {/* Box 3 - Small Text Focused */}
               <div className="md:col-span-4 min-h-[220px] md:min-h-0 bg-amber-50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute top-6 right-6">
                     <span className="material-icons text-amber-500 text-[40px] opacity-40">verified_user</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-primary mb-2 leading-tight">100%<br />Legitimate</h3>
                  <p className="text-primary/80 font-medium text-xs md:text-[13px] leading-relaxed">
                     Official Pearson VUE partnered codes. Valid across all certified testing centers worldwide without any document locks or expiries for 12 months.
                  </p>
               </div>

               {/* Box 4 - Mixed Image Highlight */}
               <div className="md:col-span-8 min-h-[250px] md:min-h-0 bg-surface rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden border border-accent/20 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="flex-1 space-y-3 z-10 relative">
                     <div className="inline-flex items-center gap-1.5 bg-green-50 px-2.5 py-1 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] md:text-[11px] font-black text-green-700 tracking-wide">Active Now</span>
                     </div>
                     <h3 className="text-xl md:text-2xl font-black text-primary leading-tight tracking-tight">Dedicated 24/7 Expert Guidance</h3>
                     <p className="text-primary/70 font-medium text-xs md:text-[13px] leading-relaxed"></p>
                  </div>
                  <div className="hidden md:block w-full md:w-[45%] h-32 md:h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative shadow-inner">
                     <Image src="/images/support_agent.png" width={400} height={300} alt="Support" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
