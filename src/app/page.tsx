import Link from 'next/link';
import { Search, Code, Plug, ArrowRight, Mail } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { CtaBanner } from '@/components/CtaBanner';
import { ProductSpotlight } from '@/components/ProductSpotlight';
import { ApproachCard } from '@/components/ApproachCard';
import { StatsSection } from '@/components/StatsSection';
import { UseCases } from '@/components/UseCases';
import { SITE } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* === Stats animées (counter Motion) ============================ */}
      <StatsSection />

      {/* === Notre modèle ============================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
                Notre modèle
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
                Studio logiciel à double moteur.
              </h2>
              <p className="mt-6 text-lg text-novar-muted leading-relaxed">
                Nous éditons des produits B2B accessibles à toute
                l&apos;Afrique, distribués gratuitement, et nous concevons
                des solutions logicielles sur mesure pour les entreprises qui
                veulent gagner en vitesse, en précision et en marge. Un seul
                partenaire technologique, deux leviers de transformation.
              </p>
            </div>

            <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
              <ApproachCard
                icon="layers"
                title="Produits B2B gratuits"
                description="Des plateformes prêtes à l'emploi pour des secteurs entiers — ERP OHADA, AgriTech avicole. Vous téléchargez, vous installez, vous démarrez en quelques minutes. Aucun abonnement, aucune carte bancaire, mises à jour à vie."
                href="/produits"
                cta="Découvrir nos produits"
                index={0}
                tone="cyan"
              />
              <ApproachCard
                icon="wrench"
                title="Développement sur mesure"
                description="Votre besoin métier ne rentre dans aucune case ? Nous concevons, développons et déployons la solution taillée pour vous — du cadrage stratégique à la mise en production, code source livré."
                href="/services/sur-mesure"
                cta="Lancer un projet"
                index={1}
                tone="amber"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === Nos produits — BIRDY + FEEDORA cote a cote interactifs */}
      <section id="produits" className="surface-alt">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Nos produits
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Deux plateformes B2B,<br />gratuites, en production.
            </h2>
            <p className="mt-5 text-lg text-novar-muted leading-relaxed">
              ERP OHADA pour PME et SaaS AgriTech pour fermes avicoles. Mêmes
              standards d&apos;ingénierie que les meilleurs logiciels mondiaux,
              pensés pour le terrain africain.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <ProductSpotlight
              logoVariant="birdy"
              name="BIRDY"
              tagline="ERP & gestion comptable OHADA — gratuit"
              description="L'ERP que les PME africaines attendaient : facturation, comptabilité OHADA, paie, stocks, caisse. En français, hors ligne, multi-devises. Installation en moins de 30 minutes."
              bullets={[
                'Facturation conforme',
                'Comptabilité OHADA · FEC',
                'Paie & RH (CNSS, IRPP)',
                'Stocks multi-dépôts',
                'Achats fournisseurs',
                'Fonctionne hors ligne',
              ]}
              actions={[
                { label: 'Télécharger gratuitement', href: '/telechargements', primary: true },
                { label: 'Découvrir BIRDY', href: '/produits/birdy-erp' },
              ]}
              index={0}
            />
            <ProductSpotlight
              logoVariant="feedora"
              name="FEEDORA"
              tagline="Formulation avicole — gratuit"
              description="Le SaaS AgriTech qui aide éleveurs et nutritionnistes à formuler des rations équilibrées, économiques et performantes. Multi-pays, multi-devises, accessible partout."
              bullets={[
                'Formulation intelligente',
                'Coût/kg & coût/tonne',
                'Standards zootechniques',
                'Multi-pays · multi-devises',
                'Historique des rations',
                'Rapports PDF pro',
              ]}
              actions={[
                { label: 'Accéder à FEEDORA', href: 'https://feedora-cyan.vercel.app/', primary: true, external: true },
                { label: 'En savoir plus', href: '/produits/feedora' },
              ]}
              index={1}
            />
          </div>
        </div>
      </section>

      {/* === Cas d'usage concrets ===================================== */}
      <UseCases />

      {/* === Services sur mesure ======================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
              Développement sur mesure
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-novar-ink leading-tight">
              Un défi d&apos;automatisation ?<br />
              Nous livrons la solution.
            </h2>
            <p className="mt-6 text-lg text-novar-muted leading-relaxed">
              Logiciel métier, intégration complexe, application mobile,
              automatisation back-office. NOVAR prend en charge l&apos;intégralité
              du projet — cadrage, architecture, développement, mise en
              production, maintenance — avec un code propre, livré, et un
              accompagnement long terme.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-px bg-novar-line rounded-2xl overflow-hidden border border-novar-line sm:grid-cols-3">
            {[
              { step: '01', icon: Search, title: 'Cadrage', desc: 'Audit métier, périmètre, budget, calendrier — tout est aligné avant la première ligne de code.', bg: 'bg-violet-50', text: 'text-violet-700', ring: 'ring-violet-200' },
              { step: '02', icon: Code, title: 'Construction', desc: 'Sprints courts, démos régulières, code source livré. Vous restez aux commandes du projet.', bg: 'bg-cyan-50', text: 'text-cyan-700', ring: 'ring-cyan-200' },
              { step: '03', icon: Plug, title: 'Mise en production', desc: 'Déploiement, formation des équipes, monitoring continu. Maintenance évolutive incluse.', bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200' },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.step} className="bg-white p-8 sm:p-10 transition-colors hover:bg-novar-surface-2">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${s.bg} ${s.text} ring-1 ${s.ring}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className={`font-mono text-xs font-semibold uppercase tracking-wider ${s.text}`}>
                      {s.step}
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-novar-ink">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-novar-muted">
                    {s.desc}
                  </p>
                </div>
              );
            })}
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
            title="Parlons de votre projet."
            description="Un premier échange de 30 minutes, sans engagement. Vous repartez avec une recommandation claire et exploitable — choix produit, périmètre sur mesure, ou simple orientation si ce n'est pas le bon moment."
            primaryHref="/contact"
            primaryLabel="Démarrer la conversation"
            secondaryHref="/demo"
            secondaryLabel="Réserver une démo"
          />
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-novar-muted">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${SITE.email}`} className="hover:text-novar-ink transition-colors">
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
