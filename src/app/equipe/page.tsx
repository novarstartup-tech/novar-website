import Link from 'next/link';
import { Mail, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Équipe',
  description: "L'équipe NOVAR : Djerno (fondateur & lead dev) et nos postes ouverts.",
};

const OPEN_ROLES = [
  {
    title: 'Frontend Engineer',
    type: 'CDI',
    location: 'Conakry / Remote',
    description:
      "Construire les interfaces de BIRDY et FEEDORA. React, TypeScript, Tailwind, attention extrême au détail produit et à l'expérience utilisateur africaine.",
  },
  {
    title: 'Product Designer',
    type: 'CDI',
    location: 'Conakry / Remote',
    description:
      "Concevoir des interfaces sobres et performantes pour des utilisateurs métiers (gérants, comptables, éleveurs). Figma, design systems, recherche utilisateur terrain.",
  },
  {
    title: 'Customer Success Manager',
    type: 'CDI',
    location: 'Conakry',
    description:
      "Accompagner nos clients PME du déploiement à l'utilisation quotidienne. Formation, support de premier niveau, remontée terrain vers l'équipe produit.",
  },
];

export default function EquipePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
        <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            L&apos;équipe
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-novar-ink">
            Une équipe à taille humaine,
            <br />
            ancrée à Conakry.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-novar-muted leading-relaxed">
            NOVAR a été fondée à Conakry. Nous construisons nos produits avec
            un engagement long terme et une obsession pour les besoins réels
            des entreprises africaines.
          </p>
        </div>
      </section>

      {/* FONDATEUR */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-[200px,1fr] md:items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-novar-ink to-novar-ink-soft text-white font-display text-5xl font-bold shadow-lifted">
                    DJ
                  </div>
                  <span className="absolute -bottom-2 -right-2 inline-flex h-9 items-center rounded-full border border-novar-line bg-white px-3 text-xs font-semibold uppercase tracking-wider text-novar-accent shadow-soft">
                    Fondateur
                  </span>
                </div>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-novar-ink">
                  Djerno Mahamoudou Diallo
                </h2>
                <div className="mt-2 text-sm uppercase tracking-wider text-novar-accent">
                  Founder &amp; Lead Developer
                </div>
                <p className="mt-5 text-novar-ink-soft leading-relaxed">
                  Ingénieur logiciel, je conçois et développe NOVAR depuis ses
                  fondations. Je porte la vision produit, j&apos;écris la
                  majorité du code et j&apos;accompagne nos premiers clients sur
                  le terrain. L&apos;objectif : que chaque PME africaine ait
                  accès à des outils numériques aussi solides que ceux des
                  grandes entreprises occidentales.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-novar-line bg-white px-4 py-2 font-medium text-novar-ink hover:bg-novar-surface-3 transition-colors"
                  >
                    <Mail className="h-4 w-4" /> Écrire à Djerno
                  </a>
                  <span className="inline-flex items-center gap-2 text-novar-muted">
                    <MapPin className="h-3.5 w-3.5" /> Conakry, Guinée
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECRUTEMENT */}
      <section className="bg-novar-surface-2 py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-novar-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Recrutement ouvert
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
            Rejoindre NOVAR
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-novar-muted">
            Nous cherchons des personnes rigoureuses, autonomes et passionnées
            par l&apos;impact produit. Salaire compétitif, équity envisageable,
            ambiance startup studio.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {OPEN_ROLES.map((role) => (
              <article
                key={role.title}
                className="flex flex-col rounded-2xl border border-novar-line bg-white p-6 hover:border-novar-ink/20 hover:shadow-lifted transition-all"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-novar-accent">
                  {role.type} · {role.location}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-novar-ink">
                  {role.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-novar-muted flex-1">
                  {role.description}
                </p>
                <a
                  href={`mailto:${SITE.email}?subject=Candidature — ${role.title}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-novar-ink hover:text-novar-accent transition-colors"
                >
                  Postuler par e-mail <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-novar-line bg-white p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-novar-ink">
              Candidature spontanée
            </h3>
            <p className="mt-2 text-sm text-novar-muted">
              Vous ne correspondez à aucun poste mais vous voulez nous rejoindre ?
              Présentez-nous votre profil et ce que vous aimeriez construire à NOVAR.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Candidature spontanée`}
              className="mt-5 btn-primary"
            >
              <Mail className="h-4 w-4" /> Envoyer une candidature
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CtaBanner
            title="Une question pour l'équipe ?"
            description="Nous sommes joignables par e-mail, Facebook Messenger ou via le formulaire de contact."
            primaryHref="/contact"
            primaryLabel="Nous contacter"
          />
        </div>
      </section>
    </>
  );
}
