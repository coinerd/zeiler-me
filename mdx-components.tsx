import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Custom MDX components used when rendering .mdx content.
 * These map HTML elements to styled React components within the prose context.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map standard HTML elements to Next.js Link for internal links
    a: ({
      href,
      children,
      ...props
    }: AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) => {
      if (href && href.startsWith('/')) {
        return (
          <Link href={href} legacyBehavior passHref>
            <a {...props}>{children}</a>
          </Link>
        );
      }
      return (
        <a
          href={href}
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    ...components,
  };
}
