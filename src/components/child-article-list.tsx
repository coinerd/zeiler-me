import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ChildArticle {
  title: string;
  description: string;
  href: string;
}

interface ChildArticleListProps {
  articles: ChildArticle[];
}

/**
 * Renders a grid of cards linking to direct child articles.
 * Used on section/subsection pages to surface deeper content.
 */
export function ChildArticleList({ articles }: ChildArticleListProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="container mt-12 max-w-4xl border-t border-border/40 pt-8">
      <h2 className="mb-4 text-xl font-bold">Weitere Artikel</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {articles.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="group flex items-start gap-3 rounded-lg border p-4 transition-colors hover:border-primary/40 hover:bg-accent/50"
          >
            <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            <div className="min-w-0">
              <div className="text-sm font-medium transition-colors group-hover:text-primary">
                {a.title}
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{a.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
