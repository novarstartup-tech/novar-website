/**
 * One-shot script — strip the black background of "D:/PROGRAMME/Africa map.jpg",
 * resize, save as a transparent PNG to public/icons/africa.png.
 *
 * Run with:
 *   node scripts/process-africa.mjs
 *
 * Pipeline:
 *   1. Read the source JPEG (5576x3717 ~4 MB).
 *   2. Resize to 512px on the long side (good quality at 64-128 px display).
 *   3. Walk every RGBA pixel ; if the pixel is "near black" (luminance < 32),
 *      set alpha = 0. Otherwise keep the pixel as-is.
 *   4. Re-encode as PNG with the new alpha channel.
 */

import sharp from 'sharp';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const SRC = 'D:/PROGRAMME/Africa map.jpg';
const DST = path.resolve(process.cwd(), 'public/icons/africa.png');
const MAX_DIM = 512;
const BLACK_THRESHOLD = 32; // pixels with luminance below this become transparent

async function main() {
  console.log(`[~] Reading ${SRC}`);
  const meta = await sharp(SRC).metadata();
  console.log(`    source: ${meta.width}x${meta.height} ${meta.format} ${meta.channels}ch`);

  // 1. Resize first (work on smaller buffer = faster pixel walk).
  const { data, info } = await sharp(SRC)
    .resize({
      width: MAX_DIM,
      height: MAX_DIM,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log(`    resized: ${info.width}x${info.height} ${info.channels}ch ${data.length}b`);

  // 2. Pixel walk: chroma-key out near-black.
  //    Each pixel is 4 bytes (RGBA) since we ensureAlpha()'d.
  let stripped = 0;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Rec. 709 luminance approximation
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    if (lum < BLACK_THRESHOLD) {
      data[i + 3] = 0; // alpha = transparent
      stripped++;
    }
  }
  console.log(`    stripped ${stripped}/${data.length / 4} pixels (near-black -> alpha=0)`);

  // 3. Re-encode as PNG.
  const out = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  await fs.mkdir(path.dirname(DST), { recursive: true });
  await fs.writeFile(DST, out);
  console.log(`[OK] Wrote ${DST} (${out.length} bytes)`);
}

main().catch((e) => {
  console.error('[X]', e);
  process.exit(1);
});
