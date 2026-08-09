import OgImage from './opengraph-image';

/**
 * Twitter card image: same 1200×630 visual as Open Graph.
 *
 * Next.js 15 static analysis requires runtime/size/contentType to be
 * inline literals in this file. Re-importing them from another metadata
 * route confuses the page data collector. So we hard-code everything
 * and only re-export the OgImage component itself.
 */

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
export const alt = 'NOVAR : Le logiciel qui propulse les entreprises africaines';

export default OgImage;
