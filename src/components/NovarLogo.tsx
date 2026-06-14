import Image from 'next/image';

type Props = { variant?: 'on-light' | 'on-dark'; className?: string };

/** Logo NOVAR officiel — asset partagé avec BIRDY et FEEDORA. */
export function NovarLogo({ className = 'h-7 w-auto' }: Props) {
  return (
    <Image
      src="/logos/novar.png"
      alt="NOVAR"
      width={548}
      height={198}
      className={className}
      priority
    />
  );
}

export function NovarMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logos/novar.png"
      alt="NOVAR"
      width={size * 2.4}
      height={size}
      className={`object-contain object-left ${className}`}
    />
  );
}
