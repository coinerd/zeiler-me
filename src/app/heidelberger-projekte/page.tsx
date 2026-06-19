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
import { ArrowRight, Building2, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { withBasePath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Heidelberger Projekte | zeiler.me',
  description:
    'Übersicht der Heidelberger Projekte von Detlef Zeiler – Geschichte, Mittelalter und mehr',
  openGraph: {
    title: 'Heidelberger Projekte | zeiler.me',
    description:
      'Übersicht der Heidelberger Projekte von Detlef Zeiler – Geschichte, Mittelalter und mehr',
    url: 'https://zeiler.me/heidelberger-projekte',
    siteName: 'zeiler.me',
    type: 'website',
  },
};

export default function HeidelbergerProjektePage() {
  return (
    <div>
      {/* Hero Section with Heidelberg image background */}
      <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={withBasePath(
              '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-2.jpg'
            )}
            alt="Heidelberg historisch"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="animate-fade-in flex flex-col items-center text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              <Building2 className="h-3.5 w-3.5" />
              Lokalgeschichte
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Heidelberger Projekte von Detlef Zeiler
            </h1>
            <div className="mb-6 h-1 w-24 rounded-full bg-white"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Eine Sammlung von Projekten und Artikeln mit Bezug zu Heidelberg und seiner Geschichte
              von Detlef Zeiler.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Container */}
      <div className="container px-4 py-16 md:px-6">
        {/* Introduction with image */}
        <div className="animate-slide-up mb-16">
          <div className="overflow-hidden rounded-xl border border-border/50 bg-muted/40 shadow-sm">
            <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
              <div className="relative min-h-[200px] md:col-span-2">
                <Image
                  src={withBasePath(
                    '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg'
                  )}
                  alt="Heidelberg Geschichte"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-muted/40 md:block" />
              </div>
              <div className="p-6 md:col-span-3 md:p-10">
                <h2 className="mb-4 text-2xl font-bold text-primary">
                  Über die Heidelberger Projekte von Detlef Zeiler
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Heidelberg, eine der ältesten Universitätsstädte Deutschlands, hat eine reiche
                  Geschichte, die bis ins Mittelalter zurückreicht. Diese Sammlung umfasst Artikel
                  zu verschiedenen Aspekten der Heidelberger Geschichte, von der Eingemeindung
                  Neuenheims bis hin zu mittelalterlichen Phänomenen wie dem Hexenglauben, der
                  Universität, dem Strafrecht und dem sozialen Leben.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Geschichte
                  </span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-secondary">
                    Mittelalter
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent">
                    Lokalgeschichte
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Neuenheim
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Map replaced with immersive image */}
        <div className="animate-slide-up mb-16" style={{ animationDelay: '100ms' }}>
          <div className="relative h-64 overflow-hidden rounded-xl border border-border/50 md:h-96">
            <Image
              src={withBasePath(
                '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg'
              )}
              alt="Historisches Heidelberg"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-lg">
                Historisches Heidelberg
              </h3>
              <p className="max-w-lg text-sm text-white/70">
                Von der Stadtgründung im Mittelalter bis zur Eingemeindung Neuenheims — die
                Geschichte Heidelbergs in Artikeln und Dokumenten.
              </p>
            </div>
          </div>
        </div>

        {/* Project Cards — with images */}
        <h2
          className="animate-slide-up mb-8 flex items-center text-2xl font-bold"
          style={{ animationDelay: '200ms' }}
        >
          <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
            <Building2 className="h-4 w-4 text-primary" />
          </div>
          Heidelberg im Mittelalter
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-primary transition-shadow hover:shadow-lg"
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg'
                )}
                alt="Stadtgründung"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Stadtgründung - Stadtentwicklung</CardTitle>
              <CardDescription className="text-primary/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Die historische Entwicklung der Stadt Heidelberg im Mittelalter.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-secondary transition-shadow hover:shadow-lg"
            style={{ animationDelay: '400ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg'
                )}
                alt="Universität"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Universität und Studenten</CardTitle>
              <CardDescription className="text-secondary/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Geschichte der Universität Heidelberg und das Studentenleben im Mittelalter.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-secondary hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-accent transition-shadow hover:shadow-lg"
            style={{ animationDelay: '500ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg'
                )}
                alt="Strafrecht"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Strafrecht und Strafvollzug</CardTitle>
              <CardDescription className="text-accent/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Das Strafrechtssystem und der Strafvollzug im mittelalterlichen Heidelberg.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-accent hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-primary transition-shadow hover:shadow-lg"
            style={{ animationDelay: '600ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg'
                )}
                alt="Sittenstrafordnung"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Sittenstrafordnung für Dirnen</CardTitle>
              <CardDescription className="text-primary/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Auszug aus der Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten
                Ott-Heinrich.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/sittenstrafordnung-fuer-dirnen"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-secondary transition-shadow hover:shadow-lg"
            style={{ animationDelay: '700ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg'
                )}
                alt="Das älteste Gewerbe"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Das älteste Gewerbe</CardTitle>
              <CardDescription className="text-secondary/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Prostitution im mittelalterlichen Heidelberg.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/das-aelteste-gewerbe"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-secondary hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-accent transition-shadow hover:shadow-lg"
            style={{ animationDelay: '800ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg'
                )}
                alt="Hexenglauben"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Hexenglauben und Hexenprozesse</CardTitle>
              <CardDescription className="text-accent/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
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
                  className="w-full transition-colors duration-300 hover:bg-accent hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-primary transition-shadow hover:shadow-lg"
            style={{ animationDelay: '900ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-2.jpg'
                )}
                alt="Juden"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Juden im mittelalterlichen Heidelberg</CardTitle>
              <CardDescription className="text-primary/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Geschichte der jüdischen Gemeinde im mittelalterlichen Heidelberg.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/juden-im-mittelalterlichen-heidelberg"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-secondary transition-shadow hover:shadow-lg"
            style={{ animationDelay: '1000ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg'
                )}
                alt="Armenpflege"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Armenpflege und soziale Einrichtungen</CardTitle>
              <CardDescription className="text-secondary/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Soziale Fürsorge im mittelalterlichen Heidelberg.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/detlef/projekte/heidelberg-im-mittelalter/armenpflege-und-soziale-einrichtungen"
                passHref
                className="w-full"
              >
                <Button
                  variant="outline"
                  className="w-full transition-colors duration-300 hover:bg-secondary hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card
            className="animate-slide-up overflow-hidden border-t-4 border-accent transition-shadow hover:shadow-lg"
            style={{ animationDelay: '1100ms' }}
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={withBasePath(
                  '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg'
                )}
                alt="Praktische Heimatkunde"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Praktische Heimatkunde</CardTitle>
              <CardDescription className="text-accent/80">
                Heidelberg im Mittelalter
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
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
                  className="w-full transition-colors duration-300 hover:bg-accent hover:text-white"
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Artikel lesen
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Other Heidelberg Projects */}
        <h2
          className="animate-slide-up mb-8 flex items-center text-2xl font-bold"
          style={{ animationDelay: '1200ms' }}
        >
          <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
            <Building2 className="h-4 w-4 text-primary" />
          </div>
          Weitere Heidelberger Projekte
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover-lift overflow-hidden transition-all duration-300">
            <CardHeader className="relative overflow-hidden p-0">
              <div className="relative h-48">
                <Image
                  src={withBasePath(
                    '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg'
                  )}
                  alt="Neuenheim wird Stadtteil von Heidelberg"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <CardTitle className="text-white drop-shadow-md">
                    Neuenheim wird Stadtteil
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="mb-2">Otto Jäger und Ludwig Merz</CardDescription>
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
                  className="group flex w-full items-center justify-between"
                >
                  <span>Artikel lesen</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover-lift overflow-hidden transition-all duration-300">
            <CardHeader className="relative overflow-hidden p-0">
              <div className="relative h-48">
                <Image
                  src={withBasePath(
                    '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg'
                  )}
                  alt="Hexenglauben und Hexenprozesse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <CardTitle className="text-white drop-shadow-md">
                    Hexenglauben und Hexenprozesse
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <CardDescription className="mb-2">Heidelberg im Mittelalter</CardDescription>
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
                  className="group flex w-full items-center justify-between"
                >
                  <span>Artikel lesen</span>
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="hover-lift overflow-hidden transition-all duration-300">
            <CardHeader className="relative overflow-hidden p-0">
              <div className="relative h-48">
                <Image
                  src={withBasePath(
                    '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg'
                  )}
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
        </div>

        {/* Historical Timeline Section with decorative image */}
        <section className="animate-slide-up mb-16" style={{ animationDelay: '1600ms' }}>
          <h2 className="mb-8 flex items-center text-2xl font-bold">
            <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
              <Clock className="h-4 w-4 text-secondary" />
            </div>
            Historische Zeitlinie
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative space-y-8 border-l-2 border-primary/20 pb-8 pl-8">
                <div className="relative">
                  <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-bold">1392</h3>
                  <p className="text-muted-foreground">
                    Früheste dokumentierte Hexenprozesse in der Region Heidelberg
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-bold">1871</h3>
                  <p className="text-muted-foreground">
                    Eingemeindung von Schlierbach als erster Vorort
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-bold">1891</h3>
                  <p className="text-muted-foreground">
                    Eingemeindung von Neuenheim, beschrieben im Artikel von Otto Jäger und Ludwig
                    Merz
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-xl font-bold">1920</h3>
                  <p className="text-muted-foreground">
                    Beginn moderner heimatkundlicher Forschung in Heidelberg
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-xl">
                <Image
                  src={withBasePath(
                    '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-2.jpg'
                  )}
                  alt="Heidelberg Geschichte"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Further Reading Section */}
        <section className="animate-slide-up" style={{ animationDelay: '1700ms' }}>
          <div className="rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 to-secondary/5 p-6 text-center md:p-8">
            <h2 className="mb-4 text-2xl font-bold">Interesse an weiteren Heidelberg-Projekten?</h2>
            <p className="mx-auto mb-6 max-w-md text-muted-foreground">
              Wir sind stets auf der Suche nach Materialien zur Geschichte Heidelbergs. Wenn Sie
              Dokumente, Fotos oder Geschichten teilen möchten, kontaktieren Sie uns.
            </p>
            <Link href="/impressum" passHref>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
