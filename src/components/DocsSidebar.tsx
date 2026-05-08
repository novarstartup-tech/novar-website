'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { DOCS_TREE } from '@/lib/docs';
import { cn } from '@/lib/utils';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="search"
            placeholder="Rechercher (Cmd+K)"
            className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-sm placeholder:text-slate-400 focus:border-novar-cyan focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500"
          />
        </div>
        <nav className="space-y-6">
          {DOCS_TREE.map((cat) => (
            <div key={cat.title}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {cat.title}
              </h4>
              <ul className="space-y-1">
                {cat.pages.map((p) => {
                  const href = cat.slug ? `/docs/${cat.slug}/${p.slug}` : `/docs/${p.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={cn(
                          'block rounded-md px-3 py-1.5 text-sm transition-colors',
                          active
                            ? 'bg-novar-cyan/10 font-semibold text-novar-blue dark:text-novar-cyan'
                            : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                        )}
                      >
                        {p.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
