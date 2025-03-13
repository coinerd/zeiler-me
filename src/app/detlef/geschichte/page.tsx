import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, BookMarked, Users, Globe, Video } from "lucide-react";

export default function GeschichteOverviewPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Geschichte
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Historische Artikel und Projekte von Detlef Zeiler
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 p-6 border rounded-lg gradient-background text-white">
        <p className="mb-4">
          Was im Zeitalter des Internet sinnvoll ist, vielleicht erst richtig sinnvoll wird, ist der überregionale Austausch von Erfahrungen, die sich aus der Auswertung geschichtlichen Wissens ergeben. Jede Generation erfindet sich neu, blickt auf andere Weise zurück auf die Erfahrungen früherer Generationen, als dies in den Geschichtsbüchern festgehalten ist.
        </p>
        <p className="mb-4">
          Als Einstieg in ein geschichtliches Thema hat sich &quot;oral history&quot;, die Befragung von Zeitzeugen und lokalgeschichtlichen Experten, bewährt. (Für uns z.B. Ludwig Merz, B. Heukemes, Karl-Heinz Kischka u.a.) Dabei kommt man bei aller &quot;Globalisierung&quot; nicht darum herum, aus der eigenen und sozialen Position heraus Stellung zu beziehen.
        </p>
        <p>
          Das Regionale ist heute mehr denn je mit der Welt verbunden, vor allem, seit es das Internet gibt. In einer Schulklasse befinden sich heute oft Kinder aus unterschiedlichen Ländern und Kulturen. Und nicht selten halten diese Kinder und die Eltern dieser Kinder mit einer entfernten Heimatkultur noch Kontakt. Darüber können sich interessante Diskussionen entwickeln.
        </p>
      </div>

      {/* Articles Section */}
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6">Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/detlef/geschichte/alexander-von-humboldts-sdamerikareise" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Alexander von Humboldts Südamerikareise
                </CardTitle>
                <CardDescription>
                  Erstellt 1998 in Bogotá
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Eine detaillierte Betrachtung von Humboldts bedeutender Expedition durch Südamerika, die unser Verständnis der natürlichen Welt veränderte.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">Historische Expedition</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/geschichte/berthold-von-rohrbach" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookMarked className="h-5 w-5 text-primary" />
                  Berthold von Rohrbach
                </CardTitle>
                <CardDescription>
                  Historische Persönlichkeit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Die Geschichte von Berthold von Rohrbach und seine historische Bedeutung.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">Biografie</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/geschichte/was-mich-betrifft" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Was mich (be)trifft
                </CardTitle>
                <CardDescription>
                  Persönliche Reflexionen
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Persönliche Betrachtungen und Erfahrungen im Kontext historischer Ereignisse.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">Reflexion</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/geschichte/besuch-in-simferopol-2018" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Besuch in Simferopol / Krim 2018
                </CardTitle>
                <CardDescription>
                  Reisebericht
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Eindrücke und Beobachtungen eines Besuchs in Simferopol auf der Krim im Jahr 2018.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">Zeitgeschichte</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/geschichte/hooligans---angry-young-men" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Hooligans - Angry Young Men
                </CardTitle>
                <CardDescription>
                  Soziologische Betrachtung
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Eine Analyse des Phänomens der Hooligans und seiner historischen sowie sozialen Wurzeln.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">Soziologie</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/geschichte/ceausescu" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Die Kindheit Nicolae Ceausescus
                </CardTitle>
                <CardDescription>
                  Historische Analyse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Untersuchung der Kindheit Nicolae Ceausescus und deren Auswirkungen auf seinen späteren Werdegang.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">Biografie</Badge>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>

      {/* Video Materials */}
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6">Video-Materialien</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Zeitensprung - Der Heiligenberg bei Heidelberg
              </CardTitle>
              <CardDescription>
                Filmprojekt mit Schülern der Heiligenberg-Schule (1985)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Ein Filmprojekt über die Geschichte des Heiligenberges mit Schülern der Heiligenberg-Schule in Handschuhsheim aus dem Jahr 1985.
              </p>
              <a 
                href="http://www.youtube.com/watch?v=1yT9xh0X450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-primary hover:underline"
              >
                Zum Video auf YouTube <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Heidelberg im Mittelalter
              </CardTitle>
              <CardDescription>
                MOPAED und Schüler des Bunsen-Gymnasiums (1986)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a 
                  href="http://www.youtube.com/watch?v=zMfJp-G_YVA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  Teil I (15 Min.) <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="http://www.youtube.com/watch?v=5SJoxRygGSw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  Teil II (14 Min.) <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Geschichte Rohrbachs
              </CardTitle>
              <CardDescription>
                Dokumentationen zur lokalen Geschichte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a 
                  href="https://www.youtube.com/watch?v=B8ozX05lG50" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  Heidelberg-Rohrbach: Zweiter Weltkrieg, Nachkriegszeit <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=4PVbCZzpomc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  Gespräche zu Geschichte Rohrbachs in der Kriegs- und Nachkriegszeit <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="https://www.youtube.com/watch?v=A0leXWcwe-I" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  "In einem kühlen Grunde..." Geschichten aus dem alten Rohrbach <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
