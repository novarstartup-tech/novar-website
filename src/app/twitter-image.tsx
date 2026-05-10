import OgImage, { alt as ogAlt } from './opengraph-image';
import { SITE } from '@/lib/site';

/**
 * Twitter card image — réutilise le même rendu 1200×630 qu'Open Graph.
 *
 * Next.js 15 fait du static analysis sur les `export const runtime/size/
 * contentType` au build-time : ces valeurs DOIVENT être des littéraux
 * dans le fichier source. On ne peut donc pas les ré-exporter depuis
 * `./opengraph-image` — il faut les redéclarer ici en dur.
 */

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
export const alt = ogAlt ?? `${SITE.name} — ${SITE.baseline}`;

export default OgImage;
