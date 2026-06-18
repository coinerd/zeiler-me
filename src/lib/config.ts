export const siteConfig = {
  name: 'ZEILER.me',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zeiler.me',
  description:
    'Herzlich Willkommen auf den Seiten von Detlef und Julian Zeiler. Hier finden Sie einige Artikel die wir im Laufe der Zeit geschrieben haben.',
  authors: ['Detlef Zeiler', 'Julian Zeiler'],
  locale: 'de-DE',
} as const;
