import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PricingTable } from '@/components/PricingTable';
import { ComparisonTable } from '@/components/ComparisonTable';

export const metadata = {
  title: 'Tarifs',
  description:
    "Tarifs de BIRDY — Solo, Pro, Enterprise. Pour le développement sur mesure, nous établissons un devis dédié à chaque projet.",
};

export default function TarifsPage() {
  return (
    <>
      <section className="bg-white border-b border-novar-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Tarifs
            </span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-novar-ink leading-[1.1]">
              Des prix simples, en GNF.
            </h1>
            <p className="mt-6 text-lg text-novar-muted leading-relaxed">
              Tarification de notre ERP BIRDY. Pas de coûts cachés, pas de
              modules payants à empiler. 30 jours d&apos;essai gratuit, sans
              carte bancaire. Pour le développement sur mesure, nous
              établissons un devis dédié.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <PricingTable />
        </div>
      </section>

      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink mb-10 text-center">
            Comparaison détaillée
          </h2>
          <ComparisonTable />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink mb-8 text-center">
            Questions sur les tarifs
          </h2>
          <div className="space-y-4">
            <Faq q="Comment payer ?" a="Nous acceptons les virements bancaires locaux et internationaux. Le paiement par carte sera ajouté prochainement." />
            <Faq q="Y a-t-il un engagement ?" a="Aucun. Vous pouvez résilier à tout moment, votre licence reste active jusqu'à la fin de la période payée." />
            <Faq q="Les mises à jour sont-elles incluses ?" a="Oui, toutes les mises à jour (sécurité, fonctionnalités, modules) sont incluses dans tous les plans." />
            <Faq q="Puis-je changer de plan ?" a="Oui, à tout moment. Le prorata est appliqué automatiquement." />
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
