import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedArticle {
  title: string;
  href: string;
  description?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="mb-4 text-xl font-semibold">Ähnliche Artikel</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <ArrowRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            <div>
              <h4 className="font-medium transition-colors group-hover:text-primary">
                {article.title}
              </h4>
              {article.description && (
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {article.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
