import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Camera, Film, Users, Video } from "lucide-react"
import Link from "next/link"

export default function MedienforumHeidelbergPage() {
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
              <Video className="mr-1 h-4 w-4" />
              Medienarbeit
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Users className="mr-1 h-4 w-4" />
              Verein
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Medienforum Heidelberg e.V.
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 space-y-8">
        <section className="bg-muted/50 rounded-lg p-6 border border-border">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Film className="mr-2 h-5 w-5 text-primary" />
            Aktive Medienarbeit
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Die Zahl der TV-Kanäle steigt und steigt, die Programme verflachen, der Blick auf die Mattscheibe wird oberflächlicher, man zappt sich so durch. Schon seit längerer Zeit wird von Pädagogen und Psychologen über die negativen Folgewirkungen exzessiver Nutzung audiovisueller Medien geklagt.
            </p>
            <p className="font-medium text-foreground">
              Wir klagen nicht, wir machen selber Programm - und laden alle, die dem Medienkommerz entkommen wollen, ein, mit unserer Hilfe medienaktiv zu werden.
            </p>
            <p>
              Produzieren statt konsumieren, ist unsere Devise, - sich einmischen, Leute kennen lernen, Aussagen formulieren, audiovisuelle Experimente wagen und dabei feststellen, nach welchem Regeln die Medien funktionieren.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Camera className="mr-2 h-5 w-5 text-primary" />
              Technische Ausstattung
            </h3>
            <p className="text-muted-foreground mb-4">
              Im Medienforum Heidelberg können - nach einer Einweisung in die Schnitttechnik - Videofilme geschnitten werden, Kameras für Aufnahmen in guter Qualität stehen zur Verfügung.
            </p>
            <p className="text-muted-foreground">
              Wir bieten aber nicht nur Technik, sondern auch Beratung, Tipps und Hilfen beim Suchen von geeigneten engagierten Mitarbeitern, denn Videoarbeit ist Teamarbeit.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 h-5 w-5 text-accent" />
              Arbeitsgruppen
            </h3>
            <p className="text-muted-foreground mb-4">
              Es haben sich mittlerweile einige eigenständig arbeitende Gruppen unter unserem Dach gebildet: Beispiel hierfür ist das Videomagazin HDTV.
            </p>
            <p className="text-muted-foreground">
              Einmal im Jahr organisieren wir "Film- und Videotage", ein Ereignis für alle, die sich mit ihrem Werk aus dem Freundeskreis heraus trauen, nach Gleichgesinnten suchen, Ideenaustausch anstreben, sich aber noch nicht für Stars in der Medienszene halten.
            </p>
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-6 border border-border">
          <h3 className="text-xl font-semibold mb-4">Seminare und Weiterbildung</h3>
          <p className="text-muted-foreground mb-4">
            Das Medienforum organisiert auch Seminare zur Kameratechnik und zum Drehbuchschreiben, Seminare, die nicht viel kosten und dennoch eine Menge bieten.
          </p>
          <p className="text-muted-foreground font-medium">
            Und, was das Wichtigste ist: Wir sind offen für neue Ideen, für Leute, die auch Einfluss nehmen wollen auf die lokalen Medienangebote. Hierfür sind unsere guten Kontakte zu anderen kulturellen Gruppen in Heidelberg allen Interessierten eine gute Hilfe.
          </p>
        </section>

        <section className="mt-10 text-center">
          <div className="inline-block bg-primary/10 rounded-lg px-6 py-3 border border-primary/20">
            <h3 className="text-lg font-semibold mb-2">Interesse an aktiver Medienarbeit?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Besuchen Sie uns und werden Sie Teil unserer kreativen Gemeinschaft.
            </p>
            <Button variant="outline" className="group">
              <span>Kontakt aufnehmen</span>
              <Video className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
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
