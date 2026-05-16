"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  GraduationCap, 
  ArrowRight, 
  Calendar, 
  Tag, 
  Menu, 
  X, 
  MessageCircle, 
  Zap, 
  Clock,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CATEGORIES = ["All Articles", "Exam Tips", "Speaking", "Writing", "Listening", "Reading", "Vocabulary"];

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
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
    <div className="min-h-screen bg-white text-text-rich font-body selection-premium">
      {/* Premium Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[1000] h-16 md:h-20 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/pte" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight text-primary">Fryment</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <Link href="/pte" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/pte/blog" className="text-sm font-black text-primary transition-colors">Blog</Link>
            <a href="https://wa.me/919325216364" className="bg-primary text-white px-6 py-3 rounded-2xl font-black text-sm tracking-wide shadow-xl flex items-center gap-2 hover:translate-y-[-2px] transition-all">
              <Zap className="w-4 h-4 fill-accent text-accent" />
              Book Voucher
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2 text-primary">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-[1001] bg-white lg:hidden flex flex-col"
          >
            <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
              <span className="text-2xl font-black text-primary">Fryment</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-primary">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 p-8 space-y-8">
              <Link href="/pte" className="flex items-center justify-between text-2xl font-black text-primary">Home <ArrowRight className="w-6 h-6 text-accent" /></Link>
              <Link href="/pte/blog" className="flex items-center justify-between text-2xl font-black text-primary">Blog <ArrowRight className="w-6 h-6 text-accent" /></Link>
              <div className="pt-8">
                <a href="https://wa.me/919325216364" className="w-full bg-primary text-white py-5 rounded-3xl flex items-center justify-center gap-3 font-black text-xl">
                  <Zap className="w-6 h-6 text-accent fill-accent" />
                  Book Voucher
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Cinematic Header */}
        <section className="bg-slate-50 py-20 md:py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-overlay opacity-40" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">Preparation Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight tracking-tight">
              Master the PTE with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-600">Expert Guidance</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              Your comprehensive resource for exam strategies, mock test updates, and score-boosting tips curated by top trainers.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative group mt-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/10 rounded-[2rem] blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative flex items-center bg-white rounded-[1.5rem] shadow-xl border border-slate-200 p-2 pl-6">
                <Search className="w-5 h-5 text-slate-400 mr-4" />
                <input 
                  type="text" 
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && setSearch(searchInput)}
                  placeholder="Search exam tips, guides..."
                  className="flex-1 bg-transparent border-none outline-none font-bold text-primary placeholder:text-slate-300"
                />
                <button 
                  onClick={() => setSearch(searchInput)}
                  className="bg-primary text-white px-8 py-3.5 rounded-2xl font-black text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Sticky Filter */}
        <div className="sticky top-16 md:top-20 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex gap-3 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "shrink-0 px-6 py-2.5 rounded-2xl text-sm font-black transition-all",
                  activeCategory === cat
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-40 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h2 className="text-2xl font-black text-slate-400">No results found</h2>
              <p className="text-slate-500 font-medium mt-2">Try adjusting your search or category filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((blog, i) => (
                <motion.article 
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i % 3 * 0.1 }}
                  className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:border-primary/10 transition-all duration-500"
                >
                  <Link href={`/pte/blog/${blog.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img 
                      src={blog.feature_img_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt={blog.title}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                        {blog.category || 'PTE Guide'}
                      </span>
                    </div>
                  </Link>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        5 min read
                      </div>
                    </div>
                    
                    <h2 className="text-xl md:text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors leading-tight line-clamp-2">
                      <Link href={`/pte/blog/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    
                    <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-3 mb-8 flex-1">
                      {blog.excerpt || 'Master the latest exam techniques with our detailed breakdown of the PTE Academic format.'}
                    </p>

                    <Link 
                      href={`/pte/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] pt-6 border-t border-slate-100 group/link"
                    >
                      Read Full Article 
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter / Final CTA */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center text-white shadow-2xl">
            <div className="absolute inset-0 bg-grid-overlay opacity-10" />
            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -right-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]"
            />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Don't Miss Any <br /> <span className="text-accent italic">Exam Updates</span>
              </h2>
              <p className="text-xl text-blue-100/60 font-medium max-w-xl mx-auto">
                Join our WhatsApp community for instant notifications on exam slot openings and discount code drops.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
                <a href="https://wa.me/919325216364" className="w-full md:w-auto bg-accent text-primary px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
                  Join WhatsApp Community <MessageCircle className="w-5 h-5" />
                </a>
                <Link href="/pte#purchase" className="w-full md:w-auto bg-white/10 backdrop-blur-xl border border-white/10 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-colors">
                  Book Voucher Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="bg-primary pt-24 pb-12 px-6 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">Fryment</span>
            </div>
            <p className="text-blue-100/40 font-medium leading-relaxed">
              India's #1 trusted platform for discounted PTE Academic vouchers. Secure, fast, and verified.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Platform</h5>
            <ul className="space-y-4 font-bold text-sm text-blue-100/60">
              <li><Link href="/pte#purchase" className="hover:text-accent transition-colors">Book Voucher</Link></li>
              <li><Link href="/pte/blog" className="hover:text-accent transition-colors">PTE Resources</Link></li>
              <li><Link href="/pte#faq" className="hover:text-accent transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Legal</h5>
            <ul className="space-y-4 font-bold text-sm text-blue-100/60">
              <li><Link href="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Contact</h5>
            <div className="space-y-4">
              <a href="https://wa.me/919325216364" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform"><MessageCircle className="w-5 h-5" /></div>
                <div className="text-sm">
                  <p className="font-black text-white">WhatsApp Support</p>
                  <p className="text-blue-100/40 font-bold">Available 24/7</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">© 2026 Fryment. All rights reserved.</p>
          <p className="text-xs font-bold uppercase tracking-[0.2em]">Official PTE Partner Hub</p>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/919325216364"
        className="fixed bottom-8 right-8 z-[2000] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform"
      >
        <svg className="w-9 h-9 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.031c0 2.122.541 4.192 1.572 6.014L0 24l6.105-1.601a11.871 11.871 0 005.939 1.6h.005c6.635 0 12.032-5.394 12.035-12.034a11.84 11.84 0 00-3.517-8.503z" /></svg>
      </a>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
