/**
 * MDX Components Registry
 *
 * Custom components available inside MDX content.
 * These replace default HTML elements when used in .mdx files.
 */
import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
// Card components available for future MDX custom blocks
// eslint-disable-next-line no-unused-vars
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

/**
 * Prose wrapper — applies Tailwind typography to MDX content.
 */
export const ProseWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:text-primary/80">
    {children}
  </div>
);

/**
 * Callout / Info box component for MDX.
 * Usage in MDX: <InfoBox title="Hinweis">Content here</InfoBox>
 */
export const InfoBox: FC<{ title?: string; children: ReactNode }> = ({
  title = 'Hinweis',
  children,
}) => (
  <div className="not-prose my-6 rounded-lg border border-muted bg-muted/50 p-6">
    {title && <h3 className="mb-2 text-lg font-bold">{title}</h3>}
    <div className="text-muted-foreground">{children}</div>
  </div>
);

/**
 * Warning / Alert box component for MDX.
 * Usage: <WarningBox title="Achtung">Content here</WarningBox>
 */
export const WarningBox: FC<{ title?: string; children: ReactNode }> = ({
  title = 'Achtung',
  children,
}) => (
  <div className="not-prose my-6 rounded-lg border border-destructive/20 bg-destructive/10 p-6">
    {title && <h3 className="mb-2 text-lg font-bold text-destructive">{title}</h3>}
    <div className="text-muted-foreground">{children}</div>
  </div>
);

/**
 * Feature card for highlighting key points.
 * Usage: <FeatureCard icon="Code" title="JavaScript">Description</FeatureCard>
 */
export const FeatureCard: FC<{
  title: string;
  children: ReactNode;
}> = ({ title, children }) => (
  <div className="not-prose my-4 rounded-lg border p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <div className="text-muted-foreground">{children}</div>
  </div>
);

/**
 * Grid of feature cards.
 */
export const FeatureGrid: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-2">{children}</div>
);

/**
 * Small highlight card for side-by-side comparison.
 */
export const HighlightCard: FC<{ title: string; children: ReactNode }> = ({ title, children }) => (
  <div className="not-prose rounded-lg border border-primary/20 bg-primary/5 p-4">
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    <div className="text-sm text-muted-foreground">{children}</div>
  </div>
);

/**
 * Three-column grid for small highlight cards.
 */
export const HighlightGrid: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-3">{children}</div>
);

/**
 * Styled citation / blockquote with source attribution.
 * Usage: <Citation source="Richard Stallman">"Free as in freedom..."</Citation>
 */
export const Citation: FC<{ source?: string; children: ReactNode }> = ({ source, children }) => (
  <blockquote className="my-6 border-l-4 border-primary pl-4 italic">
    {children}
    {source && (
      <footer className="mt-2 text-sm not-italic text-muted-foreground">— {source}</footer>
    )}
  </blockquote>
);

/**
 * Tag badges for categorization.
 */
export const TagList: FC<{ tags: string[] }> = ({ tags }) => (
  <div className="not-prose my-4 flex flex-wrap gap-2">
    {tags.map((tag) => (
      <Badge key={tag} variant="outline" className="px-3 py-1">
        {tag}
      </Badge>
    ))}
  </div>
);

/**
 * Section separator.
 */
export const SectionBreak: FC = () => <Separator className="my-8" />;

/**
 * External link that opens in new tab.
 */
export const ExternalLink: FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline hover:text-primary/80"
  >
    {children}
  </a>
);

/**
 * Internal next/link wrapper for MDX.
 */
export const InternalLink: FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
  <Link href={href} className="text-primary hover:text-primary/80">
    {children}
  </Link>
);

/**
 * Step component for numbered steps/tutorials.
 */
export const Step: FC<{ number: number; title: string; children: ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <div className="not-prose my-4 flex gap-4">
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
      {number}
    </div>
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="mt-1 text-muted-foreground">{children}</div>
    </div>
  </div>
);

/**
 * Complete MDX components map — passed to MDXProvider or serialize.
 */
export const mdxComponents = {
  // Override default HTML elements
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (href?.startsWith('/')) {
      return <Link href={href}>{children}</Link>;
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },

  // Custom components available in MDX
  InfoBox,
  WarningBox,
  FeatureCard,
  FeatureGrid,
  HighlightCard,
  HighlightGrid,
  Citation,
  TagList,
  SectionBreak,
  ExternalLink,
  InternalLink,
  Step,
};
