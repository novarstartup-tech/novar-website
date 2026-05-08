import Link from 'next/link';
import { Facebook, Mail, MapPin } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import { SITE } from '@/lib/site';

const COLS = [
  { title: 'Produits', links: [
    { label: 'BIRDY', href: '/produits/birdy-erp' },
    { label: 'FEEDORA', href: '/produits/feedora' },
    { label: 'Tarifs', href: '/tarifs' },
  ]},
  { title: 'Services', links: [
    { label: 'Développement sur mesure', href: '/services/sur-mesure' },
    { label: 'Conseil', href: '/services/conseil' },
  ]},
  { title: 'Entreprise', links: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Équipe', href: '/equipe' },
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
    { label: 'Contact', href: '/contact' },
  ]},
];

export function Footer() {
  return (
    <footer className="border-t border-novar-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <NovarLogo className="h-8 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-novar-muted max-w-xs">
              {SITE.baseline}.
            </p>
            <div className="mt-5 space-y-2 text-sm text-novar-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Conakry, Guinée</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-novar-ink transition-colors">
                  {SITE.email}
                </a>
              </div>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-novar-ink hover:underline"
              >
                <Facebook className="h-4 w-4" />Facebook
              </a>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-novar-ink">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-novar-muted hover:text-novar-ink transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-novar-line pt-8 text-sm text-novar-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</span>
          <span className="text-xs uppercase tracking-wider">
            {SITE.category} · {SITE.city}, {SITE.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
