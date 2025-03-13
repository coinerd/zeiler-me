import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Globe, History, MapPin, School, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NeuenheimHalbEuropaPage() {
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
              <Globe className="mr-1 h-4 w-4" />
              Kultur
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Users className="mr-1 h-4 w-4" />
              Vielfalt
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Neuenheim ist halb Europa
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          "Neuenheim ist halb Europa" - dieser Ausspruch spiegelt die kulturelle Vielfalt und internationale Prägung des Heidelberger Stadtteils wider. Durch die Nähe zur Universität und verschiedenen Forschungseinrichtungen hat sich Neuenheim zu einem kosmopolitischen Ort entwickelt, an dem Menschen aus zahlreichen Ländern und Kulturen zusammenleben.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die kulturelle Vielfalt Neuenheims und wie verschiedene europäische Einflüsse den Stadtteil geprägt haben.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        <Tabs defaultValue="vielfalt" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vielfalt" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Kulturelle Vielfalt</span>
            </TabsTrigger>
            <TabsTrigger value="einfluss" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>Europäische Einflüsse</span>
            </TabsTrigger>
            <TabsTrigger value="alltag" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>Alltag in Neuenheim</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Kulturelle Vielfalt Tab */}
          <TabsContent value="vielfalt" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Kulturelle Vielfalt in Neuenheim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Internationale Bevölkerung</h3>
                  <p className="leading-7">
                    Neuenheim ist einer der internationalsten Stadtteile Heidelbergs. Menschen aus über 100 verschiedenen Nationen leben hier zusammen. Diese Vielfalt ist vor allem auf die Nähe zur Universität und zu verschiedenen Forschungseinrichtungen zurückzuführen, die Studierende, Wissenschaftler und Mitarbeiter aus aller Welt anziehen. Besonders stark vertreten sind Personen aus europäischen Ländern wie Frankreich, Italien, Spanien, Großbritannien und den osteuropäischen Staaten, aber auch aus Asien, Amerika und Afrika.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Sprachliche Vielfalt</h3>
                  <p className="leading-7">
                    In den Straßen Neuenheims kann man täglich zahlreiche verschiedene Sprachen hören. Neben Deutsch sind Englisch, Französisch, Italienisch, Spanisch und viele weitere Sprachen im Alltag präsent. Diese sprachliche Vielfalt spiegelt sich auch in den Angeboten der lokalen Geschäfte, Restaurants und kulturellen Einrichtungen wider. Mehrsprachige Schilder und Speisekarten sind keine Seltenheit, und viele Dienstleister werben mit ihren Fremdsprachenkenntnissen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Kulturelle Begegnungsstätten</h3>
                  <p className="leading-7">
                    In Neuenheim gibt es zahlreiche Orte, an denen verschiedene Kulturen aufeinandertreffen und sich austauschen können. Dazu gehören internationale Cafés und Restaurants, Kulturvereine, religiöse Einrichtungen und universitäre Treffpunkte. Besonders beliebt ist die Neckarwiese, die bei gutem Wetter zu einem bunten Treffpunkt für Menschen aller Nationalitäten wird. Hier kann man Studierende beim Grillen, Familien beim Picknick und internationale Gruppen beim Feiern beobachten.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Zitat eines Bewohners</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Was ich an Neuenheim besonders schätze, ist die Möglichkeit, täglich Menschen aus verschiedenen Ländern und Kulturen zu begegnen. Man kann hier in Heidelberg leben und gleichzeitig das Gefühl haben, in einer internationalen Gemeinschaft zu sein. Diese Vielfalt bereichert unser Leben und erweitert unseren Horizont." - Maria Schmidt, Neuenheimer Bewohnerin seit 30 Jahren
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Europäische Einflüsse Tab */}
          <TabsContent value="einfluss" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Europäische Einflüsse in Neuenheim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Historische europäische Verbindungen</h3>
                  <p className="leading-7">
                    Die europäischen Verbindungen Neuenheims reichen weit in die Geschichte zurück. Bereits in der Römerzeit gab es hier eine Siedlung, die Teil des römischen Imperiums war. Im Mittelalter und in der frühen Neuzeit war die Region durch Handelsbeziehungen mit verschiedenen europäischen Ländern verbunden. Die Universität Heidelberg, gegründet 1386, zog von Anfang an Studierende und Gelehrte aus ganz Europa an und förderte den kulturellen Austausch.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Architektonische Einflüsse</h3>
                  <p className="leading-7">
                    Die Architektur Neuenheims zeigt deutliche europäische Einflüsse. Viele der repräsentativen Villen und Mehrfamilienhäuser, die nach der Eingemeindung Ende des 19. Jahrhunderts entstanden, orientieren sich an französischen, italienischen oder englischen Vorbildern. Besonders auffällig sind die Jugendstilgebäude, die von der europaweiten Kunstbewegung um 1900 inspiriert wurden. Auch in der modernen Architektur des Neuenheimer Feldes lassen sich internationale Einflüsse erkennen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Kulinarische Vielfalt</h3>
                  <p className="leading-7">
                    Die kulinarische Landschaft Neuenheims ist stark von europäischen Einflüssen geprägt. Neben traditionellen deutschen Restaurants gibt es zahlreiche italienische, französische, spanische, griechische und osteuropäische Lokale. In den Cafés werden Croissants, Panini und andere europäische Spezialitäten angeboten. Die Wochenmärkte bieten Produkte aus verschiedenen europäischen Regionen an, und in den Supermärkten findet man ein breites Sortiment internationaler Lebensmittel.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Kulturelle Veranstaltungen</h3>
                  <p className="leading-7">
                    In Neuenheim finden regelmäßig kulturelle Veranstaltungen mit europäischem Bezug statt. Dazu gehören Konzerte mit klassischer und moderner europäischer Musik, Lesungen internationaler Autoren, Filmvorführungen und Kunstausstellungen. Besonders beliebt sind die interkulturellen Feste, bei denen verschiedene europäische Traditionen, Tänze und kulinarische Spezialitäten präsentiert werden. Diese Veranstaltungen fördern den kulturellen Austausch und stärken das Bewusstsein für die europäische Vielfalt.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Die Heidelberger Universität unterhält Partnerschaften mit zahlreichen europäischen Hochschulen und ist Teil des Erasmus-Programms, das den Austausch von Studierenden innerhalb Europas fördert. Jedes Jahr kommen Hunderte von europäischen Austauschstudierenden nach Heidelberg, von denen viele in Neuenheim wohnen und studieren.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Alltag in Neuenheim Tab */}
          <TabsContent value="alltag" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Alltag in Neuenheim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Ein typischer Tag in Neuenheim</h3>
                  <p className="leading-7">
                    Der Alltag in Neuenheim ist geprägt von einer lebendigen Mischung verschiedener Kulturen und Lebensstile. Am Morgen treffen sich Studierende und Berufstätige in den zahlreichen Cafés entlang der Brückenstraße, wo sie bei einem Cappuccino oder Espresso in den Tag starten. Die Geschäfte öffnen ihre Türen, und in den Bäckereien werden frische Brötchen, Croissants und andere internationale Backwaren angeboten.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Bildung und Wissenschaft</h3>
                  <p className="leading-7">
                    Tagsüber ist das Neuenheimer Feld ein Zentrum internationaler Wissenschaft und Forschung. In den Hörsälen, Laboren und Bibliotheken arbeiten Studierende und Wissenschaftler aus aller Welt an gemeinsamen Projekten. Die Unterrichtssprache ist oft Englisch, und in den Mensen und Cafeterien hört man ein vielsprachiges Stimmengewirr. Die internationale Zusammenarbeit in Forschung und Lehre ist ein wesentlicher Bestandteil des universitären Alltags.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Freizeit und Erholung</h3>
                  <p className="leading-7">
                    In ihrer Freizeit nutzen die Bewohner Neuenheims die vielfältigen Möglichkeiten, die der Stadtteil bietet. Die Neckarwiese ist ein beliebter Treffpunkt für Sportler, Sonnenanbeter und Picknickfreunde. In den Parks und auf den Sportplätzen trifft man auf internationale Gruppen, die Fußball, Volleyball oder andere Sportarten betreiben. Die Kneipen und Restaurants füllen sich am Abend mit einer bunten Mischung aus Einheimischen und Zugezogenen, die gemeinsam essen, trinken und feiern.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Interkulturelle Begegnungen</h3>
                  <p className="leading-7">
                    Der Alltag in Neuenheim bietet zahlreiche Gelegenheiten für interkulturelle Begegnungen. In den Wohnheimen und Wohngemeinschaften leben Studierende aus verschiedenen Ländern zusammen und lernen voneinander. In den Schulen und Kindergärten wachsen Kinder unterschiedlicher Herkunft gemeinsam auf und entwickeln ein natürliches Verständnis für kulturelle Vielfalt. Vereine, Initiativen und religiöse Gemeinschaften bieten Plattformen für den Austausch und die Zusammenarbeit über kulturelle Grenzen hinweg.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Zitat eines Studenten</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "Als ich vor drei Jahren aus Italien nach Heidelberg kam, um hier zu studieren, hatte ich Angst, mich fremd zu fühlen. Aber in Neuenheim habe ich schnell Anschluss gefunden. In meiner WG leben Studierende aus Deutschland, Frankreich und Polen, und wir haben viele internationale Freunde. Wir kochen zusammen, feiern unsere verschiedenen Feste und lernen voneinander. Neuenheim ist wirklich ein Stück Europa mitten in Deutschland." - Marco Rossi, Austauschstudent aus Mailand
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
          <Link href="/detlef/projekte/neuenheim/eingemeindung">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Die Eingemeindung Neuenheims
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
