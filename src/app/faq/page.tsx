import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { FAQPageJsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'FAQ — BIRDY & NOVAR : gratuit, OHADA, hors-ligne, mobile money',
  description:
    'Questions fréquentes sur BIRDY et NOVAR : les produits sont-ils gratuits ? comment accéder à BIRDY (Windows, macOS, Linux) et à FEEDORA ? comment démarrer un projet sur mesure ?',
  alternates: { canonical: '/faq' },
};

const FAQS = [
  { q: 'NOVAR est-il un seul logiciel ?', a: 'Non. NOVAR est un SaaS Studio. Nous éditons actuellement BIRDY et FEEDORA, et nous concevons aussi des solutions personnalisées pour les PME et organisations.' },
  { q: 'BIRDY et FEEDORA sont-ils gratuits ?', a: 'Oui. Les deux produits sont accessibles gratuitement. Les prestations personnalisées, formations et accompagnements spécifiques sont proposés sur devis.' },
  { q: 'Le site NOVAR possède-t-il un espace client ?', a: 'Non. Ce site est une vitrine et un point d’accès aux produits. Il ne propose ni compte utilisateur, ni abonnement, ni connexion.' },
  { q: 'Comment accéder à BIRDY ?', a: 'Utilisez la page Téléchargements pour choisir le paquet adapté à Windows, macOS ou Linux.' },
  { q: 'Comment accéder à FEEDORA ?', a: 'FEEDORA est accessible directement en ligne depuis sa page produit.' },
  { q: 'Comment démarrer un projet sur mesure ?', a: 'Présentez votre contexte depuis la page Contact. NOVAR clarifie ensuite le besoin et propose un devis adapté.' },
];

export default function FaqPage() {
  return (
    <>
      <FAQPageJsonLd items={FAQS} />
      <PageHero tone="emerald" eyebrow="Questions fréquentes" title="Des réponses claires sur NOVAR." description="Le fonctionnement actuel du studio, de ses produits et de ses services." />
      <section className="section-shell max-w-4xl">
        <div className="space-y-3">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-bold text-slate-950">
                {item.q}<ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
        <Link href="/contact" className="btn-primary mt-8">Poser une autre question</Link>
      </section>
    </>
  );
}
