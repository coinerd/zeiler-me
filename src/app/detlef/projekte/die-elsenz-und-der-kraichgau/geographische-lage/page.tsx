import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Mountain, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GeographischeLagePage() {
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
              <MapPin className="mr-1 h-4 w-4" />
              Geographie
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Geographische Lage
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Der Kraichgau ist eine hügelige Landschaft in Baden-Württemberg, die sich zwischen dem Schwarzwald, dem Odenwald und dem Rheintal erstreckt. Die Elsenz ist ein wichtiger Fluss, der durch diese Region fließt und ihr einen besonderen Charakter verleiht.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die geographischen Besonderheiten dieser Region, ihre natürlichen Merkmale und geologischen Eigenschaften.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        <Tabs defaultValue="elsenz" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="elsenz" className="flex items-center gap-2">
              <Waves className="h-4 w-4" />
              <span>Die Elsenz</span>
            </TabsTrigger>
            <TabsTrigger value="steinsberg" className="flex items-center gap-2">
              <Mountain className="h-4 w-4" />
              <span>Der Steinsberg</span>
            </TabsTrigger>
            <TabsTrigger value="geologie" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Geologie</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Die Elsenz Tab */}
          <TabsContent value="elsenz" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Die Elsenz</CardTitle>
                <CardDescription>
                  Ein wichtiger Fluss im Kraichgau
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Waves className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Verlauf und Eigenschaften</h3>
                  <p className="leading-7">
                    Die Elsenz ist ein etwa 53 km langer Fluss im nördlichen Baden-Württemberg. Sie entspringt im Kraichgau bei Eppingen und mündet bei Neckargemünd in den Neckar. Auf ihrem Weg durchfließt sie mehrere Gemeinden, darunter Eppingen, Sinsheim und Neckargemünd.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Bedeutung für die Region</h3>
                  <p className="leading-7">
                    Die Elsenz hat die Landschaft des Kraichgaus maßgeblich geprägt. Ihr Tal bietet fruchtbaren Boden für die Landwirtschaft und war schon früh ein bevorzugter Siedlungsraum. Der Fluss diente als wichtige Verkehrsachse und Energiequelle für Mühlen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Ökologische Bedeutung</h3>
                  <p className="leading-7">
                    Heute ist die Elsenz ein wichtiger Lebensraum für zahlreiche Tier- und Pflanzenarten. Renaturierungsmaßnahmen haben dazu beigetragen, den ökologischen Zustand des Flusses zu verbessern und seine natürliche Dynamik wiederherzustellen.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Der Name "Elsenz" leitet sich vermutlich vom keltischen Wort "Alisontia" ab, was so viel wie "die Fließende" bedeutet. Dies deutet auf die lange Besiedlungsgeschichte der Region hin.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Der Steinsberg Tab */}
          <TabsContent value="steinsberg" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Der Steinsberg</CardTitle>
                <CardDescription>
                  Der "Kompass des Kraichgaus"
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mountain className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Lage und Entstehung</h3>
                  <p className="leading-7">
                    Der Steinsberg ist ein 333 Meter hoher Berg im Kraichgau, der sich in der Nähe von Sinsheim befindet. Er ist vulkanischen Ursprungs und entstand vor etwa 25 Millionen Jahren durch vulkanische Aktivität. Der Berg besteht hauptsächlich aus Basalt, einem vulkanischen Gestein.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Der "Kompass des Kraichgaus"</h3>
                  <p className="leading-7">
                    Aufgrund seiner markanten, weithin sichtbaren Silhouette wird der Steinsberg auch als "Kompass des Kraichgaus" bezeichnet. Von seiner Spitze aus hat man einen hervorragenden Rundblick über die gesamte Region. Die charakteristische Form des Berges diente Reisenden früher als Orientierungspunkt.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Die Burg Steinsberg</h3>
                  <p className="leading-7">
                    Auf dem Gipfel des Steinsbergs thront die gleichnamige Burg, die im 11. Jahrhundert erbaut wurde. Die Burg Steinsberg ist eine der besterhaltenen Burganlagen im Kraichgau und ein beliebtes Ausflugsziel. Ihre achteckige Form ist architektonisch besonders interessant und in Deutschland einzigartig.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Der Basalt des Steinsbergs wurde früher in Steinbrüchen abgebaut und als Baumaterial verwendet. Heute stehen der Berg und seine Umgebung unter Naturschutz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Geologie Tab */}
          <TabsContent value="geologie" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gesteinsschichten im Sinsheimer Raum</CardTitle>
                <CardDescription>
                  Geologische Besonderheiten der Region
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Geologischer Aufbau</h3>
                  <p className="leading-7">
                    Der Kraichgau ist geologisch Teil des südwestdeutschen Schichtstufenlandes. Die Landschaft ist geprägt von Sedimentgesteinen aus dem Erdmittelalter, insbesondere aus der Trias-Zeit. Die wichtigsten Gesteinsschichten sind Buntsandstein, Muschelkalk und Keuper.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Lössböden</h3>
                  <p className="leading-7">
                    Eine Besonderheit des Kraichgaus sind die mächtigen Lössablagerungen, die während der Eiszeiten durch Windverwehung entstanden sind. Diese Lössböden sind äußerst fruchtbar und bilden die Grundlage für die intensive landwirtschaftliche Nutzung der Region. Die Lössschicht kann stellenweise bis zu 30 Meter dick sein.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Vulkanische Aktivität</h3>
                  <p className="leading-7">
                    Neben den Sedimentgesteinen gibt es im Kraichgau auch vulkanische Gesteine, die von der vulkanischen Aktivität im Tertiär zeugen. Der Steinsberg bei Sinsheim ist das bekannteste Beispiel dafür. Sein Basaltgestein entstand durch das Erstarren von Magma, das vor etwa 25 Millionen Jahren an die Erdoberfläche drang.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      Die geologische Vielfalt des Kraichgaus hat zur Entstehung verschiedener Bodentypen geführt, die unterschiedliche Pflanzengesellschaften begünstigen. Dies trägt zur biologischen Vielfalt der Region bei.
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
          <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/kultur-religion">
            <Button variant="outline" className="w-full justify-start">
              <BookOpen className="mr-2 h-4 w-4" />
              Kultur / Religion im Kraichgau
            </Button>
          </Link>
          <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Geschichte und Politik
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
import { BookOpen, History } from "lucide-react"
