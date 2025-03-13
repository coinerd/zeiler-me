import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AlertTriangle, BookOpen, Flame, Ghost, Mountain, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function DerUnheimlicheBergPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Der unheimliche Berg
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Mountain className="h-3 w-3" />
              <span>Heiligenberg</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Ghost className="h-3 w-3" />
              <span>Mythen & Sagen</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Flame className="h-3 w-3" />
              <span>Mysteriöses</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          Von alters her sind Sagen und schriftliche Berichte von geheimnisvollen Begebenheiten überliefert, 
          die sich auf dem Heiligenberg zugetragen haben sollen. Man erzählte von heidnischen Höhlen und tiefen Gängen, 
          von römischen Altären und Hexentanzplätzen. Auch wusste man von vergrabenen Schätzen und warnte vor Irrlichtern, 
          die ins Verderben stürzten, wer diese Schätze heben wollte.
        </p>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="kloster" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="kloster">Klosterlegenden</TabsTrigger>
          <TabsTrigger value="schaetze">Verborgene Schätze</TabsTrigger>
          <TabsTrigger value="hexen">Hexen & Aberglauben</TabsTrigger>
        </TabsList>

        {/* Klosterlegenden */}
        <TabsContent value="kloster" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-primary" />
                <span>Das Glockenwunder</span>
              </CardTitle>
              <CardDescription>
                Eine Sage über Ungehorsam und göttliche Intervention
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                An die Klosterzeit knüpfen zwei Sagen an. Die eine gibt Kenntnis vom "Glockenwunder": Alljährlich begingen die 
                Mönche des Heiligenberges mit ihren Brüdern vom Kloster Schönau auf dem Schriesheimer Hof ein Maifest. Einmal 
                hatten die Schönauer Mönche gebackene Forellen, Kuchen und Wildbraten mitgebracht, die Heiligenberger dagegen 
                nur hartes Kleie- und Haferbrot, denn sie hatten am Tage verschlafen und mussten deshalb fasten.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Die Rebellion</h3>
                  <p>
                    Als sie abends müde und hungrig ins Kloster zurückkehrten, hieß der Abt sie noch Glocken läuten und die 
                    Abendmette beten. Die Mönche verweigerten den Gehorsam, und als der Abt ihnen mit Strafe drohte, fielen 
                    sie über ihn her, banden ihn an Händen und Füßen und sperrten ihn in den Keller.
                  </p>
                  <p>
                    Nun wurde aufgetischt, was Speisekammer und Weinkeller boten, und die Mönche aßen und tranken bis zum 
                    frühen Morgen und schliefen endlich vor Ermüdung ein. Niemand dachte daran, die Glocken zur Frühmesse zu läuten.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Das Wunder</h3>
                  <p>
                    Plötzlich - kurz vor Sonnenaufgang - fingen alle Klosterglocken an zu läuten, ohne dass jemand die Glockenstränge 
                    zog. Zugleich ertönten sämtliche Glocken der Umgebung. Alles rief: Ein Wunder! Ein Wunder! Die Leute strömten 
                    hinauf zum Kloster, wo die Mönche noch im Schlaf lagen.
                  </p>
                  <p>
                    Der Abt wurde befreit und die Mönche auf seinen Befehl in den Keller gesperrt. Die Abte aus Lorsch und Schönau 
                    und der Burggraf mit seinem Gefolge eilten herbei. Es wurde strenges Gericht über die Mönche gehalten, sie wurden 
                    verbannt oder ins Burgverlies geworfen, andere Mönche aus Lorsch und Limburg rief man auf den Heiligenberg.
                  </p>
                </div>
              </div>
              
              <Alert className="bg-muted/50 mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Historischer Hintergrund</AlertTitle>
                <AlertDescription>
                  So wurde der Heiligenberg zum Schauplatz einer Klosterrevolte, die in der Geschichte des Berges nicht belegt ist. 
                  Ein ähnlicher Mönchsaufstand ist indes aus dem benachbarten Kloster Schönau bekannt.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Friedrich von Hirsau</span>
              </CardTitle>
              <CardDescription>
                Der strenge Abt und seine Heiligsprechung
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Sein reales Vorbild könnte der unnachsichtige Heiligenberger Abt aus der "Glockenwunder"-Sage in Friedrich von 
                Hirsau gehabt haben, der in dem Ruf steht, ein außerordentlich gestrenger Klostervorsteher gewesen zu sein.
              </p>
              <p>
                Eine andere Überlieferung trug zu seiner Heiligsprechung bei. Nach seinem Tode entdeckte man, dass er unter seiner 
                armseligen Leinenkutte eine eiserne Kette um den Leib getragen hatte, um sich zu kasteien. Die Kette hatte er so 
                fest geschnürt, dass sie mit der Zeit ins Fleisch eingewachsen war und furchtbare Schmerzen verursacht haben muss.
              </p>
              <p>
                Das Grabmal Friedrichs von Hirsau ist längst verloren gegangen. Über dem mutmaßlichen Grab in der Ostkrypta hält 
                eine neugefertigte Platte seinen Namen fest.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Verborgene Schätze */}
        <TabsContent value="schaetze" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ScrollText className="h-5 w-5 text-primary" />
                <span>Die zwölf silbernen Apostel</span>
              </CardTitle>
              <CardDescription>
                Ein legendärer Klosterschatz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Aus dem Mittelalter hat sich auch die Fabel von den zwölf silbernen Aposteln erhalten, die den Reichtum und 
                Kunstverstand der Heiligenberger Mönche bezeugen. Um 870 vom Abt des Klosters Lorsch gegründet, war das 
                Michaels-Kloster bald zu beträchtlichem Wohlstand gelangt. Es gab kaum ein Dorf im Umkreis, in dem St. Michael 
                oder wenigstens Lorsch keine Güter besessen hätten.
              </p>
              <p>
                Hier sind vor allem Handschuhsheim und Wiesloch zu nennen, wo die Erträge des Marktrechts zum Unterhalt der 
                Klosterkirche dienten, ebenso wie die Ausbeute der dortigen Silbergruben.
              </p>
              <p>
                Die Abte wetteiferten, das Kloster so prächtig wie möglich auszustatten mit Gemälden, silbernen Kreuzen, Statuen 
                und kostbarem Altarschmuck. Der Ruf dieser Kostbarkeiten lockte noch nach Jahrhunderten die Schatzgräber nachts 
                in die Ruinen.
              </p>
              <p>
                Besonders zwölf Apostelstatuen aus massivem Silber, die rings in der Basilika gestanden und von den letzten Mönchen 
                beim Verlassen des Klosters an einem geheimen Ort - nach anderen Versionen auch im Heidenloch - vergraben worden 
                sein sollen, waren das Ziel der Handschuhsheimer noch im letzten Jahrhundert.
              </p>
              
              <Alert className="bg-muted/50 mt-4">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Historischer Hintergrund</AlertTitle>
                <AlertDescription>
                  Die Sage von den zwölf silbernen Aposteln kann sich auch auf silberne Votivdarstellungen in dem heidnischen Tempel 
                  beziehen, von denen vielleicht hin und wieder etwas zutage kam. Tatsächlich wurden bei den Ausgrabungen in nur 
                  geringer Tiefe letzte Bruchstücke einer solchen Ausstattung gefunden. Eine fast gleichlautende Sage erzählt man 
                  sich über die Flur "Hinter Muren" bei Schleitheim, wo vor kurzem durch Grabungen ein gallo-römisches Heiligtum 
                  nachgewiesen wurde.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mountain className="h-5 w-5 text-primary" />
                <span>Die Heidenlöcher</span>
              </CardTitle>
              <CardDescription>
                Geheimnisvolle Öffnungen und unterirdische Gänge
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Die Heidenlöcher auf dem Heiligenberg - eins schon im Zusammenhang mit den silbernen Aposteln erwähnt - haben 
                ebenfalls die Phantasie der Menschen beschäftigt. Man kennt drei Heidenlöcher, zwei im Bereich der Klosterruine 
                auf der Kuppe des Berges: einmal das Loch, das aus dem Kapitelsaal in das unter diesem befindliche Gewölbe führt, 
                dann die Zisterne außerhalb des Kapitelsaals und schließlich das eigentliche Heidenloch in der Nähe des heutigen 
                Aussichtsturms auf der vorderen Kuppe.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Die Gans im Heidenloch</h3>
                  <p>
                    Eine Gans, die man in eines der Löcher im Bereich der Kirche hineingelassen haben soll, sei, so sagt man, 
                    beim Kloster Neuburg (gegenüber von Schlierbach am Neckar gelegen) wieder herausgekommen.
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Jakobs Bruder und die schwarzen Hunde</h3>
                  <p>
                    Auch das Heidenloch beim Aussichtsturm soll bis zum Neckar hinunterreichen. Ein "Jakobs Bruder" hatte sich 
                    zweimal hinabgleiten lassen und war in ein riesiges Gemach gelangt, in dem zwei große eisenbeschlagene Kisten 
                    gestanden haben sollen. Auf jeder Kiste lag ein schwarzer Hund, der mit einer schweren Eisenkette darauf 
                    gebunden war.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Hexen & Aberglauben */}
        <TabsContent value="hexen" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                <span>Hexen und Aberglaube</span>
              </CardTitle>
              <CardDescription>
                Hexentanzplätze und unheimliche Erscheinungen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Die Heidelberger Humanisten des 16. und 17. Jahrhunderts fanden den Berg immer unheimlich, zumal nachdem drei 
                Mönche im Michaels-Kloster im Jahre 1503 in ihren Betten von einem einstürzenden Glockenturm erschlagen worden waren.
              </p>
              <p>
                Die Heidelberger glaubten auf dem Heiligenberg die Hexen tanzen zu sehen, wenn sie bei Sturmwind am Neckar standen, 
                obwohl doch nur die Bäume hin- und her gerüttelt wurden. Der Aberglaube war auch unter gebildeten Leuten verbreitet: 
                Matthias von Kemnat, Chronist des Kurfürsten Friedrich des Siegreichen, versicherte um 1470, daß die Hexen aus 
                Heidelberg auf Katzen, Besen und Gabeln in der ersten Mainacht durch die Luft über den Heiligenberg zur Angelgrube 
                (die Gegend des Schriesheimer Hofes in Wilhelmsfeld) flögen, um dort ihre Orgien zu feiern.
              </p>
              
              <div className="mt-6 p-5 bg-muted/30 rounded-lg border border-muted">
                <h3 className="text-xl font-semibold mb-3">Die Irrlichter von Wilhelmsfeld</h3>
                <p className="italic mb-4">
                  Aus der im 16. Jahrhundert entstandenen Zimmern'schen Chronik stammt die folgende Erzählung:
                </p>
                <div className="space-y-3">
                  <p>
                    Graf von Zimmern ritt im Winter 1542 mit seinem Diener durch den Odenwald und verirrte sich in der Gegend des 
                    (späteren) Ortes Wilhelmsfeld. Die beiden Männer gerieten im tiefen Schnee bis zum Heiligenberg. In die 
                    Allerheiligenkirche trauten sie sich nicht hinein und mussten so im Freien lagern.
                  </p>
                  <p>
                    Um Mitternacht sahen sie plötzlich in der Nähe ein Licht, und der Diener folgte ihm vorsichtig. Immer wenn er 
                    es erreicht zu haben glaubte, entfernte es sich. Mit einer Lanze stocherte er im Schnee und merkte, dass der 
                    Boden unter ihm wich und sich ein Abgrund öffnete. Noch ein zweites Mal versuchte das Licht die beiden Männer 
                    irrezuführen.
                  </p>
                  <p>
                    Bei Tagesanbruch stiegen sie den Berg hinab und sahen nach der Stelle, wohin das Licht sie hatte locken wollen - 
                    auch hier tat sich ein tiefer Abgrund voller Schneewehen auf.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-muted/10 rounded-lg border border-muted">
            <blockquote className="text-xl italic font-semibold text-center">
              "Ein Berg - verehrt und gefürchtet"
              <footer className="mt-2 text-sm text-muted-foreground">
                — Dr. Heukemes, treffende Charakterisierung des Verhältnisses der Heidelberger zum Heiligenberg
              </footer>
            </blockquote>
            <p className="mt-4 text-center">
              Die Sagen, die in Jahrhunderten um den Berg gesponnen wurden, bezeugen, dass er nicht nur eine Stätte der Götter- und 
              Heiligenverehrung war, sondern auch Anlass zu vielerlei Aberglauben gab und die Vorstellungskraft der Menschen 
              unaufhörlich beschäftigt hat.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Navigation Links */}
      <div className="mt-10 flex justify-between">
        <Link 
          href="/detlef/projekte/heiligenberg/geschichte"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>← Die Geschichte des Heiligenbergs</span>
        </Link>
        <Link 
          href="/detlef/projekte/heiligenberg/projekt"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>Unser Projekt →</span>
        </Link>
      </div>
    </div>
  );
}
