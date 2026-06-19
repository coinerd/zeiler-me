/**
 * MDX Component Library
 *
 * Custom components used when rendering MDX content.
 * These override default HTML elements for consistent styling.
 */
import type { MDXComponents } from 'mdx/types';

const basePath = process.env.BASE_PATH || '';

function withBasePath(path: string | undefined): string | undefined {
  if (!path) return path;
  if (path.startsWith('/') && !path.startsWith('//')) {
    return `${basePath}${path}`;
  }
  return path;
}

export const mdxComponents: MDXComponents = {
  // Headings
  h1: ({ children, ...props }) => (
    <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mb-3 mt-8 border-b pb-2 text-2xl font-bold tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mb-2 mt-6 text-xl font-semibold tracking-tight" {...props}>
      {children}
    </h3>
  ),

  // Paragraphs
  p: ({ children, ...props }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-4" {...props}>
      {children}
    </p>
  ),

  // Links
  a: ({ children, href, ...props }) => (
    <a
      href={withBasePath(href as string)}
      className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="my-4 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="my-4 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mt-4 border-l-4 border-primary pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Code
  code: ({ children, ...props }) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre className="mb-4 mt-4 overflow-x-auto rounded-lg border bg-muted p-4 text-sm" {...props}>
      {children}
    </pre>
  ),

  // Table
  table: ({ children, ...props }) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th className="border bg-muted px-4 py-2 text-left font-bold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border px-4 py-2" {...props}>
      {children}
    </td>
  ),

  // Images — immersive editorial treatment
  img: ({ src, alt, ...props }) => {
    // Determine style based on alt-text prefix conventions
    const isFullBleed =
      alt?.startsWith('!') ||
      alt?.toLowerCase().includes('breit') ||
      alt?.toLowerCase().includes('panorama');
    const isFloatLeft = alt?.startsWith('<');
    const isFloatRight = alt?.startsWith('>');
    const isGallery = alt?.startsWith('*');

    // Float mode: image wrapped by text (magazine style)
    if (isFloatLeft || isFloatRight) {
      const direction = isFloatRight ? 'right' : 'left';
      return (
        <figure className={`float-image float-image-${direction}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(src as string)}
            alt={alt?.replace(/^[<>]/, '') || ''}
            loading="lazy"
            {...props}
          />
          {alt && alt.length > 1 && <figcaption>{alt.replace(/^[<>]/, '')}</figcaption>}
        </figure>
      );
    }

    if (isFullBleed) {
      return (
        <figure className="full-bleed-image relative -mx-[calc((100vw-100%)/2)] my-12 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(src as string)}
            alt={alt?.replace(/^[!*]/, '') || ''}
            className="cinematic-scale h-auto max-h-[70vh] w-full object-cover"
            loading="lazy"
            {...props}
          />
          {/* Cinematic gradient overlay at bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
          {alt && !alt.startsWith('!') && (
            <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
              {alt.replace(/^[!*]/, '')}
            </figcaption>
          )}
        </figure>
      );
    }

    // Gallery mode: paired side-by-side images
    if (isGallery) {
      return (
        <figure className="gallery-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(src as string)}
            alt={alt?.replace(/^\*/, '') || ''}
            loading="lazy"
            {...props}
          />
          {alt && alt.length > 1 && <figcaption>{alt.replace(/^\*/, '')}</figcaption>}
        </figure>
      );
    }

    // Default: editorial image with subtle breakout from text column
    return (
      <figure className="editorial-image editorial-breakout group my-10">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath(src as string)}
            alt={alt || ''}
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
            {...props}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        {alt && alt !== 'Bild' && (
          <figcaption className="mt-3 text-center text-sm italic text-muted-foreground">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },

  // Horizontal rule
  hr: ({ ...props }) => <hr className="my-8 border-t" {...props} />,

  // Strong / Emphasis
  strong: ({ children, ...props }) => (
    <strong className="font-bold" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};
