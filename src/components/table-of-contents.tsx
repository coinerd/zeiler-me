'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('article h2, article h3')
    ) as HTMLElement[];

    const items: TocItem[] = elements.map((el) => ({
      id:
        el.id ||
        el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9äöüß]+/g, '-')
          .replace(/(^-|-$)/g, '') ||
        '',
      text: el.textContent || '',
      level: el.tagName === 'H2' ? 2 : 3,
    }));

    elements.forEach((el, i) => {
      if (!el.id) {
        el.id = items[i]?.id || '';
      }
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Inhaltsverzeichnis" className="hidden lg:block">
      <h4 className="mb-3 text-sm font-semibold">Inhaltsverzeichnis</h4>
      <ul className="space-y-1 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
            <a
              href={`#${heading.id}`}
              className={`block py-1 transition-colors hover:text-primary ${
                activeId === heading.id
                  ? 'border-l-2 border-primary pl-2 font-medium text-primary'
                  : 'pl-2 text-muted-foreground'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
