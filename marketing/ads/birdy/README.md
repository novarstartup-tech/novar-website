# Visuels publicitaires BIRDY

> Dossier **non déployé** (hors `public/`) : stockage versionné des assets pub.
> Rien ici n'est servi par le site.

## Campagne « Sortez du cahier »

Angle : **BIRDY, l'ERP OHADA 100 % gratuit** — sortir du cahier/Excel.
Positionnement aligné avec la refonte de la landing (`src/components/MarketingPages.tsx`).

> ⚠️ **BIRDY couvre 3 modèles d'affaires : Commerce, Industrie, Service.**
> Cette bannière (mention « stock ») est la **variante Commerce**. Prévoir des variantes :
> **Industrie** (coût de revient fabriqué / recettes) et **Service** (devis & prestations,
> **sans** « stock »). Voir `marketing/MARKETING-PLAN-BIRDY.md` §3 et §7.

| Fichier | Rôle |
|---------|------|
| `birdy-sortez-du-cahier-1x1.png` | Bannière finale 1024×1024 (feed Instagram / LinkedIn / Facebook) |
| `birdy-sortez-du-cahier-bg.png` | Fond nu (photo générée par IA), réutilisable pour d'autres accroches |
| `birdy-sortez-du-cahier.html` | Source éditable (texte + overlay), référence le fond en relatif |

### Textes
- Badge : « 100 % Gratuit »
- Accroche : « Sortez du cahier. »
- Sous-titre : « Ventes, caisse, stock & comptabilité OHADA — réunis dans un seul logiciel, sur votre ordinateur. »
- CTA : « Télécharger BIRDY → novarstartup.com »
- Signature : NOVAR · SaaS Studio · Conakry

### Régénérer / éditer le PNG
1. Servir ce dossier : `npx serve marketing/ads/birdy` (ou tout serveur statique).
2. Ouvrir `birdy-sortez-du-cahier.html`, capturer en 1024×1024.

### À faire / améliorer
- Remplacer la signature texte « NOVAR » par le **vrai logo** (fichier à fournir).
- Décliner en **9:16** (story/reel) et **16:9** (bannière web).
- Ajouter de la **preuve sociale** (témoignage réel ou nombre de téléchargements) quand disponible — ne rien inventer.
