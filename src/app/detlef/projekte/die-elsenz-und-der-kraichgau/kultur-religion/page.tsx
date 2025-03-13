import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, BookOpen, Church, Home, Music, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KulturReligionPage() {
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
              <BookOpen className="mr-1 h-4 w-4" />
              Kultur
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Church className="mr-1 h-4 w-4" />
              Religion
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Kultur und Religion
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Der Kraichgau und das Elsenztal sind nicht nur durch ihre natürliche Landschaft geprägt, sondern auch durch eine reiche kulturelle und religiöse Geschichte. Von den ersten Siedlern bis zur heutigen Zeit hat sich die Region kulturell stark entwickelt.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die kulturellen Traditionen, religiösen Prägungen und das gesellschaftliche Leben in dieser historisch bedeutsamen Region.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10">
        <Tabs defaultValue="siedlungen" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="siedlungen" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>Siedlungen</span>
            </TabsTrigger>
            <TabsTrigger value="religion" className="flex items-center gap-2">
              <Church className="h-4 w-4" />
              <span>Religion</span>
            </TabsTrigger>
            <TabsTrigger value="traditionen" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              <span>Traditionen</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Siedlungen Tab */}
          <TabsContent value="siedlungen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Siedlungen im Kraichgau</CardTitle>
                <CardDescription>
                  Von den ersten Bewohnern bis heute
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Home className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Frühe Besiedlung</h3>
                  <p className="leading-7">
                    Die fruchtbaren Böden des Kraichgaus zogen bereits in der Jungsteinzeit (ca. 5500-2200 v. Chr.) erste Siedler an. Archäologische Funde belegen, dass die Region schon früh besiedelt war. Besonders entlang der Flüsse wie der Elsenz entstanden erste dauerhafte Siedlungen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Römische und keltische Einflüsse</h3>
                  <p className="leading-7">
                    Im 1. Jahrhundert n. Chr. geriet der Kraichgau unter römischen Einfluss. Die Römer brachten neue Siedlungsformen, Bautechniken und landwirtschaftliche Methoden mit. Vor den Römern hatten bereits die Kelten ihre Spuren in der Region hinterlassen, wie Funde von Grabhügeln und Siedlungsresten zeigen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Mittelalterliche Entwicklung</h3>
                  <p className="leading-7">
                    Im Mittelalter entstanden zahlreiche Dörfer und kleine Städte im Kraichgau. Die typische Siedlungsform war das Haufendorf mit einem zentralen Dorfplatz, um den sich Kirche, Rathaus und wichtige Gebäude gruppierten. Viele dieser historischen Ortskerne sind bis heute erhalten.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Moderne Entwicklung</h3>
                  <p className="leading-7">
                    Heute ist der Kraichgau eine lebendige Region mit einer Mischung aus traditionellen Dörfern und modernen Städten. Die historischen Ortskerne werden oft sorgfältig bewahrt, während gleichzeitig neue Wohngebiete entstehen. Die Region hat ihren ländlichen Charakter bewahrt, bietet aber auch moderne Infrastruktur und Arbeitsplätze.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Religion Tab */}
          <TabsContent value="religion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Religiöse Prägung</CardTitle>
                <CardDescription>
                  Glauben und Konfessionen im Kraichgau
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Church className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Frühe Christianisierung</h3>
                  <p className="leading-7">
                    Die Christianisierung des Kraichgaus begann im 7. und 8. Jahrhundert. Klöster wie Lorsch und Hirsau spielten dabei eine wichtige Rolle. Sie gründeten Außenstellen und Pfarreien und trugen so zur Verbreitung des christlichen Glaubens bei. Zahlreiche romanische und gotische Kirchen zeugen noch heute von dieser frühen christlichen Prägung.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Reformation und Konfessionalisierung</h3>
                  <p className="leading-7">
                    Die Reformation im 16. Jahrhundert hatte tiefgreifende Auswirkungen auf den Kraichgau. Die Region wurde zu einem Flickenteppich unterschiedlicher Konfessionen. Je nach Herrschaft wurden Orte protestantisch oder blieben katholisch. Diese konfessionelle Vielfalt prägt die Region bis heute. In manchen Dörfern stehen katholische und evangelische Kirchen nur wenige hundert Meter voneinander entfernt.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Jüdisches Leben</h3>
                  <p className="leading-7">
                    Neben den christlichen Konfessionen gab es im Kraichgau auch eine bedeutende jüdische Bevölkerung. Besonders im 18. und 19. Jahrhundert blühten jüdische Gemeinden in Orten wie Sinsheim, Eppingen und Neckarbischofsheim. Synagogen, jüdische Friedhöfe und ehemalige jüdische Schulen erinnern an dieses kulturelle Erbe, das durch die Verfolgung während des Nationalsozialismus weitgehend zerstört wurde.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Religiöses Leben heute</h3>
                  <p className="leading-7">
                    Heute ist das religiöse Leben im Kraichgau von Vielfalt geprägt. Neben den traditionellen christlichen Konfessionen gibt es auch muslimische Gemeinden und andere Glaubensrichtungen. Ökumenische Zusammenarbeit und interreligiöser Dialog werden zunehmend wichtiger. Gleichzeitig nimmt die Säkularisierung zu, und viele historische Kirchen stehen vor der Herausforderung, neue Wege zu finden, um Menschen anzusprechen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Traditionen Tab */}
          <TabsContent value="traditionen" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Kulturelle Traditionen</CardTitle>
                <CardDescription>
                  Bräuche, Feste und kulturelles Leben
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Feste und Bräuche</h3>
                  <p className="leading-7">
                    Im Kraichgau werden zahlreiche traditionelle Feste gefeiert, die oft mit dem landwirtschaftlichen Jahreslauf oder dem Kirchenjahr verbunden sind. Dazu gehören Erntedankfeste, Kirchweihfeste (Kerwe) und Maifeiern. Besonders die Kerwe hat in vielen Orten eine lange Tradition und wird mit Umzügen, Tanz und speziellen Speisen gefeiert.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Musik und Tanz</h3>
                  <p className="leading-7">
                    Musik spielt im kulturellen Leben des Kraichgaus eine wichtige Rolle. Viele Orte haben eigene Musikvereine, Chöre oder Tanzgruppen, die traditionelle Lieder und Tänze pflegen. Besonders die Blasmusik hat eine lange Tradition. Bei Festen und Veranstaltungen werden oft traditionelle Lieder und Tänze aufgeführt, die teilweise bis ins 19. Jahrhundert zurückreichen.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Handwerk und Kunsthandwerk</h3>
                  <p className="leading-7">
                    Traditionelles Handwerk hat im Kraichgau eine lange Geschichte. Dazu gehören Berufe wie Küfer (Fassbinder), Weber, Schmiede und Töpfer. Obwohl viele dieser traditionellen Handwerke heute nicht mehr im großen Stil ausgeübt werden, gibt es Bemühungen, dieses kulturelle Erbe zu bewahren. In Heimatmuseen und bei Handwerkermärkten werden alte Techniken vorgeführt und weitergegeben.
                  </p>
                  
                  <h3 className="text-xl font-semibold">Kulinarische Traditionen</h3>
                  <p className="leading-7">
                    Die Küche des Kraichgaus ist bodenständig und von landwirtschaftlichen Produkten geprägt. Typische Gerichte sind Schupfnudeln, verschiedene Arten von Knödeln, Maultaschen und deftige Eintöpfe. Auch der Wein spielt eine wichtige Rolle, da in Teilen des Kraichgaus Weinbau betrieben wird. Lokale Weinfeste und Besenwirtschaften (saisonale Gaststätten von Winzern) sind beliebte Treffpunkte.
                  </p>
                  
                  <div className="bg-primary/5 p-4 rounded-md mt-4">
                    <h4 className="font-medium mb-2">Wussten Sie schon?</h4>
                    <p className="text-sm text-muted-foreground">
                      In einigen Orten des Kraichgaus gibt es noch den Brauch des "Maibaumstellens". In der Nacht zum 1. Mai wird ein geschmückter Baum aufgestellt, oft begleitet von Feierlichkeiten. Dieser Brauch geht auf vorchristliche Fruchtbarkeitsrituale zurück.
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
import { MapPin, History } from "lucide-react"
