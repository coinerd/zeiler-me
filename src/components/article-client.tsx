'use client';

/**
 * Unified Article Client Component
 *
 * Single configurable component for rendering article pages (Detlef & Julian).
 * Supports accent color theming, two breadcrumb styles, and optional
 * Detlef-only features (section nav, child articles, up-link).
 *
 * IMPORTANT: Tailwind class names must be statically analyzable. The
 * `accentClasses` lookup map provides full class strings per accent color
 * so Tailwind's JIT compiler can detect and include them.
 */
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { type ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChildArticleList } from '@/components/child-article-list';
import { Breadcrumb, type BreadcrumbItem } from '@/components/breadcrumb';
import { PrevNextNav } from '@/components/prev-next-nav';
import { UpLink } from '@/components/up-link';

export interface Heading {
  level: number;
  text: string;
  id: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FallbackNavItem extends NavLink {
  current?: boolean;
}

export interface ArticleClientProps {
  title: string;
  description: string;
  author: string;
  tags: string[];
  headings: Heading[];
  slugPath: string;
  image?: string | undefined;
  accentColor?: 'primary' | 'secondary' | undefined;
  /** If provided, uses the <Breadcrumb> component (Detlef style). */
  breadcrumb?: BreadcrumbItem[] | undefined;
  /** If no breadcrumb, renders a hardcoded nav (Julian style). */
  fallbackNav?: FallbackNavItem[] | undefined;
  parent?: NavLink | null | undefined;
  prev?: { title: string; href: string } | undefined;
  next?: { title: string; href: string } | undefined;
  /** Detlef-only: up-link to parent section/subsection. */
  upLink?: NavLink | undefined;
  /** Detlef-only: direct child articles. */
  childArticles?: { title: string; description: string; href: string }[] | undefined;
  /** Detlef-only: contextual section navigation. */
  sectionNav?:
    | {
        sectionHref: string;
        sectionTitle: string;
        subsectionHref?: string | undefined;
        subsectionTitle?: string | undefined;
      }
    | undefined;
  footerBackHref?: string | undefined;
  footerBackLabel?: string | undefined;
  children: ReactNode;
}

// Tailwind-safe class lookup (no dynamic class name construction).
const accentClasses = {
  primary: {
    progressGradient: 'bg-gradient-to-r from-primary via-primary/80 to-accent',
    tocHover: 'hover:text-primary',
    sectionLink: 'text-primary/80 transition-colors hover:text-primary',
    footerHover: 'hover:text-primary',
    heroBlurA: 'bg-primary/5',
    heroBlurB: 'bg-primary/5',
    heroBar: 'bg-gradient-to-r from-primary to-primary/20',
    tagHover: 'hover:bg-primary hover:text-primary-foreground',
  },
  secondary: {
    progressGradient: 'bg-gradient-to-r from-secondary via-secondary/80 to-accent',
    tocHover: 'hover:text-secondary',
    sectionLink: 'text-secondary/80 transition-colors hover:text-secondary',
    footerHover: 'hover:text-secondary',
    heroBlurA: 'bg-secondary/5',
    heroBlurB: 'bg-secondary/5',
    heroBar: 'bg-gradient-to-r from-secondary to-secondary/20',
    tagHover: 'hover:bg-secondary hover:text-white',
  },
} as const;

export function ArticleClient({
  title,
  description,
  author,
  tags,
  headings,
  // eslint-disable-next-line no-unused-vars
  slugPath: _slugPath,
  image,
  accentColor = 'primary',
  breadcrumb,
  fallbackNav,
  // eslint-disable-next-line no-unused-vars
  parent: _parent = null,
  prev,
  next,
  upLink,
  childArticles,
  sectionNav,
  footerBackHref = '/detlef',
  footerBackLabel = 'Zurück zur Übersicht',
  children,
}: ArticleClientProps) {
  const accent = accentClasses[accentColor];
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(Math.min(window.scrollY / scrollHeight, 1));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed left-0 right-0 top-0 z-50 h-[3px]">
        <div
          className={`h-full ${accent.progressGradient} transition-[width] duration-150`}
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Hero Section */}
      {image ? (
        <HeroWithImage
          title={title}
          description={description}
          author={author}
          tags={tags}
          image={image}
          breadcrumb={breadcrumb}
          fallbackNav={fallbackNav}
          upLink={upLink}
        />
      ) : (
        <HeroWithoutImage
          title={title}
          description={description}
          author={author}
          tags={tags}
          breadcrumb={breadcrumb}
          fallbackNav={fallbackNav}
          upLink={upLink}
          accent={accent}
        />
      )}

      {/* Article Body */}
      <article className="relative">
        {/* Table of Contents (sidebar on desktop) */}
        {headings.length > 2 && (
          <nav className="fixed right-8 top-1/2 z-40 hidden w-56 -translate-y-1/2 lg:block">
            <div className="rounded-xl border bg-background/80 p-4 shadow-lg backdrop-blur-md">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Übersicht
              </h2>
              <ul className="space-y-1.5">
                {headings
                  .filter((h) => h.level <= 3)
                  .map((heading, i) => (
                    <li key={`${heading.id}-${i}`}>
                      <a
                        href={`#${heading.id}`}
                        className={`block text-xs leading-snug transition-colors ${accent.tocHover} ${
                          heading.level === 3 ? 'pl-3' : ''
                        } text-muted-foreground`}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>
        )}

        {/* Mobile TOC */}
        {headings.length > 2 && (
          <div className="container max-w-4xl lg:hidden">
            <details className="group mb-8">
              <summary
                className={`cursor-pointer rounded-lg border bg-muted/50 p-4 text-sm font-medium text-muted-foreground transition-colors ${accent.tocHover}`}
              >
                Inhaltsverzeichnis
              </summary>
              <nav className="mt-2 rounded-lg border bg-muted/30 p-4">
                <ul className="space-y-1.5">
                  {headings
                    .filter((h) => h.level <= 3)
                    .map((heading, i) => (
                      <li
                        key={`${heading.id}-${i}`}
                        style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
                      >
                        <a
                          href={`#${heading.id}`}
                          className={`text-sm text-muted-foreground transition-colors ${accent.tocHover}`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
            </details>
          </div>
        )}

        {/* Content */}
        <div className="container max-w-4xl pb-16">
          <div className="prose-article max-w-none">{children}</div>
        </div>

        {/* Contextual Section Navigation (Detlef-only) */}
        {sectionNav && (
          <div className="container max-w-4xl">
            <div className="mt-12 border-t border-border/40 pt-8">
              <nav className="flex flex-wrap items-center justify-between gap-3 text-sm">
                <Link
                  href={sectionNav.sectionHref}
                  className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${accent.sectionLink}`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Mehr aus {sectionNav.sectionTitle}
                </Link>
                {sectionNav.subsectionHref && (
                  <Link
                    href={sectionNav.subsectionHref}
                    className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${accent.sectionLink}`}
                  >
                    {sectionNav.subsectionTitle}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </nav>
            </div>
          </div>
        )}

        {/* Article Footer */}
        <div className="container max-w-4xl">
          <Separator className="my-8" />
          <footer className="flex items-center justify-between pb-12">
            <Link
              href={footerBackHref}
              className={`group inline-flex items-center text-sm text-muted-foreground transition-colors ${accent.footerHover}`}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {footerBackLabel}
            </Link>
            <p className="text-sm text-muted-foreground">Artikel von {author}</p>
          </footer>
        </div>

        {/* Child Article List (Detlef-only) */}
        {childArticles && childArticles.length > 0 && <ChildArticleList articles={childArticles} />}
        <PrevNextNav prev={prev} next={next} />
      </article>
    </>
  );
}

/* ── Hero with immersive background image ── */
function HeroWithImage({
  title,
  description,
  author,
  tags,
  image,
  breadcrumb,
  fallbackNav,
  upLink,
}: {
  title: string;
  description: string;
  author: string;
  tags: string[];
  image: string;
  breadcrumb?: BreadcrumbItem[] | undefined;
  fallbackNav?: FallbackNavItem[] | undefined;
  upLink?: NavLink | undefined;
}) {
  return (
    <header className="relative flex min-h-[85vh] items-end overflow-hidden">
      {/* Background Image — full bleed with cinematic parallax feel */}
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority className="object-cover" sizes="100vw" />
      </div>

      {/* Gradient overlays — multiple layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content — anchored to bottom for cinematic feel */}
      <div className="relative z-10 w-full">
        {/* Breadcrumb / Nav */}
        <div className="container max-w-4xl">
          {breadcrumb && <Breadcrumb items={breadcrumb} variant="overlay" />}
          {fallbackNav && <FallbackNav items={fallbackNav} variant="overlay" />}
          {upLink && (
            <div className="mb-4">
              <UpLink href={upLink.href} label={upLink.label} />
            </div>
          )}
        </div>

        <div className="container max-w-4xl pb-16 lg:pb-20">
          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {description}
          </p>

          {/* Meta line */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span>Von {author}</span>
            {tags.length > 0 && (
              <>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
                      <Badge
                        variant="secondary"
                        className="cursor-pointer border-white/20 bg-white/15 text-xs text-white/80 backdrop-blur-sm transition-colors hover:bg-white/25 hover:text-white"
                      >
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Decorative scroll indicator */}
          <div className="mt-12 flex animate-bounce items-center gap-2 text-white/40">
            <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1">
              <div className="h-2 w-1 rounded-full bg-white/50" />
            </div>
            <span className="text-xs uppercase tracking-widest">Scrollen</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── Hero without image — elegant text-only header ── */
function HeroWithoutImage({
  title,
  description,
  author,
  tags,
  breadcrumb,
  fallbackNav,
  upLink,
  accent,
}: {
  title: string;
  description: string;
  author: string;
  tags: string[];
  breadcrumb?: BreadcrumbItem[] | undefined;
  fallbackNav?: FallbackNavItem[] | undefined;
  upLink?: NavLink | undefined;
  accent: (typeof accentClasses)[keyof typeof accentClasses];
}) {
  return (
    <header className="gradient-background relative overflow-hidden pb-16 pt-20">
      {/* Decorative elements */}
      <div
        className={`absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full ${accent.heroBlurA} blur-3xl`}
      />
      <div
        className={`absolute bottom-0 left-0 h-64 w-64 -translate-x-1/4 translate-y-1/2 rounded-full ${accent.heroBlurB} blur-3xl`}
      />

      <div className="container relative z-10 max-w-4xl">
        {breadcrumb && <Breadcrumb items={breadcrumb} variant="default" />}
        {fallbackNav && <FallbackNav items={fallbackNav} variant="default" />}
        {upLink && (
          <div className="mb-4">
            <UpLink href={upLink.href} label={upLink.label} />
          </div>
        )}

        <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-6 max-w-2xl text-xl text-foreground/70">{description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/50">
          <span>Von {author}</span>
          {tags.length > 0 && (
            <>
              <Separator orientation="vertical" className="h-4 bg-foreground/20" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`}>
                    <Badge
                      variant="secondary"
                      className={`cursor-pointer text-xs transition-colors ${accent.tagHover}`}
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
        <div className={`mt-8 h-1 w-40 rounded ${accent.heroBar}`} />
      </div>
    </header>
  );
}

/* ── Julian-style hardcoded breadcrumb nav ── */
function FallbackNav({
  items,
  variant = 'default',
}: {
  items: FallbackNavItem[];
  variant?: 'default' | 'overlay';
}) {
  const textColor =
    variant === 'overlay'
      ? 'text-white/60 hover:text-white'
      : 'text-foreground/50 hover:text-foreground';
  const currentColor = variant === 'overlay' ? 'text-white/90' : 'text-foreground/80';
  const isOverlay = variant === 'overlay';

  return (
    <nav
      className={`flex items-center gap-2 text-sm ${isOverlay ? 'container mb-6 max-w-4xl' : 'mb-8'} ${variant === 'overlay' ? 'text-white/60' : 'text-foreground/50'}`}
    >
      {items.map((item, index) => (
        <span key={`${item.href}-${index}`} className="flex items-center gap-2">
          {item.current ? (
            <span className={currentColor}>{item.label}</span>
          ) : (
            <Link href={item.href} className={`transition-colors ${textColor}`}>
              {item.label}
            </Link>
          )}
          {index < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}
