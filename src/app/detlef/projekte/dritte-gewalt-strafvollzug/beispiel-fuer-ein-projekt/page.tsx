import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, Building, Camera, FileVideo, GraduationCap, Users } from "lucide-react"
import Link from "next/link"

export default function BeispielFuerEinProjektPage() {
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
              <FileVideo className="mr-1 h-4 w-4" />
              Videoprojekt
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Building className="mr-1 h-4 w-4" />
              Lokale Geschichte
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Beispiel für ein Projekt
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        <section className="bg-muted/50 rounded-lg p-6 border border-border">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5 text-primary" />
            Betroffene Fächer
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              In Zusammenarbeit mit dem Kurfürst-Friedrich-Gymnasium und dem Medienforum Heidelberg möchte die Landesbildstelle ein beispielhaftes Videoprojekt durchführen, in dem fächerübergreifend die Themen "3. Gewalt/ Strafvollzug" am Beispiel lokaler Geschichte angesprochen werden.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="px-3 py-1">Deutsch</Badge>
              <Badge variant="secondary" className="px-3 py-1">Geschichte</Badge>
              <Badge variant="secondary" className="px-3 py-1">Gemeinschaftskunde</Badge>
              <Badge variant="secondary" className="px-3 py-1">Religion</Badge>
              <Badge variant="secondary" className="px-3 py-1">Latein</Badge>
            </div>
            <p className="font-medium text-foreground mt-4">
              Es handelt sich hier um Themen, die jede Generation selbst neu durchdenken und erarbeiten muss. Bisherige Unterrichtsprojekte haben gezeigt, dass Schüler in diesem Themenbereich gut zu motivieren sind.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Building className="mr-2 h-5 w-5 text-primary" />
            Untersuchungshaftanstalt "Fauler Pelz"
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Die unter dem Namen "Fauler Pelz" bekannte Untersuchungshaftanstalt in Heidelberg nimmt einen großen Raum in der Heidelberger Altstadt ein. Ihre Bedeutung im Rahmen der Stadtgeschichte wurde bisher nicht genauer untersucht. Lediglich Anwohnerklagen über Lärmbelästigungen haben die Anstalt wieder ins Gespräch gebracht.
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="text-sm italic">
                Der Name "Fauler Pelz", über den sich nicht nur Touristen immer wieder amüsieren, erinnert aber - entgegen einer spontanen Assoziation - nicht an die Haftanstalt, sondern an die frühere Anwesenheit von Lohgerbern.
              </p>
            </div>
            <p>
              Die Geschichte der Haftanstalt spiegelt wichtige Etappen der Rechtsgeschichte, der allgemeinen Geschichte und der Geschichte der Stadt Heidelberg von 1848 bis heute wider. Sie sollte deshalb auch in der Darstellung der Heidelberger Stadtgeschichte bei der 800-Jahrfeier entsprechend gewürdigt werden.
            </p>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Camera className="mr-2 h-5 w-5 text-accent" />
            Erarbeitung eines Videofilmes
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Bei der Erarbeitung eines Videofilmes im gemeinwesenorientierten Schulunterricht und bei der öffentlichen Darstellung der Arbeitsergebnisse in einem 30-minütigen Film und einem Filmbegleitheft sollten sich die Stadt Heidelberg und lokale Firmen (auch Banken oder Sparkassen) finanziell beteiligen.
            </p>
            <p>
              Die Beteiligung sollte Arbeits-, Kopier- und Druckkosten umfassen; die Kosten müssen einzeln aufgeschlüsselt werden.
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-accent" />
            Ausblick
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Das Videofilmprojekt soll aus verschiedenen Gründen über den Bereich des ehemaligen Heidelberger Amtsgerichtes hinaus ausgeweitet werden:
            </p>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-accent">1</span>
                </div>
                <p className="text-sm">
                  Eine Verbindung zum ebenfalls um 1848 errichteten "Centralgefängnis" in Bruchsal bietet sich an, da sich dort die Reformbestrebungen im Strafvollzug in der Mitte des letzten Jahrhunderts besser aufzeigen lassen als in einem Amtsgefängnis. Auch sind die Vorgänge in dem europaweit beachteten Gefängnis Bruchsal besser dokumentiert als in Heidelberg.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-accent">2</span>
                </div>
                <p className="text-sm">
                  Im Kontrast zum Heidelberger Gefängnis, in dem keine schweren Verbrechen geahndet wurden, lassen sich Anspruch und Wirklichkeit des Strafvollzugs in Bruchsal besser gegeneinander halten.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-accent">3</span>
                </div>
                <p className="text-sm">
                  Über den Vergleich mit dem Strafvollzug in Bruchsal hinaus, der von einer Bruchsaler 11. Gymnasialklasse dargestellt werden soll, wäre es sinnvoll, das Thema "3. Gewalt/Strafvollzug" auch mit einer französischen Schulklasse erarbeiten zu lassen, da dieses Thema von Anfang an europaweit diskutiert wurde. Von daher bietet sich die Verbindung mit einer Schulklasse aus Montpellier, der Partnerstadt Heidelbergs, an.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-accent">4</span>
                </div>
                <p className="text-sm">
                  Ebenfalls weiterführend könnte der Kontakt zu einer Klasse in der zweiten Partnerstadt Heidelbergs, Bautzen, sein, da sich hier auch die gegensätzliche Entwicklung in Ost und Westdeutschland nach 1945 zeigen läßt. Wichtige Recherchen wurden hier bereits vom Leiter des Strafvollzugsmuseums in Ludwigsburg durchgeführt.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-full flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-accent">5</span>
                </div>
                <p className="text-sm">
                  Das Projekt sollte als "Hypertext" auf einer CD festgehalten werden, in wichtigen Textteilen als "Baustelle" im Internet zur Diskussion gestellt werden und zur weiteren Diskussion anregen. Dafür braucht die Landesbildstelle kompetente Partner aus dem universitären Bereich, die ihr Fachwissen zur Verfügung stellen.
                </p>
              </div>
            </div>
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
