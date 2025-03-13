import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, BookOpen, Castle, History, MapPin, Mountain, Video, Waves } from "lucide-react"
import Link from "next/link"

export default function ElsenzKraichgauPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zu Projekten
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <MapPin className="mr-1 h-4 w-4" />
              Region
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Video className="mr-1 h-4 w-4" />
              Schülerprojekt
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Die Elsenz und der Kraichgau
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Vier Schülergruppen der Klasse TG12 des Technischen Gymnasiums der Friedrich-Hecker-Schule haben Material zu folgenden Themen zusammengestellt. Diese Projektseite präsentiert ihre Forschung und Arbeit zur Region Elsenz und Kraichgau.
        </p>
      </div>

      {/* Video Links */}
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <Link href="http://www.youtube.com/watch?v=xaMXUxUg3jw" target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" className="w-full h-full flex flex-col py-6 items-center justify-center gap-3 hover:bg-accent/20">
            <Video className="h-8 w-8 text-primary" />
            <span className="text-lg font-medium">Die Elsenz und der Kraichgau</span>
            <span className="text-sm text-muted-foreground">Videoprojekt der Klasse 12 des Technischen Gymnasiums Sinsheim (ca. 13 Minuten)</span>
          </Button>
        </Link>
        <Link href="http://www.youtube.com/watch?v=DAPUUHwJ5H8" target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" className="w-full h-full flex flex-col py-6 items-center justify-center gap-3 hover:bg-accent/20">
            <Video className="h-8 w-8 text-secondary" />
            <span className="text-lg font-medium">Ritterspiel-Aufführung auf dem Steinsberg</span>
            <span className="text-sm text-muted-foreground">15 Minuten Ausschnitt (Der vollständige 45-Min. Film ist bei "MOPÄD" hinterlegt)</span>
          </Button>
        </Link>
      </div>

      {/* Main Content Sections */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Projektbereiche</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle>Geographische Lage</CardTitle>
              </div>
              <CardDescription>
                Natürliche Merkmale und geologische Besonderheiten der Region
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Waves className="h-4 w-4 text-primary/70" />
                  <span>Die Elsenz</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mountain className="h-4 w-4 text-primary/70" />
                  <span>Der Steinsberg</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary/70" />
                  <span>Gesteinsschichten im Sinsheimer Raum</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-secondary/5">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                <CardTitle>Kultur / Religion</CardTitle>
              </div>
              <CardDescription>
                Kulturelle und religiöse Prägung der Bevölkerung
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Der zweite Teil unseres Projektes handelt davon, wie die Menschen hier kulturell und religiös geprägt wurden. Von den ersten Siedlern bis zur heutigen Zeit hat sich die Region kulturell stark entwickelt.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/kultur-religion" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-accent/5">
              <div className="flex items-center gap-2">
                <History className="h-5 w-5 text-accent" />
                <CardTitle>Geschichte und Politik</CardTitle>
              </div>
              <CardDescription>
                Historische Entwicklung und politische Ereignisse
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Über den Gaubegriff, die Burg Steinsberg, Renaissance im Kraichgau, Bauernunruhen, Joss Fritz und der Bundschuh. Entdecken Sie die faszinierende Geschichte dieser Region.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:bg-accent/5 hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <Castle className="h-5 w-5 text-primary" />
                <CardTitle>Der Steinsberg</CardTitle>
              </div>
              <CardDescription>
                Die markante Burg im Kraichgau
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <figure className="overflow-hidden rounded-md">
                <div className="aspect-video bg-muted/80 flex items-center justify-center">
                  <Castle className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <figcaption className="mt-2 text-xs text-muted-foreground text-center">Burg Steinsberg, das "Compass der Kraichgaus"</figcaption>
              </figure>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground w-full text-center">
                Informationen in den Abschnitten Geographische Lage und Geschichte
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Über das Projekt</h2>
        <p className="leading-7 mb-4">
          Dieses Projekt ist ein wunderbares Beispiel für praxisorientierten Unterricht, bei dem Schüler ihre Heimatregion erforschen und dokumentieren. Die Schüler haben Recherche betrieben, Interviews geführt und ihre Ergebnisse in verschiedenen Medien präsentiert.
        </p>
        <p className="leading-7">
          Die Arbeit der Schüler trägt dazu bei, das kulturelle Erbe der Region zu bewahren und für zukünftige Generationen zugänglich zu machen.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-10 text-center">
        <Separator className="my-8" />
        <p className="text-sm text-muted-foreground">
          © 1996-2025 Detlef Zeiler - Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  )
}
