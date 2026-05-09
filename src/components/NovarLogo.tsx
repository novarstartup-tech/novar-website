import Image from 'next/image';

type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

/**
 * NovarLogo — utilise le logo officiel raster fourni (public/logos/novar.png).
 * `variant` est conservé pour compat API mais le PNG officiel a son propre fond,
 * on l'affiche tel quel.
 */
export function NovarLogo({ className = 'h-8 w-auto' }: Props) {
  return (
    <Image
      src="/logos/novar.png"
      alt="NOVAR"
      width={240}
      height={56}
      priority
      className={className}
      style={{ width: 'auto', height: '100%' }}
    />
  );
}

export function NovarMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logos/novar.png"
      alt="NOVAR"
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
