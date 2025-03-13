import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Book, BookOpen, Scale } from "lucide-react"
import Link from "next/link"

export default function WasMichBetrifftPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/geschichte"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zu Geschichte
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <Scale className="mr-1 h-4 w-4" />
              Recht
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <BookOpen className="mr-1 h-4 w-4" />
              Grundgesetz
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Was mich (be)trifft
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Menschenwürde und Rechtsstaat
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <div className="bg-muted/50 rounded-lg p-8 border border-border">
          <h3 className="text-xl font-semibold mb-6">Statt eines Vorworts: Grundgesetz Artikel 1</h3>
          <div className="space-y-4 text-lg">
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                <span className="font-semibold text-primary">1</span>
              </div>
              <p className="flex-1">
                Die Würde des Menschen ist unantastbar. Sie zu achten und zu schützen ist Verpflichtung aller staatlichen Gewalt.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                <span className="font-semibold text-primary">2</span>
              </div>
              <p className="flex-1">
                Das Deutsche Volk bekennt sich darum zu unverletzlichen und unveräußerlichen Menschenrechten als Grundlage jeder menschlichen Gemeinschaft, des Friedens und der Gerechtigkeit in der Welt.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-none w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                <span className="font-semibold text-primary">3</span>
              </div>
              <p className="flex-1">
                Die nachfolgenden Grundrechte binden Gesetzgebung, vollziehende Gewalt und Rechtsprechung als unmittelbar geltendes Recht.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection Section */}
      <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Book className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Persönliche Reflexion</h2>
        </div>
        <p className="leading-7 mb-4">
          Dieser Artikel des Grundgesetzes bildet das Fundament unserer freiheitlich-demokratischen Grundordnung. Seine Bedeutung kann nicht hoch genug eingeschätzt werden - er ist die Antwort auf die Erfahrungen mit dem Unrechtsregime des Nationalsozialismus und stellt sicher, dass die Würde jedes Menschen nicht verhandelbar ist.
        </p>
        <p className="leading-7 mb-4">
          In einer Zeit, in der demokratische Werte weltweit unter Druck geraten, ist es wichtiger denn je, sich der grundlegenden Prinzipien unserer Gesellschaftsordnung zu besinnen und diese aktiv zu verteidigen.
        </p>
        <p className="leading-7 italic">
          "Was mich betrifft" - dieser Artikel betrifft jeden von uns, jeden Tag und in allen Lebenssituationen. Er ist das Herzstück unserer Verfassung und der Kompass für staatliches Handeln.
        </p>
      </div>

      {/* Related Content */}
      <div className="mt-12">
        <Separator className="my-8" />
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Verwandte Themen</h3>
          <p className="text-sm text-muted-foreground">
            Entdecken Sie mehr über Geschichte, Recht und gesellschaftliche Entwicklungen in Deutschland.
          </p>
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
