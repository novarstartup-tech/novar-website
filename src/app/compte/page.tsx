import Link from 'next/link';
import { Construction, ArrowRight } from 'lucide-react';

export const metadata = { title: 'Mon compte' };

export default function ComptePage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-start gap-3">
            <Construction className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <div className="font-semibold text-amber-900">
                Espace client en cours de finalisation
              </div>
              <p className="mt-1 text-sm text-amber-800">
                La gestion complète des licences, le téléchargement des
                versions et le support intégré seront ouverts à tous les
                clients prochainement. En attendant, écrivez-nous via la page
                Contact.
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-display text-3xl font-bold tracking-tight text-novar-ink mb-8">
          Mon compte
        </h1>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-novar-line bg-white p-5">
            <div className="font-semibold text-novar-ink">Licence active</div>
            <div className="mt-2 text-sm text-novar-muted">Plan Pro · 5 utilisateurs</div>
            <div className="mt-1 text-xs text-novar-muted">Échéance : 31/12/2026</div>
          </div>
          <div className="rounded-xl border border-novar-line bg-white p-5">
            <div className="font-semibold text-novar-ink">Téléchargements</div>
            <div className="mt-2 text-sm text-novar-muted">Dernière version : 1.4.2</div>
            <Link
              href="/telechargements"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-novar-accent hover:underline"
            >
              Aller à la page <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-xl border border-novar-line bg-white p-5">
            <div className="font-semibold text-novar-ink">Factures</div>
            <div className="mt-2 text-sm text-novar-muted">Bientôt disponible</div>
          </div>
          <div className="rounded-xl border border-novar-line bg-white p-5">
            <div className="font-semibold text-novar-ink">Support</div>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-novar-accent hover:underline"
            >
              Nous contacter <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
