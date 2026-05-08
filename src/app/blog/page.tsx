import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata = {
  title: 'Blog',
  description:
    "Articles de fond sur l'OHADA, la transformation numérique des PME africaines, et la vision NOVAR SaaS Studio.",
};

export default function BlogIndex() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
        <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            Le Blog
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-novar-ink">
            Idées, méthodes et retours terrain.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-novar-muted leading-relaxed">
            Articles de fond sur l&apos;OHADA, la transformation numérique des
            PME africaines, et la vision NOVAR SaaS Studio.
          </p>
        </div>
      </section>

      {/* LISTE */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-5">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-novar-line bg-white p-7 transition-all hover:border-novar-ink/20 hover:shadow-lifted"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-novar-muted mb-3">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime} min
                  </span>
                  <span>·</span>
                  <span>par {post.author}</span>
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-novar-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-novar-muted leading-relaxed">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-novar-surface-2 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-novar-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-novar-ink group-hover:text-novar-accent transition-colors">
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
