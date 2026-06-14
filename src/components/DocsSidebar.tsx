'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search } from 'lucide-react';
import { DOCS_TREE } from '@/lib/docs';
import { cn } from '@/lib/utils';

export function DocsSidebar() {
  const pathname = usePathname();
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('fr');
    if (!normalized) return DOCS_TREE;
    return DOCS_TREE.map((category) => ({
      ...category,
      pages: category.pages.filter((page) =>
        `${category.title} ${page.title} ${page.description ?? ''}`.toLocaleLowerCase('fr').includes(normalized),
      ),
    })).filter((category) => category.pages.length > 0);
  }, [query]);

  const content = (
    <>
      <label className="relative mb-6 block">
        <span className="sr-only">Rechercher dans la documentation</span>
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Rechercher un guide"
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-100"
        />
      </label>
      <nav className="space-y-6" aria-label="Documentation BIRDY">
        {filtered.map((category) => (
          <div key={category.title}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">{category.title}</h2>
            <ul className="space-y-1">
              {category.pages.map((page) => {
                const href = category.slug ? `/docs/${category.slug}/${page.slug}` : `/docs/${page.slug}`;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm transition-colors',
                        pathname === href ? 'bg-cyan-50 font-semibold text-cyan-900' : 'text-slate-700 hover:bg-slate-100',
                      )}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {filtered.length === 0 ? <p className="text-sm text-slate-500">Aucun guide trouvé.</p> : null}
      </nav>
    </>
  );

  return (
    <>
      <details className="border-b border-slate-200 bg-white lg:hidden">
        <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 px-4 text-sm font-bold text-slate-950">
          <Menu className="h-4 w-4" aria-hidden /> Navigation documentation
        </summary>
        <div className="max-h-[70vh] overflow-y-auto border-t border-slate-200 p-4">{content}</div>
      </details>
      <aside className="hidden w-72 shrink-0 border-r border-slate-200 lg:block">
        <div className="sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto p-6">{content}</div>
      </aside>
    </>
  );
}
