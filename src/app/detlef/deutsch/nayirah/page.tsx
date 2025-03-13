import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Quote } from "lucide-react";

export default function NayirahPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Nayirah
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>1990</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Deutsch</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="h-5 w-5 text-primary" />
          <p className="text-lg italic">
            Auszug aus „Die Maske" (Roman, von Fuminori Nakamura. Diogenes-Verlag, 2018, S. 208-2011)
          </p>
        </div>
        <Card className="mb-8 background-gradient text-muted-foreground">
          <CardContent className="p-6">
            <p className="mb-2">„Ich bin im Rüstungsgeschäft", brach er endlich das Schweigen, mit einer Stimme so leise, dass sie kaum zu hören war.</p>
            <p className="mb-2">»Und du wirst für mich arbeiten.«</p>
            <p className="mb-2">»Warum?«</p>
            <p className="mb-2">»Weil ich es so will.«</p>
            <p>Er seufzte. Sein milchiger Blick schien auf etwas hinter mir gerichtet.</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mb-4">Die Geschichte von Nayirah</h2>

        <div className="space-y-6">
          <p className="text-lg">
            »Kennst du die Geschichte von dem Mädchen Nayirah?«
          </p>
          
          <p className="text-lg">
            »Ich glaube nicht.«
          </p>
          
          <p className="text-lg">
            Er stellte das Glas auf den Tisch und begann, fast quälend langsam zu erzählen.
          </p>
          
          <Separator className="my-8" />
          
          <div className="bg-muted/40 p-6 rounded-md border">
            <p className="text-lg mb-4">
              »Im Jahr 1990, nachdem der Irak unter Saddam Hussein ins benachbarte Kuweit einmarschiert war, wurde ein junges Mädchen aus Kuweit gebeten, vor dem Menschenrechtskomitee des US-Kongresses als Zeugin auszusagen.«
            </p>
            
            <p className="text-lg mb-4">
              Sein Gesicht zeigte keine Regung. Nur die dicken Lippen bewegten sich.
            </p>
            
            <p className="text-lg">
              »Sie erzählte, wie brutal die irakischen Soldaten bei der Invasion vorgegangen seien. So hätten sie in einem Krankenhaus zu früh geborene Babys aus den Brutkästen genommen und diese auf dem nackten Boden sterben lassen. Amerika, ja, die ganze Welt war entsetzt und zitterte vor Wut über die Barbarei. Um die irakischen Truppen aus Kuwait zu vertreiben, wurde unter Führung der USA ein Militärbündnis geschmiedet, das schließlich einen Luftkrieg auslöste - den Zweiten Golfkrieg.«
            </p>
          </div>
          
          <p className="text-lg">
            Halb auf dem Sofa liegend, hielt er mit matter, eintöniger Stimme seinen Monolog.
          </p>
          
          <div className="bg-primary/5 p-6 rounded-md border-l-4 border-primary">
            <p className="text-lg mb-4">
              »Erst nach dem Krieg stellte sich heraus, dass Nayirahs Schilderungen nichts als eine Lüge waren. In Wahrheit war sie die Tochter des kuweitischen Botschafters in den USA und ihre Story von A bis Z die Erfindung einer amerikanischen PR-Agentur. Ein Riesenskandal, über den weltweit berichtet wurde.«
            </p>
          </div>
          
          <p className="text-lg">
            Er seufzte, als langweilte ihn die Geschichte, und streckte seinen Arm nach der Whiskyflasche aus. Ich hatte keine Ahnung, was das alles sollte.
          </p>
          
          <Separator className="my-8" />

          <h3 className="text-xl font-semibold mb-4">Wie Kriege funktionieren</h3>
          
          <p className="text-lg">
            »Im Wesentlichen gibt es zwei Möglichkeiten, Geld zu verdienen. Die eine ist, ein attraktives Produkt oder Dienstleistungsangebot zu entwickeln und es gegen das Geld in den Taschen der Leute zu tauschen. Die zweite, Geld dem Staat abzupressen, das er in Form von Steuern seinen Bürgern genommen hat. Der zweite Weg ist meistens lukrativer. Ich erkläre dir nun an einem einfachen Beispiel, wie Kriege funktionieren.«
          </p>
          
          <p className="text-lg italic">
            Wie gebannt starrte ich immer wieder auf das riesige Bild an der Wand, während sein Monolog kein Ende nehmen wollte.
          </p>
          
          <div className="bg-secondary/10 p-6 rounded-md border">
            <p className="text-lg mb-4">
              »Stell dir ein kleines Land in Afrika vor mit Bodenschätzen wie Kupfer und Diamanten. Die großen, reichen, mächtigen Länder wollen sich natürlich die Schürfrechte sichern, doch der König des kleinen Landes weigert sich. Die großen Länder versuchen also heimlich, die dem König feindlich gesinnten Kräfte zu einen, und lassen sie eine Rebellenarmee gründen. Dann starten sie zu Hause einen Propagandafeldzug, in dem behauptet wird, der König unterdrücke sein Volk und nehme ihnen jede Freiheit.
            </p>
            
            <p className="text-lg">
              Sie schicken eigene Soldaten, um die Rebellen zu unterstützen, oder schleusen private Unternehmen ein, die den Job übernehmen. Viele der neueren Kriege sind privatisiert worden. Es gibt Firmen, die den Transport von Soldaten ins Kriegsgebiet organisieren; Firmen, die Soldaten mit Waffen, Zelten und Essen versorgen; Firmen, die Rebellen ausbilden und ihnen strategisches Know-how liefern. Diese Privatfirmen sind meist von ehemaligen Offizieren gegründet worden, die, wie sich von selbst versteht, gute Kontakte zu Politikern und Beamten des Verteidigungsministeriums haben. Im Namen der internationalen Zusammenarbeit werden sie mit Steuergeldern der reichen Länder finanziert sowie mit Geldern der Rebellen.«
            </p>
          </div>
        </div>

        <div className="my-10 p-6 border rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-xl font-semibold mb-4">Über den Text</h3>
          <p>
            Dieser Text stammt aus dem Roman „Die Maske" des japanischen Autors Fuminori Nakamura, der 2018 im Diogenes-Verlag erschienen ist. Der Auszug beschreibt die wahre Geschichte von Nayirah, deren gefälschte Zeugenaussage als Propaganda-Instrument für den Zweiten Golfkrieg genutzt wurde. Diese historische Begebenheit gilt als ein bekanntes Beispiel für die Manipulation der öffentlichen Meinung zur Rechtfertigung militärischer Interventionen.
          </p>
        </div>
      </div>
    </div>
  );
}
