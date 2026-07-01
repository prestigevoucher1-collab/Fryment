"use client";

import React, { useState } from 'react';
import Link from 'next/link';

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

interface BlogListClientProps {
  blogs: Blog[];
}

export default function BlogListClient({ blogs }: BlogListClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-11 bg-surface border border-outline-variant rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
        />
        <svg className="w-5 h-5 text-on-surface-variant absolute left-4 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link href={`./blog/${blog.slug}`} key={blog.id} className="group flex flex-col bg-surface border border-outline-variant rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="aspect-[16/10] relative bg-surface-dim overflow-hidden">
              {blog.cover_image ? (
                <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-on-surface-variant text-xs uppercase tracking-widest font-bold">No Image</div>
              )}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-lg">
                  {blog.category || 'Article'}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">{blog.title}</h3>
              <p className="text-on-surface-variant text-sm line-clamp-3 mb-6 flex-1">{blog.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium pt-4 border-t border-outline-variant">
                <span>{new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>{blog.read_time || '5 min read'}</span>
              </div>
            </div>
          </Link>
        ))}
        {filteredBlogs.length === 0 && (
          <div className="col-span-full py-12 text-center text-on-surface-variant">
            No articles found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
}
