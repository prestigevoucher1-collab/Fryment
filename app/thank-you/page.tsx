"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, ShieldCheck, Home } from "lucide-react";
import Link from "next/link";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";

function ThankYouContent() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   
   const paymentId = searchParams.get("paymentId");
   const orderId = searchParams.get("orderId");
   const amount = searchParams.get("amount");

   useEffect(() => {
      if (!paymentId) {
         router.replace("/");
      }
   }, [paymentId, router]);

   if (!paymentId) {
      return null;
   }

   return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         
         <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 lg:py-20 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
               
               {/* Left Column - Content */}
               <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
                  <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm tracking-widest uppercase mb-4">
                     <ShieldCheck className="w-5 h-5" /> Payment Verified
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mb-6 leading-tight">
                     Payment<br/>Successful!
                  </h1>
                  <p className="text-on-surface-variant text-lg font-medium mb-10 max-w-lg leading-relaxed">
                     Your transaction has been securely processed. Your voucher code will be delivered to your email and WhatsApp within <strong>60 minutes</strong>.
                  </p>
                  
                  <div className="flex items-start gap-4 bg-amber-50 text-amber-900 p-6 rounded-2xl border border-amber-200/50 max-w-lg shadow-sm">
                     <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                     <p className="text-sm font-medium leading-relaxed">
                        Please keep your Payment ID handy. If you don't receive your code within 60 minutes, contact our 24/7 WhatsApp support.
                     </p>
                  </div>
               </div>

               {/* Right Column - Ticket Stub UI */}
               <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-700 delay-150">
                  <div className="w-full max-w-[380px] bg-[#fffdf8] relative drop-shadow-2xl mx-auto lg:mx-0" 
                       style={{ clipPath: 'polygon(0% 12px, 12px 0%, calc(100% - 12px) 0%, 100% 12px, 100% calc(50% - 10px), calc(100% - 10px) 50%, 100% calc(50% + 10px), 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0% calc(100% - 12px), 0% calc(50% + 10px), 10px 50%, 0% calc(50% - 10px))' }}>
                     <div className="p-8 pb-6">
                        {/* ticket-head */}
                        <div className="flex justify-between items-start pb-5 border-b-2 border-dashed border-primary/20">
                           <div className="font-headline font-bold text-xl text-on-surface">
                              Fryment
                              <span className="block font-mono font-semibold text-[10px] opacity-60 tracking-widest uppercase mt-1">Official Receipt</span>
                           </div>
                           <div className="bg-emerald-600 text-white font-mono text-[10px] px-2.5 py-1.5 tracking-widest rotate-2 font-bold shadow-sm">
                              PAID
                           </div>
                        </div>

                        {/* ticket-qr-zone (replaced with success checkmark) */}
                        <div className="flex justify-center py-8 border-b-2 border-dashed border-primary/20">
                           <div className="w-32 h-32 bg-emerald-50 rounded-full flex items-center justify-center border-8 border-white outline outline-1 outline-emerald-200 shadow-inner relative">
                              <CheckCircle2 className="w-14 h-14 text-emerald-500 animate-in zoom-in duration-500 delay-300" />
                              <div className="absolute inset-0 rounded-full border-2 border-emerald-500 border-dashed animate-[spin_10s_linear_infinite] opacity-20"></div>
                           </div>
                        </div>

                        {/* ticket-details */}
                        <div className="py-5 border-b-2 border-dashed border-primary/20 space-y-4">
                           <div>
                              <div className="font-mono text-[10px] font-bold tracking-widest opacity-60 uppercase text-on-surface">Payment ID</div>
                              <div className="font-mono text-sm font-black mt-1 text-on-surface tracking-tight break-all">{paymentId}</div>
                           </div>
                           {orderId && (
                              <div>
                                 <div className="font-mono text-[10px] font-bold tracking-widest opacity-60 uppercase text-on-surface">Order ID</div>
                                 <div className="font-mono text-sm font-black mt-1 text-on-surface tracking-tight break-all">{orderId}</div>
                              </div>
                           )}
                           {amount && (
                              <div className="flex justify-between items-end pt-2">
                                 <div className="font-mono text-[10px] font-bold tracking-widest opacity-60 uppercase text-on-surface">Amount Paid</div>
                                 <div className="font-mono text-xl font-black text-emerald-600 tracking-tight">₹{amount}</div>
                              </div>
                           )}
                        </div>

                        {/* ticket-cta */}
                        <Link href="/"
                           className="mt-6 w-full py-4 rounded-xl bg-primary text-white font-black text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:shadow-xl">
                           <Home className="w-5 h-5" />
                           Return Home
                        </Link>

                        {/* ticket-barcode */}
                        <div className="h-8 mt-6 opacity-60" style={{ background: 'repeating-linear-gradient(90deg, #005b4a 0 2px, transparent 2px 5px, #005b4a 5px 6px, transparent 6px 10px)' }}></div>
                     </div>
                  </div>
               </div>

            </div>
         </main>
         <Footer />
      </div>
   );
}

export default function ThankYouPage() {
   return (
      <Suspense fallback={<div className="min-h-screen bg-slate-50"></div>}>
         <ThankYouContent />
      </Suspense>
   );
}
