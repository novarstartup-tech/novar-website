# NOVAR — Inventaire fichiers (chemins exacts)

## Repo

`D:\PROGRAMME\novar-website\`

## Structure

```
novar-website/
├── src/
│   ├── app/                    # Next.js App Router (1 fichier page.tsx par route)
│   │   ├── page.tsx            # Home /
│   │   ├── layout.tsx          # Layout racine (Header + Footer)
│   │   ├── globals.css         # Tokens CSS root + utilitaires
│   │   ├── produits/
│   │   │   ├── page.tsx        # /produits (catalogue)
│   │   │   ├── birdy-erp/page.tsx
│   │   │   └── feedora/page.tsx
│   │   ├── services/
│   │   │   ├── sur-mesure/page.tsx
│   │   │   └── conseil/page.tsx
│   │   ├── tarifs/page.tsx
│   │   ├── telechargements/page.tsx
│   │   ├── tutoriels/page.tsx
│   │   ├── docs/
│   │   │   ├── page.tsx        # Index docs
│   │   │   ├── layout.tsx
│   │   │   └── [...slug]/page.tsx  # MDX rendu
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── demo/page.tsx
│   │   ├── a-propos/page.tsx
│   │   ├── equipe/page.tsx
│   │   ├── legal/
│   │   │   ├── cgv/page.tsx
│   │   │   └── privacy/page.tsx
│   │   ├── compte/
│   │   │   ├── page.tsx
│   │   │   └── login/page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts
│   │   │   └── auth/login/route.ts
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── NovarLogo.tsx       # Wordmark SVG inline transparent
│   │   ├── Header.tsx          # Top nav + drawer mobile
│   │   ├── Footer.tsx          # 5 cols + sociaux + mini-CTA
│   │   ├── Hero.tsx            # Hero home avec orbital backdrop
│   │   ├── HeroBackdrop.tsx    # SVG cosmique (3 cercles + globe + particules)
│   │   ├── PageHero.tsx        # Hero générique pages secondaires (5 tones)
│   │   ├── ApproachCard.tsx    # Card 5-tones hover lift
│   │   ├── FeatureCard.tsx     # Card icône classique
│   │   ├── ProductSpotlight.tsx # Card BIRDY/FEEDORA hover reveal
│   │   ├── ProductBackdrop.tsx # SVG décoratifs (volaille / graphique)
│   │   ├── ProductLogo.tsx     # BirdyLogo + FeedoraLogo
│   │   ├── CtaBanner.tsx       # Bandeau CTA fin
│   │   ├── ContactForm.tsx     # Formulaire contact
│   │   ├── PricingTable.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── DownloadButton.tsx
│   │   ├── DocsBreadcrumbs.tsx
│   │   ├── DocsSidebar.tsx
│   │   ├── DocsTOC.tsx
│   │   ├── LogoCloud.tsx
│   │   ├── StarField.tsx       # (legacy, pas utilisé en prod)
│   │   ├── VideoCard.tsx
│   │   └── mdx/                # Composants MDX (Callout, Steps, Tabs, CodeBlock, ApiTable)
│   │
│   ├── content/
│   │   ├── blog/               # 4 articles MDX
│   │   │   ├── saas-studio-vision.mdx
│   │   │   ├── pourquoi-erp-ohada.mdx
│   │   │   ├── liasse-fiscale-guide.mdx
│   │   │   └── feedora-formulation.mdx
│   │   └── docs/               # 26 docs MDX
│   │       ├── faq.mdx
│   │       ├── api/
│   │       ├── demarrage/
│   │       ├── modules/
│   │       ├── ohada/
│   │       ├── rh-paie/
│   │       └── securite/
│   │
│   └── lib/
│       ├── site.ts             # Constantes SITE (email, phone, whatsapp, fb, linkedin) + NAV
│       ├── blog.ts             # Loader articles MDX
│       ├── docs.ts             # Loader docs MDX
│       └── utils.ts            # cn() helper
│
├── public/
│   └── logos/
│       ├── novar.png           # Logo NOVAR officiel (PNG fond noir source)
│       ├── birdy.svg
│       ├── birdy-icon.png
│       ├── birdy-icon-512.png
│       └── feedora.png
│
├── tailwind.config.ts          # Tokens novar-* + safelist couleurs dynamiques
├── next.config.mjs             # Config MDX
├── postcss.config.mjs
├── package.json
└── tsconfig.json
```

## Fichiers à toucher en priorité pour un polish design

| Si tu veux améliorer... | Touche... |
|---|---|
| Le hero home | `src/components/Hero.tsx` + `HeroBackdrop.tsx` |
| Les cards produits BIRDY/FEEDORA | `src/components/ProductSpotlight.tsx` + `ProductBackdrop.tsx` |
| Le hero des pages secondaires | `src/components/PageHero.tsx` |
| Header / nav | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| Tokens couleurs / safelist | `tailwind.config.ts` |
| Variables CSS / utilitaires | `src/app/globals.css` |
| Page produit BIRDY | `src/app/produits/birdy-erp/page.tsx` |
| Page produit FEEDORA | `src/app/produits/feedora/page.tsx` |
| Logos | `public/logos/*` + `src/components/NovarLogo.tsx` + `ProductLogo.tsx` |

## Fichiers à NE PAS toucher

- `src/content/**/*.mdx` (sauf si demande explicite — copy des docs/blog)
- `src/app/api/**` (logique backend)
- `tsconfig.json`, `next.config.mjs`, `package.json` (sauf upgrade lib justifié)

## Comment livrer une amélioration

1. Donner le **nom du fichier** à modifier ou créer (chemin complet)
2. Donner le **diff** ou le **fichier complet** prêt à coller
3. Préciser les **classes Tailwind** ajoutées à la safelist si nouvelles
4. Si MDX touché : préciser quelle page rendue
