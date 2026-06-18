import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
}

interface PrevNextNavProps {
  prev?: NavItem | undefined;
  next?: NavItem | undefined;
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Artikel-Navigation"
      className="mt-10 flex items-stretch justify-between gap-4 border-t border-border/40 pt-6"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-1 items-center gap-3 rounded-lg border p-4 transition-colors hover:border-primary/40 hover:bg-accent/50"
        >
          <ChevronLeft className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Zurück</div>
            <div className="truncate text-sm font-medium transition-colors group-hover:text-primary">
              {prev.title}
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-1 items-center justify-end gap-3 rounded-lg border p-4 text-right transition-colors hover:border-primary/40 hover:bg-accent/50"
        >
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Weiter</div>
            <div className="truncate text-sm font-medium transition-colors group-hover:text-primary">
              {next.title}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
