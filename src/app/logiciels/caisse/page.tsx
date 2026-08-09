import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  Barcode,
  CheckCircle2,
  Lock,
  ScrollText,
  WifiOff,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RelatedSolutions, SolutionCta, SolutionFaq } from '@/components/SolutionSections';

export const metadata: Metadata = {
  title: 'Logiciel de caisse gratuit (POS) pour commerce',
  description:
    'BIRDY est un logiciel de caisse gratuit : point de vente rapide au code-barres, encaissement multi-modes, fonctionne hors ligne, arrêté de caisse et rapport Z conformes OHADA. Pour boutiques et PME, en GNF et FCFA.',
  keywords: [
    'logiciel de caisse gratuit',
    'logiciel POS gratuit',
    'logiciel point de vente Afrique',
    'caisse enregistreuse boutique',
    'BIRDY caisse',
  ],
  alternates: { canonical: '/logiciels/caisse' },
};

const FEATURES: [typeof Barcode, string, string][] = [
  [
    Barcode,
    'Encaissement en quelques secondes',
    'Scan code-barres, recherche tactile ou catalogue visuel par photos : la vente s’enregistre vite, même sur un terminal modeste.',
  ],
  [
    Banknote,
    'Tous les modes de paiement',
    'Espèces avec rendu monnaie automatique, carte, chèque, crédit client ou paiement mixte. Chaque mode est configurable dans les paramètres de caisse.',
  ],
  [
    WifiOff,
    'Fonctionne hors ligne',
    'Si le réseau tombe, la caisse continue : les ventes sont enregistrées sur place dans une base locale chiffrée, immédiatement et définitivement.',
  ],
  [
    ScrollText,
    'Arrêté de caisse et rapport Z',
    'Comptage des espèces, comparaison au solde théorique, justification des écarts. Le rapport Z récapitule la journée par mode de paiement et par caissier.',
  ],
  [
    Lock,
    'Rôles et plafond de caisse',
    'Chaque caissier n’accède qu’à sa caisse ; le superviseur valide les écarts. Un plafond déclenche une alerte invitant à déposer les espèces en banque.',
  ],
  [
    CheckCircle2,
    'Retours, avoirs et remises',
    'Traitez un retour partiel ou total depuis la facture d’origine ; appliquez remises en pourcentage, en valeur ou prix spécial, avec validation au-delà d’un seuil.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY fonctionne-t-il comme une caisse enregistreuse hors ligne ?',
    a: 'Oui. Une fois installé, le point de vente de BIRDY fonctionne intégralement hors ligne. Les ventes sont enregistrées dans une base locale chiffrée, sur votre poste, sans qu’aucune connexion ne soit nécessaire, utile face aux coupures de réseau ou d’électricité.',
  },
  {
    q: 'Le logiciel de caisse est-il gratuit ?',
    a: 'Oui, BIRDY s’installe et s’utilise gratuitement, sans abonnement sur ce site. Le point de vente, la gestion des espèces et les rapports de caisse sont inclus.',
  },
  {
    q: 'Peut-on gérer plusieurs caisses ou plusieurs vendeurs ?',
    a: 'Oui. Vous créez une caisse par poste, chacune avec son propre solde, son arrêté de fin de journée et son journal. Les rôles (caissier, superviseur, comptable) déterminent qui accède à quoi.',
  },
  {
    q: 'Le rapport de caisse sert-il de justificatif fiscal ?',
    a: 'Le rapport Z récapitule les encaissements et décaissements du jour ; il est imprimable et archivable, et sert de pièce justificative en cas de contrôle. Les écarts de caisse génèrent leurs propres écritures comptables.',
  },
];

export default function CaissePage() {
  return (
    <>
      <PageHero
        tone="emerald"
        eyebrow="Caisse / point de vente"
        title="Logiciel de caisse gratuit pour votre point de vente."
        description="BIRDY transforme un ordinateur en caisse enregistreuse complète : encaissement rapide au code-barres, tous les modes de paiement, fonctionnement hors ligne, arrêté de caisse et rapport Z conformes aux exigences OHADA."
      >
        <div className="flex flex-wrap gap-3">
          <Link href="/telechargements" className="btn-primary">
            Télécharger BIRDY
          </Link>
          <Link href="/produits/birdy-erp" className="btn-ghost">
            Voir l&apos;ERP complet
          </Link>
        </div>
      </PageHero>

      <section className="section-shell">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Une caisse qui ne s&apos;arrête pas quand le réseau s&apos;arrête.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Dans une boutique, une superette ou une quincaillerie, la caisse doit encaisser vite et
            rester fiable même sans Internet. BIRDY est une application installée sur votre poste :
            elle fonctionne entièrement en local et garde chaque vente en sécurité sur votre poste, même quand le
            réseau revient. Aucune interruption de vente, aucune perte de ticket.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([Icon, title, body]) => (
            <div key={title} className="editorial-card">
              <Icon className="h-5 w-5 text-emerald-700" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Chaque vente met à jour le stock et la comptabilité.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Contrairement à une caisse isolée, le point de vente de BIRDY est branché sur les autres
            modules : une vente déduit la quantité vendue du stock, alimente le solde de caisse et
            passe l&apos;écriture comptable. En fin de journée, l&apos;arrêté de caisse compare le
            solde théorique au comptage physique et justifie tout écart. Vous savez à tout moment ce
            que vous avez vendu, encaissé et gagné.
          </p>
        </div>
      </section>

      <SolutionFaq items={FAQS} />

      <SolutionCta
        heading="Installez votre caisse gratuite dès aujourd’hui."
        body="Téléchargez BIRDY, ouvrez votre première caisse et encaissez votre première vente. Sans abonnement, sans matériel propriétaire imposé."
        tone="emerald"
      />

      <RelatedSolutions current="caisse" />
    </>
  );
}
