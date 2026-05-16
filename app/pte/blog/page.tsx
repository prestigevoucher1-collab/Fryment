"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { useEffect } from 'react';

const CATEGORIES = ["All Articles", "Exam Tips", "Speaking", "Writing", "Listening", "Reading", "Vocabulary"];

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'Published')
        .order('created_at', { ascending: false });
      if (data) setBlogs(data);
    }
    fetchBlogs();
  }, []);

  const filtered = blogs.filter((b) => {
    const matchesSearch = search === "" || b.title?.toLowerCase().includes(search.toLowerCase()) || b.excerpt?.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All Articles" || (b.category && b.category === activeCategory);
    return matchesSearch && matchesCat;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Same as Homepage */}
      <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md h-14 md:h-16 flex items-center border-b border-slate-100 shadow-sm">
        <div className="max-w-[1920px] w-full mx-auto px-4 md:px-6 lg:px-16 flex items-center justify-between">
          <Link href="/pte" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1565d8] rounded-lg flex items-center justify-center shadow-lg"><span className="material-icons text-lg text-white">school</span></div>
            <span className="text-lg md:text-xl font-black tracking-tight text-[#091e42]">Fryment</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <a className="text-sm font-bold text-[#091e42] hover:text-[#1565d8] transition-colors" href="/how-to-book">How to Book</a>
            <Link className="text-sm font-bold text-[#1565d8] transition-colors" href="/pte/blog">Blog</Link>
            <a className="bg-gradient-to-r from-[#1565d8] to-[#091e42] text-white px-5 py-2.5 rounded-xl font-black text-sm tracking-wide shadow-md flex items-center gap-2 hover:opacity-90 transition-opacity" href="tel:+919325216364">
              <span className="material-icons text-sm">phone</span>
              Call: +91 93252 16364
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="text-[#091e42] p-1">
              <span className="material-icons text-3xl">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-[99999] flex flex-col lg:hidden">
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1565d8] rounded-lg flex items-center justify-center"><span className="material-icons text-white text-sm">school</span></div>
                <span className="text-xl font-black tracking-tight text-[#091e42]">Fryment</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-[#1565d8]">
                <span className="material-icons text-3xl">close</span>
              </button>
            </div>
            <div className="flex-1 p-8 flex flex-col space-y-6 bg-white">
              <a href="/how-to-book" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>
                <span className="material-icons text-xl">menu_book</span>How to Book
              </a>
              <Link href="/pte/blog" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3 border-b border-slate-50" onClick={() => setIsMenuOpen(false)}>
                <span className="material-icons text-xl">rss_feed</span>Our Blog
              </Link>
              <a href="tel:+919325216364" className="text-lg font-bold text-[#1565d8] flex items-center gap-4 py-3" onClick={() => setIsMenuOpen(false)}>
                <span className="material-icons text-xl">phone</span>Call Support
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-10 right-6 z-[100000] md:bottom-12 md:right-10">
        <a className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center border-4 border-white shadow-2xl hover:scale-110 transition-transform" href="https://wa.me/919325216364" target="_blank" rel="noopener noreferrer">
          <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.541 4.192 1.572 6.014L0 24l6.105-1.601a11.871 11.871 0 005.939 1.6h.005c6.635 0 12.032-5.394 12.035-12.034a11.84 11.84 0 00-3.517-8.503z" /></svg>
        </a>
      </div>

      {/* Nav Spacer */}
      <div className="h-14 md:h-16" />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#f0f7ff] via-[#e8f0ff] to-white pt-8 md:pt-12 pb-12 md:pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="material-icons text-[#1565d8] text-base">auto_stories</span>
            <span className="text-[#1565d8] font-black text-xs md:text-sm tracking-wide">Fryment Blog</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#091e42] tracking-tight leading-tight mb-4">
            PTE Preparation, Tips &{" "}
            <span className="text-[#1565d8] italic">Expert Guides</span>
          </h1>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Stay ahead with the latest PTE exam patterns, expert strategies, and study materials curated by professionals.
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-1.5 focus-within:border-[#1565d8] transition-colors">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setSearch(searchInput)}
              placeholder="Search articles..."
              className="flex-1 bg-transparent px-4 py-2 text-sm text-[#091e42] placeholder-slate-400 focus:outline-none font-medium"
            />
            <button
              onClick={() => setSearch(searchInput)}
              className="bg-[#1565d8] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#1254b8] transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-14 md:top-16 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex gap-2 justify-center overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${activeCategory === cat
                ? 'bg-[#1565d8] text-white shadow-sm'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 px-4 md:px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <span className="material-icons text-5xl text-slate-200 block mb-4">article</span>
              <h2 className="text-xl font-black text-slate-400">No articles found</h2>
              <p className="text-slate-400 text-sm mt-2">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((blog) => (
                <article key={blog.id} className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-50">
                    <img
                      src={blog.feature_img_url || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop'}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#1565d8] text-white text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                        {blog.category || 'PTE Tips'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex-1 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      <span className="material-icons text-[12px]">calendar_today</span>
                      {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                    <h2 className="text-base md:text-lg font-black text-[#091e42] leading-snug line-clamp-2 group-hover:text-[#1565d8] transition-colors flex-1">
                      <Link href={`/pte/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                      {blog.excerpt || 'Read the full guide on Fryment.'}
                    </p>
                    <Link
                      href={`/pte/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-[#1565d8] text-xs font-bold mt-auto hover:gap-2 transition-all"
                    >
                      Read Article <span className="material-icons text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer Band */}
      <section className="bg-[#091e42] py-14 md:py-20 px-4 text-center mt-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">Ready to book your PTE exam?</h3>
          <p className="text-white/60 text-sm md:text-base mb-8 font-medium">Get an instant ₹2,800 discount with a verified Fryment voucher.</p>
          <Link
            href="/pte#purchase"
            className="inline-flex items-center gap-2 bg-[#ffcc00] text-[#091e42] font-black text-sm md:text-base px-8 py-3.5 rounded-2xl shadow-lg hover:bg-yellow-300 transition-colors"
          >
            <span className="material-icons text-base">workspace_premium</span>
            Get My Voucher Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#091e42] pt-16 md:pt-24 px-4 md:px-6 lg:px-16 text-white text-left relative z-10 pb-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#1565d8] flex items-center justify-center shadow-lg"><span className="material-icons text-white text-base">school</span></div>
              <span className="text-xl md:text-2xl font-black tracking-tight">Fryment</span>
            </div>
            <p className="text-white/60 text-sm font-medium max-w-sm leading-relaxed">
              Empowering Indian students with secure, discounted PTE Academic vouchers. Join over 10,000+ successful test takers globally.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-[10px] font-black tracking-widest uppercase text-white/30">Company</h5>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Home</Link></li>
              <li><Link href="/pte#purchase" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Buy Voucher</Link></li>
              <li><Link href="/pte/blog" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">PTE Resources</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-4">
            <h5 className="text-[10px] font-black tracking-widest uppercase text-white/30">Legal</h5>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="text-white/80 hover:text-[#ffcc00] text-sm font-semibold transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-[10px] font-black tracking-widest uppercase text-white/30">Support & Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/90 hover:text-[#ffcc00] transition-colors">
                <span className="material-icons text-[16px] text-[#ffcc00] shrink-0">mail</span>
                <a href="mailto:hello@fryment.com" className="text-sm font-semibold">hello@fryment.com</a>
              </li>
            </ul>
            <p className="text-xs font-semibold text-white/30 pt-2">24/7 WhatsApp Support</p>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[11px] font-bold">© {new Date().getFullYear()} Fryment. All rights reserved.</p>
          <div className="flex items-center gap-2 text-white/30">
            <span className="material-icons text-[14px]">security</span>
            <span className="text-[11px] font-bold">100% Encrypted Payment Checkout</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
