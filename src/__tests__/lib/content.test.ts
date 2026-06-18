import { describe, it, expect } from 'vitest';
import {
  listCollections,
  listMdxFilesDeep,
  getAllArticles,
  readMdxFileNested,
  getCollectionArticles,
} from '@/lib/content';

describe('listCollections', () => {
  it('returns the expected collections', () => {
    const collections = listCollections();
    expect(collections).toContain('detlef');
    expect(collections).toContain('julian');
  });

  it('does not return empty strings', () => {
    const collections = listCollections();
    expect(collections.every((c) => c.length > 0)).toBe(true);
  });
});

describe('listMdxFilesDeep', () => {
  it('returns nested paths for detlef collection', () => {
    const files = listMdxFilesDeep('detlef');
    expect(files.length).toBeGreaterThanOrEqual(163);
    // Should contain nested paths with slashes
    expect(files.some((f) => f.includes('/'))).toBe(true);
  });

  it('returns paths for julian collection', () => {
    const files = listMdxFilesDeep('julian');
    expect(files.length).toBeGreaterThanOrEqual(30);
    // Should contain techzap and artikel paths
    expect(files.some((f) => f.startsWith('techzap/'))).toBe(true);
    expect(files.some((f) => f.startsWith('artikel/'))).toBe(true);
  });

  it('returns empty array for non-existent collection', () => {
    expect(listMdxFilesDeep('nonexistent')).toEqual([]);
  });
});

describe('getAllArticles', () => {
  it('returns 190+ articles across all collections', () => {
    const articles = getAllArticles();
    expect(articles.length).toBeGreaterThanOrEqual(190);
  });

  it('each article has valid slug, collection, and title', () => {
    const articles = getAllArticles();
    articles.forEach((article) => {
      expect(article.slug).toBeTruthy();
      expect(article.collection).toBeTruthy();
      expect(article.frontmatter.title).toBeTruthy();
      expect(typeof article.frontmatter.title).toBe('string');
    });
  });
});

describe('readMdxFileNested', () => {
  it('returns an article with parsed frontmatter', () => {
    const article = readMdxFileNested('detlef', 'geschichte/ceausescu');
    expect(article.slug).toBe('geschichte/ceausescu');
    expect(article.collection).toBe('detlef');
    expect(article.frontmatter.title).toBeTruthy();
    expect(typeof article.frontmatter.title).toBe('string');
  });

  it('throws an error for an invalid slug', () => {
    expect(() => readMdxFileNested('detlef', 'nonexistent/path')).toThrow();
  });
});

describe('getCollectionArticles', () => {
  it('returns julian articles sorted by frontmatter.order', () => {
    const articles = getCollectionArticles('julian');
    expect(articles.length).toBeGreaterThan(0);

    // Verify sorting: articles with order should come before those without (default 999)
    const orders = articles.map((a) => a.frontmatter.order ?? 999);
    const sortedOrders = [...orders].sort((a, b) => a - b);
    expect(orders).toEqual(sortedOrders);
  });
});
