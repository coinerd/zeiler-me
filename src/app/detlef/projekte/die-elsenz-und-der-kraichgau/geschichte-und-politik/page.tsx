import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Castle, Crown, History, Swords, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GeschichtePolitikPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte/die-elsenz-und-der-kraichgau"
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
              <Crown className="mr-1 h-4 w-4" />
              Politik
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Geschichte und Politik
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Der Kraichgau und das Elsenztal blicken auf eine bewegte Geschichte zurück, die von verschiedenen Herrschern, politischen Umbrüchen und sozialen Bewegungen geprägt wurde. Von den frühen Siedlungen bis zu den Bauernaufständen und der Neuzeit hat die Region viele historische Entwicklungen erlebt.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die historischen Ereignisse, politischen Entwicklungen und bedeutenden Persönlichkeiten, die die Region geprägt haben.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        <Tabs defaultValue="gaubegriff" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gaubegriff" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              <span>Der Gaubegriff</span>
            </TabsTrigger>
            <TabsTrigger value="steinsberg" className="flex items-center gap-2">
              <Castle className="h-4 w-4" />
              <span>Burg Steinsberg</span>
            </TabsTrigger>
            <TabsTrigger value="bauernunruhen" className="flex items-center gap-2">
              <Swords className="h-4 w-4" />
              <span>Bauernunruhen</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Der Gaubegriff Tab */}
          <TabsContent value="gaubegriff" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Der Gaubegriff</CardTitle>
                <CardDescription>
                  Historische Entwicklung und Bedeutung
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Crown className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Ursprung des Namens</h3>
                  <p className="leading-7">
                    Der Name "Kraichgau" leitet sich vermutlich vom althochdeutschen Wort "Chreihgowe" ab, was so viel wie "Krähengebiet" bedeutet. Erste urkundliche Erwähnungen des Namens finden sich bereits im 8. Jahrhundert. Der Begriff "Gau" bezeichnete im frühen Mittelalter eine Verwaltungseinheit des Fränkischen Reiches.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Der Kraichgau als historischer Gau</h3>
                  <p className="leading-7">
                    Im frühen Mittelalter war der Kraichgau ein Gau im Fränkischen Reich und später im Heiligen Römischen Reich. Er wurde von einem Gaugrafen verwaltet, der im Namen des Königs oder Kaisers die Gerichtsbarkeit ausübte und Steuern einzog. Mit dem Zerfall der Gauverfassung im Hochmittelalter zersplitterte der Kraichgau in zahlreiche kleine Herrschaften.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Territoriale Zersplitterung</h3>
                  <p className="leading-7">
                    Im späten Mittelalter und in der frühen Neuzeit war der Kraichgau stark territorial zersplittert. Zahlreiche Adelsgeschlechter, Klöster, Bistümer und Reichsstädte teilten sich die Herrschaft über die Region. Diese Zersplitterung führte zu einem Flickenteppich unterschiedlicher Rechtssysteme, Steuern und Konfessionen. Erst mit der Neuordnung Deutschlands zu Beginn des 19. Jahrhunderts wurde der Kraichgau politisch vereinheitlicht und größtenteils dem Großherzogtum Baden zugeschlagen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Der Kraichgau heute</h3>
                  <p className="leading-7">
                    Heute ist der Kraichgau keine politische Einheit mehr, sondern eine historische Landschaft, die sich über Teile der Landkreise Karlsruhe, Heilbronn und Rhein-Neckar-Kreis erstreckt. Der Begriff hat jedoch als kulturelle und geografische Bezeichnung überlebt und prägt die regionale Identität. Zahlreiche Vereine, Initiativen und Institutionen tragen den Namen "Kraichgau" und setzen sich für die Bewahrung des kulturellen Erbes und die Förderung der regionalen Entwicklung ein.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Der Kraichgau wird oft als "Land der tausend Hügel" bezeichnet, was sowohl auf seine landschaftliche Beschaffenheit als auch auf die historische Zersplitterung in viele kleine Herrschaftsgebiete anspielt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Burg Steinsberg Tab */}
          <TabsContent value="steinsberg" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Burg Steinsberg</CardTitle>
                <CardDescription>
                  Geschichte einer bedeutenden Burganlage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Castle className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Gründung und frühe Geschichte</h3>
                  <p className="leading-7">
                    Die Burg Steinsberg wurde vermutlich im 11. Jahrhundert erbaut und gehört damit zu den ältesten Burganlagen im Kraichgau. Erste urkundliche Erwähnungen stammen aus dem Jahr 1109. Die Burg wurde von den Herren von Steinsberg errichtet, einem lokalen Adelsgeschlecht, das im Dienste der Staufer stand. Die strategisch günstige Lage auf dem markanten Basaltkegel des Steinsbergs machte die Burg zu einem wichtigen Kontrollpunkt in der Region.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Architektonische Besonderheiten</h3>
                  <p className="leading-7">
                    Die Burg Steinsberg ist für ihre ungewöhnliche achteckige Form bekannt, die in Deutschland einzigartig ist. Diese Form wurde vermutlich im 13. Jahrhundert während eines Umbaus gewählt und orientiert sich möglicherweise an Vorbildern aus dem Nahen Osten, die während der Kreuzzüge kennengelernt wurden. Die Burg verfügt über einen mächtigen Bergfried, eine Ringmauer mit Wehrgang und verschiedene Wohngebäude. Besonders bemerkenswert ist der tiefe Burgbrunnen, der bis zum Grundwasserspiegel reicht.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Wechselnde Besitzer</h3>
                  <p className="leading-7">
                    Nach dem Aussterben der Herren von Steinsberg im 13. Jahrhundert wechselte die Burg mehrfach den Besitzer. Sie gehörte unter anderem den Herren von Venningen, den Grafen von Degenfeld und schließlich den Freiherren von Venningen. Im Laufe der Jahrhunderte wurde die Burg mehrfach umgebaut und erweitert, wobei sie ihren wehrhaften Charakter beibehielt.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Die Burg heute</h3>
                  <p className="leading-7">
                    Heute ist die Burg Steinsberg im Besitz der Stadt Sinsheim und ein beliebtes Ausflugsziel. Sie beherbergt ein Museum zur Geschichte der Burg und der Region sowie ein Restaurant. Von der Burganlage aus hat man einen hervorragenden Rundblick über den Kraichgau. Regelmäßig finden auf der Burg kulturelle Veranstaltungen wie Konzerte, Theateraufführungen und mittelalterliche Märkte statt.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Die Burg Steinsberg wird auch als "Kompass des Kraichgaus" bezeichnet, da sie aufgrund ihrer exponierten Lage von vielen Punkten der Region aus sichtbar ist und früher als Orientierungspunkt diente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Bauernunruhen Tab */}
          <TabsContent value="bauernunruhen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Bauernunruhen und der Bundschuh</CardTitle>
                <CardDescription>
                  Soziale Bewegungen im späten Mittelalter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Swords className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Ursachen der Bauernunruhen</h3>
                  <p className="leading-7">
                    Im späten 15. und frühen 16. Jahrhundert kam es im Kraichgau wie in vielen Teilen Deutschlands zu Bauernunruhen. Die Ursachen waren vielfältig: steigende Abgaben und Frondienste, Rechtsunsicherheit durch die territoriale Zersplitterung, Missernten und Hungersnöte sowie ein wachsendes Selbstbewusstsein der Bauern, das durch reformatorische Ideen gefördert wurde. Die Bauern forderten die Abschaffung der Leibeigenschaft, geringere Abgaben, freie Jagd- und Fischereirechte sowie eine Rückkehr zum "alten Recht".
                  </p>
                  
                  <h3 className="text-xl font-semibold">Joss Fritz und der Bundschuh</h3>
                  <p className="leading-7">
                    Eine zentrale Figur der Bauernbewegung im Kraichgau war Joss Fritz, ein ehemaliger Soldat und Bauer aus Untergrombach. Er organisierte mehrere Aufstände unter dem Symbol des Bundschuhs, einem einfachen Schnürschuh, den die Bauern im Gegensatz zum Stiefel des Adels trugen. Der Bundschuh wurde zum Symbol für den Kampf der einfachen Leute gegen die Obrigkeit. Fritz plante 1502, 1513 und 1517 Aufstände, die jedoch alle vor ihrem Ausbruch verraten wurden. Dennoch legte er wichtige Grundlagen für den großen Bauernkrieg von 1525.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Der Bauernkrieg von 1525</h3>
                  <p className="leading-7">
                    Der Höhepunkt der Bauernunruhen war der große Bauernkrieg von 1525, der auch den Kraichgau erfasste. Bauern aus verschiedenen Orten schlossen sich zu Haufen zusammen und zogen plündernd durch die Landschaft. Sie stürmten Burgen, Klöster und Städte und zwangen viele Adlige zur Flucht. Besonders betroffen waren die Klöster Maulbronn und Bretten sowie zahlreiche Adelssitze. Die Aufständischen formulierten ihre Forderungen in den "Zwölf Artikeln", die als eine der ersten Menschenrechtserklärungen gelten.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Niederschlagung und Folgen</h3>
                  <p className="leading-7">
                    Der Bauernkrieg endete mit einer vernichtenden Niederlage der Bauern. Adlige Heere schlugen die schlecht bewaffneten und unorganisierten Bauernhaufen in mehreren Schlachten. Im Kraichgau wurden die Aufständischen bei Eppingen und Sinsheim besiegt. Es folgten harte Strafen: Hinrichtungen, Verstümmelungen und hohe Geldstrafen. Viele Dörfer mussten Entschädigungen zahlen und verloren ihre wenigen Freiheiten. Dennoch hatten die Bauernunruhen langfristige Auswirkungen auf das Verhältnis zwischen Herrschaft und Untertanen und trugen zur allmählichen Verbesserung der bäuerlichen Rechte bei.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Der Bundschuh-Aufstand und Joss Fritz wurden von Friedrich Engels und später von der DDR-Geschichtsschreibung als frühe Vorläufer revolutionärer Bewegungen interpretiert. In Untergrombach, dem Heimatort von Joss Fritz, erinnert heute ein Museum an die Bundschuh-Bewegung.
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
          <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage">
            <Button variant="outline" className="w-full justify-start">
              <MapPin className="mr-2 h-4 w-4" />
              Geographische Lage
            </Button>
          </Link>
          <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/kultur-religion">
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Kultur / Religion
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

// Missing imports
import { MapPin, BookOpen } from "lucide-react"
