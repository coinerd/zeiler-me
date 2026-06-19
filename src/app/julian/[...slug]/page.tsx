/**
 * Dynamic MDX Page - Julian's Content
 *
 * Renders MDX content from content/julian/ MDX files using server-side evaluation.
 * Handles nested paths like "techzap/server/windows/iis-und-apache-auf-einem-server-parallel-betreiben".
 */
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { listMdxFiles, listMdxFilesDeep, readMdxFileNested } from '@/lib/content';
import { evaluateMdx, extractHeadings } from '@/lib/mdx';
import { ArticleClient, type FallbackNavItem } from '@/components/article-client';
import { siteConfig } from '@/lib/config';
import { mdxComponents } from '@/components/mdx';

/**
 * Compute the parent category link from the slug path (Julian).
 * Pure function — runs on the server.
 */
function getParentLink(slugPath: string): { href: string; label: string } | null {
  const parts = slugPath.split('/');

  const categoryPages: Record<string, { href: string; label: string }> = {
    artikel: { href: '/julian/artikel', label: 'Artikel' },
    techzap: { href: '/julian/techzap', label: 'Techzap' },
    about: { href: '/julian#about', label: 'About' },
    work: { href: '/julian#work', label: 'Work' },
    contact: { href: '/julian#contact', label: 'Kontakt' },
  };

  if (parts.length >= 2) {
    const category = parts[0]!;
    const entry = categoryPages[category];
    if (entry) {
      return entry;
    }
  }
  return null;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

/**
 * Generate static paths from MDX content files in the julian collection.
 */
export async function generateStaticParams() {
  const slugs = listMdxFilesDeep('julian');
  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }));
}

/**
 * Generate metadata from MDX frontmatter.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join('/');
  try {
    const article = readMdxFileNested('julian', slugPath);
    return {
      title: `${article.frontmatter.title} | zeiler.me`,
      description: article.frontmatter.description,
      authors: [{ name: article.frontmatter.author }],
      openGraph: {
        title: article.frontmatter.title,
        description: article.frontmatter.description,
        url: `https://zeiler.me/julian/${slugPath}`,
        siteName: siteConfig.name,
        type: 'article',
        tags: article.frontmatter.tags,
      },
    };
  } catch {
    return { title: 'Seite nicht gefunden | zeiler.me' };
  }
}

export default async function JulianArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join('/');

  let article;
  try {
    article = readMdxFileNested('julian', slugPath);
  } catch {
    notFound();
  }

  // Skip draft articles in production
  if (article.frontmatter.draft && process.env.NODE_ENV === 'production') {
    notFound();
  }

  // Evaluate MDX on the server → returns a React component
  const MDXContent = await evaluateMdx(article.content);
  const headings = extractHeadings(article.content);

  // Compute prev/next sibling articles when in the artikel/ subdirectory
  let prev: { title: string; href: string } | undefined;
  let next: { title: string; href: string } | undefined;
  if (slug.length === 2 && slug[0] === 'artikel') {
    const allSlugs = listMdxFiles('julian/artikel').sort();
    const currentIdx = allSlugs.indexOf(slug[1]!);
    if (currentIdx > 0) {
      try {
        const s = allSlugs[currentIdx - 1];
        prev = {
          title: readMdxFileNested('julian', `artikel/${s}`).frontmatter.title,
          href: `/julian/artikel/${s}`,
        };
      } catch {
        /* ignore */
      }
    }
    if (currentIdx >= 0 && currentIdx < allSlugs.length - 1) {
      try {
        const s = allSlugs[currentIdx + 1];
        next = {
          title: readMdxFileNested('julian', `artikel/${s}`).frontmatter.title,
          href: `/julian/artikel/${s}`,
        };
      } catch {
        /* ignore */
      }
    }
  }

  // Compute navigation props for the unified ArticleClient
  const parent = getParentLink(slugPath);

  // Build Julian-style fallback nav items
  const fallbackNav: FallbackNavItem[] = [{ label: 'Julian', href: '/julian', current: false }];
  if (parent) {
    fallbackNav.push({ label: parent.label, href: parent.href, current: false });
  }
  fallbackNav.push({ label: article.frontmatter.title, href: '#', current: true });

  return (
    <ArticleClient
      title={article.frontmatter.title}
      description={article.frontmatter.description}
      author={article.frontmatter.author}
      tags={article.frontmatter.tags}
      headings={headings}
      slugPath={slugPath}
      image={article.frontmatter.image}
      accentColor="secondary"
      fallbackNav={fallbackNav}
      parent={parent}
      prev={prev}
      next={next}
      footerBackHref={parent ? parent.href : '/julian'}
      footerBackLabel={parent ? `Zurück zu ${parent.label}` : 'Zurück zur Übersicht'}
    >
      <MDXContent components={mdxComponents} />
    </ArticleClient>
  );
}
