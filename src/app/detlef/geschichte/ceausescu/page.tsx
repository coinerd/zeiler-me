import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, History, AlertTriangle, User, FileText } from "lucide-react";

export default function CeausescuPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Die Kindheit Nicolae Ceausescus
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Aus "Demokratie in Deutschland", RAAbits Sozialkunde/Politik, Februar 1994
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <History className="h-3 w-3" />
              <span>Geschichte</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>Diktatur</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>1989</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <p className="leading-7">
              24 Jahre lang herrschte Nicolae Ceausescu, der sich selbst „Conducator" (Führer) oder „Genie der Karpaten" nannte, über Rumänien mit eiserner Hand. Für sich und seinen Clan raffte er riesige Vermögen, Paläste, Villen, Kunstschätze und Devisen zusammen, während das Volk zunehmend verarmte und Ende der achtziger Jahre entsetzlich hungerte und fror. Eine geheime Staatspolizei, die Securitate, mit Panzern und Kampfhubschraubern ausgerüstet, hielt die Bevölkerung in Schach.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Context Card */}
      <div className="my-8">
        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-primary" />
                  Person
                </h3>
                <p>Nicolae Ceausescu (1918-1989)</p>
              </div>
              <div>
                <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <History className="h-4 w-4 text-primary" />
                  Herrschaft
                </h3>
                <p>1965-1989 (Rumänien)</p>
              </div>
              <div>
                <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-primary" />
                  Ende
                </h3>
                <p>Hinrichtung nach Volksaufstand 1989</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>
          Ein ausgeklügeltes Spitzelsystem war allgegenwärtig. Ceausescu ließ ganze Dörfer dem Boden gleichmachen, verfolgte ethnische Minderheiten, ließ Kinder und Frauen zu Tausenden umbringen. Seine Unmenschlichkeit breitete sich wie ein Leichentuch über das Land aus. Ende 1989 erhoben sich große Teile des Volkes gegen den verhassten Führer. Ceausescu wurde gefangengenommen und kurzerhand zusammen mit seiner Frau Elena ohne Gerichtsverfahren erschossen.
        </p>
        
        <div className="my-8 p-6 bg-secondary/5 rounded-md border">
          <h3 className="text-xl font-semibold mb-2">Psychoanalytische Perspektive</h3>
          <p className="mb-0">
            Die Psychoanalytikerin Alice Miller hat nach dem Sturz des rumänischen Diktators Ceausescu dessen Kindheit untersucht, um zu zeigen, dass die ersten Lebensjahre eines Menschen sein späteres Verhalten als Erwachsener weitgehend mitbestimmen.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ärmliche Herkunft</h2>
        
        <p>
          „In der Kindheit Nicolae Ceausescu war lediglich ein Zimmer heizbar, und in diesem drängte sich im Winter die ganze Familie zusammen. Es gab keine Betten und keine Möbel. Dafür wäre kein Platz gewesen. Entlang der Wände standen Pritschen mit Schilfmatten, auf denen die Eltern mit den Kindern schliefen..."
        </p>
        
        <div className="my-6 relative w-full h-[300px] rounded-lg bg-muted flex items-center justify-center overflow-hidden">
          <User className="w-16 h-16 text-primary/50" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-background/0 p-4">
            <p className="text-sm text-center">Nicolae Ceausescu in jungen Jahren</p>
          </div>
        </div>
        
        <div className="my-6 p-6 bg-primary/5 rounded-md border-l-4 border-primary">
          <p className="text-lg mb-0 italic">
            Die Welt, in die Nicolae Ceausescu als drittes Kind armer oltenischer Bauern hineingeboren wurde, war trist. Das Bauernelend, wie es sich bis nach dem Zweiten Weltkrieg in Rumänien darbot, war mit keinem anderen europäischen Land zu vergleichen...
          </p>
        </div>

        <p>
          Bei den landlosen und landarmen Bauern gab es Brot nur zu den Feiertagen. Für Millionen Menschen war Mamaliga, der Maisbrei, das Hauptnahrungsmittel ... In den Dürrejahren reichten die kümmerlichen Vorräte nicht einmal für diese armselige Speise...
        </p>

        <Separator className="my-8" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Familiäre Verhältnisse</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Der Vater
            </h3>
            <p className="mb-0">
              Doch Nicolae Ceausescus Vater war nicht nur arm und Vater von zehn Kindern, von denen eins früh starb. Er vertrank sein weniges Geld im Wirtshaus, statt seine Kinder zu ernähren, und schlug sie täglich zu „ihrem Besten", wie es auch Stalins ständig betrunkener Vater und Hitlers häufig betrunkener Vater taten.
            </p>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              Die Mutter
            </h3>
            <p className="mb-0">
              Die Mutter, eine Analphabetin, war ehrgeizig und achtete streng auf die schulischen Leistungen der Kinder, die sie ebenfalls ausgiebig prügelte. Da die Eltern, vor allem die Mutter, sehr religiös waren, fanden sie für dieses Verhalten immer eine gute „moralische" Begründung.
            </p>
          </div>
        </div>
        
        <p>
          Der Junge zweifelte niemals an der Richtigkeit der Züchtigungen. Die Heuchelei sättigte die Luft, die er von Anfang an atmete und die er für selbstverständlich hielt. Seine unterdrückte, ihm selber unverständliche Wut konnte er nur im Töten junger Tiere abreagieren. Für dieses Verhalten war er schon als Kind in seinem Dorf und später auch als Jugendlicher im Gefängnis bekannt...
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Vom Missbrauchten zum Missbrauchenden</h2>

        <div className="my-6 p-6 bg-destructive/10 rounded-md border border-destructive/20">
          <p className="mb-0">
            Als Ceausescu mit Hilfe der kommunistischen Ideologie zur Macht kam, stilisierte er sich selbst zum „Gott mit absurden Wünschen". Er verhängte über ganz Rumänien das Schicksal, das einst sein eigenes gewesen war: Überfluss an Kindern, zu denen man durch den Wahn eines göttlichen Diktators gezwungen wurde und die man nicht ernähren und wärmen konnte…
          </p>
        </div>
        
        <p>
          Frauen sollten auf keinen Fall Zeit haben, sich ihren Kindern zu widmen, sie wurden durch die befohlenen Geburten unausweichlich davon abgehalten. Es sollte ihnen genauso ergehen wie Ceausescus Mutter, die, von einem trunksüchtigen Mann zu immer neuen Geburten gezwungen, ihre Kinder im Elend aufwachsen lassen musste...
        </p>

        <div className="my-8 p-6 border rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-xl font-semibold mb-4">Fazit</h3>
          <p className="mb-0">
            Die Analyse von Alice Miller legt nahe, dass die traumatischen Erfahrungen in Ceausescus Kindheit - Armut, häusliche Gewalt, emotionale Vernachlässigung und Heuchelei - maßgeblich zu seinem späteren Verhalten als Diktator beigetragen haben könnten. Er reproduzierte als Machthaber die Traumata seiner eigenen Kindheit auf nationaler Ebene und zwang die Bevölkerung Rumäniens in eine ähnliche Situation wie die, die er selbst erlebt hatte.
          </p>
        </div>

        <div className="flex items-center gap-2 mt-8 p-4 rounded-lg border bg-secondary/10">
          <FileText className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm mb-0">
            <strong>Quelle:</strong> Dieser Text erschien ursprünglich in "Demokratie in Deutschland", RAAbits Sozialkunde/Politik, Februar 1994.
          </p>
        </div>
      </div>
    </div>
  );
}
