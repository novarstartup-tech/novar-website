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
  title: 'Logiciel de gestion & caisse gratuit au Bénin (Cotonou)',
  description:
    'BIRDY est un logiciel de gestion commerciale, de caisse et de comptabilité gratuit pour le Bénin : montants en FCFA (XOF), comptabilité SYSCOHADA, TVA à 18% et fonctionnement hors ligne. Édité par NOVAR, support à distance en français.',
  keywords: [
    'logiciel de gestion gratuit Bénin',
    'logiciel de caisse gratuit Cotonou',
    'logiciel gestion commerciale Bénin',
    'logiciel comptabilité Bénin SYSCOHADA',
    'logiciel facturation FCFA',
  ],
  alternates: { canonical: '/logiciels/benin' },
};

const ACCENT = 'text-violet-700';

const LOCAL: [typeof Banknote, string, string][] = [
  [
    Banknote,
    'Tout en francs CFA (FCFA / XOF)',
    'Factures, tickets, caisse et comptabilité tiennent vos montants en FCFA, la devise de la zone UEMOA. Prix, remises et totaux s’affichent dans votre monnaie, sans conversion.',
  ],
  [
    Landmark,
    'Comptabilité SYSCOHADA et TVA à 18%',
    'BIRDY tient vos comptes au plan SYSCOHADA en vigueur au Bénin et calcule la TVA au taux de 18%, avec les éléments utiles à vos déclarations auprès de la Direction générale des Impôts (DGI).',
  ],
  [
    Users,
    'Paie et cotisations sociales',
    'Le module RH gère contrats, congés, absences et paie mensuelle. Vous paramétrez les cotisations sociales selon le régime en vigueur au Bénin, et les bulletins sortent en FCFA.',
  ],
  [
    WifiOff,
    'Pensé pour les coupures',
    'Installé sur votre poste, BIRDY fonctionne hors ligne : une coupure de réseau ou d’électricité n’arrête ni la vente ni la caisse. La synchronisation reprend au retour de la connexion.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY est-il adapté à une entreprise béninoise ?',
    a: 'Oui. BIRDY tient les montants en francs CFA (FCFA / XOF), applique le plan comptable SYSCOHADA en vigueur au Bénin et calcule la TVA au taux de 18%. Les factures portent les mentions légales attendues (RCCM, identifiant fiscal du client) pour vos obligations auprès de la DGI.',
  },
  {
    q: 'Le logiciel est-il réellement gratuit au Bénin ?',
    a: 'Oui. BIRDY se télécharge et s’utilise gratuitement, sans abonnement sur ce site. La facturation, la caisse, la gestion de stock et la comptabilité OHADA sont incluses.',
  },
  {
    q: 'Fonctionne-t-il sans connexion Internet stable ?',
    a: 'Oui. Une fois installé, BIRDY fonctionne intégralement hors ligne. Les ventes et opérations sont enregistrées localement et se synchronisent dès que la connexion revient.',
  },
  {
    q: 'À qui s’adresse BIRDY au Bénin ?',
    a: 'Aux commerces et PME : boutiques et supérettes de Cotonou comme des régions, commerçants et négociants de Dantokpa, quincailleries, grossistes, importateurs et acteurs du commerce transfrontalier, prestataires de services. Toute structure qui facture, encaisse, suit un stock ou tient une comptabilité OHADA.',
  },
  {
    q: 'Puis-je obtenir de l’aide depuis le Bénin ?',
    a: `Oui. NOVAR, studio basé à Conakry, assure un support à distance en français par WhatsApp (${SITE.whatsapp}) et par e-mail pour la prise en main.`,
  },
];

export default function BeninPage() {
  return (
    <>
      <PageHero
        tone="violet"
        eyebrow="Bénin · UEMOA"
        title="Logiciel de gestion commerciale gratuit au Bénin."
        description="BIRDY est un logiciel de facturation, de caisse et de comptabilité OHADA gratuit. Montants en FCFA (XOF), comptabilité SYSCOHADA, TVA à 18% et un fonctionnement hors ligne pensé pour le terrain. Édité par NOVAR, avec un support à distance en français."
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
          <span className="eyebrow">Un outil pour un carrefour commercial</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Suivre le négoce sans perdre le fil des comptes.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Le Bénin vit d&apos;un commerce dense, tourné vers le négoce et l&apos;import. Dans ce
            rythme, les ventes s&apos;enchaînent et la comptabilité prend souvent du retard. BIRDY
            relie la caisse, le stock et les comptes : chaque vente validée alimente automatiquement
            le journal SYSCOHADA en vigueur au Bénin, en FCFA et avec la TVA à 18%, sans double
            saisie ni recopiage.
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
          <span className="eyebrow">De Cotonou à l&apos;intérieur</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Du comptoir de Dantokpa au grossiste de Porto-Novo.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Du grand marché Dantokpa aux commerces de Porto-Novo, Parakou ou Abomey-Calavi, les
            besoins se ressemblent : encaisser vite, ne pas perdre de vente, suivre le stock et
            tenir des comptes propres pour l&apos;administration. BIRDY couvre cette chaîne complète
            dans une seule application gratuite, du comptoir unique à plusieurs points de vente.
          </p>
        </div>
      </section>

      <RelatedSolutions
        heading="Ce que BIRDY couvre pour une entreprise béninoise"
        intro="Une seule application gratuite pour facturer, encaisser, suivre le stock et tenir la comptabilité OHADA en FCFA. Explorez chaque besoin en détail."
      />

      <SolutionFaq items={FAQS} title="Questions fréquentes — BIRDY au Bénin" />

      <SolutionCta
        heading="Équipez votre commerce béninois, gratuitement."
        body="Téléchargez BIRDY, créez votre société en FCFA et commencez à facturer et encaisser dès aujourd’hui. Aucun abonnement, aucune carte bancaire."
        tone="violet"
      />
    </>
  );
}
