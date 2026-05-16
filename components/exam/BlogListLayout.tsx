"use client";

import Link from 'next/link';
import { ExamConfig } from '@/data/pte/exams';
import BlogListClient from '@/app/pte/blog/BlogListClient';
import ExamNavbar from './ExamNavbar';
import { useState } from 'react';

interface Blog {
   id: string;
   title: string;
   slug: string;
   excerpt: string;
   cover_image: string;
   category: string;
   author: string;
   read_time: string;
   tags: string[];
   created_at: string;
}

interface BlogListLayoutProps {
   blogs: Blog[];
   exam: ExamConfig;
}

export default function BlogListLayout({ blogs, exam }: BlogListLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const featured = blogs.length > 0 ? blogs[0] : null;

  return (
    <div className="min-h-screen bg-white font-body">
      <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="h-14 md:h-16" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0f7ff] to-white py-12 md:py-16 px-4 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#1565d8]/10 text-[#1565d8] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <span className="material-icons text-sm">auto_stories</span>
            Fryment {exam.name} Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#091e42] tracking-tight mb-4">
            {exam.name} Preparation, Tips &amp;{' '}
            <span className="text-[#1565d8]">Expert Guides</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            Expert strategies, comprehensive guides, and insider tips from our {exam.name} specialists.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-14">
          <Link href={`/${exam.id}/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white">
            <div className="aspect-[16/9] md:aspect-auto overflow-hidden bg-slate-50">
              <img
                src={featured.cover_image || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop'}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#1565d8] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {featured.category || `${exam.name} Guide`}
                </span>
                <span className="text-xs text-slate-400 font-medium">{featured.read_time || '5 min read'}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-[#091e42] leading-snug mb-3 group-hover:text-[#1565d8] transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-7 h-7 rounded-full bg-[#1565d8]/10 flex items-center justify-center">
                    <span className="material-icons text-[#1565d8] text-sm">person</span>
                  </div>
                  <span className="font-semibold text-slate-600">{featured.author || 'Fryment Team'}</span>
                  <span>•</span>
                  <span>{new Date(featured.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[#1565d8] text-xs font-bold">
                  Read more <span className="material-icons text-sm">arrow_forward</span>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Recent Articles Grid */}
      <BlogListClient blogs={blogs} />

      {/* CTA Banner */}
      <section className="bg-[#091e42] py-14 px-4 text-center mt-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to book your {exam.name} exam?</h3>
          <p className="text-white/60 text-sm mb-8">Get an instant {exam.saveAmount} discount with a verified Fryment voucher.</p>
          <Link href={`/${exam.id}#purchase`} className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#091e42] font-black text-sm px-8 py-3.5 rounded-2xl shadow-lg hover:bg-yellow-300 transition-colors">
            <span className="material-icons text-base">workspace_premium</span>
            Get My Voucher Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#091e42] border-t border-white/10 px-4 py-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#1565d8] flex items-center justify-center"><span className="material-icons text-white text-sm">school</span></div>
            <span className="text-white font-black tracking-tight">Fryment</span>
          </div>
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Fryment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
