/**
 * Content Loading Utilities
 *
 * Reads and parses MDX files from the content/ directory at build time.
 * Uses gray-matter for frontmatter parsing and zod for validation.
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { articleFrontmatterSchema, type Article } from '@/lib/schemas';

const CONTENT_DIR = path.join(process.cwd(), 'content');

/**
 * List all collections (subdirectories of content/)
 */
export function listCollections(): string[] {
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

/**
 * Get all MDX files in a collection, non-recursive (top-level only).
 */
export function listMdxFiles(collection: string): string[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

/**
 * Recursively list all MDX files in a collection, returning full relative paths.
 * E.g. ["geschichte/ceausescu", "projekte/neuenheim/ueberblick"]
 */
export function listMdxFilesDeep(collection: string): string[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];

  const results: string[] = [];

  function walk(currentDir: string, relativePath: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(
          path.join(currentDir, entry.name),
          relativePath ? `${relativePath}/${entry.name}` : entry.name
        );
      } else if (entry.name.endsWith('.mdx')) {
        const slug = entry.name.replace(/\.mdx$/, '');
        results.push(relativePath ? `${relativePath}/${slug}` : slug);
      }
    }
  }

  walk(dir, '');
  return results;
}

/**
 * Read and parse a single MDX file using a nested slug path.
 * E.g. readMdxFileNested("detlef", "projekte/neuenheim/ueberblick")
 */
export function readMdxFileNested(collection: string, nestedSlug: string): Article {
  const filePath = path.join(CONTENT_DIR, collection, `${nestedSlug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  // Validate frontmatter with zod
  const frontmatter = articleFrontmatterSchema.parse(data);

  // Author attribution guard for Detlef articles
  if (collection === 'detlef' && frontmatter.author === 'Julian Zeiler') {
    console.warn(
      `⚠️  ${collection}/${nestedSlug}: Missing explicit author field — defaulted to "Julian Zeiler". Detlef articles should set author: "Detlef Zeiler".`
    );
  }

  return {
    slug: nestedSlug,
    collection,
    frontmatter,
    content,
  };
}

/**
 * List direct child articles of a given parent path (one level deeper).
 * Excludes the parent's own index.mdx. Returns frontmatter + href.
 */
export function listChildArticles(
  collection: string,
  parentPath: string
): { title: string; description: string; href: string }[] {
  const all = listMdxFilesDeep(collection);
  const parentDepth = parentPath.split('/').length;

  const children = all.filter((p) => {
    if (!p.startsWith(parentPath + '/')) return false;
    const depth = p.split('/').length;
    // Direct children are exactly one level deeper
    if (depth !== parentDepth + 1) return false;
    // Exclude index.mdx of subdirectories (they ARE the subsection pages, not children to list)
    if (p.endsWith('/index')) return false;
    return true;
  });

  return children
    .map((childPath) => {
      try {
        const article = readMdxFileNested(collection, childPath);
        return {
          title: article.frontmatter.title,
          description: article.frontmatter.description ?? '',
          href: `/${collection}/${childPath}`,
        };
      } catch {
        return null;
      }
    })
    .filter((x): x is { title: string; description: string; href: string } => x !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Read and parse a single MDX file.
 * Returns validated frontmatter + raw MDX content (without frontmatter).
 */
export function readMdxFile(collection: string, slug: string): Article {
  const filePath = path.join(CONTENT_DIR, collection, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`MDX file not found: ${filePath}`);
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  // Validate frontmatter with zod
  const frontmatter = articleFrontmatterSchema.parse(data);

  // Author attribution guard for Detlef articles
  if (collection === 'detlef' && frontmatter.author === 'Julian Zeiler') {
    console.warn(
      `⚠️  ${collection}/${slug}: Missing explicit author field — defaulted to "Julian Zeiler". Detlef articles should set author: "Detlef Zeiler".`
    );
  }

  return {
    slug,
    collection,
    frontmatter,
    content,
  };
}

/**
 * Get siblings of an article (same parent directory, same depth, excluding self).
 */
export function getSiblings(collection: string, slugPath: string) {
  const all = listMdxFilesDeep(collection);
  const parts = slugPath.split('/');
  const parentPath = parts.slice(0, -1).join('/');
  const depth = parts.length;
  return all
    .filter((p) => {
      const pParts = p.split('/');
      const pParent = pParts.slice(0, -1).join('/');
      return pParent === parentPath && pParts.length === depth && p !== slugPath;
    })
    .sort();
}

export function getCollectionArticles(collection: string): Article[] {
  const slugs = listMdxFilesDeep(collection);
  const articles = slugs.map((slug) => readMdxFileNested(collection, slug));

  return articles.sort((a, b) => {
    const orderA = a.frontmatter.order ?? 999;
    const orderB = b.frontmatter.order ?? 999;
    return orderA - orderB;
  });
}

/**
 * Get all articles across all collections.
 */
export function getAllArticles(): Article[] {
  const collections = listCollections();
  return collections.flatMap((c) => getCollectionArticles(c));
}

/**
 * Get all unique tags across all articles in a collection.
 */
export function getCollectionTags(collection: string): string[] {
  const articles = getCollectionArticles(collection);
  const tagSet = new Set<string>();
  articles.forEach((a) => a.frontmatter.tags?.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/**
 * Get all unique tags across all collections.
 */
export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tagSet = new Set<string>();
  articles.forEach((a) => a.frontmatter.tags?.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/**
 * Get all articles that have a specific tag, across all collections.
 */
export function getArticlesByTag(tag: string): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.frontmatter.tags?.includes(tag));
}
