export const metadata = { title: 'Politique de confidentialité' };

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate dark:prose-invert">
      <h1>Politique de confidentialité</h1>
      <p className="text-sm text-slate-500">Dernière mise à jour : 1er mai 2026</p>

      <h2>1. Responsable du traitement</h2>
      <p>
        NOVAR (Conakry, Guinée), représenté par son fondateur Djerno Mahamoudou Diallo, est responsable des
        traitements de données effectués via le site novar.gn et l&apos;application BIRDY ERP. Contact :
        djernomahamoudoudiallo@gmail.com.
      </p>

      <h2>2. Données collectées</h2>
      <ul>
        <li><strong>Site web</strong> : adresse IP anonymisée (analytics), formulaire de contact (nom, email, message).</li>
        <li><strong>BIRDY ERP</strong> : compte utilisateur (email, mot de passe haché, rôle), logs d&apos;audit.</li>
        <li><strong>Données métier</strong> (vos clients, factures, écritures comptables) : restent stockées localement chez vous, jamais transférées sans votre consentement.</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <ul>
        <li>Fournir le service BIRDY conformément à l&apos;abonnement souscrit</li>
        <li>Assurer le support technique et l&apos;amélioration continue du produit</li>
        <li>Émettre les factures et gérer les paiements</li>
        <li>Communiquer sur les évolutions du produit (avec votre consentement)</li>
      </ul>

      <h2>4. Base légale</h2>
      <p>
        Exécution du contrat de service, intérêt légitime de NOVAR (sécurité, support), consentement explicite
        pour la communication marketing.
      </p>

      <h2>5. Durée de conservation</h2>
      <ul>
        <li>Données de compte : durée de l&apos;abonnement + 5 ans (obligation légale)</li>
        <li>Logs techniques : 12 mois</li>
        <li>Factures : 10 ans</li>
        <li>Données métier dans BIRDY : sous votre contrôle, vous décidez de leur durée</li>
      </ul>

      <h2>6. Sécurité</h2>
      <p>
        Toutes les communications sont chiffrées en TLS 1.3. Les sauvegardes cloud sont chiffrées AES-256
        avec une clé que seul vous possédez. Les mots de passe sont hachés avec Argon2. L&apos;authentification
        à deux facteurs est obligatoire pour les administrateurs.
      </p>

      <h2>7. Sous-traitants</h2>
      <p>
        Pour fournir le service, NOVAR peut faire appel à des sous-traitants : Resend (envoi e-mails),
        CinetPay (paiements), OVH ou AWS Africa (hébergement cloud sur option). Tous nos sous-traitants
        sont engagés à respecter la même politique de confidentialité.
      </p>

      <h2>8. Vos droits</h2>
      <p>
        Conformément aux exigences guinéennes en matière de protection des données et aux meilleures
        pratiques internationales (RGPD), vous disposez des droits suivants :
      </p>
      <ul>
        <li>Droit d&apos;accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l&apos;effacement (sous réserve des obligations légales de conservation)</li>
        <li>Droit à la portabilité</li>
        <li>Droit d&apos;opposition au marketing</li>
      </ul>
      <p>
        Pour exercer ces droits : djernomahamoudoudiallo@gmail.com.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Le site novar.gn utilise un strict minimum de cookies (essentiels uniquement, pas de tracking
        publicitaire). Aucun cookie tiers n&apos;est posé sans consentement explicite.
      </p>

      <h2>10. Modifications</h2>
      <p>
        NOVAR se réserve le droit de modifier cette politique pour refléter l&apos;évolution du produit ou de
        la réglementation. Les modifications substantielles sont notifiées par e-mail aux clients actifs avec
        un préavis de 30 jours.
      </p>
    </article>
  );
}
