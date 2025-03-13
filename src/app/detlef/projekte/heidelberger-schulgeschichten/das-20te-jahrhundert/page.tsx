import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CalendarDays, History, School } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichten20JahrhundertPage() {
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
              20. Jahrhundert
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Bildungswandel
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Das 20. Jahrhundert
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Kriege, Wiederaufbau und Bildung
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Das 20. Jahrhundert war geprägt von zwei Weltkriegen, der Teilung und Wiedervereinigung Deutschlands sowie tiefgreifenden gesellschaftlichen und politischen Veränderungen. Diese Ereignisse hatten auch erhebliche Auswirkungen auf das Bildungswesen in Heidelberg.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die Entwicklung des Heidelberger Schulwesens im 20. Jahrhundert, die Herausforderungen und Reformen dieser Zeit sowie die Auswirkungen auf Bildung und Gesellschaft.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Die Weimarer Republik und die NS-Zeit */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Die Weimarer Republik und die NS-Zeit
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Weimarer Republik (1918-1933) war eine Zeit der politischen und wirtschaftlichen Instabilität, aber auch der kulturellen Blüte. Im Bildungswesen gab es Bestrebungen, das Schulsystem zu reformieren und demokratischer zu gestalten.
            </p>
            <p className="leading-7">
              Mit der Machtergreifung der Nationalsozialisten 1933 änderte sich das Schulwesen radikal. Die Schulen wurden gleichgeschaltet, und die nationalsozialistische Ideologie prägte den Unterricht. Viele Lehrer und Professoren wurden entlassen, weil sie nicht der NS-Ideologie entsprachen.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung einer Schulklasse in der NS-Zeit]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die NS-Zeit hatte tiefgreifende Auswirkungen auf das Bildungswesen. Die Lehrpläne wurden ideologisch ausgerichtet, und die Erziehung zum "nationalsozialistischen Volksgenossen" stand im Mittelpunkt. Nach dem Ende des Zweiten Weltkriegs 1945 begann der mühsame Wiederaufbau und die Entnazifizierung des Schulwesens.
            </p>
          </div>
        </section>

        {/* Section 2: Wiederaufbau und Bildungsreformen nach 1945 */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <History className="mr-2 h-5 w-5" />
            Wiederaufbau und Bildungsreformen nach 1945
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Nach dem Zweiten Weltkrieg stand das Bildungswesen vor der Herausforderung, die ideologischen Altlasten der NS-Zeit zu überwinden und ein demokratisches Schulsystem aufzubauen. Der Wiederaufbau der Schulen und Universitäten war eine vordringliche Aufgabe.
            </p>
            <p className="leading-7">
              In den 1950er und 1960er Jahren kam es zu umfassenden Bildungsreformen, die das Schulsystem modernisierten und demokratisierten. Die Schulpflicht wurde ausgeweitet, und es entstanden neue Schultypen wie die Gesamtschule, die eine umfassendere Bildung für alle Kinder bieten sollte.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Der Bildungsplan von 1960</CardTitle>
                <CardDescription>Ein Meilenstein der Bildungsreform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Der Bildungsplan von 1960 war ein bedeutender Schritt zur Modernisierung des Schulwesens in der Bundesrepublik Deutschland. Er legte neue Lehrpläne und Unterrichtsmethoden fest, die den Anforderungen der modernen Gesellschaft gerecht werden sollten.
                </p>
                <p className="leading-7 mt-4">
                  Der Bildungsplan betonte die Bedeutung der naturwissenschaftlichen und technischen Bildung und förderte die Einführung neuer Fächer wie Informatik und Wirtschaftskunde. Auch die Lehrerbildung wurde reformiert, um die Qualität des Unterrichts zu verbessern.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Diese Reformen führten zu einer deutlichen Verbesserung der Bildungschancen und trugen zur Demokratisierung des Bildungswesens bei. Dennoch blieben soziale Unterschiede bestehen, und der Zugang zu höherer Bildung war nach wie vor ungleich verteilt.
            </p>
          </div>
        </section>

        {/* Section 3: Die 68er-Bewegung und ihre Auswirkungen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Die 68er-Bewegung und ihre Auswirkungen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die 68er-Bewegung war eine internationale Protestbewegung, die sich gegen autoritäre Strukturen und gesellschaftliche Ungerechtigkeiten wandte. Auch in Heidelberg kam es zu Protesten und Forderungen nach Reformen im Bildungswesen.
            </p>
            <p className="leading-7">
              Die 68er forderten eine Demokratisierung der Schulen und Universitäten, mehr Mitbestimmung für Schüler und Studenten sowie eine kritischere Auseinandersetzung mit der deutschen Geschichte. Diese Forderungen führten zu weiteren Reformen und einer Liberalisierung des Bildungswesens.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Darstellung von Studentenprotesten in den 1960er Jahren]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die 68er-Bewegung hinterließ bleibende Spuren im Bildungswesen. Viele ihrer Ideen wurden in den folgenden Jahrzehnten umgesetzt, und das Schulsystem wurde offener und partizipativer gestaltet. Die Bildungspolitik der 1970er Jahre war geprägt von Reformen, die die Chancengleichheit verbessern und die Bildung für alle zugänglicher machen sollten.
            </p>
          </div>
        </section>

        {/* Section 4: Das Heidelberger Schulwesen im späten 20. Jahrhundert */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Das Heidelberger Schulwesen im späten 20. Jahrhundert
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Im späten 20. Jahrhundert erlebte das Heidelberger Schulwesen eine Phase der Konsolidierung und Modernisierung. Die Schulen wurden erweitert und modernisiert, um den Anforderungen der modernen Gesellschaft gerecht zu werden.
            </p>
            <p className="leading-7">
              Es entstanden neue Schultypen, wie die Gesamtschule, die eine umfassendere Bildung für alle Kinder bieten sollte. Auch die Berufsausbildung wurde ausgebaut und modernisiert, um den Anforderungen der Wirtschaft gerecht zu werden.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Das Heidelberger Gymnasium im 20. Jahrhundert</CardTitle>
                <CardDescription>Tradition und Wandel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Das Heidelberger Gymnasium, das heutige Kurfürst-Friedrich-Gymnasium, blieb die höchste Bildungseinrichtung der Stadt unterhalb der Universität. Es vermittelte eine umfassende Bildung mit Schwerpunkt auf den alten Sprachen, aber auch naturwissenschaftliche und technische Fächer gewannen an Bedeutung.
                </p>
                <p className="leading-7 mt-4">
                  Der Unterricht folgte noch weitgehend dem traditionellen Bildungsideal, aber es gab auch Reformbestrebungen. Unter dem Einfluss der Bildungsreformen des 20. Jahrhunderts wurden neue Lehrpläne eingeführt, die den Schwerpunkt auf naturwissenschaftliche und technische Fächer legten.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Insgesamt verbesserte sich das Bildungswesen in Heidelberg im Laufe des 20. Jahrhunderts deutlich, aber es blieb stark durch soziale Unterschiede geprägt. Der Zugang zu höherer Bildung war nach wie vor ein Privileg der wohlhabenden Schichten, während die breite Bevölkerung nur eine elementare Schulbildung erhielt.
            </p>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-19te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Das 19. Jahrhundert
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/lehrerschaft-kfg-3tes-reich">
            <Button variant="outline" className="w-full justify-start">
              <School className="mr-2 h-4 w-4" />
              Die Lehrerschaft des KFG in der NS-Zeit
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
