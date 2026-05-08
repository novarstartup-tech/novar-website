import { Mail, MapPin, Facebook, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Contactez NOVAR à Conakry. Email, Facebook, formulaire de contact direct.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Nous contacter</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Une question, un projet, un retour ? Nous répondons sous 24 heures ouvrées.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Envoyer un message
              </h2>
              <ContactForm />
            </div>
            <aside className="space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-novar-cosmic-2">
                <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-4">Coordonnées</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-novar-cyan flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">
                      Conakry, Guinée
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 mt-0.5 text-novar-cyan flex-shrink-0" />
                    <a href={`mailto:${SITE.email}`} className="text-novar-blue dark:text-novar-cyan hover:underline">
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Facebook className="h-4 w-4 mt-0.5 text-novar-cyan flex-shrink-0" />
                    <a href={SITE.facebook} target="_blank" rel="noreferrer noopener" className="text-novar-blue dark:text-novar-cyan hover:underline">
                      Page Facebook NOVAR
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 text-novar-cyan flex-shrink-0" />
                    <div className="text-slate-700 dark:text-slate-300">
                      Lundi — Vendredi
                      <br />
                      8 h 30 — 18 h (GMT)
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-novar-cosmic-2">
                <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-2">Réponse rapide</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Pour les questions urgentes, le canal le plus rapide est Facebook Messenger sur notre page
                  officielle.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
