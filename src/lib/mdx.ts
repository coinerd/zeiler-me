/**
 * MDX Compilation Utilities
 *
 * Compiles MDX source → raw JavaScript string on the server.
 * Used by dynamic article routes to render MDX from the content/ directory.
 */
import { compile, evaluate } from '@mdx-js/mdx';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import * as runtime from 'react/jsx-runtime';

export interface CompileOptions {
  /** Use shiki syntax highlighting */
  syntaxHighlighting?: boolean;
}

/**
 * Compile MDX source string to raw JS string.
 * The output can be eval'd or used with useMDXComponents on the client.
 */
export async function compileMdx(
  source: string,
  // eslint-disable-next-line no-unused-vars
  _options: CompileOptions = {}
): Promise<string> {
  const compiled = await compile(source, {
    outputFormat: 'function-body',
    development: process.env.NODE_ENV === 'development',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  });

  return String(compiled);
}

/**
 * Evaluate MDX source string and return a React component.
 * Used for server-side rendering — no client-side eval needed.
 * The returned component accepts { components } as props.
 */
export async function evaluateMdx(source: string): Promise<React.ComponentType<any>> {
  const { default: MDXContent } = await evaluate(source, {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
    Fragment: runtime.Fragment,
    jsx: runtime.jsx,
    jsxs: runtime.jsxs,
  });
  return MDXContent;
}

/**
 * Extract headings from MDX content for table-of-contents generation.
 * Simple regex-based approach — works with standard ## Heading syntax.
 */
export function extractHeadings(
  mdxContent: string
): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: Array<{ level: number; text: string; id: string }> = [];

  let match;
  while ((match = headingRegex.exec(mdxContent)) !== null) {
    const level = match[1]!.length;
    const text = match[2]!.trim();
    // Generate slug from heading text (matches rehype-slug behavior)
    const id = text
      .toLowerCase()
      .replace(/[^\w\säöüß-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    headings.push({ level, text, id });
  }

  return headings;
}
