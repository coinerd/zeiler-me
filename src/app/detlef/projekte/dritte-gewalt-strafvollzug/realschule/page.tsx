import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, GraduationCap, Scale, Users } from "lucide-react"
import Link from "next/link"

export default function RealschulePage() {
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
              <GraduationCap className="mr-1 h-4 w-4" />
              Lehrplan
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Scale className="mr-1 h-4 w-4" />
              Der Einzelne im Rechtsstaat
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Realschule
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        <section className="bg-muted/50 rounded-lg p-6 border border-border">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Lehrplanbezug
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Wie in der Hauptschule, so muß unser Thema auch in der Realschule vom Lehrplan her in der 8. Klasse verankert werden. Der Anschluß wäre hier in der Lehrplaneinheit 1 des Faches Gemeinschaftskunde gegeben: "Der einzelne im Rechtsstaat" (S.229)
            </p>
            <p className="font-medium text-foreground">
              Im Vergleich zu den Lehrplanvorgaben anderer Schularten ist hier der Bezug zum Thema Strafvollzug sehr explizit formuliert:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Formen und Ursachen der Straffälligkeit von Jugendlichen</li>
              <li>Sinn der Strafe</li>
              <li>Verschiedene Modelle des Strafvollzugs</li>
              <li>Strafe und Resozialisierung</li>
            </ul>
            <p>
              All dies lädt geradezu ein, eine Justizvollzugsanstalt einmal konkreter unter die Lupe zu nehmen und aus der Sicht verschiedener Berufe im Strafvollzug zu untersuchen.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Fächerverbindende Themen</h3>
            <p className="text-muted-foreground mb-4">
              Auch hier lassen sich viele fächerübergreifende Bezüge herstellen. Thema 5 der "fächerverbindenen Themen" lautet "Anderen helfen". (S. 213)
            </p>
            <div className="bg-primary/10 p-4 rounded-lg mt-4">
              <p className="text-sm font-medium">Leitfrage:</p>
              <p className="text-sm text-muted-foreground">Wie läßt sich diese Frage im Zusammenhang mit Tätern und Opfern besprechen?</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Religionslehre</h3>
            <p className="text-muted-foreground mb-4">
              Die Fächer Katholische- und Evangelische Religionslehre bieten hier ebenfalls Bezüge:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-accent" />
                <span>LPE 5 in der Kath. Religionslehre lautet: "Sich mit Gewalt durchsetzen?" (S.219) und fragt nach Ursachen und Alternativen zur Gewalt.</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-accent" />
                <span>Die Evangelische Religionslehre spricht in der LPE 8.5.2 vom "Recht, eine andere / ein anderer zu werden" (S.215)</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-accent" />
                <span>LPE 8.6. behandelt die Probleme der Gewissensbildung und der Gewissensentscheidung. (S.215/16)</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Fach Deutsch</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Arbeitsbereich 1: Sprechen und Schreiben (30 Stunden)</h4>
              <p className="text-muted-foreground">
                Der "Arbeitsbereich 1: Sprechen und Schreiben" (S. 221) bietet hier eine Fülle an Möglichkeiten. Gespräche führen, fremde Meinungen berücksichtigen, Informationen beschaffen, Argumentieren - all dies läßt sich leicht themenspezifisch erlernen.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-2">Arbeitsbereich 2 (25 Stunden)</h4>
              <p className="text-muted-foreground">
                Im "Arbeitsbereich 2" (S. 222) läßt das Fach Deutsch dem Lehrer 25 Stunden, um Gedichte, Kurzgeschichten, ein Jugendbuch, dramatische Texte (Hörspiele) oder Sachtexte zu behandeln. Im Bereich der Kurzgeschichten oder beim Jugendbuch lassen sich thematische Verknüpfungen leicht herstellen.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-primary" />
            Praktische Umsetzung
          </h3>
          <p className="text-muted-foreground">
            Die expliziten Lehrplanvorgaben der Realschule bieten besonders gute Möglichkeiten, das Thema Strafvollzug praxisnah zu behandeln. Die Schüler können durch Besuche, Interviews und Projektarbeiten einen direkten Einblick in die Thematik gewinnen und verschiedene Perspektiven kennenlernen.
          </p>
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
