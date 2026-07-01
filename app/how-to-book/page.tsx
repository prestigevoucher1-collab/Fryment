"use client";

import React, { useState } from "react";
import Head from "next/head";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { CheckCircle2, ShieldCheck, HelpCircle, ChevronDown, BookOpen, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function HowToBookPage() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const faqs = [
      {
         question: "What is a PTE voucher?",
         answer: "A prepaid code used during the official PTE booking process to pay for an eligible exam booking."
      },
      {
         question: "Can I use a voucher for any PTE exam?",
         answer: "Voucher eligibility depends on its terms and conditions. Always review the details provided with the voucher."
      },
      {
         question: "Does a voucher guarantee a discount?",
         answer: "Not necessarily. Some vouchers may include promotional pricing, while others function primarily as a prepaid payment method."
      },
      {
         question: "What happens if my voucher expires?",
         answer: "Expired vouchers generally cannot be redeemed. Check the voucher's validity period before attempting to use it."
      },
      {
         question: "Can I transfer my voucher to another person?",
         answer: "Transferability depends on the specific terms and conditions of the voucher."
      },
      {
         question: "What if my voucher code doesn't work?",
         answer: "Verify the code, ensure it hasn't expired, and review any applicable restrictions. If the issue persists, contact the voucher provider or the appropriate support channel."
      }
   ];

   return (
      <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-primary/20 selection:text-primary">
         <Head>
            <title>How to Book a PTE Voucher (Complete Step-by-Step Guide 2026)</title>
            <meta name="description" content="Learn how to book a PTE voucher step by step. Discover how PTE vouchers work, where to use them, common mistakes to avoid, FAQs, and expert tips for a smooth exam booking experience." />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                     "@context": "https://schema.org",
                     "@graph": [
                        {
                           "@type": "Organization",
                           "@id": "https://fryment.info/#organization",
                           "name": "Fryment",
                           "url": "https://fryment.info/",
                           "logo": {
                              "@type": "ImageObject",
                              "url": "https://fryment.info/logo.png"
                           },
                           "description": "Fryment helps students purchase PTE vouchers and provides educational resources for PTE exam booking."
                        },
                        {
                           "@type": "WebSite",
                           "@id": "https://fryment.info/#website",
                           "url": "https://fryment.info/",
                           "name": "Fryment",
                           "publisher": {
                              "@id": "https://fryment.info/#organization"
                           }
                        },
                        {
                           "@type": "WebPage",
                           "@id": "https://fryment.info/pte/how-to-book-pte-voucher#webpage",
                           "url": "https://fryment.info/pte/how-to-book-pte-voucher",
                           "name": "How to Book a PTE Voucher",
                           "description": "Learn how to book a PTE voucher step by step. This complete guide explains how to redeem a voucher, complete your PTE exam booking, avoid common mistakes, and answer frequently asked questions.",
                           "isPartOf": {
                              "@id": "https://fryment.info/#website"
                           },
                           "about": {
                              "@id": "https://fryment.info/#organization"
                           },
                           "breadcrumb": {
                              "@id": "https://fryment.info/pte/how-to-book-pte-voucher#breadcrumb"
                           },
                           "primaryImageOfPage": {
                              "@type": "ImageObject",
                              "url": "https://fryment.info/images/how-to-book-pte-voucher.webp"
                           },
                           "inLanguage": "en"
                        },
                        {
                           "@type": "Article",
                           "@id": "https://fryment.info/pte/how-to-book-pte-voucher#article",
                           "headline": "How to Book a PTE Voucher (Complete Step-by-Step Guide)",
                           "description": "Complete guide to booking a PTE voucher and redeeming it during the official PTE exam booking process.",
                           "mainEntityOfPage": {
                              "@id": "https://fryment.info/pte/how-to-book-pte-voucher#webpage"
                           },
                           "author": {
                              "@id": "https://fryment.info/#organization"
                           },
                           "publisher": {
                              "@id": "https://fryment.info/#organization"
                           },
                           "datePublished": "2026-07-02",
                           "dateModified": "2026-07-02",
                           "image": [
                              "https://fryment.info/images/how-to-book-pte-voucher.webp"
                           ],
                           "keywords": [
                              "PTE Voucher",
                              "How to Book PTE Voucher",
                              "PTE Booking",
                              "Buy PTE Voucher",
                              "Redeem PTE Voucher",
                              "PTE Academic"
                           ]
                        },
                        {
                           "@type": "HowTo",
                           "@id": "https://fryment.info/pte/how-to-book-pte-voucher#howto",
                           "name": "How to Book a PTE Voucher",
                           "description": "Step-by-step instructions for booking a PTE exam using a voucher.",
                           "totalTime": "PT10M",
                           "step": [
                              {
                                 "@type": "HowToStep",
                                 "position": 1,
                                 "name": "Log in to your PTE account",
                                 "text": "Sign in to your official PTE account."
                              },
                              {
                                 "@type": "HowToStep",
                                 "position": 2,
                                 "name": "Choose your PTE exam",
                                 "text": "Select the PTE exam that matches your requirements."
                              },
                              {
                                 "@type": "HowToStep",
                                 "position": 3,
                                 "name": "Select a test centre",
                                 "text": "Choose your preferred city and available test centre."
                              },
                              {
                                 "@type": "HowToStep",
                                 "position": 4,
                                 "name": "Choose your exam date",
                                 "text": "Select an available exam date and time."
                              },
                              {
                                 "@type": "HowToStep",
                                 "position": 5,
                                 "name": "Enter your personal information",
                                 "text": "Ensure all details match your passport."
                              },
                              {
                                 "@type": "HowToStep",
                                 "position": 6,
                                 "name": "Redeem your voucher",
                                 "text": "Enter the voucher code during the payment stage."
                              },
                              {
                                 "@type": "HowToStep",
                                 "position": 7,
                                 "name": "Confirm your booking",
                                 "text": "Review your booking details and complete the reservation."
                              }
                           ]
                        },
                        {
                           "@type": "FAQPage",
                           "@id": "https://fryment.info/pte/how-to-book-pte-voucher#faq",
                           "mainEntity": [
                              {
                                 "@type": "Question",
                                 "name": "What is a PTE voucher?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A PTE voucher is a prepaid code that can be redeemed during the official PTE exam booking process."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "How do I redeem a PTE voucher?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Enter the voucher code during the payment stage of the official PTE booking process."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Can I use an expired PTE voucher?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Expired vouchers generally cannot be redeemed."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Can I reschedule my exam after using a voucher?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Rescheduling depends on the official PTE policies and the terms associated with your booking."
                                 }
                              }
                           ]
                        },
                        {
                           "@type": "BreadcrumbList",
                           "@id": "https://fryment.info/pte/how-to-book-pte-voucher#breadcrumb",
                           "itemListElement": [
                              {
                                 "@type": "ListItem",
                                 "position": 1,
                                 "name": "Home",
                                 "item": "https://fryment.info/"
                              },
                              {
                                 "@type": "ListItem",
                                 "position": 2,
                                 "name": "PTE",
                                 "item": "https://fryment.info/pte"
                              },
                              {
                                 "@type": "ListItem",
                                 "position": 3,
                                 "name": "How to Book a PTE Voucher",
                                 "item": "https://fryment.info/pte/how-to-book-pte-voucher"
                              }
                           ]
                        }
                     ]
                  })
               }}
            />
         </Head>

         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

         <main className={`relative z-10 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            
            {/* Same aesthetic structure as root page / ExamSeoContent */}
            <section className="pt-32 pb-24 relative bg-white overflow-hidden">
               {/* Subtle Background Elements */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
               <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-surface-dim rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

               <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                  
                  {/* Header Section */}
                  <div className="max-w-3xl mx-auto text-center mb-20 space-y-8">
                     <div className="inline-flex items-center gap-2 bg-surface-dim px-4 py-2 rounded-full border border-outline-variant shadow-sm">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span className="text-[12px] font-bold text-primary tracking-wide uppercase">Complete Guide 2026</span>
                     </div>
                     <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                        How to Book a PTE Voucher – Complete Step-by-Step Guide
                     </h1>
                     <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                        Booking your Pearson Test of English (PTE) exam is one of the most important steps in your study abroad, migration, or professional registration journey.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                     
                     {/* Left Sidebar (Sticky) - Matching Root Structure */}
                     <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-8">
                        
                        {/* Quick Facts Card */}
                        <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
                           <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
                           <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/10 blur-xl"></div>
                           
                           <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                              <ShieldCheck className="w-6 h-6 text-primary-light" />
                              Before You Book
                           </h3>
                           <ul className="space-y-4 relative z-10">
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">ID Required</span>
                                    <span className="font-semibold text-sm leading-tight">A Valid Passport</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Account</span>
                                    <span className="font-semibold text-sm leading-tight">Official PTE Account</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Voucher Code</span>
                                    <span className="font-semibold text-sm leading-tight">Active & Unexpired</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Details</span>
                                    <span className="font-semibold text-sm leading-tight">Test Date & Centre</span>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        {/* Common Mistakes Warning Card */}
                        <div className="bg-surface-dim rounded-3xl p-6 border border-outline-variant shadow-sm">
                           <div className="flex items-center gap-2 mb-4">
                              <AlertTriangle className="w-5 h-5 text-amber-500" />
                              <h4 className="font-bold text-on-surface">Common Mistakes</h4>
                           </div>
                           <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div>
                                 <span className="text-sm font-medium text-on-surface-variant leading-snug">Entering passport details incorrectly</span>
                              </div>
                              <div className="flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div>
                                 <span className="text-sm font-medium text-on-surface-variant leading-snug">Using an expired voucher</span>
                              </div>
                              <div className="flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div>
                                 <span className="text-sm font-medium text-on-surface-variant leading-snug">Selecting the wrong test center or exam type</span>
                              </div>
                              <div className="flex items-start gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5"></div>
                                 <span className="text-sm font-medium text-on-surface-variant leading-snug">Forgetting to review booking before confirmation</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Main Content Area */}
                     <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-on-surface-variant prose-p:leading-relaxed prose-li:text-on-surface-variant">
                           
                           <h2 className="text-3xl mt-0 mb-6">Introduction</h2>
                           <p>
                              While the booking process itself is straightforward, many candidates have questions about using a PTE voucher, how it works, and how to redeem it correctly.
                           </p>
                           <p>
                              A PTE voucher is a prepaid code that can be applied during the official exam booking process. Depending on the type of voucher and any applicable offers, it may help candidates manage payments more conveniently or access eligible discounts.
                           </p>
                           <p>
                              This guide explains everything you need to know—from understanding what a PTE voucher is to redeeming it successfully and avoiding common mistakes. Whether you're booking your first PTE exam or have taken the test before, this guide is designed to help you complete the process with confidence.
                           </p>

                           <h2 className="text-3xl mt-16 mb-6">What Is a PTE Voucher?</h2>
                           <p>
                              A PTE voucher is a prepaid code that can be entered during the official PTE exam booking process. Instead of paying the full exam fee directly at checkout, eligible candidates use the voucher code to cover all or part of the booking cost, depending on the voucher's value and terms.
                           </p>
                           <p>Vouchers are commonly used by:</p>
                           <ul>
                              <li>Students applying to universities</li>
                              <li>Skilled migration applicants</li>
                              <li>Working professionals</li>
                              <li>Educational institutions</li>
                              <li>Coaching centers</li>
                              <li>Corporate organizations</li>
                           </ul>
                           <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 my-6 text-sm text-primary-dark font-medium">
                              <strong>Note:</strong> A voucher is not an exam registration by itself—it simply serves as a payment method that must be redeemed during the official booking process.
                           </div>

                           <h2 className="text-3xl mt-16 mb-6">Why Do Candidates Use a PTE Voucher?</h2>
                           <p>
                              Many candidates choose vouchers because they offer convenience and, in some cases, promotional value. They also make it easier for organizations or families to manage exam payments. Some advantages include:
                           </p>
                           <ul>
                              <li>Prepaid payment option</li>
                              <li>Convenient redemption during booking</li>
                              <li>Potential promotional pricing (where applicable)</li>
                              <li>Easier budgeting</li>
                              <li>Useful for institutions purchasing on behalf of students</li>
                           </ul>
                           <p>
                              Always review the voucher's terms and conditions before purchase, including validity dates and any regional restrictions.
                           </p>

                           <h2 className="text-3xl mt-16 mb-6">Step-by-Step Guide to Booking a PTE Voucher</h2>
                           
                           <div className="not-prose space-y-6 my-10">
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">1</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Sign In</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">Log in to your official PTE account using your registered email address.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">2</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Choose Your Test</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">Select the appropriate PTE exam, such as PTE Academic, depending on your needs.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">3</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Select Your Location</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">Search for your preferred city or test center.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">4</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Pick a Date and Time</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">Review available dates and choose the one that best suits your preparation timeline.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">5</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Enter Your Personal Details</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">Ensure all information matches your passport exactly to avoid issues on exam day.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">6</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Review Your Booking</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">Double-check your selected test center, exam type, and date before proceeding.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-primary border border-primary-dark rounded-2xl shadow-md">
                                 <div className="w-10 h-10 rounded-full bg-white text-primary font-black flex items-center justify-center shrink-0">7</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">Redeem Your Voucher</h4>
                                    <p className="text-primary-light m-0 text-sm">During the payment stage, enter your voucher code into the designated field and apply it.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 items-start p-6 bg-white border border-outline rounded-2xl shadow-sm">
                                 <div className="w-10 h-10 rounded-full bg-primary text-white font-black flex items-center justify-center shrink-0">8</div>
                                 <div>
                                    <h4 className="font-bold text-lg mb-1 text-on-surface">Complete the Booking</h4>
                                    <p className="text-on-surface-variant m-0 text-sm">If the voucher covers the applicable amount, follow the remaining instructions to finalize your booking. Save the confirmation email for your records.</p>
                                 </div>
                              </div>
                           </div>

                           <h2 className="text-3xl mt-16 mb-6">How to Redeem a PTE Voucher</h2>
                           <p>Redeeming a voucher is simple:</p>
                           <ol>
                              <li>Reach the payment page.</li>
                              <li>Locate the voucher or promotional code field.</li>
                              <li>Enter your voucher exactly as provided.</li>
                              <li>Verify that the voucher is accepted.</li>
                              <li>Complete the booking process.</li>
                           </ol>
                           <p>
                              If the voucher is not accepted, check for typing errors, expiration dates, or applicable terms before contacting support.
                           </p>

                           <h2 className="text-3xl mt-16 mb-6">Can You Reschedule a PTE Exam Booked with a Voucher?</h2>
                           <p>
                              Rescheduling policies are determined by the official PTE booking rules. If your booking was made using a voucher, the ability to reschedule depends on the applicable terms and conditions of your booking and the official policies in effect at that time.
                           </p>
                           <p>
                              Before making any changes, review the current PTE rescheduling policy and the conditions associated with your voucher.
                           </p>

                           <h2 className="text-3xl mt-16 mb-6">Tips for a Smooth Booking Experience</h2>
                           <ul>
                              <li>Book your exam early to secure your preferred date.</li>
                              <li>Verify all personal information before confirming.</li>
                              <li>Read the voucher terms carefully.</li>
                              <li>Keep a copy of your booking confirmation.</li>
                              <li>Plan your preparation schedule around your chosen exam date.</li>
                              <li>Contact support promptly if you encounter issues.</li>
                           </ul>

                           <h2 className="text-3xl mt-16 mb-6">Frequently Asked Questions</h2>
                           <div className="not-prose space-y-4 mb-16">
                              {faqs.map((faq, index) => (
                                 <details key={index} className="group bg-white border border-outline rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm">
                                    <summary className="flex items-center justify-between p-5 lg:p-6 cursor-pointer text-on-surface font-bold text-[15px]">
                                       <span className="pr-6">{faq.question}</span>
                                       <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                          <ChevronDown className="w-5 h-5 text-primary" />
                                       </span>
                                    </summary>
                                    <div className="px-5 lg:px-6 pb-6 text-sm text-on-surface-variant leading-relaxed border-t border-outline/50 mt-2 pt-4">
                                       {faq.answer}
                                    </div>
                                 </details>
                              ))}
                           </div>

                           <div className="not-prose bg-surface-dim rounded-3xl p-10 text-center border border-outline-variant mt-20">
                              <h3 className="text-2xl md:text-3xl font-black text-on-surface mb-4">Final Thoughts</h3>
                              <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                                 Using a PTE voucher can simplify the payment process for your exam booking when used correctly. The key to a smooth experience is understanding how vouchers work, checking the applicable terms, and ensuring your booking details are accurate.
                              </p>
                              <Link 
                                 href="/#purchase" 
                                 className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                              >
                                 Buy a Voucher Today
                              </Link>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         
         {!isMenuOpen && <Footer />}
      </div>
   );
}
