import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import type { Metadata } from 'next';
import BlogListClient from './BlogListClient';

export const metadata: Metadata = {
  title: 'PTE Exam Blog — Tips, Guides & Strategies | Fryment',
  description: 'Expert PTE preparation guides, exam tips, and study strategies from Fryment. Learn how to score 79+ in PTE Academic with proven techniques.',
  keywords: 'PTE blog, PTE tips, PTE preparation, PTE Academic guide, PTE study material, PTE exam 2025',
  alternates: { canonical: 'https://fryment.com/pte/blog' },
  openGraph: {
    title: 'PTE Exam Blog — Tips, Guides & Strategies | Fryment',
    description: 'Expert PTE preparation guides, exam tips, and study strategies from Fryment.',
    type: 'website',
    url: 'https://fryment.com/pte/blog',
  },
};

export const revalidate = 60;

export default async function BlogListPage() {
  const { data: blogs } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, cover_image, category, author, read_time, tags, created_at')
    .eq('published', true)
    .order('created_at', { ascending: false });

  const allBlogs = blogs ?? [];
  const featured = allBlogs.length > 0 ? allBlogs[0] : null;
  const rest = allBlogs.length > 1 ? allBlogs.slice(1) : [];

  return (
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0f7ff] to-white py-12 md:py-16 px-4 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#1565d8]/10 text-[#1565d8] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <span className="material-icons text-sm">auto_stories</span>
            Fryment Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#091e42] tracking-tight mb-4">
            PTE Preparation, Tips &amp;{' '}
            <span className="text-[#1565d8]">Expert Guides</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            Expert strategies, comprehensive guides, and insider tips from our PTE specialists.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-14">
          <Link href={`/pte/blog/${featured.slug}`} className="group grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white">
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
                  {featured.category || 'PTE Guide'}
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

      {/* Recent Articles Grid with Category Filter (Client) */}
      <BlogListClient blogs={allBlogs} />

      {/* CTA Banner */}
      <section className="bg-[#091e42] py-14 px-4 text-center mt-4">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">Ready to book your PTE exam?</h3>
          <p className="text-white/60 text-sm mb-8">Get an instant ₹2,800 discount with a verified Fryment voucher.</p>
          <Link href="/pte#purchase" className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#091e42] font-black text-sm px-8 py-3.5 rounded-2xl shadow-lg hover:bg-yellow-300 transition-colors">
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
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-white/50 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms-and-conditions" className="text-white/50 hover:text-white transition-colors">Terms</Link>
            <Link href="/refund-policy" className="text-white/50 hover:text-white transition-colors">Refund Policy</Link>
          </div>
          <p className="text-white/40 text-xs">© {new Date().getFullYear()} Fryment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
