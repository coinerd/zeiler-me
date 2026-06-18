import { FC, ReactNode } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft } from 'lucide-react';
import { ReadingTime } from '@/components/reading-time';
import { Breadcrumb } from '@/components/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Lazy-load below-fold interactive components for better initial page load
const FeedbackWidget = dynamic(() =>
  import('@/components/feedback-widget').then((mod) => ({ default: mod.FeedbackWidget }))
);
const ShareButtons = dynamic(() =>
  import('@/components/share-buttons').then((mod) => ({ default: mod.ShareButtons }))
);

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  author: string;
  readingTime?: number;
  articleUrl?: string;
  breadcrumbItems?: BreadcrumbItem[];
  backHref?: string;
  children: ReactNode;
}

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  title,
  subtitle,
  author,
  readingTime,
  articleUrl,
  breadcrumbItems,
  backHref = '/',
  children,
}) => {
  return (
    <div className="animate-fade-in container max-w-3xl py-12 md:py-16">
      {breadcrumbItems && breadcrumbItems.length > 0 && <Breadcrumb items={breadcrumbItems} />}
      {/* Article Header */}
      <div className="mb-10">
        <h1 className="mb-3 text-3xl font-bold leading-[1.15] tracking-[-0.025em] text-foreground md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mb-4 text-lg font-normal leading-relaxed text-muted-foreground md:text-xl">
            {subtitle}
          </p>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border/50 pt-5">
          <span className="text-sm text-muted-foreground">
            Von <span className="font-medium text-foreground/80">{author}</span>
          </span>
          {readingTime && (
            <>
              <span className="text-border">·</span>
              <ReadingTime minutes={readingTime} />
            </>
          )}
        </div>
      </div>

      {/* Article Content */}
      <article className="prose prose-neutral max-w-none prose-headings:tracking-[-0.015em] prose-headings:text-foreground prose-a:font-medium prose-a:text-primary hover:prose-a:text-primary/80 prose-blockquote:border-l-primary/40 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-li:marker:text-muted-foreground/60 prose-img:rounded-lg prose-img:border prose-img:border-border/30 prose-img:shadow-md prose-hr:border-border/50">
        <div className="animate-slide-up">{children}</div>
      </article>

      {/* Share Buttons */}
      {articleUrl && (
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6">
          <ShareButtons title={title} url={articleUrl} />
        </div>
      )}

      <FeedbackWidget />

      {/* Back Link */}
      <div className="mt-10 border-t border-border/40 pt-6">
        <Link
          href={backHref}
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-primary/80 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          {backHref !== '/' ? 'Zurück zur Übersicht' : 'Zurück zur Startseite'}
        </Link>
      </div>
    </div>
  );
};
