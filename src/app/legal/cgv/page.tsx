export const metadata = { title: 'Conditions générales de vente' };

export default function CgvPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate dark:prose-invert">
      <h1>Conditions générales de vente</h1>
      <p className="text-sm text-slate-500">Dernière mise à jour : 1er mai 2026</p>

      <h2>1. Identification</h2>
      <p>
        NOVAR, entreprise de logiciels enregistrée à Conakry, République de Guinée. Adresse de contact :
        djernomahamoudoudiallo@gmail.com.
      </p>

      <h2>2. Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente régissent la commercialisation des logiciels et services
        proposés par NOVAR, en particulier l&apos;ERP BIRDY et les prestations de développement sur mesure.
      </p>

      <h2>3. Tarifs</h2>
      <p>
        Les tarifs sont exprimés en francs guinéens (GNF). Ils sont indiqués sur la page Tarifs du site.
        NOVAR se réserve le droit de modifier ses tarifs avec un préavis de 30 jours pour les abonnements
        existants.
      </p>

      <h2>4. Modalités de paiement</h2>
      <p>
        Le paiement s&apos;effectue par virement bancaire, Mobile Money (Orange Money, MTN MoMo) ou carte
        bancaire (via CinetPay). Les abonnements sont prélevés mensuellement ou annuellement à la date
        d&apos;anniversaire.
      </p>

      <h2>5. Essai gratuit et résiliation</h2>
      <p>
        Tous les plans BIRDY ouvrent droit à un essai gratuit de 30 jours sans engagement. Le client peut
        résilier son abonnement à tout moment ; la licence reste active jusqu&apos;à la fin de la période
        payée.
      </p>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        Les logiciels et leurs documentations sont la propriété exclusive de NOVAR. Toute reproduction,
        modification ou distribution non autorisée est interdite. Le client bénéficie d&apos;un droit
        d&apos;usage non exclusif et non cessible pour la durée de son abonnement.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Les données saisies par le client dans BIRDY restent sa propriété exclusive. NOVAR n&apos;y accède
        pas sauf demande explicite dans le cadre du support technique. La politique de confidentialité
        détaillée est accessible sur la page Confidentialité.
      </p>

      <h2>8. Garantie et responsabilité</h2>
      <p>
        NOVAR garantit la conformité de ses logiciels aux spécifications publiées. La responsabilité de NOVAR
        est limitée au montant payé par le client au cours des 12 mois précédant la survenance du dommage.
        NOVAR ne saurait être tenu responsable des conséquences indirectes (perte de chiffre d&apos;affaires,
        de clientèle, etc.).
      </p>

      <h2>9. Force majeure</h2>
      <p>
        NOVAR ne saurait être tenu responsable des retards ou inexécutions causés par des cas de force
        majeure (catastrophe naturelle, conflit armé, défaillance d&apos;infrastructure publique, etc.).
      </p>

      <h2>10. Loi applicable et juridiction</h2>
      <p>
        Les présentes CGV sont régies par le droit guinéen. Tout litige sera soumis à la juridiction
        compétente de Conakry, après tentative de règlement amiable préalable.
      </p>
    </article>
  );
}
