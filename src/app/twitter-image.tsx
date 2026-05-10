import OgImage, {
  runtime as ogRuntime,
  contentType as ogContentType,
  size as ogSize,
  alt as ogAlt,
} from './opengraph-image';

// Twitter card image — same 1200x630 visual as Open Graph. Re-declare
// the field exports inline (Next.js 15 needs them at the top level of
// the file to read them via static analysis, `export ... from` doesn't
// work on the framework's metadata route convention).

export const runtime = ogRuntime;
export const contentType = ogContentType;
export const size = ogSize;
export const alt = ogAlt;

export default OgImage;
