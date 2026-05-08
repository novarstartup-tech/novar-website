import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PricingTable } from '@/components/PricingTable';
import { ComparisonTable } from '@/components/ComparisonTable';

export const metadata = {
  title: 'Tarifs',
  description: 'Tarifs BIRDY (gestion de stock) — Solo, Pro, Enterprise. Et une offre sur mesure pour la fintech B2B et les logiciels spécifiques.',
};

export default function TarifsPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Tarifs BIRDY</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">
            Des prix simples, en GNF
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
            Tarification de notre plateforme de gestion de stock BIRDY. Pas de
            coûts cachés. 30 jours d&apos;essai gratuit, sans carte bancaire.
            Pour la fintech sur mesure, nous établissons un devis dédié.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Comparaison détaillée
          </h2>
          <ComparisonTable />
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Questions sur les tarifs
          </h2>
          <div className="space-y-4">
            <Faq q="Comment payer en GNF depuis la Guinée ?" a="Nous acceptons les virements bancaires locaux, Mobile Money (Orange · MTN), et — bientôt — les cartes via CinetPay." />
            <Faq q="Y a-t-il un engagement ?" a="Aucun. Vous pouvez résilier à tout moment, votre licence reste active jusqu'à la fin de la période payée." />
            <Faq q="Les mises à jour sont-elles incluses ?" a="Oui, toutes les mises à jour (sécurité, fonctionnalités, modules) sont incluses dans tous les plans." />
            <Faq q="Puis-je changer de plan ?" a="Oui, à tout moment. Le prorata est appliqué automatiquement." />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-dashed border-novar-cyan/30 bg-white p-8 sm:p-12 dark:bg-novar-cosmic">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Sur mesure
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white">
              Besoin d&apos;un développement spécifique ?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Pour les solutions sur mesure (logiciel métier, intégration complexe, application mobile),
              nous établissons un devis adapté à votre périmètre. Le premier échange est toujours gratuit.
            </p>
            <Link
              href="/services/sur-mesure"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-novar-cosmic px-6 py-3 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow"
            >
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
    <div className="rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-novar-cosmic-2">
      <div className="font-semibold text-slate-900 dark:text-white">{q}</div>
      <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{a}</div>
    </div>
  );
}
