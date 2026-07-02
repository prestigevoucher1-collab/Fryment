"use client";

import { useState } from "react";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/data/blog/posts";

export default function BlogPage() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         
         <main className="flex-1 w-full pt-12 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-surface-dim rounded-b-[4rem] md:rounded-b-[10rem] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               {/* Hero Section */}
               <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20 shadow-sm">
                     <BookOpen className="w-4 h-4" /> Official Fryment Blog
                  </div>
                  <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface tracking-tight mb-6">
                     Insights for your <span className="text-primary">Study Abroad</span> Journey
                  </h1>
                  <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                     Discover expert test prep strategies, university admission tips, and learn how to save big on your English proficiency exams.
                  </p>
               </div>

               {/* Featured Article (First item) */}
               <div className="mb-16 animate-in fade-in zoom-in-95 duration-700 delay-150">
                  <Link href={`/blog/${blogPosts[0].id}`} className="group relative block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-outline-variant">
                     <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="h-64 lg:h-full w-full bg-surface-dim relative overflow-hidden flex items-center justify-center p-12 text-center border-r border-outline-variant/50">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
                           <h2 className="text-3xl md:text-4xl font-headline font-black text-on-surface relative z-10 leading-tight">
                              {blogPosts[0].title}
                           </h2>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                           <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                              <span className="text-primary bg-primary/10 px-3 py-1 rounded-md">{blogPosts[0].category}</span>
                              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {blogPosts[0].date}</span>
                              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {blogPosts[0].readTime}</span>
                           </div>
                           <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">
                              {blogPosts[0].title}
                           </h3>
                           <p className="text-on-surface-variant text-base leading-relaxed font-medium mb-8">
                              {blogPosts[0].excerpt}
                           </p>
                           <div className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all">
                              Read Full Article <ArrowRight className="w-4 h-4" />
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>

               {/* Blog Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.slice(1).map((post, index) => (
                     <Link key={post.id} href={`/blog/${post.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                        <div className="h-48 w-full bg-surface-dim relative overflow-hidden flex items-center justify-center p-6 text-center border-b border-outline-variant/50">
                           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#005b4a_1px,_transparent_1px)] opacity-[0.03] bg-[length:20px_20px]"></div>
                           <h3 className="text-xl font-headline font-black text-on-surface relative z-10 leading-snug">
                              {post.title}
                           </h3>
                        </div>
                        <div className="p-6 md:p-8 flex flex-col flex-1">
                           <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                              <span className="text-primary">{post.category}</span>
                              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                           </div>
                           <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                           </h3>
                           <p className="text-on-surface-variant text-sm leading-relaxed font-medium mb-6 line-clamp-3 flex-1">
                              {post.excerpt}
                           </p>
                           <div className="inline-flex items-center gap-2 font-bold text-sm text-primary group-hover:gap-3 transition-all mt-auto pt-4 border-t border-outline-variant/50">
                              Read Article <ArrowRight className="w-4 h-4" />
                           </div>
                        </div>
                     </Link>
                  ))}
               </div>
               
               {/* Call to Action */}
               <div className="mt-20 bg-surface-dim border border-outline-variant rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl shadow-primary/5">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
                  <h2 className="text-2xl md:text-3xl font-headline font-black text-on-surface mb-4 relative z-10">Ready to book your exam?</h2>
                  <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10 font-medium">
                     Don't pay full price. Get your official PTE, Duolingo, TOEFL, or GRE voucher delivered instantly.
                  </p>
                  <Link href="/#purchase" className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 hover:bg-primary-dark transition-all relative z-10">
                     Buy a Voucher Now
                  </Link>
               </div>

            </div>
         </main>
         
         {!isMenuOpen && <Footer />}
      </div>
   );
}
