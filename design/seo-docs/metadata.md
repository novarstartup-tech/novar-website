# Métadonnées par page — NOVAR

Règles appliquées : titre ≤ 60 caractères, description 140–160 caractères, verbe
d'action, entité nommée en premier, pas de « Bienvenue sur ». Chaque page porte
son canonical et ses alternates hreflang (fr, fr-GN, en, x-default).

| Route | Title | Description |
|---|---|---|
| `/` | NOVAR — SaaS Studio à Conakry, Guinée | NOVAR édite BIRDY et FEEDORA et conçoit des logiciels sur mesure pour les PME de l'espace OHADA. SaaS Studio basé à Conakry, Guinée. |
| `/produits` | Produits NOVAR — BIRDY et FEEDORA | Deux produits gratuits édités par NOVAR : BIRDY, ERP et comptabilité OHADA, et FEEDORA, formulation alimentaire avicole. |
| `/produits/birdy-erp` | BIRDY — Logiciel de gestion et comptabilité OHADA gratuit | BIRDY facture, encaisse et tient la comptabilité SYSCOHADA. Gratuit, sans abonnement, hors ligne, pour Windows, macOS et Linux. |
| `/produits/feedora` | FEEDORA — Formulation alimentaire avicole gratuite | Composez et comparez vos formules alimentaires avicoles, suivez le coût au kilo et à la tonne. Application web gratuite éditée par NOVAR. |
| `/telechargements` | Télécharger BIRDY 26.0.12 — Windows, macOS, Linux | Téléchargez BIRDY gratuitement pour Windows, macOS ou Linux. Aucun compte, aucun abonnement, installation en moins de cinq minutes. |
| `/services/sur-mesure` | Développement de logiciels sur mesure — NOVAR | NOVAR conçoit des applications métier et des automatisations à partir de vos opérations réelles. Cadrage, développement et accompagnement. |
| `/services/conseil` | Conseil et accompagnement technologique — NOVAR | Audit technique, architecture, formation et DSI externalisée pour les PME et organisations d'Afrique de l'Ouest et centrale. |
| `/docs` | Documentation BIRDY — installation, modules, OHADA | 26 pages pour installer BIRDY, utiliser ses modules, tenir la comptabilité SYSCOHADA et gérer la paie. Documentation gratuite en français. |
| `/tutoriels` | Tutoriels BIRDY — parcours pratiques pas à pas | Parcours courts pour émettre une facture, tenir la caisse, faire un inventaire, préparer un export FEC ou établir la paie mensuelle. |
| `/blog` | Analyses NOVAR — OHADA, ERP et AgriTech | Ce que nous apprenons en construisant des logiciels de gestion pour l'espace OHADA : comptabilité, produit, terrain africain. |
| `/faq` | FAQ BIRDY — gratuité, OHADA, hors ligne, devises | BIRDY est-il vraiment gratuit ? Conforme au SYSCOHADA ? Fonctionne-t-il sans Internet ? Les réponses aux questions les plus posées. |
| `/a-propos` | À propos de NOVAR — SaaS Studio africain | NOVAR construit un portefeuille de produits utiles et accompagne les organisations d'Afrique de l'Ouest. Studio basé à Conakry, Guinée. |
| `/contact` | Contacter NOVAR — démonstration et devis | Parlons de BIRDY, d'une démonstration ou d'un projet sur mesure. Réponse sous un jour ouvré, en français, par e-mail ou WhatsApp. |
| `/securite` | Sécurité du site NOVAR | Surface publique réduite, en-têtes de sécurité, dépendances auditées et procédure de signalement responsable. |
| `/legal/privacy` | Politique de confidentialité — NOVAR | Données collectées, finalité, conservation et vos droits. Vos données comptables BIRDY restent sur votre poste. |
| `/legal/cgv` | Conditions d'utilisation et de prestation — NOVAR | Produits gratuits, prestations sur devis, propriété intellectuelle et responsabilités. |
| `/logiciels/facturation-ohada` | Logiciel de facturation OHADA gratuit — BIRDY | Émettez devis, factures et avoirs avec les mentions légales attendues dans l'espace OHADA. Gratuit, hors ligne, multi-devises. |
| `/logiciels/caisse` | Logiciel de caisse gratuit pour PME africaines | Encaissements rapides, sessions de caisse, tickets et point de vente. BIRDY fonctionne hors ligne, sans abonnement. |
| `/logiciels/gestion-de-stock` | Logiciel de gestion de stock gratuit — multi-dépôts | Mouvements, inventaires et valorisation sur plusieurs dépôts. Gratuit et connecté à la comptabilité OHADA. |
| `/logiciels/comptabilite-ohada` | Logiciel de comptabilité OHADA / SYSCOHADA gratuit | Plan SYSCOHADA révisé, TVA, lettrage, export FEC, liasse fiscale et TAFIRE. Gratuit, édité par NOVAR. |
| `/logiciels/guinee` | Logiciel de gestion gratuit en Guinée — GNF | BIRDY facture et tient la comptabilité en francs guinéens, au plan SYSCOHADA, et fonctionne malgré les coupures. |
| `/logiciels/senegal` | Logiciel de gestion commerciale gratuit au Sénégal | BIRDY facture, encaisse et tient la comptabilité en FCFA, TVA à 18 %, plan SYSCOHADA, fonctionnement hors ligne. |
| `/logiciels/cote-d-ivoire` | Logiciel de gestion gratuit en Côte d'Ivoire — FCFA | Facturation, caisse et comptabilité SYSCOHADA en francs CFA, adaptées aux obligations ivoiriennes. Gratuit. |
| `/logiciels/mali` | Logiciel de gestion gratuit au Mali — FCFA | BIRDY tient vos comptes au plan SYSCOHADA en vigueur au Mali, en FCFA, sans abonnement et sans connexion. |
| `/logiciels/benin` | Logiciel de gestion gratuit au Bénin — FCFA | Facturation conforme, caisse et comptabilité SYSCOHADA en FCFA pour les PME béninoises. Gratuit et hors ligne. |
| `/logiciels/cameroun` | Logiciel de gestion gratuit au Cameroun — FCFA/XAF | BIRDY gère la TVA à 19,25 %, le plan SYSCOHADA et les montants en XAF. Gratuit, sans abonnement. |

## Open Graph / Twitter — valeurs communes

```
og:site_name   NOVAR
og:type        website        (article sur /blog/*, /docs/*)
og:locale      fr_FR          (alternate: en_US)
og:image       https://www.novarstartup.com/og/<route>.png    1200×630, texte ≥ 40px
twitter:card   summary_large_image
```

Une image OG par page pivot (accueil, BIRDY, FEEDORA, téléchargements, chaque pays).
Une image générique ne se cite pas : les moteurs de réponse reprennent souvent
l'image OG comme vignette de citation.
