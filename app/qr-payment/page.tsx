"use client";

import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { QrCode, ShieldCheck, Zap, Lock, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function QRPaymentPage() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         
         <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 lg:py-20 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
               
               {/* Left Column - Content */}
               <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left duration-700">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                     <ShieldCheck className="w-5 h-5" /> Secure Checkout
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-headline font-black text-on-surface tracking-tight mb-6 leading-tight">
                     Complete your<br/>payment securely.
                  </h1>
                  <p className="text-on-surface-variant text-lg font-medium mb-10 max-w-lg leading-relaxed">
                     We use manual UPI verification to offer you the absolute lowest price on Pearson and Duolingo vouchers, avoiding international card fees.
                  </p>
                  
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                           <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                           <h3 className="font-bold text-on-surface text-lg">Instant Verification</h3>
                           <p className="text-on-surface-variant text-sm font-medium mt-1">Our team verifies UTR numbers within minutes of receiving your screenshot.</p>
                        </div>
                     </div>
                     
                     <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
                           <Lock className="w-6 h-6 text-secondary-dark" />
                        </div>
                        <div>
                           <h3 className="font-bold text-on-surface text-lg">Bank-Grade Security</h3>
                           <p className="text-on-surface-variant text-sm font-medium mt-1">Payments are routed directly through your own trusted UPI banking app.</p>
                        </div>
                     </div>
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
                              <span className="block font-mono font-semibold text-[10px] opacity-60 tracking-widest uppercase mt-1">Voucher payment slip</span>
                           </div>
                           <div className="bg-primary text-white font-mono text-[10px] px-2.5 py-1.5 tracking-widest rotate-2 font-bold shadow-sm">
                              MANUAL
                           </div>
                        </div>

                        {/* ticket-qr-zone */}
                        <div className="flex justify-center py-6 border-b-2 border-dashed border-primary/20">
                           <div className="w-40 h-40 bg-white flex items-center justify-center border-[6px] border-[#fffdf8] outline outline-1 outline-primary/20 shadow-inner relative"
                                style={{ background: 'repeating-conic-gradient(#005b4a 0% 25%, transparent 0% 50%) 0 0/10px 10px', backgroundBlendMode: 'normal' }}>
                                <div className="w-[140px] h-[140px] bg-white flex items-center justify-center z-10 relative">
                                  {/* 
                                  Uncomment and add your real QR image here:
                                  <Image src="/qr-code.png" alt="UPI QR Code" fill className="object-contain p-2" /> 
                                  */}
                                  <QrCode className="w-16 h-16 text-primary" />
                                </div>
                           </div>
                        </div>

                        {/* ticket-upi */}
                        <div className="text-center py-5 border-b-2 border-dashed border-primary/20">
                           <div className="font-mono text-[10px] font-bold tracking-widest opacity-60 uppercase text-on-surface">Business UPI ID</div>
                           <div className="font-mono text-lg font-black mt-1 text-on-surface tracking-tight">fryment@upi</div>
                        </div>

                        {/* ticket-steps */}
                        <div className="py-5 text-[13px] leading-relaxed text-on-surface font-medium">
                           <div className="flex gap-3 mb-3">
                              <span className="font-mono text-[11px] font-bold text-primary shrink-0 w-3 mt-0.5">1</span>
                              <span>Enter the exact voucher amount in your UPI app.</span>
                           </div>
                           <div className="flex gap-3 mb-3">
                              <span className="font-mono text-[11px] font-bold text-primary shrink-0 w-3 mt-0.5">2</span>
                              <span>Screenshot the success screen showing the UTR / Transaction ID.</span>
                           </div>
                           <div className="flex gap-3">
                              <span className="font-mono text-[11px] font-bold text-primary shrink-0 w-3 mt-0.5">3</span>
                              <span>Send the screenshot to our WhatsApp support.</span>
                           </div>
                        </div>

                        {/* ticket-cta */}
                        <a href="https://wa.me/919930635149" target="_blank" rel="noopener noreferrer" 
                           className="mt-2 w-full py-4 rounded-xl bg-[#25D366] text-white font-black text-sm flex items-center justify-center gap-2 hover:bg-[#20b858] transition-colors shadow-lg shadow-[#25D366]/20 hover:-translate-y-0.5 hover:shadow-xl">
                           <MessageCircle className="w-5 h-5" />
                           Share Screenshot
                        </a>

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
