import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Globe, Code, Share2, Shield, Users, PanelLeft } from "lucide-react";
import Link from "next/link";

export default function WebTwoPointZeroPage() {
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
              <Code className="mr-1 h-4 w-4" />
              Technologie
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Globe className="mr-1 h-4 w-4" />
              Internet
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Was ist das Web 2.0?
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Eine neue Sichtweise auf das Internet und seine Technologien
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-8">
        <Card className="bg-muted/50 border-muted">
          <CardContent className="p-6">
            <p className="leading-7 text-lg">
              Die neue Version des Webs (2.0) bedeutet nicht, dass hier eine völlig neue Technologie zum Einsatz kommt. Denn erstens ist es nicht eine Technologie - es sind mehrere - und zweitens gibt es diese Technologien bereits seit einer ganzen Weile und drittens ist das Web 2.0 auch eine Art neue Sichtweise auf das Internet.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold">AJAX - Die Grundlage des Web 2.0</h2>
          <p>
            Zunächst einmal fällt beim Thema Web 2.0 das Schlagwort AJAX. Dies ist ein Akronym für <strong>A</strong>synchronous <strong>J</strong>avaScript <strong>A</strong>nd <strong>X</strong>ML. Hierbei handelt es sich um die grundlegenden Techniken, die für das Web 2.0 eingesetzt werden:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">JavaScript</h3>
              </div>
              <p className="text-sm">Für das clientseitige Programmieren und die Interaktivität im Browser</p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <PanelLeft className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">XML</h3>
              </div>
              <p className="text-sm">Die Art, in der die Daten übermittelt werden</p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg">HTTP</h3>
              </div>
              <p className="text-sm">Für die eigentliche Übertragung der Daten</p>
            </div>
          </div>
          
          <p>
            Dies sind alles altbekannte Techniken, die jedoch erst in jüngerer Zeit zu einem Ganzen zusammengefügt wurden und damit die heutige Popularität erlangen konnten.
          </p>

          <Separator className="my-8" />

          <h2 className="text-2xl font-bold">Soziale Software - Die Grundpfeiler des Web 2.0</h2>
          <p>
            Das neue Web ist jedoch wie bereits erwähnt auch eine neue Sichtweise bzw. eine neue Anschauung innerhalb des Internets. So zählt Soziale Software, wie Community-, Wiki- und Blog-Software, zu den Grundpfeilern des Web 2.0.
          </p>

          <div className="space-y-6 my-6">
            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Communities</h3>
              </div>
              <p>
                Communities sind den meisten vermutlich ein Begriff. Es handelt sich hierbei um Plattformen im Internet, auf denen sich Menschen treffen und miteinander kommunizieren. Bekannte Beispiele sind Facebook oder StudiVZ.
              </p>
            </div>

            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <Share2 className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Wikis</h3>
              </div>
              <p>
                Wikis sind Seiten, an denen mehrere Personen gleichzeitig arbeiten. Hierdurch entstehen oft sehr ausführliche und genaue Informationsseiten, da jeder sein Wissen einfließen lassen und Fehler verbessern kann.
              </p>
            </div>

            <div className="border rounded-lg p-6 transition-colors hover:border-primary/50 hover:bg-muted/20">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Blogs</h3>
              </div>
              <p>
                Blogs sind Seiten wie diese, auf denen Artikel von einer oder wenigen Personen veröffentlicht werden. Diese Artikel werden von den Besuchern gelesen und eventuell kommentiert. Neue Beiträge erscheinen dabei meist ganz oben auf der Startseite.
              </p>
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-2xl font-bold">Fazit - Mehr als ein Modewort</h2>
          <p>
            Zusammengefasst lässt sich sagen, dass das Web 2.0 keine komplette Neuerfindung des Webs, jedoch deutlich mehr als ein Modewort ist, mit dem man seinen Chef (oder Kunden) beeindrucken kann. Dies zeigt sich in der immer größeren Beliebtheit der Sozialen Software im Internet. Communities, Wikis und Blogs schießen aus dem Boden und werden intensiv genutzt.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 my-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-6 w-6 text-destructive" />
              <h3 className="font-bold text-xl">Nachteile und Herausforderungen</h3>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Die Nutzer sozialer Software sind leicht entsprechend ihrer veröffentlichten Vorlieben und Beiträge oder der von ihnen veröffentlichten Bilder einzuordnen. Dies kann von möglichen zukünftigen Arbeitgebern ausgenutzt werden, um sich im Vorhinein ein Bild des Bewerbers zu machen.
              </li>
              <li>
                Zudem kämpft die AJAX-Technologie noch mit Kinderkrankheiten in Bezug auf Barrierefreiheit, also der Benutzbarkeit durch behinderte (z.B. blinde) Nutzer.
              </li>
            </ul>
          </div>

          <p>
            Das Web 2.0 ist noch neu, jedoch auf dem richtigen Weg und auch wenn es vermutlich keine offizielle Version 2.1 geben wird, so wird es jedoch in den nächsten Jahren ausgereifter werden und Kinderkrankheiten beseitigt werden.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-12 bg-muted rounded-xl p-6">
        <div className="text-sm text-muted-foreground">
          <p>
            Dieser Artikel bietet einen Überblick über die Grundlagen des Web 2.0 und seiner Technologien. Für tiefergehende Informationen empfiehlt sich die Lektüre weiterführender Fachliteratur zu AJAX, Social Media und moderner Webentwicklung.
          </p>
        </div>
      </div>
    </div>
  );
}
