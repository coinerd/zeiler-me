import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CalendarDays, History, School, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichten18JahrhundertPage() {
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
              18. Jahrhundert
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Bildungsreform
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Das 18. Jahrhundert
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Aufklärung und Bildungsreformen
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Das 18. Jahrhundert, auch als "Zeitalter der Aufklärung" bekannt, brachte bedeutende Veränderungen im Bildungswesen Heidelbergs und der Kurpfalz mit sich. Neue pädagogische Ideen, Bildungsreformen unter Kurfürst Karl Theodor und der wachsende Einfluss der Aufklärung prägten diese Epoche.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die Entwicklung des Heidelberger Schulwesens im 18. Jahrhundert, die wichtigsten Reformen und ihre Auswirkungen auf Bildung und Gesellschaft.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Heidelberg zu Beginn des 18. Jahrhunderts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <History className="mr-2 h-5 w-5" />
            Heidelberg zu Beginn des 18. Jahrhunderts
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Zu Beginn des 18. Jahrhunderts befand sich Heidelberg in einer schwierigen Situation. Die Stadt hatte stark unter dem Pfälzischen Erbfolgekrieg (1688-1697) gelitten, bei dem französische Truppen große Teile Heidelbergs, einschließlich des Schlosses, zerstörten. Die Bevölkerung war dezimiert, viele Gebäude lagen in Trümmern, und auch das Bildungswesen war schwer getroffen.
            </p>
            <p className="leading-7">
              Die Universität Heidelberg, einst eine der bedeutendsten in Europa, hatte viele Professoren und Studenten verloren und kämpfte um ihr Überleben. Das Gymnasium (das heutige Kurfürst-Friedrich-Gymnasium) und die städtischen Schulen mussten nach dem Krieg mühsam wiederaufgebaut werden. Die Kurpfalz stand zudem vor einem Konfessionswechsel, da Kurfürst Johann Wilhelm zum Katholizismus konvertiert war, während ein Großteil der Bevölkerung protestantisch blieb.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung des zerstörten Heidelbergs nach dem Pfälzischen Erbfolgekrieg]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Diese Ausgangslage stellte das Bildungswesen vor große Herausforderungen. Dennoch sollte das 18. Jahrhundert eine Zeit des Wiederaufbaus und der Reformen werden, in der neue pädagogische Ideen Eingang in das Schulwesen fanden und wichtige Bildungsreformen umgesetzt wurden.
            </p>
          </div>
        </section>

        {/* Section 2: Die Ideen der Aufklärung */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Die Ideen der Aufklärung
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Das 18. Jahrhundert wird oft als "Zeitalter der Aufklärung" bezeichnet. Die Aufklärung war eine geistige Bewegung, die den Verstand und die Vernunft in den Mittelpunkt stellte und traditionelle Autoritäten wie Kirche und Adel hinterfragte. Diese Ideen hatten auch Auswirkungen auf die Pädagogik und das Bildungswesen.
            </p>
            <p className="leading-7">
              Bedeutende Aufklärer wie Immanuel Kant, Jean-Jacques Rousseau und John Locke entwickelten neue Vorstellungen von Bildung und Erziehung. Sie betonten die Bedeutung der Vernunft, der eigenen Erfahrung und des kritischen Denkens. Rousseau revolutionierte mit seinem Werk "Emile oder Über die Erziehung" (1762) die pädagogischen Vorstellungen, indem er das Kind in den Mittelpunkt stellte und seine natürliche Entwicklung betonte.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Der Philanthropismus</CardTitle>
                <CardDescription>Eine aufklärerische Bildungsbewegung</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Eine wichtige pädagogische Strömung der Aufklärung war der Philanthropismus, begründet von Johann Bernhard Basedow. Die Philanthropisten (wörtlich: "Menschenfreunde") strebten eine praxisnahe, kindgerechte Erziehung an, die auf Vernunft, Naturbeobachtung und körperliche Betätigung setzte.
                </p>
                <p className="leading-7 mt-4">
                  Basedow gründete 1774 das Philanthropinum in Dessau, eine Musterschule, die viele Pädagogen und Schulreformer beeinflusste. Die philanthropische Pädagogik betonte neben der religiösen Erziehung auch praktische Kenntnisse und körperliche Übungen. Der Unterricht sollte anschaulich und motivierend sein, statt auf Auswendiglernen und Strafen zu setzen.
                </p>
                <p className="leading-7 mt-4">
                  Diese Ideen fanden nach und nach auch in Heidelberg Eingang in das Schulwesen, besonders in die Reformbestrebungen unter Kurfürst Karl Theodor in der zweiten Hälfte des 18. Jahrhunderts.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Ein weiterer wichtiger Pädagoge des 18. Jahrhunderts war Heinrich Pestalozzi, der zwar hauptsächlich im 19. Jahrhundert wirkte, dessen Ideen aber bereits im späten 18. Jahrhundert Einfluss gewannen. Pestalozzi entwickelte eine ganzheitliche Pädagogik, die "Kopf, Herz und Hand" gleichermaßen ausbilden sollte und betonte die Bedeutung der Anschauung im Unterricht.
            </p>
            <p className="leading-7">
              Die Ideen der Aufklärung führten zu einem neuen Verständnis von Bildung als Mittel zur Persönlichkeitsentwicklung und zur Verbesserung der Gesellschaft. Diese Gedanken beeinflussten auch die Bildungsreformen in der Kurpfalz unter Kurfürst Karl Theodor.
            </p>
          </div>
        </section>

        {/* Section 3: Kurfürst Karl Theodor und seine Bildungsreformen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <User className="mr-2 h-5 w-5" />
            Kurfürst Karl Theodor und seine Bildungsreformen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Kurfürst Karl Theodor, der von 1742 bis 1799 regierte, war ein aufgeklärter Herrscher, der Kunst, Wissenschaft und Bildung förderte. Obwohl er seine Residenz nach Mannheim verlegte und Heidelberg dadurch an Bedeutung verlor, initiierte er doch wichtige Bildungsreformen, die auch das Heidelberger Schulwesen beeinflussten.
            </p>
            <p className="leading-7">
              Karl Theodor gründete 1763 die Kurpfälzische Akademie der Wissenschaften in Mannheim, die zu einem Zentrum der Aufklärung in Südwestdeutschland wurde. Er förderte auch die Universitäten in Heidelberg und Mannheim und versuchte, sie im Geiste der Aufklärung zu reformieren.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Porträt von Kurfürst Karl Theodor]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Ein Meilenstein war die Schulordnung von 1770, die Karl Theodor für die Kurpfalz erließ. Diese Schulordnung regelte das gesamte Schulwesen, von den Elementarschulen bis zu den Gymnasien, und legte detaillierte Vorgaben für den Unterricht, die Lehrerausbildung und die Schulaufsicht fest.
            </p>
            <p className="leading-7">
              Die wichtigsten Neuerungen der Schulordnung von 1770 waren:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li className="leading-7">
                Die Einführung einer allgemeinen Schulpflicht für alle Kinder zwischen 6 und 14 Jahren, unabhängig von Geschlecht und sozialem Stand.
              </li>
              <li className="leading-7">
                Die Festlegung einheitlicher Lehrpläne und Unterrichtsmethoden für alle Schulen in der Kurpfalz.
              </li>
              <li className="leading-7">
                Die Verbesserung der Lehrerausbildung durch die Einrichtung von Lehrerseminaren und die Einführung von Lehrerprüfungen.
              </li>
              <li className="leading-7">
                Die Einrichtung einer staatlichen Schulaufsicht durch Schulinspektoren, die die Qualität des Unterrichts überwachen sollten.
              </li>
              <li className="leading-7">
                Die Modernisierung der Unterrichtsinhalte durch die Aufnahme naturwissenschaftlicher und praktischer Fächer in den Lehrplan.
              </li>
            </ul>
            <p className="leading-7 mt-4">
              Diese Reformen waren für ihre Zeit sehr fortschrittlich und spiegelten die Ideen der Aufklärung wider. Allerdings stießen sie auch auf Widerstand, insbesondere von Seiten der Kirche, die ihren Einfluss auf das Schulwesen schwinden sah. Zudem dauerte es viele Jahre, bis die Reformen flächendeckend umgesetzt wurden, da es an ausgebildeten Lehrern, geeigneten Schulgebäuden und finanziellen Mitteln mangelte.
            </p>
          </div>
        </section>

        {/* Section 4: Das Heidelberger Schulwesen im späten 18. Jahrhundert */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Das Heidelberger Schulwesen im späten 18. Jahrhundert
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Wie sah nun das Schulwesen in Heidelberg im späten 18. Jahrhundert konkret aus? Welche Schultypen gab es, und wie war der Unterricht organisiert?
            </p>
            <p className="leading-7">
              Das Heidelberger Gymnasium, das heutige Kurfürst-Friedrich-Gymnasium, war die höchste Bildungseinrichtung der Stadt unterhalb der Universität. Es bereitete die Schüler auf ein Universitätsstudium vor und vermittelte eine humanistische Bildung mit Schwerpunkt auf den alten Sprachen Latein und Griechisch. Im Laufe des 18. Jahrhunderts wurden jedoch auch neue Fächer wie Mathematik, Naturkunde, Geschichte und moderne Fremdsprachen in den Lehrplan aufgenommen.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Das Heidelberger Gymnasium im 18. Jahrhundert</CardTitle>
                <CardDescription>Zwischen Tradition und Reform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Das Heidelberger Gymnasium hatte seinen Sitz im ehemaligen Dominikanerkloster in der Altstadt. Es war eine lateinische Schule, in der der Unterricht größtenteils auf Latein abgehalten wurde. Die Schüler waren ausschließlich Jungen, meist aus bürgerlichen oder adeligen Familien.
                </p>
                <p className="leading-7 mt-4">
                  Der Unterricht folgte noch weitgehend dem traditionellen humanistischen Bildungsideal, aber es gab auch Reformbestrebungen. Unter dem Einfluss der Aufklärung wurden neue Fächer wie Mathematik, Physik, Geschichte und Geographie stärker betont. Auch die Unterrichtsmethoden änderten sich allmählich: Statt reinem Auswendiglernen und Rezitieren wurde mehr Wert auf Verstehen und selbstständiges Denken gelegt.
                </p>
                <p className="leading-7 mt-4">
                  Die Lehrer waren oft gleichzeitig Dozenten an der Universität und hatten eine akademische Ausbildung. Der Rektor des Gymnasiums war eine angesehene Persönlichkeit in der Stadt und stand in engem Kontakt mit der Universität und dem kurfürstlichen Hof.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Neben dem Gymnasium gab es in Heidelberg verschiedene "deutsche Schulen" für die breitere Bevölkerung. Diese vermittelten eine grundlegende Bildung in Lesen, Schreiben, Rechnen und Religion. Im Laufe des 18. Jahrhunderts verbesserte sich die Qualität dieser Schulen durch die Bildungsreformen, aber sie blieben deutlich hinter dem Niveau des Gymnasiums zurück.
            </p>
            <p className="leading-7">
              Für Mädchen gab es spezielle "Mädchenschulen", die von Nonnen oder unverheirateten Frauen geleitet wurden. Hier lernten die Mädchen neben Lesen, Schreiben und Religion vor allem hauswirtschaftliche Fertigkeiten. Für Töchter aus wohlhabenden Familien gab es auch private Erziehung durch Gouvernanten, die ihnen eine umfassendere Bildung vermittelten.
            </p>
            <p className="leading-7">
              In den Dörfern rund um Heidelberg gab es einfache Dorfschulen, die oft nur im Winter betrieben wurden, wenn die Kinder nicht auf den Feldern mitarbeiten mussten. Die Qualität des Unterrichts hing stark von der Person des Dorflehrers ab, der oft nur eine minimale Ausbildung hatte und schlecht bezahlt wurde.
            </p>
            <p className="leading-7">
              Insgesamt verbesserte sich das Bildungswesen in Heidelberg und Umgebung im Laufe des 18. Jahrhunderts deutlich, aber es blieb stark durch soziale Unterschiede geprägt. Der Zugang zu höherer Bildung war nach wie vor ein Privileg der wohlhabenden Schichten, während die breite Bevölkerung nur eine elementare Schulbildung erhielt.
            </p>
          </div>
        </section>

        {/* Section 5: Berühmte Heidelberger Pädagogen des 18. Jahrhunderts */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <User className="mr-2 h-5 w-5" />
            Berühmte Heidelberger Pädagogen des 18. Jahrhunderts
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Im 18. Jahrhundert wirkten in Heidelberg einige bedeutende Pädagogen, die mit ihren Ideen und ihrem Engagement das Bildungswesen nachhaltig prägten. Hier sind einige der wichtigsten:
            </p>
            <p className="leading-7">
              <strong>Johann Heinrich Jung-Stilling (1740-1817):</strong> Der Arzt, Ökonom und Schriftsteller lehrte von 1778 bis 1784 an der Universität Heidelberg. In seinen Schriften vertrat er aufklärerisches Gedankengut, betonte aber auch die Bedeutung der Religion für die Erziehung. Seine Autobiographie "Lebensgeschichte" enthält interessante Einblicke in die Bildungsverhältnisse seiner Zeit.
            </p>
            <p className="leading-7">
              <strong>Johann Lorenz Böckmann (1741-1802):</strong> Der Physiker und Pädagoge setzte sich für die Verbesserung des naturwissenschaftlichen Unterrichts ein. Er entwickelte anschauliche Experimente für den Physikunterricht und schrieb Lehrbücher, die den Stoff verständlich darstellten. Böckmann lehrte an der Universität Karlsruhe, hatte aber auch Einfluss auf das Heidelberger Bildungswesen.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Porträts berühmter Heidelberger Pädagogen des 18. Jahrhunderts]
                </div>
              </div>
            </div>
            <p className="leading-7">
              <strong>Friedrich Heinrich Christian Schwarz (1766-1837):</strong> Der Theologe und Pädagoge lehrte zwar hauptsächlich im frühen 19. Jahrhundert an der Universität Heidelberg, begann seine Tätigkeit aber bereits im späten 18. Jahrhundert. Er gründete 1810 das erste pädagogische Seminar an der Universität Heidelberg und setzte sich für eine wissenschaftliche Fundierung der Pädagogik ein. Schwarz verband christliche Erziehungsvorstellungen mit den Ideen der Aufklärung und war ein wichtiger Vermittler zwischen verschiedenen pädagogischen Strömungen.
            </p>
            <p className="leading-7">
              <strong>Johann Peter Hebel (1760-1826):</strong> Obwohl hauptsächlich als Dichter bekannt, war Hebel auch ein bedeutender Pädagoge, der als Gymnasiallehrer und später als Schulrat wirkte. Seine "Biblischen Geschichten" und der "Rheinländische Hausfreund" waren beliebte Lesestoffe in den Schulen der Region. Hebel setzte sich für eine volkstümliche, verständliche Bildung ein und versuchte, komplexe Inhalte anschaulich zu vermitteln.
            </p>
            <p className="leading-7">
              Diese und andere Pädagogen trugen dazu bei, dass sich das Bildungswesen in Heidelberg und Umgebung im Laufe des 18. Jahrhunderts modernisierte und professionalisierte. Sie vermittelten die Ideen der Aufklärung und bereiteten den Boden für die umfassenden Bildungsreformen des 19. Jahrhunderts.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Zeitleiste: Heidelberger Schulgeschichte im 18. Jahrhundert</h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">1693</p>
                <p className="text-muted-foreground">Zerstörung Heidelbergs im Pfälzischen Erbfolgekrieg; schwere Schäden an Schulen und Universität</p>
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
                <p className="text-lg font-semibold">1742</p>
                <p className="text-muted-foreground">Beginn der Regierungszeit von Kurfürst Karl Theodor</p>
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
                <p className="text-lg font-semibold">1763</p>
                <p className="text-muted-foreground">Gründung der Kurpfälzischen Akademie der Wissenschaften in Mannheim durch Karl Theodor</p>
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
                <p className="text-lg font-semibold">1770</p>
                <p className="text-muted-foreground">Erlass der Schulordnung für die Kurpfalz durch Karl Theodor</p>
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
                <p className="text-lg font-semibold">1774</p>
                <p className="text-muted-foreground">Gründung des Philanthropinum in Dessau durch Johann Bernhard Basedow</p>
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
                <p className="text-lg font-semibold">1778-1784</p>
                <p className="text-muted-foreground">Wirken von Johann Heinrich Jung-Stilling an der Universität Heidelberg</p>
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
                <p className="text-lg font-semibold">1792</p>
                <p className="text-muted-foreground">Ausbruch der Revolutionskriege mit Frankreich; Bedrohung der Kurpfalz</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">1799</p>
                <p className="text-muted-foreground">Tod von Kurfürst Karl Theodor; Ende einer Ära der Bildungsreformen</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/buerger-und-bauern">
            <Button variant="outline" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Bürger und Bauern
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-19te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Das 19. Jahrhundert
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
