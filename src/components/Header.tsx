'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Languages, Menu, X } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import type { Locale } from '@/lib/content';

const COPY = {
  fr: { solutions: 'Solutions', resources: 'Ressources', studio: 'Le studio', contact: 'Contact', custom: 'Solutions sur mesure', docs: 'Documentation', guides: 'Guides', blog: 'Analyses', about: 'À propos', advisory: 'Conseil', cta: 'Parler à NOVAR', menu: 'Ouvrir le menu', close: 'Fermer le menu' },
  en: { solutions: 'Solutions', resources: 'Resources', studio: 'The studio', contact: 'Contact', custom: 'Tailored software', docs: 'Documentation', guides: 'Guides', blog: 'Insights', about: 'About', advisory: 'Advisory', cta: 'Talk to NOVAR', menu: 'Open menu', close: 'Close menu' },
} as const;

const LANGUAGE_PAIRS: Record<string, string> = {
  '/': '/en', '/produits': '/en/solutions', '/produits/birdy-erp': '/en/products/birdy', '/produits/feedora': '/en/products/feedora',
  '/services/sur-mesure': '/en/services/custom-software', '/services/conseil': '/en/services/advisory', '/docs': '/en/docs',
  '/tutoriels': '/en/guides', '/blog': '/en/insights', '/a-propos': '/en/about', '/contact': '/en/contact',
  '/telechargements': '/en/downloads', '/securite': '/en/security', '/legal/privacy': '/en/legal/privacy', '/legal/cgv': '/en/legal/terms',
};

function getLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

function localized(locale: Locale, fr: string, en: string) {
  return locale === 'en' ? en : fr;
}

function languageHref(pathname: string, locale: Locale) {
  if (locale === 'fr') return LANGUAGE_PAIRS[pathname] ?? '/en/resources';
  return Object.entries(LANGUAGE_PAIRS).find(([, english]) => english === pathname)?.[0] ?? '/';
}

export function Header() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const c = COPY[locale];
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const nav = [
    {
      label: c.solutions, href: localized(locale, '/produits', '/en/solutions'), children: [
        { label: 'BIRDY', desc: locale === 'fr' ? 'ERP et comptabilité OHADA' : 'OHADA ERP and accounting', href: localized(locale, '/produits/birdy-erp', '/en/products/birdy') },
        { label: 'FEEDORA', desc: locale === 'fr' ? 'Formulation alimentaire avicole' : 'Poultry feed formulation', href: localized(locale, '/produits/feedora', '/en/products/feedora') },
        { label: c.custom, desc: locale === 'fr' ? 'Logiciels conçus pour vos opérations' : 'Software designed for your operations', href: localized(locale, '/services/sur-mesure', '/en/services/custom-software') },
      ],
    },
    {
      label: c.resources, href: localized(locale, '/docs', '/en/resources'), children: [
        { label: c.docs, desc: locale === 'fr' ? 'Utiliser BIRDY efficacement' : 'Use BIRDY effectively', href: localized(locale, '/docs', '/en/docs') },
        { label: c.guides, desc: locale === 'fr' ? 'Parcours pratiques publiés' : 'Published practical guides', href: localized(locale, '/tutoriels', '/en/guides') },
        { label: c.blog, desc: locale === 'fr' ? 'Métier, produits et vision' : 'Business, products and vision', href: localized(locale, '/blog', '/en/insights') },
      ],
    },
    {
      label: c.studio, href: localized(locale, '/a-propos', '/en/about'), children: [
        { label: c.about, desc: locale === 'fr' ? 'Mission, méthode et équipe' : 'Mission, approach and team', href: localized(locale, '/a-propos', '/en/about') },
        { label: c.advisory, desc: locale === 'fr' ? 'Cadrage, architecture et formation' : 'Scoping, architecture and training', href: localized(locale, '/services/conseil', '/en/services/advisory') },
      ],
    },
    { label: c.contact, href: localized(locale, '/contact', '/en/contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/[0.78] text-[#0D1B2A] backdrop-blur-[22px] backdrop-saturate-[1.8]">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={locale === 'en' ? '/en' : '/'} aria-label="NOVAR" className="flex shrink-0 items-center">
          <NovarLogo variant="on-light" className="h-[30px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={locale === 'fr' ? 'Navigation principale' : 'Main navigation'}>
          {nav.map((item) => (
            <div className="relative" key={item.label} onMouseEnter={() => 'children' in item && setOpenMenu(item.label)} onMouseLeave={() => setOpenMenu(null)}>
              <Link href={item.href} onClick={() => setOpenMenu(null)} className="inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-semibold text-[#0D1B2A]/75 transition-colors hover:bg-[#0D1B2A]/[0.06] hover:text-[#0D1B2A]">
                {item.label}{'children' in item && <ChevronDown className="h-3.5 w-3.5 text-[#0D1B2A]/45" aria-hidden />}
              </Link>
              {'children' in item && openMenu === item.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="w-80 overflow-hidden rounded-2xl border border-[#0D1B2A]/10 bg-white p-2 text-[#0D1B2A] shadow-[0_34px_80px_rgba(13,27,42,0.20)]">
                    {item.children?.map((child) => <Link key={child.href} href={child.href} className="block rounded-xl px-4 py-3 transition-colors hover:bg-[#0D1B2A]/[0.04]"><div className="text-sm font-semibold">{child.label}</div><div className="mt-1 text-xs leading-relaxed text-[#5B6E86]">{child.desc}</div></Link>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href={languageHref(pathname, locale)} className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-semibold text-[#44546B] transition-colors hover:text-[#0D1B2A]" aria-label={locale === 'fr' ? 'Switch to English' : 'Passer en français'}><Languages className="h-4 w-4" aria-hidden />{locale === 'fr' ? 'EN' : 'FR'}</Link>
          <Link href={localized(locale, '/contact', '/en/contact')} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#1E3A8A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0D1B2A]">{c.cta}</Link>
        </div>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#0D1B2A] transition-colors hover:bg-[#0D1B2A]/[0.06] lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? c.close : c.menu}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="max-h-[78vh] overflow-y-auto border-t border-[#0D1B2A]/10 bg-white px-4 py-5 text-[#0D1B2A] lg:hidden" aria-label="Navigation mobile">
          <div className="mx-auto max-w-7xl space-y-5">
            {nav.map((item) => <div key={item.label}><Link href={item.href} onClick={() => setOpen(false)} className="block py-2 text-base font-bold text-[#0D1B2A]">{item.label}</Link>{'children' in item && <div className="mt-1 grid gap-1 border-l border-[#0D1B2A]/12 pl-4">{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="py-2 text-sm font-medium text-[#44546B]">{child.label}</Link>)}</div>}</div>)}
            <div className="grid gap-3 border-t border-[#0D1B2A]/10 pt-4 sm:grid-cols-2">
              <Link href={languageHref(pathname, locale)} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#0D1B2A]/16 px-5 text-sm font-semibold text-[#0D1B2A] transition-colors hover:bg-[#0D1B2A]/[0.04]"><Languages className="h-4 w-4" />{locale === 'fr' ? 'English' : 'Français'}</Link>
              <Link href={localized(locale, '/contact', '/en/contact')} onClick={() => setOpen(false)} className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#1E3A8A] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0D1B2A]">{c.cta}</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
