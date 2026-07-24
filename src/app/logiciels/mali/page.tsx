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
  title: 'Logiciel de gestion & caisse gratuit au Mali (Bamako)',
  description:
    'BIRDY est un logiciel de gestion commerciale, de caisse et de comptabilité gratuit pour le Mali : montants en FCFA (XOF), comptabilité SYSCOHADA, TVA à 18% et fonctionnement hors ligne face aux coupures. Édité par NOVAR, support à distance en français.',
  keywords: [
    'logiciel de gestion gratuit Mali',
    'logiciel de caisse gratuit Bamako',
    'logiciel gestion commerciale Mali',
    'logiciel comptabilité Mali SYSCOHADA',
    'logiciel facturation FCFA',
  ],
  alternates: { canonical: '/logiciels/mali' },
};

const ACCENT = 'text-cyan-700';

const LOCAL: [typeof Banknote, string, string][] = [
  [
    WifiOff,
    'Conçu pour tenir sans réseau',
    'Installé sur votre poste, BIRDY fonctionne intégralement hors ligne. Coupure d’électricité ou de connexion : la vente et la caisse continuent, et tout se synchronise au retour du réseau.',
  ],
  [
    Banknote,
    'Tout en francs CFA (FCFA / XOF)',
    'Factures, tickets, caisse et comptabilité tiennent vos montants en FCFA, la devise de la zone UEMOA. Aucune conversion, aucun taux à recalculer.',
  ],
  [
    Landmark,
    'Comptabilité SYSCOHADA et TVA à 18%',
    'BIRDY tient vos comptes au plan SYSCOHADA en vigueur au Mali et calcule la TVA au taux de 18%, avec les éléments utiles à vos déclarations auprès de la Direction générale des Impôts (DGI).',
  ],
  [
    Users,
    'Paie et régime social (INPS)',
    'Le module RH gère contrats, congés, absences et paie mensuelle. Vous paramétrez les cotisations selon le régime social local (INPS), et les bulletins sortent en FCFA.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY fonctionne-t-il malgré les coupures fréquentes au Mali ?',
    a: 'Oui — c’est un point central. Une fois installé, BIRDY fonctionne intégralement hors ligne : les ventes et opérations sont enregistrées localement et se synchronisent dès que le réseau ou l’électricité reviennent. La caisse ne s’arrête pas.',
  },
  {
    q: 'BIRDY est-il adapté à une entreprise malienne ?',
    a: 'Oui. BIRDY tient les montants en francs CFA (FCFA / XOF), applique le plan comptable SYSCOHADA en vigueur au Mali et calcule la TVA au taux de 18%. Les factures portent les mentions légales attendues (RCCM, identifiant fiscal du client) pour vos obligations auprès de la DGI.',
  },
  {
    q: 'Le logiciel est-il réellement gratuit au Mali ?',
    a: 'Oui. BIRDY se télécharge et s’utilise gratuitement, sans abonnement sur ce site. La facturation, la caisse, la gestion de stock et la comptabilité OHADA sont incluses.',
  },
  {
    q: 'À qui s’adresse BIRDY au Mali ?',
    a: 'Aux commerces et PME : boutiques et supérettes de Bamako comme des régions, quincailleries, grossistes et importateurs, prestataires de services. Toute structure qui facture, encaisse, suit un stock ou tient une comptabilité OHADA.',
  },
  {
    q: 'Puis-je obtenir de l’aide depuis le Mali ?',
    a: `Oui. NOVAR, studio basé à Conakry, assure un support à distance en français par WhatsApp (${SITE.whatsapp}) et par e-mail pour la prise en main.`,
  },
];

export default function MaliPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Mali · UEMOA"
        title="Logiciel de gestion commerciale gratuit au Mali."
        description="BIRDY est un logiciel de facturation, de caisse et de comptabilité OHADA gratuit, conçu pour tenir sans réseau. Montants en FCFA (XOF), comptabilité SYSCOHADA, TVA à 18% et un fonctionnement hors ligne pensé pour les coupures. Édité par NOVAR, avec un support à distance en français."
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
          <span className="eyebrow">La continuité avant tout</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Une caisse qui ne s&apos;arrête pas quand le réseau lâche.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Au Mali, un logiciel de gestion 100% en ligne devient inutilisable à la première coupure.
            BIRDY prend le problème à l&apos;envers : il s&apos;installe sur votre poste et travaille
            hors ligne par défaut. Vos ventes, votre stock et votre comptabilité SYSCOHADA restent
            accessibles en permanence, en FCFA, et se synchronisent dès que la connexion revient.
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
          <span className="eyebrow">De Bamako aux régions</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            De l&apos;étal du Grand Marché au grossiste de quartier.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Du Grand Marché de Bamako aux commerces de Ségou, Sikasso ou Kayes, les besoins se
            ressemblent : encaisser vite, ne pas perdre de vente, savoir ce qui reste en stock et
            tenir des comptes propres pour l&apos;administration. BIRDY couvre cette chaîne complète
            dans une seule application gratuite, du comptoir unique à plusieurs points de vente.
          </p>
        </div>
      </section>

      <RelatedSolutions
        heading="Ce que BIRDY couvre pour une entreprise malienne"
        intro="Une seule application gratuite pour facturer, encaisser, suivre le stock et tenir la comptabilité OHADA en FCFA — et qui tient hors ligne. Explorez chaque besoin en détail."
      />

      <SolutionFaq items={FAQS} title="Questions fréquentes — BIRDY au Mali" />

      <SolutionCta
        heading="Équipez votre commerce malien, gratuitement."
        body="Téléchargez BIRDY, créez votre société en FCFA et commencez à facturer et encaisser dès aujourd’hui, même sans connexion permanente."
        tone="cyan"
      />
    </>
  );
}
