import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, BarChart2, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function VomTextZumSchaubildPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Vom Text zum Schaubild
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Textanalyse</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <BarChart2 className="h-3 w-3" />
              <span>Visualisierung</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Die Umwandlung von Texten in visuelle Darstellungen ist eine wichtige Kompetenz, die das Textverständnis 
          fördert und komplexe Zusammenhänge übersichtlich darstellt. Auf dieser Seite finden Sie ein Beispiel 
          für die Transformation eines Sachtextes in ein Schaubild.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mb-6">Ablauf Tarifvertragsverhandlungen</h2>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Ausgangssituation</h3>
            </div>
            <p>
              Die Tarifauseinandersetzungen werden mit der Kündigung des noch laufenden Tarifvertrags eingeleitet. 
              Die Kündigung kann grundsätzlich durch jede der beiden Tarifvertragsparteien erfolgen.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Tarifverhandlungen</h3>
            </div>
            <p>
              Nach der Kündigung des Tarifvertrags treten die Tarifkommissionen beider Parteien zu Tarifverhandlungen zusammen. 
              Hierbei erläutern die Gewerkschaften ihrem Verhandlungspartner die im Kündigungsschreiben aufgeführten Lohn- und 
              Gehaltsforderungen. Die Arbeitgeber unterbreiten ein Angebot. In der Regel weichen Forderung und Angebot in dieser 
              Phase noch stark voneinander ab. Ziel der weiteren Verhandlungen ist es also, einen akzeptablen Kompromiss zu finden. 
              Scheitern die Verhandlungen, kommt es zur Schlichtung.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Allgemeines Schlichtungsverfahren</h3>
            </div>
            <p>
              Wenn alle Verhandlungsmittel ausgeschöpft sind, dann setzt das Allgemeine Schlichtungsverfahren ein. 
              Dadurch wird versucht, die festgefahrenen Verhandlungen wieder in Gang zu bringen und zu einer Einigung zu kommen. 
              Die Schlichtung dient zur Entfaltung des Arbeitsfriedens und zur Verhinderung von Arbeitskämpfen.
            </p>
            <p className="mt-4">
              In der Regel sind die Schlichtungsstellen mit Beisitzern von Arbeitgeber und Arbeitnehmern und einem neutralen 
              Vorsitzenden besetzt. Sie erarbeiten einen Einigungsvorschlag, der von den Tarifparteien angenommen oder abgelehnt 
              werden kann. Im Falle der Annahme kommt es zu einem Abschluss eines neuen Tarifvertrages, im anderen Falle gilt die 
              Schlichtung als gescheitert. Mit dem Scheitern der Schlichtung erlischt die Friedenspflicht der Tarifparteien und es 
              können nunmehr Arbeitskampfmaßnahmen eingeleitet werden.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Urabstimmung</h3>
            </div>
            <p>
              Bevor zum Streik aufgerufen wird, wird die Gewerkschaft noch eine Urabstimmung durchführen. Hierbei müssen alle 
              Gewerkschaftsmitglieder in einem bestimmten Tarifgebiet auf einem Stimmzettel ankreuzen, ob sie für oder gegen einen 
              Arbeitskampf sind. Voraussetzung für die Durchführung eines Streiks ist, dass mindestens 75% der betroffenen 
              Gewerkschaftsmitglieder sich für Streikmaßnahmen entscheiden.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Streik</h3>
            </div>
            <p>
              Das wichtigste Arbeitskampfmittel der Arbeitnehmer ist der Streik. Zum Streikaufruf sind allein die Gewerkschaften 
              berechtigt. Sie besitzen als eine Art Gegenmacht zu den Arbeitgebern das Streikmonopol.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Aussperrung</h3>
            </div>
            <p>
              Auf den Streik der Arbeitnehmer können die Arbeitgeber mit der Aussperrung reagieren. Hierbei wird den Arbeitnehmern 
              von den Unternehmen der Zugang zu den Arbeitsplätzen verweigert. Während der Aussperrung ruhen die Rechte und Pflichten 
              aus dem Arbeitsvertrag. Der Arbeitnehmer erbringt keine Leistung und erhält im Gegenzug keinen Lohn. Nach Beendigung der 
              Aussperrung leben die Rechte und Pflichten aus dem Arbeitsvertrag wieder auf. Der Arbeitgeber kann eine Weiterbeschäftigung 
              von Arbeitnehmern nur verweigern, wenn sie sozial gerechtfertigt ist, so z.B. bei Rädelsführern eines wilden Streiks.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Verhandlungen während des Arbeitskampfes</h3>
            </div>
            <p>
              Parallel zu den Arbeitskampfmaßnahmen werden Verhandlungen zwischen den Tarifvertragsparteien geführt. Sie zielen auf eine 
              Beendigung des Arbeitskampfes. Voraussetzung hierfür ist eine Annäherung der kämpfenden Parteien und die Erzielung eines 
              Kompromisses. Die Bereitschaft hierfür ist in dieser Phase des Arbeitskampfes bei beiden Parteien relativ groß, denn der 
              Streik verursacht hohe Kosten durch Produktionsausfall und die Ausgesperrten erleiden Einkommensverluste.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Besondere Schlichtung</h3>
            </div>
            <p>
              In dieser Phase des Arbeitskampfes setzt häufig die besondere Schlichtung ein. Die besondere Schlichtung wird während eines 
              laufenden Arbeitskampfes durchgeführt. In einem letzten Versuch sollen die festgefahrenen Verhandlungen wieder in Gang 
              gebracht werden.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Abschluss eines neuen Tarifvertrags</h3>
            </div>
            <p>
              Kommt bei den Tarifverhandlungen eine Einigung zustande, so ist eine erneute Urabstimmung zur Beendigung des Streiks 
              notwendig. Zum Abschluss eines neuen Tarifvertrags kommt es, wenn bei der Urabstimmung mindestens 25% der gewerkschaftlich 
              organisierten Arbeitnehmer für die Annahme des Verhandlungsergebnisses und damit für die Beendigung des Streiks stimmt.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-10" />

        <div className="bg-muted/40 p-6 rounded-md border mt-8">
          <h3 className="text-xl font-semibold mb-4">Arbeitsauftrag</h3>
          <p>
            Entwerft in Gruppenarbeit ein Schaubild, welches die einzelnen Stufen des Arbeitskampfes erklärt.
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-3">Hinweise zur Erstellung eines Schaubilds:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identifizieren Sie die wichtigsten Informationen und Zusammenhänge im Text.</li>
              <li>Strukturieren Sie die Informationen in logische Abschnitte oder Prozessschritte.</li>
              <li>Verwenden Sie Symbole, Pfeile und Farben, um Beziehungen und Abläufe zu verdeutlichen.</li>
              <li>Achten Sie auf eine übersichtliche und leicht verständliche Darstellung.</li>
              <li>Beschriften Sie alle Elemente klar und präzise.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
