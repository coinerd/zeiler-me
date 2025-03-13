import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Workflow, Users, FileCode, GitBranch, Rocket, ArrowUpRight, GitPullRequest, Repeat } from "lucide-react";
import Link from "next/link";

export default function AgileSoftwarePage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/julian/artikel"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zu Artikeln
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <Workflow className="mr-1 h-4 w-4" />
              Softwareentwicklung
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Users className="mr-1 h-4 w-4" />
              Methodik
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Agile Methoden in der Softwareentwicklung
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Flexibilität und Kundennähe als Schlüssel zum Erfolg
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-8">
        <Card className="bg-muted/50 border-muted">
          <CardContent className="p-6">
            <p className="leading-7 text-lg">
              Die agile Softwareentwicklung gilt besonders in Web 2.0 Projekten als die beste Vorgehensweise in der Umsetzung des Projekts. Doch was bedeutet es ein Projekt agil umzusetzen?
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold">Was ist Agilität?</h2>
          <p>
            Agilität bedeutet schnell auf Neues reagieren zu können - seien es Chancen oder Gefahren. Dies ist gerade auf schnelllebigen Märkten wie dem Internet ein enormer Wettbewerbsvorteil. 
          </p>
          
          <p>
            Erreicht wird dieses Ziel durch vier grundlegende Werte:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">1. Mensch über Prozesse</h3>
              </div>
              <p className="text-sm">
                Der Mensch wird in den Mittelpunkt gerückt und von starren Prozessen und Werkzeugen in der Entwicklung wird Abstand genommen.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">2. Software über Dokumentation</h3>
              </div>
              <p className="text-sm">
                Mehr Wert wird auf das schnelle Entwickeln eines lauffähigen Programms gelegt als auf ausführliche Dokumentation.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">3. Zusammenarbeit über Verträge</h3>
              </div>
              <p className="text-sm">
                Eine enge Beziehung zum Kunden wird als wichtiger angesehen als feste Verträge.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Repeat className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">4. Anpassung über Planung</h3>
              </div>
              <p className="text-sm">
                Offenheit gegenüber Veränderungen wird über das starre Befolgen von zuvor festgelegten Plänen gestellt.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-2xl font-bold">Prinzipien der Agilität</h2>
          <p>
            Auf diesen Werten aufbauend folgen die Prinzipien der Agilität:
          </p>

          <div className="space-y-6 my-6">
            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Frühe und häufige Auslieferung</h3>
              </div>
              <p>
                Die frühzeitige und häufige Auslieferung funktionsfähiger Software steht an oberster Stelle. Das heißt, die Software muss früh im Entwicklungsstadium lauffähig sein und wird mit jeder Auslieferung an den Kunden funktionsreicher.
              </p>
            </div>

            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <ArrowUpRight className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Schnelle Reaktion auf Veränderungen</h3>
              </div>
              <p>
                Ein weiteres Prinzip ist es, schnell auf Veränderungen einzugehen, sei es auch spät in der Entwicklung des Programms, um somit den daraus entstehenden Wettbewerbsvorteil nutzen zu können. Es sollten immer nur die Funktionen umgesetzt werden, die aktuell gebraucht werden und auf eine Vorschau auf eventuell mögliche zukünftige Erweiterungen verzichtet werden.
              </p>
            </div>

            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <GitPullRequest className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Testgetriebene Entwicklung</h3>
              </div>
              <p>
                Testgetriebene Entwicklung ist ebenso ein wichtiger Eckpfeiler der agilen Softwareentwicklung. Hierbei werden zuerst Tests geschrieben, die überprüfen ob eine Funktionalität korrekt ist, bevor die eigentliche Funktionalität programmiert wird. Dadurch kann in dem sich häufig ändernden Programm automatisch geprüft werden, ob es noch funktionsfähig ist.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <GitBranch className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Automatisierte Builds</h3>
              </div>
              <p>
                Automatisierte, meist jede Nacht erstellte Versionen der Software stellen sicher, dass die Entwickler schnell Rückmeldung - z.B. durch den Kunden - bezüglich der Funktionsfähigkeit der Software erhalten.
              </p>
            </div>
            
            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <Repeat className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Kontinuierliche Verbesserung</h3>
              </div>
              <p>
                In regelmäßigen Abständen sollte darüber nachgedacht werden, wie effektiver gearbeitet werden kann und das Verhalten dementsprechend angepasst werden.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-2xl font-bold">Methoden der agilen Programmierung</h2>
          <p>
            Aus den Prinzipien ergeben sich die eigentlichen Methoden der agilen Programmierung:
          </p>
          
          <Card className="mb-6 mt-4">
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle className="text-lg">Praktiken der agilen Softwareentwicklung</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-1">Paarprogrammierung</h3>
                  <p className="text-sm text-muted-foreground">Jeweils zwei Entwickler arbeiten an einem Monitor und programmieren abwechselnd.</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-1">Laufende Refaktorisierung</h3>
                  <p className="text-sm text-muted-foreground">Das Programm wird regelmäßig auf neue Gegebenheiten angepasst und verbessert.</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-1">Kundengeschichten (User Stories)</h3>
                  <p className="text-sm text-muted-foreground">Beschreiben bestimmte Anwendungsbeispiele aus Sicht des Kunden.</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-1">Ständige Codeüberprüfung</h3>
                  <p className="text-sm text-muted-foreground">Kontinuierliche Kontrolle des bereits geschriebenen Programmquelltextes.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <h2 className="text-2xl font-bold">Vorteile für Web 2.0 Projekte</h2>
          <p>
            Durch die hohe Anpassungsfähigkeit agiler Methoden bei der Softwareprogrammierung entstehen schneller lauffähige Produkte, die wiederum schneller durch Kunden getestet werden können. Dies ist besonders bei den neuen Web-Anwendungen hilfreich. Hier stellen die Nutzer des Internetangebots die Kunden dar, die die Software im Liveeinsatz testen.
          </p>

          <p>
            Bei der Entwicklung kann so schnell festgestellt werden, ob am Benutzer vorbei entwickelt wurde oder welche Funktionen gut angekommen sind. Hierdurch entsteht ein enormer Kostenvorteil, da Fehler früh erkannt und behoben werden können.
          </p>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Fazit</h2>
        <p className="text-lg">
          Zusammenfassend ist agile Softwareentwicklung für Web 2.0 Anwendungen unerlässlich. Denn kaum ein Projekt kann es sich leisten, den Benutzer bis zum Ende der Entwicklung außen vor zu lassen, nur um dann festzustellen, dass das Projekt nicht die gewünschte Akzeptanz findet.
        </p>
      </div>
      
      {/* Info Box */}
      <div className="mt-6 bg-muted rounded-xl p-6">
        <div className="text-sm text-muted-foreground">
          <p>
            Dieser Artikel bietet einen Überblick über die Grundlagen agiler Softwareentwicklungsmethoden. Für tiefergehende Informationen zu spezifischen Frameworks wie Scrum oder Kanban empfiehlt sich weiterführende Fachliteratur.
          </p>
        </div>
      </div>
    </div>
  );
}
