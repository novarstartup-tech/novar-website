import fs from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { DocsBreadcrumbs } from '@/components/DocsBreadcrumbs';
import { DocsTOC } from '@/components/DocsTOC';
import { DOCS_TREE, flattenDocs } from '@/lib/docs';

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content', 'docs');

export async function generateStaticParams() {
  const flat = flattenDocs();
  return flat.map((d) => ({ slug: d.slug.split('/') }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const flat = flattenDocs();
  const doc = flat.find((d) => d.slug === slug.join('/'));
  return { title: doc ? doc.title : 'Documentation' };
}

async function loadDoc(slug: string[]) {
  const filePath = path.join(CONTENT_ROOT, ...slug) + '.mdx';
  try {
    await fs.access(filePath);
  } catch {
    return null;
  }
  const mod = await import(`@/content/docs/${slug.join('/')}.mdx`);
  return mod.default as React.ComponentType<Record<string, unknown>>;
}

export default async function DocsSlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const slugStr = slug.join('/');
  const flat = flattenDocs();
  const idx = flat.findIndex((d) => d.slug === slugStr);
  if (idx === -1) notFound();
  const doc = flat[idx];

  const Mdx = await loadDoc(slug);
  if (!Mdx) notFound();

  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx < flat.length - 1 ? flat[idx + 1] : null;

  const category = DOCS_TREE.find((c) =>
    c.pages.some((p) => (c.slug ? `${c.slug}/${p.slug}` : p.slug) === slugStr)
  );

  return (
    <div className="flex">
      <article className="flex-1 px-6 lg:px-12 py-10 max-w-3xl min-w-0">
        <DocsBreadcrumbs
          trail={[
            { label: 'Documentation', href: '/docs' },
            ...(category ? [{ label: category.title }] : []),
            { label: doc.title },
          ]}
        />
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <Mdx />
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
          <a
            href={`https://github.com/novar-gn/novar-website/edit/main/src/content/docs/${slugStr}.mdx`}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            Modifier sur GitHub
          </a>
        </div>

        <nav className="mt-8 grid gap-3 sm:grid-cols-2">
          {prev && (
            <Link
              href={`/docs/${prev.slug}`}
              className="flex flex-col items-start rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:border-novar-cyan/40 transition-colors"
            >
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <ArrowLeft className="h-3 w-3" /> Précédent
              </span>
              <span className="mt-1 font-semibold text-slate-900 dark:text-white">{prev.title}</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/docs/${next.slug}`}
              className="flex flex-col items-end rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:border-novar-cyan/40 transition-colors sm:col-start-2"
            >
              <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                Suivant <ArrowRight className="h-3 w-3" />
              </span>
              <span className="mt-1 font-semibold text-slate-900 dark:text-white">{next.title}</span>
            </Link>
          )}
        </nav>
      </article>
      <DocsTOC />
    </div>
  );
}
