import { supabase } from '@/lib/supabase';
import BlogListLayout from '@/components/exam/BlogListLayout';
import { getExamsWithPrices } from '@/data/pte/exams';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PTE Exam Blog — Tips, Guides & Strategies | Fryment',
  description: 'Expert PTE preparation guides, exam tips, and study strategies from Fryment. Learn how to score 79+ in PTE Academic with proven techniques.',
  alternates: { canonical: 'https://fryment.com/pte/blog' },
};

export const revalidate = 60;

export default async function BlogListPage() {
  const [exams, { data: blogs }] = await Promise.all([
    getExamsWithPrices(),
    supabase
      .from('blogs')
      .select('id, title, slug, excerpt, cover_image, category, author, read_time, tags, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false })
  ]);

  return <BlogListLayout blogs={blogs ?? []} exam={exams.pte} />;
}
