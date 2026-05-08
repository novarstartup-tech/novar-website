import Link from 'next/link';
import { Construction, ArrowRight } from 'lucide-react';

export const metadata = { title: 'Mon compte' };

export default function ComptePage() {
  return (
    <section className="py-20 bg-white dark:bg-novar-cosmic">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Construction className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-amber-900 dark:text-amber-200">Disponible Sprint 17B</div>
              <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">
                L&apos;espace client complet (gestion de licence, facturation, téléchargement de versions
                spécifiques, support intégré) sera disponible avec la mise en ligne de CinetPay.
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-6">Mon compte</h1>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
            <div className="font-semibold text-slate-900 dark:text-white">Licence active</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">Plan Pro · 5 utilisateurs</div>
            <div className="mt-1 text-xs text-slate-500">Échéance : 31/12/2026</div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
            <div className="font-semibold text-slate-900 dark:text-white">Téléchargements</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">Dernière version : 1.4.2</div>
            <Link href="/telechargements" className="mt-2 inline-flex items-center gap-1 text-sm text-novar-blue dark:text-novar-cyan">
              Aller à la page <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
            <div className="font-semibold text-slate-900 dark:text-white">Factures</div>
            <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">Disponible Sprint 17B</div>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-5">
            <div className="font-semibold text-slate-900 dark:text-white">Support</div>
            <Link href="/contact" className="mt-2 inline-flex items-center gap-1 text-sm text-novar-blue dark:text-novar-cyan">
              Nous contacter <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
