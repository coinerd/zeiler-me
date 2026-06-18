import { ArticleCard } from './article-card';

interface ArticleListItem {
  title: string;
  description: string;
  href: string;
  category?: string;
  borderColor?: 'primary' | 'secondary' | 'accent';
}

interface ArticleListProps {
  articles: ArticleListItem[];
  columns?: 2 | 3;
}

export function ArticleList({ articles, columns = 3 }: ArticleListProps) {
  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';

  return (
    <div className={gridClass}>
      {articles.map((article) => (
        <ArticleCard key={article.href} {...article} />
      ))}
    </div>
  );
}
