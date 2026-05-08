import Link from 'next/link';
import { ArrowRight, Users, Target, Globe, MapPin } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';
import { SITE } from '@/lib/site';

export const metadata = { title: 'À propos' };

export default function AProposPage() {
  return (
    <>
      <section className="bg-novar-cosmic py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-novar-cyan/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">À propos de NOVAR</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            {SITE.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Notre mission
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white">
              Démocratiser la fintech B2B en Afrique
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Trop de startups et PME africaines passent des mois à intégrer
              elles-mêmes Mobile Money, des passerelles bancaires fragmentées,
              des plateformes de paiement marchand mal documentées. Le résultat :
              des projets retardés, des coûts qui explosent, des équipes
              techniques épuisées avant même la mise en production.
            </p>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              NOVAR existe pour combler ce vide. Nous concevons les briques
              fintech B2B dont les entreprises africaines ont besoin :
              agrégation Mobile Money, passerelles bancaires unifiées,
              plateformes de paiement marchand, wallets B2B. En parallèle, nous
              éditons quelques plateformes métier verticales (BIRDY pour la
              gestion de stock, FEEDORA pour la formulation alimentaire
              avicole) pour les secteurs où aucun outil adapté n&apos;existe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-10">Nos valeurs</h2>
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
              description="Conakry est notre base. Nos outils sont calibrés pour la Guinée, l'Afrique de l'Ouest, et l'OHADA."
            />
            <FeatureCard
              icon={MapPin}
              title="Long terme"
              description="Nous bâtissons une entreprise pour durer, pas pour vendre vite. Nos clients comptent sur cette stabilité."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
                Notre vision
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 dark:text-white">
                Devenir la fintech B2B de référence en Afrique de l&apos;Ouest
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                Notre roadmap fintech : Novar Pay (passerelle Mobile Money
                unifiée), Novar Wallet (wallet marchand B2B), Novar Lend
                (facilité de crédit court terme PME), intégration directe avec
                les banques guinéennes et ouest-africaines. À chaque fois, la
                même exigence : sécurité bancaire, multi-devises, adapté au
                terrain africain.
              </p>
              <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                À long terme, nous voulons devenir la référence régionale en
                infrastructure fintech B2B : la startup ou la PME africaine qui
                cherche à intégrer un paiement, lancer un wallet ou demander
                un crédit pense d&apos;abord à NOVAR.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/produits"
                  className="inline-flex items-center gap-2 rounded-lg bg-novar-cosmic px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow"
                >
                  Voir le catalogue <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/equipe"
                  className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white"
                >
                  Notre équipe
                </Link>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-novar-cosmic to-slate-800 p-12 text-center">
              <div className="font-display text-5xl font-bold text-white">2024</div>
              <div className="mt-2 text-novar-cyan">Création de NOVAR</div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-2xl font-bold text-white">Conakry</div>
                  <div className="text-xs text-slate-400">Siège social</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Guinée</div>
                  <div className="text-xs text-slate-400">Pays de base</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Fintech</div>
                  <div className="text-xs text-slate-400">Cœur de métier</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">17</div>
                  <div className="text-xs text-slate-400">Pays cible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Travaillons ensemble"
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
