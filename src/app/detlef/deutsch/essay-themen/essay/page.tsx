import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ExternalLink, PenTool } from "lucide-react";
import Link from "next/link";

export default function EssayPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Essay
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Textform</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <PenTool className="h-3 w-3" />
              <span>Themen</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Der Essay ist eine reflektierende, kritische Abhandlung, in der der Autor seine persönliche
          Sichtweise zu einem Thema darlegt. Im Gegensatz zu wissenschaftlichen Arbeiten erlaubt der Essay 
          einen subjektiven Zugang und eine freiere sprachliche Gestaltung.
        </p>
        <p>
          Auf dieser Seite finden Sie eine Sammlung von Essay-Themen, die als Anregung für eigene 
          Ausarbeitungen dienen können. Die Themen decken verschiedene gesellschaftliche, philosophische 
          und zwischenmenschliche Aspekte ab.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mb-6">Essay-Themen</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {/* Freundschaft */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Freundschaft</h3>
              </div>
              <p className="text-muted-foreground">
                Was macht wahre Freundschaft aus? Wie verändert sich Freundschaft im digitalen Zeitalter?
              </p>
            </CardContent>
          </Card>

          {/* Toleranz */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Toleranz</h3>
              </div>
              <p className="text-muted-foreground">
                Grenzen der Toleranz in einer pluralistischen Gesellschaft. Wann wird Toleranz zur Gleichgültigkeit?
              </p>
              <div className="mt-4">
                <a 
                  href="http://www.gelbehand.de/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1 text-sm"
                >
                  <span>Weiterführende Informationen</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Eifersucht */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Eifersucht</h3>
              </div>
              <p className="text-muted-foreground">
                Eifersucht als destruktive Kraft oder schützender Mechanismus? Psychologische und soziale Aspekte.
              </p>
            </CardContent>
          </Card>

          {/* Ehre */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Ehre</h3>
              </div>
              <p className="text-muted-foreground">
                Der Ehrbegriff im Wandel der Zeit. Kulturelle Unterschiede und moderne Interpretationen.
              </p>
            </CardContent>
          </Card>

          {/* Korruption */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Korruption</h3>
              </div>
              <p className="text-muted-foreground">
                Ursachen und Folgen von Korruption. Maßnahmen zur Bekämpfung und ethische Betrachtungen.
              </p>
            </CardContent>
          </Card>

          {/* Europa */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Europa</h3>
              </div>
              <p className="text-muted-foreground">
                Die Zukunft Europas zwischen Nationalismus und Integration. Herausforderungen und Chancen.
              </p>
            </CardContent>
          </Card>

          {/* Integration */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Integration</h3>
              </div>
              <p className="text-muted-foreground">
                Erfolgreiche Integration: Anpassung oder kultureller Austausch? Gesellschaftliche Verantwortung.
              </p>
            </CardContent>
          </Card>

          {/* Sind wir noch die Guten? */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PenTool className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Sind wir noch die Guten?</h3>
              </div>
              <p className="text-muted-foreground">
                Moralische Selbstwahrnehmung im internationalen Kontext. Doppelmoral und Selbstkritik.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        <div className="bg-muted/40 p-6 rounded-md border mt-8">
          <h3 className="text-xl font-semibold mb-4">Hinweise zum Essay-Schreiben</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ein Essay sollte eine klare These oder Fragestellung enthalten.</li>
            <li>Persönliche Meinungen und Erfahrungen können eingebracht werden, sollten aber durch Argumente gestützt sein.</li>
            <li>Die Sprache darf kreativ und bildreich sein, sollte aber präzise bleiben.</li>
            <li>Ein guter Essay regt zum Nachdenken an und bietet neue Perspektiven.</li>
            <li>Die Struktur ist freier als bei wissenschaftlichen Arbeiten, sollte aber einem roten Faden folgen.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
