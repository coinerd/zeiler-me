import Link from 'next/link';
import Image from 'next/image';
import { FileQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { withBasePath } from '@/lib/utils';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden">
      {/* Background image with strong overlay */}
      <div className="absolute inset-0">
        <Image
          src={withBasePath("/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-4.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-8 rounded-full border border-border/30 bg-primary/10 p-6 backdrop-blur-sm">
          <FileQuestion className="h-16 w-16 text-primary/60" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Seite nicht gefunden</h1>
        <p className="mb-8 max-w-md text-lg text-muted-foreground">
          Die angeforderte Seite konnte leider nicht gefunden werden. Möglicherweise wurde sie
          verschoben oder existiert nicht mehr.
        </p>
        <div className="flex gap-4">
          <Link href="/">
            <Button>Zur Startseite</Button>
          </Link>
          <Link href="/detlef">
            <Button variant="outline">Detlef Zeiler</Button>
          </Link>
          <Link href="/julian">
            <Button variant="outline">Julian Zeiler</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
