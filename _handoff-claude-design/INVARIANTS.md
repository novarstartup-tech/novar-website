# NOVAR — Règles invariantes (NON-NÉGOCIABLES)

> Le fondateur Djerno a posé ces règles **à la main**, suite à plusieurs
> sessions de design. Toute proposition qui les viole sera **rejetée
> immédiatement**. Lis attentivement avant toute proposition.

## Interdictions absolues

### Identité produit

❌ **Pas de "fintech"** dans la communication NOVAR.
NOVAR est un **SaaS Studio**, pas une fintech. Le mot fintech est interdit dans le copy public.

❌ **Pas de mention** : Mobile Money · Orange Money · MTN MoMo · Wave · CinetPay · Novar Pay · Novar Wallet · Novar Lend.
Ces produits/intégrations n'existent pas et ne sont pas dans la roadmap publique.

❌ **BIRDY n'est PAS uniquement de la gestion de stock**. C'est un **ERP & gestion comptable OHADA complet** (facturation + compta + paie + stocks). Le mot "ERP" ou "gestion comptable OHADA" doit accompagner BIRDY systématiquement.

❌ **FEEDORA n'est PAS un produit fintech** ni de la compta. C'est de la **formulation alimentaire pour fermes avicoles** (AgriTech).

❌ **NOVAR ≠ BIRDY**. NOVAR est l'entreprise. BIRDY et FEEDORA sont deux produits distincts.

### Symboles & visuels

❌ **Pas de symbolique religieuse** :
- Pas de croix chrétienne
- Pas d'étoile à 4 branches (losange-étoile)
- Pas de symbole pouvant être interprété comme une auréole
- Pas de mandala / chakra / pentagramme
- Pas de drapeau religieux
Le fondateur a explicitement rejeté 2 propositions de logo NOVAR pour cette raison.

❌ **Pas d'emoji** dans le copy ni dans les composants UI. Seules les icônes Lucide React sont autorisées.

❌ **Pas d'images IA évidentes** (faces déformées, textures synthétiques flagrantes). Préférer les illustrations vectorielles ou les vraies photos.

### Theme & couleurs

❌ **Pas de dark mode**. Le site est **light only**. Tout fond doit rester blanc, slate-50 ou wash très subtil de la couleur thématique.

❌ **Pas de couleurs flashy** (néon, fluorescent, gradients criards). La palette reste sobre B2B premium.

❌ **Pas de fond `bg-novar-cosmic`** (#0B1220 dark) sur les pages publiques. Cette classe a été retirée du site public — elle existe encore dans BIRDY app mais c'est un autre projet.

### Animations

❌ **Pas de Framer Motion** (déprécié). Uniquement `motion/react` (Motion lib).

❌ **Pas d'animations agressives** : pas de bounce, pas de wobble, pas de rotations rapides. Animations subtle, ease-out, durée 200-400ms.

### Stack

❌ **Pas de jQuery, Bootstrap, MUI**. Uniquement Tailwind 4 + shadcn/ui + 21st.dev community.

❌ **Pas de TypeScript `any`** sauf justifié.

## Obligations

### Tonalité

✅ **Sobre, professionnel, B2B premium**. Inspiration : Stripe, Linear, Vercel, Anthropic, CinetPay.

✅ **Espace blanc abondant** (style CinetPay).

✅ **Couleurs contextuelles par produit** :
- BIRDY = cyan navy (cyan-600/700)
- FEEDORA = emerald (emerald-600/700)
- Sur mesure = amber
- Conseil/À propos = violet
- Légal = slate

✅ **Typo display Bricolage Grotesque** sur tous les titres.

✅ **Toutes les coordonnées correctes** (cf. README.md du dossier handoff).

### Marché

✅ **Cible : 17 pays OHADA** (pas seulement Guinée).

✅ **Multi-devises** : GNF (Guinée) + XOF (UEMOA) + USD + EUR + 50 autres.

✅ **i18n** : français en priorité, anglais en backlog. Pas d'arabe / allemand / mandarin pour l'instant.

### Style code

✅ Light DOM, semantic HTML, ARIA labels sur boutons icône.

✅ Routing : Next.js App Router (file-based).

✅ Animations Motion `viewport={{ once: true }}` pour ne pas re-trigger au scroll.

## Vérification rapide avant soumission

Avant de proposer quoi que ce soit, vérifie :

1. ☐ Pas de mention fintech / Mobile Money / CinetPay
2. ☐ Pas de symbole religieux dans les visuels
3. ☐ Pas de dark mode
4. ☐ Couleur thématique respectée (BIRDY=cyan, FEEDORA=emerald, etc.)
5. ☐ Motion (`motion/react`) et pas Framer
6. ☐ Pas d'emoji dans le copy
7. ☐ Bricolage Grotesque sur les titres
8. ☐ Espace blanc respecté (pas trop dense)

Si tu as un doute sur une proposition, **demande avant** de la générer.
