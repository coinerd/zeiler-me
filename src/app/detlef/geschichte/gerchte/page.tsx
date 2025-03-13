import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, History, Users, Quote, ExternalLink, Brain } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GerchtePage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Gerüchte
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <History className="h-3 w-3" />
              <span>Geschichte</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Gesellschaft</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Brain className="h-3 w-3" />
              <span>Psychologie</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="my-8">
        <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
          "Aus Lügen, die wir ständig wiederholen, werden Wahrheiten, die unser tägliches Leben bestimmen."
          <footer className="text-sm text-muted-foreground mt-2">
            — Georg Wilhelm Friedrich Hegel (1770-1831), deutscher Philosoph
          </footer>
        </blockquote>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Gerüchte sind "alternative Fakten", die sich entweder ständig aktualisieren oder rasch zerfallen und von der Bildfläche verschwinden. 
          Sie können harmlos, aber auch gefährlich sein. Ihre Spannung erhalten sie durch die eine Frage, die sie zwangsläufig aufwerfen: 
          Wahrheit oder zweckgerichtete Lüge? Gerüchte waren im Dritten Reich mit Sicherheit ein wichtiges Mittel für das Verhetzen von Menschen, 
          also gefährlich. Gerüchte spielen heute immer noch eine große Rolle. Das gilt in Dörfern, das gilt in Städten, das gilt für 
          Nachbarschaften und das gilt auch für das große Geld, die Börse und die Welt der Spekulanten, das gilt bei Mobbing, bei Stalking usw. 
          Die aggressiv vorgetragene These von der "Lügenpresse", also die Behauptung, die offizielle Presse oder alle offiziellen Medien 
          verbreiteten nur Lügen, erweitert heute den Wirkungsgrad von Gerüchten.
        </p>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="literatur" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="literatur">Literatur</TabsTrigger>
          <TabsTrigger value="mechanismen">Mechanismen</TabsTrigger>
          <TabsTrigger value="rollen">Rollenverteilung</TabsTrigger>
          <TabsTrigger value="gesellschaft">Gesellschaftliche Aspekte</TabsTrigger>
        </TabsList>
        
        <TabsContent value="literatur" className="space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Literatur zu Gerüchten</h3>
              <p>
                Die bis heute beste Darstellung von Entstehung, Ausbreitung und Wirkung von Gerüchten findet sich in dem im Jahr 2000 
                auf Deutsch erschienenen Buch von Jean-Noel Kapferer »Gerüchte, das älteste Massenmedium der Welt«. Das Buch ist nur 
                noch gebraucht bei Amazon zu bestellen, hätte aber eine Neuauflage verdient. Michael Scheeles Werk »Das jüngste Gerücht« 
                (Heidelberg, 2006) verengt m.E. die Problematik zu sehr durch den Bezug auf persönliche Erlebnisse.
              </p>
              <p className="mt-4">
                In bildlicher Darstellung kennt man dazu sicher noch die Lithographien von Andreas Paul Weber, der von 1893 bis 1980 gelebt hat. 
                Die bekanntesten Werke zu unserem Thema sind »Das Gerücht« (1943) und »Der Denunziant« (1934).
              </p>
              <div className="mt-4">
                <Link 
                  href="http://www.weber-museum.de/werk/geskrt/"
                  target="_blank"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Werke von Andreas Paul Weber im Weber-Museum</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mechanismen" className="space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Warum sind Gerüchte schwarz?</h3>
              <p>
                Die meisten Gerüchte kündigen etwas Übles an, eine Katastrophe, eine Gefahr, einen Verrat: Die bei Gerüchten vorherrschende 
                Farbe ist Schwarz. Dennoch gibt es auch rosarote Gerüchte: 1945, am Ende des Zweiten Weltkriegs, entstanden jeden Tag neue 
                Gerüchte über die langersehnte Kapitulation Deutschlands; in einem Unternehmen gibt es Gerüchte über Beförderungen und 
                Gehaltserhöhungen; an der Börse können Gerüchte auch eine Kurssteigerung ankündigen.
              </p>
              <p className="mt-4">
                Über die Welt der Stars werden zahlreiche Gerüchte von Heiraten, Verlobungen und Geburten verbreitet. Obwohl jede genaue 
                Berechnung schwierig ist, scheinen die rosaroten Gerüchte allerdings deutlich in der Minderzahl zu sein.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Der Informationswert des Schwarzen</h3>
              <p>
                Jede Nachricht (jedes Gerücht) ist eine Aussage: Jemand (nennen wir ihn "P") hat etwas (nennen wir es "F") getan, tut es oder 
                wird es tun. In struktureller Hinsicht ist das ein Satz des Typs P-F (eine Person tut etwas). Diese Person kann entweder negativ 
                oder positiv bewertet sein.
              </p>
              <p className="mt-4">
                Die Einführung eines negativen Elements in den Satz erhöht zwangsläufig den Informationswert der Botschaft, also deren Chancen, 
                weiterverbreitet zu werden. Außerdem verändern sich unausgewogene (positiv-negative oder negativ-positive) Informationen 
                unvermeidlich während ihrer Verbreitung.
              </p>
              <p className="mt-4">
                Wenn sie zu einem positiv-positiven Sinn tendieren, verlieren sie ihr Interesse und kursieren nicht mehr als Gerücht; wenn sie ein 
                negativ-negativer Satz werden, dient ihr Nutzen für die Gemeinschaft als Treibstoff für ihre Verbreitung. Daher überleben in den 
                meisten Fällen nur negative Sätze als Gerücht.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Das Schwarze schafft Einmütigkeit</h3>
              <p>
                Das Gerücht ist ein kollektiver Akt. Einmütigkeit entsteht leichter, wenn sie gegen etwas gerichtet ist und nicht für etwas eintritt. 
                Sobald politische Regime spüren, dass die Einmütigkeit abbröckelt, zögern sie nicht, einen neuen Kreuzzug, einen neuen Krieg gegen 
                den Feind zu inszenieren. Die Anprangerung des Fremden ist ein erprobtes Rezept, um die nationale Einheit wiederzufinden.
              </p>
              <p className="mt-4">
                Die Negativität des Gerüchts bringt den gleichen Nutzen. Wenn man den Fremden in der Stadt beschuldigt, schafft man Solidarität gegen ihn. 
                In dem Maße, wie sich das Gerücht immer weiterverbreitet, wird sich die Gruppe ihrer eigenen Existenz und ihrer Kraft bewusst. 
                Das negative Gerücht ist ein mächtiger Hebel, um den bedrohten sozialen Zusammenhalt wiederherzustellen.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rollen" className="space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Rollenverteilung bei Gerüchten</h3>
              <p>
                Obwohl Gerüchte immer ein Gemeinschaftswerk sind, so kann man – zumindest bei den "kleinen" Gerüchten - doch eine gewisse 
                Rollenverteilung feststellen. Für die großen, strategisch angelegten Gerüchte, die oft von psychopathischen Machtmenschen 
                gestreut werden, gilt das nur teilweise. Bei ihnen geht es z.B. um Bürgerkriege, Kriege oder Revolutionen. Sie lassen sich 
                oft nur schwer von "Propaganda" abgrenzen.
              </p>
              
              <div className="space-y-4 mt-6">
                <div>
                  <h4 className="font-semibold text-lg">1. Die Anstifter</h4>
                  <p>
                    Sie sind oft in einer eingespielten Machtstellung bedroht oder fühlen sich lediglich bedroht durch einen "Eindringling" oder 
                    eine Person, die beliebter oder intellektuell überlegen sein könnte. Oder sie wollen selbst in ein eingespieltes soziales oder 
                    politisches System eindringen und einen Konkurrenten aus dem Weg räumen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">2. Die Interpreten</h4>
                  <p>
                    Sie greifen die Anfangsgeschichte auf, schmücken sie aus, um sie plausibler zu gestalten und räumen dabei Zweifel aus dem Weg. 
                    Hier bekommt das Gerücht seine Form, weil es auf eine psychische Disposition trifft, in die das Gerücht passt.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">3. Die Meinungsführer</h4>
                  <p>
                    Sie gilt es zu gewinnen, zu überzeugen (oder zu bestechen), denn von ihrem Urteil hängt die Aufgeschlossenheit der Gruppe für 
                    das Gerücht ab. Da viele Menschen Mitläufer und oft nicht in der Lage sind, selbstständig und kritisch Sinnfindung zu betreiben, 
                    braucht man bei der Verbreitung von Gerüchten "gate-keeper" ("Pförtner").
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">4. Die "Apostel"</h4>
                  <p>
                    Das sind Menschen, die sich vollständig, "gläubig" und rückhaltlos mit dem Gerücht identifizieren – und sich deshalb bemühen, 
                    ihr ganzes Umfeld zu überzeugen. Meist geben sie dem Gerücht noch einen letzten Schliff oder ergänzen offene Stellen in der 
                    Geschichte, die sich aus Fragen zweifelnder Menschen ergeben.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">5. Die Stimmungsmacher</h4>
                  <p>
                    Das sind Personen, die aus irgendwelchen Gründen an der Weiterverbreitung des Gerüchtes mitarbeiten, ohne dass sie daran glauben. 
                    Entweder erzählen sie die Story auf einer Feier weiter, füllen damit aufkommende Gesprächspausen – oder sie machen sich einen Jux 
                    über Menschen aufgrund von deren Manipulierbarkeit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">6. Die Opportunisten</h4>
                  <p>
                    Sie nutzen die Story z.B., um die eigene "Autorität" mit einer Warnung vor solchen Leuten wie dem "Opfer" bzw. dem Sündenbock zu 
                    stärken. Der Wahrheitsgehalt des Gerüchts interessiert hier weniger. Ihre Rolle ist den Stimmungsmachern - in abgeschwächter Form - ähnlich.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">7. Die Genießer</h4>
                  <p>
                    Das sind Menschen, die überhaupt nicht an das Gerücht glauben, es jedoch genüsslich auskosten. Sie freuen sich, wenn sie ihr Umfeld 
                    in Aufregung versetzen können: Angst, Grusel, aber auch Häme oder gemeinsames Lachen über eine Person oder Personengruppe können 
                    hier eine Rolle spielen.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">8. Die passiven Vermittler</h4>
                  <p>
                    Sie behaupten, von dem Gerücht nicht überzeugt zu sein, schaffen es aber nicht, es mit Schweigen zu übergehen. Sie sind meist zu 
                    feige, um sich offen gegen das Gerücht zu stellen. Da aber Gerüchte von der Spannung leben, ob sie denn nun wahr oder unwahr sind, 
                    halten die passiven Vermittler diese Spannung aufrecht, - ob sie dies wollen oder nicht.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">9. Die Widerstandskämpfer</h4>
                  <p>
                    Sie sind wichtige Figuren bei der Abwehr von Gerüchten, riskieren aber, sich selbst beim Gegenangriff in Gefahr zu bringen. 
                    Erfolgreich können sie nur sein, wenn sie in breiten Kreisen Anerkennung genießen und als integer bekannt sind. Am besten, 
                    sie sind selbst Meinungsführer.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-sm mt-2">
                    "Nur wenige Menschen sind stark genug, um die Wahrheit zu sagen und die Wahrheit zu hören."
                    <footer className="text-xs text-muted-foreground mt-1">
                      — Vauvenargues (1715-1747)
                    </footer>
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="gesellschaft" className="space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Gerüchte in der modernen Gesellschaft</h3>
              <p>
                So war die Wählerbeeinflussung im US-Wahlkampf "auch deshalb so schwer zu durchschauen, weil es im Zeitalter der Algorithmen 
                keine einheitliche Öffentlichkeit mehr gibt; jeder von uns sieht heute sein eigenes Internet. Diesen Umstand machte sich Trumps 
                Wahlkampfteam 2016 zunutze, indem es gezielt sogenannte dark posts auf Facebook einstellte - Beiträge also, die nur für einen 
                ausgewählten Personenkreis einsehbar waren, in diesem Fall schwarze potentielle Clinton-Wähler im umkämpften Pennsylvania. 
                Ziel der Kampagne war es nicht, Stimmen für Trump zu werden. Es ging darum, die Menschen vom Gang ins Wahllokal abzuhalten.
              </p>
              <p className="mt-4">
                'Mikrotargeting' nennt sich das gezielte Ansprechen winziger Zielgruppen." (Aus: DIE ZEIT, 8.2.2018, S. 35/35)
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Der lange Atem der Gerüchte</h3>
              <p>
                Gerüchte strukturieren die Umwelt. Sie bestätigen sich wie von selbst, wenn sie unsere Wahrnehmungen in ein halbwegs plausibles 
                System integrieren. Hier wirkt ein Mechanismus, den man generell bei der Interpretation von "Tatsachen" findet: Wenn jemand uns 
                sagt, ein Kind sei "nervös", wird man vermutlich jeden brutalen körperlichen Ausbruch bei ihm als "nervösen Ausbruch" ansehen; 
                hätte man das Kind aber zuvor als "energisch und vital" vorgestellt, dann wäre der gleiche körperliche Ausbruch als "vitale Äußerung" 
                durchgegangen.
              </p>
              <p className="mt-4">
                Die Mehrdeutigkeit der meisten Ereignisse macht aus ihnen eine ideale Projektionsfläche für Bilder, Hypothesen und Meinungen, 
                die wir bereits im Kopf haben.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm mt-4">
                "Das Gerücht kehrt nicht wie der Halleysche Komet zurück, der sich außerhalb der Sphäre unseres Planeten befindet und diesen 
                gewissermaßen wie ein Zuschauer beobachtet. Tatsächlich sind die vagen Befürchtungen und Ängste oder Frustrationen niemals aus 
                dem gesellschaftlichen Organismus verschwunden: Man hat lediglich ihre Äußerungen verdrängt, kanalisiert und legitimiert. Sie 
                konkretisieren sich in der Flüsterpropaganda und in Parolen, die unter günstigen Umständen zu Gerüchten werden können."
                <footer className="text-xs text-muted-foreground mt-1">
                  — Jean-Noel Kapferer, Gerüchte
                </footer>
              </blockquote>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Das Dilemma der "Verstrickung"</h3>
              <p>
                Gerüchtewellen sind kaum berechenbar. Aber was sie noch gefährlicher macht, das ist die Verstrickung von "Mitläufern", die sich 
                aufgrund von Gerüchten zu aggressiven und illegalen oder inhumanen Handlungen haben verführen lassen. Sie können sich, selbst 
                wenn sie ahnen, dass sie falsch liegen, aus mehreren Gründen nicht einfach bei "Opfern" oder "Sündenböcken" entschuldigen.
              </p>
              <p className="mt-4">
                Zum einen wäre das "Verrat" an der Gerüchtegruppe, zu der sie eine Bindung spüren; zum anderen besteht noch die Gewissheit oder 
                die Hoffnung, es komme aufgrund der Vielzahl der Mitläufer und der Stärke der "Meinungsführer" nicht heraus; wer sollte sich auch 
                trauen, dagegen aufzustehen?
              </p>
              <p className="mt-4">
                Aber der Hauptgrund besteht in dem natürlichen Legitimationszwang der "Täter", die ihre Tat bzw. ihre Teilnahme an der Gerüchtegruppe 
                mit irgendeiner "Schlechtigkeit" des Opfers rechtfertigen müssen. Eher kann das "Opfer" verzeihen als ein Täter sich entschuldigen. 
                Das lernen wir aus der Geschichte.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Ausblick</h3>
              <p>
                Multikulturelle Gesellschaften sind auf dem Vormarsch. Das wird sich auch nicht verhindern lassen. Also müssen wir damit umgehen. 
                Mag sein, dass eine Zeitlang aus Angst um den Verlust der eigenen Kultur Abgrenzungskämpfe stattfinden; dabei werden moralische 
                Standards bei weniger gebildeten Menschen sinken – und Gerüchtewellen hie und da Einfluss bekommen.
              </p>
              <p className="mt-4">
                Langfristig jedoch wird es eine Gegenbewegung seitens gebildeter Schichten geben, die in der Lage sind, Globalisierung und Erhalt 
                kultureller Identitäten auf friedliche Weise nebeneinander stehen zu lassen.
              </p>
              <p className="text-sm text-muted-foreground mt-6">
                (Wird fortgesetzt.)
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 text-sm text-muted-foreground">
        <p>
          [1] Rassemblement pour la République (die gaullistische "Sammlungsbewegung für die Republik")
        </p>
        <p className="mt-1">
          [2] Le Canard enchainé, 29. Mai 1974
        </p>
      </div>
    </div>
  );
}
