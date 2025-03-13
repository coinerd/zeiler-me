import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History, BookOpen, Brain, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

export default function SindWirNurTierePage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Sind wir (nur) Tiere?
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <History className="h-3 w-3" />
              <span>Geschichte</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Brain className="h-3 w-3" />
              <span>Philosophie</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Gesellschaft</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Wieso nennen wir Leute, die (uns oder anderen) Böses tun, oft Schweine, Hunde oder Ratten? 
          Keine dieser Tierarten hat jemals solche kriegerischen Metzeleien veranstaltet, Giftgas versprüht 
          oder Atombomben geworfen wie Menschen, war also auch nur annähernd so böse wie es Menschen sein können.
        </p>
        <p>
          Kein Tier könnte, so wie Sergej W. am 11. April 2017, einen heimtückischen Bomben-Anschlag auf den Bus 
          einer mit 28 Spielern besetzten Fußballmannschaft verüben, um mit Optionsscheinen gegen den Aktienkurs 
          des Fußballunternehmens an der Börse zu wetten. Kein Tier könnte Gerüchte streuen, um mit falschen 
          Behauptungen andere Tiere zu mobben oder zur Hetzmeute zu formen.
        </p>
      </div>

      {/* Questions */}
      <Card className="mb-8 border-l-4 border-l-primary">
        <CardContent className="p-6">
          <div className="space-y-4">
            <p>
              Können Tiere dennoch böse sein, was es rechtfertigen würde, sie mit Bosheit in Verbindung zu bringen? 
              Können sie böse sein, obwohl gerade heute dagegenspricht, dass sie zunehmend mit Vertrauen in Verbindung 
              gebracht werden?
            </p>
            <p>
              Steht nicht Gordon Gekkos Spruch genau dafür, dass Tiere nicht böse sind? 
              <span className="italic">("Wenn Du einen Freund brauchst, kauf dir einen Hund.")</span>
            </p>
            <p>
              Natürlich gehe ich davon aus, dass wir alle auch zunächst Tiere sind. Aber was unterscheidet uns von ihnen, 
              wenn wir uns moralisch oder sonst wie über sie stellen?
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span>Was uns von Tieren unterscheidet</span>
            </CardTitle>
            <CardDescription>
              Ein Versuch: Die Sprache, vor allem, wenn sie mit Schrift kombiniert ist, also Erfahrungen generationenübergreifend 
              festhalten kann, bringt uns über die Tierwelt hinaus, wenn folgende Einsichten hinzukommen:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside">
              <li className="pl-2">
                <span className="font-medium">Öffentliche Regeln:</span> Es muss feste Regeln geben, die allen Mitgliedern einer 
                Gemeinschaft bekannt sind ("Öffentlichkeit").
              </li>
              <li className="pl-2">
                <span className="font-medium">Gesetzliche Grundlagen:</span> Es muss folgerichtig ein Regelwerk geben, das die 
                Regeln festhält: Das sind Gesetze.
              </li>
              <li className="pl-2">
                <span className="font-medium">Überwachung und Kontrolle:</span> Es muss Leute geben, die die Einhaltung der Gesetze 
                überwachen und instinkthaftes Gier-Verhalten (egal aus welchem Motiv) einschränken.
              </li>
              <li className="pl-2">
                <span className="font-medium">Neugier als besondere Gier:</span> Sie überschreitet Grenzen, ist vor allem in jüngerem 
                Alter wichtig. Sie muss in Bahnen gelenkt werden, die mit den vorherigen Punkten kompatibel sind.
              </li>
              <li className="pl-2">
                <span className="font-medium">Zivilisatorische Zyklen:</span> Da dies nicht immer gelingt, wird es immer wieder 
                Zusammenbrüche der Zivilisationen geben. (Vor allem gestützt auf "Jugendbewegungen", die sich krankhafte Narzissten 
                unter den Nagel reißen) Aus diesen Zusammenbrüchen werden neue Dämme für die Erhaltung der Zivilisation wachsen, 
                falls man aus den Ursachen für die Zusammenbrüche lernt.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Zivilisation und Kultur</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside" start={6}>
              <li className="pl-2">
                <span className="font-medium">Kulturelle Färbung:</span> Zivilisationen sind abhängig von mit ihnen verbundenen Kulturen. 
                Kulturen "färben ein", was Zivilisationen ausmacht. Ergeben sich aus Überlappungen von Kulturen Konflikte, ist die 
                Übersetzungsleistung von Eliten gefordert, die für Akzeptanz und Sicherheit (auch das Sicherheitsgefühl der Menschen) sorgt. 
                Diese friedensstiftenden Eliten können aus der Wirtschaft, der Religion oder aus philosophischen Schulen kommen – und müssen 
                in der Lage sein, politischen Entscheidungen zu formen, d.h. sie müssen dafür sowohl Überzeugungskraft als auch "Macht" besitzen.
              </li>
              <li className="pl-2">
                <span className="font-medium">Multikulturelle Gesellschaften:</span> Multikulturelle Gesellschaften haben in der Geschichte 
                meist ein starkes Machtzentrum, das die unterschiedlichen kulturellen "Färbungen" einer Zivilisation so weit beeindruckt, 
                dass sich Streit in die Bahnen des Rechts (der Regeln) lenken lässt.
              </li>
              <li className="pl-2">
                <span className="font-medium">Demokratische Stabilität:</span> Demokratien mit labilen Machtzentren, mit festgelegten 
                Machtwechseln und intrinsisch erlerntem Wissen über zivilisiertem Verhalten, brauchen starke Überzeugungen, um an den 
                "Rändern" stabil zu bleiben. Diese Überzeugungen kamen bei größeren gesellschaftlichen Einheiten ("Territorialstaaten") 
                bisher oft aus Religionen oder Nationalmythen.
              </li>
              <li className="pl-2">
                <span className="font-medium">Fehlende Mythen:</span> Fehlen diese "Mythen" (quasi ideelle Rückversicherungen), wie etwa 
                bei "Europa" als Wirtschaftseinheit – oder fallen sie bei Nationalstaaten weg wie bei uns nach dem Krieg, so ergeben sich 
                Gefährdungen aus aufstrebenden Gruppen, die von außen oder von innen kommend instinktgeleitet und von Gier getrieben sind. 
                Europa oder auch Deutschland müssten sich also neue "Rückversicherungen" schaffen, wozu aber die religiösen, staatlichen 
                oder wirtschaftlichen Eliten heute zu schwach scheinen (Macron versucht das anzugehen). "Nationalismus" oder "Islamismus" 
                versuchen diese Schwäche auszunutzen, sind aber zugleich in der heute globalisierten Welt mögliche Wegbereiter eines 
                Zusammenbruchs der Zivilisation, da sie eher spalten als zusammenführen.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Herausforderungen und Gefahren</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 list-decimal list-inside" start={10}>
              <li className="pl-2">
                <span className="font-medium">Globale Umweltkatastrophe:</span> Einen Zwang zum Zusammenführen unterschiedlicher Kulturen 
                in Richtung Zivilisation sehe ich in der ziemlich rasch wachsenden Gefahr der globalen Umweltkatastrophe. (Einen Angriff 
                von "Außerirdischen", wie sie in einigen Filmen als äußerer Zwang phantasiert wurde, wird es leider – oder zum Glück - nicht geben.)
              </li>
              <li className="pl-2">
                <span className="font-medium">Rückwärtsgewandter Erlösungsglaube:</span> Der rückwärtsgewandte "ERLÖSUNGSGLAUBEN" durch 
                religiösen Fundamentalismus oder quasireligiösen Nationalismus (siehe Polen) führt eher zur Spaltung innerhalb der 
                Gesellschaften und zum Zusammenbruch der Zivilisation. Er wird aber zunehmend Anhänger finden. Das ahnen manche Eliten, 
                denen eine eigene Idee für die Zivilisation abhandengekommen ist.
              </li>
              <li className="pl-2">
                <span className="font-medium">Technokratie ohne Idee:</span> Das, was wir in der westlichen Welt in Teilen der 
                technokratischen Elite oder in einigen Sicherheitsorganisationen erleben, ist ein Versuch, sich auf den Zusammenbruch 
                OHNE EINE ZIVILISATORISCHE IDEE einzustellen, ihn also gedankenlos vorwegzunehmen, sich dabei auf Instinkte (Macht, Gier, 
                Haben-Wollen etc.) zu verlassen, um Zulauf zu gewinnen. Das setzt weder dem religiösen Fundamentalismus noch dem radikalen 
                Nationalismus etwas entgegen, in denen immerhin eine Art Gleichheitsversprechen im Jenseits oder im Diesseits steckt. 
                Wir haben es hier nicht mit dummen Leuten zu tun, sondern eher mit geschichtslosen Technokraten, die sich bestenfalls 
                technokratische Utopien (bei einigen Anführern, die überhaupt denken) zusammenfantasieren. Ohne eine zivilisatorische 
                Idee kann es dir egal sein, wie du Menschen zu deinem (oder für sie gedachtem) Vorteil lenkst.
              </li>
              <li className="pl-2">
                <span className="font-medium">Unter die Tiere fallen:</span> Fällt die Idee der Zivilisation aber im Denken und Handeln weg, 
                dann fallen wir nicht zurück auf die Welt der Tiere (wir sind ja auch Tiere), sondern wir fallen unter die Welt der Tiere 
                hinunter, weil wir mehr Mittel zur Destruktion, zur Täuschung, Manipulation usw. besitzen. Das meinte Goethe im "Faust":
                <blockquote className="border-l-4 border-primary pl-4 italic mt-2">
                  "Er nennt's Vernunft und braucht's allein,<br />
                  Nur tierischer als jedes Tier zu sein."
                  <footer className="text-sm text-muted-foreground mt-1">
                    — Goethe, "Faust I" Kapitel 3
                  </footer>
                </blockquote>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Conclusion */}
      <div className="mt-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Und hat nicht Nietzsche seinen Hund, wenn er sauer auf ihn war, in seiner Wut "Mensch!" genannt, 
          um anzuzeigen, dass der Mensch noch tiefer als ein normales Tier fallen kann? Könnte doch sein.
        </p>
        <p>
          Vielleicht doch lieber keine Tiervergleiche, wenn man andere Menschen oder ihr Handeln für böse, 
          heimtückisch oder falsch hält? Jedenfalls kommt kein Tier in dieser Hinsicht an den Menschen heran.
        </p>
      </div>

      {/* Discussion Questions */}
      <Card className="mt-8 bg-muted/50">
        <CardHeader>
          <CardTitle>Zum Nachdenken</CardTitle>
          <CardDescription>
            Fragen, die sich aus diesem Text ergeben könnten:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Inwiefern unterscheidet sich menschliche Moral von tierischem Verhalten?</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Welche Rolle spielen Kultur und Zivilisation bei der Entwicklung menschlicher Ethik?</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Warum verwenden wir Tiervergleiche für menschliches Fehlverhalten, obwohl Tiere solches Verhalten nicht zeigen?</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>Welche "zivilisatorischen Ideen" könnten heute als Gegenentwurf zu Nationalismus und religiösem Fundamentalismus dienen?</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
