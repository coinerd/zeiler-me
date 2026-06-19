import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Clock, Repeat } from 'lucide-react';
import type { Metadata } from 'next';
import { withBasePath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Detlef Zeiler | zeiler.me',
  description: 'Über Detlef Zeiler – Geschichte, Forschung und Projekte aus Heidelberg',
  openGraph: {
    title: 'Detlef Zeiler | zeiler.me',
    description: 'Über Detlef Zeiler – Geschichte, Forschung und Projekte aus Heidelberg',
    url: 'https://zeiler.me/detlef',
    siteName: 'zeiler.me',
    type: 'website',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Detlef Zeiler',
  url: 'https://zeiler.me/detlef',
  jobTitle: 'Forscher und Autor',
  description: 'Forscher und Autor mit Schwerpunkt auf Geschichte und Medien.',
};

export default function DetlefPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero Section with Background Image */}
      <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={withBasePath("/images/detlef/geschichte/thalmann/image-2.jpg")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary/90" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="animate-fade-in flex flex-col items-center text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Detlef Zeiler
            </h1>
            <div className="mb-6 h-1 w-24 rounded-full bg-white"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Forscher und Autor mit Schwerpunkt auf Geschichte und Medien. Besonderes Interesse für
              Lokalgeschichte und historische Entwicklungen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <div className="container px-4 py-16 md:px-6">
        {/* Introduction and Featured Work */}
        <div className="animate-slide-up mb-16">
          <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/40 shadow-sm">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
              <div className="relative min-h-[200px] md:col-span-2">
                <Image
                  src={withBasePath("/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-2.jpg")}
                  alt="Heidelberg"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-muted/40 md:block" />
              </div>
              <div className="p-6 md:col-span-3 md:p-10">
                <h2 className="mb-4 text-2xl font-bold text-primary">Über Detlef Zeiler</h2>
                <p className="mb-6 text-muted-foreground">
                  Detlef Zeiler verbindet historische Recherche mit medialer Vermittlung. Seine
                  Arbeiten umfassen lokale Geschichte Heidelbergs, internationale Projekte in
                  Südamerika und der Karibik sowie pädagogische Konzepte zur Geschichtsvermittlung.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Geschichte
                  </span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary">
                    Forschung
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                    Medien
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Heidelberg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Geschichte Section */}
          <section className="animate-slide-up md:col-span-4" style={{ animationDelay: '100ms' }}>
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                <Clock className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Geschichte</h2>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-t-4 border-primary transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/geschichte/thalmann/image-1.jpg")}
                    alt="Alexander von Humboldts Südamerikareise"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <CardTitle className="text-lg text-white drop-shadow-md">
                      Alexander von Humboldts Südamerikareise
                    </CardTitle>
                    <CardDescription className="text-white/70">1799-1804</CardDescription>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Die bahnbrechende Forschungsreise Alexander von Humboldts durch Südamerika.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/detlef/geschichte/alexander-von-humboldts-sdamerikareise"
                    passHref
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 hover:bg-primary hover:text-white"
                    >
                      <ArrowRight className="mr-2" />
                      Artikel lesen
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Projekte Section */}
          <section className="animate-slide-up md:col-span-4" style={{ animationDelay: '200ms' }}>
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
                <BarChart3 className="h-4 w-4 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold">Projekte</h2>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-t-4 border-secondary transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg")}
                    alt="Neuenheim wird Stadtteil von Heidelberg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <CardTitle className="text-lg text-white drop-shadow-md">
                      Neuenheim wird Stadtteil von Heidelberg
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Otto Jäger und Ludwig Merz
                    </CardDescription>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Eine historische Betrachtung der Eingemeindung Neuenheims als Stadtteil von
                    Heidelberg.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz"
                    passHref
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 hover:bg-secondary hover:text-white"
                    >
                      <ArrowRight className="mr-2" />
                      Artikel lesen
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden border-t-4 border-secondary transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg")}
                    alt="Hexenglauben und Hexenprozesse"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <CardTitle className="text-lg text-white drop-shadow-md">
                      Hexenglauben und Hexenprozesse
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Heidelberg im Mittelalter
                    </CardDescription>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse"
                    passHref
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 hover:bg-secondary hover:text-white"
                    >
                      <ArrowRight className="mr-2" />
                      Artikel lesen
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Medien Section */}
          <section className="animate-slide-up md:col-span-4" style={{ animationDelay: '300ms' }}>
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                <Repeat className="h-4 w-4 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Medien</h2>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border-t-4 border-accent transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/medien/geruechte-rumores-drehbuch/image-1.jpg")}
                    alt="Gerüchte - Rumores"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <CardTitle className="text-lg text-white drop-shadow-md">
                      Gerüchte - Rumores
                    </CardTitle>
                    <CardDescription className="text-white/70">Drehbuch</CardDescription>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Drehbuch und Storyboard zu einem Kurzfilm.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/detlef/medien/geruechte-rumores-drehbuch"
                    passHref
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full transition-colors duration-300 hover:bg-accent hover:text-white"
                    >
                      <ArrowRight className="mr-2" />
                      Artikel lesen
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>

        {/* More Projects */}
        <section className="animate-slide-up mb-16" style={{ animationDelay: '400ms' }}>
          <div className="mb-8 flex items-center">
            <h2 className="mr-4 text-2xl font-bold">Weitere Projekte</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-lift transition-all duration-300">
              <CardHeader className="relative overflow-hidden p-0">
                <div className="relative h-48">
                  <Image
                    src={withBasePath("/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg")}
                    alt="Praktische Heimatkunde"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <CardTitle className="text-white drop-shadow-md">
                      Praktische Heimatkunde
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="mb-2">Heidelberg im Mittelalter</CardDescription>
                <p className="text-sm text-muted-foreground">
                  Tipps und Aufgaben für Lehrer und Schüler zur praktischen Heimatkunde im
                  Heidelberger Raum.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde"
                  passHref
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="group flex w-full items-center justify-between"
                  >
                    <span>Artikel lesen</span>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover-lift transition-all duration-300">
              <CardHeader className="relative overflow-hidden p-0">
                <div className="relative h-48">
                  <Image
                    src={withBasePath("/images/detlef/projekte/old-providence-die-insel-providencia/image-1.jpg")}
                    alt="Die Insel Providencia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <CardTitle className="text-white drop-shadow-md">
                      Die Insel Providencia
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="mb-2">Old Providence</CardDescription>
                <p className="text-sm text-muted-foreground">
                  Old Providence – Kulturelle Vielfalt in der Karibik.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/detlef/projekte/old-providence-die-insel-providencia"
                  passHref
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="group flex w-full items-center justify-between"
                  >
                    <span>Artikel lesen</span>
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="animate-slide-up" style={{ animationDelay: '500ms' }}>
          <div className="rounded-xl border border-border/50 bg-muted p-6 text-center shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Kontakt aufnehmen</h2>
            <p className="mx-auto mb-6 max-w-md text-muted-foreground">
              Bei Fragen zu meinen Artikeln oder Interesse an Zusammenarbeit, nehmen Sie gerne
              Kontakt auf.
            </p>
            <Link href="/impressum" passHref>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Impressum und Kontakt
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
