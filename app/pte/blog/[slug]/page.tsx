import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { Metadata, ResolvingMetadata } from 'next';
import TableOfContents from './TableOfContents';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateMetadata(
  { params }: BlogPageProps,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const { data: blog } = await supabase
    .from('blogs')
    .select('title, excerpt, cover_image, author, slug')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (!blog) return { title: 'Blog Not Found | Fryment' };

  return {
    title: `${blog.title} | Fryment Blog`,
    description: blog.excerpt,
    alternates: { canonical: `https://fryment.com/pte/blog/${slug}` },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      url: `https://fryment.com/pte/blog/${slug}`,
      images: blog.cover_image ? [{ url: blog.cover_image, width: 1200, height: 630, alt: blog.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: blog.cover_image ? [blog.cover_image] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !blog || !blog.published) {
    notFound();
  }

  // Fetch 3 related blogs
  const { data: related } = await supabase
    .from('blogs')
    .select('title, slug, cover_image, excerpt, category, read_time, created_at')
    .eq('published', true)
    .neq('slug', slug)
    .eq('category', blog.category)
    .limit(3);

  // Fallback related if not enough in same category
  const { data: moreRelated } = !related?.length ? await supabase
    .from('blogs')
    .select('title, slug, cover_image, excerpt, category, read_time, created_at')
    .eq('published', true)
    .neq('slug', slug)
    .limit(3) : { data: null };

  const relatedBlogs = related?.length ? related : (moreRelated ?? []);

  // Word count → read time
  const wordCount = blog.content?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  const computedReadTime = blog.read_time || `${Math.max(1, Math.ceil(wordCount / 200))} min read`;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: blog.excerpt,
    author: { '@type': 'Person', name: blog.author || 'Fryment Team' },
    publisher: { '@type': 'Organization', name: 'Fryment', url: 'https://fryment.com' },
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    image: blog.cover_image || '',
    url: `https://fryment.com/pte/blog/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md h-14 md:h-16 flex items-center border-b border-slate-100 shadow-sm">
          <div className="max-w-[1200px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
            <Link href="/pte" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1565d8] rounded-lg flex items-center justify-center">
                <span className="material-icons text-base text-white">school</span>
              </div>
              <span className="text-lg font-black tracking-tight text-[#091e42]">Fryment</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/pte" className="text-sm font-semibold text-slate-600 hover:text-[#1565d8] transition-colors">Home</Link>
              <Link href="/pte/blog" className="text-sm font-bold text-[#1565d8]">Blog</Link>
              <Link href="/pte#purchase" className="bg-[#1565d8] text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-[#1254b8] transition-colors">Buy Voucher</Link>
            </div>
          </div>
        </nav>

        <div className="h-14 md:h-16" />

        {/* Breadcrumb */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-5 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-400">
            <Link href="/pte" className="hover:text-[#1565d8] transition-colors font-medium">Home</Link>
            <span className="material-icons text-[12px]">chevron_right</span>
            <Link href="/pte/blog" className="hover:text-[#1565d8] transition-colors font-medium">Blog</Link>
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
            {blog.tags?.length > 0 && blog.tags.slice(0, 3).map((tag: string) => (
              <span key={tag} className="bg-[#1565d8]/5 text-[#1565d8] text-xs font-bold px-3 py-1.5 rounded-full border border-[#1565d8]/10">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Content layout: Article + Sidebar ToC */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
          <div className="flex gap-10 items-start">
            {/* Main content */}
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
                  prose-ol:text-[#334155]
                  prose-blockquote:border-l-4 prose-blockquote:border-l-[#1565d8] prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-700 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:my-8
                  prose-img:rounded-2xl prose-img:shadow-xl prose-img:my-10
                  prose-code:bg-slate-100 prose-code:text-[#1565d8] prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
                dangerouslySetInnerHTML={{ __html: blog.content || '' }}
              />

              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="mt-10 pt-6 border-t border-slate-100">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Topic Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author card */}
              <div className="mt-10 p-6 rounded-2xl border border-slate-100 bg-[#f8faff] flex gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1565d8]/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons text-[#1565d8] text-2xl">person</span>
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Written by</p>
                  <p className="font-black text-[#091e42] text-base">{blog.author || 'Fryment Team'}</p>
                  <p className="text-sm text-slate-500 mt-1">PTE exam specialist at Fryment, helping students achieve their target scores with proven strategies and official study vouchers.</p>
                </div>
              </div>

              {/* Share */}
              <div className="mt-6 flex items-center gap-3">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">Share</p>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://fryment.com/pte/blog/${slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-[#1565d8] hover:text-white transition-all text-slate-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://fryment.com/pte/blog/${slug}`)}&title=${encodeURIComponent(blog.title)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-[#1565d8] hover:text-white transition-all text-slate-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${blog.title} — https://fryment.com/pte/blog/${slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-slate-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.541 4.192 1.572 6.014L0 24l6.105-1.601a11.871 11.871 0 005.939 1.6h.005c6.635 0 12.032-5.394 12.035-12.034a11.84 11.84 0 00-3.517-8.503z" /></svg>
                </a>
              </div>
            </article>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-20">
              {/* Table of Contents */}
              <div className="bg-[#f8faff] rounded-2xl border border-slate-100 p-5 mb-5">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">Table of Contents</p>
                <TableOfContents content={blog.content || ''} />
              </div>

              {/* CTA card */}
              <div className="bg-[#1565d8] rounded-2xl p-6 text-white">
                <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-2">Ready to book?</p>
                <p className="font-black text-lg leading-tight mb-3">Save ₹2,800 on your PTE exam</p>
                <p className="text-white/70 text-xs mb-4">Get an official discounted voucher and book at a certified Pearson test centre.</p>
                <Link href="/pte#purchase" className="block w-full bg-[#ffcc00] text-[#091e42] font-black text-sm py-3 rounded-xl text-center hover:bg-yellow-300 transition-colors">
                  Get My Voucher →
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="border-t border-slate-100 bg-slate-50 py-12 px-4">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-xl font-black text-[#091e42] mb-6">More Articles You&apos;ll Find Interesting</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedBlogs.map((r) => (
                  <Link key={r.slug} href={`/pte/blog/${r.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all">
                    <div className="aspect-video overflow-hidden bg-slate-50">
                      <img src={r.cover_image || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600'} alt={r.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      {r.read_time && <span className="text-xs text-slate-400 font-medium">{r.read_time}</span>}
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
          <Link href="/pte#purchase" className="flex items-center justify-center gap-2 w-full bg-[#1565d8] text-white font-black text-sm py-3 rounded-xl">
            <span className="material-icons text-base">workspace_premium</span>
            Get PTE Voucher — Save ₹2,800
          </Link>
        </div>
        <div className="lg:hidden h-16" />

        {/* Footer */}
        <footer className="bg-[#091e42] border-t border-white/10 px-4 py-10">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#1565d8] flex items-center justify-center"><span className="material-icons text-white text-sm">school</span></div>
              <span className="text-white font-black tracking-tight">Fryment</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms-and-conditions" className="text-white/50 hover:text-white transition-colors">Terms</Link>
              <Link href="/refund-policy" className="text-white/50 hover:text-white transition-colors">Refund</Link>
            </div>
            <p className="text-white/40 text-xs">© {new Date().getFullYear()} Fryment. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
