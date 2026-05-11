import Link from 'next/link';
import { Boxes, Bird, ArrowRight } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Produits',
  description:
    "Le catalogue NOVAR : BIRDY (ERP & gestion comptable OHADA pour PME africaines) et FEEDORA (formulation alimentaire pour fermes avicoles). Deux produits SaaS B2B en production.",
};

export default function ProduitsPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Catalogue NOVAR"
        title="Nos produits SaaS B2B."
        description="NOVAR édite deux plateformes B2B en production. Chacune s'adresse à un secteur précis et résout un problème métier concret. Pour les besoins qui sortent du cadre, nous proposons du développement sur mesure."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-novar-line bg-white px-3 py-1 text-xs font-medium text-novar-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-novar-accent" />
                  En production
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
                  BIRDY
                </h2>
                <p className="mt-2 text-lg font-medium text-novar-accent">
                  ERP & gestion comptable OHADA
                </p>
                <p className="mt-5 text-novar-muted leading-relaxed">
                  Un logiciel de gestion complet pour les PME africaines :
                  facturation, comptabilité OHADA, paie, stocks. Tout est
                  centralisé, en français, conçu pour fonctionner même avec
                  une connexion limitée.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/produits/birdy-erp" className="btn-primary">
                    Découvrir BIRDY <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/tarifs" className="btn-ghost">
                    Voir les tarifs
                  </Link>
                </div>
              </div>
              <div className="rounded-2xl border border-novar-line bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3 pb-4 border-b border-novar-line">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-novar-surface-2 text-novar-ink">
                    <Boxes className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-novar-ink">Modules BIRDY</div>
                    <div className="text-xs text-novar-muted">Tous inclus</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                  {[
                    'Facturation',
                    'Comptabilité OHADA',
                    'Paie & RH',
                    'Stocks & articles',
                    'Achats',
                    'Caisse',
                    'Multi-devises',
                    'Hors ligne',
                  ].map((m) => (
                    <div key={m} className="text-novar-ink-soft">· {m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-center">
              <div className="lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-novar-line bg-white px-3 py-1 text-xs font-medium text-novar-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-novar-accent" />
                  En production
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
                  FEEDORA
                </h2>
                <p className="mt-2 text-lg font-medium text-novar-accent">
                  Formulation alimentaire pour fermes avicoles
                </p>
                <p className="mt-5 text-novar-muted leading-relaxed">
                  Une application B2B AgriTech pour aider les éleveurs et
                  nutritionnistes à formuler des aliments pour volailles
                  équilibrés, économiques et performants. Calcul en temps
                  réel, alertes nutritionnelles, rapports professionnels.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/produits/feedora" className="btn-primary">
                    Découvrir FEEDORA <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://feedora-cyan.vercel.app/"
                    target="_blank"
                    rel="noopener"
                    className="btn-ghost"
                  >
                    Accéder à l&apos;application
                  </a>
                </div>
              </div>
              <div className="lg:order-1 rounded-2xl border border-novar-line bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3 pb-4 border-b border-novar-line">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-novar-surface-2 text-novar-ink">
                    <Bird className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-novar-ink">Spéculations</div>
                    <div className="text-xs text-novar-muted">Toutes phases d&apos;élevage</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                  {[
                    'Poulet de chair',
                    'Pondeuse',
                    'Dinde',
                    'Reproducteurs',
                    'Pré-démarrage',
                    'Finition',
                    'Standards zootech.',
                    'Multi-pays',
                  ].map((m) => (
                    <div key={m} className="text-novar-ink-soft">· {m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-24 md:pb-32">
          <div className="rounded-3xl border-2 border-dashed border-novar-line p-6 sm:p-8 md:p-12">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-muted">
                Au-delà de nos produits
              </span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink">
                Vous avez un besoin métier que nos produits ne couvrent pas&nbsp;?
              </h2>
              <p className="mt-5 text-novar-muted leading-relaxed">
                NOVAR conçoit aussi des solutions logicielles sur mesure pour
                les entreprises ayant des besoins d&apos;automatisation
                spécifiques. Décrivez-nous votre problème, nous concevrons la
                solution adaptée.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/services/sur-mesure" className="btn-primary">
                  Voir notre méthode <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
          <CtaBanner
            title="Une idée à concrétiser ?"
            description="Premier échange gratuit. Nous vous orientons vers le bon produit ou un projet sur mesure, en toute transparence."
            primaryHref="/contact"
            primaryLabel="Nous contacter"
            secondaryHref="/services/sur-mesure"
            secondaryLabel="Voir nos services"
          />
        </div>
      </section>
    </>
  );
}
