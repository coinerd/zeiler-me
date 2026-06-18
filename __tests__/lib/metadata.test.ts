import { describe, it, expect } from 'vitest';
import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/config';

describe('siteConfig', () => {
  it('has required fields', () => {
    expect(siteConfig.name).toBe('ZEILER.me');
    expect(siteConfig.url).toBe('https://zeiler.me');
    expect(siteConfig.locale).toBe('de-DE');
  });
});

describe('generatePageMetadata', () => {
  it('creates metadata with title', () => {
    const metadata = generatePageMetadata({
      title: 'Test Page',
      description: 'Test description',
      path: '/test',
    });
    expect(metadata.title).toContain('Test Page');
    expect(metadata.description).toBe('Test description');
  });

  it('includes openGraph data', () => {
    const metadata = generatePageMetadata({
      title: 'OG Test',
      description: 'OG description',
      path: '/og-test',
    });
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.title).toContain('OG Test');
  });
});
