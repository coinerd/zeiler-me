import Link from 'next/link';

export default function OfflinePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Du bist offline</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Es scheint, als hättest du keine Internetverbindung. Bitte überprüfe deine Verbindung und
        versuche es erneut.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
