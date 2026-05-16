'use client';
import { useState } from 'react';
import Link from 'next/link';

type Blog = {
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
};

const CATEGORIES = ['All Articles', 'Exam Prep', 'Study Tips', 'Speaking', 'Writing', 'Reading', 'Listening', 'Immigration', 'Guides', 'News'];

export default function BlogListClient({ blogs, examId = 'pte' }: { blogs: Blog[], examId?: string }) {
  const [activeCategory, setActiveCategory] = useState('All Articles');
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const filtered = blogs.filter((b) => {
    const matchesSearch = search === '' ||
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt?.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'All Articles' || b.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-6 pb-16">
      {/* Search + Category bar */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="flex gap-2 flex-1 bg-white rounded-xl border border-slate-200 p-1.5 focus-within:border-[#1565d8] transition-colors">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setSearch(searchInput)}
              placeholder="Search articles..."
              className="flex-1 bg-transparent px-3 py-1.5 text-sm text-[#091e42] placeholder-slate-400 focus:outline-none"
            />
            <button onClick={() => setSearch(searchInput)} className="bg-[#1565d8] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-[#1254b8] transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1565d8] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article count */}
      <p className="text-sm text-slate-400 font-medium mb-5">
        {filtered.length} article{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-icons text-5xl text-slate-200 block mb-4">article</span>
          <h2 className="text-xl font-black text-slate-400">No articles found</h2>
          <p className="text-slate-400 text-sm mt-2">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filtered.map((blog) => (
            <article key={blog.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-video overflow-hidden bg-slate-50">
                <img
                  src={blog.cover_image || 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop'}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#1565d8]/10 text-[#1565d8] text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                    {blog.category || 'Tips'}
                  </span>
                  {blog.read_time && (
                    <span className="text-xs text-slate-400">{blog.read_time}</span>
                  )}
                </div>
                <h2 className="text-lg font-black text-[#091e42] leading-snug line-clamp-2 group-hover:text-[#1565d8] transition-colors flex-1">
                  <Link href={`/${examId}/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {blog.excerpt || 'Read the full guide on Fryment.'}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-50">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <span className="material-icons text-[12px]">calendar_today</span>
                    {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                  <Link href={`/${examId}/blog/${blog.slug}`} className="inline-flex items-center gap-1 text-[#1565d8] text-xs font-bold hover:gap-2 transition-all">
                    Read more <span className="material-icons text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
