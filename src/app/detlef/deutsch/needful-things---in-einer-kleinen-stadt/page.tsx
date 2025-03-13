import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, BookMarked, Film, Quote } from "lucide-react";
import Link from "next/link";

export default function NeedfulThingsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Needful Things - &quot;In einer kleinen Stadt&quot;
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Literaturanalyse</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <BookMarked className="h-3 w-3" />
              <span>Stephen King</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Film className="h-3 w-3" />
              <span>Verfilmung</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold">In einer kleinen Stadt – von Stephen King</h2>
        
        <p>
          Die Welt wird zum Dorf. Die Menschen haben es leichter, sich auch über Grenzen und Entfernungen hinweg kennenzulernen. 
          Das muss aber nicht nur Gutes verheißen! Vielleicht schlittern wir ja in eine Gesellschaft hinein, wie sie Stephen King 
          in seinem 1991 im Verlag Hoffmann und Campe erschienenen Roman &quot;In einer kleinen Stadt&quot; beschreibt?
        </p>
        
        <p>
          Ähnlich wie im „Besuch der alten Dame" von Friedrich Dürrenmatt (1956) wird hier das Verhalten von Menschen gezeigt, 
          die sich aus einer Gier heraus in unmoralisches Verhalten locken lassen. &quot;Needful Things&quot; heißt der englische Titel, 
          der die Handlung weitaus besser beschreibt: Ein ortsfremder Herr namens Leland Gaunt eröffnet in der fiktiven Kleinstadt 
          Castle Rock ein Geschäft, in dem jeder etwas findet, was eine Schwäche oder eine verborgene Sehnsucht anspricht.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookMarked className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Der teuflische Handel</h3>
            </div>
            <p>
              Der Preis wird von Gaunt nach Gutdünken bestimmt, meist unter dem vom Kunden geschätzten Wert, sodass jeder, 
              ist das Begehren einmal geweckt und stetig am Wachsen, sich seinen Wunschgegenstand leisten kann. Das Ganze hat 
              nur einen Haken: Er - oder sie - muss nun einem Mitbürger, gegen den sowieso eine Animosität zu schwelen scheint, 
              einen &quot;Streich&quot; spielen: Zunächst geht es nur um das Einschmeißen von Fenstern, das Verbreiten von Gerüchten, 
              dann aber auch um das Aufstechen von Autoreifen und zunehmend um mehr.
            </p>
            <p className="mt-4">
              Die Streiche erscheinen den einzelnen Bürgern zunächst harmlos, sie vertiefen nur die in der Stadt sowieso schwelenden 
              Konflikte. Konflikte, wie sie heute überall in Nachbarschaftsstreits sichtbar werden und mit denen Gerichte sich bis 
              zum Überdruss beschäftigen müssen.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookMarked className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Die Eskalation des Bösen</h3>
            </div>
            <p>
              Der Horror entsteht nicht durch plötzlich auftretende brutale Exzesse eines Irren oder durch die Rache einer 
              &quot;alten Dame&quot; (wie bei Dürrenmatt), sondern durch die Steigerung latenter und ganz banaler Konflikte. Am Ende 
              entsteht ein Alptraum von Hass und Gewalt, als Gaunt immer mehr Stadtbewohner gegeneinander aufhetzt und Intrigen 
              spinnt, die den Hass verstärken und in Mord und Totschlag eskalieren lassen.
            </p>
            <p className="mt-4">
              Das Buch ist nicht nur für „Horror"-Fans lesenswert, und wem die über 800 Seiten des Buches eine zu große Hürde 
              bereiten, der sollte zumindest den 1993 erschienenen Film ansehen, den man inzwischen preisgünstig als DVD erwerben 
              kann. Auch hier versteht man das teuflische Prinzip der Gier, das mit ein wenig Menschenkenntnis bei fast jedem in 
              Gang gesetzt werden kann.
            </p>
            <p className="mt-4">
              Wer eine halbwegs funktionierende Gesellschaft destabilisieren will, der könnte heute eventuell mit den Methoden 
              eines Leland Gaunt arbeiten...
            </p>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="bg-muted/40 p-6 rounded-md border my-8">
          <div className="flex items-center gap-3 mb-4">
            <Quote className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Textauszug (Kapitel 15)</h3>
          </div>
          <p className="italic text-sm mb-4">
            Hier ein Ausschnitt aus dem 15. Kapitel, in dem der Polizist Norris Ridgewick eine kleine Untat für seine heißersehnte 
            „Bazun"-Angelrute durchführen muss. Stephen King beschreibt (nicht nur an dieser Stelle) sehr genau die gedanklichen 
            Rechtfertigungen, die sich jemand zubereitet, wenn er einem Unschuldigen etwas Böses antut:
          </p>

          <div className="space-y-4 text-sm">
            <p>
              Norris Ridgewick war nicht beim Angeln.<br />
              Norris Ridgewick schaute in Hugh Priests Schlafzimmer­fenster.
            </p>
            <p>
              Hugh lag wie ein schlaffer Haufen auf dem Bett und schnarchte zur Decke empor. Er hatte nichts an außer urin­fleckigen 
              Boxershorts. Seine großen, starkknochigen Hände umkrampften ein verfilztes Fell. Norris war sich seiner Sa­che nicht 
              sicher - Hughs Hände waren sehr groß und das Fenster sehr schmutzig aber es sah aus wie ein alter, mot­tenzerfressener 
              Fuchsschwanz. Aber es spielte ohnehin kei­ne Rolle, was es war; wichtig war nur, daß Hugh schlief.
            </p>
            <p>
              Norris kehrte zu der Stelle zurück, wo sein Privatwagen hinter Hughs Buick auf der Auffahrt parkte. Er öffnete die 
              Beifahrertür und schaute hinein. Sein Fangkorb stand auf dem Boden. Die Bazun-Rute lag auf dem Rücksitz - er hatte 
              das Gefühl gehabt, daß es sicherer sein würde, wenn er sie bei sich hatte.
            </p>
            <p>
              Sie war noch immer unbenutzt. Der Grund dafür war ganz simpel: er hatte Angst davor, sie zu nutzen. Er hatte sie 
              gestern zum Castle Lake mitgenommen, gebrauchsfertig ausgerüstet - und dann hatte er in dem Augenblick gezö­gert, 
              als er die Rute bereits über der Schulter hielt und den Köder zum ersten Mal auswerfen wollte.
            </p>
            <p>
              Was ist, dachte er, wenn ein großer Fisch nach dem Köder schnappt? Smokey zum Beispiel?
            </p>
            <p>
              Smokey war eine alte Forelle und eine Legende der Fi­scher von Castle Rock. Er war angeblich mehr als sechzig 
              Zentimeter lang, verschlagen wie ein Wiesel, kräftig wie ein Hermelin, zäh wie Leder. Wenn man den Oldtimern glau­ben 
              durfte, dann wimmelte es in Smokeys Kiefern von dem Stahl von Anglern, die ihn an den Haken bekommen hatten - und 
              dann nicht imstande gewesen waren, ihn zu halten.
            </p>
            <p>
              Was ist, wenn er die Rute zerbricht?
            </p>
            <p>
              Die Idee, daß eine Forelle, selbst eine große wie Smokey (wenn es Smokey überhaupt gab), eine Bazun-Rute zerbre­chen 
              könnte, schien absurd, aber Norris hielt es immerhin für möglich. Und wenn man bedachte, wieviel Pech er in letzter 
              Zeit gehabt hatte, war denkbar, daß es tatsächlich passierte. Er konnte in seinem Kopf das spröde Knacken hö­ren, 
              die Verzweiflung spüren, die ihn beim Anblick der in zwei Stücke zerbrochenen Rute überkam, eines davon auf den 
              Grund des Bootes, das andere daneben schwimmend. Und wenn eine Rute einmal zerbrochen war, dann war der Ofen aus - 
              man konnte sie nur noch wegwerfen.
            </p>
            <p>
              Also war es darauf hinausgelaufen, daß er die alte Zebco benutzte. Gestern hatte es zum Abendessen keinen Fisch ge­geben. 
              Aber er hatte von Mr. Gaunt geträumt. In dem Traum hatte Mr. Gaunt hüfthohe Stiefel getragen und einen mit Fliegen 
              vollgesteckten alten Filzhut. Er saß in einem Ru­derboot auf dem Castle Lake, ungefähr zehn Meter entfernt, während 
              Norris am Westufer vor der alten Hütte seines Dad stand, die vor zehn Jahren abgebrannt war. Er hatte da­gestanden 
              und zugehört, während Mr. Gaunt redete. Mr. Gaunt hatte Norris an sein Versprechen erinnert, und Norris war mit einem 
              Gefühl absoluter Gewißheit aufgewacht: daß er gestern recht daran getan hatte, auf die Bazun zu verzich­ten und statt 
              dessen die alte Zebco zu benutzen. Die Bazun- Rute war zu gut, viel zu gut. Es wäre geradezu kriminell, sie einer 
              Gefahr auszusetzen, indem man sie tatsächlich be­nutzte.
            </p>
            <p>
              Norris öffnete seinen Fangkorb. Er holte das lange Messer heraus, das er zum Ausweiden der Fische benutzte, und ging 
              hinüber zu Hughs Buick.
            </p>
            <p>
              Niemand verdient es mehr als dieser alte Säufer, erklärte er sich selbst; aber irgend etwas in ihm war nicht dieser 
              Mei­nung. Irgend etwas sagte ihm, daß er einen ganz bösen Feh­ler machte, von dem er sich möglicherweise nie wieder 
              erho­len würde. Er war Polizist; zu seinem Job gehörte es, Leute festzunehmen, die das taten, was er jetzt vorhatte. 
              Es war Vandalismus, genau das war es, wenn man es recht bedach­te, und Vandalen waren böse Buben.
            </p>
            <p>
              Es ist Ihre Entscheidung, Norris. Die Stimme von Mr. Gaunt meldete sich in seinen Gedanken plötzlich zu Wort. Es ist 
              Ihre Angelrute. Und das Recht des freien Willens ist Ihnen von Gott gegeben. Sie haben eine Wahl. Sie haben immer eine 
              Wahl. Aber ...«
            </p>
            <p>
              Die Stimme in Norris' Kopf beendete den Satz nicht. Sie brauchte es auch nicht. Norris wußte, was passieren würde, 
              wenn er sich abwendete. Wenn er zu seinem Wagen zurück­kehrte, würde er die Bazun in zwei Stück zerbrochen vorfin­den. 
              Jede Wahl hatte ihre Folgen. Man konnte in Amerika al­les bekommen, was man wollte, vorausgesetzt, man war bereit, 
              dafür zu zahlen. Wenn man nicht zahlen konnte oder sich zu zahlen weigerte, blieben alle Wünsche unerfüllt.
            </p>
            <p>
              Außerdem würde Hugh mir dasselbe antun, dachte Nor­ris verdrossen. Und nicht einmal für eine so schöne Angel­rute 
              wie meine Bazun. Hugh Priest würde seiner eigenen Mutter die Kehle durchschneiden für eine Flasche Old Duke und ein 
              Päckchen Luckies.
            </p>
            <p>
              Auf diese Weise sprach er sich von Schuld frei. Als das Ir­gendetwas in ihm zu protestieren versuchte, ihm zu sagen 
              versuchte, er sollte doch bitte nachdenken, bevor er es tat, nachdenken, da unterdrückte er es. Dann bückte er sich 
              und machte sich daran, die Reifen von Hughs Buick aufzuschlit­zen. Während er es tat, steigerte sich seine Begeisterung 
              wie die von Myra Evans. Als Zugabe zertrümmerte er noch die Scheinwerfer und die Heckleuchten des Buick. Er beendete 
              sein Werk, indem er unter den Scheibenwischer auf der Fah­rerseite einen Zettel klemmte, auf dem stand:
            </p>
            <p>
              Nachdem seine Arbeit erledigt war, schlich er wieder an das Schlafzimmerfenster. Das Herz hämmerte in seiner schma­len 
              Brust. Hugh Priest schlief nach wie vor tief und fest und umklammerte diesen schäbigen Streifen Fell.
            </p>
            <p>
              Wem in Gottes Namen kann so ein schmutziges altes Ding etwas bedeuten? fragte sich Norris. Er hält es fest, als wäre 
              es sein Teddybär.
            </p>
            <p>
              Er kehrte zu seinem Wagen zurück, stieg ein, nahm den Gang heraus und ließ seinen alten Käfer lautlos die Auffahrt 
              hinabrollen. Den Motor startete er erst, als sich der Wagen auf der Straße befand; dann fuhr er davon, so schnell er 
              konnte. Er hatte Kopfschmerzen. Sein Magen und seine Ein­geweide rebellierten. Und er redete sich ununterbrochen ein, 
              daß es keine Rolle spielte; er fühlte sich wohl, verdammt noch mal, er fühlte sich wirklich wohl.
            </p>
            <p>
              Es funktionierte nicht, bis er zwischen den Sitzen hin­durch nach hinten griff und mit der linken Hand die schlan­ke, 
              geschmeidige Rute umfaßte. Da spürte er, wie ihn wie­der Ruhe überkam.
            </p>
            <p className="text-right">
              (Kapitel XV, Seite 538-541)
            </p>
          </div>
        </div>

        <div className="bg-muted/40 p-6 rounded-md border mt-8">
          <h3 className="text-xl font-semibold mb-4">Weiterführende Gedanken</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Welche Parallelen gibt es zwischen Kings fiktiver Kleinstadt und unserer heutigen Gesellschaft?</li>
            <li>Inwiefern spiegelt der Roman menschliche Schwächen und Begierden wider?</li>
            <li>Wie können wir uns gegen Manipulationen schützen, die auf unsere verborgenen Wünsche abzielen?</li>
            <li>Welche Rolle spielt das Gewissen in Kings Roman und wie wird es dargestellt?</li>
            <li>Vergleichen Sie die Handlung mit Dürrenmatts "Der Besuch der alten Dame" - welche Gemeinsamkeiten und Unterschiede gibt es?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
