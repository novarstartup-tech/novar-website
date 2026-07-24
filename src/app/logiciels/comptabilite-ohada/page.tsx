import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  FileSpreadsheet,
  Landmark,
  Link2,
  Lock,
  ShieldCheck,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { RelatedSolutions, SolutionCta, SolutionFaq } from '@/components/SolutionSections';

export const metadata: Metadata = {
  title: 'Logiciel de comptabilité OHADA / SYSCOHADA gratuit',
  description:
    'BIRDY est un logiciel de comptabilité OHADA gratuit : plan comptable SYSCOHADA révisé pré-installé, écritures automatiques, lettrage, déclaration de TVA, liasse fiscale, TAFIRE et export FEC. Conçu pour les PME de l’espace OHADA.',
  keywords: [
    'logiciel comptabilité OHADA gratuit',
    'logiciel SYSCOHADA',
    'comptabilité SYSCOHADA révisé',
    'liasse fiscale OHADA logiciel',
    'BIRDY comptabilité',
  ],
  alternates: { canonical: '/logiciels/comptabilite-ohada' },
};

const FEATURES: [typeof BookOpen, string, string][] = [
  [
    BookOpen,
    'Plan SYSCOHADA révisé pré-installé',
    'BIRDY livre le plan comptable SYSCOHADA révisé (en vigueur depuis 2018), ses neuf classes et ses comptes officiels. Vous créez vos sous-comptes auxiliaires sans casser la conformité.',
  ],
  [
    Link2,
    'Écritures générées automatiquement',
    'Ventes, achats, encaissements, mouvements de stock et paie passent leurs écritures seuls. La saisie manuelle reste possible pour les opérations diverses.',
  ],
  [
    ShieldCheck,
    'Grand-livre auxiliaire par tiers',
    'Chaque client, fournisseur ou employé reçoit un compte auxiliaire dédié, pour suivre les encours et lettrer les règlements partenaire par partenaire.',
  ],
  [
    Landmark,
    'Déclaration de TVA et lettrage',
    'BIRDY prépare les éléments de la TVA à déclarer et permet le lettrage des comptes de tiers pour rapprocher factures et règlements.',
  ],
  [
    FileSpreadsheet,
    'Liasse fiscale et TAFIRE',
    'Bilan, compte de résultat, TAFIRE et notes annexes sont générés depuis votre comptabilité, avec contrôles automatiques d’équilibre et export PDF, Excel ou XML.',
  ],
  [
    Lock,
    'Intangibilité et archivage',
    'Verrouillage des périodes clôturées, journal d’audit et archivage horodaté des liasses validées : les exigences OHADA de conservation et d’intangibilité sont respectées.',
  ],
];

const FAQS = [
  {
    q: 'BIRDY gère-t-il le SYSCOHADA révisé ?',
    a: 'Oui. BIRDY pré-installe le plan comptable SYSCOHADA révisé, applicable dans tous les États membres de l’OHADA dont la Guinée. Les comptes officiels sont fournis et vous travaillez sur des sous-comptes auxiliaires pour préserver la conformité.',
  },
  {
    q: 'Le logiciel de comptabilité est-il gratuit ?',
    a: 'Oui, la comptabilité OHADA fait partie de BIRDY, qui s’installe et s’utilise gratuitement sans abonnement sur ce site.',
  },
  {
    q: 'BIRDY produit-il la liasse fiscale ?',
    a: 'Oui. À partir de votre comptabilité clôturée, BIRDY génère la liasse fiscale complète (bilan, compte de résultat, TAFIRE, notes annexes et états associés) et l’exporte en PDF, Excel ou au format XML attendu par l’administration fiscale.',
  },
  {
    q: 'Faut-il ressaisir les ventes en comptabilité ?',
    a: 'Non. Les opérations issues de la facturation, de la caisse, des achats et du stock génèrent automatiquement leurs écritures. Vous évitez la double saisie et les erreurs de report.',
  },
];

export default function ComptabiliteOhadaPage() {
  return (
    <>
      <PageHero
        tone="violet"
        eyebrow="Comptabilité OHADA"
        title="Logiciel de comptabilité OHADA (SYSCOHADA révisé), gratuit."
        description="BIRDY tient votre comptabilité selon le plan SYSCOHADA révisé : écritures automatiques depuis vos ventes et achats, lettrage, déclaration de TVA, puis liasse fiscale et TAFIRE générés en fin d’exercice."
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
          <span className="eyebrow">Un outil conçu autour de l&apos;OHADA</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            La comptabilité épouse vos normes, pas l&apos;inverse.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Beaucoup de logiciels étrangers obligent à plier votre comptabilité à un plan comptable
            qui n&apos;est pas le vôtre, puis à retraiter chaque année pour produire des états OHADA.
            BIRDY part du plan SYSCOHADA révisé et des états attendus dans la zone : le travail
            quotidien alimente directement une comptabilité déjà conforme, sans conversion ni
            adaptation manuelle.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([Icon, title, body]) => (
            <div key={title} className="editorial-card">
              <Icon className="h-5 w-5 text-violet-700" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl">
          <span className="eyebrow">De la saisie à la clôture</span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Toute l&apos;année comptable, dans un seul logiciel.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Au quotidien, vos opérations passent leurs écritures et se lettrent. En cours
            d&apos;année, vous suivez le grand-livre, la balance et les encours par tiers. À la
            clôture, BIRDY exécute ses contrôles (écritures équilibrées, périodes cohérentes,
            inventaires saisis), génère la liasse fiscale et l&apos;archive dans un dossier non
            modifiable avec empreinte d&apos;intégrité. La même donnée sert du ticket de caisse
            jusqu&apos;au dépôt des états financiers.
          </p>
        </div>
      </section>

      <SolutionFaq items={FAQS} />

      <SolutionCta
        heading="Passez à une comptabilité OHADA sans friction."
        body="Téléchargez BIRDY, créez votre société avec son système comptable (normal, allégé ou minimal de trésorerie) et laissez vos opérations tenir vos comptes. Gratuitement."
        tone="violet"
      />

      <RelatedSolutions current="comptabilite-ohada" />
    </>
  );
}
