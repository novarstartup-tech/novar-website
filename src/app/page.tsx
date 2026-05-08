import Link from 'next/link';
import {
  Boxes,
  Bird,
  Layers,
  Wrench,
  ArrowRight,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { CtaBanner } from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* === Notre modèle ============================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
                Notre modèle
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
                Un SaaS Studio à double approche.
              </h2>
              <p className="mt-6 text-lg text-novar-muted leading-relaxed">
                NOVAR ne se contente pas d&apos;une seule façon de créer de la
                valeur. Nous combinons l&apos;édition de produits SaaS B2B
                pensés pour des secteurs précis et le développement de
                solutions sur mesure pour les entreprises qui ont des besoins
                d&apos;automatisation singuliers.
              </p>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-novar-line bg-white p-8 transition-all hover:shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-novar-ink">
                  Produits SaaS B2B
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-novar-muted">
                  Des plateformes packagées pour des secteurs entiers. Vous
                  vous abonnez, vous démarrez en quelques minutes, vous
                  bénéficiez de toutes les améliorations à venir.
                </p>
                <Link href="/produits" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-novar-ink hover:gap-2 transition-all">
                  Voir nos produits <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="rounded-2xl border border-novar-line bg-white p-8 transition-all hover:shadow-soft">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-novar-surface-2 text-novar-ink ring-1 ring-novar-line">
                  <Wrench className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-novar-ink">
                  Développement sur mesure
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-novar-muted">
                  Votre besoin métier ne rentre dans aucune case ? Nous
                  concevons et développons une solution logicielle taillée
                  pour vous, du cahier des charges à la mise en production.
                </p>
                <Link href="/services/sur-mesure" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-novar-ink hover:gap-2 transition-all">
                  Discuter d&apos;un projet <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Nos produits SaaS ========================================= */}
      <section id="produits" className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Nos produits SaaS
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Deux plateformes B2B en production.
            </h2>
            <p className="mt-5 text-lg text-novar-muted leading-relaxed">
              Chaque produit est conçu pour résoudre un problème métier précis,
              avec la même exigence : utile, fiable, simple à adopter.
            </p>
          </div>

          {/* BIRDY */}
          <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-novar-line bg-white px-3 py-1 text-xs font-medium text-novar-muted">
                <Boxes className="h-3.5 w-3.5 text-novar-ink" />
                BIRDY
              </div>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
                L&apos;ERP OHADA pensé pour les PME africaines.
              </h3>
              <p className="mt-5 text-lg text-novar-muted leading-relaxed">
                BIRDY est un logiciel de gestion comptable OHADA complet.
                Facturation, comptabilité, paie, stocks — tout est centralisé
                dans un outil moderne, en français, qui s&apos;installe en
                quelques minutes.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  'Facturation conforme et automatisée',
                  'Comptabilité OHADA (SYSCOHADA, liasse fiscale, FEC)',
                  'Paie, stocks, achats — tout dans un seul outil',
                  "Multi-devises et fonctionnement hors ligne",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-novar-ink-soft">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-novar-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/produits/birdy-erp" className="btn-primary">
                  Découvrir BIRDY <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/tarifs" className="btn-ghost">
                  Voir les tarifs
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-novar-line bg-white p-8 sm:p-12 shadow-soft">
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Compte 411 — Clients</span>
                  <span className="font-semibold text-novar-ink">12 450 000 GNF</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Compte 401 — Fournisseurs</span>
                  <span>−4 320 000 GNF</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Compte 521 — Banque</span>
                  <span className="font-semibold text-novar-ink">28 100 000 GNF</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Compte 4456 — TVA déductible</span>
                  <span>1 240 000 GNF</span>
                </div>
                <div className="border-t border-novar-line pt-4 mt-4 flex items-center justify-between font-semibold text-novar-ink">
                  <span>Résultat de l&apos;exercice</span>
                  <span className="text-novar-accent">+18 920 000 GNF</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEEDORA */}
          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-novar-line bg-white px-3 py-1 text-xs font-medium text-novar-muted">
                <Bird className="h-3.5 w-3.5 text-novar-ink" />
                FEEDORA
              </div>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-novar-ink">
                L&apos;AgriTech B2B pour les fermes avicoles.
              </h3>
              <p className="mt-5 text-lg text-novar-muted leading-relaxed">
                FEEDORA aide les éleveurs et nutritionnistes à formuler des
                aliments pour volailles équilibrés, économiques et performants.
                Une plateforme conçue par et pour les professionnels de
                l&apos;avicole.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  'Formulation intelligente (poulet, pondeuse, dinde…)',
                  "Calcul du coût/kg et coût/tonne en temps réel",
                  'Vérification automatique des besoins nutritionnels',
                  'Rapports PDF haute qualité',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-novar-ink-soft">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-novar-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href="/produits/feedora" className="btn-primary">
                  Découvrir FEEDORA <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://feedora-cyan.vercel.app/"
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  Accéder à l&apos;application
                </a>
              </div>
            </div>
            <div className="lg:order-1 rounded-3xl border border-novar-line bg-white p-8 sm:p-12 shadow-soft">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Maïs jaune</span>
                  <span className="font-mono text-novar-ink">52,4 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Tourteau de soja 48</span>
                  <span className="font-mono text-novar-ink">28,1 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Son de blé</span>
                  <span className="font-mono text-novar-ink">12,0 %</span>
                </div>
                <div className="flex items-center justify-between text-novar-muted">
                  <span>Phosphate bicalcique</span>
                  <span className="font-mono text-novar-ink">1,8 %</span>
                </div>
                <div className="border-t border-novar-line pt-4 mt-4 flex items-center justify-between font-semibold text-novar-ink">
                  <span>Coût / tonne</span>
                  <span className="text-novar-accent font-mono">312 400 XOF</span>
                </div>
                <div className="text-xs text-novar-muted mt-1">
                  Énergie : 2 920 kcal · Protéines : 19,2 % · Lysine : 1,12 %
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Services sur mesure ======================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Développement sur mesure
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Un problème d&apos;automatisation ?<br />
              Nous concevons la solution.
            </h2>
            <p className="mt-6 text-lg text-novar-muted leading-relaxed">
              Si votre besoin métier ne rentre dans aucune case, parlons-en.
              Nos équipes prennent en charge l&apos;intégralité du projet : audit,
              architecture, développement, intégration, mise en production et
              maintenance. Du cahier des charges au déploiement.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-px bg-novar-line rounded-2xl overflow-hidden border border-novar-line sm:grid-cols-3">
            {[
              { step: '01', title: 'Cadrage', desc: 'Audit métier, périmètre, budget, calendrier — tout est aligné avant la première ligne de code.' },
              { step: '02', title: 'Construction', desc: 'Sprints courts, démos régulières, code source livré. Vous restez aux commandes du projet.' },
              { step: '03', title: 'Mise en production', desc: 'Déploiement, formation des équipes, monitoring continu. Maintenance évolutive incluse.' },
            ].map((s) => (
              <div key={s.step} className="bg-white p-8 sm:p-10">
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-novar-accent">
                  {s.step}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold text-novar-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-novar-muted">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/services/sur-mesure" className="btn-primary">
              Voir notre méthode <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* === Contact / CTA final ====================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 md:pb-32">
          <CtaBanner
            title="Discutons de votre projet."
            description="Premier échange gratuit de 30 minutes. Vous repartez avec une recommandation claire — produit SaaS, sur mesure, ou rien du tout si ce n'est pas pertinent."
            primaryHref="/contact"
            primaryLabel="Nous contacter"
            secondaryHref="/demo"
            secondaryLabel="Réserver une démo"
          />
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-novar-muted">
            <Mail className="h-4 w-4" />
            <a href="mailto:djernomahamoudoudiallo@gmail.com" className="hover:text-novar-ink transition-colors">
              djernomahamoudoudiallo@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
