import Link from 'next/link';
import { Mail, Briefcase } from 'lucide-react';
import { CtaBanner } from '@/components/CtaBanner';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Notre équipe' };

const PEOPLE = [
  {
    name: 'Djerno Mahamoudou Diallo',
    role: 'Fondateur & CEO',
    bio: "Ingénieur logiciel, passionné par l'application des technologies au service du tissu économique africain. Pilote la stratégie produit et les partenariats.",
    initials: 'DM',
  },
  {
    name: 'À recruter',
    role: 'Lead Developer Backend',
    bio: 'Conception et développement des modules cœur de BIRDY. Expertise base de données et performance.',
    initials: 'TBD',
  },
  {
    name: 'À recruter',
    role: 'Designer Produit',
    bio: 'Conception de l\'expérience utilisateur. Attention au terrain africain et aux contraintes des utilisateurs réels.',
    initials: 'TBD',
  },
  {
    name: 'À recruter',
    role: 'Comptable consultant OHADA',
    bio: 'Garant de la conformité réglementaire de BIRDY. Veille fiscale et accompagnement des clients.',
    initials: 'TBD',
  },
];

export default function EquipePage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">Notre équipe</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Une équipe à taille humaine, avec une présence à Conakry et un réseau de partenaires en Afrique
            de l&apos;Ouest.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PEOPLE.map((p) => (
              <div
                key={p.name + p.role}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-novar-cosmic-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-novar-cosmic to-slate-700 text-white font-bold mb-4">
                  {p.initials}
                </div>
                <div className="font-display font-semibold text-slate-900 dark:text-white">{p.name}</div>
                <div className="text-sm text-novar-blue dark:text-novar-cyan mt-1">{p.role}</div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-novar-cosmic p-8">
            <Briefcase className="h-8 w-8 text-novar-cyan mb-4" />
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Nous recrutons
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              NOVAR cherche des développeurs, designers et experts métiers pour rejoindre l&apos;aventure.
              Si vous voulez contribuer à un produit utile pour les PME africaines, écrivez-nous.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Candidature spontanée`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-novar-cosmic px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow"
            >
              <Mail className="h-4 w-4" />
              Envoyer une candidature
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Une question pour l'équipe ?"
            description="Nous sommes joignables par e-mail, Facebook Messenger, et formulaire de contact."
            primaryHref="/contact"
          />
        </div>
      </section>
    </>
  );
}
