import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, FileText, Receipt, RotateCcw, Users } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RelatedSolutions, SolutionCta, SolutionFaq } from '@/components/SolutionSections';

export const metadata: Metadata = {
  title: 'Logiciel de facturation OHADA gratuit',
  description:
    'BIRDY est un logiciel de facturation gratuit et conforme à l’OHADA : factures et tickets avec mentions RCCM/NIF, numérotation séquentielle, TVA, avoirs et suivi des règlements clients. En GNF et FCFA, édité par NOVAR.',
  keywords: [
    'logiciel de facturation OHADA',
    'logiciel de facturation gratuit',
    'facture conforme OHADA',
    'logiciel facturation FCFA GNF',
    'BIRDY facturation',
  ],
  alternates: { canonical: '/logiciels/facturation-ohada' },
};

const FEATURES: [typeof FileText, string, string][] = [
  [
    FileText,
    'Factures et tickets conformes',
    'Émettez une facture A4 avec les mentions légales complètes (RCCM, NIF du client, détail des lignes) ou un ticket 80 mm pour la vente rapide au comptoir.',
  ],
  [
    Receipt,
    'Numérotation séquentielle par exercice',
    'Chaque facture porte un numéro continu et non modifiable par exercice, comme l’exige la réglementation fiscale de l’espace OHADA.',
  ],
  [
    CheckCircle2,
    'TVA et totaux automatiques',
    'BIRDY calcule les montants hors taxe, la TVA au taux paramétré et le total à payer, et prépare les éléments de la déclaration de TVA.',
  ],
  [
    RotateCcw,
    'Avoirs et retours tracés',
    'Un retour génère automatiquement l’avoir lié à la facture d’origine, le mouvement de stock entrant et l’écriture d’annulation correspondante.',
  ],
  [
    Users,
    'Compte client et encours',
    'Chaque client dispose d’un compte auxiliaire (compte 411) : BIRDY suit les encours, les règlements partiels et le solde dû, partenaire par partenaire.',
  ],
  [
    CheckCircle2,
    'Règlements multi-modes',
    'Enregistrez les encaissements en espèces, par chèque, par carte, à crédit ou en paiement mixte. Les règlements dématérialisés alimentent un compte de trésorerie dédié.',
  ],
];

const FAQS = [
  {
    q: 'Le logiciel de facturation BIRDY est-il vraiment gratuit ?',
    a: 'Oui. BIRDY s’installe et s’utilise gratuitement, sans abonnement sur ce site. La facturation, la gestion des clients et le suivi des règlements font partie de l’application.',
  },
  {
    q: 'Les factures sont-elles conformes à l’OHADA ?',
    a: 'Les factures reprennent les mentions attendues dans l’espace OHADA (identité de l’entreprise, RCCM, NIF, détail des lignes, TVA) et portent une numérotation séquentielle continue par exercice, non modifiable après validation.',
  },
  {
    q: 'Puis-je facturer en GNF et en FCFA ?',
    a: 'Oui. BIRDY tient vos documents dans la devise de votre société : le franc guinéen (GNF) en Guinée, le franc CFA (FCFA) dans les pays de la zone UEMOA.',
  },
  {
    q: 'La facturation est-elle reliée à la comptabilité ?',
    a: 'Oui. Chaque facture, encaissement ou avoir génère automatiquement les écritures comptables SYSCOHADA correspondantes, sans double saisie.',
  },
];

export default function FacturationOhadaPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Facturation"
        title="Logiciel de facturation OHADA, gratuit et conforme."
        description="BIRDY édite des factures et des tickets aux mentions légales OHADA, calcule la TVA, gère les avoirs et suit les règlements de chaque client, le tout relié à votre comptabilité, en GNF comme en FCFA."
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
            Facturer sans bricoler un modèle Word ou Excel.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            La plupart des commerçants et PME d&apos;Afrique de l&apos;Ouest facturent encore sur un
            document bureautique recopié chaque fois : numéros incohérents, TVA calculée à la main,
            aucun lien avec la comptabilité ni le stock. BIRDY remplace cette étape par un outil de
            facturation structuré, où chaque document validé alimente automatiquement le compte du
            client, la caisse et le journal comptable.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([Icon, title, body]) => (
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
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Un flux de facturation continu.
          </h2>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['01', 'Sélectionner le client', 'Choisissez un client existant ou créez-le à la volée. Son compte auxiliaire est ouvert automatiquement.'],
            ['02', 'Composer la facture', 'Ajoutez les articles par scan ou recherche ; les prix, remises et TVA s’appliquent seuls.'],
            ['03', 'Encaisser le règlement', 'Enregistrez le paiement (espèces, chèque, carte, crédit ou mixte). Le solde du client se met à jour.'],
            ['04', 'Comptabiliser', 'La vente et l’encaissement génèrent leurs écritures SYSCOHADA, prêtes pour la liasse fiscale.'],
          ].map(([step, title, body]) => (
            <li key={step} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{step}</div>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <SolutionFaq items={FAQS} />

      <SolutionCta
        heading="Commencez à facturer proprement, gratuitement."
        body="Téléchargez BIRDY, créez votre société et éditez votre première facture conforme en quelques minutes. Aucun abonnement, aucune carte bancaire."
        tone="cyan"
      />

      <RelatedSolutions current="facturation-ohada" />
    </>
  );
}
