import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Bell,
  Boxes,
  ClipboardList,
  GitCompareArrows,
  Layers,
  ScanLine,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RelatedSolutions, SolutionCta, SolutionFaq } from '@/components/SolutionSections';

export const metadata: Metadata = {
  title: 'Logiciel de gestion de stock gratuit',
  description:
    'BIRDY est un logiciel de gestion de stock gratuit : quantités en temps réel, valorisation CMP ou FIFO, inventaires complet et tournant, alertes de seuil et écritures comptables automatiques. Pour commerces et PME de la zone OHADA.',
  keywords: [
    'logiciel de gestion de stock gratuit',
    'logiciel gestion stock Afrique',
    'gestion inventaire boutique',
    'valorisation stock CMP FIFO',
    'BIRDY stock',
  ],
  alternates: { canonical: '/logiciels/gestion-de-stock' },
};

const FEATURES: [typeof Boxes, string, string][] = [
  [
    Boxes,
    'Stock en temps réel',
    'Visualisez pour chaque article les quantités disponibles, en commande, réservées et en transfert. Chaque vente ou achat met le stock à jour immédiatement.',
  ],
  [
    Layers,
    'Valorisation CMP ou FIFO',
    'Choisissez, par article ou par catégorie, le coût moyen pondéré ou le premier entré premier sorti. La valeur du stock reste juste et cohérente avec la comptabilité.',
  ],
  [
    ClipboardList,
    'Inventaires complet et tournant',
    'Menez un inventaire complet en fin d’exercice ou un inventaire tournant par classe ABC sans bloquer l’activité. Les écarts s’affichent chiffrés et valorisés.',
  ],
  [
    Bell,
    'Alertes de seuil',
    'Définissez un seuil minimum et un seuil de réapprovisionnement par article. Une alerte remonte au tableau de bord et un récapitulatif hebdomadaire liste les articles à recommander.',
  ],
  [
    GitCompareArrows,
    'Multi-dépôts et transferts',
    'Gérez plusieurs dépôts (boutique principale, magasin secondaire, entrepôt) et tracez les transferts internes dans le journal des mouvements.',
  ],
  [
    ScanLine,
    'Traçabilité lots et péremption',
    'Pour les produits sensibles, activez le suivi par lot, date de péremption ou numéro de série. Chaque entrée et sortie précise le lot concerné.',
  ],
];

const FAQS = [
  {
    q: 'Le logiciel de gestion de stock est-il gratuit ?',
    a: 'Oui. La gestion de stock fait partie de BIRDY, qui s’installe et s’utilise gratuitement sans abonnement sur ce site.',
  },
  {
    q: 'Le stock est-il relié à la comptabilité ?',
    a: 'Oui. Chaque mouvement (entrée sur achat, sortie sur vente, régularisation d’inventaire, perte) génère automatiquement les écritures comptables SYSCOHADA associées, avec une valorisation en CMP ou FIFO.',
  },
  {
    q: 'Puis-je faire un inventaire sans fermer la boutique ?',
    a: 'Oui. L’inventaire tournant compte un sous-ensemble d’articles à intervalles réguliers selon leur classe ABC, ce qui maintient la précision du stock sans interrompre l’activité.',
  },
  {
    q: 'BIRDY prévient-il quand un article est presque épuisé ?',
    a: 'Oui. Dès que la quantité disponible passe sous le seuil que vous avez défini, une alerte apparaît dans le tableau de bord et un e-mail hebdomadaire récapitule les articles à réapprovisionner.',
  },
];

export default function GestionStockPage() {
  return (
    <>
      <PageHero
        tone="amber"
        eyebrow="Gestion de stock"
        title="Logiciel de gestion de stock gratuit pour commerces et PME."
        description="BIRDY suit vos quantités en temps réel, valorise le stock en CMP ou FIFO, gère les inventaires complets et tournants et vous alerte avant la rupture — chaque mouvement passant seul en comptabilité."
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
          <span className="eyebrow">Savoir ce que vous avez, vraiment</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Le stock est l&apos;argent immobilisé de votre commerce.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Rupture sur un produit qui tourne, capital bloqué sur des articles qui dorment, écarts
            jamais expliqués : un stock mal suivi coûte cher. BIRDY donne une image fidèle de vos
            quantités et de leur valeur, en reliant chaque entrée et chaque sortie à une vente, un
            achat ou un inventaire. Vous décidez vos réassorts sur des chiffres réels, pas au flair.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([Icon, title, body]) => (
            <div key={title} className="editorial-card">
              <Icon className="h-5 w-5 text-amber-700" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl">
          <span className="eyebrow">Du mouvement à l&apos;écriture</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            La comptabilité du stock, sans double saisie.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Entrées sur achat, sorties sur vente, transferts, retours, pertes et casse, régularisations
            d&apos;inventaire : chaque mouvement est enregistré dans le journal et génère
            l&apos;écriture comptable correspondante (comptes de stock de la classe 3, variations,
            provisions pour dépréciation des articles lents). En fin d&apos;exercice, votre stock est
            déjà valorisé et prêt pour la liasse fiscale.
          </p>
        </div>
      </section>

      <SolutionFaq items={FAQS} />

      <SolutionCta
        heading="Reprenez le contrôle de votre stock, gratuitement."
        body="Téléchargez BIRDY, importez vos articles et suivez vos quantités en temps réel dès la première journée. Aucun abonnement requis."
        tone="amber"
      />

      <RelatedSolutions current="gestion-de-stock" />
    </>
  );
}
