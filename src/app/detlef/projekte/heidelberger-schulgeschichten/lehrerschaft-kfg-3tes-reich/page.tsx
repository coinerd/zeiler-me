import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CalendarDays, History, School } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichtenLehrerschaftKFGPage() {
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
              NS-Zeit
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Lehrerschaft
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Die Lehrerschaft des KFG in der NS-Zeit
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Anpassung, Widerstand und Verfolgung
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Die Zeit des Nationalsozialismus war eine dunkle Epoche in der deutschen Geschichte. Auch die Lehrerschaft des Kurfürst-Friedrich-Gymnasiums (KFG) in Heidelberg war von den politischen Umwälzungen und der Gleichschaltung des Schulwesens betroffen.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die Situation der Lehrer am KFG während der NS-Zeit, ihre Anpassung an das Regime, Formen des Widerstands und die Verfolgung politisch unliebsamer Lehrer.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Die Gleichschaltung des Schulwesens */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Die Gleichschaltung des Schulwesens
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Mit der Machtergreifung der Nationalsozialisten 1933 begann die Gleichschaltung des Schulwesens. Die Lehrpläne wurden ideologisch ausgerichtet, und die Erziehung zum "nationalsozialistischen Volksgenossen" stand im Mittelpunkt. Lehrer mussten ihre Loyalität zum NS-Regime beweisen und wurden dazu angehalten, Mitglied der NSDAP oder ihrer Unterorganisationen zu werden.
            </p>
            <p className="leading-7">
              Auch am KFG kam es zu Entlassungen von Lehrern, die nicht der NS-Ideologie entsprachen oder als politisch unzuverlässig galten. Die verbliebenen Lehrer mussten sich anpassen und die nationalsozialistische Ideologie im Unterricht vermitteln.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung einer Schulklasse in der NS-Zeit]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die Gleichschaltung des Schulwesens führte zu einem Verlust an pädagogischer Freiheit und Vielfalt. Die Erziehung wurde auf die Vermittlung von Gehorsam, Disziplin und nationalsozialistischen Werten reduziert.
            </p>
          </div>
        </section>

        {/* Section 2: Anpassung und Mitläufertum */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <History className="mr-2 h-5 w-5" />
            Anpassung und Mitläufertum
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Viele Lehrer am KFG passten sich den neuen Verhältnissen an und wurden zu Mitläufern des Regimes. Sie vermittelten die nationalsozialistische Ideologie im Unterricht und beteiligten sich an NS-Organisationen wie dem Nationalsozialistischen Lehrerbund (NSLB).
            </p>
            <p className="leading-7">
              Die Gründe für diese Anpassung waren vielfältig. Manche Lehrer handelten aus Überzeugung, andere aus Angst vor Repressionen oder aus Karrieregründen. Die Mitgliedschaft in NS-Organisationen konnte berufliche Vorteile bringen und den sozialen Aufstieg erleichtern.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Der Nationalsozialistische Lehrerbund</CardTitle>
                <CardDescription>Ein Instrument der Gleichschaltung</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Der Nationalsozialistische Lehrerbund (NSLB) war eine Organisation, die 1929 gegründet wurde und die Lehrer im Sinne der NS-Ideologie schulen und kontrollieren sollte. Die Mitgliedschaft im NSLB war für Lehrer faktisch verpflichtend, und der Bund organisierte Schulungen, Tagungen und Freizeitaktivitäten im nationalsozialistischen Geist.
                </p>
                <p className="leading-7 mt-4">
                  Der NSLB diente auch der Überwachung der Lehrer und der Durchsetzung der Gleichschaltung. Lehrer, die sich weigerten, Mitglied zu werden oder die als politisch unzuverlässig galten, mussten mit Repressionen rechnen.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Die Anpassung der Lehrer an das NS-Regime führte zu einer Entprofessionalisierung des Lehrerberufs. Pädagogische Inhalte und Methoden traten in den Hintergrund, und die Erziehung zum "Volksgenossen" wurde zur Hauptaufgabe der Lehrer.
            </p>
          </div>
        </section>

        {/* Section 3: Widerstand und Verfolgung */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Widerstand und Verfolgung
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Trotz der Repressionen gab es auch Lehrer am KFG, die Widerstand gegen das NS-Regime leisteten. Sie versuchten, im Unterricht kritisches Denken zu fördern, die nationalsozialistische Ideologie zu hinterfragen oder Schüler vor der Indoktrination zu schützen.
            </p>
            <p className="leading-7">
              Dieser Widerstand war jedoch gefährlich und konnte zu schweren Repressionen führen. Lehrer, die sich offen gegen das Regime stellten, mussten mit Entlassung, Verhaftung oder Schlimmerem rechnen. Einige Lehrer am KFG wurden wegen ihrer politischen Haltung verfolgt und verloren ihre Stellung.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Darstellung von Lehrern im Widerstand gegen das NS-Regime]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Der Widerstand der Lehrer am KFG war ein Zeichen von Mut und Zivilcourage in einer Zeit der Unterdrückung. Ihre Geschichten sind ein wichtiger Teil der Erinnerungskultur und mahnen uns, die Freiheit der Bildung und die Unabhängigkeit der Lehrer zu schützen.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Zeitleiste: Die Lehrerschaft des KFG in der NS-Zeit</h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">1933</p>
                <p className="text-muted-foreground">Machtergreifung der Nationalsozialisten und Beginn der Gleichschaltung des Schulwesens</p>
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
                <p className="text-lg font-semibold">1935</p>
                <p className="text-muted-foreground">Einführung der Rassengesetze und verstärkte ideologische Ausrichtung des Unterrichts</p>
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
                <p className="text-lg font-semibold">1939</p>
                <p className="text-muted-foreground">Beginn des Zweiten Weltkriegs und verstärkte Militarisierung des Schulwesens</p>
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
                <p className="text-lg font-semibold">1945</p>
                <p className="text-muted-foreground">Ende des Zweiten Weltkriegs und Beginn der Entnazifizierung des Schulwesens</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-20te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Das 20. Jahrhundert
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/schuelerunruhen-am-kfg">
            <Button variant="outline" className="w-full justify-start">
              <School className="mr-2 h-4 w-4" />
              Schülerunruhen am KFG im Jahre 1968
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
