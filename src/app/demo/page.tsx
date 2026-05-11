import { ContactForm } from '@/components/ContactForm';
import { Calendar, Video, Headphones } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

export const metadata = { title: 'Réserver une démo' };

export default function DemoPage() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Démo"
        title="Réserver une démo."
        description="30 minutes en visio pour découvrir nos produits SaaS B2B (BIRDY ou FEEDORA) ou discuter d'un projet sur mesure. Posez toutes vos questions, repartez avec une recommandation adaptée."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink mb-8">
                Comment ça se passe
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-novar-ink">Vous choisissez un créneau</div>
                    <div className="mt-1 text-sm text-novar-muted leading-relaxed">
                      Calendly intégré (à venir). En attendant, nous vous
                      répondons par e-mail dans la journée avec deux ou trois
                      propositions.
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                    <Video className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-novar-ink">Démo en visio</div>
                    <div className="mt-1 text-sm text-novar-muted leading-relaxed">
                      30 minutes via Google Meet ou Zoom. Nous parcourons le
                      module qui vous intéresse, avec vos cas d&apos;usage en
                      tête.
                    </div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-novar-ink">Suivi gratuit</div>
                    <div className="mt-1 text-sm text-novar-muted leading-relaxed">
                      Après la démo, vous recevez un récapitulatif écrit et
                      le lien direct pour télécharger BIRDY. L&apos;outil est
                      entièrement gratuit, vous l&apos;installez quand
                      vous voulez.
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-dashed border-novar-line p-8 text-center bg-novar-surface-2">
                <Calendar className="mx-auto h-8 w-8 text-novar-muted mb-3" />
                <p className="text-sm text-novar-muted">
                  Calendly s&apos;affichera ici une fois configuré.
                  <br />
                  Pour l&apos;instant, utilisez le formulaire à droite.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-novar-ink mb-8">
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
