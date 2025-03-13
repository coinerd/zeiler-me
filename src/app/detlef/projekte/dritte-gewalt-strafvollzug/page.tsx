import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, BookOpen, Gavel, School, Video } from "lucide-react"
import Link from "next/link"

export default function DritteGewaltPage() {
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
              <Gavel className="mr-1 h-4 w-4" />
              Justiz
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Video className="mr-1 h-4 w-4" />
              Videoprojekt
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Dritte Gewalt - Strafvollzug
          </h1>
          <p className="text-xl text-muted-foreground">
            Am Beispiel der Justizvollzugsanstalt &quot;Fauler Pelz&quot; in Heidelberg
          </p>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Ein - noch unvollendetes - Videofilmprojekt der (ehemaligen) Landesbildstelle Baden und des Medienforum Heidelberg e.V.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="http://www.lmz-bw.de/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Landesbildstelle Baden
            </Button>
          </Link>
          <Link href="/detlef/projekte/dritte-gewalt-strafvollzug/medienforum-heidelberg-ev">
            <Button variant="outline" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Medienforum Heidelberg e.V.
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Context */}
      <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Über das Projekt</h2>
        <p className="leading-7 mb-4">
          Die Zahl der TV-Kanäle steigt und steigt, die Programme verflachen, der Blick auf die Mattscheibe wird oberflächlicher, man zappt sich so durch. Schon seit längerer Zeit wird von Pädagogen und Psychologen über die negativen Folgewirkungen exzessiver Nutzung audiovisueller Medien geklagt.
        </p>
        <p className="leading-7 font-semibold">
          Wir klagen nicht, wir machen selber Programm.
        </p>
      </div>

      {/* Lehrplanbezüge Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Lehrplanbezüge</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <School className="h-5 w-5 text-primary" />
                <CardTitle>Gymnasium</CardTitle>
              </div>
              <CardDescription>
                Rechtsgeschichte und Rechtsbewusstsein in der 11. Klasse
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Im Bildungsplan für das Gymnasium vom 4. Februar 1994 ist für das Fach Gemeinschaftskunde in der &quot;Lehrplaneinheit 3&quot; vorgegeben, &quot;das Recht und die Rechtsordnung in der Bundesrepublik Deutschland&quot; zu behandeln.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/dritte-gewalt-strafvollzug/gymnasium" className="w-full">
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
                <School className="h-5 w-5 text-secondary" />
                <CardTitle>Hauptschule</CardTitle>
              </div>
              <CardDescription>
                Praktischer Ansatz für die 8. Klasse
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Weniger theoretisch als im Gymnasium muss der Stoff für die 8. Klasse der Hauptschule im Fach Gemeinschaftskunde zentral angesiedelt werden.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/dritte-gewalt-strafvollzug/hauptschule" className="w-full">
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
                <School className="h-5 w-5 text-accent" />
                <CardTitle>Realschule</CardTitle>
              </div>
              <CardDescription>
                Lehrplanbezug für die 8. Klasse
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Wie in der Hauptschule, so muss unser Thema auch in der Realschule vom Lehrplan her in der 8. Klasse verankert werden.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/dritte-gewalt-strafvollzug/realschule" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <CardTitle>Beispiel für ein Projekt</CardTitle>
              </div>
              <CardDescription>
                Ein fächerübergreifendes Videoprojekt
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                In Zusammenarbeit mit dem Kurfürst-Friedrich-Gymnasium und dem Medienforum Heidelberg möchte die Landesbildstelle ein beispielhaftes Videoprojekt durchführen, in dem fächerübergreifend die Themen &quot;3. Gewalt/ Strafvollzug&quot; am Beispiel lokaler Geschichte angesprochen werden.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/dritte-gewalt-strafvollzug/beispiel-fuer-ein-projekt" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Projektdetails</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="mt-10">
        <Separator className="my-8" />
        <h2 className="text-2xl font-bold mb-4">Zusätzliche Ressourcen</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p className="leading-7 mb-4">
            Für weiterführende Informationen und Anmerkungen zum Projekt besuchen Sie die folgenden Links:
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link href="/detlef/projekte/dritte-gewalt-strafvollzug/anmerkungen">
              <Button variant="outline" size="sm">
                <BookOpen className="mr-2 h-4 w-4" />
                Anmerkungen
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          © 1985-2025 Detlef Zeiler - Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  )
}
