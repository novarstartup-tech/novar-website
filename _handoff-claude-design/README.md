# NOVAR — Dossier de handoff pour claude.ai/design

> Ce dossier contient tout le contexte nécessaire pour qu'un designer
> (ou claude.ai/design) reprenne le site web NOVAR et propose des
> améliorations. Il est auto-suffisant — pas besoin d'accéder au repo.

## Quoi ouvrir d'abord

1. **`PROMPT.md`** — le prompt à copier-coller tel quel dans claude.ai/design
2. **`BRAND.md`** — qui est NOVAR, ce qu'on vend, ce qu'on ne vend PAS
3. **`DESIGN-SYSTEM.md`** — palette, typographie, tokens, composants
4. **`PAGES.md`** — liste des 20+ pages avec leur rôle et leur ton de couleur
5. **`INVARIANTS.md`** — règles à NE JAMAIS violer (interdictions explicites du fondateur)
6. **`INVENTORY.md`** — fichiers clés du repo (chemins exacts)

## Stack technique (info)

- **Next.js 15** (App Router) + **React 18** + **TypeScript strict**
- **Tailwind CSS 4** avec tokens custom `novar-*`
- **Motion** (`motion/react`) pour les animations — JAMAIS Framer
- **MDX** pour blog + docs
- Pages 100% statiques (SSG), 60 pages générées au build

## Logos & assets disponibles

- `public/logos/birdy-icon-512.png` — logo BIRDY (carré)
- `public/logos/birdy-icon.png` — logo BIRDY petit
- `public/logos/birdy.svg` — logo BIRDY vectoriel
- `public/logos/feedora.png` — logo FEEDORA officiel
- `public/logos/novar.png` — logo NOVAR officiel (PNG fond noir, source)
- `src/components/NovarLogo.tsx` — wordmark SVG inline transparent (utilisé partout)

## Coordonnées NOVAR (réelles)

- E-mail : `novar.startup@gmail.com`
- WhatsApp : `+224 629 55 95 15` → `https://wa.me/224629559515`
- Tél : `+82 10 3410 9515`
- Facebook : `https://www.facebook.com/profile.php?id=61587571164695`
- LinkedIn : `https://www.linkedin.com/company/111847101/`
- Site : `https://novar.gn`
- Ville : Conakry, Guinée
- Founder : Djerno (Mahmoud Diallo)

---

**Ordre d'utilisation conseillé** : lis `PROMPT.md`, prends le texte, ajoute en pièce jointe les fichiers `BRAND.md`, `DESIGN-SYSTEM.md`, `PAGES.md`, `INVARIANTS.md`. Soumets à claude.ai/design.
