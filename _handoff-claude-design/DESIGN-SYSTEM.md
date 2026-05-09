# NOVAR — Design System

## Philosophie

**Light only · premium minimaliste · sobre dense pro**.
Inspirations : CinetPay (espace blanc, simplicité), Stripe (typographie expressive), Linear (sobriété tech), Vercel (wordmarks épurés), Anthropic (chaleur subtle).

## Palette

### Tokens NOVAR (Tailwind extend)

```ts
novar: {
  ink:        '#0B1220',  // Encre primaire — h1, CTA primaire (navy profond)
  'ink-soft': '#1F2937',  // Texte body fort
  muted:      '#64748B',  // Texte secondaire (slate-500)
  line:       '#E5E7EB',  // Bordures subtiles
  surface:    '#FFFFFF',  // Fond principal
  'surface-2':'#F8FAFC',  // Sections alternées (slate-50)
  'surface-3':'#F1F5F9',  // Hover doux (slate-100)
  accent:     '#0891B2',  // Cyan-600 — accent général sobre
  'accent-soft': '#ECFEFF', // Cyan-50 — wash subtil
  blue:       '#1E40AF',  // Bleu profond pour highlights
}
```

### Couleurs contextuelles par produit / section (neuropsychologie)

| Section | Tone Tailwind | Sens neuropsy |
|---|---|---|
| BIRDY (ERP/compta) | `cyan` (cyan-50/200/600/700) | Confiance, expertise comptable, sérieux financier |
| FEEDORA (AgriTech) | `emerald` (emerald-50/200/600/700) | Croissance, vitalité, naturel, vie |
| Services sur mesure | `amber` (amber-50/200/500/700) | Artisanat, énergie, flux d'achat |
| Conseil / À propos / Équipe | `violet` (violet-50/200/500/700) | Stratégie, conseil, premium |
| Légal / FAQ neutre | `slate` (slate-100/200/400/700) | Neutre, formel |

**Convention** : on utilise les couleurs Tailwind standards (cyan-*, emerald-*, etc.) — pas de tokens custom par produit. Les classes dynamiques sont en safelist Tailwind (cf. `tailwind.config.ts`).

## Typographie

```ts
fontFamily: {
  sans:    ['var(--font-inter)', system-ui, sans-serif],
  display: ['var(--font-bricolage)', system-ui, sans-serif],  // h1, h2, branding
  mono:    ['var(--font-jetbrains)', monospace],              // tableaux compta, codes
}
```

- **Bricolage Grotesque** pour tous les titres (h1-h2-h3 .font-display)
- **Inter** pour le body
- **JetBrains Mono** pour les nombres compta, hash, code
- **Letterspacing** : `tracking-tight` sur les hero (-1px), `tracking-[0.2em]` sur les eyebrows uppercase

### Scales

- Hero h1 : `text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]` (Bricolage)
- Section h2 : `text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight`
- Body : `text-lg leading-relaxed text-novar-muted`
- Eyebrow : `text-xs font-semibold uppercase tracking-[0.2em] text-{tone}-700`

## Spacing & Layout

- Container : `max-w-7xl mx-auto px-6 lg:px-8`
- Section padding : `py-24 md:py-32`
- Card padding : `p-7` (small) ou `p-8 sm:p-12` (large)
- Border radius : `rounded-2xl` (cards) ou `rounded-3xl` (hero blocks)

## Shadows

```ts
boxShadow: {
  soft:   '0 1px 2px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)',
  lifted: '0 1px 2px rgba(15,23,42,0.05), 0 12px 32px rgba(15,23,42,0.06)',
}
```

## Composants partagés (existent déjà)

| Composant | Fichier | Usage |
|---|---|---|
| `<NovarLogo />` | `src/components/NovarLogo.tsx` | Wordmark + carré accent SVG inline transparent |
| `<Hero />` | `src/components/Hero.tsx` | Hero home (orbital backdrop) |
| `<HeroBackdrop />` | `src/components/HeroBackdrop.tsx` | Cercles orbitaux + globe + particules |
| `<PageHero />` | `src/components/PageHero.tsx` | Hero générique pages secondaires (5 tones) |
| `<Header />` | `src/components/Header.tsx` | Top nav avec drawer mobile + dropdowns |
| `<Footer />` | `src/components/Footer.tsx` | 5 colonnes + CTA + socials |
| `<FeatureCard />` | `src/components/FeatureCard.tsx` | Card icône + titre + description |
| `<ProductSpotlight />` | `src/components/ProductSpotlight.tsx` | Card produit BIRDY/FEEDORA hover reveal |
| `<ProductBackdrop />` | `src/components/ProductBackdrop.tsx` | SVG décoratifs (volaille / graphique) |
| `<ApproachCard />` | `src/components/ApproachCard.tsx` | Card 5-tones avec hover lift |
| `<CtaBanner />` | `src/components/CtaBanner.tsx` | Bandeau CTA fin de page |
| `<ContactForm />` | `src/components/ContactForm.tsx` | Formulaire de contact |
| `<PricingTable />` | `src/components/PricingTable.tsx` | Plans BIRDY |
| `<ComparisonTable />` | `src/components/ComparisonTable.tsx` | Comparaison plans |
| `<FaqAccordion />` | `src/components/FaqAccordion.tsx` | Accordéon FAQ |

## Boutons utilitaires (CSS classes)

```css
.btn-primary  { background: var(--novar-ink); color: white; rounded-lg; px-5 py-3; }
.btn-ghost    { border + bg-white; color: ink; rounded-lg; px-5 py-3; }
.surface-alt  { background: surface-2 (slate-50) }
.bg-dots      { motif radial discret (15% opacité) }
.bg-grid      { motif quadrillé subtle }
```

## Animations Motion

- **Hero stagger** : `staggerChildren: 0.12` sur la div, fadeUp variant pour chaque enfant
- **Card hover** : `whileHover={{ y: -4 }} transition={{ duration: 0.25 }}`
- **Card lift+border** : ring qui s'illumine via `motion.div` avec `animate={{ opacity: hovered ? 0.3 : 0 }}`
- **Particules** : repeat Infinity avec delay staggéré
- **Cercles orbitaux** : rotate 360 sur 60-80s linéaire

## Iconographie

- **Lucide React** uniquement (lucide-react package)
- Taille standard : `h-4 w-4` (small), `h-5 w-5` (medium), `h-7 w-7` (icône hero)
- Couleur : reprise du tone contextuel (text-cyan-700, text-emerald-700, etc.)
- Containers icône : `inline-flex h-11 w-11 items-center justify-center rounded-xl bg-{tone}-50 ring-1 ring-{tone}-200`
