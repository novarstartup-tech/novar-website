'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import { NAV } from '@/lib/site';
import { cn } from '@/lib/utils';

/**
 * Header — Sprint 19 dark variant.
 *
 * Slate-950 / slate-900 base to match the Footer dark theme. Wordmark
 * uses the on-dark variant of NovarLogo (white + cyan accent).
 * Nav links are slate-300, hover -> white. Connexion link same.
 * CTA button stays high-contrast on the dark bar — switched from
 * the default `btn-primary` (dark-on-light) to a bright cyan glow
 * pill so it pops on the dark chrome.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-slate-950/95 backdrop-blur-xl">
      {/* Liseré dégradé sous la bordure — signature visuelle premium */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" aria-hidden />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + nav desktop */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" aria-label="NOVAR – Accueil">
            <NovarLogo variant="on-dark" className="h-6 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => 'children' in item && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                  {'children' in item && (
                    <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                  )}
                </Link>
                {'children' in item && openMenu === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl">
                      {item.children?.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 hover:bg-slate-800/70 transition-colors"
                        >
                          <div className="text-sm font-semibold text-white">
                            {c.label}
                          </div>
                          <div className="mt-0.5 text-xs text-slate-400">
                            {c.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* CTA desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/compte/login"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Connexion
          </Link>
          <Link
            href="/telechargements"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
          >
            Télécharger BIRDY
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          className="lg:hidden p-2 text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <nav className="lg:hidden border-t border-slate-800/60 bg-slate-950 px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-slate-900 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {'children' in item && item.children && (
                  <div className="ml-3 mt-1 mb-1 space-y-1 border-l border-slate-800 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-md px-3 py-1.5 text-sm text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-800/60 pt-4">
              <Link
                href="/compte/login"
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-white transition-colors'
                )}
                onClick={() => setOpen(false)}
              >
                Connexion
              </Link>
              <Link
                href="/telechargements"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
                onClick={() => setOpen(false)}
              >
                Télécharger BIRDY
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
