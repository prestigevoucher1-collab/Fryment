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
    .select('title, excerpt, cover_image, author, slug')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (!blog) return { title: 'Blog Not Found | Fryment' };

  return {
    title: `${blog.title} | GRE Blog`,
    description: blog.excerpt,
    alternates: { canonical: `https://fryment.com/gre/blog/${slug}` },
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
      exam={exams.gre} 
    />
  );
}
