import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ExternalLink, FileText, BookMarked, Film, Users, MessageSquare, Brain } from "lucide-react";
import Link from "next/link";

export default function DeutschOverviewPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Deutsch
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Lesen und Schreiben bleiben auch im Zeitalter multimedialer Vernetzung grundlegende Kulturtechniken, 
          ohne die man sich kaum sinnvoll orientieren kann.
        </p>
        <p>
          Das Fach Deutsch kommt aber aber heute nicht mehr ohne Medienbezug aus: Informationen werden immer 
          häufiger audiovisuell bezogen, was von der Schule verlangt, neben der Vermittlung von Kenntnissen 
          und Erfahrungen im Bereich der Schrift auch den Umgang mit audiovisuellen Medien zu vermitteln.
        </p>
        <p>
          Das Problem dabei: Auch Lehrer stehen hier erst am Beginn eines längeren Lernprozesses. 
          Fortbildungskurse für Lehrer, wie sie hie und da angeboten werden, sind sicher nützlich, 
          sie helfen aber nur dann langfristig weiter, wenn Medienarbeit in den ganz gewöhnlichen 
          Fachunterricht integriert werden können. Dazu möchte ich von Zeit zu Zeit ein paar Anregungen geben.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mb-6">Materialien und Ressourcen</h2>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {/* Textinterpretation */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Textinterpretation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Beispiele für Textinterpretationen verschiedener literarischer Werke.
              </p>
              <Link 
                href="/detlef/deutsch/textinterpretation"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur Textinterpretation</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Texterörterung */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Texterörterung</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Auszüge aus dem „Leviathan" von Thomas Hobbes mit Erläuterungen.
              </p>
              <Link 
                href="/detlef/deutsch/texterrterung"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur Texterörterung</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Erörterung */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Erörterung</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Eine Erörterung zu Hobbes' Aussage über die psychologischen Mechanismen von Schuld und Hass.
              </p>
              <Link 
                href="/detlef/deutsch/errterung"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur Erörterung</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Essay */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Essay</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Informationen zur Textform Essay mit Beispielen und Anleitungen.
              </p>
              <Link 
                href="/detlef/deutsch/essay-themen/essay"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zum Essay</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Vom Text zum Schaubild */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Vom Text zum Schaubild</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Anleitung zur Umwandlung von Texten in visuelle Darstellungen und Schaubilder.
              </p>
              <Link 
                href="/detlef/deutsch/vom-text-zum-schaubild"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zum Schaubild</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Needful Things */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Film className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Needful Things</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                "In einer kleinen Stadt" von Stephen King (im Vergleich zu "Der Besuch der alten Dame" von Friedrich Dürrenmatt).
              </p>
              <Link 
                href="/detlef/deutsch/needful-things---in-einer-kleinen-stadt"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur Analyse</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Fremdenfeindlichkeit */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Fremdenfeindlichkeit</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Texte und Materialien zum Thema Fremdenfeindlichkeit.
              </p>
              <Link 
                href="/detlef/deutsch/fremdenfeindlichkeit"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur Fremdenfeindlichkeit</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Gerüchte */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Gerüchte</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Materialien zum Thema Gerüchte und deren Verbreitung.
              </p>
              <Link 
                href="/detlef/geschichte/gerchte"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zu den Gerüchten</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Menschliche Moral */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Menschliche Moral</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Philosophischer Versuch zur Beschreibung menschlicher Moral.
              </p>
              <Link 
                href="/detlef/deutsch/versuch-einer-beschreibung-menschlicher-moral"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur menschlichen Moral</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Sind wir (nur) Tiere? */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Sind wir (nur) Tiere?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Philosophische Betrachtungen zum Menschsein.
              </p>
              <Link 
                href="/detlef/geschichte/sind-wir-nur-tiere"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zu den philosophischen Betrachtungen</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        <h2 className="text-2xl font-bold mb-6">Externe Links</h2>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookMarked className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Deutschunterricht</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Deutschunterricht und neue Medien - Startadressen: Fachunterricht
              </p>
              <a 
                href="http://www.sondershaus.de/deutsch.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zum Fachunterricht</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookMarked className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">ZUM Deutsch</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Material zum Thema Deutsch von der Zentrale für Unterrichtsmedien
              </p>
              <a 
                href="http://deutsch.zum.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zu ZUM Deutsch</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>

          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookMarked className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Lehrerfortbildung</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Von der Landesakademie für Fortbildung und Personalentwicklung an Schulen: Fortbildungskurse für Lehrer
              </p>
              <a 
                href="http://www.lehrerfortbildung-bw.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-1"
              >
                <span>Zur Lehrerfortbildung</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
