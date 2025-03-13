import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Building, CalendarDays, FileText, History, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NeuenheimEingemeindungPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte/neuenheim"
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
              Geschichte
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <CalendarDays className="mr-1 h-4 w-4" />
              1891
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Die Eingemeindung Neuenheims
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Am 1. Januar 1891 wurde das bis dahin selbständige Dorf Neuenheim offiziell nach Heidelberg eingemeindet. Dieser Schritt markierte einen bedeutenden Wendepunkt in der Geschichte des Ortes und veränderte seinen Charakter grundlegend.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die Hintergründe, den Prozess und die Auswirkungen der Eingemeindung Neuenheims nach Heidelberg.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        <Tabs defaultValue="vorgeschichte" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vorgeschichte" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span>Vorgeschichte</span>
            </TabsTrigger>
            <TabsTrigger value="prozess" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Der Prozess</span>
            </TabsTrigger>
            <TabsTrigger value="auswirkungen" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Auswirkungen</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Vorgeschichte Tab */}
          <TabsContent value="vorgeschichte" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Vorgeschichte der Eingemeindung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <History className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Neuenheim vor der Eingemeindung</h3>
                  <p className="leading-7">
                    Vor der Eingemeindung war Neuenheim ein eigenständiges Dorf mit landwirtschaftlicher Prägung. Die Bewohner lebten hauptsächlich vom Ackerbau, Weinbau und Gartenbau. Das Dorf hatte eine eigene Gemeindeverwaltung, eine Kirche, eine Schule und ein reges Vereinsleben. Die Bevölkerung bestand überwiegend aus Bauern, Handwerkern und Tagelöhnern.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Wachstum Heidelbergs im 19. Jahrhundert</h3>
                  <p className="leading-7">
                    Im Laufe des 19. Jahrhunderts erlebte Heidelberg ein starkes Bevölkerungswachstum. Die Stadt expandierte räumlich und stieß zunehmend an ihre Grenzen. Die Universität wuchs und benötigte mehr Platz für neue Institute und Einrichtungen. Gleichzeitig entwickelte sich Heidelberg zu einem beliebten Wohnort für Beamte, Professoren und wohlhabende Bürger, die nach geeigneten Baugrundstücken suchten.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Erste Verbindungen zwischen Heidelberg und Neuenheim</h3>
                  <p className="leading-7">
                    Mit dem Bau der ersten festen Neckarbrücke (der heutigen Alten Brücke) im Jahr 1788 verbesserte sich die Verbindung zwischen Heidelberg und Neuenheim erheblich. In den folgenden Jahrzehnten entstanden weitere Brücken, die den Neckar überquerten. Immer mehr Heidelberger Bürger erwarben Grundstücke in Neuenheim und bauten dort Villen und Landhäuser. Die Grenzen zwischen Stadt und Dorf begannen zu verschwimmen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Wirtschaftliche und soziale Verflechtungen</h3>
                  <p className="leading-7">
                    In der zweiten Hälfte des 19. Jahrhunderts verstärkten sich die wirtschaftlichen und sozialen Verflechtungen zwischen Heidelberg und Neuenheim. Viele Neuenheimer arbeiteten in Heidelberger Betrieben oder an der Universität. Umgekehrt nutzten Heidelberger die landwirtschaftlichen Produkte aus Neuenheim. Der Ausbau des öffentlichen Nahverkehrs, insbesondere die Einrichtung einer Pferdebahn zwischen Heidelberg und Neuenheim im Jahr 1885, förderte diese Entwicklung zusätzlich.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Vor der Eingemeindung hatte Neuenheim etwa 2.500 Einwohner. Die Fläche der Gemeinde betrug rund 500 Hektar, wovon ein großer Teil landwirtschaftlich genutzt wurde. Der Ort war deutlich kleiner als das heutige Neuenheim und konzentrierte sich hauptsächlich auf den Bereich entlang der heutigen Brückenstraße.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Prozess Tab */}
          <TabsContent value="prozess" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Der Eingemeindungsprozess</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Erste Verhandlungen</h3>
                  <p className="leading-7">
                    Die ersten offiziellen Gespräche über eine mögliche Eingemeindung Neuenheims nach Heidelberg begannen in den 1880er Jahren. Vertreter beider Gemeinden trafen sich zu Verhandlungen, bei denen die Bedingungen und Modalitäten einer Vereinigung diskutiert wurden. Die Heidelberger Stadtverwaltung zeigte großes Interesse an einer Eingemeindung, da sie dadurch neuen Raum für die Stadtentwicklung gewinnen konnte.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Widerstand und Befürworter</h3>
                  <p className="leading-7">
                    In Neuenheim gab es sowohl Befürworter als auch Gegner der Eingemeindung. Die Befürworter erhofften sich von einem Anschluss an Heidelberg eine bessere Infrastruktur, mehr wirtschaftliche Möglichkeiten und eine Wertsteigerung ihrer Grundstücke. Die Gegner befürchteten den Verlust der dörflichen Identität, höhere Steuern und eine Benachteiligung gegenüber der Kernstadt. Besonders die alteingesessenen Bauernfamilien standen der Eingemeindung skeptisch gegenüber.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Der Eingemeindungsvertrag</h3>
                  <p className="leading-7">
                    Nach langen Verhandlungen wurde schließlich ein Eingemeindungsvertrag ausgearbeitet, der die Rechte und Pflichten beider Seiten festlegte. Heidelberg verpflichtete sich unter anderem, die Schulden Neuenheims zu übernehmen, die Infrastruktur zu verbessern und bestimmte kommunale Einrichtungen zu erhalten. Im Gegenzug erhielt die Stadt das gesamte Gemeindevermögen Neuenheims, einschließlich wertvoller Grundstücke und Waldgebiete am Heiligenberg.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Die entscheidende Abstimmung</h3>
                  <p className="leading-7">
                    Am 15. Juli 1890 stimmte der Neuenheimer Gemeinderat mit knapper Mehrheit für die Eingemeindung nach Heidelberg. Auch die Heidelberger Stadtverordnetenversammlung gab ihre Zustimmung. Die badische Landesregierung genehmigte den Vertrag am 10. November 1890. Am 1. Januar 1891 trat die Eingemeindung offiziell in Kraft. Neuenheim wurde zum Stadtteil Heidelbergs, und die bisherige Gemeindeverwaltung wurde aufgelöst.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Zitat aus dem Eingemeindungsvertrag</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Die Gemeinde Neuenheim wird mit dem 1. Januar 1891 mit der Stadtgemeinde Heidelberg vereinigt. Mit diesem Tage gehen alle Rechte und Verbindlichkeiten der Gemeinde Neuenheim auf die Stadtgemeinde Heidelberg über."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Auswirkungen Tab */}
          <TabsContent value="auswirkungen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Auswirkungen der Eingemeindung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Bauliche Entwicklung</h3>
                  <p className="leading-7">
                    Nach der Eingemeindung erlebte Neuenheim einen rasanten baulichen Wandel. Die landwirtschaftlich genutzten Flächen wurden zunehmend durch Wohnbebauung ersetzt. Es entstanden repräsentative Villen und Mehrfamilienhäuser im Stil des Historismus und des Jugendstils, die heute noch das Stadtbild prägen. Die Universität Heidelberg begann, im nördlichen Teil Neuenheims (dem heutigen Neuenheimer Feld) naturwissenschaftliche Institute anzusiedeln.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Infrastrukturelle Verbesserungen</h3>
                  <p className="leading-7">
                    Die Eingemeindung brachte für Neuenheim erhebliche infrastrukturelle Verbesserungen mit sich. Die Straßen wurden gepflastert und mit Gaslaternen beleuchtet. Es entstanden Wasserleitungen, Kanalisationen und elektrische Versorgungsnetze. Der öffentliche Nahverkehr wurde ausgebaut, und 1901 fuhr die erste elektrische Straßenbahn durch Neuenheim. Auch das Schul- und Gesundheitswesen profitierte von der Zugehörigkeit zu Heidelberg.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Soziale und kulturelle Veränderungen</h3>
                  <p className="leading-7">
                    Mit der baulichen Entwicklung ging ein tiefgreifender sozialer Wandel einher. Die landwirtschaftliche Prägung Neuenheims verschwand allmählich, und die Bevölkerungsstruktur veränderte sich grundlegend. Neben den alteingesessenen Familien siedelten sich zunehmend Akademiker, Beamte und wohlhabende Bürger an. Es entstand eine soziale Mischung, die bis heute charakteristisch für Neuenheim ist. Trotz der Eingemeindung bewahrten viele Neuenheimer ein starkes Bewusstsein für die Eigenständigkeit ihres Stadtteils.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Langfristige Bedeutung</h3>
                  <p className="leading-7">
                    Die Eingemeindung Neuenheims nach Heidelberg erwies sich langfristig als vorteilhaft für beide Seiten. Heidelberg gewann wertvolle Flächen für die Stadtentwicklung und die Universität. Neuenheim profitierte von der Zugehörigkeit zu einer prosperierenden Stadt und entwickelte sich zu einem der attraktivsten Wohngebiete Heidelbergs. Die ehemals scharfe Grenze zwischen Stadt und Dorf verschwand, und Neuenheim wurde zu einem integralen Bestandteil des Heidelberger Stadtgebiets.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Zitat eines Zeitzeugen</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Als ich ein Kind war, konnte man noch deutlich erkennen, wo das alte Dorf Neuenheim aufhörte und die neuen Viertel begannen. Heute ist alles zusammengewachsen, und nur wer die Geschichte kennt, kann die Spuren des alten Neuenheim noch entdecken." - Otto Jäger, geboren 1885 in Neuenheim
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/neuenheim/ueberblick">
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              Überblick: Neuenheim
            </Button>
          </Link>
          <Link href="/detlef/projekte/neuenheim/ist-halb-europa">
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Neuenheim ist halb Europa
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
