"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ExamConfig } from '@/data/pte/exams';
import TableOfContents from '@/app/pte/blog/[slug]/TableOfContents';
import ExamNavbar from './ExamNavbar';

interface BlogDetailClientProps {
  blog: any;
  relatedBlogs: any[];
  exam: ExamConfig;
}

export default function BlogDetailClient({ blog, relatedBlogs, exam }: BlogDetailClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const wordCount = blog.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  const computedReadTime = blog.read_time || `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  return (
    <div className="min-h-screen bg-white font-body">
      <ExamNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <div className="h-14 md:h-16" />

      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-5 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
          <Link href={`/${exam.id}`} className="hover:text-[#1565d8] transition-colors font-medium">Home</Link>
          <span className="material-icons text-[12px]">chevron_right</span>
          <Link href={`/${exam.id}/blog`} className="hover:text-[#1565d8] transition-colors font-medium">Blog</Link>
          <span className="material-icons text-[12px]">chevron_right</span>
          {blog.category && (
            <>
              <span className="text-slate-400 font-medium">{blog.category}</span>
              <span className="material-icons text-[12px]">chevron_right</span>
            </>
          )}
          <span className="text-slate-600 font-semibold line-clamp-1 max-w-[200px]">{blog.title}</span>
        </nav>
      </div>

      {/* Cover Image */}
      {blog.cover_image && (
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4">
          <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-slate-100">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article header */}
      <header className="max-w-[1200px] mx-auto px-4 md:px-6 py-6">
        {blog.category && (
          <span className="inline-block bg-[#1565d8]/10 text-[#1565d8] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
            {blog.category}
          </span>
        )}
        <h1 className="text-2xl md:text-4xl font-black text-[#091e42] leading-tight tracking-tight mb-5">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#1565d8] flex items-center justify-center shadow-sm">
              <span className="material-icons text-white text-base">person</span>
            </div>
            <span className="font-bold text-[#091e42] text-base">{blog.author || 'Fryment Team'}</span>
          </div>
          <span className="flex items-center gap-2 font-medium">
            <span className="material-icons text-[16px] text-[#1565d8]">calendar_today</span>
            {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="material-icons text-[18px] text-[#1565d8]">schedule</span>
            {computedReadTime}
          </span>
        </div>
      </header>

      {/* Content layout */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
        <div className="flex gap-10 items-start">
          <article className="flex-1 min-w-0">
            <div
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-black prose-headings:text-[#091e42] prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-100
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-[#334155] prose-p:leading-[1.8] prose-p:text-lg prose-p:mb-6
                prose-a:text-[#1565d8] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#091e42] prose-strong:font-black
                prose-ul:text-[#334155] prose-li:mb-2 prose-li:text-lg
                prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10"
              dangerouslySetInnerHTML={{ __html: blog.content || '' }}
            />

            {/* Author card */}
            <div className="mt-10 p-6 rounded-2xl border border-slate-100 bg-[#f8faff] flex gap-4">
              <div className="w-14 h-14 rounded-full bg-[#1565d8]/10 flex items-center justify-center flex-shrink-0">
                <span className="material-icons text-[#1565d8] text-2xl">person</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Written by</p>
                <p className="font-black text-[#091e42] text-base">{blog.author || 'Fryment Team'}</p>
                <p className="text-sm text-slate-500 mt-1">{exam.name} specialist at Fryment, helping students save more on official vouchers.</p>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-20">
            <div className="bg-[#f8faff] rounded-2xl border border-slate-100 p-5 mb-5">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Table of Contents</p>
              <TableOfContents content={blog.content || ''} />
            </div>

            <div className="bg-[#1565d8] rounded-2xl p-6 text-white">
              <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-2">Ready to book?</p>
              <p className="font-black text-lg leading-tight mb-3">Save {exam.saveAmount} on your {exam.name} exam</p>
              <Link href={`/${exam.id}#purchase`} className="block w-full bg-[#ffcc00] text-[#091e42] font-black text-sm py-3 rounded-xl text-center hover:bg-yellow-300 transition-colors">
                Get My Voucher →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="border-t border-slate-100 bg-slate-50 py-12 px-4">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-xl font-black text-[#091e42] mb-6">More Articles You'll Find Interesting</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedBlogs.map((r) => (
                <Link key={r.slug} href={`/${exam.id}/blog/${r.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
                  <div className="aspect-video overflow-hidden bg-slate-50">
                    <img src={r.cover_image || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600'} alt={r.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-black text-[#091e42] mt-1 leading-snug line-clamp-2 group-hover:text-[#1565d8] transition-colors">{r.title}</h3>
                    <span className="inline-flex items-center gap-1 text-[#1565d8] text-xs font-bold mt-3">Read more <span className="material-icons text-sm">arrow_forward</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 shadow-xl">
        <Link href={`/${exam.id}#purchase`} className="flex items-center justify-center gap-2 w-full bg-[#1565d8] text-white font-black text-sm py-3 rounded-xl">
          <span className="material-icons text-base">workspace_premium</span>
          Get {exam.name} Voucher — Save {exam.saveAmount}
        </Link>
      </div>

      <footer className="bg-[#091e42] border-t border-white/10 px-4 py-10">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#1565d8] flex items-center justify-center"><span className="material-icons text-white text-sm">school</span></div>
            <span className="font-black tracking-tight">Fryment</span>
          </div>
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Fryment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
