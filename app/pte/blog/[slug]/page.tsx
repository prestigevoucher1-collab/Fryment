import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { Metadata, ResolvingMetadata } from 'next';
import BlogPopup from '@/components/BlogPopup';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Bookmark,
  GraduationCap,
  ChevronRight,
  Zap
} from 'lucide-react';
import ReadingProgressBar from '@/components/ReadingProgressBar';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic SEO Metadata
export const revalidate = 0; 

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: blog } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!blog) return { title: 'Blog Not Found' };

  return {
    title: blog.meta_title || `${blog.title} | Fryment Blog`,
    description: blog.meta_description || blog.excerpt,
    keywords: blog.meta_keyword,
    alternates: {
      canonical: blog.canonical_url,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.og_img_url || blog.feature_img_url || ''],
    },
  };
}

export default async function BlogSinglePage({ params }: BlogPageProps) {
  const { slug } = await params;

  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !blog) {
    notFound();
  }

  // Calculate read time
  const wordCount = blog.concept?.replace(/<[^>]*>/g, '').split(/\s+/).length || 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  // Determine if it's a full HTML document
  const isFullHtml = blog.concept?.toLowerCase().includes('<!doctype') || blog.concept?.toLowerCase().includes('<html');

  return (
    <article className="bg-white min-h-screen pb-20 font-body selection-premium">
      <ReadingProgressBar />
      
      {/* Article Header */}
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid-overlay opacity-40" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link 
            href="/pte/blog" 
            className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-12 hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              {blog.category || 'PTE Academic'}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm text-primary">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Author</p>
                  <p className="text-sm font-black text-primary">{blog.author || 'Fryment Team'}</p>
                </div>
              </div>
              
              <div className="h-10 w-[1px] bg-slate-200 hidden md:block" />
              
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Published</p>
                  <div className="flex items-center gap-2 text-sm font-black text-primary">
                    <Calendar className="w-4 h-4 text-accent" />
                    {new Date(blog.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Read Time</p>
                  <div className="flex items-center gap-2 text-sm font-black text-primary">
                    <Clock className="w-4 h-4 text-accent" />
                    {readTime} Min Read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.feature_img_url && (
        <div className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-16 relative z-20">
          <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src={blog.feature_img_url} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Article Content Area */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_300px] gap-16 md:gap-24">
          
          <main className="min-w-0">
            {isFullHtml ? (
              <div className="w-full bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl min-h-[800px] flex flex-col">
                <iframe 
                  srcDoc={blog.concept} 
                  className="w-full flex-1 min-h-[800px] border-none"
                  title={blog.title}
                />
              </div>
            ) : (
              <div className="space-y-12">
                <div 
                  className="prose prose-xl max-w-none 
                    prose-headings:text-primary prose-headings:font-black prose-headings:tracking-tight
                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg
                    prose-a:text-primary prose-a:font-black prose-a:underline prose-a:decoration-accent prose-a:decoration-2
                    prose-strong:text-primary prose-strong:font-black
                    prose-img:rounded-[2rem] prose-img:shadow-xl prose-img:border prose-img:border-slate-100
                    prose-blockquote:border-l-accent prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:font-black prose-blockquote:text-primary prose-blockquote:not-italic"
                  dangerouslySetInnerHTML={{ __html: blog.concept || '' }}
                />

                {/* Article Footer Tools */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">Share:</span>
                    <div className="flex gap-2">
                      <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                      </button>
                      <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                      </button>
                      <button className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"><Bookmark className="w-5 h-5" /></button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["PTE Exam", "Preparation", "Study Guide"].map(tag => (
                      <span key={tag} className="px-4 py-2 bg-slate-100 rounded-xl text-xs font-black text-slate-500 uppercase tracking-widest">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Sticky Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-8">
              {/* Promo Card */}
              <div className="bg-primary rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <Zap className="w-10 h-10 text-accent fill-accent mb-6" />
                <h3 className="text-2xl font-black mb-4 leading-tight">Book Your PTE & Save ₹3,000</h3>
                <p className="text-blue-100/60 font-medium text-sm mb-8">Verified vouchers delivered instantly to your WhatsApp.</p>
                <Link href="/pte#purchase" className="w-full bg-accent text-primary py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-accent/20">
                  Claim Voucher <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related/Next Section */}
              <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100">
                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">Expert Resources</h4>
                <ul className="space-y-6">
                  {["PTE Score Calculator", "Mock Test Portal", "Grammar Guide"].map((item, i) => (
                    <li key={i}>
                      <Link href="#" className="group flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-slate-200 group-hover:bg-primary group-hover:text-white transition-colors">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-black text-primary group-hover:text-accent transition-colors">{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <BlogPopup />
      
      {/* Minimal Footer */}
      <footer className="mt-20 pt-20 border-t border-slate-100 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-black text-primary">Fryment Academic</span>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.2em]">© 2026 Official Publication</p>
        </div>
      </footer>
    </article>
  );
}
