# Audit responsive mobile NOVAR — 2026-05-11

Audit effectué sur l'arbre `src/` du site `novar-website` après tour de tous les
composants critiques et de toutes les pages publiques. Résolution cible :
iPhone 12 Pro (390 × 844) et plus petit (iPhone SE 375 × 667). Tailwind
breakpoints : `sm:` 640px, `md:` 768px, `lg:` 1024px.

## Récapitulatif sévérités

- CRITICAL — Provoque un débordement horizontal ou rend la page inutilisable
- HIGH — Composant majeur visuellement cassé sur mobile
- MEDIUM — Densité ou hiérarchie sous-optimale, pas bloquant
- LOW — Polish, micro-spacing

## Header / Navigation

- LOW — `src/components/Header.tsx` : un mobile drawer existe déjà
  (`open` toggle ligne 20–98, drawer ligne 102–150). Pas d'animation Motion,
  pas de fermeture sur Escape, pas de trap focus. Améliorable mais
  fonctionnel.
- LOW — Header.tsx:115 — le sous-niveau dans le drawer mobile ne se déplie
  pas (toujours affiché). OK pour le menu court NOVAR mais consomme de la
  hauteur.

## Hero pages — overflow / sizing

- CRITICAL — `src/components/Hero.tsx:45` : `text-5xl sm:text-6xl md:text-7xl`.
  Le premier breakpoint `text-5xl` (48px) appliqué dès 0px déborde sur écrans
  < 360px. Devrait être `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`.
- CRITICAL — `src/app/produits/birdy-erp/page.tsx:102` : `text-5xl sm:text-6xl md:text-7xl`
  sur le H1 "BIRDY". Même problème.
- CRITICAL — `src/app/produits/feedora/page.tsx:85` : idem, H1 "FEEDORA".
- HIGH — `src/components/PageHero.tsx:132` : `text-4xl sm:text-5xl md:text-6xl`
  OK mais déborde sur les titres longs en 375px. À sécuriser avec
  `break-words`.
- MEDIUM — `src/components/Hero.tsx:55` : `text-lg sm:text-xl` OK.
- HIGH — `src/components/Hero.tsx:81` : `grid grid-cols-3 gap-6` pour 3 stats
  côte à côte dès 0px. Sur 375px ça fait des colonnes de ~100px qui
  truncate "Offres complémentaires". Devrait être
  `grid-cols-1 sm:grid-cols-3` ou stack vertical.

## Padding sections

- MEDIUM — Toutes les sections `px-6 lg:px-8` sont OK (24px sur mobile, OK).
  57 occurrences confirmées via grep, aucune `px-12` en root section.
- HIGH — Sections `py-24 md:py-32` (96px → 128px) : sur mobile 96px de top
  + 96px de bottom = 192px de blanc par section, trop sur mobile. Réduire
  à `py-16 sm:py-20 md:py-24 lg:py-32` (64 → 80 → 96 → 128).

## Grilles

- HIGH — `src/components/Footer.tsx:63` : `grid-cols-2 gap-10 md:grid-cols-6`.
  Sur mobile fait 2 colonnes de liens très étroites. Devrait être
  `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6`.
- MEDIUM — `src/app/page.tsx:155` : `sm:grid-cols-3` — passe en 3 colonnes
  dès 640px. Sur 640-767px les cards `01/02/03` sont serrées. Acceptable.
- LOW — Toutes les autres grilles utilisent déjà `md:` ou `lg:` correctement.

## Cards padding

- MEDIUM — `src/app/produits/birdy-erp/page.tsx:166` : `p-7` (28px) fixe sur
  les 8 modules. Acceptable mais `p-5 sm:p-7` plus respirant en mobile.
- MEDIUM — `src/components/UseCases.tsx:87` : `p-7` idem.
- MEDIUM — `src/components/ProductSpotlight.tsx:103` : `p-8 sm:p-10`. OK.
- LOW — `src/app/produits/page.tsx:24, 84, 149` : `p-8 sm:p-12 md:p-16` —
  acceptable.

## Flex layouts

- OK — La majorité des CTA banners utilisent déjà `flex-col sm:flex-row`
  (Hero.tsx:66, CtaBanner.tsx:21, birdy/feedora pages, page.tsx).
- LOW — `src/components/CtaBanner.tsx:21` : déjà `flex-col sm:flex-row`.

## Tables

- OK — `ComparisonTable.tsx:105` wrapper `overflow-x-auto` + `min-w-[640px]`.
- OK — `telechargements/page.tsx:240` wrapper `overflow-x-auto` + `min-w-[600px]`.
- LOW — `ApiTable.tsx:5` wrapper `overflow-x-auto`, pas de `min-w` mais
  acceptable.

## Forms

- OK — `ContactForm.tsx:90` `grid gap-5 sm:grid-cols-2` (stack mobile, 2 cols
  desktop). Inputs déjà `w-full` (line 33).
- LOW — Le `<select>` natif a `py-2.5` (10px vertical) ; pour cible tactile
  on devrait passer à `py-3`.
- LOW — Le bouton submit utilise `btn-primary` qui est `py-3` → OK
  (44px+icone).

## Boutons / Tappable targets (44 × 44 px Apple HIG)

- HIGH — `src/components/Header.tsx:93` : burger `p-2 text-slate-200` → icône
  24x24 + p-2 → 40x40px. Sous le minimum. Passer à `p-2.5` (44x44).
- LOW — `btn-primary` en globals.css `px-5 py-3` (40 + 12 + 12 = 44) → OK.
- LOW — Les liens nav du drawer ont `px-3 py-2` (40px hauteur) → un peu juste,
  passer à `py-2.5`.

## Footer

- HIGH — `src/components/Footer.tsx:63` : voir grilles plus haut, 2 col
  trop étroit sur mobile pour 5 catégories de liens.
- LOW — `Footer.tsx:108-128` : social icons `h-9 w-9` (36x36) → en dessous
  du 44x44. Acceptable car secondaire mais pourrait être `h-10 w-10`.

## Docs / Blog

- MEDIUM — `src/components/DocsSidebar.tsx:13` : `hidden lg:block` — la sidebar
  disparaît bien sur mobile mais il n'y a aucun substitute. Pas de bouton
  pour ouvrir la nav docs en mobile. Acceptable (lien depuis `/docs/page.tsx`
  qui sert d'index).
- MEDIUM — `src/components/DocsTOC.tsx:3` : `hidden xl:block` — pas affichée
  en dessous de 1280px. OK.

## Stats / animations

- OK — `StatsSection.tsx:100` : `grid-cols-2 ... md:grid-cols-4` (2 cols
  mobile, 4 desktop). Bon.
- HIGH — `Hero.tsx:81` : 3 stats côte à côte dès mobile (mentionné plus haut).

## Overflow horizontal

- Globals.css ne définit pas `overflow-x-hidden` au body. À ajouter par
  sécurité même si les correctifs ci-dessus suppriment les causes connues.

## Viewport meta

- Non présent dans `app/layout.tsx`. Next.js 15 injecte le viewport
  par défaut via `metadata.viewport` ou export viewport. À ajouter
  explicitement pour clarté.

## Pages spécifiques restantes

- `/blog/page.tsx:22` : `text-4xl sm:text-5xl md:text-6xl` — OK.
- `/tutoriels/page.tsx:140` : idem.
- `/docs/page.tsx:97` : `text-4xl sm:text-5xl` — OK pour page secondaire.
- `/services/sur-mesure/page.tsx`, `/services/conseil/page.tsx` : grilles
  `md:grid-cols-2 lg:grid-cols-3` — OK.
- `/tarifs/page.tsx` : `max-w-3xl px-6 lg:px-8` — OK.
- `/securite/page.tsx` : `sm:grid-cols-2` — OK.
- `/legal/*`, `/faq/page.tsx`, `/compte/*` : OK structurellement.

## Plan d'action

1. Commit B — Hero responsive sizing (Hero.tsx, birdy/feedora hero H1,
   PageHero break-words, stats grid stack).
2. Commit C — Sections padding + cards padding harmonisé (py-16/sm:py-20/md:py-24/lg:py-32, p-5 sm:p-7).
3. Commit D — Footer grid + Header burger 44x44 + tappable targets.
4. Commit E — overflow-x-hidden body + viewport meta + smooth scroll
   (déjà dans globals.css).

Pas de fix Commit A (mobile menu) — il existe déjà, juste à polish le
burger size dans Commit D.
