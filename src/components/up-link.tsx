import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';

interface UpLinkProps {
  href: string;
  label: string;
}

export function UpLink({ href, label }: UpLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent/50 hover:text-primary"
    >
      <ArrowUpLeft className="h-4 w-4" />
      Mehr aus {label}
    </Link>
  );
}
