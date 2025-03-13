import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Quote, User } from "lucide-react";

export default function EroerterungPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Erörterung
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Deutsch</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>Thomas Hobbes</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>1651</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="h-5 w-5 text-primary" />
          <p className="text-lg italic">
            „Einem Menschen mehr Schaden zugefügt zu haben, als man wiedergutmachen kann,[…] veranlasst den Täter, den Geschädigten zu hassen."
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          Thomas Hobbes (1996 [1651], 83)
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Card className="mb-8 background-gradient text-muted-foreground">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Aufgabenstellung</h2>
            <p className="text-lg">
              Interpretieren Sie diese Aussage von Thomas Hobbes. Nehmen Sie Stellung!
            </p>
          </CardContent>
        </Card>

        <div className="bg-muted/40 p-6 rounded-md border mb-8">
          <h3 className="text-xl font-semibold mb-4">Hintergrund</h3>
          <p>
            Thomas Hobbes hatte nach den Erfahrungen des englischen Bürgerkrieges (1642-49) eine theoretische 
            Rechtfertigung des starken Staates verfasst, der in erster Linie die Sicherheit der Bürger garantieren muss. 
            „Der Leviathan" gilt als die erste weltliche Legitimation des Staates, der allein Frieden für die Menschen 
            stiften könne, die sich ansonsten im Kampf um eigene Vorteile und in kleinlichen Rachegefühlen aufreiben 
            und am Ende untergehen würden.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Interpretation des Zitats</h3>
          
          <p className="text-lg">
            In seinem Zitat beschreibt Thomas Hobbes einen psychologischen Mechanismus, der auf den ersten Blick 
            paradox erscheint: Wenn jemand einem anderen Menschen so großen Schaden zugefügt hat, dass dieser nicht 
            mehr wiedergutgemacht werden kann, entwickelt der Täter Hass gegenüber seinem Opfer. 
          </p>
          
          <p className="text-lg">
            Diese Aussage lässt sich auf verschiedenen Ebenen interpretieren:
          </p>
          
          <div className="bg-primary/5 p-6 rounded-md border-l-4 border-primary">
            <h4 className="font-semibold mb-2">Psychologische Ebene</h4>
            <p>
              Hobbes beschreibt hier einen psychologischen Abwehrmechanismus. Der Täter, der sich seiner Schuld bewusst ist, 
              kann die damit verbundenen negativen Gefühle (Schuld, Scham, Reue) nicht ertragen. Um sein Selbstbild zu 
              schützen, projiziert er negative Gefühle auf das Opfer und entwickelt Hass als Rechtfertigung für seine Tat.
            </p>
          </div>
          
          <div className="bg-secondary/10 p-6 rounded-md border">
            <h4 className="font-semibold mb-2">Soziale Ebene</h4>
            <p>
              Auf sozialer Ebene beschreibt Hobbes, wie Konflikte eskalieren können. Wenn ein Schaden nicht wiedergutgemacht 
              werden kann, besteht die Gefahr einer Spirale aus Hass und Vergeltung. Der Täter fürchtet die Rache des Opfers 
              und entwickelt präventiv Hass, um sein eigenes Handeln zu rechtfertigen.
            </p>
          </div>
          
          <div className="bg-muted/40 p-6 rounded-md border">
            <h4 className="font-semibold mb-2">Politische Ebene</h4>
            <p>
              Im Kontext von Hobbes' Staatstheorie zeigt dieses Zitat, warum ein starker Staat notwendig ist. Ohne eine 
              übergeordnete Instanz, die Konflikte regelt und Wiedergutmachung ermöglicht, würden Menschen in einem Kreislauf 
              aus Schaden, Hass und Vergeltung gefangen sein – der von Hobbes beschriebene "Krieg aller gegen alle".
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Stellungnahme</h3>
          
          <p className="text-lg">
            Hobbes' Beobachtung hat auch heute noch Relevanz, sowohl auf individueller als auch auf gesellschaftlicher Ebene:
          </p>
          
          <div className="bg-primary/5 p-6 rounded-md border-l-4 border-primary mb-4">
            <p>
              In zwischenmenschlichen Beziehungen können wir beobachten, wie Menschen, die anderen Unrecht getan haben, 
              oft dazu neigen, ihre Opfer zu dämonisieren oder zu entmenschlichen, um ihre eigenen Handlungen zu rechtfertigen.
            </p>
          </div>
          
          <div className="bg-secondary/10 p-6 rounded-md border mb-4">
            <p>
              Auf gesellschaftlicher Ebene zeigt sich dieses Phänomen in historischen und aktuellen Konflikten, wo Täter 
              ihre Opfer oft als minderwertig oder böse darstellen, um ihre Gewalt zu legitimieren.
            </p>
          </div>
          
          <p className="text-lg">
            Hobbes' Lösung – ein starker Staat, der Konflikte reguliert – hat sich in modernen Rechtsstaaten bewährt. 
            Allerdings geht unser heutiges Verständnis über Hobbes hinaus: Wir betonen die Bedeutung von Versöhnung, 
            Wiedergutmachung und Vergebung als Wege, den Kreislauf aus Schuld und Hass zu durchbrechen.
          </p>
          
          <p className="text-lg">
            Moderne Konzepte wie restorative Justiz versuchen, Tätern die Möglichkeit zu geben, Verantwortung für ihre 
            Taten zu übernehmen und, wo möglich, Wiedergutmachung zu leisten – und damit den von Hobbes beschriebenen 
            Mechanismus zu überwinden.
          </p>
        </div>

        <div className="my-10 p-6 border rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-xl font-semibold mb-4">Über die Erörterung</h3>
          <p>
            Die Erörterung ist eine Textform, bei der ein Thema oder eine Fragestellung von verschiedenen Seiten betrachtet 
            und diskutiert wird. Ziel ist es, zu einer begründeten Stellungnahme zu gelangen. Im Gegensatz zur Texterörterung 
            steht bei der freien Erörterung nicht ein bestimmter Text im Mittelpunkt, sondern ein allgemeines Thema oder 
            Problem.
          </p>
        </div>
      </div>
    </div>
  );
}
