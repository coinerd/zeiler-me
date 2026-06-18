import { describe, it, expect } from 'vitest';
import { calculateReadingTime, formatReadingTime } from '@/lib/reading-time';

describe('calculateReadingTime', () => {
  it('short text (< 200 words) → 1 minute', () => {
    const text = 'wort '.repeat(50).trim();
    expect(calculateReadingTime(text)).toBe(1);
  });

  it('medium text (~600 words) → 3 minutes', () => {
    const text = 'wort '.repeat(600).trim();
    expect(calculateReadingTime(text)).toBe(3);
  });

  it('very long text (2000+ words) → correct minutes', () => {
    const text = 'wort '.repeat(2000).trim();
    expect(calculateReadingTime(text)).toBe(10);
  });

  it("empty string → 1 (split yields [''], ceil(1/200)=1)", () => {
    expect(calculateReadingTime('')).toBe(1);
  });

  it('whitespace-only string → treated as 1 word after trim+split', () => {
    expect(calculateReadingTime('   ')).toBe(1);
  });

  it('German text with umlauts → correct word count', () => {
    // 200 umlaut words → 1 min
    const text = 'Über ältere Schüler Grüße '.repeat(50).trim();
    expect(calculateReadingTime(text)).toBe(1);
  });

  it('boundary: exactly 200 words → 1 minute (ceil(200/200)=1)', () => {
    const text = 'wort '.repeat(200).trim();
    expect(calculateReadingTime(text)).toBe(1);
  });

  it('boundary: 201 words → 2 minutes', () => {
    const text = 'wort '.repeat(201).trim();
    expect(calculateReadingTime(text)).toBe(2);
  });
});

describe('formatReadingTime', () => {
  it("0 minutes → '1 Min. Lesezeit'", () => {
    expect(formatReadingTime(0)).toBe('1 Min. Lesezeit');
  });

  it("1 minute → '1 Min. Lesezeit'", () => {
    expect(formatReadingTime(1)).toBe('1 Min. Lesezeit');
  });

  it("5 minutes → '5 Min. Lesezeit'", () => {
    expect(formatReadingTime(5)).toBe('5 Min. Lesezeit');
  });
});
