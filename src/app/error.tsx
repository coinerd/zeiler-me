'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <div className="mb-8 rounded-full bg-destructive/10 p-6">
        <AlertTriangle className="h-16 w-16 text-destructive" />
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight">Etwas ist schiefgelaufen</h1>
      <p className="mb-8 max-w-md text-lg text-muted-foreground">
        Beim Laden dieser Seite ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
      </p>
      <Button onClick={reset} variant="outline">
        Erneut versuchen
      </Button>
    </div>
  );
}
