import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CalendarDays, History, School } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichten19JahrhundertPage() {
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
              19. Jahrhundert
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Bildungswandel
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Das 19. Jahrhundert
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Industrialisierung und Bildung
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Das 19. Jahrhundert war eine Zeit des Wandels in Heidelberg und der Kurpfalz. Die Industrialisierung, die Revolutionen von 1848 und die Gründung des Deutschen Kaiserreichs 1871 prägten diese Epoche. Auch das Bildungswesen erlebte tiefgreifende Veränderungen.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die Entwicklung des Heidelberger Schulwesens im 19. Jahrhundert, die Herausforderungen und Reformen dieser Zeit sowie die Auswirkungen auf Bildung und Gesellschaft.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Die Auswirkungen der Industrialisierung */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Die Auswirkungen der Industrialisierung
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Industrialisierung veränderte Heidelberg und die umliegenden Regionen grundlegend. Neue Fabriken entstanden, die Bevölkerung wuchs, und es kam zu einem starken Zuzug von Arbeitskräften aus dem Umland. Diese Entwicklungen hatten auch Auswirkungen auf das Schulwesen.
            </p>
            <p className="leading-7">
              Die städtischen Schulen mussten erweitert werden, um die wachsende Zahl von Kindern aufzunehmen. Es entstanden neue Schultypen, die auf die Bedürfnisse der Industriegesellschaft zugeschnitten waren, wie Gewerbeschulen und Realschulen.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung einer Industrieanlage im 19. Jahrhundert]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die Bildung wurde zunehmend als Schlüssel zur sozialen Mobilität und zum wirtschaftlichen Erfolg angesehen. Die Schulpflicht wurde ausgeweitet, und es gab Bestrebungen, das Bildungswesen zu modernisieren und zu demokratisieren.
            </p>
          </div>
        </section>

        {/* Section 2: Die Revolution von 1848 und ihre Folgen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <History className="mr-2 h-5 w-5" />
            Die Revolution von 1848 und ihre Folgen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Revolution von 1848 war ein Wendepunkt in der deutschen Geschichte. Auch in Heidelberg kam es zu Unruhen und politischen Forderungen nach mehr Freiheit und Demokratie. Diese Ereignisse hatten auch Auswirkungen auf das Bildungswesen.
            </p>
            <p className="leading-7">
              Viele Lehrer und Professoren unterstützten die revolutionären Ideen und setzten sich für eine Reform des Bildungswesens ein. Es gab Forderungen nach einer allgemeinen, gleichen und freien Bildung für alle Bürger, unabhängig von Stand und Vermögen.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Die Heidelberger Versammlung</CardTitle>
                <CardDescription>Ein Meilenstein der Revolution von 1848</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Die Heidelberger Versammlung vom 5. März 1848 war ein bedeutendes Treffen liberaler Politiker und Intellektueller, das die Grundlage für das Vorparlament in Frankfurt legte. Die Versammlung forderte unter anderem die Pressefreiheit, die Abschaffung der Zensur und die Einführung einer Verfassung.
                </p>
                <p className="leading-7 mt-4">
                  Auch das Bildungswesen war ein Thema der Versammlung. Es gab Forderungen nach einer Reform des Schulwesens, um es den modernen Erfordernissen anzupassen und allen Bevölkerungsschichten Zugang zu Bildung zu ermöglichen.
                </p>
                <p className="leading-7 mt-4">
                  Obwohl die Revolution letztlich scheiterte, blieben viele ihrer Ideen lebendig und beeinflussten die Bildungsreformen der folgenden Jahrzehnte.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Die Revolution von 1848 führte zu einer stärkeren Politisierung des Bildungswesens. Viele Lehrer engagierten sich in politischen Bewegungen und setzten sich für eine Demokratisierung der Bildung ein. Die Ereignisse von 1848 hinterließen bleibende Spuren im Heidelberger Schulwesen und trugen zur Modernisierung bei.
            </p>
          </div>
        </section>

        {/* Section 3: Bildungsreformen im Kaiserreich */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Bildungsreformen im Kaiserreich
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Mit der Gründung des Deutschen Kaiserreichs 1871 kam es zu weitreichenden Bildungsreformen, die auch das Heidelberger Schulwesen beeinflussten. Die Bildungspolitik des Kaiserreichs war geprägt von einem starken staatlichen Einfluss und einer zentralistischen Steuerung.
            </p>
            <p className="leading-7">
              Die Schulpflicht wurde weiter ausgeweitet, und es gab Bestrebungen, das Bildungswesen zu vereinheitlichen und zu modernisieren. Neue Lehrpläne wurden eingeführt, die den Schwerpunkt auf naturwissenschaftliche und technische Fächer legten, um den Anforderungen der Industriegesellschaft gerecht zu werden.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Darstellung einer Schulklasse im Kaiserreich]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die Lehrerbildung wurde verbessert, und es entstanden neue Lehrerbildungsanstalten. Auch die Rolle der Lehrer änderte sich: Sie wurden zunehmend als Staatsbeamte angesehen und unterlagen einer strengen staatlichen Kontrolle.
            </p>
            <p className="leading-7">
              Trotz dieser Reformen blieb das Bildungswesen stark durch soziale Unterschiede geprägt. Der Zugang zu höherer Bildung war nach wie vor ein Privileg der wohlhabenden Schichten, während die breite Bevölkerung nur eine elementare Schulbildung erhielt.
            </p>
          </div>
        </section>

        {/* Section 4: Das Heidelberger Schulwesen im späten 19. Jahrhundert */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Das Heidelberger Schulwesen im späten 19. Jahrhundert
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Im späten 19. Jahrhundert erlebte das Heidelberger Schulwesen eine Phase der Konsolidierung und Modernisierung. Die Schulen wurden erweitert und modernisiert, um den Anforderungen der wachsenden Stadtbevölkerung gerecht zu werden.
            </p>
            <p className="leading-7">
              Es entstanden neue Schultypen, wie die Realschule, die eine praxisorientierte Bildung bot und auf Berufe in Handel und Industrie vorbereitete. Auch die Mädchenschulen wurden ausgebaut und boten zunehmend eine umfassendere Bildung an.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Das Heidelberger Gymnasium im 19. Jahrhundert</CardTitle>
                <CardDescription>Tradition und Wandel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Das Heidelberger Gymnasium, das heutige Kurfürst-Friedrich-Gymnasium, blieb die höchste Bildungseinrichtung der Stadt unterhalb der Universität. Es vermittelte eine humanistische Bildung mit Schwerpunkt auf den alten Sprachen, aber auch naturwissenschaftliche Fächer gewannen an Bedeutung.
                </p>
                <p className="leading-7 mt-4">
                  Der Unterricht folgte noch weitgehend dem traditionellen Bildungsideal, aber es gab auch Reformbestrebungen. Unter dem Einfluss der Bildungsreformen des Kaiserreichs wurden neue Lehrpläne eingeführt, die den Schwerpunkt auf naturwissenschaftliche und technische Fächer legten.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Insgesamt verbesserte sich das Bildungswesen in Heidelberg im Laufe des 19. Jahrhunderts deutlich, aber es blieb stark durch soziale Unterschiede geprägt. Der Zugang zu höherer Bildung war nach wie vor ein Privileg der wohlhabenden Schichten, während die breite Bevölkerung nur eine elementare Schulbildung erhielt.
            </p>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-18te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Das 18. Jahrhundert
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-20te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <School className="mr-2 h-4 w-4" />
              Das 20. Jahrhundert
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
