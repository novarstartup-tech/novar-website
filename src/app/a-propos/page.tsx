import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Target, Globe, MapPin, Mail, Briefcase, Linkedin } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'À propos',
  description:
    "NOVAR — un SaaS Studio basé à Conakry. Mission, valeurs, vision et l'équipe qui les porte : une structure restreinte et agile de 4 personnes.",
};

/**
 * Page « À propos ». La section ÉQUIPE qui vivait sur `/equipe` est
 * désormais inlinée ici (l'ancienne URL est redirigée vers
 * `/a-propos#equipe` via `next.config.mjs`). Ça donne au visiteur un
 * récit linéaire mission → valeurs → équipe → vision sans rupture de
 * navigation.
 *
 * Pour mettre à jour les membres : remplacer name / photo / bio dans
 * `TEAM`. Si la photo n'est pas dispo, mettre `photo: null` — l'avatar
 * fallback (initiales sur dégradé) prend le relais.
 *
 * Image specs : carré 600×600 px minimum, format JPG, photo de profil
 * neutre fond sobre. Stocker dans `public/team/<n>.jpg`.
 */
type TeamMember = {
  role: string;
  shortRole: string;
  name: string;
  photo: string | null;
  bio: string;
  /** Accent couleur de l'auréole + badge. `slate` est réservé au CEO :
   *  une teinte institutionnelle qui appelle le respect, à l'opposé des
   *  trois autres accents (violet, emerald, amber) qui restent vifs. */
  accent: 'slate' | 'emerald' | 'amber' | 'violet';
  email?: string;
  linkedin?: string;
  location?: string;
};

const TEAM: TeamMember[] = [
  // Ordre voulu (cf. screenshot) : AgriTech → CEO → Lead Dev → UX/UI.
  // Le CEO est placé en position 2 plutôt qu'en tête : ça crée un trio
  // exécution (AgriTech, CEO, Lead Dev) qui se lit comme un cœur produit
  // suivi de l'interface utilisateur, plutôt qu'une hiérarchie classique.
  {
    role: 'AgriTech Lead',
    shortRole: 'FEEDORA & Agronomie',
    name: 'DIABY Abdoulaye',
    photo: '/team/3.jpg',
    bio: "L'éleveur connaît son terrain mieux que personne — nous lui donnons les chiffres pour décider sans hésiter.",
    accent: 'emerald',
  },
  {
    role: 'CEO',
    shortRole: 'Direction & Vision',
    name: 'DIALLO Djerno M.',
    photo: '/team/1.jpg',
    bio: "Il y a du génie dans chaque entreprise africaine — notre métier, c'est de le matérialiser en logiciel.",
    accent: 'slate',
    email: SITE.email,
    location: 'Conakry, Guinée',
  },
  {
    role: 'Lead Developer',
    shortRole: 'Architecture & Backend',
    name: 'BAH Mamadou Bobo',
    photo: '/team/2.jpg',
    bio: "Un code solide aujourd'hui, c'est un produit qui tient dans dix ans — la robustesse n'est pas négociable.",
    accent: 'violet',
  },
  {
    role: 'UX/UI & Growth Lead',
    shortRole: 'Design & Acquisition',
    name: 'KABA L. Yériba',
    photo: '/team/4.jpg',
    bio: "Un utilisateur ne lit pas de mode d'emploi — notre travail, c'est de rendre l'évidence évidente.",
    accent: 'amber',
  },
];

const OPEN_ROLES = [
  {
    title: 'Frontend Engineer',
    type: 'CDI',
    location: 'Conakry / Remote',
    description:
      "Construire les interfaces de BIRDY et FEEDORA. React, TypeScript, Tailwind, attention extrême au détail produit et à l'expérience utilisateur africaine.",
  },
  {
    title: 'Customer Success Manager',
    type: 'CDI',
    location: 'Conakry',
    description:
      "Accompagner nos clients PME du déploiement à l'utilisation quotidienne. Formation, support de premier niveau, remontée terrain vers l'équipe produit.",
  },
];

const ACCENT_CLASSES: Record<
  TeamMember['accent'],
  { ring: string; text: string; bg: string; gradFrom: string; gradTo: string }
> = {
  // « slate » — réservé au CEO. Gris bleuté institutionnel, sobre,
  // évoque l'autorité et la gravité — l'accent "respect" du quatuor.
  slate: {
    ring: 'ring-slate-300',
    text: 'text-slate-700',
    bg: 'bg-slate-100',
    gradFrom: 'from-slate-600',
    gradTo: 'to-slate-900',
  },
  emerald: {
    ring: 'ring-emerald-200',
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
    gradFrom: 'from-emerald-500',
    gradTo: 'to-emerald-700',
  },
  amber: {
    ring: 'ring-amber-200',
    text: 'text-amber-700',
    bg: 'bg-amber-50',
    gradFrom: 'from-amber-500',
    gradTo: 'to-amber-700',
  },
  violet: {
    ring: 'ring-violet-200',
    text: 'text-violet-700',
    bg: 'bg-violet-50',
    gradFrom: 'from-violet-500',
    gradTo: 'to-violet-700',
  },
};

function initials(name: string): string {
  if (!name || name === 'À annoncer') return '?';
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export default function AProposPage() {
  return (
    <>
      <PageHero
        tone="violet"
        eyebrow="À propos"
        title="Un SaaS Studio basé à Conakry."
        description={SITE.description}
      />

      {/* === MISSION ============================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Notre mission
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Numériser, automatiser, optimiser.
            </h2>
            <p className="mt-6 text-lg text-novar-muted leading-relaxed">
              Beaucoup de secteurs traditionnels — gestion comptable d&apos;une
              PME, formulation alimentaire dans une ferme avicole, suivi
              opérationnel — fonctionnent encore avec des outils inadaptés ou
              entièrement manuels. Cela coûte du temps, de l&apos;argent, et
              freine le développement.
            </p>
            <p className="mt-5 text-lg text-novar-muted leading-relaxed">
              NOVAR existe pour combler ce vide. Nous concevons des produits
              SaaS B2B taillés pour des secteurs précis, et nous proposons en
              parallèle du développement sur mesure pour les entreprises ayant
              des besoins d&apos;automatisation singuliers. Notre objectif :
              que chaque entreprise africaine puisse opérer avec des outils
              modernes, fiables et accessibles.
            </p>
          </div>
        </div>
      </section>

      {/* === VALEURS ============================================ */}
      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Nos valeurs
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
              Ce qui nous guide.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Target}
              title="Pragmatisme"
              description="Nous concevons des solutions qui résolvent des problèmes réels, pas des prouesses techniques pour le plaisir."
            />
            <FeatureCard
              icon={Users}
              title="Proximité"
              description="Nos clients ne sont pas des numéros. Nous travaillons en direct avec les dirigeants et les équipes."
            />
            <FeatureCard
              icon={Globe}
              title="Ancrage local"
              description="Conakry est notre base. Nos produits sont pensés pour les réalités du terrain africain."
            />
            <FeatureCard
              icon={MapPin}
              title="Long terme"
              description="Nous bâtissons une entreprise pour durer, pas pour vendre vite. Nos clients comptent sur cette stabilité."
            />
          </div>
        </div>
      </section>

      {/* === ÉQUIPE — anchor #equipe ============================ */}
      <section id="equipe" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              L&apos;équipe
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
              Quatre rôles, une mission.
            </h2>
            <p className="mt-4 text-lg text-novar-muted leading-relaxed">
              NOVAR opère avec une structure restreinte et agile : quatre
              profils complémentaires, ancrés à Conakry, qui couvrent
              direction, ingénierie, expertise métier et expérience utilisateur.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => {
              const accent = ACCENT_CLASSES[member.accent];
              return (
                <article
                  key={member.role}
                  className="group flex flex-col rounded-2xl border border-novar-line bg-white p-6 transition-all hover:border-novar-ink/20 hover:shadow-lifted"
                >
                  <div className="relative mx-auto mb-5">
                    <div
                      className={`relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full ring-4 ${accent.ring} ring-offset-2 ring-offset-white shadow-soft`}
                    >
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div
                          className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${accent.gradFrom} ${accent.gradTo} font-display text-3xl font-bold text-white`}
                        >
                          {initials(member.name)}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="text-center">
                    <span
                      className={`inline-flex rounded-full ${accent.bg} ${accent.text} px-3 py-1 text-xs font-semibold uppercase tracking-wider`}
                    >
                      {member.role}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-novar-ink">
                      {member.name}
                    </h3>
                    <div className="mt-1 text-xs uppercase tracking-wider text-novar-muted">
                      {member.shortRole}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-novar-muted text-center">
                    {member.bio}
                  </p>

                  {(member.email || member.linkedin || member.location) && (
                    <div className="mt-5 flex flex-col items-center gap-2 border-t border-novar-line pt-4 text-xs text-novar-muted">
                      {member.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3 w-3" />
                          {member.location}
                        </span>
                      )}
                      <div className="flex items-center gap-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            aria-label={`Écrire à ${member.name}`}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-novar-line bg-white text-novar-muted hover:border-novar-ink/20 hover:text-novar-ink transition-colors"
                          >
                            <Mail className="h-3.5 w-3.5" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`LinkedIn de ${member.name}`}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-novar-line bg-white text-novar-muted hover:border-novar-ink/20 hover:text-novar-ink transition-colors"
                          >
                            <Linkedin className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* === RECRUTEMENT OUVERT ================================= */}
      <section className="surface-alt">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24 md:py-32">
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
            ambiance studio.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
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

      {/* === VISION ============================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
                Notre vision
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink leading-tight">
                Le SaaS Studio de référence en Afrique.
              </h2>
              <p className="mt-6 text-lg text-novar-muted leading-relaxed">
                BIRDY pour la gestion comptable des PME, FEEDORA pour la
                formulation alimentaire avicole — d&apos;autres produits
                suivront, chacun ciblé sur un secteur traditionnel à
                moderniser. À chaque fois la même exigence : utile, fiable,
                accessible.
              </p>
              <p className="mt-5 text-lg text-novar-muted leading-relaxed">
                À long terme, nous voulons que toute entreprise africaine qui
                cherche à automatiser une partie de son activité pense
                d&apos;abord à NOVAR.
              </p>
              <div className="mt-8 flex gap-3">
                <Link href="/produits" className="btn-primary">
                  Voir le catalogue <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-12 text-left">
              <div className="font-display text-5xl font-bold text-novar-ink">2024</div>
              <div className="mt-2 text-novar-accent font-medium">Création de NOVAR</div>
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-novar-ink">Conakry</div>
                  <div className="text-xs uppercase tracking-wider text-novar-muted mt-1">Siège social</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-novar-ink">Guinée</div>
                  <div className="text-xs uppercase tracking-wider text-novar-muted mt-1">Pays de base</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-novar-ink">SaaS</div>
                  <div className="text-xs uppercase tracking-wider text-novar-muted mt-1">Modèle</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-novar-ink">B2B</div>
                  <div className="text-xs uppercase tracking-wider text-novar-muted mt-1">Cible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA ================================================ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32">
          <CtaBanner
            title="Travaillons ensemble."
            description="Que vous soyez une PME, une startup ou une organisation, nous serions ravis d'échanger sur vos enjeux."
            primaryHref="/contact"
            secondaryHref="/a-propos#equipe"
            secondaryLabel="Rencontrer l'équipe"
          />
        </div>
      </section>
    </>
  );
}
