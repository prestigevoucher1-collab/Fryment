"use client";

import { useState } from "react";
import ExamNavbar from "@/components/exam/ExamNavbar";
import Footer from "@/components/pte/Footer";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Check } from "lucide-react";
import Link from "next/link";

export default function BlogDetailsClient({ post, relatedPosts }: { post: any, relatedPosts: any[] }) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [copied, setCopied] = useState(false);

   const formatDate = (dateString: string) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
   };

   const handleShare = async () => {
      try {
         await navigator.clipboard.writeText(window.location.href);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      } catch (err) {
         console.error("Failed to copy link: ", err);
      }
   };

   if (!post) {
      return (
         <div className="min-h-screen bg-slate-50 flex flex-col font-body">
            <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main className="flex-1 w-full flex items-center justify-center flex-col gap-6 py-32">
               <h1 className="text-4xl md:text-5xl font-headline font-black text-on-surface">Post Not Found</h1>
               <p className="text-on-surface-variant font-medium">The blog post you are looking for does not exist or has been removed.</p>
               <Link href="/blog" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors">
                  <ArrowLeft className="w-4 h-4" /> Return to Blog
               </Link>
            </main>
            {!isMenuOpen && <Footer />}
         </div>
      );
   }

   return (
      <div className="min-h-screen bg-slate-50 flex flex-col font-body">
         <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         
         <main className="flex-1 w-full relative">
            {/* Hero Banner Section */}
            <div className="w-full bg-surface-dim relative overflow-hidden pt-24 pb-32 border-b border-outline-variant/50">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#005b4a_1px,_transparent_1px)] opacity-[0.03] bg-[length:20px_20px]"></div>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
               
               {post.cover_image && (
                  <div className="absolute inset-0 z-0 opacity-10 blur-sm">
                     <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
               )}
               
               <div className="max-w-4xl mx-auto px-6 relative z-10 text-center mt-10">
                  <div className="inline-flex items-center justify-center flex-wrap gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-8">
                     {post.category && (
                        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full">{post.category}</span>
                     )}
                     <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {formatDate(post.created_at)}</span>
                     {post.read_time && (
                        <span className="flex items-center gap-1.5 hidden md:flex"><Clock className="w-4 h-4" /> {post.read_time}</span>
                     )}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-black text-on-surface leading-tight mb-8">
                     {post.title}
                  </h1>
                  {post.excerpt && (
                     <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        {post.excerpt}
                     </p>
                  )}
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
                     <button 
                        onClick={handleShare}
                        className="group relative w-10 h-10 rounded-full bg-slate-50 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all shadow-sm hover:shadow"
                        aria-label="Share post"
                     >
                        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                        {copied && (
                           <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                              Link copied!
                           </span>
                        )}
                     </button>
                  </div>

                  {/* HTML Content */}
                  <div 
                     className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-headline prose-headings:font-black prose-headings:text-on-surface prose-p:text-on-surface-variant prose-p:leading-relaxed prose-a:text-primary prose-a:font-bold prose-strong:text-on-surface prose-strong:font-bold prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:font-medium prose-blockquote:text-on-surface-variant prose-li:text-on-surface-variant prose-img:rounded-xl prose-img:w-full"
                     dangerouslySetInnerHTML={{ __html: post.content }}
                  />

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

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
               <div className="max-w-7xl mx-auto px-6 relative z-20 mb-24">
                  <div className="mb-8">
                     <h2 className="text-3xl font-headline font-black text-on-surface">Related Articles</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {relatedPosts.map((relatedPost, index) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                           <div className="h-48 w-full bg-surface-dim relative overflow-hidden flex items-center justify-center p-6 text-center border-b border-outline-variant/50">
                              {relatedPost.cover_image ? (
                                 <img src={relatedPost.cover_image} alt={relatedPost.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                              ) : (
                                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#005b4a_1px,_transparent_1px)] opacity-[0.03] bg-[length:20px_20px]"></div>
                              )}
                              <h3 className="text-xl font-headline font-black text-on-surface relative z-10 leading-snug">
                                 {!relatedPost.cover_image && relatedPost.title}
                              </h3>
                           </div>
                           <div className="p-6 md:p-8 flex flex-col flex-1">
                              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">
                                 <span className="text-primary">{relatedPost.category || 'Blog'}</span>
                                 {relatedPost.read_time && (
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {relatedPost.read_time}</span>
                                 )}
                              </div>
                              <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                 {relatedPost.title}
                              </h3>
                              <p className="text-on-surface-variant text-sm leading-relaxed font-medium mb-6 line-clamp-3 flex-1">
                                 {relatedPost.excerpt}
                              </p>
                              <div className="inline-flex items-center gap-2 font-bold text-sm text-primary group-hover:gap-3 transition-all mt-auto pt-4 border-t border-outline-variant/50">
                                 Read Article <ArrowRight className="w-4 h-4" />
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            )}
         </main>
         
         {!isMenuOpen && <Footer />}
      </div>
   );
}
