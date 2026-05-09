# Prompt à coller dans claude.ai/design

> Copie-colle TOUT ce qui suit dans claude.ai/design.
> Si tu peux joindre des fichiers : ajoute `BRAND.md`, `DESIGN-SYSTEM.md`,
> `PAGES.md`, `INVARIANTS.md` du même dossier en pièces jointes.

---

Bonjour. Tu vas m'aider à améliorer le site web de **NOVAR**, un SaaS Studio basé à Conakry (Guinée). Le site existe déjà — codebase Next.js 15 + Tailwind 4 + Motion. Je veux que tu m'aides à **améliorer le design visuel et l'expérience utilisateur**, sans toucher à l'architecture technique ni au positionnement.

## 1. Qui est NOVAR

- **NOVAR est un SaaS Studio**. Notre mission : numériser, automatiser et optimiser les opérations des secteurs traditionnels.
- **Modèle hybride** : on édite nos propres produits SaaS B2B, ET on fait du développement sur mesure pour les entreprises ayant des besoins d'automatisation spécifiques.
- **Produits actuels en production** :
  - **BIRDY** — ERP & gestion comptable OHADA pour PME africaines (facturation, comptabilité SYSCOHADA, paie, stocks)
  - **FEEDORA** — Application B2B AgriTech pour la formulation alimentaire des fermes avicoles
- **Marché** : Guinée + 16 autres pays OHADA (Côte d'Ivoire, Sénégal, Cameroun, Bénin, Togo, Mali, Burkina, Niger, Tchad, Congo, Gabon, RDC, etc.)

## 2. Ce que je veux

Améliorer l'**impression visuelle globale** du site, la **fluidité des animations**, la **cohérence couleur par contexte**, et **donner envie de naviguer**. Pas une refonte complète — un polish premium.

Idéalement :
- Hero plus impactant
- Sections produits BIRDY + FEEDORA encore plus différenciées visuellement
- Animations plus fluides et plus d'éléments interactifs
- Iconographie cohérente
- Typographie plus expressive sur les hero
- Photos / illustrations contextuelles si possibles (volaille pour FEEDORA, comptabilité pour BIRDY)
- Footer + Header signature visuelle plus mémorable

## 3. Règles strictes (INTERDICTIONS)

**À ne JAMAIS faire** :

- ❌ **Pas de dark mode**. Le site est light-only, premium minimaliste type CinetPay/Stripe/Linear.
- ❌ **Pas de mention** : Mobile Money, Orange Money, MTN MoMo, CinetPay, fintech, Novar Pay/Wallet/Lend. NOVAR n'est pas une fintech.
- ❌ **Pas de symbolique religieuse** dans les logos/ornements (pas de croix, pas d'étoile à 4 branches, pas de losange-étoile).
- ❌ **Pas d'emoji décoratif**. Seulement les icônes Lucide React.
- ❌ **Pas de Framer Motion** — uniquement la lib `motion/react` (Motion).

**À toujours faire** :

- ✅ Light-only avec espace blanc abondant (style CinetPay).
- ✅ Couleurs **contextuelles par produit** (neuropsychologie B2B) :
  - BIRDY = cyan navy (confiance, expertise comptable)
  - FEEDORA = emerald (croissance, vitalité, AgriTech)
  - Services sur mesure = amber (artisanat)
  - Conseil / À propos = violet (stratégie)
  - Légal = slate (neutre)
- ✅ Style sobre, pro, dense (inspiration : Stripe, Linear, Vercel, Anthropic, CinetPay)
- ✅ Typographie display : Bricolage Grotesque (déjà installé)
- ✅ Animations Motion subtiles (pas flashy)

## 4. Ressources fournies

Avec ce prompt, je te joins :

- **`BRAND.md`** : identité, positionnement, ton de voix
- **`DESIGN-SYSTEM.md`** : tokens couleurs, typographie, composants existants
- **`PAGES.md`** : les 20+ pages du site avec leur rôle et tonalité
- **`INVARIANTS.md`** : règles non-négociables à respecter

## 5. Ce que j'attends de toi

Pour CHAQUE amélioration que tu proposes :

1. **Section ou page concernée** (ex : Hero / `/produits/birdy-erp` / Footer)
2. **Description de l'amélioration** en 2-3 phrases (ce qui change visuellement)
3. **Justification neuropsy ou UX** (pourquoi ça marche mieux)
4. **Code Tailwind/React précis** (composant prêt à coller dans le repo)
5. **Si nouveau composant** : nom du fichier proposé (ex : `src/components/HeroVisual.tsx`)

Tu peux aussi me proposer **de nouveaux composants** ou **sections entières** si tu vois une lacune (ex : section "Cas client", "Stats", "Testimonials", etc.).

Tu peux **simuler le rendu** dans claude.ai/design (preview live).

Si je t'envoie un screenshot du site actuel, propose des améliorations concrètes par-dessus.

---

Démarre maintenant. Donne-moi 5 améliorations prioritaires (les plus impactantes) avec leur code, puis on enchaînera.
