import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Globe, Tv, Radio, Newspaper, Laptop, School, Film, Users, FileText } from "lucide-react";

export default function MedienerziehungPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Medienerziehung
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Konzepte und Grundlagen zur Medienerziehung in Bildungseinrichtungen
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <School className="h-3 w-3" />
              <span>Pädagogik</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Tv className="h-3 w-3" />
              <span>Medien</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Bildung</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction Card */}
      <div className="my-8">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-6">
            <p className="leading-7">
              Das aktuelle Medienangebot und die absehbare Entwicklung der elektronischen Medien bewirken eine erhebliche Veränderung der Bildungs- und Erziehungssituation in Familie, Schule und Jugendarbeit. Medienerziehung ist nicht nur eine schulische Aufgabe. Sie muss gleichermaßen vom Elternhaus, vom Kindergarten, der Sozial- und Kulturarbeit, sowie von den Produzenten und Medieninstitutionen geleistet werden.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="ausgangslage" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="ausgangslage">Ausgangslage</TabsTrigger>
          <TabsTrigger value="medienkompetenz">Medienkompetenz</TabsTrigger>
          <TabsTrigger value="medienkultur">Medienkultur</TabsTrigger>
        </TabsList>

        {/* Ausgangslage Tab */}
        <TabsContent value="ausgangslage" className="mt-4 space-y-6">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4">1. Ausgangslage</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Veränderung der Bildungs- und Erziehungssituation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Das aktuelle Medienangebot und die absehbare Entwicklung der elektronischen Medien bewirken eine erhebliche Veränderung der Bildungs- und Erziehungssituation in Familie, Schule und Jugendarbeit. Kinder und Jugendliche wachsen heute in einer Mediengesellschaft auf, die ihre Lebenswelt grundlegend verändert hat.
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Tv className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">Medien prägen den Alltag</h3>
                      <p className="text-sm mt-1">Medien bestimmen zunehmend die Freizeitgestaltung und beeinflussen das Weltverständnis der Heranwachsenden.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">Einfluss auf soziale Beziehungen</h3>
                      <p className="text-sm mt-1">Kommunikations- und Informationsgewohnheiten verändern sich durch das ständig wachsende Medienangebot.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Medienerziehung als gesamtgesellschaftliche Aufgabe</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Medienerziehung ist nicht nur eine schulische Aufgabe. Sie muss gleichermaßen vom Elternhaus, vom Kindergarten, der Sozial- und Kulturarbeit, sowie von den Produzenten und Medieninstitutionen geleistet werden.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-medium text-base mb-2">Institutionelle Verantwortung</h3>
                    <p className="text-sm">Bildungseinrichtungen müssen Heranwachsende bei der Entwicklung von Medienkompetenz unterstützen.</p>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h3 className="font-medium text-base mb-2">Produzentenverantwortung</h3>
                    <p className="text-sm">Medienproduzenten tragen Verantwortung für die Qualität und die Auswirkungen ihrer Produkte.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Medienkompetenz Tab */}
        <TabsContent value="medienkompetenz" className="mt-4 space-y-6">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4">2. Medienkompetenz</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Medienkompetenz - Vorbemerkung</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Bevor Menschen mit Medien kommunikativ umgehen und entsprechend ihres jeweiligen Erfahrungbereichs Kompetenz entwickeln, bauen sie in der Familie und/oder mit nahestehenden Bezugspersonen das Konzept einer umfassenden kommunikativen Kompetenz auf, die sozial und kulturell unterschiedlich ausgestaltet wird.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Medienerziehung im Erziehungs- und Bildungszusammenhang</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Medienerziehung als schulische Aufgabe ist im Zusammenhang mit den allgemeinen und verbindlichen Erziehungs- und Bildungsvorstellungen zu sehen. Das Grundgesetz der Bundesrepublik Deutschland und die Länderverfassungen stellen das Recht auf freie Entfaltung der Persönlichkeit in sozialer Verantwortung als Leitidee für den Erziehungs- und Bildungsbereich heraus.
                </p>
              </CardContent>
            </Card>

            <div className="bg-primary/5 p-6 rounded-md border-l-4 border-primary my-6">
              <h3 className="text-lg font-medium mb-2">Erlebnis- und Handlungsorientierung als Prinzipien</h3>
              <p>
                Medienerziehung soll für Kinder und Jugendliche Erlebnis- und Handlungsmöglichkeiten schaffen. In diesem Sinne sind Erlebnis- und Handlungsorientierung als übergreifende Gestaltungsprinzipien der Medienerziehung anzusehen.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Aufgabenbereiche und Zielsetzungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Die medienerzieherische Arbeit in der Schule umfasst vor allem drei Aufgabenbereiche:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">Medienanalyse und -kritik</h3>
                      <p className="text-sm mt-1">Kritisches Reflektieren über Medien und ihre Inhalte.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">Eigene Mediennutzung</h3>
                      <p className="text-sm mt-1">Verantwortungsvoller und selbstbestimmter Umgang mit Medien.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Tv className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base">Mediengestaltung</h3>
                      <p className="text-sm mt-1">Eigene kreative Produktion von Medien und Medieninhalten.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Medienkultur Tab */}
        <TabsContent value="medienkultur" className="mt-4 space-y-6">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4">3. Medienkultur und Erziehung</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Zum Begriff Medienkultur</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Mehr denn je beeinflussen Medien heute unser Verständnis von Kultur. Die aktuellen medialen Entwicklungen und die zunehmende Digitalisierung führen zu einer neuen Medienkultur, die das Alltagsleben, die Kommunikation und das Lernen grundlegend verändert.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Verankerung in den Lehrplänen</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  In der Lehrplanfortschreibung der allgemeinbildenden Schulen ist der Bereich Medienerziehung als wichtiges Querschnittsthema besonders hervorgehoben worden. Medienpädagogische Inhalte finden sich in vielen Fächern und werden als integrativer Bestandteil des Unterrichts betrachtet.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Leseerziehung und Hörerziehung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Der Deutschunterricht ist der zentrale Bereich, in dem Schülerinnen und Schülern das Buch nahegebracht wird und in dem Freude am Lesen vermittelt wird. Gleichzeitig wird die Fähigkeit zum aktiven Zuhören gefördert.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Film className="h-4 w-4 text-primary" />
                    Gestaltung von audiovisuellen Medien
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Medienpädagogisches Handeln berücksichtigt neben der Medienanalyse auch die eigene schöpferische Gestaltung von Medien im Rahmen von fächerverbindendem Unterricht und projektorientiertem Lernen.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-xl">Praktische Anwendungen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <Newspaper className="h-4 w-4 text-primary" />
                      Schülerzeitschriften
                    </h3>
                    <p className="text-sm">
                      Junge Redakteure leisten an Schulen aller Schularten Erstaunliches bei der Herausgabe eigener Druckerzeugnisse. Schülerzeitschriften bieten eine hervorragende Möglichkeit, praktische Medienkompetenz zu vermitteln.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <Film className="h-4 w-4 text-primary" />
                      Spielfilme
                    </h3>
                    <p className="text-sm">
                      Eine Grundannahme der medienpädagogischen Arbeit ist, dass man durch den Einsatz des Mediums Spielfilm, dem Kinder und Jugendliche großes Interesse entgegenbringen, gute sachliche Voraussetzungen für die Medienerziehung schafft.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <Laptop className="h-4 w-4 text-primary" />
                      Computerspiele und interaktive Medien
                    </h3>
                    <p className="text-sm">
                      Seit einigen Jahren kommen Computerspiele auf den Markt, die einen filmischen Vorspann oder eingebaute filmische Sequenzen enthalten. Interaktive Medien sind ein wichtiger Bereich der Medienerziehung geworden.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      {/* Additional Resources */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">4. Altersgemäße Schwerpunktsetzungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Grundschule</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Erste Begegnungen mit verschiedenen Medien</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Unterscheidung von Realität und Fiktion</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Förderung von Lesekompetenz</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Sekundarstufe</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Kritische Auseinandersetzung mit Medieninhalten</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Eigene Medienproduktion</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>Ethische Reflexion der Mediennutzung</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 p-6 border rounded-lg bg-muted/30">
        <h2 className="text-xl font-bold mb-4">11. Kooperation</h2>
        <p className="text-sm">
          Medienerziehung kann nur dann erfolgreich sein, wenn alle beteiligten Institutionen und Personen zusammenarbeiten. Eine enge Kooperation zwischen Schule, Elternhaus, Medienproduzenten und außerschulischen Bildungseinrichtungen ist notwendig, um junge Menschen zu einem verantwortungsvollen Umgang mit Medien zu befähigen.
        </p>
      </div>
    </div>
  );
}
