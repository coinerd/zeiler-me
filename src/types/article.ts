export interface Article {
  slug: string;
  title: string;
  description: string;
  author: 'detlef' | 'julian';
  category: string;
  subcategory?: string;
  date: string;
  tags: string[];
  image?: string;
  readingTime?: number;
}

export interface ArticleFrontmatter {
  title: string;
  description: string;
  author: 'detlef' | 'julian';
  date: string;
  category: string;
  subcategory?: string;
  tags: string[];
  image?: string;
  readingTime?: number;
}
