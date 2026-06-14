import Link from 'next/link';
import { Download } from 'lucide-react';
import type { Locale } from '@/lib/content';

export function DownloadButton({ locale = 'fr' }: { locale?: Locale }) {
  return (
    <Link href={locale === 'fr' ? '/telechargements' : '/en/downloads'} className="btn-primary">
      <Download className="h-4 w-4" aria-hidden />
      {locale === 'fr' ? 'Télécharger BIRDY' : 'Download BIRDY'}
    </Link>
  );
}
