import Link from 'next/link';
import { Facebook, Linkedin, Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import { SITE } from '@/lib/site';

const COLS = [
  { title: 'Produits', accent: 'cyan', links: [
    { label: 'BIRDY', href: '/produits/birdy-erp' },
    { label: 'FEEDORA', href: '/produits/feedora' },
    { label: 'Tarifs', href: '/tarifs' },
  ]},
  { title: 'Services', accent: 'amber', links: [
    { label: 'Développement sur mesure', href: '/services/sur-mesure' },
    { label: 'Conseil', href: '/services/conseil' },
  ]},
  { title: 'Entreprise', accent: 'violet', links: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Équipe', href: '/equipe' },
    { label: 'Blog', href: '/blog' },
  ]},
  { title: 'Ressources', accent: 'emerald', links: [
    { label: 'Documentation', href: '/docs' },
    { label: 'Tutoriels', href: '/tutoriels' },
    { label: 'Téléchargements', href: '/telechargements' },
    { label: 'FAQ', href: '/faq' },
  ]},
  { title: 'Légal', accent: 'slate', links: [
    { label: 'CGV', href: '/legal/cgv' },
    { label: 'Confidentialité', href: '/legal/privacy' },
    { label: 'Contact', href: '/contact' },
  ]},
] as const;

const ACCENT_DOT: Record<string, string> = {
  cyan: 'bg-cyan-500',
  amber: 'bg-amber-500',
  violet: 'bg-violet-500',
  emerald: 'bg-emerald-500',
  slate: 'bg-slate-400',
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-novar-line bg-gradient-to-b from-white via-white to-novar-surface-2">
      {/* Liseré accent en haut du footer (signature visuelle, miroir du Header) */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-novar-accent/40 to-transparent" aria-hidden />

      {/* Wash subtil cyan en bas-gauche (echo du Hero) */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-100/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-100/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block group">
              <NovarLogo className="h-6 w-auto transition-transform group-hover:scale-105" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-novar-muted max-w-xs">
              {SITE.baseline}.
            </p>
            <div className="mt-5 space-y-2 text-sm text-novar-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 text-novar-accent" />
                <span>Conakry, Guinée</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-novar-accent" />
                <a href={`mailto:${SITE.email}`} className="hover:text-novar-ink transition-colors">
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-novar-accent" />
                <a href={SITE.phoneHref} className="hover:text-novar-ink transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-novar-ink transition-colors"
                >
                  {SITE.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="WhatsApp"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={SITE.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink transition-all hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink transition-all hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-novar-ink">
                <span className={`h-1.5 w-1.5 rounded-full ${ACCENT_DOT[col.accent]}`} />
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="group inline-flex items-center gap-1 text-sm text-novar-muted hover:text-novar-ink transition-colors">
                      {l.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mini-CTA discret avant le copyright */}
        <div className="mt-16 rounded-2xl border border-novar-line bg-white/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-display text-lg font-semibold text-novar-ink">
              Une idée à concrétiser&nbsp;?
            </div>
            <div className="mt-1 text-sm text-novar-muted">
              Premier échange gratuit · 30 minutes · Sans engagement.
            </div>
          </div>
          <Link href="/contact" className="btn-primary self-start sm:self-auto">
            Démarrer la conversation
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-novar-line pt-8 text-sm text-novar-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</span>
          <span className="text-xs uppercase tracking-wider">
            {SITE.category} · {SITE.city}, {SITE.country}
          </span>
        </div>
      </div>
    </footer>
  );
}
