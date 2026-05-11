import { Mail, MapPin, Facebook, Linkedin, Phone, MessageCircle, Clock } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Contactez NOVAR à Conakry. Email, Facebook, formulaire de contact direct.',
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <PageHero
        tone="cyan"
        eyebrow="Parlons de votre projet"
        title="Nous sommes à l'écoute."
        description="Une question sur BIRDY, un besoin de logiciel sur mesure, une mission de conseil ? Décrivez-nous votre contexte — nous répondons sous 24 heures ouvrées."
      />

      {/* FORM + INFOS — grille 2 cols */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form (cols 1-3) */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-novar-line bg-white p-6 sm:p-8 shadow-soft">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-novar-ink">
                  Envoyer un message
                </h2>
                <p className="mt-2 text-sm text-novar-muted">
                  Tous les champs marqués d&apos;un astérisque sont obligatoires.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Aside infos (cols 4-5) */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-novar-line bg-novar-surface-2 p-6 sm:p-7">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
                  Canaux directs
                </h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">E-mail</div>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-medium text-novar-ink hover:text-novar-accent transition-colors break-all"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">WhatsApp</div>
                      <a
                        href={SITE.whatsappHref}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium text-novar-ink hover:text-emerald-700 transition-colors"
                      >
                        {SITE.whatsapp}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">Téléphone</div>
                      <a
                        href={SITE.phoneHref}
                        className="font-medium text-novar-ink hover:text-novar-accent transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink">
                      <Facebook className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">Facebook</div>
                      <a
                        href={SITE.facebook}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium text-novar-ink hover:text-novar-accent transition-colors"
                      >
                        Page officielle NOVAR
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">LinkedIn</div>
                      <a
                        href={SITE.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="font-medium text-novar-ink hover:text-novar-accent transition-colors"
                      >
                        Page entreprise
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">Adresse</div>
                      <div className="font-medium text-novar-ink">Conakry, Guinée</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-novar-line bg-white text-novar-ink">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-novar-muted">Horaires</div>
                      <div className="font-medium text-novar-ink">Lundi — Vendredi</div>
                      <div className="text-novar-muted">8 h 30 — 18 h (GMT)</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-2xl border border-novar-line bg-novar-surface-2">
                <div className="relative h-56 w-full bg-grid">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-xl border border-novar-line bg-white px-4 py-3 shadow-soft text-center">
                      <MapPin className="mx-auto h-5 w-5 text-novar-accent" />
                      <div className="mt-1 font-display text-sm font-semibold text-novar-ink">
                        Conakry, Guinée
                      </div>
                      <div className="text-xs text-novar-muted">Siège NOVAR</div>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-3 text-xs text-novar-muted">
                  Visites sur rendez-vous uniquement.
                </div>
              </div>

              <div className="rounded-2xl border border-novar-line bg-white p-6">
                <h3 className="font-display font-semibold text-novar-ink">Réponse rapide</h3>
                <p className="mt-2 text-sm text-novar-muted">
                  Pour une réponse plus rapide, écrivez-nous via Facebook
                  Messenger sur notre page officielle.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
