import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CalendarDays, History, School } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichtenSchuelerunruhenPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte/heidelberger-schulgeschichten"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zur Übersicht
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <History className="mr-1 h-4 w-4" />
              1968
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Schülerunruhen
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Schülerunruhen am KFG im Jahre 1968
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Proteste und Bildungsreform
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Das Jahr 1968 war weltweit ein Jahr des Umbruchs und der Proteste. Auch am Kurfürst-Friedrich-Gymnasium (KFG) in Heidelberg kam es zu Schülerunruhen, die Teil der größeren 68er-Bewegung waren.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die Ursachen und den Verlauf der Schülerunruhen am KFG, die Forderungen der Schüler und die Auswirkungen auf das Bildungswesen.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Ursachen der Schülerunruhen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Ursachen der Schülerunruhen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Schülerunruhen am KFG waren Teil der weltweiten 68er-Bewegung, die sich gegen autoritäre Strukturen und gesellschaftliche Ungerechtigkeiten wandte. Die Schüler forderten mehr Mitbestimmung, eine Reform des Bildungssystems und eine kritischere Auseinandersetzung mit der deutschen Geschichte.
            </p>
            <p className="leading-7">
              Auch die gesellschaftlichen Umbrüche der 1960er Jahre, wie die Bürgerrechtsbewegung in den USA, der Vietnamkrieg und der Kampf gegen die Apartheid in Südafrika, beeinflussten die Schüler und führten zu einer Politisierung der Jugend.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Darstellung von Schülerprotesten in den 1960er Jahren]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die Schüler am KFG forderten eine Demokratisierung der Schulen, mehr Mitbestimmung in der Schulpolitik und eine Reform der Lehrpläne. Sie kritisierten die autoritären Strukturen und den Mangel an kritischem Denken im Unterricht.
            </p>
          </div>
        </section>

        {/* Section 2: Verlauf der Schülerunruhen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <History className="mr-2 h-5 w-5" />
            Verlauf der Schülerunruhen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Schülerunruhen am KFG begannen im Frühjahr 1968 und dauerten mehrere Monate. Die Schüler organisierten Demonstrationen, Besetzungen und Diskussionsveranstaltungen, um ihre Forderungen öffentlich zu machen.
            </p>
            <p className="leading-7">
              Die Schulleitung reagierte zunächst mit Repressionen und versuchte, die Proteste zu unterdrücken. Doch die Schüler ließen sich nicht einschüchtern und setzten ihren Protest fort. Sie erhielten Unterstützung von Eltern, Lehrern und anderen Schülern.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Die Besetzung des KFG</CardTitle>
                <CardDescription>Ein Höhepunkt der Schülerproteste</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Ein Höhepunkt der Schülerproteste war die Besetzung des KFG im Mai 1968. Die Schüler besetzten das Schulgebäude, um auf ihre Forderungen aufmerksam zu machen und die Schulleitung zum Dialog zu zwingen.
                </p>
                <p className="leading-7 mt-4">
                  Die Besetzung führte zu einem großen Medienecho und machte die Schülerunruhen am KFG bundesweit bekannt. Die Schulleitung lenkte schließlich ein und erklärte sich bereit, mit den Schülern über ihre Forderungen zu verhandeln.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Die Schülerunruhen am KFG waren ein wichtiger Beitrag zur 68er-Bewegung und führten zu einer stärkeren Politisierung der Schüler. Sie zeigten, dass auch Schüler in der Lage sind, gesellschaftliche Veränderungen zu fordern und durchzusetzen.
            </p>
          </div>
        </section>

        {/* Section 3: Auswirkungen der Schülerunruhen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Auswirkungen der Schülerunruhen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Schülerunruhen am KFG hatten weitreichende Auswirkungen auf das Bildungswesen. Sie führten zu einer stärkeren Demokratisierung der Schulen und einer Reform der Lehrpläne. Die Schüler erhielten mehr Mitbestimmung in der Schulpolitik, und der Unterricht wurde offener und partizipativer gestaltet.
            </p>
            <p className="leading-7">
              Auch die Rolle der Lehrer änderte sich. Sie wurden zu Moderatoren und Begleitern im Lernprozess, die die Schüler zu kritischem Denken und eigenverantwortlichem Lernen anregen sollten.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Darstellung von Bildungsreformen in den 1970er Jahren]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die Schülerunruhen am KFG waren ein wichtiger Schritt zur Demokratisierung des Bildungswesens und trugen dazu bei, die Bildung für alle zugänglicher zu machen. Sie zeigten, dass gesellschaftliche Veränderungen auch von der Jugend ausgehen können und dass Schüler in der Lage sind, Verantwortung für ihre Bildung zu übernehmen.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Zeitleiste: Schülerunruhen am KFG im Jahre 1968</h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">Frühjahr 1968</p>
                <p className="text-muted-foreground">Beginn der Schülerunruhen am KFG</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">Mai 1968</p>
                <p className="text-muted-foreground">Besetzung des KFG durch Schüler</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">Sommer 1968</p>
                <p className="text-muted-foreground">Verhandlungen zwischen Schülern und Schulleitung</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">Ende 1968</p>
                <p className="text-muted-foreground">Beginn der Bildungsreformen</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/lehrerschaft-kfg-3tes-reich">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Die Lehrerschaft des KFG in der NS-Zeit
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-20te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <School className="mr-2 h-4 w-4" />
              Das 20. Jahrhundert
            </Button>
          </Link>
        </div>
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
