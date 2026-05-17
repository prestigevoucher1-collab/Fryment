"use client";

import Link from "next/link";
import { ExamConfig } from "@/data/pte/exams";

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
   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-white" id="blogs">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex items-end justify-between mb-8 md:mb-12">
               <div>
                  <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide block mb-2">Free Guides</span>
                  <h2 className="text-2xl md:text-4xl font-black text-[#091e42] tracking-tight">{exam.name} Resources</h2>
               </div>
               <Link href="/blog" className="text-xs md:text-sm font-bold text-[#1565d8] hover:text-[#091e42] transition-colors flex items-center gap-1 shrink-0">
                  View All <span className="material-icons text-[16px]">arrow_forward</span>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
               {blogs.map((blog, i) => (
                  <Link href={`/blog/${blog.slug}`} key={i} className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 block">
                     <div className="p-5 md:p-6 space-y-3">
                        <span className="inline-block bg-[#1565d8]/10 text-[#1565d8] text-[10px] md:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full">{exam.name} Guide</span>
                        <h4 className="text-base md:text-lg font-black text-[#091e42] leading-snug line-clamp-2 group-hover:text-[#1565d8] transition-colors">{blog.title}</h4>
                        <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">{blog.excerpt || 'Read the full guide on Fryment.'}</p>
                        <div className="flex items-center gap-1 text-[#1565d8] text-xs font-bold pt-1">
                           Read Article <span className="material-icons text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>
   );
}
