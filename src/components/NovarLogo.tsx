type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

/**
 * NovarLogo — version SVG inline TRANSPARENTE.
 * Reproduit la marque NOVAR (texte sobre + ornement losange/etoile au centre).
 * Aucun fond : s'integre dans n'importe quel header/footer/card.
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
      {/* Ornement central : losange-etoile, evoque l'orbite cosmique du logo officiel */}
      <circle cx="62" cy="28" r="18" stroke={fg} strokeWidth="3" fill="none" opacity="0.85" />
      <path
        d="M62 12 L65 25 L78 28 L65 31 L62 44 L59 31 L46 28 L59 25 Z"
        fill={accent}
      />
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
 * NovarMark — variante carree (juste l'ornement central).
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
      <circle cx="40" cy="40" r="22" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M40 14 L43 36 L62 40 L43 44 L40 66 L37 44 L18 40 L37 36 Z" fill="#67E8F9" />
    </svg>
  );
}
