/**
 * RSS Feed — Dynamically generated from MDX content
 *
 * Reads all articles from the content/ directory and generates an RSS 2.0 feed.
 */
import { NextResponse } from 'next/server';
import { listCollections, listMdxFilesDeep, readMdxFileNested } from '@/lib/content';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

const BASE_URL = siteConfig.url;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(): Promise<Response> {
  const collections = listCollections();

  interface FeedItem {
    title: string;
    slug: string;
    collection: string;
    date: string;
    description: string;
  }

  const items: FeedItem[] = [];

  for (const collection of collections) {
    const slugs = listMdxFilesDeep(collection);
    for (const slug of slugs) {
      try {
        const article = readMdxFileNested(collection, slug);
        // Skip drafts
        if (article.frontmatter.draft) continue;

        // Build the URL using the catch-all /[collection]/[...slug] route
        const href = `${BASE_URL}/${collection}/${slug}`;

        items.push({
          title: article.frontmatter.title,
          slug: href,
          collection,
          date: article.frontmatter.date || '2024-01-01',
          description: article.frontmatter.description,
        });
      } catch {
        // Skip files that fail to parse
      }
    }
  }

  // Sort by date descending
  items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const itemsXml = items
    .map(
      (a) => `    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${a.slug}</link>
      <guid isPermaLink="true">${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description>${escapeXml(a.description)}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ZEILER.me</title>
    <description>Artikel von Detlef und Julian Zeiler zu Geschichte, Medien und Technologie.</description>
    <link>${BASE_URL}</link>
    <language>de-de</language>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
