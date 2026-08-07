# Corrections à porter dans `src/app/sitemap.ts`

Trois écarts entre le sitemap actuel et les pages réellement publiées.

## 1. `lastModified: new Date()` sur toutes les URL

Toutes les pages sont datées de l'instant du build. Un site dont 60 URL changent
chaque jour perd sa crédibilité de fraîcheur, et les moteurs de réponse
privilégient les dates de modification vraisemblables.

```ts
// Dater chaque route depuis sa source réelle
lastModified: post.updated ?? post.date          // blog
lastModified: doc.updated                        // docs
lastModified: new Date('2026-07-12')             // téléchargements = date de release
```

## 2. Routes publiées absentes du sitemap

`/tutoriels` figure dans LOCALIZED_ROUTES mais pas `/logiciels` (le hub),
ni les pages EN des routes `/logiciels/*`. Ajouter le hub :

```ts
const solutionPages = [
  '/logiciels',
  '/logiciels/facturation-ohada',
  // ...
];
```

## 3. Priorités à plat

`/telechargements` est en 0.8 comme les mentions légales. C'est la page de
conversion du produit phare : elle mérite 0.9, et `/faq` 0.7 plutôt que 0.6
(les pages FAQ sont surreprésentées dans les citations d'IA).

```ts
const PRIORITY: Record<string, number> = {
  '': 1, '/en': 1,
  '/produits/birdy-erp': 0.9, '/telechargements': 0.9,
  '/faq': 0.7,
};
```
