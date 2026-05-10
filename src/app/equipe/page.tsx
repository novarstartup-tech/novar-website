import Image from 'next/image';
import { Mail, Briefcase, MapPin, ArrowRight, Linkedin } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Équipe',
  description:
    "L'équipe NOVAR : une structure restreinte et agile de 4 personnes — CEO, Lead Developer, AgriTech Lead, UX/UI & Growth Lead.",
};

/**
 * NOVAR team — structure restreinte et agile de 4 personnes.
 *
 * Pour mettre à jour : remplacer les champs `name`, `photo` et `bio` de
 * chaque entrée. Si la photo n'est pas encore disponible, laisser
 * `photo: null` — l'avatar fallback (initiales sur dégradé NOVAR) prend
 * automatiquement le relais.
 *
 * Image specs : carré 800×800 px minimum, format JPG ou PNG, photo de
 * profil neutre fond sobre. Stocker dans `public/team/<slug>.jpg`.
 */
type TeamMember = {
  /** Affiché en gros sous la photo */
  role: string;
  /** Mise en avant en accent NOVAR au-dessus du nom */
  shortRole: string;
  name: string;
  /** Path public/team/... ou URL externe — null = avatar initiales */
  photo: string | null;
  /** 2-3 phrases. Ce qu'apporte la personne, sa raison d'être à NOVAR. */
  bio: string;
  /** Pour le badge couleur de la card (cohérence neuropsy) */
  accent: 'cyan' | 'emerald' | 'amber' | 'violet';
  /** Optionnels — masqués si non fournis */
  email?: string;
  linkedin?: string;
  location?: string;
};

const TEAM: TeamMember[] = [
  {
    role: 'CEO',
    shortRole: 'Direction & Vision',
    name: 'Djerno Mahamoudou Diallo',
    photo: '/team/1.jpg',
    bio: "Fondateur de NOVAR. Porte la vision produit et la stratégie commerciale. Construit l'écosystème logiciel BIRDY/FEEDORA depuis Conakry avec une obsession : rendre la qualité logicielle mondiale accessible aux PME africaines.",
    accent: 'cyan',
    email: SITE.email,
    location: 'Conakry, Guinée',
  },
  {
    role: 'Lead Developer',
    shortRole: 'Architecture & Backend',
    name: 'À annoncer',
    photo: '/team/2.jpg',
    bio: "Responsable de l'architecture technique et des choix d'ingénierie. Garant de la robustesse, de la sécurité et de la performance des produits NOVAR — du backend Rust aux apps Tauri desktop.",
    accent: 'violet',
  },
  {
    role: 'AgriTech Lead',
    shortRole: 'FEEDORA & Agronomie',
    name: 'À annoncer',
    photo: '/team/3.jpg',
    bio: "Pilote la plateforme FEEDORA et l'expertise zootechnique. Pont entre nutritionnistes avicoles, éleveurs et l'équipe produit pour livrer des outils de formulation alimentaire qui collent au terrain.",
    accent: 'emerald',
  },
  {
    role: 'UX/UI & Growth Lead',
    shortRole: 'Design & Acquisition',
    name: 'À annoncer',
    photo: '/team/4.jpg',
    bio: "Définit l'expérience utilisateur de bout en bout et orchestre la croissance. Travaille la lisibilité, la cohérence visuelle et les canaux d'acquisition pour transformer chaque visiteur en utilisateur engagé.",
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

const ACCENT_CLASSES: Record<TeamMember['accent'], { ring: string; text: string; bg: string; gradFrom: string; gradTo: string }> = {
  cyan: {
    ring: 'ring-cyan-200',
    text: 'text-cyan-700',
    bg: 'bg-cyan-50',
    gradFrom: 'from-cyan-500',
    gradTo: 'to-cyan-700',
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

export default function EquipePage() {
  return (
    <>
      <PageHero
        tone="violet"
        eyebrow="L'équipe"
        title="Quatre rôles, une mission."
        description="NOVAR opère avec une structure restreinte et agile : quatre profils complémentaires, ancrés à Conakry, qui couvrent direction, ingénierie, expertise métier et expérience utilisateur."
      />

      {/* === ÉQUIPE — 4 cartes égales =========================== */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => {
              const accent = ACCENT_CLASSES[member.accent];
              return (
                <article
                  key={member.role}
                  className="group flex flex-col rounded-2xl border border-novar-line bg-white p-6 transition-all hover:border-novar-ink/20 hover:shadow-lifted"
                >
                  {/* Avatar — photo ou fallback initiales sur dégradé */}
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

                  {/* Rôle + nom */}
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

                  {/* Bio */}
                  <p className="mt-4 text-sm leading-relaxed text-novar-muted text-center">
                    {member.bio}
                  </p>

                  {/* Liens contact (optionnels) */}
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

      {/* === Recrutement ouvert ============================== */}
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

      {/* === CTA ============================================== */}
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
