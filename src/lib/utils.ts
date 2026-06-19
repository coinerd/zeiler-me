import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function withBasePath(path: string): string {
  const basePath = process.env.BASE_PATH || '';
  if (path.startsWith('/') && !path.startsWith('//')) {
    return `${basePath}${path}`;
  }
  return path;
}
