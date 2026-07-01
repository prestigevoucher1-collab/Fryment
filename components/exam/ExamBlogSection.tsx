"use client";

import Link from "next/link";
import { ExamConfig } from "@/data/pte/exams";
import { ArrowRight, BookOpen } from "lucide-react";

interface Blog {
   title: string;
   excerpt: string;
   slug: string;
   cover_image: string;
   created_at: string;
}

interface BlogSectionProps {
   blogs: Blog[];
   exam: ExamConfig;
}

export default function ExamBlogSection({ blogs, exam }: BlogSectionProps) {
   // If no blogs, don't render the section
   if (!blogs || blogs.length === 0) return null;

   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-surface-dim relative border-t border-outline-variant" id="blogs">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none"></div>
         <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16">
               <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-surface-muted/50 px-4 py-2 rounded-full border border-outline-variant">
                     <BookOpen className="w-4 h-4 text-primary" />
                     <span className="text-[11px] md:text-[13px] font-bold text-emerald-800 tracking-wide uppercase">Free Guides</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-on-surface tracking-tight">{exam.name} Resources</h2>
               </div>
               <Link href="/blog" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-outline rounded-xl text-sm font-bold text-on-surface hover:text-primary hover:border-outline hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all group">
                  View All Guides
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               {blogs.map((blog, i) => (
                  <Link href={`/blog/${blog.slug}`} key={i} className="group bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-outline hover:border-outline hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                     <div className="p-6 md:p-8 flex flex-col flex-1 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="inline-block bg-surface-dim text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{exam.name} Guide</span>
                        </div>
                        <h4 className="text-xl md:text-2xl font-black text-on-surface leading-tight line-clamp-2 group-hover:text-primary transition-colors">{blog.title}</h4>
                        <p className="text-sm text-on-surface-variant font-medium leading-relaxed line-clamp-3 flex-1">{blog.excerpt || 'Read the full guide on Fryment to maximize your score.'}</p>
                        
                        <div className="flex items-center gap-2 text-primary text-sm font-bold pt-4 border-t border-outline-variant mt-4 group-hover:text-secondary-dark transition-colors">
                           Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}
