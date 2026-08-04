import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  Landmark,
  MessageCircle,
  Users,
  WifiOff,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RelatedSolutions, SolutionCta, SolutionFaq } from '@/components/SolutionSections';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Logiciel de gestion & caisse gratuit au Sénégal (Dakar)',
  description:
    'BIRDY est un logiciel de gestion commerciale, de caisse et de comptabilité gratuit pour le Sénégal : montants en FCFA (XOF), comptabilité SYSCOHADA, TVA à 18% et fonctionnement hors ligne. Édité par NOVAR, support à distance en français.',
  keywords: [
    'logiciel de gestion gratuit Sénégal',
    'logiciel de caisse gratuit Dakar',
    'logiciel gestion commerciale Sénégal',
    'logiciel comptabilité Sénégal SYSCOHADA',
    'logiciel facturation FCFA',
  ],
  alternates: { canonical: '/logiciels/senegal' },
};

const ACCENT = 'text-emerald-700';

const LOCAL: [typeof Banknote, string, string][] = [
  [
    Banknote,
    'Tout en francs CFA (FCFA / XOF)',
    'Factures, tickets, caisse et comptabilité tiennent vos montants en FCFA, la devise de la zone UEMOA. Rien à convertir, aucun taux à jongler dans la tête.',
  ],
  [
    Landmark,
    'Comptabilité SYSCOHADA et TVA à 18%',
    'BIRDY tient vos comptes au plan SYSCOHADA en vigueur au Sénégal, calcule la TVA au taux de 18% et prépare les éléments attendus par la Direction générale des Impôts et des Domaines (DGID).',
  ],
  [
    Users,
    'Paie et cotisations sociales',
    'Le module RH gère contrats, congés, absences et paie mensuelle. Vous paramétrez les cotisations sociales selon le régime en vigueur au Sénégal, et les bulletins sortent en FCFA.',
  ],
  [
    WifiOff,
    'Pensé pour les coupures',
    'Installé sur votre poste, BIRDY fonctionne hors ligne : une coupure de réseau ou d’électricité n’arrête ni la vente ni la caisse. Vos données restent sur votre poste : aucune connexion n’est jamais requise.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY est-il adapté à une entreprise sénégalaise ?',
    a: 'Oui. BIRDY tient les montants en francs CFA (FCFA / XOF), applique le plan comptable SYSCOHADA en vigueur au Sénégal et calcule la TVA au taux de 18%. Les factures portent les mentions légales attendues (RCCM, identifiant fiscal du client), utiles pour vos obligations déclaratives auprès de la DGID.',
  },
  {
    q: 'Le logiciel est-il réellement gratuit au Sénégal ?',
    a: 'Oui. BIRDY se télécharge et s’utilise gratuitement, sans abonnement sur ce site. La facturation, la caisse, la gestion de stock et la comptabilité OHADA sont incluses.',
  },
  {
    q: 'Fonctionne-t-il sans connexion Internet stable ?',
    a: 'Oui. Une fois installé, BIRDY fonctionne intégralement hors ligne. Les ventes et opérations sont enregistrées sur votre poste et y restent disponibles en permanence, sans aucune connexion.',
  },
  {
    q: 'À qui s’adresse BIRDY au Sénégal ?',
    a: 'Aux commerces et PME : boutiques et supérettes de Dakar comme des régions, restaurants et prestataires de services, quincailleries, grossistes et importateurs. Toute structure qui facture, encaisse, suit un stock ou tient une comptabilité OHADA.',
  },
  {
    q: 'Puis-je obtenir de l’aide depuis le Sénégal ?',
    a: `Oui. NOVAR, studio basé à Conakry, assure un support à distance en français par WhatsApp (${SITE.whatsapp}) et par e-mail pour la prise en main.`,
  },
];

export default function SenegalPage() {
  return (
    <>
      <PageHero
        tone="emerald"
        eyebrow="Sénégal · UEMOA"
        title="Logiciel de gestion commerciale gratuit au Sénégal."
        description="BIRDY est un logiciel de facturation, de caisse et de comptabilité OHADA gratuit. Montants en FCFA (XOF), comptabilité SYSCOHADA, TVA à 18% et un fonctionnement hors ligne qui tient malgré les coupures. Édité par NOVAR, avec un support à distance en français."
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
          <span className="eyebrow">Un outil pensé pour la zone FCFA</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            De la devise à la déclaration, sans rien tordre.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Beaucoup de logiciels vendus au Sénégal sont des outils pensés pour d&apos;autres marchés
            qu&apos;il faut ensuite adapter à la devise et aux normes comptables locales. BIRDY part
            directement du franc CFA, du SYSCOHADA appliqué au Sénégal et de la TVA à 18% : la vente,
            la caisse et la comptabilité parlent la même langue que votre administration fiscale.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {LOCAL.map(([Icon, title, body]) => (
            <div key={title} className="editorial-card">
              <Icon className={`h-5 w-5 ${ACCENT}`} aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl">
          <span className="eyebrow">De Dakar aux régions</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            De la boutique de Sandaga au grossiste de l&apos;intérieur.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Des marchés de Dakar aux commerces de Thiès, Touba ou Saint-Louis, les besoins se
            ressemblent : encaisser vite, ne pas perdre de vente, savoir ce qui reste en stock et
            tenir des comptes propres pour l&apos;administration. BIRDY couvre cette chaîne complète
            dans une seule application gratuite, d&apos;un comptoir unique à plusieurs points de vente.
          </p>
        </div>
      </section>

      <RelatedSolutions
        heading="Ce que BIRDY couvre pour une entreprise sénégalaise"
        intro="Une seule application gratuite pour facturer, encaisser, suivre le stock et tenir la comptabilité OHADA en FCFA. Explorez chaque besoin en détail."
      />

      <SolutionFaq items={FAQS} title="Questions fréquentes — BIRDY au Sénégal" />

      <SolutionCta
        heading="Équipez votre commerce sénégalais, gratuitement."
        body="Téléchargez BIRDY, créez votre société en FCFA et commencez à facturer et encaisser dès aujourd’hui. Aucun abonnement, aucune carte bancaire."
        tone="emerald"
      />
    </>
  );
}
