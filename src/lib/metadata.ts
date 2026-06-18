import { Metadata } from 'next';
import { siteConfig } from './config';

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  type = 'website',
  author,
  publishedTime,
  image,
}: GenerateMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    authors: author ? [{ name: author }] : siteConfig.authors.map((a) => ({ name: a })),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: type === 'article' ? 'article' : 'website',
      ...(publishedTime && { publishedTime }),
      ...(image && { images: [{ url: image }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      ...(image && { images: [image] }),
    },
  };
}
