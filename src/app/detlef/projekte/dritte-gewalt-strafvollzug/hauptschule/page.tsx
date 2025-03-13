import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, GraduationCap, Scale, Users } from "lucide-react"
import Link from "next/link"

export default function HauptschulePage() {
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
              <Users className="mr-1 h-4 w-4" />
              Jugend im Rechtsstaat
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Hauptschule
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
              Aber nicht nur im Gymnasium, auch in der Haupt- oder Realschule läßt sich das Thema "Dritte Gewalt / Strafvollzug" begründet und anschaulich behandeln.
            </p>
            <p>
              Weniger theoretisch als im Gymnasium muß der Stoff für die 8. Klasse der Hauptschule im Fach Gemeinschaftskunde zentral angesiedelt werden. Oberthema der mit acht Stunden angesetzten Lehrplaneinheit 2 heißt hier: "Jugend im Rechtsstaat" (S.218/19)
            </p>
            <p className="font-medium text-foreground">
              Altersentsprechend interessieren sich die Schüler stark mit Normabweichungen im Drogenbereich, der ja auch häufig zum Einstieg in eine "kriminelle Karriere" führt.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Fächerverbindende Themen</h3>
            <p className="text-muted-foreground mb-4">
              Thema Nr. 1 im Rahmen der lehrplanmäßig vorgeschlagenen "fächerverbindenden Themen" lautet "Suchtprävention" (S.197), Thema Nr. 4 lautet "Jugend und Recht" (S.200).
            </p>
            <div className="space-y-2 mt-4">
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                  <Scale className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Suchtprävention als Einstieg in die Thematik</p>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                  <Scale className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Jugend und Recht als Kernthema</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Religionslehre und Ethik</h3>
            <p className="text-muted-foreground mb-4">
              Es bieten sich auch Lehrplanbezüge zu verschiedenen Fächern an:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-accent" />
                <span>Evangelische Religionslehre (LPE 6: Strafen - Vergeben - Neu anfangen; S.204)</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-accent" />
                <span>Katholische Religionslehre (LPE 3: Neu anfangen - Gewissen, Schuld und Vergebung; S.208)</span>
              </li>
              <li className="flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-accent" />
                <span>Ethik (LPE 1: Leben in Gemeinschaften; S.239)</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Fach Deutsch</h3>
          <p className="text-muted-foreground mb-4">
            Ebenfalls sinnvoll wäre die Einbindung des Themas in das Fach Deutsch, wo der "Arbeitsbereich 1" (S. 210-212) viel Spielraum läßt, um Simulationsspiele, Diskussion, Argumentation und Begründung an interessanten Themen zu üben.
          </p>
          <p className="text-muted-foreground mb-4">
            Gerade das Fach Deutsch läßt hier viele Variationen offen. So könnte im "Arbeitsbereich 2" (S.212) auch ein dem Thema entsprechendes Jugend- oder Sachbuch behandelt werden, das dem Thema eine neue Note gibt.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg mt-4">
            <p className="text-sm font-medium">Buchempfehlung:</p>
            <p className="text-sm text-muted-foreground">"Beruf Räuber" von Michail Krausnik</p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-primary" />
            Lehrerkooperation
          </h3>
          <p className="text-muted-foreground">
            Überhaupt sollten sich die beteiligten Lehrer untereinander absprechen, so daß keine platte Wiederholung der gleichen Aussagen entstehen und die Schüler die Thematik als allzu redundant empfinden. Gerade das Fach Deutsch läßt hier viele Variationen offen.
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
