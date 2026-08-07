# Mémo pour Bobo — refonte NOVAR + paquet SEO

**Branche :** `refonte/design-seo`
**Auteur du travail :** Claude, pour Djerno — 7 août 2026
**À faire :** vérifier, améliorer, puis publier sur `main`

---

## Ce qu'il y a dans cette branche

Deux choses distinctes. La deuxième est prête à fusionner, la première non.

### 1. Une maquette de refonte — `NOVAR Site Refonte.dc.html`

Un fichier HTML autonome qui s'ouvre dans un navigateur. Il contient les 20 pages
du site, navigables entre elles. **Ce n'est pas du code de production** : c'est
une référence visuelle à porter dans les composants Next.js.

Ce qu'il définit :

- **Charte graphique officielle appliquée** (charte v1.0, août 2026) : Bleu Nuit
  `#0D1B2A`, Bleu Corporate `#1E3A8A`, Bleu Ciel `#38B6FF`, Blanc `#F4F7FB`.
  Titres en Space Grotesk, corps en Inter.
- **Logo** : celui fourni par Djerno, détouré. Version couleur `assets/novar-logo.png`,
  version blanche pour fonds sombres `assets/novar-logo-white.png`.
- **Méga-menu pleine largeur** au survol, qui affiche les trois familles
  simultanément plus une tuile « dernière version ».
- **Menu mobile** en dessous de 940px.
- **Fond liquide continu** : trois bulles floutées qui dérivent en fond fixe, et
  des transitions entre sections en horizon courbe plutôt qu'en bordure nette.
- **Responsive** : 134 valeurs en `clamp()`, bento à 3 pistes au-dessus de 1140px
  et une seule en dessous, flou désactivé sous 560px pour les téléphones d'entrée
  de gamme.

**Ce qu'il faut vérifier :** que la direction visuelle convient avant d'investir
dans le portage. C'est la seule question qui compte à ce stade.

### 2. Un paquet SEO / AEO — dossier `seo/`

Celui-ci est du livrable réel, à déposer dans le dépôt.

| Fichier livré | Destination | Note |
|---|---|---|
| `seo/robots.txt` | `public/robots.txt` | supprimer `src/app/robots.ts` |
| `seo/llms.txt` | `public/llms.txt` | remplace l'existant |
| `seo/sitemap.ts` | `src/app/sitemap.ts` | remplace l'existant |
| `seo/structured-data.ts` | `src/lib/structured-data.ts` | nouveau |
| `seo/og/*.png` | `public/og/` | six vignettes 1200×630 |
| `seo/sitemap.xml` | — | équivalent statique, à ignorer si on garde le rendu Next |
| `seo/metadata.md` | — | référence : titres et descriptions des 26 routes |
| `seo/route-matrix.md` | — | référence : les 40 URL, langue et hreflang |
| `seo/README.md` | — | mode d'emploi complet |

---

## Ce qui est en attente et bloque la publication

### Valeurs de démonstration à remplacer — bloquant

J'ai inventé ces valeurs faute de les avoir. Elles apparaissent dans la maquette
**et dans le JSON-LD**, donc une valeur fausse serait publiée en données
structurées :

- Version BIRDY : `26.0.12`
- Date de release : `12 juillet 2026`
- Configuration requise : 4 Go de RAM, 500 Mo de disque, 2 cœurs
- Taille de l'installeur Windows : 118 Mo
- Historique des versions (trois entrées) : entièrement inventé

Chercher `26.0.12` et `2026-07-12` dans `seo/` et dans la maquette.

### Deux champs de type à ajouter — non bloquant

`seo/sitemap.ts` compile tel quel, mais date les documentations et articles à une
révision globale, faute de dates par contenu :

```ts
// src/lib/docs.ts
export type DocMeta = { slug: string; title: string; category: string; updated?: string };
// src/lib/blog.ts
export type BlogMeta = { slug: string; title: string; date: string; updated?: string };
```

Les deux lignes à décommenter sont signalées en commentaire dans le fichier.
Ça vaut le détour : la fraîcheur par document pèse dans les citations d'IA.

### Le `FAQPage` doit correspondre à la page — piège

Le JSON-LD `FAQPage` ne doit être posé que sur une page dont les réponses sont
visibles **mot pour mot**. Un balisage qui promet une réponse absente de la page
est une pénalité, pas un bonus. Vérifier avant de fusionner.

---

## Choix à trancher, Bobo

1. **Le portage de la maquette.** Soit tu la reprends comme référence visuelle et
   tu portes à la main, soit on prépare un découpage en composants. La maquette
   n'a volontairement aucune classe CSS : tout est en style inline, ce qui la rend
   facile à lire mais demande un vrai travail de traduction en Tailwind.

2. **Les pages EN.** Les onze routes `/logiciels/*` sont FR uniquement. Le sitemap
   ne déclare donc aucun alternate pour elles — annoncer un `/en` inexistant nuit
   plus que de ne rien annoncer. Le jour où les EN existent, il suffit de déplacer
   l'entrée de `FR_ONLY` vers `BILINGUAL` dans `seo/sitemap.ts`.

3. **Les cinq images OG manquantes.** Guinée, Côte d'Ivoire, Mali, Bénin, Cameroun.
   Le générateur est `NOVAR Images OG.dc.html` : ajouter une entrée dans la liste
   `cards` et exporter. Trois mots changent par pays.

4. **L'en-tête est passé en blanc.** C'était nécessaire pour afficher le logo en
   couleur — la moitié navy du N disparaissait sur fond bleu nuit. L'alternative
   était de garder le bandeau sombre avec le logo en monochrome blanc. À valider.

---

## Après la fusion

- Vérifier que `/robots.txt` et `/llms.txt` répondent en 200
- Soumettre le sitemap dans Search Console et dans Bing Webmaster Tools
  (Bing alimente ChatGPT Search — c'est le levier le plus direct sur les IA)
- Passer BIRDY, la FAQ et Téléchargements au test des résultats enrichis Google
- Puis, deux semaines plus tard, la seule mesure qui compte : demander à ChatGPT,
  Claude et Perplexity « quel logiciel de comptabilité OHADA gratuit ? » et
  relever si NOVAR est cité.

---

*Questions sur un choix précis : tout est justifié dans `seo/README.md` et
`seo/og/README.md`.*
