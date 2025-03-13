import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Calendar, Users, BookOpen, Star } from "lucide-react";

export default function HooligansPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Hooligans - Angry Young Men
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Film className="h-3 w-3" />
              <span>Filmanalyse</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>2005</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Jugendkultur</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-6">
            <p className="text-lg leading-7">
              „Hooligans", so heißt der 2005 erschienene Film, für den die deutsche Regisseurin Lexi Alexander mehrfach ausgezeichnet wurde. Keine leichte Kost für zarte Gemüter, aber eine ehrliche Darstellung der Szene, die für viele fremd und abstoßend wirkt, weil sie vermuten, es gehe dort nur um willenlose Saufbolde ohne jegliche Hirnsubstanz. Mitnichten!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Film Details Card */}
      <div className="my-8">
        <Card className="bg-muted/30">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <Film className="h-4 w-4 text-primary" />
                  Film
                </h3>
                <p>Hooligans (Green Street Hooligans)</p>
              </div>
              <div>
                <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 text-primary" />
                  Regie
                </h3>
                <p>Lexi Alexander</p>
              </div>
              <div>
                <h3 className="text-base font-semibold flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-primary" />
                  Hauptdarsteller
                </h3>
                <p>Elijah Wood, Charlie Hunnam</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mt-8 mb-4">Der unerwartete Wandel</h2>
        
        <p>
          Für „Herr der Ringe"-Fans ist es zunächst schwer vorstellbar, dass Elija Wood hier in der Rolle des jungen Intellektuellen namens Matt nicht nur zum Fußball-Fan wird, sondern auch Gefallen an der so genannten „dritten Halbzeit" findet, den Schlägereien und dem Austesten der eigenen Grenzen im Faustkampf mit rivalisierenden Fans gegnerischer Mannschaften. Wie kann ein zarter Intellektueller so tief sinken, könnte man denken. Weit gefehlt. Der Wandel von Matt ist hier genauso nachvollziehbar wie der jener Jugendlichen, die in der ersten Filmfassung der „Welle" (1985) von gelangweilten High-School Kids zu fanatischen Anhängern einer neuen Form der Diktatur wurden.
        </p>

        <div className="my-8">
          <div className="relative w-full h-[300px] rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            <Film className="w-16 h-16 text-primary/50" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-background/0 p-4">
              <p className="text-sm text-center">Szene aus "Hooligans": Der Weg von Matt in die Hooligan-Szene</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Die Handlung</h2>
        
        <p>
          Wie ist es dazu gekommen, dass Matt zum Hooligan wird? Er muss kurz vor dem Abschluss seines Journalismus-Studiums aufgrund einer üblen Intrige seines Zimmergenossen die Elite-Uni Harvard verlassen. Der Lümmel aus einer reichen Familie hat ihm seine Drogen untergeschoben – und Matt muss sich eine Auszeit nehmen. Er haut ab nach Europa, genauer gesagt nach London, wo seine Schwester Shannon mit ihrem Mann Steve wohnt.
        </p>
        
        <div className="my-6 p-6 bg-secondary/5 rounded-md border">
          <p className="mb-0">
            Steve ist früher Chef einer Hooligan-Gruppe gewesen, hat sich aber seiner Frau zuliebe aus der Szene zurückgezogen. Sein Bruder Pete ist jedoch in Steves Gruppe nachgerückt – und ausgerechnet der nimmt sich nun sofort des Neulings aus Amerika an. So sehr, dass Matt gegen den Willen seiner Schwester zu seinem neuen Freund übersiedelt.
          </p>
        </div>

        <p>
          Pete und seine Freunde sind die Anführer der „Green Street Elite", einer Hooligan-Gruppe von Westham United. Matt wird zunächst von der Gruppe abgelehnt – und Pete will ihn anfangs gar nicht zum nächsten Derby mitnehmen, versucht ihn loszuwerden, weil das alles eine Nummer zu groß für ihn sei. Der intellektuelle Yankee scheint wenig geeignet für die Green-Street Elite; noch dazu ist er ein ehemaliger Journalismus Student – und Journalisten sind für die Hooligans so gut wie Feinde.
        </p>

        <Separator className="my-8" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Die "dritte Halbzeit"</h2>
        
        <p>
          Doch Matt ist am Ende doch dabei und sitzt mit Pete und seinen Kumpanen im Stadion. Nach dem Spiel versucht Pete, den Ami endlich loszuwerden und schickt ihn zur U-Bahn Station. Doch als dann die gegnerische Seite urplötzlich den Fight anfängt, die sogenannte „dritte Halbzeit", ist Matt gezwungen umzukehren und seinen neuen Freunden zu helfen. Er schlägt sich wacker, sie gewinnen – und er gehört nun dazu.
        </p>
        
        <div className="my-6 p-6 bg-primary/5 rounded-md border-l-4 border-primary">
          <p className="text-lg mb-0 italic">
            In Harvard ausgestoßen, gehört er nun dazu, bekommt einen Spitznamen verpasst und ist integriert, integriert in einer Gruppe, bei der es zwar um Gewalt geht, bei der aber auch Freundschaft, Ehre, Treue und Loyalität die Motivation für den Zusammenhalt liefern. Der bedingungslose Körpereinsatz gehört dazu.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Der Konflikt</h2>
        
        <p>
          Als Matt sich mit dem ihm nachgereisten Vater trifft und mit diesem, einem bekannten Journalisten, vor einem großen Verlagshaus gesehen wird, wächst Misstrauen in der Hooligan-Gruppe, über deren Aktionen er ganz privat Tagebuchaufzeichnungen führt. Matt gerät ins Zwielicht von Vermutungen, er sei ein eingeschleuster Pressespion.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Das Ende</h2>
        
        <p>
          Der Film nimmt, das sei vorweggenommen, ein tragisches Ende. Nicht für Matt, der zurück an seine Uni reist und sehr viel über Kameradschaft gelernt hat, aber für seine englischen Freunde Pete und Steve, auch für seine Schwester, die Steve mit ihrem gemeinsamen Baby verlässt.
        </p>

        <div className="my-8 p-6 border rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-xl font-semibold mb-4">Fazit</h3>
          <p className="mb-0">
            Zurück bleibt der Eindruck, dass junge Männer sich leicht von körperlichem Kampf in Gruppen faszinieren lassen, dass Gewalt hier aber nicht immer einzugrenzen ist, in einen ewigen Kreislauf um Vorherrschaft mündet, dass „alte Rechnungen" plötzlich aufgetischt werden und alle Spielregeln über den Haufen werfen…
          </p>
        </div>

        <div className="flex items-center gap-2 mt-8 p-4 rounded-lg border bg-secondary/10">
          <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm mb-0">
            <strong>Film-Info:</strong> "Hooligans" (Originaltitel: "Green Street Hooligans") wurde 2005 veröffentlicht und gewann mehrere Preise bei internationalen Filmfestivals, darunter zwei Preise beim Malibu Film Festival und den Publikumspreis beim SXSW Film Festival.
          </p>
        </div>
      </div>
    </div>
  );
}
