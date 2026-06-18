import { MetadataRoute } from 'next';

// Required for static export (output: 'export')
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.BASE_PATH || '';

  return {
    name: 'ZEILER.me',
    short_name: 'ZEILER.me',
    description: 'Artikel von Detlef und Julian Zeiler zu Geschichte, Medien und Technologie.',
    start_url: `${basePath}/`,
    display: 'standalone',
    background_color: '#fff',
    theme_color: 'hsl(210, 100%, 45%)',
    icons: [
      {
        src: `${basePath}/icons/icon-192.png`,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: `${basePath}/icons/icon-512.png`,
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: `${basePath}/favicon.ico`,
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
