"use client";

import React, { useState } from "react";
import Head from "next/head";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { CheckCircle2, ShieldCheck, Heart, MapPin, ChevronDown, Rocket, Users, Target, FileText } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Simple FAQ data extracted from the document
   const faqs = [
      {
         question: "Is Fryment an official PTE testing organization?",
         answer: "No. Fryment is an independent platform focused on helping users understand and simplify the PTE voucher and booking process."
      },
      {
         question: "Why should I buy a PTE voucher?",
         answer: "A voucher can be a convenient way to pay for your exam and, depending on availability and applicable promotions, may offer pricing advantages over direct payment."
      },
      {
         question: "Who can use Fryment?",
         answer: "Anyone planning to take the PTE exam and looking for guidance or voucher-related services can use Fryment."
      },
      {
         question: "Does Fryment provide booking guidance?",
         answer: "Yes. Our educational resources explain the booking process step by step."
      }
   ];

   return (
      <div className="bg-surface min-h-screen text-on-surface font-body selection:bg-primary/20 selection:text-primary">
         <Head>
            <title>About Fryment | Trusted PTE Voucher Partner for Students Worldwide</title>
            <meta name="description" content="Learn about Fryment, a trusted platform for PTE voucher booking. Discover our mission, values, services, secure payment process, customer support, and why thousands of students choose Fryment for their PTE exam journey." />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify([
                     {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://fryment.info/#organization",
                        "name": "Fryment",
                        "url": "https://fryment.info/",
                        "logo": "https://fryment.info/logo.png",
                        "description": "Fryment helps students purchase PTE vouchers and provides educational resources about PTE exam booking, vouchers, discounts, and preparation.",
                        "sameAs": [
                           "https://www.linkedin.com/company/fryment",
                           "https://www.instagram.com/fryment",
                           "https://www.facebook.com/fryment"
                        ],
                        "knowsAbout": [
                           "PTE Voucher",
                           "PTE Academic",
                           "PTE Booking",
                           "English Language Test",
                           "Study Abroad",
                           "Migration English Test"
                        ]
                     },
                     {
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "@id": "https://fryment.info/about",
                        "url": "https://fryment.info/about",
                        "name": "About Fryment",
                        "description": "Learn about Fryment, our mission, values, and how we help candidates purchase PTE vouchers and understand the PTE booking process.",
                        "isPartOf": {
                           "@id": "https://fryment.info/#website"
                        },
                        "about": {
                           "@id": "https://fryment.info/#organization"
                        }
                     },
                     {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id": "https://fryment.info/#website",
                        "url": "https://fryment.info/",
                        "name": "Fryment",
                        "publisher": {
                           "@id": "https://fryment.info/#organization"
                        },
                        "potentialAction": {
                           "@type": "SearchAction",
                           "target": "https://fryment.info/search?q={search_term_string}",
                           "query-input": "required name=search_term_string"
                        }
                     },
                     {
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "@id": "https://fryment.info/about#webpage",
                        "url": "https://fryment.info/about",
                        "name": "About Fryment",
                        "description": "Discover Fryment's mission, services, and commitment to helping students purchase PTE vouchers with confidence.",
                        "inLanguage": "en",
                        "about": {
                           "@id": "https://fryment.info/#organization"
                        },
                        "isPartOf": {
                           "@id": "https://fryment.info/#website"
                        }
                     },
                     {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                           {
                              "@type": "ListItem",
                              "position": 1,
                              "name": "Home",
                              "item": "https://fryment.vercel.app/"
                           },
                           {
                              "@type": "ListItem",
                              "position": 2,
                              "name": "About Fryment",
                              "item": "https://fryment.info/about"
                           }
                        ]
                     },
                     {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                           {
                              "@type": "Question",
                              "name": "What is Fryment?",
                              "acceptedAnswer": {
                                 "@type": "Answer",
                                 "text": "Fryment is a platform that helps candidates purchase PTE vouchers and provides educational resources about the PTE booking process."
                              }
                           },
                           {
                              "@type": "Question",
                              "name": "Who can use Fryment?",
                              "acceptedAnswer": {
                                 "@type": "Answer",
                                 "text": "Students, professionals, and migration applicants preparing for the PTE exam can use Fryment."
                              }
                           },
                           {
                              "@type": "Question",
                              "name": "Does Fryment provide booking guidance?",
                              "acceptedAnswer": {
                                 "@type": "Answer",
                                 "text": "Yes. Fryment offers educational guides explaining how to purchase and redeem PTE vouchers and complete the booking process."
                              }
                           },
                           {
                              "@type": "Question",
                              "name": "Does Fryment sell genuine PTE vouchers?",
                              "acceptedAnswer": {
                                 "@type": "Answer",
                                 "text": "Fryment aims to provide valid PTE voucher solutions along with transparent information and customer support."
                              }
                           }
                        ]
                     }
                  ])
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
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span className="text-[12px] font-bold text-primary tracking-wide uppercase">Trusted Voucher Partner</span>
                     </div>
                     <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight">
                        About Fryment – Helping Students Book PTE Vouchers with Confidence
                     </h1>
                     <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                        Preparing for the Pearson Test of English (PTE) is an important milestone. We make purchasing and using PTE vouchers easier, faster, and more transparent.
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
                              <Heart className="w-6 h-6 text-primary-light" />
                              Why Choose Us?
                           </h3>
                           <ul className="space-y-4 relative z-10">
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Focus</span>
                                    <span className="font-semibold text-sm leading-tight">Simplifying exam booking</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Support</span>
                                    <span className="font-semibold text-sm leading-tight">24/7 dedicated assistance</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Trust</span>
                                    <span className="font-semibold text-sm leading-tight">Secure, encrypted checkout</span>
                                 </div>
                              </li>
                              <li className="flex gap-3">
                                 <CheckCircle2 className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                                 <div>
                                    <span className="block text-xs text-primary-light font-bold uppercase tracking-wider mb-0.5">Transparency</span>
                                    <span className="font-semibold text-sm leading-tight">No hidden costs</span>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        {/* Who We Help Card */}
                        <div className="bg-surface-dim rounded-3xl p-6 border border-outline-variant shadow-sm">
                           <h4 className="font-bold text-on-surface mb-4">Who We Help</h4>
                           <div className="space-y-3">
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                 <span className="text-sm font-medium text-on-surface-variant">International Students</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                 <span className="text-sm font-medium text-on-surface-variant">Skilled Migration Applicants</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                 <span className="text-sm font-medium text-on-surface-variant">Working Professionals</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                 <span className="text-sm font-medium text-on-surface-variant">Healthcare Professionals</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                 <span className="text-sm font-medium text-on-surface-variant">First-Time Test Takers</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Main Content Area */}
                     <div className="lg:col-span-8">
                        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-on-surface-variant prose-p:leading-relaxed prose-li:text-on-surface-variant">
                           
                           <h2 className="text-3xl mt-0 mb-6">Welcome to Fryment</h2>
                           <p>
                              Preparing for the Pearson Test of English (PTE) is an important milestone for students, professionals, and migration applicants planning their future abroad. While exam preparation receives most of the attention, booking the exam can often be confusing, expensive, or time-consuming.
                           </p>
                           <p className="font-bold text-xl text-on-surface my-6">
                              Fryment was created to solve this problem.
                           </p>
                           <p>
                              Our goal is simple: make purchasing and using PTE vouchers easier, faster, and more transparent. Whether you're taking the PTE Academic exam for university admissions, professional registration, or visa applications, Fryment aims to simplify your booking journey from start to finish.
                           </p>
                           <p>
                              We understand that every student wants a smooth experience without worrying about payment issues, hidden costs, or confusing booking procedures. That's why we focus on providing a straightforward process supported by clear information and responsive customer service.
                           </p>

                           <h2 className="text-3xl mt-16 mb-6">Our Story</h2>
                           <p>Every year, thousands of students search online for terms like <em>Buy PTE Voucher</em>, <em>Cheap PTE Voucher</em>, and <em>PTE Discount Voucher</em>.</p>
                           <p>
                              Many of these students spend hours comparing websites, searching for reliable information, and wondering whether a voucher is genuine.
                           </p>
                           <p>
                              Rather than creating another generic educational website, we focused on one objective: <strong>Helping candidates purchase genuine PTE vouchers through a transparent and trustworthy experience.</strong> Today, our platform continues to improve by listening to student feedback, simplifying the booking journey, and publishing educational resources.
                           </p>

                           {/* Features Grid */}
                           <div className="not-prose grid sm:grid-cols-2 gap-6 my-12">
                              <div className="bg-surface-dim p-8 rounded-3xl border border-outline-variant transition-all hover:bg-white hover:shadow-md">
                                 <div className="w-12 h-12 bg-white rounded-2xl border border-outline shadow-sm flex items-center justify-center text-primary mb-6">
                                    <Rocket className="w-6 h-6" />
                                 </div>
                                 <h3 className="text-xl font-bold text-on-surface mb-3">Our Mission</h3>
                                 <p className="text-on-surface-variant text-sm leading-relaxed m-0">
                                    To make PTE exam booking simple, affordable, and stress-free. We believe every student deserves clear pricing, transparent processes, and reliable customer support.
                                 </p>
                              </div>
                              <div className="bg-surface-dim p-8 rounded-3xl border border-outline-variant transition-all hover:bg-white hover:shadow-md">
                                 <div className="w-12 h-12 bg-white rounded-2xl border border-outline shadow-sm flex items-center justify-center text-primary mb-6">
                                    <Target className="w-6 h-6" />
                                 </div>
                                 <h3 className="text-xl font-bold text-on-surface mb-3">Our Vision</h3>
                                 <p className="text-on-surface-variant text-sm leading-relaxed m-0">
                                    To become the most trusted online resource for PTE voucher information and exam booking guidance, providing accurate, trustworthy, and comprehensive information.
                                 </p>
                              </div>
                           </div>

                           <h2 className="text-3xl mt-16 mb-6">What Fryment Offers</h2>
                           <p>
                              Fryment focuses on making the PTE voucher experience easier through a combination of services and educational resources.
                           </p>
                           
                           <div className="not-prose my-8 space-y-4">
                              <div className="flex gap-4 p-5 bg-white border border-outline rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                 <FileText className="w-6 h-6 text-primary shrink-0" />
                                 <div>
                                    <h4 className="font-bold text-on-surface mb-1 text-[15px]">PTE Voucher Information</h4>
                                    <p className="m-0 text-sm text-on-surface-variant leading-relaxed">Comprehensive guidance about purchasing, redeeming, and using PTE vouchers.</p>
                                 </div>
                              </div>
                              <div className="flex gap-4 p-5 bg-white border border-outline rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                 <Users className="w-6 h-6 text-primary shrink-0" />
                                 <div>
                                    <h4 className="font-bold text-on-surface mb-1 text-[15px]">Booking Assistance & Support</h4>
                                    <p className="m-0 text-sm text-on-surface-variant leading-relaxed">Step-by-step resources explaining how vouchers are applied, plus responsive customer assistance.</p>
                                 </div>
                              </div>
                           </div>

                           <h2 className="text-3xl mt-16 mb-6">How Fryment Works</h2>
                           <ol>
                              <li><strong>Choose the appropriate PTE voucher option</strong> from our platform.</li>
                              <li><strong>Complete the payment securely</strong> using our encrypted checkout.</li>
                              <li><strong>Receive your voucher</strong> according to the applicable processing timeline.</li>
                              <li><strong>Redeem the voucher</strong> while booking your PTE exam on the official Pearson portal.</li>
                              <li><strong>Prepare confidently</strong> and attend your scheduled exam.</li>
                           </ol>

                           <h2 className="text-3xl mt-16 mb-6">Our Commitment to Transparency</h2>
                           <p>
                              Trust is essential when purchasing exam-related services. Fryment is committed to honest communication, clear pricing, no misleading promises, accurate educational content, helpful customer support, and transparent processes. Whenever policies or booking procedures change, we work to update our educational content so visitors have access to current information.
                           </p>

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

                           <div className="not-prose bg-primary rounded-3xl p-10 text-center relative overflow-hidden mt-20">
                              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay"></div>
                              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">Our Promise</h3>
                              <p className="text-primary-light text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10 leading-relaxed">
                                 We know that preparing for an English proficiency exam can be stressful. Our promise is to make at least one part of that journey simpler.
                              </p>
                              <Link 
                                 href="/#purchase" 
                                 className="inline-flex items-center justify-center bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all relative z-10"
                              >
                                 Buy PTE Voucher Now
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
