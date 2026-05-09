import Link from 'next/link';
import { ArrowRight, Users, Target, Globe, MapPin } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata = { title: 'À propos' };

export default function AProposPage() {
  return (
    <>
      <PageHero
        tone="violet"
        eyebrow="À propos"
        title="Un SaaS Studio basé à Conakry."
        description={SITE.description}
      />

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
                <Link href="/equipe" className="btn-ghost">
                  Notre équipe
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32">
          <CtaBanner
            title="Travaillons ensemble."
            description="Que vous soyez une PME, une startup ou une organisation, nous serions ravis d'échanger sur vos enjeux."
            primaryHref="/contact"
            secondaryHref="/equipe"
            secondaryLabel="Rencontrer l'équipe"
          />
        </div>
      </section>
    </>
  );
}
