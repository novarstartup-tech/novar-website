import Link from 'next/link';
import { Search, Layers, Code, Plug, Wrench, ArrowRight } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHero } from '@/components/PageHero';

export const metadata = {
  title: 'Développement sur mesure',
  description:
    "NOVAR conçoit et développe des logiciels métiers sur mesure pour les entreprises ayant des besoins d'automatisation spécifiques : audit, architecture, développement, intégration, maintenance.",
};

const STEPS = [
  { icon: Search, title: '1. Audit & cadrage', desc: 'Nous analysons vos processus actuels, vos contraintes et vos objectifs pour définir un périmètre clair et un budget réaliste.' },
  { icon: Layers, title: '2. Architecture', desc: "Choix des technologies, modélisation des données, schéma d'intégration avec vos outils existants. Vous validez avant la première ligne de code." },
  { icon: Code, title: '3. Développement', desc: 'Sprints courts, démos régulières, code source livré. Tests automatisés et code review systématique.' },
  { icon: Plug, title: '4. Intégration', desc: 'Connexion à vos systèmes existants : ERP, CRM, e-commerce, paiement. APIs, webhooks, imports / exports.' },
  { icon: Wrench, title: '5. Maintenance', desc: "Formation des équipes, support continu, évolutions fonctionnelles, monitoring. Vous n'êtes jamais seul." },
];

export default function SurMesurePage() {
  return (
    <>
      <PageHero
        tone="amber"
        eyebrow="Services"
        title="Développement sur mesure."
        description="Pour les entreprises ayant des besoins d'automatisation spécifiques que nos produits ne couvrent pas. NOVAR conçoit et développe la solution logicielle qui correspond exactement à votre métier."
      />

      <section className="surface-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Notre méthode
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Cinq étapes, zéro mauvaise surprise.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <FeatureCard key={s.title} icon={s.icon} title={s.title} description={s.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Stack technique
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
              Des technologies modernes, choisies à bon escient.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-novar-line bg-white p-8">
              <h3 className="font-display text-lg font-semibold text-novar-ink mb-3">Frontend</h3>
              <p className="text-sm text-novar-muted mb-4">
                Applications web modernes et performantes, expérience utilisateur soignée.
              </p>
              <ul className="text-sm text-novar-ink-soft space-y-2">
                <li>· React · Next.js · TypeScript</li>
                <li>· Tailwind CSS · shadcn/ui</li>
                <li>· Tauri (desktop multi-OS)</li>
                <li>· React Native (mobile)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-novar-line bg-white p-8">
              <h3 className="font-display text-lg font-semibold text-novar-ink mb-3">Backend</h3>
              <p className="text-sm text-novar-muted mb-4">
                APIs robustes, bases de données fiables, infrastructure scalable.
              </p>
              <ul className="text-sm text-novar-ink-soft space-y-2">
                <li>· Node.js · Python · Rust</li>
                <li>· PostgreSQL · SQLite · Redis</li>
                <li>· Docker · Kubernetes</li>
                <li>· OVH, Scaleway, AWS Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
          <div className="rounded-3xl border border-novar-line bg-novar-surface-2 p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-novar-ink mb-4">
              Tarifs
            </h2>
            <p className="text-novar-muted mb-7 max-w-2xl leading-relaxed">
              Chaque projet est unique. Le prix dépend du périmètre, des
              intégrations, du niveau de maintenance souhaité. Le premier
              rendez-vous de cadrage est toujours gratuit — vous repartez
              avec un devis détaillé sous 5 jours ouvrés.
            </p>
            <Link href="/contact" className="btn-primary">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24 lg:pb-32">
          <CtaBanner
            title="Parlons de votre projet."
            description="30 minutes pour comprendre vos besoins. Sans engagement."
            primaryHref="/contact"
            primaryLabel="Démarrer la discussion"
          />
        </div>
      </section>
    </>
  );
}
