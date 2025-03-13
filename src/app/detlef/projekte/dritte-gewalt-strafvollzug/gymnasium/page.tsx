import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, GraduationCap, Scale } from "lucide-react"
import Link from "next/link"

export default function GymnasiumPage() {
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
              Rechtskunde
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Gymnasium
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
              Rechtsgeschichte und Rechtsbewußtsein sind Themen der 11. Klasse des Gymnasiums. Im Bildungsplan für das Gymnasium vom 4. Februar 1994 ist für das Fach Gemeinschaftskunde in der "Lehrplaneinheit 3" vorgegeben, "das Recht und die Rechtsordnung in der Bundesrepublik Deutschland" (S. 539/40) zu behandeln.
            </p>
            <p>
              Von den historischen Staatstheorien (Hobbes, Locke, Marx ...) über die Aufgaben des Grundgesetzes bis hin zur Problematik der Wiedervereinigung soll den Schülern die Aufgabe staatlicher Gewalt im Rahmen einer Verfassung und das Verständnis des hohen Wertes der Rechtsstaatlichkeit in einer Demokratie vermittelt werden.
            </p>
            <p className="font-medium text-foreground">
              Dabei handelt es sich nicht nur um eine distanzierte Wissensvermittlung, sondern zugleich um die Vermittlung elementarer Werte für unsere Gesellschaft. Dies verlangt Anschaulichkeit.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Didaktische Ansätze</h3>
            <p className="text-muted-foreground mb-4">
              Wo immer es möglich ist, sollten Schüler sich anschaulich mit der Geschichte des Rechts auseinandersetzen. Für den Lehrer bietet sich hier die Behandlung aktueller Rechtsfragen an, die von der Tagespolitik her umstritten sind (Wiedervereinigung und die Folgen für die Bürger in Ost- und Westdeutschland).
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                  <Scale className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Besuch einer Gerichtsverhandlung und das anschließende Gespräch mit dem betreffenden Richter</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                  <Scale className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Fächerübergreifendes Projekt zur Geschichte und Gegenwart eines nahegelegenen Gefängnisses</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Strafvollzug als Spiegel der Gesellschaft</h3>
          <p className="text-muted-foreground mb-4">
            In einem Gefängnis spiegelt sich die Rechtsauffassung einer Gesellschaft krasser als in allen anderen Institutionen, weil hier Sanktionen auf drastische Weise durchgesetzt werden müssen.
          </p>
          <p className="text-muted-foreground mb-4">
            Die vorbürgerliche Strafauffassung (vgl. noch die Behandlung der Räuberbanden in der napoleonischen Zeit um das Jahr 1800) mit den exemplarischen und harten Bestrafungen einzelner "Übertäter" im Namen des durch den Fürsten repräsentierten Staates wurde Mitte des 19. Jahrhunderts in vielen europäischen Ländern zurückgedrängt.
          </p>
          <p className="text-muted-foreground mb-4">
            Sie wurde ersetzt durch bürgerliche Rechtsauffassungen, die (von der Theorie her) verlangen, daß Gesetze alle Menschen rechtlich gleich behandeln und Normabweichungen nicht nur bestraft, sondern auch über pädagogische Maßnahmen korrigiert werden sollen.
          </p>
          <p className="text-muted-foreground">
            Aus der strikten individuellen Behandlung ist bis heute wieder ein eher sozialer Vollzug der Strafe entstanden, der die Wiedereingliederung der Straftäter verbessern soll, aber auch neue Probleme (Subkultur der Gefangenen) aufwirft.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-accent" />
              Evangelische Religionslehre
            </h3>
            <p className="text-muted-foreground mb-4">
              In der Evangelischen Religionslehre werden in der Lehrplaneinheit 11.2 und 11.3. (S.518/19) Fragen nach "einer menschenfreundlichen Moral" und "dem Sinn des Lebens" gestellt.
            </p>
            <p className="text-muted-foreground">
              Diese lassen Lehrern und Schülern viel Freiraum, um über "Schuld", "Gewissen", "Normenwandlung" und "Normenabweichung" zu reden, aber auch Beispiele aus der Literatur vorgeben, die im Fach Deutsch anzusiedeln sind. Die Lehrplaneinheit 11.12 (S.521/22) gibt das Thema "Menschenrechte - Perspektiven einer menschlichen Welt" vor.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <GraduationCap className="mr-2 h-5 w-5 text-primary" />
              Katholische Religionslehre
            </h3>
            <p className="text-muted-foreground mb-4">
              In der Katholischen Religionslehre werden in der Lehrplaneinheit 3 "Auf der Suche nach Glück und Sinn" (S. 526/27) Fragen angesprochen, die unserem Projektthema nahestehen.
            </p>
            <p className="text-muted-foreground">
              "Ethische Grundbegriffe; Wert, Norm, Gesetz, Wandel von Wertvorstellungen, Werteverlust und Verantwortung" lassen sich hier besprechen.
            </p>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Fach Deutsch</h3>
          <p className="text-muted-foreground mb-4">
            Das Fach Deutsch bietet verschiedene Verknüpfungen: Arbeitsbereich 1 (S.529-31) gibt "Referat, Vortrag, Aussprache, Erörtern" vor, "Arbeitsbereich 2" (S. 531/32) gibt mit dem Thema "Literatur, andere Texte und Medien" ein weites Arbeitsfeld, das der Lehrer auch fächerverbindend gestalten kann.
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
