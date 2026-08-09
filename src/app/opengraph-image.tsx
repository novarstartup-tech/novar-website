import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

/**
 * Default Open Graph image (1200x630). Picked up automatically by
 * Next.js 15 for any page that does not provide its own og-image.
 *
 * Renders the NOVAR wordmark + baseline on the cyan→indigo brand
 * gradient. Pure inline SVG/CSS: no external font, no fetch.
 */

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };
export const alt = `${SITE.name} : ${SITE.baseline}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #0b1220 0%, #0a2540 45%, #08263b 100%)',
          color: '#e6edf6',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top: small dot + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 18,
              height: 18,
              background: '#22d3ee',
              borderRadius: 4,
              boxShadow: '0 0 24px #22d3ee99',
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#7dd3fc',
              fontWeight: 600,
            }}
          >
            {SITE.category}
          </div>
        </div>

        {/* Middle: huge wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 220,
              fontWeight: 800,
              letterSpacing: -8,
              lineHeight: 1,
              color: '#ffffff',
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              fontSize: 38,
              fontWeight: 500,
              letterSpacing: -0.5,
              lineHeight: 1.25,
              marginTop: 24,
              color: '#cbd5e1',
              maxWidth: 1000,
            }}
          >
            {SITE.baseline}
          </div>
        </div>

        {/* Bottom: url */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: '#7dd3fc',
            letterSpacing: 1,
          }}
        >
          <span>{SITE.url.replace(/^https?:\/\//, '')}</span>
          <span>BIRDY · FEEDORA · OHADA</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
