import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Foire aux questions',
  description:
    'Réponses aux questions fréquentes sur NOVAR, BIRDY (ERP OHADA) et FEEDORA (formulation avicole).',
};

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: 'Existe-t-il un essai gratuit pour BIRDY ?',
    a: "Oui. Tous les plans BIRDY ouvrent droit à 30 jours d'essai gratuit, sans carte bancaire. À la fin de la période, vous décidez librement de continuer, de changer de plan, ou de partir avec vos données.",
  },
  {
    q: 'BIRDY est-il vraiment conforme OHADA ?',
    a: "Oui, intégralement. BIRDY embarque le plan comptable SYSCOHADA révisé, génère le bilan, le compte de résultat, le TAFIRE, la liasse fiscale et le FEC au format réglementaire. Les barèmes IRPP et CNSS de la Guinée sont également pris en charge nativement.",
  },
  {
    q: 'Sur quelles plateformes BIRDY fonctionne-t-il ?',
    a: 'BIRDY est disponible aujourd\'hui sur Windows 10 et 11. Les versions macOS et Linux sont planifiées. L\'interface web complémentaire fonctionne sur tout navigateur récent (Chrome, Edge, Firefox, Safari).',
  },
  {
    q: 'Comment accéder à FEEDORA ?',
    a: "FEEDORA est un produit SaaS B2B accessible via le web. La plateforme actuelle est en ligne sur https://feedora-cyan.vercel.app/. Pour un accès professionnel à votre élevage, contactez-nous : nous configurons votre espace et vos formules de base.",
  },
  {
    q: 'Combien coûte un projet de développement sur mesure ?',
    a: "Les projets sur mesure sont chiffrés au cas par cas, après un cadrage gratuit. Comptez en général 4 à 12 semaines de développement selon la complexité. Nous proposons aussi un mode forfait mensuel pour les évolutions continues. Demandez un devis depuis la page Contact.",
  },
  {
    q: 'Quel niveau de support est inclus ?',
    a: "Tous les plans incluent la documentation en ligne, les tutoriels et le support par e-mail. Les plans supérieurs ouvrent un support prioritaire avec un SLA de réponse. Pour les déploiements Enterprise, un account manager dédié est rattaché à votre dossier.",
  },
  {
    q: 'BIRDY peut-il fonctionner hors ligne ?',
    a: "Oui. Les modules de vente (POS), la caisse, les encaissements et la consultation des données métier fonctionnent sans connexion. La synchronisation se fait dès que la connexion revient. Internet n'est requis que pour les sauvegardes cloud, les mises à jour et certaines intégrations.",
  },
  {
    q: 'Comment mes données sont-elles sauvegardées ?',
    a: "BIRDY effectue des sauvegardes locales quotidiennes chiffrées en AES-256. Les plans Pro et Enterprise ajoutent des sauvegardes cloud hebdomadaires (chez OVH ou AWS Africa selon votre choix). Stratégie 3-2-1 documentée. Vous pouvez aussi exporter à tout moment l'intégralité de votre base.",
  },
  {
    q: 'BIRDY supporte-t-il plusieurs utilisateurs simultanés ?',
    a: "Oui. Le plan Solo est limité à un utilisateur. Le plan Pro permet jusqu'à 5 utilisateurs avec des rôles distincts (gérant, comptable, caissier, etc.). Le plan Enterprise propose des utilisateurs illimités, multi-sociétés, et une gestion fine des permissions par rôle.",
  },
  {
    q: 'Comment se passent les mises à jour ?',
    a: "Les mises à jour sont automatiques et sans interruption de service. Chaque évolution réglementaire OHADA, chaque nouvelle fonctionnalité, chaque correctif est livré sans intervention de votre part. Vous pouvez consulter l'historique des versions dans votre espace client.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
        <div className="absolute inset-0 bg-dots opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            Foire aux questions
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-novar-ink">
            Vos questions, nos réponses.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-novar-muted leading-relaxed">
            10 questions fréquentes sur NOVAR, BIRDY et FEEDORA. Si la vôtre
            n&apos;y figure pas, écrivez-nous : nous répondons sous 24 heures.
          </p>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-3">
            {FAQS.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-novar-line bg-white open:border-novar-ink/20 open:shadow-soft transition-all"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display font-semibold text-novar-ink">
                    {item.q}
                  </span>
                  <ChevronDown className="h-4 w-4 flex-shrink-0 text-novar-muted transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-sm text-novar-ink-soft leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-novar-line bg-novar-surface-2 p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-novar-ink">
              Une autre question ?
            </h2>
            <p className="mt-2 text-sm text-novar-muted">
              Nous répondons sous 24 heures ouvrées via e-mail, Messenger ou le
              formulaire de contact.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-novar-ink hover:text-novar-accent transition-colors"
            >
              Nous contacter <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
