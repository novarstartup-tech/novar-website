# NOVAR — Inventaire des pages (20+)

Toutes les pages utilisent le composant partagé `<PageHero tone="..." />` pour leur hero (sauf la home qui a son propre `<Hero />`).

## Pages publiques principales

| Route | Rôle | Tone | Contenu clé |
|---|---|---|---|
| `/` | Home | Mixte | Hero orbital + Notre modèle (2 cards SaaS B2B / Sur mesure) + Plateformes (BIRDY+FEEDORA spotlights) + Méthode 3 étapes + CTA |
| `/produits` | Catalogue | cyan | Hero + 2 cards alternées BIRDY+FEEDORA + bloc dashed sur mesure + CtaBanner |
| `/produits/birdy-erp` | BIRDY ERP | cyan | Hero avec backdrop graphique compta + 8 modules en grille + bloc OHADA + balance compta + CtaBanner |
| `/produits/feedora` | FEEDORA | emerald | Hero avec backdrop volaille animé + 6 features + bloc bénéfices + recette formulation + CtaBanner |
| `/services/sur-mesure` | Dev sur mesure | amber | Hero + méthode 5 étapes (FeatureCards) + Stack tech 2 cards + Tarifs + CtaBanner |
| `/services/conseil` | Conseil | violet | Hero + 4 FeatureCards (Audit, Architecture, Formation, DSI) + CtaBanner |
| `/tarifs` | Tarifs BIRDY | cyan centré | Hero + PricingTable + ComparisonTable + FAQ + bloc sur mesure |
| `/telechargements` | Downloads | cyan centré | Hero avec DownloadButton + autres OS + sécurité MAJ + historique versions + config requise |

## Pages secondaires

| Route | Rôle | Tone |
|---|---|---|
| `/a-propos` | À propos | violet | Mission + Vision + Valeurs |
| `/equipe` | Équipe | violet | Founder Djerno + 3 postes ouverts |
| `/contact` | Contact | cyan | Formulaire + 5 canaux directs (Mail, WhatsApp emerald, Tél, Facebook, LinkedIn) |
| `/demo` | Démo | cyan | 3 étapes + ContactForm |
| `/faq` | FAQ | emerald | 10 questions accordion natif |
| `/tutoriels` | Tutoriels | (custom) | Filtre catégories sticky + 12 tutos cards |
| `/docs` | Documentation index | (custom) | 5 sections (Démarrage, Modules, OHADA, RH, Sécurité) |
| `/docs/[slug]` | Doc détail | (custom) | MDX rendu (26 docs) |
| `/blog` | Blog index | violet | 4 articles avec tags |
| `/blog/[slug]` | Article blog | (article) | MDX rendu |

## Légal

| Route | Rôle | Tone |
|---|---|---|
| `/legal/cgv` | CGV B2B | slate |
| `/legal/privacy` | Politique de confidentialité RGPD | slate |

## Compte utilisateur (placeholder)

| Route | Rôle |
|---|---|
| `/compte/login` | Login compte client (placeholder) |
| `/compte` | Espace client (placeholder) |

## Navigation principale (`<Header />`)

```
Produits ▼
  ├── BIRDY      (/produits/birdy-erp)
  └── FEEDORA    (/produits/feedora)
Services ▼
  ├── Développement sur mesure  (/services/sur-mesure)
  └── Conseil & accompagnement  (/services/conseil)
Tarifs       (/tarifs)
Documentation (/docs)
Blog          (/blog)
À propos      (/a-propos)
Contact       (/contact)
```

CTA droite : « Connexion » (lien) + bouton primary « Démarrer l'essai gratuit » (vers `/demo`)

## Footer (5 colonnes)

```
NOVAR (col 1) : logo + baseline + Mail + Tél + WhatsApp + 3 boutons sociaux (WhatsApp emerald, Facebook, LinkedIn)
Produits      : BIRDY · FEEDORA · Tarifs                  (dot cyan)
Services      : Développement sur mesure · Conseil         (dot amber)
Entreprise    : À propos · Équipe · Blog                   (dot violet)
Ressources    : Documentation · Tutoriels · Téléchargements · FAQ  (dot emerald)
Légal         : CGV · Confidentialité · Contact            (dot slate)
```

Mini-CTA en bas : « Une idée à concrétiser ? » → bouton primary « Démarrer la conversation »

## Build stats

- **60 pages statiques générées** (build production sans warning)
- First Load JS shared by all : 100 kB
- 4 articles blog MDX + 26 docs MDX
