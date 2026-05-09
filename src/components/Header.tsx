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
    <header className="sticky top-0 z-50 w-full border-b border-novar-line bg-white/85 backdrop-blur-xl">
      {/* Liseré dégradé sous la bordure — accent visuel subtle pour signature premium */}
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-novar-accent/40 to-transparent" aria-hidden />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + nav desktop */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center" aria-label="NOVAR – Accueil">
            <NovarLogo className="h-6 w-auto" />
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
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-novar-ink-soft hover:text-novar-ink transition-colors"
                >
                  {item.label}
                  {'children' in item && (
                    <ChevronDown className="h-3.5 w-3.5 text-novar-muted" />
                  )}
                </Link>
                {'children' in item && openMenu === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-xl border border-novar-line bg-white p-2 shadow-lifted">
                      {item.children?.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-lg px-3 py-2 hover:bg-novar-surface-2 transition-colors"
                        >
                          <div className="text-sm font-semibold text-novar-ink">
                            {c.label}
                          </div>
                          <div className="mt-0.5 text-xs text-novar-muted">
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
            className="text-sm font-medium text-novar-ink-soft hover:text-novar-ink transition-colors"
          >
            Connexion
          </Link>
          <Link href="/demo" className="btn-primary">
            Démarrer l&apos;essai gratuit
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          className="lg:hidden p-2 text-novar-ink"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <nav className="lg:hidden border-t border-novar-line bg-white px-4 py-4">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-novar-ink hover:bg-novar-surface-2 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {'children' in item && item.children && (
                  <div className="ml-3 mt-1 mb-1 space-y-1 border-l border-novar-line pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-md px-3 py-1.5 text-sm text-novar-muted hover:bg-novar-surface-2 hover:text-novar-ink transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-novar-line pt-4">
              <Link
                href="/compte/login"
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-novar-ink-soft hover:bg-novar-surface-2 hover:text-novar-ink transition-colors'
                )}
                onClick={() => setOpen(false)}
              >
                Connexion
              </Link>
              <Link
                href="/demo"
                className="btn-primary justify-center"
                onClick={() => setOpen(false)}
              >
                Démarrer l&apos;essai gratuit
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
