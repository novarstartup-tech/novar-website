import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { FAQPageJsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Foire aux questions',
  description:
    'Réponses aux questions fréquentes sur NOVAR, BIRDY (ERP OHADA) et FEEDORA (formulation avicole).',
};

type FAQ = { q: string; a: string };

const FAQS: FAQ[] = [
  {
    q: 'Combien coûte BIRDY ?',
    a: "Rien. BIRDY est un logiciel propriétaire distribué gratuitement (freeware). Vous le téléchargez, vous l'installez, vous l'utilisez pour votre activité — personnelle ou commerciale — sans abonnement, sans carte bancaire, sans limite de durée. Le code source reste la propriété de NOVAR. Voir l'EULA.",
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
    a: "BIRDY étant gratuit, le support standard est communautaire : documentation publique, tutoriels, et e-mail (réponse sous 48h). Pour du support prioritaire, de la formation sur site, ou de l'accompagnement comptable dédié, NOVAR propose des prestations sur devis depuis la page Services.",
  },
  {
    q: 'BIRDY peut-il fonctionner hors ligne ?',
    a: "Oui, c'est même son design par défaut. BIRDY tourne entièrement en local sur votre poste, dans une base SQLite chiffrée. Aucune connexion Internet n'est requise pour l'usage quotidien : ventes, caisse, comptabilité, paie. Internet n'est utile que pour les mises à jour, l'envoi d'e-mails (factures clients) et l'authentification Google si vous l'activez.",
  },
  {
    q: 'Comment mes données sont-elles sauvegardées ?',
    a: "BIRDY conserve vos données dans une base SQLite locale. Les secrets sensibles (mots de passe SMTP, clés API, secrets MFA) sont chiffrés AES-256-GCM avec une clé master stockée dans le coffre-fort de l'OS (Windows Credential Manager / macOS Keychain). Vous pouvez exporter à tout moment l'intégralité de votre base via le module Sauvegardes intégré.",
  },
  {
    q: 'BIRDY supporte-t-il plusieurs utilisateurs simultanés ?',
    a: "Oui, sans limite. Vous créez autant d'utilisateurs que nécessaire (gérant, comptable, caissier, vendeur, RH…) avec des rôles et permissions distincts. Authentification Argon2id, sessions tokens 30 jours, MFA TOTP optionnel, audit log systématique. Aucun surcoût par utilisateur.",
  },
  {
    q: 'Comment se passent les mises à jour ?',
    a: "Les nouvelles versions sont publiées sur la page Téléchargements. Vous installez la mise à jour quand vous voulez — votre base de données reste intacte entre les versions. NOVAR publie les évolutions réglementaires OHADA (taux IRPP, CNSS, plan comptable…) en continu.",
  },
];

export default function FaqPage() {
  return (
    <>
      <FAQPageJsonLd items={FAQS.map(({ q, a }) => ({ q, a }))} />
      <PageHero
        tone="emerald"
        eyebrow="Foire aux questions"
        title="Vos questions, nos réponses."
        description="10 questions fréquentes sur NOVAR, BIRDY et FEEDORA. Si la vôtre n'y figure pas, écrivez-nous : nous répondons sous 24 heures."
      />

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
