import { describe, it, expect } from 'vitest';
import { articleFrontmatterSchema } from '@/lib/schemas';

describe('articleFrontmatterSchema', () => {
  const valid = {
    title: 'Test Article',
    description: 'A description of the article.',
  };

  it('valid frontmatter passes validation', () => {
    const result = articleFrontmatterSchema.parse({
      ...valid,
      author: 'detlef',
      date: '2024-01-01',
      tags: ['geschichte', 'heidelberg'],
    });
    expect(result.title).toBe('Test Article');
    expect(result.author).toBe('detlef');
  });

  it('missing required title throws', () => {
    expect(() => articleFrontmatterSchema.parse({ description: 'desc' })).toThrow();
  });

  it('missing required description throws', () => {
    expect(() => articleFrontmatterSchema.parse({ title: 't' })).toThrow();
  });

  it('empty-string title throws (min(1))', () => {
    expect(() => articleFrontmatterSchema.parse({ title: '', description: 'desc' })).toThrow();
  });

  it('optional fields omitted → passes with defaults', () => {
    const result = articleFrontmatterSchema.parse(valid);
    // order / date / image are optional → undefined
    expect(result.order).toBeUndefined();
    expect(result.date).toBeUndefined();
    expect(result.image).toBeUndefined();
    // defaults applied
    expect(result.author).toBe('Julian Zeiler');
    expect(result.tags).toEqual([]);
    expect(result.draft).toBe(false);
  });

  it('empty tags array → passes', () => {
    const result = articleFrontmatterSchema.parse({ ...valid, tags: [] });
    expect(result.tags).toEqual([]);
  });

  it('invalid type for date (number) → passes (date is string-optional, not constrained)', () => {
    // date is z.string().optional() — a number is not a string so it would throw
    expect(() => articleFrontmatterSchema.parse({ ...valid, date: 20240101 })).toThrow();
  });

  it('invalid type for draft (string instead of boolean) → throws', () => {
    expect(() => articleFrontmatterSchema.parse({ ...valid, draft: 'yes' })).toThrow();
  });

  it('custom author value is accepted (free string)', () => {
    const result = articleFrontmatterSchema.parse({ ...valid, author: 'julian' });
    expect(result.author).toBe('julian');
  });
});
