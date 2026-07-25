# Visuels publicitaires BIRDY

> Dossier **non déployé** (hors `public/`) : stockage versionné des assets pub.
> Rien ici n'est servi par le site.

## Campagne « Sortez du cahier »

Angle : **BIRDY, l'ERP OHADA 100 % gratuit** — sortir du cahier/Excel.
Positionnement aligné avec la refonte de la landing (`src/components/MarketingPages.tsx`).

> ✅ **BIRDY couvre 3 modèles d'affaires : Commerce, Industrie, Service** — les 3
> variantes de bannière existent (voir tableau ci-dessous). Voir aussi
> `marketing/MARKETING-PLAN-BIRDY.md` §3 et §7.

Série **1 accroche unifiée (« Sortez du cahier »), 3 variantes par modèle d'affaires** :

| Modèle | Bannière finale (1024×1024) | Fond nu | Source HTML |
|--------|-----------------------------|---------|-------------|
| **Commerce** | `birdy-sortez-du-cahier-1x1.png` | `birdy-sortez-du-cahier-bg.png` | `birdy-sortez-du-cahier.html` |
| **Industrie** | `birdy-sortez-du-cahier-industrie-1x1.png` | `birdy-sortez-du-cahier-industrie-bg.png` | `birdy-sortez-du-cahier-industrie.html` |
| **Service** | `birdy-sortez-du-cahier-service-1x1.png` | `birdy-sortez-du-cahier-service-bg.png` | `birdy-sortez-du-cahier-service.html` |

Sous-titres par modèle : Commerce = ventes/caisse/stock/compta ; Industrie = recettes/ordres
de fabrication/coût de revient ; Service = devis/factures/prestations sans stock.

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
