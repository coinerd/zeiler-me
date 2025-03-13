import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Quote, BookMarked } from "lucide-react";
import Link from "next/link";

export default function FremdenfeindlichkeitPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Fremdenfeindlichkeit
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Literaturanalyse</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Gesellschaft</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookMarked className="h-3 w-3" />
              <span>Hans Magnus Enzensberger</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Auf dieser Seite finden Sie einen Textauszug aus Hans Magnus Enzensbergers Werk „Die große Wanderung" (1992), 
          in dem er anhand einer alltäglichen Situation in einem Eisenbahnabteil die Grundmechanismen von Fremdenfeindlichkeit 
          und territorialem Verhalten metaphorisch darstellt.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Quote className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Aus: „Die große Wanderung" von Hans Magnus Enzensberger</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              (Frankfurt am Main, 1992, S. 11-13)
            </p>
            
            <div className="space-y-4">
              <p>
                Zwei Passagiere in einem Eisenbahnabteil. Wir wissen nichts über ihre Vorgeschichte, ihre Her­kunft oder ihr Ziel. 
                Sie haben sich häuslich eingerichtet, Tischchen, Kleiderhaken, Gepäck­ablagen in Beschlag genommen. Auf den freien 
                Sitzen liegen Zeitungen, Mäntel, Handtaschen herum. Die Tür öffnet sich, und zwei neue Reisende treten ein. Ihre 
                Ankunft wird nicht be­grüßt. Ein deutlicher Widerwille macht sich bemerkbar, zusammenzurücken, die freien Plät­ze 
                zu räumen, den Stauraum über den Sitzen zu teilen.
              </p>
              
              <p>
                Dabei verhalten sich die ursprünglichen Fahrgäste, auch wenn sie einander gar nicht ken­nen, eigentümlich solidarisch. 
                Sie treten, den neu Hinzukommenden gegenüber, als Gruppe auf. Es ist ihr Territorium, das zur Disposition steht. 
                Jeden, der neu zusteigt, betrachten sie als Eindringling. Ihr Selbstverständnis ist das von Eingeborenen, die den 
                ganzen Raum für sich in Anspruch nehmen. Diese Auffassung läßt sich rational nicht begründen. Umso tiefer scheint 
                sie verwurzelt zu sein.
              </p>
              
              <p>
                Dennoch kommt es so gut wie nie zu offenen Auseinandersetzungen. Das liegt daran, daß die Fahrgäste einem Regelsystem 
                unterliegen, das nicht von ihnen abhängt. Ihr territorialer In­stinkt wird einerseits durch den institutionellen Code 
                der Bahn, andererseits durch ungeschrie­bene Verhaltensnormen wie die der Höflichkeit gebändigt. Also werden nur Blicke 
                getauscht und Entschuldigungsformeln zwischen den Zähnen gemurmelt. Die neuen Fahrgäste wer­den geduldet. Man gewöhnt 
                sich an sie. Doch bleiben sie, wenn auch in abnehmendem Grade, stigmatisiert.
              </p>
              
              <p>
                Dieses harmlose Modell ist nicht frei von ab­surden Zügen. Das Eisenbahnabteil ist ein transitorischer Aufenthalt, 
                ein Ort, der nur dem Ortswechsel dient. Die Fluktuation ist seine Be­stimmung. Der Passagier ist die Negation des 
                Seßhaften. Er hat ein reales Territorium gegen ein virtuelles eingetauscht. Trotzdem verteidigt er seine flüchtige 
                Bleibe nicht ohne stille Erbit­terung.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="bg-muted/40 p-6 rounded-md border mt-8">
          <h3 className="text-xl font-semibold mb-4">Analyse und Diskussionsansätze</h3>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Die Metapher des Eisenbahnabteils</h4>
            <p>
              Enzensberger nutzt die alltägliche Situation eines Eisenbahnabteils als Metapher für gesellschaftliche Prozesse. 
              Das Abteil wird zum Mikrokosmos, in dem sich grundlegende menschliche Verhaltensweisen in Bezug auf Territorium, 
              Fremdheit und Zugehörigkeit zeigen.
            </p>
            
            <h4 className="text-lg font-medium">Territoriales Verhalten</h4>
            <p>
              Der Text beschreibt, wie Menschen selbst in einem temporären, nicht ihnen gehörenden Raum territoriales Verhalten 
              entwickeln. Die "ursprünglichen Fahrgäste" betrachten das Abteil als ihr Territorium und jeden Neuankömmling als 
              "Eindringling", obwohl sie keinerlei Anspruch auf den Raum haben.
            </p>
            
            <h4 className="text-lg font-medium">Gruppenbildung und Solidarität</h4>
            <p>
              Bemerkenswert ist die spontane Solidarität unter den "Eingeborenen", selbst wenn sie sich nicht kennen. Sie bilden 
              eine Gruppe gegen die "Fremden", was auf tief verwurzelte soziale Mechanismen hindeutet.
            </p>
            
            <h4 className="text-lg font-medium">Zivilisatorische Regeln</h4>
            <p>
              Trotz der territorialen Instinkte kommt es nicht zu offenen Konflikten, da das Verhalten durch institutionelle Codes 
              und gesellschaftliche Normen reguliert wird. Dies zeigt die Spannung zwischen Instinkt und Zivilisation.
            </p>
            
            <h4 className="text-lg font-medium">Das Absurde der Situation</h4>
            <p>
              Enzensberger weist auf die Absurdität hin, dass ausgerechnet Passagiere – also Menschen in Transit – territoriales 
              Verhalten zeigen. Der Passagier hat "ein reales Territorium gegen ein virtuelles eingetauscht", verteidigt aber dennoch 
              seine "flüchtige Bleibe".
            </p>
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-medium mb-3">Diskussionsfragen:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Inwiefern lässt sich die Situation im Eisenbahnabteil auf gesellschaftliche Prozesse übertragen?</li>
              <li>Welche Parallelen gibt es zu aktuellen Debatten über Migration und Integration?</li>
              <li>Warum entwickeln Menschen territoriales Verhalten selbst in Räumen, die ihnen nicht gehören?</li>
              <li>Welche Rolle spielen soziale Normen und institutionelle Regeln bei der Eindämmung von Konflikten?</li>
              <li>Wie könnte eine Gesellschaft aussehen, die weniger von territorialen Instinkten geprägt ist?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
