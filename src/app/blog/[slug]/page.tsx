import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import FeedoraFormulation from '@/content/blog/feedora-formulation.mdx';
import LiasseFiscaleGuide from '@/content/blog/liasse-fiscale-guide.mdx';
import PourquoiErpOhada from '@/content/blog/pourquoi-erp-ohada.mdx';
import SaasStudioVision from '@/content/blog/saas-studio-vision.mdx';
import { BlogPostingJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { BLOG_POSTS } from '@/lib/blog';
import { SITE } from '@/lib/site';

export const dynamicParams = false;

const CONTENT = {
  'feedora-formulation': FeedoraFormulation,
  'liasse-fiscale-guide': LiasseFiscaleGuide,
  'pourquoi-erp-ohada': PourquoiErpOhada,
  'saas-studio-vision': SaasStudioVision,
} as const;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return { title: 'Article' };
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const Article = CONTENT[slug as keyof typeof CONTENT];
  if (!post || !Article) notFound();
  const postUrl = `${SITE.url}/blog/${post.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <BlogPostingJsonLd headline={post.title} description={post.description} url={postUrl} datePublished={post.date} author={post.author} articleSection={post.tags?.[0]} keywords={post.tags} />
      <BreadcrumbJsonLd items={[{ name: 'Accueil', url: SITE.url }, { name: 'Blog', url: `${SITE.url}/blog` }, { name: post.title, url: postUrl }]} />
      <Link href="/blog" className="mb-8 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-950">
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden /> Tous les articles
      </Link>
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" aria-hidden />{new Date(post.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
        <span>·</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden />{post.readTime} min</span>
        <span>·</span>
        <span>par {post.author}</span>
      </div>
      <div className="prose prose-slate max-w-none"><Article /></div>
    </article>
  );
}
