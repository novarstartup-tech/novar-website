import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Conditions générales de vente',
  description:
    'Conditions générales de vente NOVAR — utilisation des produits BIRDY, FEEDORA et des prestations de développement sur mesure.',
};

export default function CgvPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-novar-surface-2 to-white" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 pt-20 pb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-novar-accent">
            Légal
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold tracking-tight text-novar-ink">
            Conditions générales de vente
          </h1>
          <p className="mt-4 text-sm text-novar-muted">
            Dernière mise à jour : 9 mai 2026 · Version 1.1
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 lg:px-8 pb-20">
        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:tracking-tight prose-h2:text-novar-ink prose-h2:mt-10 prose-h2:text-2xl prose-p:text-novar-ink-soft prose-p:leading-relaxed prose-li:text-novar-ink-soft prose-strong:text-novar-ink prose-a:text-novar-accent">
          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (« CGV ») régissent la
            commercialisation des produits SaaS et des prestations de
            développement édités par <strong>{SITE.legalName}</strong>, ci-après
            désigné « NOVAR ». Elles s&apos;appliquent à toute souscription d&apos;un
            abonnement BIRDY ou FEEDORA et à toute mission de développement
            sur mesure ou de conseil.
          </p>
          <p>
            NOVAR est une entreprise enregistrée à Conakry (République de
            Guinée). Adresse de contact : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>2. Inscription et compte client</h2>
          <p>
            La souscription d&apos;un service NOVAR suppose la création d&apos;un
            compte client. Le client s&apos;engage à fournir des informations
            exactes (raison sociale, contact référent, e-mail) et à les
            maintenir à jour. Il est seul responsable de la confidentialité
            des identifiants de connexion qui lui sont remis.
          </p>
          <p>
            NOVAR se réserve le droit de refuser toute inscription qui ne
            respecterait pas la réglementation applicable ou les présentes CGV.
          </p>

          <h2>3. Tarifs et facturation</h2>
          <p>
            Les tarifs des abonnements BIRDY et FEEDORA sont publiés sur la
            page Tarifs. Les prestations de développement sur mesure et de
            conseil font l&apos;objet d&apos;un devis nominatif validé avant
            engagement.
          </p>
          <p>
            Les abonnements sont facturés mensuellement ou annuellement à la
            date d&apos;anniversaire. Les factures sont émises au format
            électronique. Le client s&apos;engage à régler dans les délais
            indiqués sur la facture (30 jours à réception sauf accord
            spécifique).
          </p>
          <p>
            NOVAR se réserve le droit de réviser ses tarifs ; toute évolution
            est notifiée aux abonnés en cours avec un préavis minimum de
            30 jours.
          </p>

          <h2>4. Engagement et résiliation</h2>
          <p>
            Les abonnements sont sans engagement de durée. Le client peut
            résilier à tout moment depuis son espace client ou par e-mail à
            l&apos;adresse de contact NOVAR. La licence reste active jusqu&apos;au
            terme de la période payée.
          </p>
          <p>
            En cas de manquement grave du client (impayé persistant, usage
            non conforme, atteinte à la sécurité de la plateforme), NOVAR peut
            suspendre ou résilier l&apos;abonnement après mise en demeure restée
            sans effet pendant 15 jours.
          </p>

          <h2>5. Support</h2>
          <p>
            NOVAR fournit un support technique selon le niveau prévu au plan
            souscrit. Le canal principal est l&apos;e-mail ; un support
            prioritaire est ouvert sur les plans supérieurs. Les délais de
            réponse cibles sont publiés sur la page Tarifs et dans la
            documentation.
          </p>

          <h2>6. Données personnelles</h2>
          <p>
            Les données saisies par le client dans BIRDY et FEEDORA restent
            sa propriété exclusive. NOVAR n&apos;y accède pas en dehors des
            opérations strictement nécessaires à la fourniture du service ou
            d&apos;une demande explicite de support de la part du client. La
            politique détaillée est disponible sur la page{' '}
            <Link href="/legal/privacy">Politique de confidentialité</Link>.
          </p>

          <h2>7. Propriété intellectuelle</h2>
          <p>
            Les logiciels, marques, documentations, contenus visuels et
            textuels édités par NOVAR sont protégés par le droit de la
            propriété intellectuelle. Le client bénéficie d&apos;un droit
            d&apos;usage non exclusif, non cessible et limité à la durée de
            son abonnement. Toute reproduction, modification, distribution ou
            décompilation non autorisée est strictement interdite.
          </p>
          <p>
            Pour les prestations de développement sur mesure, la propriété du
            code livré est précisée au cas par cas dans le devis ou le
            contrat de mission.
          </p>

          <h2>8. Limitation de responsabilité</h2>
          <p>
            NOVAR garantit la conformité de ses logiciels aux spécifications
            publiées. La responsabilité de NOVAR, toutes causes confondues,
            est limitée au montant payé par le client au cours des 12 mois
            précédant la survenance du dommage.
          </p>
          <p>
            NOVAR ne saurait être tenu responsable des conséquences indirectes
            (perte de chiffre d&apos;affaires, perte de clientèle, perte de
            données non sauvegardées par le client lui-même), ni des cas de
            force majeure (catastrophe naturelle, défaillance d&apos;une
            infrastructure publique, acte de cybercriminalité subi malgré les
            mesures de sécurité raisonnables).
          </p>

          <h2>9. Loi applicable</h2>
          <p>
            Les présentes CGV sont régies par le droit guinéen. Tout litige
            sera, à défaut de règlement amiable préalable, soumis à la
            juridiction compétente de Conakry.
          </p>
        </div>
      </article>
    </>
  );
}
