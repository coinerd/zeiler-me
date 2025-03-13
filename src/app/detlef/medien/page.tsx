import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Radio, Tv, Newspaper, Film, BookOpen, Laptop, Monitor, FileText } from "lucide-react";

export default function MedienPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Medien
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Medien in Bildung, Gesellschaft und Kultur
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-6">
            <p className="leading-7">
              Ohne Lesen und Schreiben zu können, wird man auch im Multimedia-Bereich ein Analphabet bleiben. Aber ohne Medieneinsatz geht in immer mehr Lebensbereichen schon lange nichts mehr.
            </p>
            <p className="leading-7 mt-4">
              Hörfunk, Fernsehen und Zeitungen haben hervorragendes Material, das in der Schule und in der Berufsausbildung brauchbar ist.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Media Categories Tabs */}
      <Tabs defaultValue="projekte" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projekte">Projekte</TabsTrigger>
          <TabsTrigger value="medientypen">Medientypen</TabsTrigger>
          <TabsTrigger value="bildung">Bildung & Erziehung</TabsTrigger>
        </TabsList>

        {/* Projekte Tab */}
        <TabsContent value="projekte" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Film className="h-5 w-5 text-primary" />
                  Gerüchte - Rumores
                </CardTitle>
                <CardDescription>
                  Drehbuch aus der Deutschen Schule in Teneriffa
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3 text-sm">
                <p>Ein Theaterstück über die Macht von Gerüchten und deren Verbreitung in einer Gemeinschaft.</p>
              </CardContent>
              <CardFooter>
                <Link 
                  href="/detlef/medien/geruechte-rumores-drehbuch"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Mehr erfahren →
                </Link>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <Film className="h-5 w-5 text-primary" />
                  In Gefahr und größter Not...
                </CardTitle>
                <CardDescription>
                  Drehbuch und Filmprojekt
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3 text-sm">
                <p>Ein dramatisches Filmprojekt, das sich mit existentiellen Bedrohungen und gesellschaftlichen Herausforderungen auseinandersetzt.</p>
              </CardContent>
              <CardFooter>
                <Link 
                  href="/detlef/medien/in-gefahr-und-groesster-not"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Mehr erfahren →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* Medientypen Tab */}
        <TabsContent value="medientypen" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-shadow p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Hörfunk</h3>
                  <p className="text-sm text-muted-foreground">Deutsche Radiosender</p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-md transition-shadow p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Tv className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Fernsehen</h3>
                  <p className="text-sm text-muted-foreground">TV und Broadcast</p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-md transition-shadow p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Zeitungen</h3>
                  <p className="text-sm text-muted-foreground">Printmedien im Netz</p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-md transition-shadow p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Internet</h3>
                  <p className="text-sm text-muted-foreground">Digitale Medien</p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-md transition-shadow p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Film className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Film</h3>
                  <p className="text-sm text-muted-foreground">Kino und Videokunst</p>
                </div>
              </div>
            </Card>

            <Card className="hover:shadow-md transition-shadow p-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Überwachung</h3>
                  <p className="text-sm text-muted-foreground">Öffentlich und privat</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Bildung Tab */}
        <TabsContent value="bildung" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Medienerziehung</CardTitle>
              <CardDescription>
                Konzepte und Ansätze zur Förderung von Medienkompetenz
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Das aktuelle Medienangebot und die absehbare Entwicklung der elektronischen Medien bewirken eine erhebliche Veränderung der Bildungs- und Erziehungssituation in Familie, Schule und Jugendarbeit.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Thema Medienerziehung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3 text-sm">
                    <p>Grundlegende Konzepte und Ansätze zur Medienerziehung in Bildungseinrichtungen.</p>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      href="/detlef/medien/medienerziehung"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Mehr erfahren →
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Unterrichtsmaterial
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-3 text-sm">
                    <p>Lehr- und Lernplattform für Neue Medien im Unterricht.</p>
                  </CardContent>
                  <CardFooter>
                    <Link 
                      href="#"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Externe Ressource →
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/40 p-6 rounded-md border mt-6">
            <h3 className="text-lg font-medium mb-2">Die Aufgaben der Medien und Medienkritik</h3>
            <p>
              In einer demokratischen Gesellschaft haben Medien die Aufgabe zu informieren, zu kritisieren und zur Meinungsbildung beizutragen. Die Fähigkeit zur Medienkritik ist daher eine zentrale Kompetenz, die es zu fördern gilt.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      {/* Additional Resources */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Empfohlene Ressourcen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Radio className="h-4 w-4 text-primary" />
                Hörfunk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Eine Sammlung deutscher Radiosender im Internet.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Newspaper className="h-4 w-4 text-primary" />
                Zeitungen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Liste von verschiedenen Zeitungen im Netz.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Unterrichtsmaterial
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Lehr- und Lernplattform für Neue Medien im Unterricht.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
