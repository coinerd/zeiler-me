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
import {
  ArrowRight,
  FileText,
  MessageCircle,
  Code,
  User,
  Wrench,
  Briefcase,
  Mail,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Julian Zeiler | zeiler.me',
  description: 'Über Julian Zeiler – Technologie, Open Source und Softwareentwicklung',
  openGraph: {
    title: 'Julian Zeiler | zeiler.me',
    description: 'Über Julian Zeiler – Technologie, Open Source und Softwareentwicklung',
    url: 'https://zeiler.me/julian',
    siteName: 'zeiler.me',
    type: 'website',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Julian Zeiler',
  url: 'https://zeiler.me/julian',
  jobTitle: 'IT & Technologie',
  description:
    'Julian Zeiler beschäftigt sich mit den Schnittstellen zwischen Technologie und Gesellschaft.',
};

export default function JulianPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Hero Section with Background Image */}
      <section className="gradient-background relative w-full overflow-hidden py-12 md:py-20 lg:py-24">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-4.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="animate-fade-in flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Code className="h-3.5 w-3.5" />
              IT & Technologie
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Julian Zeiler
            </h1>
            <div className="mb-6 h-1 w-24 rounded-full bg-white"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Fokus auf IT, Technologie und die Auswirkungen von technologischen Entwicklungen auf
              die Gesellschaft.
            </p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <div className="container px-4 py-16 md:px-6">
        {/* Introduction with decorative image */}
        <div className="animate-slide-up mb-16">
          <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/40 shadow-sm">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
              <div className="relative min-h-[200px] md:col-span-2">
                <Image
                  src="/images/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/image-1.jpg"
                  alt="Technologie und Landschaft"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-muted/40 md:block" />
              </div>
              <div className="p-6 md:col-span-3 md:p-10">
                <h2 className="mb-4 text-2xl font-bold text-secondary">Über Julian Zeiler</h2>
                <p className="mb-6 text-muted-foreground">
                  Julian Zeiler beschäftigt sich mit den Schnittstellen zwischen Technologie und
                  Gesellschaft. Sein Fokus liegt auf der Analyse, wie Software-Entwicklung,
                  Lizenzmodelle und technologische Innovationen unsere Arbeits- und Lebensweise
                  beeinflussen.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/julian/about-me"
                    className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary transition-colors hover:bg-secondary/20"
                  >
                    Über mich
                  </Link>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Open Source
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                    Digitale Gesellschaft
                  </span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary">
                    Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="animate-slide-up mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Link href="/julian/about-me" className="group">
            <Card className="h-full transition-all hover:border-secondary/50 hover:shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <User className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm font-medium">About Me</p>
                <p className="mt-1 text-xs text-muted-foreground">Über mich</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/julian/techzap" className="group">
            <Card className="h-full transition-all hover:border-accent/50 hover:shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20">
                  <Wrench className="h-5 w-5 text-accent" />
                </div>
                <p className="text-sm font-medium">Techzap</p>
                <p className="mt-1 text-xs text-muted-foreground">IT-Wissen & Tutorials</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/julian/work" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">Work</p>
                <p className="mt-1 text-xs text-muted-foreground">Projekte & Arbeit</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/julian/contact" className="group">
            <Card className="h-full transition-all hover:border-secondary/50 hover:shadow-lg">
              <CardContent className="p-4 text-center">
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm font-medium">Kontakt</p>
                <p className="mt-1 text-xs text-muted-foreground">Kontaktdaten</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Artikel Section */}
          <section
            id="artikel"
            className="animate-slide-up md:col-span-12"
            style={{ animationDelay: '100ms' }}
          >
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
                <FileText className="h-4 w-4 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold">Artikel</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-t-4 border-secondary transition-shadow hover:shadow-lg">
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-1.jpg"
                    alt="Was ist das Web 2.0?"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Was ist das Web 2.0?</CardTitle>
                  <CardDescription className="text-secondary/80">
                    Technologie & Internet
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Ein Blick auf die Evolution des Internets und die neue Sichtweise, die das Web
                    2.0 mit sich brachte.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/julian/artikel/was-ist-das-web-20" passHref className="w-full">
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
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-2.jpg"
                    alt="Agile Methoden"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Agile Methoden in der Softwareentwicklung</CardTitle>
                  <CardDescription className="text-secondary/80">
                    Entwicklungsmethodik
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Die agile Softwareentwicklung als beste Vorgehensweise in der Umsetzung von Web
                    2.0 Projekten.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/julian/artikel/agile-methoden-in-der-softwareentwicklung"
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
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src="/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-3.jpg"
                    alt="Open Source Lizenzen"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Auswirkungen von Ideologien der Open Source Lizenzen</CardTitle>
                  <CardDescription className="text-secondary/80">
                    Open Source Software
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Eine Analyse der Auswirkungen verschiedener Open-Source-Lizenzen und ihrer
                    ideologischen Grundlagen.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen"
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

            <div className="mt-6 text-center">
              <Link href="/julian/artikel" passHref>
                <Button variant="secondary" className="mt-4">
                  Alle Artikel anzeigen
                </Button>
              </Link>
            </div>
          </section>

          {/* Techzap Section */}
          <section
            id="techzap"
            className="animate-slide-up md:col-span-12"
            style={{ animationDelay: '150ms' }}
          >
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                <Wrench className="h-4 w-4 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Techzap – IT-Wissen</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Link href="/julian/techzap/server" className="group">
                <Card className="h-full transition-all hover:border-accent/50 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-lg">🖥️</span> Server
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Unix/Linux und Windows Server Administration.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        Unix/Linux
                      </span>
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        Windows
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/julian/techzap/design" className="group">
                <Card className="h-full transition-all hover:border-accent/50 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-lg">🎨</span> Design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Web-Design und Grafik mit Microsoft Paint.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        Microsoft Paint
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/julian/techzap/technik" className="group">
                <Card className="h-full transition-all hover:border-accent/50 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-lg">⚙️</span> Technik
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Virtualisierung und VMware Tipps.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        VMware
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/julian/techzap/programmierung" className="group">
                <Card className="h-full transition-all hover:border-accent/50 hover:shadow-lg md:col-span-3">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-lg">💻</span> Programmierung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Einführung in das Programmieren und Perl-Skripte.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        Einführung
                      </span>
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs text-accent">
                        Perl
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link href="/julian/techzap" passHref>
                <Button
                  variant="outline"
                  className="transition-colors duration-300 hover:bg-accent hover:text-white"
                >
                  <ArrowRight className="mr-2" />
                  Alle Techzap-Themen anzeigen
                </Button>
              </Link>
            </div>
          </section>

          {/* Future Article Ideas Section */}
          <section className="animate-slide-up md:col-span-12" style={{ animationDelay: '200ms' }}>
            <div className="mb-4 flex items-center">
              <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                <MessageCircle className="h-4 w-4 text-accent" />
              </div>
              <h2 className="text-2xl font-bold">Geplante Themen</h2>
            </div>

            <div className="rounded-xl border border-border/50 bg-gradient-to-br from-accent/10 to-primary/10 p-6">
              <h3 className="mb-4 text-xl font-semibold">Kommende Artikel</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                    <span className="text-xs text-accent">→</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Die Zukunft der Softwareentwicklung</h4>
                    <p className="text-sm text-muted-foreground">
                      Trends und Prognosen für die nächsten 10 Jahre in der Technologiebranche.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                    <span className="text-xs text-primary">→</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Datenschutz im digitalen Zeitalter</h4>
                    <p className="text-sm text-muted-foreground">
                      Wie neue Technologien und Regulierungen unsere Online-Privatsphäre formen.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-secondary/20">
                    <span className="text-xs text-secondary">→</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Künstliche Intelligenz und Ethik</h4>
                    <p className="text-sm text-muted-foreground">
                      Ethische Herausforderungen bei der Entwicklung und dem Einsatz von
                      KI-Systemen.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="rounded-xl border border-border/50 bg-muted p-6 text-center shadow-sm md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Kontakt aufnehmen</h2>
            <p className="mx-auto mb-6 max-w-md text-muted-foreground">
              Bei Fragen zu meinen technologischen Artikeln oder Interesse an einer Zusammenarbeit,
              nehmen Sie gerne Kontakt auf.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/julian/contact" passHref>
                <Button
                  variant="outline"
                  className="transition-colors duration-300 hover:bg-secondary hover:text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Kontaktdaten
                </Button>
              </Link>
              <Link href="/impressum" passHref>
                <Button className="bg-secondary text-white hover:bg-secondary/90">Impressum</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
