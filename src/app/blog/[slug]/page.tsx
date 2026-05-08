import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return { title: post?.title ?? 'Article' };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  let Mdx: React.ComponentType;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Mdx = mod.default;
  } catch {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Tous les articles
      </Link>
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {new Date(post.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </span>
        <span>·</span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {post.readTime} min
        </span>
        <span>·</span>
        <span>par {post.author}</span>
      </div>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <Mdx />
      </div>
    </article>
  );
}
