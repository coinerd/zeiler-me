import { ImageResponse } from 'next/og';

// Required for static export (output: 'export')
export const dynamic = 'force-static';

// Image metadata
export const alt = 'ZEILER.me - IT & Medien, Geschichte, Deutsch';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f172a',
        padding: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: '#f8fafc',
            letterSpacing: '-2px',
          }}
        >
          ZEILER.me
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#94a3b8',
            marginTop: '10px',
          }}
        >
          IT &amp; Medien · Geschichte · Deutsch
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '30px',
          }}
        >
          <div
            style={{
              padding: '8px 24px',
              borderRadius: '9999px',
              border: '1px solid #334155',
              color: '#cbd5e1',
              fontSize: 16,
            }}
          >
            Detlef Zeiler
          </div>
          <div
            style={{
              padding: '8px 24px',
              borderRadius: '9999px',
              border: '1px solid #334155',
              color: '#cbd5e1',
              fontSize: 16,
            }}
          >
            Julian Zeiler
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
