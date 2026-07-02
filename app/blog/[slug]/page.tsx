"use client";

import { useState } from "react";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog/posts";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const post = blogPosts.find((p) => p.id === params.slug);

   if (!post) {
      notFound();
   }

   return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         
         <main className="flex-1 w-full relative">
            {/* Hero Banner Section */}
            <div className="w-full bg-surface-dim relative overflow-hidden pt-24 pb-32 border-b border-outline-variant/50">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#005b4a_1px,_transparent_1px)] opacity-[0.03] bg-[length:20px_20px]"></div>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
               
               <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-10">
                  <div className="inline-flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-8">
                     <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full">{post.category}</span>
                     <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                     <span className="flex items-center gap-1.5 hidden md:flex"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-on-surface leading-tight mb-8">
                     {post.title}
                  </h1>
                  <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                     {post.excerpt}
                  </p>
               </div>
            </div>

            {/* Article Content Section */}
            <div className="max-w-4xl mx-auto px-6 relative z-20 -mt-16 mb-24">
               <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-outline-variant p-8 md:p-12 lg:p-16">
                  
                  {/* Action Bar */}
                  <div className="flex items-center justify-between pb-8 mb-8 border-b border-outline-variant">
                     <Link href="/blog" className="inline-flex items-center gap-2 text-on-surface-variant font-bold hover:text-primary transition-colors text-sm">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                     </Link>
                     <button className="w-10 h-10 rounded-full bg-slate-50 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all shadow-sm hover:shadow">
                        <Share2 className="w-4 h-4" />
                     </button>
                  </div>

                  {/* Markdown Content */}
                  <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:text-on-surface prose-p:text-on-surface-variant prose-p:leading-relaxed prose-a:text-primary prose-a:font-bold prose-strong:text-on-surface prose-strong:font-bold prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-medium prose-blockquote:text-on-surface-variant prose-li:text-on-surface-variant">
                     <ReactMarkdown>
                        {post.content}
                     </ReactMarkdown>
                  </div>

                  {/* Post Footer CTA */}
                  <div className="mt-16 pt-12 border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-dim rounded-2xl p-8 border border-outline-variant shadow-sm shadow-primary/5">
                     <div>
                        <h4 className="font-headline font-black text-xl text-on-surface mb-2">Ready to take your exam?</h4>
                        <p className="text-sm font-medium text-on-surface-variant">Get your official voucher and save up to ₹3,000 instantly.</p>
                     </div>
                     <Link href="/#purchase" className="shrink-0 bg-primary text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:bg-primary-dark transition-all">
                        Buy Voucher Now
                     </Link>
                  </div>
               </div>
            </div>
         </main>
         
         {!isMenuOpen && <Footer />}
      </div>
   );
}
