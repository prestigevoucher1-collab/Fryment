import { supabase } from "@/lib/supabase";
import { Metadata } from "next";
import BlogDetailsClient from "./BlogDetailsClient";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    keywords: post.seo_keywords,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: post.cover_image ? [{ url: post.cover_image }] : undefined,
      type: "article",
    },
    alternates: {
      canonical: post.canonical_url || `https://fryment.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  const { data: post } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", params.slug)
    .single();
    
  if (!post) {
     return <BlogDetailsClient post={null} relatedPosts={[]} />;
  }

  const { data: relatedPosts } = await supabase
    .from("blogs")
    .select("*")
    .eq("published", true)
    .neq("id", post.id)
    .order("created_at", { ascending: false })
    .limit(3);

  return <BlogDetailsClient post={post} relatedPosts={relatedPosts || []} />;
}
