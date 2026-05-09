import Image from 'next/image';

type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

/**
 * NovarLogo — utilise le logo officiel raster (public/logos/novar.png, 822x497).
 * Aucun style inline : on laisse `className` (ex h-6 w-auto) controler la taille.
 * Le PNG a son propre fond noir, on l'affiche tel quel.
 */
export function NovarLogo({ className = 'h-6 w-auto' }: Props) {
  return (
    <Image
      src="/logos/novar.png"
      alt="NOVAR"
      width={822}
      height={497}
      priority
      className={className}
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
