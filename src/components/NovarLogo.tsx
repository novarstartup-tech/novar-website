type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

/**
 * NovarLogo — version SVG inline TRANSPARENTE.
 * Texte sobre + ornement orbital (anneau + astre) au centre.
 * Aucune connotation religieuse : pas de croix, pas d'etoile a 4 branches.
 *
 * Variantes :
 *  - on-light (defaut) : encre navy + accent cyan-700
 *  - on-dark           : blanc + accent cyan-300
 */
export function NovarLogo({ variant = 'on-light', className = 'h-6 w-auto' }: Props) {
  const fg = variant === 'on-dark' ? '#FFFFFF' : '#0B1220';
  const accent = variant === 'on-dark' ? '#67E8F9' : '#0E7490';

  return (
    <svg
      viewBox="0 0 240 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NOVAR"
    >
      {/* N */}
      <text
        x="0"
        y="42"
        fontFamily="Bricolage Grotesque, Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="42"
        fill={fg}
        letterSpacing="-1.2"
      >
        N
      </text>

      {/* Ornement orbital — anneau elliptique + astre au centre.
          Evoque "nova" (etoile, mouvement orbital), neutre. */}
      <g transform="translate(62, 28)">
        {/* Orbite elliptique inclinee */}
        <ellipse
          cx="0"
          cy="0"
          rx="18"
          ry="7"
          stroke={fg}
          strokeWidth="2"
          fill="none"
          opacity="0.55"
          transform="rotate(-22)"
        />
        {/* Anneau exterieur fin */}
        <circle cx="0" cy="0" r="16" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.4" />
        {/* Astre (planete / nova) — disque plein decentre legerement */}
        <circle cx="0" cy="0" r="6" fill={accent} />
        {/* Point lumineux secondaire (compagnon) sur l'orbite */}
        <circle cx="14" cy="-5" r="2" fill={accent} opacity="0.7" />
      </g>

      {/* VAR */}
      <text
        x="88"
        y="42"
        fontFamily="Bricolage Grotesque, Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="42"
        fill={fg}
        letterSpacing="-1.2"
      >
        VAR
      </text>
    </svg>
  );
}

/**
 * NovarMark — variante carree (juste l'ornement orbital).
 * Pour favicons / app icons / coins compactes.
 */
export function NovarMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NOVAR"
    >
      <rect x="0" y="0" width="80" height="80" rx="14" fill="#0B1220" />
      {/* Orbite inclinee */}
      <ellipse
        cx="40"
        cy="40"
        rx="26"
        ry="10"
        stroke="#FFFFFF"
        strokeWidth="2"
        fill="none"
        opacity="0.55"
        transform="rotate(-22 40 40)"
      />
      {/* Anneau exterieur */}
      <circle cx="40" cy="40" r="22" stroke="#67E8F9" strokeWidth="1.8" fill="none" opacity="0.45" />
      {/* Astre central */}
      <circle cx="40" cy="40" r="9" fill="#67E8F9" />
      {/* Compagnon */}
      <circle cx="58" cy="33" r="3" fill="#67E8F9" opacity="0.8" />
    </svg>
  );
}
