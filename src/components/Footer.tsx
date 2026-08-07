'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Facebook, Linkedin, Mail, MapPin, MessageCircle } from 'lucide-react';
import { NovarLogo } from './NovarLogo';
import { SITE } from '@/lib/site';

export function Footer() {
  const pathname = usePathname();
  const en = pathname === '/en' || pathname.startsWith('/en/');
  const route = (fr: string, english: string) => en ? english : fr;
  const columns = [
    { title: 'Solutions', links: [['BIRDY', route('/produits/birdy-erp', '/en/products/birdy')], ['FEEDORA', route('/produits/feedora', '/en/products/feedora')], [en ? 'Tailored software' : 'Solutions sur mesure', route('/services/sur-mesure', '/en/services/custom-software')], [en ? 'Advisory' : 'Conseil', route('/services/conseil', '/en/services/advisory')]] },
    { title: en ? 'Resources' : 'Ressources', links: [[en ? 'Documentation' : 'Documentation', route('/docs', '/en/docs')], [en ? 'Guides' : 'Guides', route('/tutoriels', '/en/guides')], [en ? 'Insights' : 'Analyses', route('/blog', '/en/insights')], [en ? 'Downloads' : 'Téléchargements', route('/telechargements', '/en/downloads')]] },
    { title: en ? 'Company' : 'Entreprise', links: [[en ? 'About' : 'À propos', route('/a-propos', '/en/about')], [en ? 'Security' : 'Sécurité', route('/securite', '/en/security')], ['Contact', route('/contact', '/en/contact')], [en ? 'Privacy' : 'Confidentialité', route('/legal/privacy', '/en/legal/privacy')]] },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#141b29] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_2fr]">
          <div>
            <Link href={en ? '/en' : '/'} className="inline-flex"><NovarLogo variant="on-dark" className="h-10 w-auto" /></Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">{en ? 'NOVAR is an African SaaS Studio. We build useful products and tailored software for SMEs and organizations.' : 'NOVAR est un SaaS Studio africain. Nous éditons des produits utiles et concevons des solutions sur mesure pour les PME et organisations.'}</p>
            <div className="mt-6 grid gap-2 text-sm text-slate-300">
              <a href={`mailto:${SITE.email}`} className="footer-contact"><Mail className="h-4 w-4" />{SITE.email}</a>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="footer-contact"><MessageCircle className="h-4 w-4" />WhatsApp</a>
              <span className="footer-contact"><MapPin className="h-4 w-4" />Conakry, Guinée</span>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => <div key={column.title}><h2 className="text-sm font-bold text-white">{column.title}</h2><ul className="mt-5 space-y-3">{column.links.map(([label, href]) => <li key={href}><Link href={href} className="inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white">{label}<ArrowUpRight className="h-3 w-3 opacity-50" aria-hidden /></Link></li>)}</ul></div>)}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NOVAR. {en ? 'All rights reserved.' : 'Tous droits réservés.'}</span>
          <div className="flex items-center gap-3">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social"><Linkedin className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
