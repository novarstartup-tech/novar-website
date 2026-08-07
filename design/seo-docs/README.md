# Paquet SEO / AEO — NOVAR

Objectif double : être bien classé dans les moteurs de recherche **et** être
repris comme source par les moteurs de réponse (ChatGPT, Claude, Perplexity,
Gemini, AI Overviews). Les deux ne demandent pas la même chose.

## Contenu du paquet

| Fichier | Destination dans le dépôt | Rôle |
|---|---|---|
| `robots.txt` | `public/robots.txt` — et supprimer `src/app/robots.ts` | Autorise explicitement les 22 agents de crawl et d'IA |
| `llms.txt` | `public/llms.txt` (remplace l'existant) | Fiche d'identité lisible par les IA, avec réponses citables |
| `structured-data.ts` | `src/lib/structured-data.ts` | Générateurs JSON-LD schema.org |
| `metadata.md` | référence | Titles, descriptions et OG par page |
| `sitemap.ts` | `src/app/sitemap.ts` (remplace l'existant) | Sitemap complet, 40 URL, hreflang par route |
| `sitemap.xml` | `public/sitemap.xml` — seulement si le rendu Next est retiré | Équivalent statique |
| `route-matrix.md` | référence | Inventaire des 40 routes : canonical, langue, priorité |
| `og/*.png` | `public/og/` | Six vignettes de partage 1200×630 (voir `og/README.md`) |
| `sitemap-additions.md` | référence | Justification des écarts avec le sitemap actuel |

## Montage des données structurées

```tsx
// src/app/layout.tsx — une seule fois, sur toutes les pages
import { organizationLd, webSiteLd } from '@/lib/structured-data';
<JsonLd data={organizationLd()} />
<JsonLd data={webSiteLd()} />

// src/app/produits/birdy-erp/page.tsx
import { birdyLd, breadcrumbLd } from '@/lib/structured-data';
<JsonLd data={birdyLd()} />
<JsonLd data={breadcrumbLd([{ name: 'Produits', path: '/produits' }, { name: 'BIRDY', path: '/produits/birdy-erp' }])} />

// src/app/telechargements/page.tsx
<JsonLd data={installHowToLd()} />

// src/app/faq/page.tsx — reprendre EXACTEMENT le texte visible
<JsonLd data={faqLd(FAQ_ITEMS)} />
```

## Deux champs à ajouter dans le dépôt

`seo/sitemap.ts` compile tel quel, mais date les documentations et les articles
à la révision globale, faute de dates par contenu. Pour dater chaque page :

```ts
// src/lib/docs.ts — flattenDocs(): { slug, title, category }
export type DocMeta = { slug: string; title: string; category: string; updated?: string };

// src/lib/blog.ts — BlogMeta
export type BlogMeta = { slug: string; title: string; date: string; updated?: string };
```

Les deux lignes à décommenter dans `sitemap.ts` sont signalées en commentaire.
Ça vaut le détour : la fraîcheur par document pèse dans les citations d'IA, et
un site dont 60 URL portent la même date est traité comme un bloc figé.

## Ce qui compte pour les moteurs de réponse

1. **Une réponse par question, en tête de page.** Les IA extraient le premier
   paragraphe qui répond littéralement. `llms.txt` en contient déjà quinze.
2. **Des phrases autonomes.** « BIRDY est un logiciel de comptabilité OHADA
   gratuit édité par NOVAR » se cite ; « Notre solution vous accompagne » non.
3. **Des chiffres et des dates.** Version 26.0.12, 12 juillet 2026, TVA 18 %,
   26 pages de documentation. Le concret est repris, le vague est ignoré.
4. **Cohérence entre le visible et le balisé.** Un FAQPage dont les réponses ne
   figurent pas dans la page est une pénalité, pas un bonus.
5. **Fraîcheur.** `dateModified` réel sur chaque doc et article.
6. **Entité stable.** Le même `@id` d'Organization sur toutes les pages relie le
   graphe ; `sameAs` vers LinkedIn et Facebook confirme l'identité.

## À vérifier après déploiement

- `https://www.novarstartup.com/robots.txt` et `https://www.novarstartup.com/llms.txt` répondent en 200
- Search Console : sitemap soumis, couverture sans erreur
- Test des résultats enrichis Google sur BIRDY, FAQ et Téléchargements
- Bing Webmaster Tools (source de ChatGPT Search) : site vérifié et indexé
- Demander à ChatGPT, Claude et Perplexity « quel logiciel de comptabilité OHADA
  gratuit ? » et relever si NOVAR est cité — c'est la seule mesure qui compte
