'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import { NAV } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-novar-cosmic/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" aria-label="NOVAR – Accueil">
            <NovarLogo className="h-7 w-auto dark:hidden" />
            <NovarLogo variant="on-dark" className="hidden h-7 w-auto dark:block" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => 'children' in item && setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
                <Link href={item.href} className={cn('flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors', 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white')}>
                  {item.label}
                  {'children' in item && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                {'children' in item && openMenu === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-novar-cosmic-2">
                      {item.children?.map((c) => (
                        <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{c.label}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{c.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/compte/login" className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Connexion</Link>
          <Link href="/demo" className="rounded-lg bg-novar-cosmic px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow">Démarrer essai gratuit</Link>
        </div>
        <button className="lg:hidden p-2 text-slate-700 dark:text-slate-200" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-novar-cosmic">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
              <Link href="/compte/login" className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" onClick={() => setOpen(false)}>Connexion</Link>
              <Link href="/demo" className="rounded-lg bg-novar-cosmic px-4 py-2 text-center text-sm font-semibold text-white dark:bg-novar-cyan dark:text-novar-cosmic" onClick={() => setOpen(false)}>Démarrer essai gratuit</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
