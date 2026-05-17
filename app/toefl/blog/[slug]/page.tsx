import React from 'react';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import type { Metadata, ResolvingMetadata } from 'next';
import BlogDetailClient from '@/components/exam/BlogDetailClient';
import { getExamsWithPrices } from '@/data/pte/exams';

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
    .select('title, excerpt, cover_image, author, slug, tags, category, created_at')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (!blog) return { title: 'Blog Not Found | Fryment' };

  const keywords = blog.tags && Array.isArray(blog.tags) ? blog.tags.join(', ') : 'TOEFL, Study Tips, Fryment';
  const canonicalUrl = `https://www.fryment.info/blog/${slug}`;
  const ogImage = blog.cover_image || 'https://www.fryment.info/og-image.png';

  return {
    title: `${blog.title} | TOEFL Blog`,
    description: blog.excerpt || 'Expert preparation guides, exam tips, and study strategies from Fryment.',
    keywords: keywords,
    authors: [{ name: blog.author || 'Fryment Team' }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${blog.title} | TOEFL Blog`,
      description: blog.excerpt || 'Expert preparation guides, exam tips, and study strategies from Fryment.',
      url: canonicalUrl,
      siteName: 'Fryment',
      type: 'article',
      publishedTime: blog.created_at,
      authors: [blog.author || 'Fryment Team'],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} | TOEFL Blog`,
      description: blog.excerpt || 'Expert preparation guides, exam tips, and study strategies from Fryment.',
      images: [ogImage],
    }
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const [exams, { data: blog, error }] = await Promise.all([
    getExamsWithPrices(),
    supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .single()
  ]);

  if (error || !blog || !blog.published) {
    notFound();
  }

  const { data: relatedBlogs } = await supabase
    .from('blogs')
    .select('title, slug, cover_image, excerpt, category, read_time, created_at')
    .eq('published', true)
    .neq('slug', slug)
    .limit(3);

  return (
    <BlogDetailClient 
      blog={blog} 
      relatedBlogs={relatedBlogs ?? []} 
      exam={exams.toefl} 
    />
  );
}
