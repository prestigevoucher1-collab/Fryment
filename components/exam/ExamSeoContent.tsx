"use client";

import React from "react";
import Link from "next/link";
import { Info, CheckCircle2, ShieldCheck, AlertTriangle, BookOpen, Clock, CreditCard, ChevronRight, Check } from "lucide-react";

export default function ExamSeoContent() {
   return (
      <section className="py-24 relative bg-white overflow-hidden border-t border-outline-variant">
         {/* Subtle Background Elements */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-surface-dim rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            
            {/* Header Section */}
            <div className="max-w-3xl mx-auto text-center mb-20 space-y-8">
               <div className="inline-flex items-center gap-2 bg-surface-dim px-4 py-2 rounded-full border border-outline-variant shadow-sm">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-[12px] font-bold text-primary tracking-wide uppercase">The Complete Guide</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                  Buy a Genuine PTE Voucher in India and Save on Your Exam Fee
               </h2>
               <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                  The official PTE Academic exam fee in India is ₹18,900. Fryment sells verified, Pearson-partnered PTE vouchers starting around ₹17,500, delivered by email and WhatsApp within 60 minutes of payment, valid for 12 months at any authorized test centre.
               </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
               
               {/* Left Sidebar (Sticky) */}
               <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-8">
                  
                  {/* Quick Facts Card */}
                  <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
                     {/* Decorative pattern inside card */}
                     <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
                     <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/10 blur-xl"></div>
                     
                     <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                        <ShieldCheck className="w-6 h-6 text-primary-light" />
                        PTE Voucher Facts
                     </h3>
                     <ul className="space-y-4 relative z-10">
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Exam</span>
                              <span className="font-semibold text-sm leading-tight">PTE Academic (Pearson Test of English)</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Conducting Body</span>
                              <span className="font-semibold text-sm leading-tight">Pearson VUE</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Official Exam Fee (2026)</span>
                              <span className="font-semibold text-sm leading-tight">₹18,900 (incl. 18% GST)</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Fryment Voucher Price</span>
                              <span className="font-semibold text-sm leading-tight">From ₹17,500</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <Clock className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Voucher Validity</span>
                              <span className="font-semibold text-sm leading-tight">12 months from purchase</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CreditCard className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Delivery Time</span>
                              <span className="font-semibold text-sm leading-tight">Under 60 minutes (Email + WA)</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Score Report Sending</span>
                              <span className="font-semibold text-sm leading-tight">Unlimited, free to any university</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Attempts Allowed</span>
                              <span className="font-semibold text-sm leading-tight">Up to 12 per 12-month period</span>
                           </div>
                        </li>
                        <li className="flex gap-3">
                           <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                           <div>
                              <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Support</span>
                              <span className="font-semibold text-sm leading-tight">24/7 WhatsApp and phone</span>
                           </div>
                        </li>
                     </ul>
                  </div>

               </div>

               {/* Main Content Area (Text Flows naturally) */}
               <div className="lg:col-span-8 min-w-0 w-full">
                  <div className="prose prose-lg prose-slate max-w-none 
                        prose-headings:text-on-surface prose-headings:font-bold prose-headings:tracking-tight 
                        prose-p:text-on-surface-variant prose-p:leading-relaxed 
                        prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary-dark
                        prose-strong:text-on-surface prose-strong:font-bold
                        prose-ul:text-on-surface-variant prose-li:marker:text-primary/40">
                     
                     <p className="lead text-xl text-on-surface font-medium border-l-4 border-primary pl-6 py-2 bg-surface-dim rounded-r-2xl shadow-sm mb-12">
                        Booking your PTE exam shouldn't mean paying full price through an international card and hoping the voucher code you found on a forum actually works. This page covers what a PTE voucher is, what it costs, how to redeem one safely, how Fryment compares to booking direct, and what to check before you buy from anyone.
                     </p>

                     <h2 className="text-3xl mt-12 mb-6">What Is a PTE Voucher, Exactly?</h2>
                     <p>
                        A PTE voucher is a prepaid code, issued through Pearson's authorized partner network, that you enter at checkout on the official Pearson PTE booking page. It reduces or covers your exam registration fee. The voucher itself doesn't book your slot — you still choose your test centre, date, and time on Pearson's website. The voucher only changes what you pay at the final step.
                     </p>
                     <p>
                        This matters because a lot of students confuse &quot;voucher&quot; with &quot;third-party booking,&quot; worried that using one means they're not really registering through Pearson. They are. The exam, the test centre, the scoring, and the official score report all come directly from Pearson — the voucher is purely a payment instrument.
                     </p>

                     {/* Custom Callout */}
                     <div className="not-prose my-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                           <Info className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-primary-dark mb-1">Pro Tip</h4>
                           <p className="text-sm text-primary-dark/80 leading-relaxed m-0">
                              Before you buy any voucher from any seller, confirm it's a <em>PTE Academic</em> voucher and not a PTE Core or PTE Home voucher. The three tests serve different purposes (university admission vs. Canada PR vs. UK family visas), and applying the wrong voucher type at checkout will get it rejected.
                           </p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-12 mb-6">How Much Does the PTE Exam Actually Cost in India?</h2>
                     <p>
                        As of 2026, the standard PTE Academic exam fee in India is ₹18,900, which includes 18% GST on a base fee of roughly ₹15,254. This same fee applies whether you're taking PTE Academic for a study visa, PTE Academic UKVI for a UK application, or PTE Core for Canadian permanent residency — Pearson prices them identically in India.
                     </p>
                     <p>
                        That ₹18,900 covers test centre access, AI-backed scoring across Listening, Reading, Writing, and Speaking, and unlimited free score reports sent to as many universities as you want. There's no late booking fee in India even if you register a day before your test, but rescheduling and cancellation follow strict timelines.
                     </p>

                     <h3 className="text-2xl mt-10 mb-6">PTE Fee vs. IELTS vs. TOEFL in India</h3>
                     
                     {/* Custom Table Design */}
                     <div className="not-prose overflow-x-auto w-full rounded-2xl border border-outline-variant shadow-sm my-8">
                        <table className="w-full text-left text-sm md:text-base min-w-[600px] bg-white">
                           <thead className="bg-surface-dim text-on-surface border-b border-outline-variant">
                              <tr>
                                 <th className="py-4 px-6 font-bold border-r border-outline-variant">Exam</th>
                                 <th className="py-4 px-6 font-bold border-r border-outline-variant">Standard Fee (India, 2026)</th>
                                 <th className="py-4 px-6 font-bold border-r border-outline-variant">Score Reports Included</th>
                                 <th className="py-4 px-6 font-bold">Results Timeline</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-outline-variant">
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-bold text-primary border-r border-outline-variant">PTE Academic</td>
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">₹18,900</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Unlimited, free</td>
                                 <td className="py-4 px-6 text-on-surface-variant">24–48 hours</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">IELTS</td>
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">~₹19,000</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Limited free copies, extra charges beyond</td>
                                 <td className="py-4 px-6 text-on-surface-variant">3–13 days</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">TOEFL iBT</td>
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">~₹16,900</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Limited free copies at booking</td>
                                 <td className="py-4 px-6 text-on-surface-variant">4–8 days</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">PTE Home (A1/A2/B1)</td>
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">₹15,300</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Unlimited, free</td>
                                 <td className="py-4 px-6 text-on-surface-variant">24–48 hours</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                     <p>
                        A Fryment voucher brings the PTE fee down further, applied in Indian Rupees with no international currency conversion charge — a real cost that adds up when paying Pearson directly with a card that isn't INR-denominated.
                     </p>

                     <h2 className="text-3xl mt-16 mb-6">Is a Fryment PTE Voucher Legit and Safe to Use?</h2>
                     <p>
                        This is the question every first-time buyer asks, and it's the right one to ask. Fraudulent &quot;voucher&quot; codes and fake discount screenshots are common on social media and resale groups, and using an invalid one at checkout can waste time right before a booking deadline.
                     </p>
                     <p>
                        Fryment vouchers are sourced through Pearson's authorized partner channel — the same mechanism through which language institutes and study-abroad consultancies legitimately resell discounted codes. Every code is verified before it's sent, works at any certified PTE test centre worldwide, and carries no hidden document locks or expiry surprises within its 12-month window. Fryment currently reports 8,000+ students served with a 4.9/5 average rating.
                     </p>

                     <div className="not-prose my-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                           <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-primary-dark mb-1">Pro Tip</h4>
                           <p className="text-sm text-primary-dark/80 leading-relaxed m-0">
                              When you receive your voucher, apply it immediately on Pearson's official site rather than saving it &quot;for later.&quot; This confirms the code is live and unused before you're under time pressure closer to your preferred exam date.
                           </p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-16 mb-6">How to Spot a Fake or Risky PTE Voucher Seller</h2>
                     <p>
                        Before buying from anyone — Fryment included — run through this checklist. It's the difference between a saved ₹1,400 and a lost booking window.
                     </p>

                     {/* Custom Numbered List Grid */}
                     <div className="not-prose my-10 grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-8 h-8 rounded-full bg-surface-dim border border-outline flex items-center justify-center text-sm font-bold text-on-surface mb-4">1</div>
                           <h4 className="font-bold text-on-surface mb-2">Check if the price is unrealistically low.</h4>
                           <p className="text-sm text-on-surface-variant leading-relaxed">Genuine authorized discounts sit in a narrow, predictable range. A voucher priced far below ₹15,000 is a red flag.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-8 h-8 rounded-full bg-surface-dim border border-outline flex items-center justify-center text-sm font-bold text-on-surface mb-4">2</div>
                           <h4 className="font-bold text-on-surface mb-2">Look for a working support channel.</h4>
                           <p className="text-sm text-on-surface-variant leading-relaxed">Don't just trust a payment link. Legitimate sellers offer a phone number or WhatsApp you can message before paying.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-8 h-8 rounded-full bg-surface-dim border border-outline flex items-center justify-center text-sm font-bold text-on-surface mb-4">3</div>
                           <h4 className="font-bold text-on-surface mb-2">Ask what happens if the code fails.</h4>
                           <p className="text-sm text-on-surface-variant leading-relaxed">A seller with no refund or replacement policy for a dead code at Pearson's checkout isn't worth the risk.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-8 h-8 rounded-full bg-surface-dim border border-outline flex items-center justify-center text-sm font-bold text-on-surface mb-4">4</div>
                           <h4 className="font-bold text-on-surface mb-2">Verify the voucher type matches.</h4>
                           <p className="text-sm text-on-surface-variant leading-relaxed">PTE Academic, PTE Core, and PTE Home vouchers are not interchangeable.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-8 h-8 rounded-full bg-surface-dim border border-outline flex items-center justify-center text-sm font-bold text-on-surface mb-4">5</div>
                           <h4 className="font-bold text-on-surface mb-2">Avoid codes in public groups.</h4>
                           <p className="text-sm text-on-surface-variant leading-relaxed">Codes shared in Telegram or WhatsApp groups are frequently already redeemed or expired by the time you try them.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-shadow">
                           <div className="w-8 h-8 rounded-full bg-surface-dim border border-outline flex items-center justify-center text-sm font-bold text-on-surface mb-4">6</div>
                           <h4 className="font-bold text-on-surface mb-2">Confirm the validity window.</h4>
                           <p className="text-sm text-on-surface-variant leading-relaxed">A code with no stated expiry before paying is a sign the seller hasn't verified it either.</p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-16 mb-6">How to Buy and Redeem a PTE Voucher on Fryment</h2>
                     
                     <div className="not-prose my-10 bg-white rounded-3xl p-8 md:p-10 border border-outline shadow-sm">
                        <div className="relative border-l-2 border-outline-variant ml-4 space-y-10 pb-4">
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Select your state and voucher quantity</strong> on the Fryment booking form on the homepage. Pricing and availability can vary slightly by state.</p>
                           </div>
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Complete payment securely</strong> through Fryment's checkout — UPI, cards, and net banking are all supported.</p>
                           </div>
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Receive your voucher code</strong> by email and WhatsApp within 60 minutes of successful payment.</p>
                           </div>
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Create or log into your official Pearson PTE account</strong> at pearsonpte.com — this is separate from Fryment.</p>
                           </div>
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Choose your test type, city, and preferred slot</strong> on the Pearson booking page based on test centre availability.</p>
                           </div>
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-primary"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Enter your voucher code</strong> in the &quot;Add Voucher or Promo Code&quot; field at checkout — the total updates automatically.</p>
                           </div>
                           <div className="relative pl-8">
                              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                              <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base m-0"><strong>Confirm and pay any remaining balance</strong>, then save your Pearson confirmation email as proof of booking.</p>
                           </div>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-16 mb-6">Fryment vs. Booking Direct vs. Other Voucher Sellers</h2>
                     
                     {/* Custom Table Design */}
                     <div className="not-prose overflow-x-auto w-full rounded-2xl border border-outline-variant shadow-sm my-8">
                        <table className="w-full text-left text-sm md:text-base min-w-[800px] bg-white">
                           <thead className="bg-surface-dim text-on-surface border-b border-outline-variant">
                              <tr>
                                 <th className="py-4 px-6 font-bold border-r border-outline-variant">Factor</th>
                                 <th className="py-4 px-6 font-bold border-r border-outline-variant">Booking Direct on Pearson</th>
                                 <th className="py-4 px-6 font-bold bg-primary/5 text-primary border-r border-outline-variant">Fryment Voucher</th>
                                 <th className="py-4 px-6 font-bold">Unverified Reseller / Forum Code</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-outline-variant">
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">Exam Fee</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">₹18,900 (full price)</td>
                                 <td className="py-4 px-6 font-bold text-primary bg-primary/5 border-r border-outline-variant">From ₹17,500</td>
                                 <td className="py-4 px-6 text-on-surface-variant">Often advertised lower, rarely honored</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">Delivery Time</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Instant (full fee paid immediately)</td>
                                 <td className="py-4 px-6 font-bold text-primary bg-primary/5 border-r border-outline-variant">Under 60 minutes</td>
                                 <td className="py-4 px-6 text-on-surface-variant">Hours to days, if at all</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">Currency Conversion</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Applies with non-INR cards</td>
                                 <td className="py-4 px-6 font-bold text-primary bg-primary/5 border-r border-outline-variant">None — priced in INR</td>
                                 <td className="py-4 px-6 text-on-surface-variant">Varies, often undisclosed</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">Voucher Verification</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Not applicable</td>
                                 <td className="py-4 px-6 font-bold text-primary bg-primary/5 border-r border-outline-variant">Verified before dispatch</td>
                                 <td className="py-4 px-6 text-on-surface-variant">Frequently invalid or redeemed</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">Support if Code Fails</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">Pearson general support only</td>
                                 <td className="py-4 px-6 font-bold text-primary bg-primary/5 border-r border-outline-variant">24/7 WhatsApp + call</td>
                                 <td className="py-4 px-6 text-on-surface-variant">Usually none</td>
                              </tr>
                              <tr className="hover:bg-surface-dim/50 transition-colors">
                                 <td className="py-4 px-6 font-medium text-on-surface border-r border-outline-variant">Validity Window</td>
                                 <td className="py-4 px-6 text-on-surface-variant border-r border-outline-variant">N/A</td>
                                 <td className="py-4 px-6 font-bold text-primary bg-primary/5 border-r border-outline-variant">12 months</td>
                                 <td className="py-4 px-6 text-on-surface-variant">Often unclear or unstated</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                     <h3 className="text-2xl mt-10 mb-6">Why Students Choose Fryment Over Booking Direct</h3>
                     <p>
                        Price is the headline reason, but it isn't the only one. Speed matters when a booking deadline is close — a 60-second delivery window versus an unclear &quot;1–2 business days&quot; from other sellers can be the difference between locking in a preferred test centre slot and missing it. INR-only pricing removes a variable that trips up a lot of students paying Pearson directly with cards that carry hidden foreign transaction markups. And having a real support channel — not a contact form that goes unanswered — matters more than it sounds like it should, right up until the moment a code doesn't apply correctly and you need a same-day fix.
                     </p>
                     <h2 className="text-3xl mt-16 mb-6">How to Use Fryment for Your PTE Journey — Start to Finish</h2>
                     <ol>
                        <li><strong>Land on the PTE page and check current pricing.</strong> Pricing can shift, so always confirm the live rate on the booking form rather than relying on a screenshot from a friend.</li>
                        <li><strong>Fill in your state and desired voucher quantity</strong>, then complete payment. If you're buying for a group — common with coaching batches or friends applying together — quantity discounts, if active, apply here.</li>
                        <li><strong>Check WhatsApp and email immediately.</strong> Your code typically arrives within 60 minutes — if it doesn't, the support line is monitored 24/7 rather than routed through a ticket queue.</li>
                        <li><strong>Watch the slot-booking walkthrough</strong> on the homepage before heading to Pearson's site. It shows exactly where the voucher field sits on the checkout page, which is the step most first-timers fumble.</li>
                        <li><strong>Book your Pearson slot and apply the code</strong>, then hold onto both your Fryment receipt and Pearson confirmation until after your exam date, in case you need to reference either for a rescheduling or refund query.</li>
                     </ol>

                     <h2 className="text-3xl mt-16 mb-6">What Happens If You Need to Reschedule or Cancel?</h2>
                     <p>
                        This applies regardless of whether you booked with a voucher or paid full price — Pearson's policy is the same either way. Rescheduling is free if done 14 or more full calendar days before your test date. Inside that window, flexibility drops fast: rescheduling isn't permitted within 14 days, and cancellations made 7–13 days out only refund 50% of the fee, dropping to zero refund inside 7 days.
                     </p>

                     <div className="not-prose my-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                           <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="font-bold text-primary-dark mb-1">Pro Tip</h4>
                           <p className="text-sm text-primary-dark/80 leading-relaxed m-0">
                              Set a calendar reminder for exactly 15 days before your booked test date. That one-day buffer against the 14-day cutoff has saved more than a few students from losing their full exam fee over a scheduling conflict they spotted a day too late.
                           </p>
                        </div>
                     </div>

                     <h2 className="text-3xl mt-16 mb-6">Common Mistakes Students Make When Buying a PTE Voucher</h2>
                     
                     <div className="not-prose my-10 space-y-4">
                        <div className="flex gap-4 p-5 bg-white border border-outline rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                           <Check className="w-6 h-6 text-red-500 shrink-0" />
                           <p className="m-0 text-[15px] md:text-base text-on-surface-variant leading-relaxed"><strong>Buying a voucher before choosing a test date.</strong> This is fine — vouchers are valid for 12 months — but don't let the code expire unused because you kept postponing the booking itself.</p>
                        </div>
                        <div className="flex gap-4 p-5 bg-white border border-outline rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                           <Check className="w-6 h-6 text-red-500 shrink-0" />
                           <p className="m-0 text-[15px] md:text-base text-on-surface-variant leading-relaxed"><strong>Applying the code on the wrong exam type at Pearson's checkout.</strong> Double-check &quot;PTE Academic&quot; is selected before entering any voucher.</p>
                        </div>
                        <div className="flex gap-4 p-5 bg-white border border-outline rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                           <Check className="w-6 h-6 text-red-500 shrink-0" />
                           <p className="m-0 text-[15px] md:text-base text-on-surface-variant leading-relaxed"><strong>Assuming a voucher covers rescheduling or rescore fees.</strong> It only covers the original registration fee — rescheduling penalties and the ~₹14,750 rescore fee are billed separately by Pearson.</p>
                        </div>
                        <div className="flex gap-4 p-5 bg-white border border-outline rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                           <Check className="w-6 h-6 text-red-500 shrink-0" />
                           <p className="m-0 text-[15px] md:text-base text-on-surface-variant leading-relaxed"><strong>Waiting until the last 48 hours to buy and redeem.</strong> While Pearson allows late booking, giving yourself at least a week's buffer avoids any last-minute payment gateway or account-verification friction.</p>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}
