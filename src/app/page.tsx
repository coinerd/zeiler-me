import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Feather, Compass } from 'lucide-react';
import type { Metadata } from 'next';
import { withBasePath } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'zeiler.me | zeiler.me',
  description:
    'Die persönliche Website von Detlef und Julian Zeiler aus Heidelberg – Artikel, Projekte und mehr',
  openGraph: {
    title: 'zeiler.me | zeiler.me',
    description:
      'Die persönliche Website von Detlef und Julian Zeiler aus Heidelberg – Artikel, Projekte und mehr',
    url: 'https://zeiler.me/',
    siteName: 'zeiler.me',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div>
      {/* ── Hero: Immersive background image with dark overlay ── */}
      <section className="gradient-background relative w-full overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={withBasePath("/images/detlef/projekte/heiligenberg/geschichte/image-3.jpg")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        <div className="container relative z-10 px-4 py-28 md:px-6 md:py-36 lg:py-44">
          <div className="animate-fade-in flex flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.08em] text-white/60 backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5" />
              Artikel · Projekte · Geschichte
            </div>
            <h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
              style={{ letterSpacing: '-0.04em', lineHeight: '1.05' }}
            >
              Detlef &amp; Julian Zeiler
            </h1>
            <p className="max-w-[520px] font-light leading-[1.75] text-white/55 md:text-[17px]">
              Herzlich Willkommen auf unseren Seiten. Hier finden Sie eine Sammlung von Artikeln,
              die wir im Laufe der Zeit geschrieben haben.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Articles — Cards with images ── */}
      <section className="w-full py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="animate-slide-up mb-16 flex flex-col items-center gap-3 text-center">
            <div className="mb-1 flex items-center gap-2.5 text-primary/50">
              <Feather className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                Empfehlungen
              </span>
            </div>
            <h2
              className="text-[2rem] font-bold tracking-tight text-foreground sm:text-[2.25rem]"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Besondere Artikel
            </h2>
            <div className="section-divider mt-3" />
            <p className="mt-2 max-w-[460px] text-[15px] leading-[1.7] text-muted-foreground">
              Eine Auswahl unserer besonderen Werke und Projekte.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <Card className="card-transition overflow-hidden border border-border/60 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={withBasePath("/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg")}
                  alt="Neuenheim wird Stadtteil von Heidelberg"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                  Detlef Zeiler
                </span>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-[15px] font-semibold leading-[1.4] tracking-[-0.01em]">
                  Neuenheim wird Stadtteil von Heidelberg
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <p className="text-[14px] leading-[1.7] text-muted-foreground">
                  Eine historische Betrachtung der Eingemeindung Neuenheims als Stadtteil von
                  Heidelberg. Im Gespräch mit Otto Jäger und Ludwig Merz.
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
                    size="sm"
                    className="group h-9 w-full gap-2 rounded-md border-border/50 text-[13px] font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    Artikel lesen
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card-transition overflow-hidden border border-border/60 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/10">
                <Image
                  src={withBasePath("/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-3.jpg")}
                  alt="Auswirkungen von Open Source Lizenzen"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                  Julian Zeiler
                </span>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-[15px] font-semibold leading-[1.4] tracking-[-0.01em]">
                  Auswirkungen von Open Source Lizenzen
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <p className="text-[14px] leading-[1.7] text-muted-foreground">
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
                    size="sm"
                    className="group h-9 w-full gap-2 rounded-md border-border/50 text-[13px] font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    Artikel lesen
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="card-transition overflow-hidden border border-border/60 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={withBasePath("/images/detlef/geschichte/thalmann/image-2.jpg")}
                  alt="Alexander von Humboldts Südamerikareise"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
                  Detlef Zeiler
                </span>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-[15px] font-semibold leading-[1.4] tracking-[-0.01em]">
                  Alexander von Humboldts Südamerikareise
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-5">
                <p className="text-[14px] leading-[1.7] text-muted-foreground">
                  Die wissenschaftliche Expedition Alexander von Humboldts durch Südamerika von 1799
                  bis 1804.
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
                    size="sm"
                    className="group h-9 w-full gap-2 rounded-md border-border/50 text-[13px] font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    Artikel lesen
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Further Topics — Image-backed cards ── */}
      <section className="w-full border-y border-border/30 bg-muted/40 py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="animate-slide-up mb-16 flex flex-col items-center gap-3 text-center">
            <div className="mb-1 flex items-center gap-2.5 text-primary/50">
              <Compass className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                Entdecken
              </span>
            </div>
            <h2
              className="text-[2rem] font-bold tracking-tight text-foreground sm:text-[2.25rem]"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Weitere Themen
            </h2>
            <div className="section-divider mt-3" />
            <p className="mt-2 max-w-[460px] text-[15px] leading-[1.7] text-muted-foreground">
              Weitere Bereiche unserer Arbeit und Interessensgebiete.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse"
              className="group"
            >
              <div className="hover-lift overflow-hidden rounded-lg border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg")}
                    alt="Hexenglauben und Hexenprozesse"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-6 text-[15px] font-semibold leading-[1.4] tracking-[-0.01em] text-white">
                    Hexenglauben und Hexenprozesse
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">
                    Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/detlef/medien/geruechte-rumores-drehbuch" className="group">
              <div className="hover-lift overflow-hidden rounded-lg border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/medien/geruechte-rumores-drehbuch/image-1.jpg")}
                    alt="Gerüchte — Rumores"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-6 text-[15px] font-semibold leading-[1.4] tracking-[-0.01em] text-white">
                    Gerüchte — Rumores (Drehbuch)
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">
                    Drehbuch und Storyboard zu einem Kurzfilm.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/detlef/projekte/old-providence-die-insel-providencia" className="group">
              <div className="hover-lift overflow-hidden rounded-lg border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={withBasePath("/images/detlef/projekte/old-providence-die-insel-providencia/image-1.jpg")}
                    alt="Die Insel Providencia"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-6 text-[15px] font-semibold leading-[1.4] tracking-[-0.01em] text-white">
                    Die Insel Providencia
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">
                    Old Providence — Kulturelle Vielfalt in der Karibik.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Video ── */}
      <section className="w-full border-y border-border/30 bg-muted/40 py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="animate-slide-up mb-12 flex flex-col items-center gap-3 text-center">
            <div className="mb-1 flex items-center gap-2.5 text-primary/50">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Video</span>
            </div>
            <h2
              className="text-[2rem] font-bold tracking-tight text-foreground sm:text-[2.25rem]"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Heidelberger Geschichte
            </h2>
            <div className="section-divider mt-3" />
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/50 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <iframe
                src="https://www.youtube-nocookie.com/embed/B8ozX05lG50"
                title="Heidelberg Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us — Profile cards with portrait images ── */}
      <section className="w-full py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="animate-slide-up mb-16 flex flex-col items-center gap-3 text-center">
            <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary/[0.06] text-primary/70">
              <Users className="h-5 w-5" />
            </div>
            <h2
              className="text-[2rem] font-bold tracking-tight text-foreground sm:text-[2.25rem]"
              style={{ letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              Über uns
            </h2>
            <div className="section-divider mt-3" />
            <p className="mt-2 max-w-[460px] text-[15px] leading-[1.7] text-muted-foreground">
              Detlef und Julian Zeiler teilen ihre Leidenschaft für Geschichte, Medien und
              Technologie.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-7 md:grid-cols-2">
            <Card className="card-transition h-full overflow-hidden border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={withBasePath("/images/detlef/image-1.jpg")}
                  alt="Detlef Zeiler"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <CardTitle className="absolute bottom-4 left-6 text-lg font-semibold tracking-[-0.015em] text-white drop-shadow-lg">
                  Detlef Zeiler
                </CardTitle>
              </div>
              <CardContent className="pt-5">
                <p className="text-[14px] leading-[1.75] text-muted-foreground">
                  Forscher und Autor mit Schwerpunkt auf Geschichte und Medien. Besonderes Interesse
                  für Lokalgeschichte und historische Entwicklungen.
                </p>
              </CardContent>
            </Card>
            <Card className="card-transition h-full overflow-hidden border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/30 via-primary/20 to-accent/10">
                <div className="select-none text-6xl font-bold text-white/20">JZ</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <CardTitle className="absolute bottom-4 left-6 text-lg font-semibold tracking-[-0.015em] text-white drop-shadow-lg">
                  Julian Zeiler
                </CardTitle>
              </div>
              <CardContent className="pt-5">
                <p className="text-[14px] leading-[1.75] text-muted-foreground">
                  Fokus auf IT, Technologie und die Auswirkungen von technologischen Entwicklungen
                  auf die Gesellschaft.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
