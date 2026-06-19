const basePath = process.env.BASE_PATH || '';

function withBasePath(path: string): string {
  if (path.startsWith('/') && !path.startsWith('//')) {
    return `${basePath}${path}`;
  }
  return path;
}

export function createArticleJsonLd(article: {
  title: string;
  description: string;
  author: string;
  date: string;
  slug: string;
  collection: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.date,
    dateModified: article.dateModified || article.date,
    url: `https://zeiler.me/${article.collection}/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://zeiler.me/${article.collection}/${article.slug}`,
    },
    image: article.image ? withBasePath(article.image) : 'https://zeiler.me/images/og/default.png',
    publisher: {
      '@type': 'Organization',
      name: 'ZEILER.me',
      url: 'https://zeiler.me',
    },
    inLanguage: 'de-DE',
  };
}

export function createBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
