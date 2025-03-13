import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, BookOpen, History, Mountain, Video } from "lucide-react"
import Link from "next/link"

export default function HeiligenbergPage() {
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
              <Mountain className="mr-1 h-4 w-4" />
              Heidelberg
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Video className="mr-1 h-4 w-4" />
              MOPÄD Projekt
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Der Heiligenberg bei Heidelberg
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Der Heiligenberg ist einer der markantesten Berge Heidelbergs und birgt eine reiche Geschichte voller Mythen und historischer Bedeutung. Diese Projektseite dokumentiert unsere umfassende Arbeit zum Heiligenberg.
        </p>
        <p className="leading-7">
          Ein Projekt der &quot;Mobilen Pädagogen&quot; (MOPÄD) aus dem Jahr 1985, überarbeitet im Februar 1996.
        </p>
      </div>

      {/* Contents Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Inhaltsverzeichnis</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                <CardTitle>Die Geschichte des Heiligenbergs</CardTitle>
              </div>
              <CardDescription>
                Historischer Überblick über die Entwicklung des Heiligenbergs von prähistorischer Zeit bis heute.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Erfahren Sie mehr über die verschiedenen Epochen und bedeutsamen Ereignisse, die den Heiligenberg geprägt haben.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heiligenberg/geschichte" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Zur Geschichte</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-secondary/5">
              <div className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-secondary" />
                <CardTitle>Der unheimliche Berg</CardTitle>
              </div>
              <CardDescription>
                Mythen, Legenden und Geheimnisse rund um den Heiligenberg.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Tauchen Sie ein in die mysteriöse Seite des Heiligenbergs und seine kulturelle Bedeutung im Volksglauben.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heiligenberg/der-unheimliche-berg" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Zu den Mythen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-accent/5">
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-accent" />
                <CardTitle>Unser Projekt</CardTitle>
              </div>
              <CardDescription>
                Details zum Videofilmprojekt über den Heiligenberg.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Hintergrundinformationen zur Entstehung und Umsetzung des Videofilmprojekts sowie Einblicke in den Produktionsprozess.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heiligenberg/projekt" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Zum Projekt</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>Mobile Pädagogen (MOPÄD)</CardTitle>
              </div>
              <CardDescription>
                Über die Projektgruppe hinter der Heiligenberg-Dokumentation.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                MOPÄD ist ein chamäleonartiges &quot;Gebilde&quot;, das im Jahre 1985 über ein Videofilmprojekt zum Heiligenberg bei Heidelberg entstanden ist und sich von Projekt zu Projekt ändert.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heiligenberg/mopaed" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Über MOPÄD</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-10">
        <Separator className="my-8" />
        <h2 className="text-2xl font-bold mb-4">Aufbau und Einsatzmöglichkeiten des Filmes</h2>
        <div className="bg-muted p-6 rounded-lg">
          <p className="leading-7 mb-4">
            Der Film über den Heiligenberg wurde so konzipiert, dass er vielseitig in der pädagogischen Arbeit eingesetzt werden kann. Er kombiniert historische Fakten mit lokalen Mythen und vermittelt ein umfassendes Bild dieses bedeutenden Ortes.
          </p>
          <p className="leading-7">
            Durch seine modulare Struktur eignet sich der Film für verschiedene Zielgruppen und kann sowohl im schulischen Unterricht als auch in der Erwachsenenbildung verwendet werden.
          </p>
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Über das Heiligenberg-Projekt</h2>
        <p className="leading-7 mb-4">
          MOPÄD ist ein chamäleonartiges &quot;Gebilde&quot;, das im Jahre 1985 über ein Videofilprojekt zum Heiligenberg bei Heidelberg entstanden ist und sich von Projekt zu Projekt ändert: Mal werden Schüler, Jugendliche und Lehrer in die Videofilmtechnik eingewiesen, um mit ihnen z.B. einen Film über eine Schulpartnerschaft drehen zu können.
        </p>
        <p className="leading-7">
          Dieses Projekt war der Ausgangspunkt für zahlreiche weitere pädagogische Initiativen und hat dazu beigetragen, die lokale Geschichte und Kultur für nachfolgende Generationen zugänglich zu machen.
        </p>
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
