import Link from 'next/link';
import { Facebook, Mail, MapPin } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import { SITE } from '@/lib/site';

const COLS = [
  { title: 'Produits', links: [
    { label: 'BIRDY', href: '/produits/birdy-erp' },
    { label: 'FEEDORA', href: '/produits/feedora' },
    { label: 'Roadmap', href: '/produits' },
    { label: 'Tarifs', href: '/tarifs' },
  ]},
  { title: 'Services', links: [
    { label: 'Solutions fintech', href: '/services/sur-mesure' },
    { label: 'Sur mesure', href: '/services/sur-mesure' },
    { label: 'Conseil', href: '/services/conseil' },
  ]},
  { title: 'Entreprise', links: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Équipe', href: '/equipe' },
    { label: 'Carrières', href: '/a-propos' },
    { label: 'Blog', href: '/blog' },
  ]},
  { title: 'Ressources', links: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Tutoriels', href: '/tutoriels' },
    { label: 'Téléchargements', href: '/telechargements' },
    { label: 'FAQ', href: '/faq' },
  ]},
  { title: 'Légal', links: [
    { label: 'CGV', href: '/legal/cgv' },
    { label: 'Confidentialité', href: '/legal/privacy' },
    { label: 'Mentions légales', href: '/legal/cgv' },
    { label: 'Contact', href: '/contact' },
  ]},
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-novar-cosmic">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <NovarLogo className="h-8 w-auto dark:hidden" />
              <NovarLogo variant="on-dark" className="hidden h-8 w-auto dark:block" />
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400 max-w-xs">{SITE.baseline}.</p>
            <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 flex-shrink-0" /><span>Conakry, Guinée</span></div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0" /><a href={`mailto:${SITE.email}`} className="hover:text-novar-blue dark:hover:text-novar-cyan">{SITE.email}</a></div>
              <a href={SITE.facebook} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-novar-blue hover:underline dark:text-novar-cyan">
                <Facebook className="h-4 w-4" />Suivez-nous sur Facebook
              </a>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-500 sm:flex-row sm:items-center">
          <span>Copyright © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</span>
          <span className="text-xs">{SITE.category} · {SITE.city}, {SITE.country}</span>
        </div>
      </div>
    </footer>
  );
}
