import Image from 'next/image';

type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

// Logo NOVAR officiel détouré (charte v1.0). Ratio réel 389×109 ≈ 3.57:1.
// `on-dark` sert la silhouette blanche : sur fond bleu nuit, la moitié navy
// du « N » de la version couleur disparaît.
const LOGO = { 'on-light': '/logos/novar-logo.png', 'on-dark': '/logos/novar-logo-white.png' } as const;
const RATIO = 389 / 109;

/** Logo NOVAR officiel — asset partagé avec BIRDY et FEEDORA. */
export function NovarLogo({ variant = 'on-light', className = 'h-7 w-auto' }: Props) {
  return (
    <Image
      src={LOGO[variant]}
      alt="NOVAR"
      width={389}
      height={109}
      className={className}
      priority
    />
  );
}

export function NovarMark({
  size = 40,
  variant = 'on-light',
  className = '',
}: { size?: number; variant?: 'on-light' | 'on-dark'; className?: string }) {
  return (
    <Image
      src={LOGO[variant]}
      alt="NOVAR"
      width={Math.round(size * RATIO)}
      height={size}
      className={`object-contain object-left ${className}`}
    />
  );
}
