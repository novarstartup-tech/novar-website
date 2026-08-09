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
  title: 'Logiciel de gestion & caisse gratuit en Côte d’Ivoire (Abidjan)',
  description:
    'BIRDY est un logiciel de gestion commerciale, de caisse et de comptabilité gratuit pour la Côte d’Ivoire : montants en FCFA (XOF), comptabilité SYSCOHADA, TVA au taux standard de 18% et fonctionnement hors ligne. Édité par NOVAR, support à distance en français.',
  keywords: [
    'logiciel de gestion gratuit Côte d’Ivoire',
    'logiciel de caisse gratuit Abidjan',
    'logiciel gestion commerciale Côte d’Ivoire',
    'logiciel comptabilité Côte d’Ivoire SYSCOHADA',
    'logiciel facturation FCFA',
  ],
  alternates: { canonical: '/logiciels/cote-d-ivoire' },
};

const ACCENT = 'text-amber-700';

const LOCAL: [typeof Banknote, string, string][] = [
  [
    Banknote,
    'Tout en francs CFA (FCFA / XOF)',
    'Factures, tickets, caisse et comptabilité tiennent vos montants en FCFA, la devise de la zone UEMOA. Les prix, remises et totaux s’affichent dans votre monnaie, sans conversion.',
  ],
  [
    Landmark,
    'Comptabilité SYSCOHADA et TVA à 18%',
    'BIRDY tient vos comptes au plan SYSCOHADA en vigueur en Côte d’Ivoire et calcule la TVA au taux standard de 18%, avec les éléments utiles à vos déclarations auprès de la Direction générale des Impôts (DGI).',
  ],
  [
    Users,
    'Paie et régime social (CNPS)',
    'Le module RH gère contrats, congés, absences et paie mensuelle. Vous paramétrez les cotisations selon le régime social local (CNPS), et les bulletins sortent en FCFA.',
  ],
  [
    WifiOff,
    'Pensé pour les coupures',
    'Installé sur votre poste, BIRDY fonctionne hors ligne : une coupure de réseau ou d’électricité n’arrête ni la vente ni la caisse. Vos données restent sur votre poste : aucune connexion n’est jamais requise.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY est-il adapté à une entreprise ivoirienne ?',
    a: 'Oui. BIRDY tient les montants en francs CFA (FCFA / XOF), applique le plan comptable SYSCOHADA en vigueur en Côte d’Ivoire et calcule la TVA au taux standard de 18%. Les factures portent les mentions légales attendues (RCCM, identifiant fiscal du client) pour vos obligations auprès de la DGI.',
  },
  {
    q: 'Le logiciel est-il réellement gratuit en Côte d’Ivoire ?',
    a: 'Oui. BIRDY se télécharge et s’utilise gratuitement, sans abonnement sur ce site. La facturation, la caisse, la gestion de stock et la comptabilité OHADA sont incluses.',
  },
  {
    q: 'Fonctionne-t-il sans connexion Internet stable ?',
    a: 'Oui. Une fois installé, BIRDY fonctionne intégralement hors ligne. Les ventes et opérations sont enregistrées sur votre poste et y restent disponibles en permanence, sans aucune connexion.',
  },
  {
    q: 'À qui s’adresse BIRDY en Côte d’Ivoire ?',
    a: 'Aux commerces et PME : boutiques et supérettes d’Abidjan comme de l’intérieur, quincailleries, distributeurs et grossistes, acteurs de l’agro-négoce, prestataires de services. Toute structure qui facture, encaisse, suit un stock ou tient une comptabilité OHADA.',
  },
  {
    q: 'Puis-je obtenir de l’aide depuis la Côte d’Ivoire ?',
    a: `Oui. NOVAR, studio basé à Conakry, assure un support à distance en français par WhatsApp (${SITE.whatsapp}) et par e-mail pour la prise en main.`,
  },
];

export default function CoteDivoirePage() {
  return (
    <>
      <PageHero
        tone="amber"
        eyebrow="Côte d’Ivoire · UEMOA"
        title="Logiciel de gestion commerciale gratuit en Côte d’Ivoire."
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
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            La comptabilité OHADA sans double saisie.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Dans la première économie de l&apos;UEMOA, beaucoup de commerces facturent encore sur un
            document bureautique recopié à la main, sans lien avec la caisse ni la comptabilité.
            BIRDY relie la vente, le stock et les comptes : chaque facture validée alimente
            automatiquement le compte du client et le journal comptable SYSCOHADA, en FCFA et avec la
            TVA à 18%.
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
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Du magasin d&apos;Adjamé au distributeur régional.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Des marchés d&apos;Adjamé et de Treichville aux quincailleries de Yamoussoukro ou
            Bouaké, les besoins sont les mêmes : encaisser vite, ne pas perdre de vente, suivre le
            stock et tenir des comptes propres. BIRDY couvre cette chaîne complète dans une seule
            application gratuite, du comptoir unique au réseau de points de vente.
          </p>
        </div>
      </section>

      <RelatedSolutions
        heading="Ce que BIRDY couvre pour une entreprise ivoirienne"
        intro="Une seule application gratuite pour facturer, encaisser, suivre le stock et tenir la comptabilité OHADA en FCFA. Explorez chaque besoin en détail."
      />

      <SolutionFaq items={FAQS} title="Questions fréquentes : BIRDY en Côte d’Ivoire" />

      <SolutionCta
        heading="Équipez votre commerce ivoirien, gratuitement."
        body="Téléchargez BIRDY, créez votre société en FCFA et commencez à facturer et encaisser dès aujourd’hui. Aucun abonnement, aucune carte bancaire."
        tone="amber"
      />
    </>
  );
}
