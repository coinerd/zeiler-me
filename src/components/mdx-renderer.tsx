'use client';

/**
 * MDX Remote Renderer
 *
 * Renders compiled MDX output using React and the custom MDX component library.
 * Uses the compiled JS function-body output from compileMdx().
 *
 * The function-body format starts with:
 *   const {Fragment: _Fragment, jsx: _jsx, jsxs: _jsxs} = arguments[0];
 * and ends with:
 *   return { default: MDXContent };
 *
 * So we must pass a single object argument with {Fragment, jsx, jsxs}.
 */
import { useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';
import { mdxComponents } from '@/components/mdx';

interface MdxRendererProps {
  /** Compiled MDX source (function-body format from @mdx-js/mdx) */
  source: string;
}

/**
 * Evaluate compiled MDX and render with custom components.
 * This runs only on the client.
 */
export function MdxRenderer({ source }: MdxRendererProps) {
  const Content = useMemo(() => {
    try {
      // The compiled function-body format expects arguments[0] to be
      // {Fragment, jsx, jsxs} — a single runtime object it destructures.
      const fn = new Function(source);
      const result = fn({
        Fragment: runtime.Fragment,
        jsx: runtime.jsx,
        jsxs: runtime.jsxs,
      }) as Record<string, unknown>;
      // Type assertion needed: MDX function-body default export is an untyped component
      // that accepts { components } prop at runtime
      return result.default as React.ComponentType<Record<string, unknown>>;
    } catch (error) {
      console.error('[MdxRenderer] Failed to evaluate MDX:', error);
      return null;
    }
  }, [source]);

  if (!Content) return null;

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:text-primary/80 prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:border prose-pre:bg-muted">
      <Content components={mdxComponents} />
    </div>
  );
}
