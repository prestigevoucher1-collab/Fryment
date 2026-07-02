"use client";
import { ExamConfig } from "@/data/pte/exams";
import Image from "next/image";
import { PiggyBank, Zap, ShieldCheck, Headset } from "lucide-react";

interface ExamAdvantageProps {
   exam: ExamConfig;
}

export default function ExamAdvantage({ exam }: ExamAdvantageProps) {
   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-gradient-to-br from-slate-50 to-emerald-50/30 relative z-10 border-b border-outline-variant">
         <div className="max-w-[1200px] mx-auto space-y-10 md:space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
               <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-outline-variant shadow-sm shadow-primary/5">
                  <span className="text-[11px] md:text-[13px] font-bold text-on-surface tracking-wide uppercase">The Fryment Advantage</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                  Focus on your {exam.name}.<br /><span className="bg-gradient-to-r from-primary to-teal-500 bg-clip-text text-transparent">We'll Handle the Rest.</span>
               </h2>
               <p className="text-on-surface-variant font-medium text-sm md:text-lg leading-relaxed max-w-lg mx-auto">
                  India's most trusted partner for {exam.name} Exam Vouchers. We save you time, money, and international transaction stress.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 md:auto-rows-[300px]">

               {/* Box 1 - Big Highlight */}
               <div className="md:col-span-8 min-h-[240px] md:min-h-0 bg-white/80 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-10 relative overflow-hidden border border-outline transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-emerald-500/30 group flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                     <PiggyBank className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] text-primary -rotate-12 translate-x-8 -translate-y-8" />
                  </div>
                  <div className="w-14 h-14 bg-surface-muted rounded-2xl shadow-sm border border-outline flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                     <PiggyBank className="text-primary w-7 h-7 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="relative z-10 max-w-md space-y-3">
                     <h3 className="text-2xl md:text-4xl font-black text-on-surface leading-tight tracking-tight">
                        <span className="text-primary">Save {exam.saveAmount}</span><br />Instant Discount
                     </h3>
                     <p className="text-on-surface-variant font-medium leading-relaxed text-sm">
                        Bypass massive international transaction fees. Get heavily discounted native rates on official {exam.name} registrations instantly.
                     </p>
                  </div>
               </div>

               {/* Box 2 - Dark Highlight */}
               <div className="md:col-span-4 min-h-[240px] md:min-h-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[1.5rem] md:rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                     <Zap className="text-white w-7 h-7" />
                  </div>
                  <div className="relative z-10 space-y-3">
                     <h3 className="text-2xl md:text-3xl font-black leading-tight">60 Minutes<br />Delivery</h3>
                     <p className="text-slate-300 font-medium text-sm leading-relaxed">
                        No stressful waiting periods. Your unique voucher string arrives by securely encrypted email and WhatsApp instantly upon payment.
                     </p>
                  </div>
               </div>

               {/* Box 3 - Small Text Focused */}
               <div className="md:col-span-4 min-h-[240px] md:min-h-0 bg-surface-dim rounded-[1.5rem] md:rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between border border-outline-variant hover:shadow-xl hover:shadow-teal-900/10 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-teal-200 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300">
                     <ShieldCheck className="text-secondary-dark w-7 h-7 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="space-y-3 relative z-10">
                     <h3 className="text-2xl md:text-3xl font-black text-on-surface leading-tight">100%<br />Legitimate</h3>
                     <p className="text-on-surface-variant font-medium text-sm leading-relaxed">
                        Official {exam.name} partnered codes. Valid across all certified testing centers worldwide without any document locks or expiries for 12 months.
                     </p>
                  </div>
               </div>

               {/* Box 4 - Mixed Image Highlight */}
               <div className="md:col-span-8 min-h-[250px] md:min-h-0 bg-white/80 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 relative overflow-hidden border border-outline shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-center hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-emerald-500/30 transition-all duration-300 group">
                  <div className="flex-1 space-y-4 z-10 relative">
                     <div className="w-14 h-14 bg-surface-muted rounded-2xl flex items-center justify-center mb-2 group-hover:bg-primary transition-colors duration-300">
                        <Headset className="text-primary w-7 h-7 group-hover:text-white transition-colors duration-300" />
                     </div>
                     <div className="inline-flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[11px] font-bold text-green-800 tracking-wide">Active Now</span>
                     </div>
                     <h3 className="text-2xl md:text-3xl font-black text-on-surface leading-tight tracking-tight">Dedicated 24/7 Expert Guidance</h3>
                     <p className="text-on-surface-variant font-medium text-sm leading-relaxed">Questions about your slot? Form filling errors? We have experts ready to guide you step-by-step through WhatsApp or Direct Call.</p>
                  </div>
                  <div className="hidden md:block w-full md:w-[45%] h-40 md:h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden relative shadow-inner group-hover:shadow-lg transition-shadow duration-300">
                     <Image src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=400&h=300&fit=crop" width={400} height={300} alt="Support" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
