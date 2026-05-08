type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

export function NovarLogo({ variant = 'on-light', className = 'h-8 w-auto' }: Props) {
  const fg = variant === 'on-dark' ? '#FFFFFF' : '#0B1220';
  // Accent aligne sur la palette light premium (cyan-600 sobre)
  const accent = '#0891B2';
  return (
    <svg viewBox="0 0 240 56" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="NOVAR">
      <text x="0" y="42" fontFamily="Bricolage Grotesque, Inter, sans-serif" fontWeight="800" fontSize="42" fill={fg} letterSpacing="-1">N</text>
      <circle cx="62" cy="28" r="20" stroke={fg} strokeWidth="5" fill="none" />
      <path d="M62 12 L64.5 25.5 L78 28 L64.5 30.5 L62 44 L59.5 30.5 L46 28 L59.5 25.5 Z" fill={accent} />
      <text x="92" y="42" fontFamily="Bricolage Grotesque, Inter, sans-serif" fontWeight="800" fontSize="42" fill={fg} letterSpacing="-1">VAR</text>
    </svg>
  );
}

export function NovarMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="NOVAR mark">
      <circle cx="40" cy="40" r="40" fill="#0B1220" />
      <path d="M40 16 L43 36 L60 40 L43 44 L40 64 L37 44 L20 40 L37 36 Z" fill="#0891B2" />
    </svg>
  );
}
