import Link from 'next/link';
import { DOCS_TREE } from '@/lib/docs';
import { DocsBreadcrumbs } from '@/components/DocsBreadcrumbs';

export const metadata = {
  title: 'Documentation',
  description: 'Documentation complète de BIRDY ERP : démarrage, modules, OHADA, RH/paie, sécurité, API.',
};

export default function DocsIndex() {
  return (
    <article className="px-6 lg:px-12 py-10 max-w-3xl">
      <DocsBreadcrumbs trail={[{ label: 'Documentation' }]} />
      <h1 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Documentation</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
        Guide complet pour utiliser BIRDY ERP. Sélectionnez une catégorie pour commencer.
      </p>

      <div className="mt-10 space-y-10">
        {DOCS_TREE.map((cat) => (
          <section key={cat.title}>
            <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-4">
              {cat.title}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {cat.pages.map((p) => {
                const href = cat.slug ? `/docs/${cat.slug}/${p.slug}` : `/docs/${p.slug}`;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block rounded-lg border border-slate-200 dark:border-slate-800 p-4 hover:border-novar-cyan/40 hover:shadow-sm transition-colors"
                    >
                      <div className="font-semibold text-slate-900 dark:text-white">{p.title}</div>
                      {p.description && (
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{p.description}</div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
