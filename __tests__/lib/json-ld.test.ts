import { describe, it, expect } from 'vitest';
import { createArticleJsonLd, createBreadcrumbJsonLd } from '@/lib/json-ld';

const sample = {
  title: 'Test Article',
  description: 'A test description.',
  author: 'detlef',
  date: '2024-01-15',
  slug: 'geschichte/test',
  collection: 'detlef',
};

describe('createArticleJsonLd', () => {
  const result = createArticleJsonLd(sample);

  it('returns object with @context and @type Article', () => {
    expect(result['@context']).toBe('https://schema.org');
    expect(result['@type']).toBe('Article');
  });

  it('headline, description match inputs', () => {
    expect(result.headline).toBe('Test Article');
    expect(result.description).toBe('A test description.');
  });

  it('author.name matches input', () => {
    expect(result.author).toEqual({ '@type': 'Person', name: 'detlef' });
  });

  it('url uses ${collection}/${slug} pattern', () => {
    expect(result.url).toBe('https://zeiler.me/detlef/geschichte/test');
  });

  it('datePublished is present and matches date', () => {
    expect(result.datePublished).toBe('2024-01-15');
  });

  it('dateModified falls back to date when not provided', () => {
    expect(result.dateModified).toBe('2024-01-15');
  });

  it('dateModified uses explicit value when provided', () => {
    const r = createArticleJsonLd({ ...sample, dateModified: '2024-06-01' });
    expect(r.dateModified).toBe('2024-06-01');
  });

  it('mainEntityOfPage @id matches URL', () => {
    expect(result.mainEntityOfPage).toEqual({
      '@type': 'WebPage',
      '@id': 'https://zeiler.me/detlef/geschichte/test',
    });
  });

  it('inLanguage is de-DE', () => {
    expect(result.inLanguage).toBe('de-DE');
  });

  it('default image used when none provided', () => {
    expect(result.image).toBe('https://zeiler.me/images/og/default.png');
  });

  it('explicit image overrides default', () => {
    const r = createArticleJsonLd({ ...sample, image: 'https://example.com/x.png' });
    expect(r.image).toBe('https://example.com/x.png');
  });

  it('publisher is ZEILER.me organization', () => {
    expect(result.publisher).toEqual({
      '@type': 'Organization',
      name: 'ZEILER.me',
      url: 'https://zeiler.me',
    });
  });

  it('collection appears in URL for julian collection', () => {
    const r = createArticleJsonLd({ ...sample, collection: 'julian', slug: 'artikel/foo' });
    expect(r.url).toBe('https://zeiler.me/julian/artikel/foo');
  });
});

describe('createBreadcrumbJsonLd', () => {
  it('returns BreadcrumbList with ordered items', () => {
    const result = createBreadcrumbJsonLd([
      { name: 'Home', url: 'https://zeiler.me' },
      { name: 'Detlef', url: 'https://zeiler.me/detlef' },
    ]);
    expect(result['@type']).toBe('BreadcrumbList');
    expect(result.itemListElement).toHaveLength(2);
    expect(result.itemListElement[0]).toEqual({
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://zeiler.me',
    });
    expect(result.itemListElement[1]!.position).toBe(2);
  });

  it('empty items array → empty itemListElement', () => {
    const result = createBreadcrumbJsonLd([]);
    expect(result.itemListElement).toEqual([]);
  });
});
