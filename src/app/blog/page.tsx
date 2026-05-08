import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description: 'Articles de fond sur la gestion d\'entreprise OHADA, la transformation numérique des PME et la tech en Afrique.',
};

export default function BlogIndex() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Articles de fond sur la gestion d&apos;entreprise OHADA, la transformation numérique des PME et la
            technologie en Afrique.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-novar-cyan/40 hover:shadow-lg transition-all"
              >
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
                <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">{post.title}</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{post.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-novar-blue dark:text-novar-cyan">
                  Lire l&apos;article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
