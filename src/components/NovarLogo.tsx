type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

/**
 * NovarLogo — wordmark pur, sobre, B2B SaaS moderne.
 * Pas d'ornement central : juste le nom + un petit carre arrondi accent
 * en fin de mot (style Linear, Vercel, Stripe). Aucune symbolique
 * possible : la marque parle d'elle-meme.
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
      <text
        x="0"
        y="42"
        fontFamily="Bricolage Grotesque, Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="42"
        fill={fg}
        letterSpacing="-1.5"
      >
        NOVAR
      </text>
      {/* Carre arrondi accent en fin de mot — indicateur sobre,
          aucune charge symbolique */}
      <rect x="172" y="32" width="10" height="10" rx="2" fill={accent} />
    </svg>
  );
}

/**
 * NovarMark — variante carree compacte (favicon, app icon, coin).
 * Juste un carre arrondi avec le "N" — pur typographie, sobre.
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
      <text
        x="40"
        y="56"
        textAnchor="middle"
        fontFamily="Bricolage Grotesque, Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="48"
        fill="#FFFFFF"
        letterSpacing="-1.5"
      >
        N
      </text>
      <rect x="58" y="58" width="8" height="8" rx="2" fill="#67E8F9" />
    </svg>
  );
}
