export interface Article {
  slug: string;
  title: string;
  description: string;
  author: AuthorSlug;
  section: string;
  subsection?: string;
  href: string;
  tags?: string[];
}

export type AuthorSlug = 'detlef' | 'julian';

export interface Author {
  slug: AuthorSlug;
  name: string;
  role: string;
  description: string;
  tags: string[];
  href: string;
  sections: Section[];
}

export interface Section {
  title: string;
  href: string;
  description: string;
  slug: string;
}

export interface NavEntry {
  title: string;
  href: string;
  description?: string;
  children?: NavEntry[];
}
