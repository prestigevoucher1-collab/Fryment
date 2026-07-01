"use client";

import Link from "next/link";
import Image from "next/image";

interface Blog {
   title: string;
   excerpt: string;
   slug: string;
   cover_image: string;
   created_at: string;
}

interface BlogSectionProps {
   blogs: Blog[];
}

export default function BlogSection({ blogs }: BlogSectionProps) {
   return (
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-16 bg-surface" id="blogs">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex items-end justify-between mb-8 md:mb-12">
               <div>
                  <span className="text-secondary font-black text-xs md:text-sm tracking-wide block mb-2">Free Guides</span>
                  <h2 className="text-2xl md:text-4xl font-black text-primary tracking-tight">PTE Resources</h2>
               </div>
               <Link href="/blog" className="text-xs md:text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 shrink-0">
                  View All <span className="material-icons text-[16px]">arrow_forward</span>
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
               {blogs.map((blog, i) => (
                  <Link href={`/blog/${blog.slug}`} key={i} className="group bg-surface rounded-2xl md:rounded-3xl overflow-hidden border border-accent/20 hover:border-accent/40 hover:shadow-lg transition-all duration-300 block">
                     <div className="aspect-video overflow-hidden bg-accent/10">
                        <Image
                           src={blog.cover_image || 'https://images.unsplash.com/photo-1546410531-bea47b593671?w=800&q=80'}
                           width={800}
                           height={400}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                           alt={blog.title}
                        />
                     </div>
                     <div className="p-5 md:p-6 space-y-3">
                        <span className="inline-block bg-secondary/10 text-secondary text-[10px] md:text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full">PTE Guide</span>
                        <h4 className="text-base md:text-lg font-black text-primary leading-snug line-clamp-2 group-hover:text-secondary transition-colors">{blog.title}</h4>
                        <p className="text-xs md:text-sm text-primary/70 font-medium leading-relaxed line-clamp-2">{blog.excerpt || 'Read the full guide on Fryment.'}</p>
                        <div className="flex items-center gap-1 text-secondary text-xs font-bold pt-1">
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
