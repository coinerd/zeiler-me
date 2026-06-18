import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export type { BreadcrumbItem };

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: 'default' | 'overlay';
}

export function Breadcrumb({ items, variant = 'default' }: BreadcrumbProps) {
  const textColor =
    variant === 'overlay'
      ? 'text-white/70 hover:text-white'
      : 'text-muted-foreground hover:text-foreground';
  const lastColor = variant === 'overlay' ? 'text-white' : 'text-foreground';
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        <li>
          <Link href="/" className={`transition-colors ${textColor}`}>
            Startseite
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href}-${index}`} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3 opacity-50" />
              {isLast ? (
                <span className={`font-medium ${lastColor}`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`transition-colors ${textColor}`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
