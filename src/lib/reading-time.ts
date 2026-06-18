export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatReadingTime(minutes: number): string {
  if (minutes <= 1) return '1 Min. Lesezeit';
  return `${minutes} Min. Lesezeit`;
}
