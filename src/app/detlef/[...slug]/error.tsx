'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Article rendering error:', error);
  }, [error]);

  return (
    <div className="container max-w-4xl py-10 text-center">
      <AlertCircle className="mx-auto mb-4 h-16 w-16 text-destructive" />
      <h2 className="mb-2 text-2xl font-bold">Fehler beim Laden</h2>
      <p className="mb-6 text-muted-foreground">Dieser Artikel konnte nicht geladen werden.</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          Erneut versuchen
        </button>
        <Link href="/detlef" className="rounded-md border px-4 py-2 hover:bg-accent">
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
}
