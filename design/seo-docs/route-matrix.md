# Inventaire des routes — canonical, langue, hreflang

40 URL. Deux régimes : bilingue (quatre alternates réciproques) et FR seul
(aucun alternate — annoncer un /en inexistant est pire que ne rien annoncer).

## Routes bilingues — 13 paires, 26 URL

| Route FR | Route EN | Priorité | lastmod | Écran de la maquette |
|---|---|---|---|---|
| `/` | `/en` | 1.0 | révision | Accueil |
| `/produits` | `/en/solutions` | 0.8 | révision | Produits |
| `/produits/birdy-erp` | `/en/products/birdy` | 0.9 | release BIRDY | BIRDY |
| `/produits/feedora` | `/en/products/feedora` | 0.8 | révision | FEEDORA |
| `/telechargements` | `/en/downloads` | 0.9 | release BIRDY | Téléchargements |
| `/services/sur-mesure` | `/en/services/custom-software` | 0.8 | révision | Solutions sur mesure |
| `/services/conseil` | `/en/services/advisory` | 0.8 | révision | Conseil |
| `/a-propos` | `/en/about` | 0.7 | révision | À propos |
| `/contact` | `/en/contact` | 0.8 | révision | Contact |
| `/tutoriels` | `/en/guides` | 0.7 | révision | Guides |
| `/securite` | `/en/security` | 0.5 | révision | Sécurité |
| `/legal/privacy` | `/en/legal/privacy` | 0.5 | révision | Confidentialité |
| `/legal/cgv` | `/en/legal/terms` | 0.5 | révision | CGV |

Chaque URL de la paire porte les quatre mêmes alternates, y compris son
auto-référence : `fr`, `fr-GN`, `en`, `x-default` (= FR). Un alternate non
réciproque ou non auto-référentiel est ignoré par Google.

## Routes FR uniquement — 14 URL

| Route | Priorité | Écran de la maquette | EN à décliner |
|---|---|---|---|
| `/logiciels` | 0.8 | Logiciels (hub) | oui |
| `/logiciels/facturation-ohada` | 0.7 | — | oui |
| `/logiciels/caisse` | 0.7 | — | oui |
| `/logiciels/gestion-de-stock` | 0.7 | — | oui |
| `/logiciels/comptabilite-ohada` | 0.7 | — | oui |
| `/logiciels/guinee` | 0.7 | — | oui |
| `/logiciels/senegal` | 0.7 | Sénégal | oui |
| `/logiciels/cote-d-ivoire` | 0.7 | — | oui |
| `/logiciels/mali` | 0.7 | — | oui |
| `/logiciels/benin` | 0.7 | — | oui |
| `/logiciels/cameroun` | 0.7 | — | oui |
| `/docs` | 0.8 | Documentation | non prioritaire |
| `/blog` | 0.7 | Analyses | non prioritaire |
| `/faq` | 0.7 | FAQ | oui |

## Routes générées — hors du fichier statique

| Famille | Source | lastmod | Priorité |
|---|---|---|---|
| `/docs/<slug>` | `flattenDocs()` | front-matter `updated` | 0.6 |
| `/blog/<slug>` | `BLOG_POSTS` | `updated` sinon `date` | 0.6 |

Ces deux familles ne peuvent pas figurer dans un XML figé : leur date doit
suivre le contenu. C'est la raison d'être de `seo/sitemap.ts`, à préférer au
`sitemap.xml` statique si le rendu Next reste en place.

## Écrans de la maquette sans route publiée

`/docs/<slug>` (l'écran « Installation ») et `/blog/<slug>` (l'article OHADA)
existent dans la maquette comme spécimens de gabarit. Ils prennent leur URL
réelle du slug du contenu, pas d'une route fixe.
