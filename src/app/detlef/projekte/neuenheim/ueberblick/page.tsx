import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Building, Home, MapPin, School, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NeuenheimUeberblickPage() {
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
              <MapPin className="mr-1 h-4 w-4" />
              Stadtteil
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Building className="mr-1 h-4 w-4" />
              Überblick
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Überblick: Neuenheim
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Neuenheim ist ein Stadtteil im Norden Heidelbergs, der durch seine Lage zwischen dem Neckar und den Hängen des Heiligenbergs geprägt ist. Mit seiner Mischung aus historischer Bebauung, universitären Einrichtungen und modernem Wohnraum ist Neuenheim einer der beliebtesten Stadtteile Heidelbergs.
        </p>
        <p className="leading-7">
          Auf dieser Seite finden Sie einen Überblick über die geografische Lage, die Bevölkerung und die wichtigsten Merkmale des Stadtteils Neuenheim.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        <Tabs defaultValue="lage" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="lage" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Lage</span>
            </TabsTrigger>
            <TabsTrigger value="bevoelkerung" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Bevölkerung</span>
            </TabsTrigger>
            <TabsTrigger value="einrichtungen" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>Einrichtungen</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Lage Tab */}
          <TabsContent value="lage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Geografische Lage</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Lage und Grenzen</h3>
                  <p className="leading-7">
                    Neuenheim liegt am nördlichen Ufer des Neckars, gegenüber der Heidelberger Altstadt. Der Stadtteil wird im Süden vom Neckar, im Norden von den Hängen des Heiligenbergs, im Osten vom Stadtteil Handschuhsheim und im Westen vom Stadtteil Bergheim begrenzt.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Topografie</h3>
                  <p className="leading-7">
                    Das Gebiet von Neuenheim ist überwiegend flach und erstreckt sich entlang des Neckars. Im nördlichen Teil steigt das Gelände leicht an und geht in die bewaldeten Hänge des Heiligenbergs über. Diese topografische Lage bietet vielen Teilen Neuenheims einen schönen Blick auf den Neckar und die Heidelberger Altstadt mit dem Schloss.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Verkehrsanbindung</h3>
                  <p className="leading-7">
                    Neuenheim ist durch mehrere Brücken mit der Heidelberger Innenstadt verbunden, darunter die Ernst-Walz-Brücke und die Theodor-Heuss-Brücke. Durch den Stadtteil führen wichtige Verkehrsachsen wie die Berliner Straße und die Brückenstraße. Der öffentliche Nahverkehr wird durch mehrere Buslinien und die Straßenbahn sichergestellt, die Neuenheim mit anderen Stadtteilen Heidelbergs verbinden.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Der Name "Neuenheim" leitet sich vermutlich vom althochdeutschen "Niuuanheim" ab, was so viel wie "neues Heim" oder "neue Siedlung" bedeutet. Die erste urkundliche Erwähnung des Ortes stammt aus dem Jahr 765.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Bevölkerung Tab */}
          <TabsContent value="bevoelkerung" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Bevölkerung und Demografie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Einwohnerzahl und Struktur</h3>
                  <p className="leading-7">
                    Neuenheim hat etwa 13.000 Einwohner und gehört damit zu den mittelgroßen Stadtteilen Heidelbergs. Die Bevölkerungsstruktur ist geprägt durch einen hohen Anteil an Studierenden und Universitätsangehörigen, was dem Stadtteil ein junges und internationales Flair verleiht. Gleichzeitig gibt es viele alteingesessene Neuenheimer Familien, die teilweise seit Generationen hier leben.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Soziale Struktur</h3>
                  <p className="leading-7">
                    Neuenheim gilt als einer der gehobeneren Stadtteile Heidelbergs mit einem überdurchschnittlich hohen Bildungs- und Einkommensniveau. Die Nähe zur Universität und zu verschiedenen Forschungseinrichtungen trägt dazu bei, dass hier viele Akademiker und Wissenschaftler leben. Die Mietpreise in Neuenheim gehören zu den höchsten in Heidelberg, was die soziale Zusammensetzung der Bevölkerung beeinflusst.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Historische Entwicklung</h3>
                  <p className="leading-7">
                    Ursprünglich war Neuenheim ein eigenständiges Dorf mit landwirtschaftlicher Prägung. Nach der Eingemeindung nach Heidelberg im Jahr 1891 wandelte sich der Charakter des Ortes grundlegend. Aus dem Bauerndorf wurde ein städtisch geprägter Wohnort für die wachsende Bevölkerung Heidelbergs. Besonders nach dem Zweiten Weltkrieg erlebte Neuenheim einen Bauboom, der das Erscheinungsbild des Stadtteils nachhaltig veränderte.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      In Neuenheim leben Menschen aus über 100 verschiedenen Nationen, was dem Stadtteil den Beinamen "Neuenheim ist halb Europa" eingebracht hat. Diese internationale Prägung spiegelt sich auch in der Vielfalt der Restaurants, Geschäfte und kulturellen Angebote wider.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Einrichtungen Tab */}
          <TabsContent value="einrichtungen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Wichtige Einrichtungen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Universitäre Einrichtungen</h3>
                  <p className="leading-7">
                    Neuenheim beherbergt zahlreiche Einrichtungen der Universität Heidelberg, insbesondere die naturwissenschaftlichen Institute im sogenannten "Neuenheimer Feld". Hier befinden sich unter anderem die Fakultäten für Medizin, Biologie, Chemie, Physik und Mathematik sowie das Universitätsklinikum. Das Neuenheimer Feld ist mit rund 15.000 Beschäftigten und 30.000 Studierenden einer der größten Wissenschaftsstandorte Deutschlands.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Bildungseinrichtungen</h3>
                  <p className="leading-7">
                    In Neuenheim gibt es mehrere Schulen, darunter das Bunsen-Gymnasium, die Elisabeth-von-Thadden-Schule und verschiedene Grundschulen. Zudem befinden sich hier mehrere Kindergärten und Kindertagesstätten. Die Nähe zu den universitären Einrichtungen macht Neuenheim zu einem wichtigen Bildungsstandort in Heidelberg.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Freizeit und Kultur</h3>
                  <p className="leading-7">
                    Der Stadtteil verfügt über zahlreiche Grün- und Freizeitanlagen. Der Neckarwiese, eine beliebte Grünfläche entlang des Neckars, ist ein wichtiger Treffpunkt für Studierende und Familien. Verschiedene Sportvereine, darunter der TSV Handschuhsheim, bieten vielfältige Möglichkeiten zur sportlichen Betätigung. Kulturell ist Neuenheim durch kleinere Galerien, Buchhandlungen und das Programmkino "Gloria & Gloriette" geprägt.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Einkaufen und Gastronomie</h3>
                  <p className="leading-7">
                    Die Haupteinkaufsstraße in Neuenheim ist die Brückenstraße mit zahlreichen Geschäften, Cafés und Restaurants. Hier findet man sowohl kleine, inhabergeführte Läden als auch Filialen bekannter Ketten. Das gastronomische Angebot ist vielfältig und international ausgerichtet, was die multikulturelle Prägung des Stadtteils widerspiegelt.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Das Neuenheimer Feld war ursprünglich eine landwirtschaftlich genutzte Fläche. Erst in den 1960er Jahren begann die Universität Heidelberg, hier ihre naturwissenschaftlichen Institute anzusiedeln. Heute ist es einer der modernsten Wissenschaftscampus Europas.
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
          <Link href="/detlef/projekte/neuenheim/eingemeindung">
            <Button variant="outline" className="w-full justify-start">
              <Building className="mr-2 h-4 w-4" />
              Die Eingemeindung Neuenheims
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
