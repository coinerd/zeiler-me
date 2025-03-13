import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building, Globe, Video, BookOpen, Users, Trees } from "lucide-react";

export default function ProjekteOverviewPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Projekte
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Regionale und historische Projekte von Detlef Zeiler
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 p-6 border rounded-lg gradient-background text-white">
        <p className="mb-4">
          Fast alle Projekte, die ich bisher durchgeführt habe, liegen im Bereich Regionalgeschichte. Unterstützt wurde ich dabei von lokalgeschichtlichen Experten wie Dr. Berndmark Heukemes, Dr. Jochen Goetze, Dr. Karl-Heinz Kischka und dessen Familie, und vor allem von Ludwig Merz.
        </p>
        <p>
          Viele dieser Projekte entstanden in Zusammenarbeit mit den &quot;Mobilen Pädagogen&quot; (MOPÄD) und verschiedenen Bildungseinrichtungen in Heidelberg und Umgebung zwischen 1985 und 1996.
        </p>
      </div>

      {/* Regional Projects Section */}
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6">Heidelberg und Umgebung</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/detlef/projekte/heidelberg-im-mittelalter" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Heidelberg im Mittelalter
                </CardTitle>
                <CardDescription>
                  MOPÄD Projekt 1986
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ein Projekt mit der Unterstützung von Ludwig Merz, Dr. Jochen Goetze, Dr. Karl-Heinz Kischka, Wolfgang Wanek u.a.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/projekte/heiligenberg" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trees className="h-5 w-5 text-primary" />
                  Der Heiligenberg bei Heidelberg
                </CardTitle>
                <CardDescription>
                  MOPÄD Projekt 1985
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ein Filmprojekt über die Geschichte des Heiligenberges mit Schülern der Heiligenberg-Schule in Handschuhsheim.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Neuenheim ist halb Europa
                </CardTitle>
                <CardDescription>
                  MOPÄD Projekt 1990
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Studie zu Neuenheims Geschichte und seiner Entwicklung von einem eigenständigen Dorf zu einem Stadtteil Heidelbergs.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/projekte/heidelberger-schulgeschichten" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Heidelberger Schulgeschichten
                </CardTitle>
                <CardDescription>
                  Historische Untersuchung
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Erforschung der Entwicklung von Bildungseinrichtungen in Heidelberg vom Mittelalter bis zur modernen Zeit.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trees className="h-5 w-5 text-primary" />
                  Die Elsenz und der Kraichgau
                </CardTitle>
                <CardDescription>
                  Regionalgeschichte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Zwischen dem Odenwald im Norden und dem Schwarzwald im Süden liegt der Kraichgau. Eine Erkundung dieser historisch bedeutsamen Region.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6">Weitere Projekte</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/detlef/projekte/old-providence-die-insel-providencia" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Old Providence - Die Insel Providencia
                </CardTitle>
                <CardDescription>
                  Internationale Studie
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Providencia ist eine kleine Insel in der Karibik, etwa 7 KM lang und 4 KM breit, auf der knapp 4000 Menschen leben.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>

          <Link href="/detlef/projekte/dritte-gewalt-strafvollzug" className="card-transition hover:no-underline">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-primary" />
                  Dritte Gewalt - Strafvollzug
                </CardTitle>
                <CardDescription>
                  Videofilmprojekt
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ein Videofilmprojekt der (ehemaligen) Landesbildstelle Baden und des Medienforum Heidelberg e.V.</p>
              </CardContent>
              <CardFooter>
                <Badge variant="outline" className="hover:bg-primary/20">✅ Fertig</Badge>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>

      {/* Video Materials */}
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6">Film-Dokumentationen</h2>
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
              <p className="text-muted-foreground">
                Ein Filmprojekt mit Ludwig Merz, Detlef Zeiler, Harald Hammer, Annette Drees, Bert Burger und Schülern der Heiligenberg-Schule in Handschuhsheim (15 Minuten).
              </p>
              <div className="mt-4">
                <a 
                  href="http://www.youtube.com/watch?v=1yT9xh0X450" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 gap-2"
                >
                  <Video className="h-4 w-4" />
                  Auf YouTube ansehen
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Neuenheim ist halb Europa
              </CardTitle>
              <CardDescription>
                MOPÄD-Projekt (1990)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Eine filmische Dokumentation über die Geschichte Neuenheims und dessen Entwicklung.
              </p>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="http://www.youtube.com/watch?v=S0F7gzljX8I" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 gap-2"
                >
                  <Video className="h-4 w-4" />
                  Teil II auf YouTube
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Collaborators */}
      <div className="my-8">
        <h2 className="text-3xl font-bold mb-6">Zusammenarbeit mit lokalen Experten</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span><strong>Dr. Berndmark Heukemes</strong> - Archäologe und Experte für das mittelalterliche Heidelberg</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span><strong>Dr. Jochen Goetze</strong> - Historiker und Bildungsforscher</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span><strong>Dr. Karl-Heinz Kischka</strong> - Lokalhistoriker mit Schwerpunkt auf Heidelberger Geschichte</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                <span><strong>Ludwig Merz</strong> - Heimatforscher und wesentlicher Beitragender zu Projekten zur regionalen Geschichte</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
