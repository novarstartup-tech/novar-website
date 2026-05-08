import { ContactForm } from '@/components/ContactForm';
import { Calendar, Video, Headphones } from 'lucide-react';

export const metadata = { title: 'Réserver une démo' };

export default function DemoPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Réserver une démo</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            30 minutes en visio pour découvrir BIRDY ERP en direct, posez toutes vos questions, partez avec
            une recommandation de plan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Comment ça se passe
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Calendar className="h-5 w-5 text-novar-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Vous choisissez un créneau</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Calendly intégré (à venir). En attendant, nous vous répondons par e-mail dans la journée
                      avec deux ou trois propositions.
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Video className="h-5 w-5 text-novar-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Démo en visio</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      30 minutes via Google Meet ou Zoom. Nous parcourons le module qui vous intéresse, avec
                      vos cas d&apos;usage en tête.
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Headphones className="h-5 w-5 text-novar-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Suivi gratuit</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      Après la démo, vous recevez un récapitulatif écrit et un accès à un essai gratuit de
                      30 jours, sans engagement.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-6 text-center">
                <Calendar className="mx-auto h-8 w-8 text-slate-400 mb-3" />
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Calendly s&apos;affichera ici une fois configuré.
                  <br />
                  Pour l&apos;instant, utilisez le formulaire à droite.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Demander un créneau
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
