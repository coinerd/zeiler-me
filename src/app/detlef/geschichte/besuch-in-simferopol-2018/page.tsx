import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, User, Plane, FileText, History } from "lucide-react";

export default function BesuchInSimferopolPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Besuch in Simferopol 2018
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Mein Besuch unserer Partnerstadt Simferopol
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>Mai 2018</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Krim</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <History className="h-3 w-3" />
              <span>Zeitzeugen</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <p className="leading-7">
              Am 22. Mai 2018 bin ich mit Aeroflot über Moskau auf die Krim geflogen. Am nagelneuen Flughafen von Simferopol wurde ich von Mitarbeitern des dortigen Heidelberg-Zentrums empfangen und mit dem Taxi zu einer privaten Unterkunft gebracht: 25.-€ pro Nacht, inklusive Frühstück. Da kann man nicht meckern.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>
          Allen Unkenrufen und Warnungen zum Trotz bin ich dorthin gereist, ein wenig skeptisch war ich natürlich auch – aber ich kann sagen, die Reise hat sich gelohnt. Genügend Einwände hatte es gegeben. Das Außenministerium habe gewarnt. Man unterstütze mit dem Besuch eine falsche Politik, konterkariere eine Politik, die Russland eine Lektion in Demokratie und Völkerrechte erteilen will. Schließlich habe ja Russland sich die Halbinsel Krim unrechtmäßig unter den Nagel gerissen. Aber sollte man wegen solcher Konflikte aus der großen Politik, auf die man keinen Einfluss hat und die man nur aus dem Blickwinkel westlicher Medien kennt, auch alle menschlichen Begegnungen stoppen?
        </p>
        
        <div className="my-8 flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-[300px] rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            <Plane className="w-16 h-16 text-primary/50" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-background/0 p-4">
              <p className="text-sm text-center">Foto: Flughafen Simferopol nach der Renovierung 2018</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Zweck der Reise</h2>
        
        <p>
          Über den Freundeskreis Heidelberg-Simferopol hatte ich erfahren, dass es in Simferopol noch überlebende Zwangsarbeiterinnen aus der Zeit des Dritten Reiches gibt, die gerne ihre Geschichte erzählen würden. Da alle zwar noch geistig fit, aber um die 90 Jahre alt sind, sollte ich mich beeilen, wenn ich eine kleine Filmdokumentation zu dem Thema erstellen wollte. Ich hatte zuvor schon mehrere historische Filmdokumentationen mit Zeitzeugen erstellt, also warum nicht?
        </p>

        <Separator className="my-8" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Begegnung mit Lidia Chodirewa</h2>
        
        <div className="flex items-start gap-6 flex-wrap md:flex-nowrap my-6">
          <div className="w-full md:w-1/3">
            <div className="rounded-lg bg-secondary/10 p-4 mb-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <User className="h-5 w-5" />
                <h3 className="font-medium">Lidia Chodirewa</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>Alter: 80 Jahre</li>
                <li>Geboren in Weißrussland</li>
                <li>Verschleppt mit ihrer Mutter</li>
                <li>Gefangenschaft in Görlitz</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p>
              Zunächst besuchte ich Lidia Chodirewa, eine sehr sympathische Frau, die in einem kleinen unscheinbaren Häuschen wohnt, das man über einen langgezogenen Hinterhof erreicht. Da mein Russisch noch sehr zu wünschen übrig lässt, wurde mir vom Heidelberg-Zentrum unserer Partnerstadt eine Studentin, Alyona, zur Seite gestellt, die gut Deutsch sprach.
            </p>
            <p className="mt-4">
              Lidia ist gerade 80 Jahre alt geworden. Sie ist in Weißrussland geboren und wurde als Kind zusammen mit ihrer Mutter von den Nazis in verschiedene Lager verschleppt, bis beide schließlich im Gefängnis der Stadt Görlitz landeten. Dort wurde die Mutter misshandelt und dann in ein Vernichtungslager gebracht. Das aber hatte Lidia trotz intensiver Suche erst 60 Jahre später mit der Hilfe einer deutschen Frau namens Ruth Pilz herausgefunden.
            </p>
          </div>
        </div>
        
        <div className="bg-muted/40 p-6 rounded-md border my-8">
          <p className="italic">
            Der Ort, in dem ihre Mutter 1945, kurz vor Kriegsende starb, wurde makabrer Weise „Schonungslager Mittwerda" genannt. Es war ein von der SS gewählter Deckname für ein Lager in der „Todeszone Uckermark". Die Vergasungen fanden wohl im Konzentrationslager Ravensbrück statt. Ihren jüngeren Bruder, der ebenfalls verschleppt worden war, hat Lidia bis heute nicht gefunden.
          </p>
          <p className="mt-4">
            Lidia fällt es nicht leicht, darüber zu berichten, aber sie möchte es dennoch, um das Schicksal ihrer Mutter nicht in Vergessenheit geraten zu lassen.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Begegnung mit Xenia Garasjuta</h2>
        
        <div className="flex items-start gap-6 flex-wrap md:flex-nowrap my-6">
          <div className="w-full md:w-1/3">
            <div className="rounded-lg bg-secondary/10 p-4 mb-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <User className="h-5 w-5" />
                <h3 className="font-medium">Xenia Garasjuta</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li>Alter: 92 Jahre</li>
                <li>Geboren: 1927 in Simferopol</li>
                <li>Verschleppt: August 1942</li>
                <li>Arbeit: nahe Hannover und Göttingen</li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p>
              Unser nächster Besuch galt der 92-jährigen Xenia. Ihr Schicksal ist bereits in dem Buch „Verschleppt und vergessen" des Freundeskreis Heidelberg-Simferopol e.V. (Hrsg.: Susanne Kraatz) gut beschrieben, aus dem ich hier zitiere:
            </p>
            
            <div className="my-4 p-4 border-l-4 border-primary bg-primary/5 rounded-r-md">
              <p className="italic">
                „Xenia wurde 1927 in Simferopol geboren. […] Während des Krieges versteckte die Familie einen jüdischen Jungen, der dadurch überlebte. Im August 1942 wurde Xenia mit 15 Jahren nach Deutschland verschleppt, weil sie ein Plakat der deutschen Besatzer zur Anwerbung von Ostarbeitern abgerissen hatte. Sie hatte kurz bei einem Bauern in der Nähe von Hannover gearbeitet, bevor sie auf einem anderen Bauernhof in der Nähe von Göttingen eingesetzt wurde […]. Nach ihrer Rückkehr wurde sie Buchhalterin." (S. 131)
              </p>
            </div>
            
            <p>
              Xenia hatte, anders als einige andere Zwangsarbeiterinnen, keine Schwierigkeiten nach ihrer Rückkehr auf die Krim. Xenia ist stolz, auch im hohen Alter von 92 Jahren noch die deutsche Sprache zu verstehen. Nur bei ihren Antworten muss sie einige Male auf die Hilfe unserer Dolmetscherin zurückgreifen, wenn sie nach einem Wort suchte. Wohl dem, der mit 92 Jahren noch so klar im Kopf ist wie Xenia!
            </p>
          </div>
        </div>
        
        <div className="my-8">
          <div className="relative w-full h-[300px] rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            <User className="w-16 h-16 text-primary/50" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-background/0 p-4">
              <p className="text-sm text-center">Im Bild von links nach rechts: Violetta Tischina, Leiterin des Heidelberg-Zentrums, Valentina Medwedewa, ihre Stellvertreterin, Xenia Garasjuta, rechts daneben Alyona Mirgorodskaya</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Fazit</h2>
        
        <p>
          Die Begegnungen mit den Zeitzeuginnen waren emotional bewegend und historisch wertvoll. Diese persönlichen Geschichten dürfen nicht vergessen werden. Sie erinnern uns an die Schrecken des Krieges und die Wichtigkeit der Völkerverständigung, auch über politische Grenzen hinweg. Trotz der angespannten politischen Situation rund um die Krim war die Reise eine bereichernde Erfahrung, die mir ermöglichte, diese wichtigen Zeitdokumente zu bewahren.
        </p>
        
        <div className="flex items-center gap-2 mt-8 p-4 rounded-lg border bg-secondary/10">
          <FileText className="h-5 w-5 text-primary flex-shrink-0" />
          <p className="text-sm">
            <strong>Hinweis:</strong> Das Buch „Verschleppt und vergessen" vom Freundeskreis Heidelberg-Simferopol e.V. (Hrsg.: Susanne Kraatz) dokumentiert weitere Schicksale von Zwangsarbeiterinnen und Zwangsarbeitern aus der Region.
          </p>
        </div>
      </div>
    </div>
  );
}
