'use client';

import { motion } from 'motion/react';

type Variant = 'birdy' | 'feedora';

/**
 * ProductBackdrop : visuel decoratif contextuel place en arriere-plan
 * d'une section ou card.
 *
 * - feedora : silhouettes de poule + grain de mais (vert emerald, sobre).
 *             Si `/products/feedora-bg.jpg` existe, il prime sur le SVG
 *             et fait office de photo de fond avec un voile vert sombre.
 * - birdy   : graphique en barres + courbe (cyan, sobre).
 *
 * Tout est SVG inline (sauf si l'image .jpg est posee), opacity faible
 * pour ne pas voler la vedette au contenu.
 *
 * Pour utiliser une PHOTO de fond pour FEEDORA :
 *   1. Achete / telecharge une image libre de droit (Unsplash : "poultry farm").
 *   2. Place-la dans `public/products/feedora-bg.jpg` (ou .webp).
 *   3. Recharge la page : <FeedoraBackdrop /> bascule auto en mode photo.
 *
 * Si le fichier n'existe pas, Next.js renvoie un 404 -> l'<img> reste
 * cassee mais cachee par le voile, l'animation SVG continue de tourner.
 */
export function ProductBackdrop({ variant }: { variant: Variant }) {
  if (variant === 'feedora') return <FeedoraBackdrop />;
  return <BirdyBackdrop />;
}

/**
 * Set the `USE_*_PHOTO` flag to `true` once the matching file exists
 * in `public/products/`. These are build-time toggles (not runtime
 * checks) so we don't ship an extra HTTP probe on every render.
 */
const USE_FEEDORA_PHOTO = true;
const FEEDORA_PHOTO_PATH = '/products/feedora-bg.jpg';
const USE_BIRDY_PHOTO = true;
const BIRDY_PHOTO_PATH = '/products/birdy-bg.jpg';

function FeedoraBackdrop() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {USE_FEEDORA_PHOTO && (
        <>
          {/* Photo layer: covers the full backdrop, kept dim so the
              foreground content stays readable on every screen size.
              `object-cover` + `object-center` so portrait + landscape
              crops both look acceptable. */}
          <img
            src={FEEDORA_PHOTO_PATH}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            onError={(e) => {
              // Fallback : if the photo file isn't deployed, hide the
              // <img> entirely so the SVG underneath shows up cleanly.
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          {/* Light emerald tint + soft bottom vignette for legibility
              of the foreground text, the photo stays clearly visible. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,46,22,0.10) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.35) 100%)',
            }}
          />
        </>
      )}
      <FeedoraSvgDecor />
    </div>
  );
}

function FeedoraSvgDecor() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="absolute inset-0 h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Silhouette de poule (stylisee, basee sur cercles), coin haut droit */}
      <motion.g
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 0.18, x: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Corps */}
        <ellipse cx="500" cy="120" rx="55" ry="42" fill="#059669" />
        {/* Tete */}
        <circle cx="555" cy="92" r="18" fill="#059669" />
        {/* Bec */}
        <path d="M572 92 L584 95 L572 100 Z" fill="#F59E0B" />
        {/* Crete */}
        <path d="M548 75 L552 68 L556 75 L560 68 L564 75 Z" fill="#DC2626" opacity="0.7" />
        {/* Oeil */}
        <circle cx="558" cy="88" r="2" fill="#FFFFFF" />
        {/* Plume queue */}
        <path d="M450 105 Q435 90 430 75 Q445 95 460 100 Z" fill="#059669" />
        {/* Pattes */}
        <line x1="490" y1="160" x2="488" y2="180" stroke="#059669" strokeWidth="2" />
        <line x1="510" y1="160" x2="512" y2="180" stroke="#059669" strokeWidth="2" />
      </motion.g>

      {/* Grains de mais qui flottent (5 grains, anim subtle pulse) */}
      {[
        { cx: 80, cy: 320, delay: 0 },
        { cx: 140, cy: 350, delay: 0.3 },
        { cx: 200, cy: 310, delay: 0.6 },
        { cx: 260, cy: 340, delay: 0.9 },
        { cx: 320, cy: 320, delay: 1.2 },
      ].map((g, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.15, 0.25, 0.15], y: [0, -4, 0] }}
          transition={{ duration: 4, delay: g.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx={g.cx} cy={g.cy} rx="6" ry="9" fill="#FCD34D" />
          <ellipse cx={g.cx} cy={g.cy - 1} rx="3" ry="5" fill="#FBBF24" opacity="0.6" />
        </motion.g>
      ))}

      {/* Tige de cereale verticale, gauche */}
      <motion.g
        initial={{ opacity: 0, scaleY: 0.6 }}
        whileInView={{ opacity: 0.12, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: '40px 380px' }}
      >
        <line x1="40" y1="380" x2="40" y2="220" stroke="#059669" strokeWidth="2" />
        {[230, 250, 270, 290, 310].map((y, i) => (
          <ellipse key={i} cx={i % 2 === 0 ? 36 : 44} cy={y} rx="5" ry="3" fill="#FCD34D" opacity="0.7" />
        ))}
      </motion.g>
    </svg>
  );
}

function BirdyBackdrop() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {USE_BIRDY_PHOTO && (
        <>
          <img
            src={BIRDY_PHOTO_PATH}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          {/* Light cyan/navy tint + soft bottom vignette; the photo
              stays clearly visible. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(8,47,73,0.10) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.35) 100%)',
            }}
          />
        </>
      )}
      <BirdySvgDecor />
    </div>
  );
}

function BirdySvgDecor() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="absolute inset-0 h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Grille legere */}
      <defs>
        <pattern id="grid-birdy" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0891B2" strokeWidth="0.4" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="600" height="400" fill="url(#grid-birdy)" />

      {/* Histogram de barres comptables (5 barres, hauteurs variables) */}
      <motion.g
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {[
          { x: 380, h: 60 },
          { x: 410, h: 90 },
          { x: 440, h: 75 },
          { x: 470, h: 110 },
          { x: 500, h: 140 },
        ].map((b, i) => (
          <motion.rect
            key={i}
            x={b.x}
            y={300 - b.h}
            width="20"
            height={b.h}
            rx="3"
            fill="#0891B2"
            variants={{
              hidden: { opacity: 0, scaleY: 0 },
              show: { opacity: 0.22, scaleY: 1 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: `${b.x + 10}px 300px` }}
          />
        ))}

        {/* Ligne de tendance qui trace au-dessus des barres */}
        <motion.path
          d="M 390 240 Q 425 215 450 220 T 510 165"
          stroke="#0E7490"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.6 }}
        />
        {/* Point final */}
        <motion.circle
          cx="510"
          cy="165"
          r="4"
          fill="#0891B2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 2.2 }}
        />
      </motion.g>

      {/* Petits chiffres comptables qui flottent */}
      {[
        { x: 70, y: 140, n: '01' },
        { x: 110, y: 210, n: '04' },
        { x: 80, y: 280, n: '52' },
        { x: 140, y: 340, n: '60' },
      ].map((c, i) => (
        <motion.text
          key={i}
          x={c.x}
          y={c.y}
          fontFamily="monospace"
          fontSize="14"
          fill="#0891B2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {c.n}
        </motion.text>
      ))}
    </svg>
  );
}
