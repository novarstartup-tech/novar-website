import Link from 'next/link';
import { Search, Layers, Code, Plug, Wrench, ArrowRight } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata = {
  title: 'Solutions sur mesure',
  description: 'NOVAR conçoit et développe des logiciels métiers sur mesure : audit, architecture, développement, intégration, maintenance.',
};

const STEPS = [
  { icon: Search, title: '1. Audit & cadrage', desc: 'Nous analysons vos processus actuels, vos contraintes et vos objectifs pour définir un périmètre clair et un budget réaliste.' },
  { icon: Layers, title: '2. Architecture', desc: 'Choix des technologies, modélisation des données, schéma d\'intégration avec vos outils existants. Vous validez avant la première ligne de code.' },
  { icon: Code, title: '3. Développement', desc: 'Sprints courts, démos régulières, code source livré. Tests automatisés et code review systématique.' },
  { icon: Plug, title: '4. Intégration', desc: 'Connexion à vos systèmes existants : ERP, mobile money, CRM, e-commerce. APIs, webhooks, imports/exports.' },
  { icon: Wrench, title: '5. Maintenance', desc: 'Formation des équipes, support continu, évolutions fonctionnelles, monitoring 24/7. Vous n\'êtes jamais seul.' },
];

export default function SurMesurePage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold text-novar-cyan uppercase tracking-wider">Services</span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">Solutions sur mesure</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            BIRDY ne couvre pas votre cas ? Vous avez un métier spécifique, une intégration particulière,
            un workflow unique ? Nous concevons et développons des logiciels à votre image.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Notre méthode
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Cinq étapes, zéro mauvaise surprise
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-8">Stack technique</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-novar-cosmic">
              <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-3">Frontend</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Applications web modernes et performantes, expérience utilisateur soignée.
              </p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>· React · Next.js · TypeScript</li>
                <li>· Tailwind CSS · shadcn/ui</li>
                <li>· Tauri (desktop multi-OS)</li>
                <li>· React Native (mobile)</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-novar-cosmic">
              <h3 className="font-display font-semibold text-slate-900 dark:text-white mb-3">Backend</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                APIs robustes, bases de données fiables, infrastructure scalable.
              </p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>· Node.js · Python · Rust</li>
                <li>· PostgreSQL · SQLite · Redis</li>
                <li>· Docker · Kubernetes</li>
                <li>· OVH, Scaleway, AWS Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-12 dark:border-slate-800 dark:bg-novar-cosmic-2">
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Tarifs</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">
              Chaque projet est unique. Le prix dépend du périmètre, des intégrations, du niveau de
              maintenance souhaité. Le premier rendez-vous de cadrage est toujours gratuit — vous repartez
              avec un devis détaillé sous 5 jours ouvrés.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-novar-cosmic px-6 py-3 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow"
            >
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Parlons de votre projet"
            description="30 minutes pour comprendre vos besoins. Sans engagement."
            primaryHref="/contact"
            primaryLabel="Démarrer la discussion"
          />
        </div>
      </section>
    </>
  );
}
