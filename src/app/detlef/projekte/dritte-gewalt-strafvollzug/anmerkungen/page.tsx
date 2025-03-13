import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, ExternalLink, Library, ScrollText } from "lucide-react"
import Link from "next/link"

export default function AnmerkungenPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte/dritte-gewalt-strafvollzug"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zu Dritte Gewalt - Strafvollzug
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <Library className="mr-1 h-4 w-4" />
              Literatur
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <ScrollText className="mr-1 h-4 w-4" />
              Quellen
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Anmerkungen
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        <section className="bg-muted/50 rounded-lg p-6 border border-border">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Literaturhinweise und Quellen
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">Wochenschau zum Thema "Kriminalität"</h3>
              <p className="mb-3">
                Vgl. dazu das Heft Nr. 4, 1994 der "Wochenschau" zum Thema "Kriminalität", zu dem ein methodisch-didaktisches Lehrerbegleitheft bestellt werden kann.
              </p>
              <div className="text-sm bg-background/50 p-3 rounded-md">
                <p className="font-medium">Bezugsquelle:</p>
                <p>Wochenschau-Verlag</p>
                <p>Adolf-Damaschke-Straße 103</p>
                <p>65824 Schwalbach/Ts</p>
                <p>Tel.: 06196-84010</p>
                <p>Fax.: 06196-86060</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">Historischer Rückblick</h3>
              <p className="mb-3">
                Für einen historischen Rückblick (im Fach Geschichte: Mittelalter-Neuzeit!) bietet sich der Aufsatz: "Mord und Totschlag - Als es noch keine Polizei gab" an, der in dem historischen Magazin "DAMALS" 6/95 erschienen ist.
              </p>
              <div className="text-sm bg-background/50 p-3 rounded-md">
                <p className="font-medium">Herausgeber:</p>
                <p>Deutsche Verlags-Anstalt GmbH, Stuttgart</p>
                <p>ISSN 0011-5908</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">Informationen zur politischen Bildung</h3>
              <p className="mb-3">
                Kostenlos bekommen kann man das Heft 248 der "Informationen zur politischen Bildung" (3. Quartal 1995) zum Thema Kriminalität und Strafrecht, in dem Ursachen der Kriminalität, ein aktuelles Lagebild der Kriminalität, aber auch geschichtliche und ethische Fragen abgehandelt werden.
              </p>
              <div className="text-sm bg-background/50 p-3 rounded-md">
                <p className="font-medium">Herausgeber:</p>
                <p>Bundeszentrale für politische Bildung</p>
                <p>Berliner Freiheit 7</p>
                <p>53111 Bonn</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2">Gewalt in der Schule</h3>
              <p className="mb-3">
                Zum Thema "Gewalt in der Schule": Schul-Intern, Heft 1/95. Ministerium für Kultus und Sport. In der Reihe "Schul-Intern" sind auch einige Aufsätze zum fächerübergreifenden Unterricht erschienen.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Medienpädagogik und fächerübergreifender Unterricht</h3>
          <p className="text-muted-foreground mb-4">
            Fächerübergreifende Projekte werden vor allem im medienpädagogischen Bereich empfohlen, da für Medienpädagogik kein eigenes Fach vorgesehen ist. Vgl. dazu die Empfehlungen der Bund-Länder-Konferenz aus dem Jahre 1994 und die ergänzenden Bemerkungen der Kultusministerkonferenz aus dem Jahre 1995.
          </p>
          <p className="text-muted-foreground font-medium">
            Medienpädagogik könnte in Zukunft eine Schlüsselstellung für den fächerübergreifenden Unterricht einnehmen, der inzwischen auch in den Lehrplänen der verschiedenen Schularten ausgewiesen ist.
          </p>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-lg px-6 py-3 border border-primary/20">
            <ExternalLink className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Weitere Ressourcen auf Anfrage verfügbar</span>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <Separator className="my-8" />
        <p className="text-sm text-muted-foreground">
          © 1996-2025 Detlef Zeiler - Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  )
}
