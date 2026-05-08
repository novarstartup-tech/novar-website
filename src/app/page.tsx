import Link from 'next/link';
import {
  Sparkles,
  Wifi,
  Banknote,
  Boxes,
  Bird,
  Wrench,
  Compass,
  ArrowRight,
  CreditCard,
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
              NOVAR conçoit des solutions fintech B2B qui tiennent compte des
              réalités locales : Mobile Money, passerelles bancaires
              ouest-africaines, multi-devises (GNF, XOF, USD, EUR), connexion
              intermittente. Pas de copier-coller d&apos;outils étrangers mal
              adaptés.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Banknote}
              title="Fintech B2B"
              description="Intégrations Mobile Money (Orange, MTN, Wave), passerelles bancaires, plateformes de paiement marchand, wallets B2B. La fintech est notre cœur de métier."
            />
            <FeatureCard
              icon={Sparkles}
              title="Sur mesure"
              description="Audit, architecture, développement, intégration : nous prenons en charge la chaîne complète pour transformer vos besoins métier en outils performants."
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
              Notre offre
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Trois façons de travailler avec NOVAR
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Au-delà de notre activité fintech principale, nous éditons aussi
              des plateformes métier verticales pour des secteurs précis.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon={Banknote}
              title="Solutions fintech"
              description="Mobile Money · Passerelles bancaires · Paiement marchand · Wallets B2B. Conçues pour startups et PME africaines."
              href="/services/sur-mesure"
              badge="Cœur de métier"
            />
            <FeatureCard
              icon={Wrench}
              title="Logiciels sur mesure"
              description="Vous avez un besoin spécifique ? Nous concevons et développons des logiciels métiers à votre image, du cahier des charges à la mise en production."
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

      {/* Plateformes métier */}
      <section className="py-20 bg-white dark:bg-novar-cosmic">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
              Plateformes verticales
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Deux produits B2B en production
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              NOVAR édite également des plateformes métier indépendantes pour
              répondre à des besoins sectoriels précis.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              icon={Boxes}
              title="BIRDY"
              description="Plateforme de gestion de stock pour boutiques et PME. Suivi des entrées/sorties, multi-dépôts, alertes seuils, hors ligne par défaut. Conçu pour le marché ouest-africain."
              href="/produits/birdy-erp"
              badge="En production"
            />
            <FeatureCard
              icon={Bird}
              title="FEEDORA"
              description="Plateforme de gestion et formulation alimentaire pour fermes avicoles. Calcul de rations équilibrées, multi-pays (CI, Mali, Sénégal, Bénin, Guinée), rapports PDF. SaaS B2B."
              href="/produits/feedora"
              badge="En production"
            />
          </div>
        </div>
      </section>

      {/* Fintech highlights */}
      <section className="py-20 bg-slate-50 dark:bg-novar-cosmic-2/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-semibold text-novar-blue dark:text-novar-cyan uppercase tracking-wider">
                Solutions fintech
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                La fintech B2B, pensée pour l&apos;Afrique
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Nous concevons et déployons les briques fintech dont les
                startups et PME africaines ont besoin : agrégation Mobile
                Money, passerelles bancaires, plateformes de paiement
                marchand, wallets et facilités de crédit court terme.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-novar-cyan mt-0.5 flex-shrink-0" />
                  <span>Mobile Money : Orange Money · MTN MoMo · Wave · agrégation unifiée</span>
                </li>
                <li className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-novar-cyan mt-0.5 flex-shrink-0" />
                  <span>Passerelles bancaires & cartes (visa / mastercard local)</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-novar-cyan mt-0.5 flex-shrink-0" />
                  <span>Sécurité bancaire · chiffrement bout-en-bout · journal d&apos;audit</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/services/sur-mesure"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-novar-cosmic px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900 dark:bg-novar-cyan dark:text-novar-cosmic dark:hover:bg-novar-cyan-glow transition-colors"
                >
                  Voir nos services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 transition-colors"
                >
                  Discuter d&apos;un projet
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-novar-cosmic to-slate-800 overflow-hidden border border-slate-200 dark:border-slate-800">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Banknote className="mx-auto h-16 w-16 text-novar-cyan opacity-60" />
                  <div className="mt-4 font-display text-2xl font-bold text-white">Fintech B2B</div>
                  <div className="text-slate-400 text-sm mt-1">Mobile Money · Banque · Paiement marchand</div>
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
