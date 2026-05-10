import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PricingTable } from '@/components/PricingTable';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Tarifs',
  description:
    "BIRDY est gratuit. FEEDORA est en accès anticipé sur invitation. Pour les développements sur mesure, nous établissons un devis dédié à chaque projet.",
};

export default function TarifsPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Tarifs"
        title="BIRDY est gratuit."
        description="Pas d'abonnement, pas de carte bancaire, pas de modules payants à empiler. Téléchargez BIRDY et installez-le sur autant de postes que vous voulez. Pour FEEDORA (SaaS AgriTech) et les développements sur mesure, voir les offres ci-dessous."
        centered
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <PricingTable />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink mb-8 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            <Faq
              q="BIRDY est vraiment gratuit ?"
              a="Oui. BIRDY est un logiciel propriétaire distribué gratuitement (freeware). Vous pouvez l'installer et l'utiliser pour votre activité, à titre personnel comme commercial, sans payer ni abonnement, ni licence, ni modules. Le code source reste la propriété de NOVAR — vous ne pouvez pas le modifier ni le redistribuer. Voir l'EULA."
            />
            <Faq
              q="Quel est le modèle économique ?"
              a="NOVAR finance BIRDY via les missions de développement sur mesure pour les entreprises (logiciels métier, automatisations, applications) et via le SaaS FEEDORA. BIRDY reste gratuit pour servir l'écosystème OHADA."
            />
            <Faq
              q="Y a-t-il une version cloud / hébergée ?"
              a="Non, pas pour l'instant. BIRDY tourne en local sur votre poste, sans serveur ni connexion permanente. Si vous avez besoin d'un hébergement managé multi-poste, contactez-nous pour une étude dédiée."
            />
            <Faq
              q="Puis-je utiliser BIRDY pour ma boutique ?"
              a="Oui. Aucune restriction d'usage commercial. Boutique unique, multi-magasins, indépendant, PME, association — tout est autorisé tant que vous ne redistribuez pas le logiciel."
            />
            <Faq
              q="Comment se passent les mises à jour ?"
              a="Les nouvelles versions sont publiées sur la page Téléchargements. Vous installez la mise à jour quand vous voulez. Vos données restent intactes — BIRDY préserve votre base SQLite locale entre les versions."
            />
            <Faq
              q="Quel support est inclus ?"
              a="Documentation publique + tracker de bugs (par email à novar.startup@gmail.com). Pour du support prioritaire, de la formation sur site ou de l'assistance comptable dédiée, voir les services NOVAR."
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32">
          <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-8 sm:p-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Sur mesure
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-novar-ink">
              Besoin d&apos;un développement spécifique&nbsp;?
            </h2>
            <p className="mt-5 text-lg text-novar-muted max-w-2xl leading-relaxed">
              Pour les solutions sur mesure (logiciel métier, intégration
              complexe, application mobile), nous établissons un devis adapté
              à votre périmètre. Le premier échange est toujours gratuit.
            </p>
            <Link href="/services/sur-mesure" className="mt-7 btn-primary">
              Découvrir nos services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-novar-line bg-white p-6">
      <div className="font-semibold text-novar-ink">{q}</div>
      <div className="mt-2 text-sm leading-relaxed text-novar-muted">{a}</div>
    </div>
  );
}
