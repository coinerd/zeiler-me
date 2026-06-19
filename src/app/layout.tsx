import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/site-footer';
import { ThemeProvider } from '@/components/theme-provider';
import { BackToTop } from '@/components/back-to-top';
import { InstallPrompt } from '@/components/install-prompt';
import { SWUnregister } from '@/components/sw-unregister';
import { siteConfig } from '@/lib/config';

const basePath = process.env.BASE_PATH || '';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: '%s | zeiler.me',
    default: 'zeiler.me — IT & Medien, Geschichte, Deutsch',
  },
  description:
    'Herzlich Willkommen auf den Seiten von Detlef und Julian Zeiler. Hier finden Sie einige Artikel die wir im Laufe der Zeit geschrieben haben.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'zeiler.me',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'zeiler.me',
  url: siteConfig.url,
  description: 'Artikel von Detlef und Julian Zeiler zu Geschichte, Medien und Technologie.',
  inLanguage: 'de-DE',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="apple-touch-icon" href={`${basePath}/icons/apple-touch-icon.png`} />
        <link rel="manifest" href={`${basePath}/manifest.webmanifest`} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-background transition-colors duration-300">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
            <BackToTop />
            <InstallPrompt />
            <SWUnregister />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
