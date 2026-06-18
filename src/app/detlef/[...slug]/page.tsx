/**
 * Dynamic MDX Page - Detlef's Content
 *
 * Renders MDX content from content/detlef/ MDX files using server-side evaluation.
 * Handles nested paths like "geschichte/ceausescu" or "projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse".
 */
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { listMdxFilesDeep, readMdxFileNested, listChildArticles, getSiblings } from '@/lib/content';
import { evaluateMdx, extractHeadings } from '@/lib/mdx';
import { ArticleClient } from '@/components/article-client';
import type { BreadcrumbItem } from '@/components/breadcrumb';
import { siteConfig } from '@/lib/config';
import { mdxComponents } from '@/components/mdx';
import { authors } from '@/lib/authors';

/**
 * Compute the parent section link from the slug path (Detlef).
 * Pure function — runs on the server.
 */
function getParentLink(slugPath: string): { href: string; label: string } | null {
  const parts = slugPath.split('/');
  if (parts.length < 1) return null;

  const sectionSlug = parts[0]!;
  const detlefAuthor = authors.detlef;
  if (!detlefAuthor) return null;

  const section = detlefAuthor.sections.find((s) => s.slug === sectionSlug);
  if (!section) return null;

  return { href: section.href, label: section.title };
}

/**
 * Compute section context for contextual navigation (Detlef).
 * Pure function — runs on the server.
 */
function getSectionContext(
  slugPath: string,
  subsectionTitle?: string
): {
  sectionHref: string;
  sectionTitle: string;
  subsectionHref?: string;
  subsectionTitle?: string;
} | null {
  const parts = slugPath.split('/');
  if (parts.length < 1) return null;

  const sectionSlug = parts[0]!;
  const detlefAuthor = authors.detlef;
  if (!detlefAuthor) return null;
  const section = detlefAuthor.sections.find((s) => s.slug === sectionSlug);
  if (!section) return null;

  const result: {
    sectionHref: string;
    sectionTitle: string;
    subsectionHref?: string;
    subsectionTitle?: string;
  } = {
    sectionHref: section.href,
    sectionTitle: section.title,
  };

  if (parts.length >= 3) {
    const subsectionSlug = parts[1]!;
    result.subsectionHref = `/detlef/${sectionSlug}/${subsectionSlug}`;
    result.subsectionTitle =
      subsectionTitle ??
      subsectionSlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
  }

  return result;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

/**
 * Generate static paths from MDX content files in the detlef collection.
 */
export async function generateStaticParams() {
  const slugs = listMdxFilesDeep('detlef');
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
    const article = readMdxFileNested('detlef', slugPath);
    return {
      title: `${article.frontmatter.title} | zeiler.me`,
      description: article.frontmatter.description,
      authors: [{ name: article.frontmatter.author }],
      openGraph: {
        title: article.frontmatter.title,
        description: article.frontmatter.description,
        url: `https://zeiler.me/detlef/${slugPath}`,
        siteName: siteConfig.name,
        type: 'article',
        tags: article.frontmatter.tags,
      },
    };
  } catch {
    return { title: 'Seite nicht gefunden | zeiler.me' };
  }
}

export default async function DetlefArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const slugPath = slug.join('/');

  let article;
  try {
    article = readMdxFileNested('detlef', slugPath);
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

  // Compute subsection title for breadcrumb (depth 3+ articles)
  let subsectionTitle: string | undefined;
  const pathParts = slugPath.split('/');
  if (pathParts.length >= 3) {
    const parentPath = pathParts.slice(0, 2).join('/');
    try {
      const parentArticle = readMdxFileNested('detlef', parentPath);
      subsectionTitle = parentArticle.frontmatter.title;
    } catch {
      // Parent has no index.mdx — will be title-cased in client component
    }
  }

  // W0: Fetch direct child articles (sections/subsections show their children)
  const childArticles = listChildArticles('detlef', slugPath);

  // W2: Compute prev/next sibling articles
  const siblings = getSiblings('detlef', slugPath);
  const currentIdx = siblings.indexOf(slugPath);
  let prev: { title: string; href: string } | undefined;
  let next: { title: string; href: string } | undefined;
  if (currentIdx > 0) {
    const prevPath = siblings[currentIdx - 1]!;
    try {
      prev = {
        title: readMdxFileNested('detlef', prevPath).frontmatter.title,
        href: `/detlef/${prevPath}`,
      };
    } catch {
      /* ignore */
    }
  }
  if (currentIdx >= 0 && currentIdx < siblings.length - 1) {
    const nextPath = siblings[currentIdx + 1]!;
    try {
      next = {
        title: readMdxFileNested('detlef', nextPath).frontmatter.title,
        href: `/detlef/${nextPath}`,
      };
    } catch {
      /* ignore */
    }
  }

  // W3: Compute up-link to parent section/subsection
  let upLink: { href: string; label: string } | undefined;
  if (pathParts.length >= 3 && subsectionTitle) {
    upLink = { href: `/detlef/${pathParts[0]}/${pathParts[1]}`, label: subsectionTitle };
  } else if (pathParts.length >= 2) {
    const sectionSlug = pathParts[0]!;
    const section = authors.detlef?.sections.find((s) => s.slug === sectionSlug);
    if (section) upLink = { href: section.href, label: section.title };
  }

  // Compute navigation props for the unified ArticleClient
  const parent = getParentLink(slugPath);
  const sectionContext = getSectionContext(slugPath, subsectionTitle);
  const subsection =
    sectionContext?.subsectionHref && sectionContext.subsectionTitle
      ? { href: sectionContext.subsectionHref, label: sectionContext.subsectionTitle }
      : null;

  // Build breadcrumb items from the hierarchy
  const crumbs: BreadcrumbItem[] = [];
  const parts = slugPath.split('/');
  if (parent) crumbs.push({ label: parent.label, href: parent.href });
  if (parts.length >= 3 && subsection)
    crumbs.push({ label: subsection.label, href: subsection.href });
  crumbs.push({ label: article.frontmatter.title, href: '#' });

  return (
    <ArticleClient
      title={article.frontmatter.title}
      description={article.frontmatter.description}
      author={article.frontmatter.author}
      tags={article.frontmatter.tags}
      headings={headings}
      slugPath={slugPath}
      image={article.frontmatter.image}
      accentColor="primary"
      breadcrumb={crumbs}
      childArticles={childArticles}
      prev={prev}
      next={next}
      upLink={upLink}
      sectionNav={sectionContext ?? undefined}
      footerBackHref="/detlef"
      footerBackLabel="Zurück zur Übersicht"
    >
      <MDXContent components={mdxComponents} />
    </ArticleClient>
  );
}
