import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  CalendarClock,
  MessageCircle,
  Users,
  WifiOff,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RelatedSolutions, SolutionCta, SolutionFaq } from '@/components/SolutionSections';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Logiciel de gestion & caisse gratuit en Guinée (Conakry)',
  description:
    'BIRDY est un logiciel de gestion commerciale, caisse et comptabilité gratuit pour la Guinée : montants en GNF, comptabilité SYSCOHADA, paie IRPP/CNSS guinéenne, liasse fiscale DGI et fonctionnement hors ligne. Édité par NOVAR à Conakry.',
  keywords: [
    'logiciel de gestion gratuit Guinée',
    'logiciel de caisse gratuit Conakry',
    'logiciel gestion commerciale Guinée',
    'logiciel comptabilité Guinée SYSCOHADA',
    'logiciel facturation GNF',
  ],
  alternates: { canonical: '/logiciels/guinee' },
};

const LOCAL: [typeof Banknote, string, string][] = [
  [
    Banknote,
    'Tout en francs guinéens (GNF)',
    'Factures, tickets, caisse et comptabilité tiennent vos montants en GNF. Les plafonds de caisse et les seuils s’expriment dans votre devise, sans conversion mentale.',
  ],
  [
    CalendarClock,
    'Fiscalité guinéenne intégrée',
    'Comptabilité SYSCOHADA applicable en Guinée, factures aux mentions RCCM/NIF, et liasse fiscale générée pour le dépôt auprès de la DGI, avec rappel des échéances.',
  ],
  [
    Users,
    'Paie IRPP et CNSS Guinée',
    'Le module RH calcule la paie mensuelle avec l’IRPP et les cotisations CNSS applicables en Guinée, et gère contrats, congés et absences.',
  ],
  [
    WifiOff,
    'Pensé pour les coupures',
    'BIRDY s’installe sur votre poste et fonctionne hors ligne : les coupures de réseau ou d’électricité n’arrêtent ni la vente ni la caisse. La synchronisation reprend au retour du réseau.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY est-il adapté à une entreprise guinéenne ?',
    a: 'Oui. BIRDY est édité par NOVAR, un studio basé à Conakry. Il tient les montants en francs guinéens, applique le plan comptable SYSCOHADA en vigueur en Guinée, gère la paie avec l’IRPP et la CNSS guinéennes et génère la liasse fiscale attendue par la DGI.',
  },
  {
    q: 'Le logiciel est-il réellement gratuit en Guinée ?',
    a: 'Oui. BIRDY se télécharge et s’utilise gratuitement, sans abonnement sur ce site. La facturation, la caisse, le stock et la comptabilité OHADA sont inclus.',
  },
  {
    q: 'Fonctionne-t-il sans connexion Internet stable ?',
    a: 'Oui. Une fois installé, BIRDY fonctionne intégralement hors ligne. Les ventes et opérations sont enregistrées localement et se synchronisent dès que la connexion revient — un point essentiel face aux coupures fréquentes.',
  },
  {
    q: 'À qui s’adresse BIRDY en Guinée ?',
    a: 'Aux commerces et PME : boutiques et superettes, quincailleries, pharmacies, grossistes et importateurs, prestataires de services. Tout organisation qui facture, encaisse, suit un stock ou tient une comptabilité OHADA.',
  },
  {
    q: 'Puis-je obtenir de l’aide localement ?',
    a: `Oui. NOVAR est joignable depuis la Guinée par WhatsApp (${SITE.whatsapp}) et par e-mail, en français, pour les questions de prise en main.`,
  },
];

export default function GuineePage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Guinée · Conakry"
        title="Logiciel de gestion commerciale gratuit en Guinée."
        description="BIRDY est un logiciel de facturation, de caisse et de comptabilité OHADA gratuit, édité en Guinée par NOVAR. Montants en GNF, comptabilité SYSCOHADA, paie IRPP/CNSS et liasse fiscale pour la DGI — et un fonctionnement hors ligne pensé pour le terrain."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/telechargements" className="btn-primary">
            Télécharger BIRDY
          </Link>
          <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <MessageCircle className="h-4 w-4" aria-hidden /> Écrire sur WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Un outil guinéen, pas une adaptation</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Conçu à Conakry, pour la réalité des commerces d&apos;ici.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            La plupart des logiciels de gestion disponibles en Guinée sont des outils pensés pour
            d&apos;autres marchés, qu&apos;il faut ensuite tordre pour coller à la devise, aux normes
            comptables et aux contraintes locales. NOVAR est un studio basé à Conakry : BIRDY part
            directement du franc guinéen, du SYSCOHADA appliqué en Guinée et d&apos;un usage qui doit
            tenir malgré les coupures. Rien à convertir, rien à contourner.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {LOCAL.map(([Icon, title, body]) => (
            <div key={title} className="editorial-card">
              <Icon className="h-5 w-5 text-cyan-700" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl">
          <span className="eyebrow">Au-delà de Conakry</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            De la boutique de quartier au grossiste.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Du marché de Madina aux quincailleries de quartier, des pharmacies aux grossistes de
            l&apos;intérieur, les besoins se ressemblent : encaisser vite, ne pas perdre de vente,
            savoir ce qui reste en stock et tenir des comptes propres pour l&apos;administration
            fiscale. BIRDY couvre cette chaîne complète dans une seule application gratuite, que vous
            teniez un seul comptoir ou plusieurs points de vente.
          </p>
        </div>
      </section>

      <RelatedSolutions
        current="guinee"
        heading="Ce que BIRDY couvre pour une entreprise guinéenne"
        intro="Une seule application gratuite pour facturer, encaisser, suivre le stock et tenir la comptabilité OHADA. Explorez chaque besoin en détail."
      />

      <SolutionFaq items={FAQS} title="Questions fréquentes — BIRDY en Guinée" />

      <SolutionCta
        heading="Équipez votre commerce guinéen, gratuitement."
        body="Téléchargez BIRDY, créez votre société en GNF et commencez à facturer et encaisser dès aujourd’hui. Une question ? NOVAR répond depuis Conakry."
        tone="cyan"
      />
    </>
  );
}
