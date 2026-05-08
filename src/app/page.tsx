import Link from 'next/link';
import {
  Sparkles,
  Wifi,
  ScrollText,
  Boxes,
  Wrench,
  Compass,
  ArrowRight,
  Calculator,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { CtaBanner } from '@/components/CtaBanner';
import { LogoCloud } from '@/components/LogoCloud';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Approche */}
      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Notre approche
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Du contexte africain au code de production
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Nous concevons des outils qui tiennent compte des réalités locales : connexion intermittente,
              normes OHADA, paiements mobiles, multi-devises. Pas de copier-coller d&apos;outils étrangers
              mal adaptés.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Sparkles}
              title="Sur mesure"
              description="Chaque solution est pensée pour votre métier. Audit, architecture, développement, intégration : nous prenons en charge la chaîne complète."
            />
            <FeatureCard
              icon={ScrollText}
              title="OHADA natif"
              description="SYSCOHADA révisé, liasse fiscale, FEC, TAFIRE, IRPP & CNSS Guinée. La conformité n'est pas une option ajoutée — elle est intégrée dès la conception."
            />
            <FeatureCard
              icon={Wifi}
              title="Hors ligne d'abord"
              description="Nos applications fonctionnent sans connexion et synchronisent dès qu'Internet revient. Adapté aux coupures et aux zones rurales."
            />
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Notre catalogue
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Trois façons de travailler avec NOVAR
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Boxes}
              title="BIRDY ERP"
              description="Notre logiciel de gestion intégré. POS, stock, achats, comptabilité OHADA, RH/paie. Disponible immédiatement, en abonnement mensuel."
              href="/produits/birdy-erp"
              badge="Disponible"
            />
            <FeatureCard
              icon={Wrench}
              title="Solutions sur mesure"
              description="Vous avez un besoin spécifique ? Nous concevons et développons des logiciels métiers à votre image, depuis le cahier des charges jusqu'à la mise en production."
              href="/services/sur-mesure"
            />
            <FeatureCard
              icon={Compass}
              title="Conseil & accompagnement"
              description="Audit technique, choix de stack, architecture, formation des équipes. Nous vous aidons à prendre les bonnes décisions technologiques."
              href="/services/conseil"
            />
          </div>
        </div>
      </section>

      {/* BIRDY highlights */}
      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
                BIRDY ERP
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                L&apos;ERP pensé pour la PME guinéenne
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                BIRDY couvre l&apos;ensemble de vos opérations : ventes au comptoir, gestion du stock, achats,
                trésorerie, comptabilité OHADA, paie. Un seul outil, en français, optimisé pour fonctionner
                avec une connexion limitée.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <Calculator className="h-5 w-5 text-novar-cyan mt-0.5 flex-shrink-0" />
                  <span>Comptabilité SYSCOHADA révisé · liasse fiscale · TAFIRE · FEC</span>
                </li>
                <li className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-novar-cyan mt-0.5 flex-shrink-0" />
                  <span>Mobile Money intégré (Orange Money · MTN MoMo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-novar-cyan mt-0.5 flex-shrink-0" />
                  <span>Sauvegardes chiffrées · MFA · journal d&apos;audit complet</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/produits/birdy-erp"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cosmic px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow transition-colors"
                >
                  Explorer BIRDY
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 transition-colors"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-novar-cosmic to-slate-800 overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Boxes className="mx-auto h-16 w-16 text-novar-cyan opacity-60" />
                  <div className="mt-4 font-display text-2xl font-bold text-white">BIRDY ERP</div>
                  <div className="text-slate-400 text-sm mt-1">Aperçu de l&apos;application</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoCloud />

      {/* Final CTA */}
      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="Prêt à transformer votre idée en logiciel ?"
            description="Discutons de votre projet. Premier échange gratuit de 30 minutes."
            primaryHref="/contact"
            primaryLabel="Nous contacter"
            secondaryHref="/demo"
            secondaryLabel="Réserver une démo"
          />
        </div>
      </section>
    </>
  );
}
