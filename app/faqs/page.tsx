"use client";

import React, { useState } from "react";
import Head from "next/head";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { ShieldCheck, HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FaqsPage() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Extensive FAQs based on the provided document
   const faqCategories = [
      {
         title: "General Questions",
         items: [
            { question: "What is a PTE voucher?", answer: "A PTE voucher is a prepaid code that can be redeemed during the official PTE exam booking process. Depending on the voucher terms, it may cover all or part of the exam fee." },
            { question: "Why do people use PTE vouchers?", answer: "Candidates use vouchers because they provide a convenient way to pay for an exam. Some vouchers may also be offered through educational institutions, employers, or promotional campaigns." },
            { question: "Is a voucher the same as booking an exam?", answer: "No. A voucher is only a payment method. You still need to complete the official exam booking process and receive a booking confirmation." },
            { question: "Can I take the exam without a voucher?", answer: "Yes. Candidates can usually pay directly through the official booking platform without using a voucher." }
         ]
      },
      {
         title: "Buying a Voucher",
         items: [
            { question: "Where can I buy a PTE voucher?", answer: "Purchase vouchers only from trusted providers. Before purchasing, verify the voucher's terms, validity period, and any applicable restrictions." },
            { question: "How do I know if a voucher is genuine?", answer: "Choose reputable sellers, check the information provided with the voucher, and keep your purchase confirmation for future reference." },
            { question: "Can I buy a voucher for someone else?", answer: "This depends on the voucher's terms and conditions. Review the issuer's policy before purchasing on behalf of another person." },
            { question: "Is there an expiry date?", answer: "Many vouchers have a validity period. Always check the expiration date before making your purchase." }
         ]
      },
      {
         title: "Redeeming a Voucher",
         items: [
            { question: "Where do I enter my voucher code?", answer: "You enter the voucher code during the payment stage of the official PTE booking process." },
            { question: "What happens after I apply the voucher?", answer: "If the voucher is valid and meets the applicable terms, it will be applied according to its value or conditions before you complete your booking." },
            { question: "What if my voucher doesn't work?", answer: "First, check for typing errors and confirm the voucher hasn't expired. If the problem continues, contact the voucher provider or the relevant support team." }
         ]
      },
      {
         title: "Booking Questions",
         items: [
            { question: "Can I change my test date?", answer: "Changes to test dates are subject to the official PTE booking policies in effect at the time of your booking." },
            { question: "Can I cancel my booking?", answer: "Cancellation policies are determined by the official PTE terms and conditions. Review the latest policy before making changes." },
            { question: "Can I use the same voucher twice?", answer: "Most vouchers are intended for a single eligible booking. Check the specific terms provided with your voucher." },
            { question: "Can I use multiple vouchers?", answer: "Whether multiple vouchers can be combined depends on the rules associated with the voucher and the booking platform." }
         ]
      },
      {
         title: "Payments",
         items: [
            { question: "Does a voucher always provide a discount?", answer: "Not necessarily. Some vouchers function solely as prepaid payment codes, while others may be associated with promotional pricing or special offers." },
            { question: "Can I pay the remaining balance?", answer: "If your voucher covers only part of the booking cost, you may need to pay the remaining balance using one of the accepted payment methods, subject to the booking platform's policies." }
         ]
      },
      {
         title: "Exam Day",
         items: [
            { question: "What should I bring to the test centre?", answer: "Candidates are generally required to bring the identification document specified during the booking process, such as a valid passport where applicable. Follow the official exam instructions for your region." },
            { question: "Do I need to print my voucher?", answer: "Typically, the voucher is redeemed online during booking. Keep your booking confirmation and follow the instructions provided by the official test provider." }
         ]
      },
      {
         title: "Troubleshooting",
         items: [
            { question: "My voucher shows as invalid. What should I do?", answer: "Verify the code carefully. Check the expiry date. Review any usage restrictions. Contact the voucher provider if the issue remains unresolved." },
            { question: "I entered the wrong information during booking.", answer: "Contact the official booking support team as soon as possible to understand the available options for correcting your booking details." }
         ]
      }
   ];

   return (
      <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-primary/20 selection:text-primary">
         <Head>
            <title>PTE Voucher FAQs (2026) | Everything You Need to Know Before Booking</title>
            <meta name="description" content="Find answers to the most frequently asked questions about PTE vouchers, including booking, validity, discounts, redemption, refunds, rescheduling, payments, and exam booking." />
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
                           "description": "Fryment provides PTE voucher guidance, educational resources, and information to help candidates understand the PTE exam booking process."
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
                           "@id": "https://fryment.info/pte/pte-voucher-faq#webpage",
                           "url": "https://fryment.info/pte/pte-voucher-faq",
                           "name": "PTE Voucher FAQs",
                           "description": "Find answers to the most common questions about PTE vouchers, booking, payments, validity, redemption, cancellations, refunds, and exam scheduling.",
                           "isPartOf": {
                              "@id": "https://fryment.info/#website"
                           },
                           "about": {
                              "@id": "https://fryment.info/#organization"
                           },
                           "breadcrumb": {
                              "@id": "https://fryment.info/pte/pte-voucher-faq#breadcrumb"
                           },
                           "inLanguage": "en"
                        },
                        {
                           "@type": "Article",
                           "@id": "https://fryment.info/pte/pte-voucher-faq#article",
                           "headline": "PTE Voucher FAQs – Everything You Need to Know",
                           "description": "Comprehensive FAQ guide covering PTE vouchers, booking, payments, redemption, validity, and common questions.",
                           "mainEntityOfPage": {
                              "@id": "https://fryment.info/pte/pte-voucher-faq#webpage"
                           },
                           "author": {
                              "@id": "https://fryment.info/#organization"
                           },
                           "publisher": {
                              "@id": "https://fryment.info/#organization"
                           },
                           "datePublished": "2026-07-02",
                           "dateModified": "2026-07-02",
                           "keywords": [
                              "PTE Voucher",
                              "PTE Voucher FAQ",
                              "PTE Booking",
                              "Buy PTE Voucher",
                              "Redeem PTE Voucher",
                              "PTE Academic",
                              "PTE Exam"
                           ]
                        },
                        {
                           "@type": "FAQPage",
                           "@id": "https://fryment.info/pte/pte-voucher-faq#faq",
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
                                    "text": "Enter your voucher code during the payment stage when booking your PTE exam through the official booking platform."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Can I use an expired PTE voucher?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "No. Expired PTE vouchers generally cannot be redeemed."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Can I transfer my PTE voucher?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Transferability depends on the terms and conditions of the voucher."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Can I cancel my PTE booking?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Cancellation is subject to the official PTE booking policy and any applicable voucher terms."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Can I reschedule my PTE exam?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Rescheduling is available according to the official PTE policies and the conditions associated with your booking."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "How long is a PTE voucher valid?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Voucher validity depends on the specific voucher terms. Always check the expiration date before booking."
                                 }
                              },
                              {
                                 "@type": "Question",
                                 "name": "Do PTE vouchers always provide a discount?",
                                 "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Not necessarily. Some vouchers are prepaid payment codes, while others may include promotional pricing subject to applicable terms."
                                 }
                              }
                           ]
                        },
                        {
                           "@type": "BreadcrumbList",
                           "@id": "https://fryment.info/pte/pte-voucher-faq#breadcrumb",
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
                                 "name": "PTE Voucher FAQs",
                                 "item": "https://fryment.info/pte/pte-voucher-faq"
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
            
            <section className="pt-32 pb-24 relative bg-white overflow-hidden">
               {/* Subtle Background Elements */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>
               <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-surface-dim rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

               <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                  
                  {/* Header Section */}
                  <div className="max-w-3xl mx-auto text-center mb-20 space-y-8">
                     <div className="inline-flex items-center gap-2 bg-surface-dim px-4 py-2 rounded-full border border-outline-variant shadow-sm">
                        <HelpCircle className="w-4 h-4 text-primary" />
                        <span className="text-[12px] font-bold text-primary tracking-wide uppercase">2026 Guide</span>
                     </div>
                     <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                        PTE Voucher FAQs – Complete Guide
                     </h1>
                     <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                        If you're planning to take the Pearson Test of English (PTE), you may have questions about how PTE vouchers work. This FAQ page is designed to provide clear and concise answers.
                     </p>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                     
                     {/* Left Sidebar (Sticky) */}
                     <div className="hidden lg:block lg:col-span-4 sticky top-24 space-y-8">
                        
                        <div className="bg-primary text-white rounded-3xl p-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
                           <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
                           <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/10 blur-xl"></div>
                           
                           <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                              <ShieldCheck className="w-6 h-6 text-primary-light" />
                              Quick Answers
                           </h3>
                           <ul className="space-y-4 relative z-10">
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Validity</span>
                                    <span className="font-semibold text-sm leading-tight">Depends on the specific voucher terms.</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Transferability</span>
                                    <span className="font-semibold text-sm leading-tight">Depends on the voucher's conditions.</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Refund</span>
                                    <span className="font-semibold text-sm leading-tight">Eligibility depends on applicable policies.</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Reschedule</span>
                                    <span className="font-semibold text-sm leading-tight">Subject to official PTE policies.</span>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>

                     {/* Main Content Area */}
                     <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-on-surface-variant prose-p:leading-relaxed">
                           
                           <h2 className="text-3xl mt-0 mb-6">Introduction</h2>
                           <p>
                              Whether you're booking your first exam or looking for clarification on voucher validity, redemption, payments, or rescheduling, this FAQ page is designed to provide clear and concise answers.
                           </p>
                           <p>
                              Instead of searching across multiple websites, you can use this guide as a central resource for common PTE voucher questions. We regularly review and update this page so it remains helpful for candidates preparing to book their exam.
                           </p>

                           <div className="not-prose space-y-12 mt-12">
                              {faqCategories.map((category, catIndex) => (
                                 <div key={catIndex}>
                                    <h2 className="text-2xl font-black text-on-surface mb-6">{category.title}</h2>
                                    <div className="space-y-4">
                                       {category.items.map((faq, index) => (
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
                                 </div>
                              ))}
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
