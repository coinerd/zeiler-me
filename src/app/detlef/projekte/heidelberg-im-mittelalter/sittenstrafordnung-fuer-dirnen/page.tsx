import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"
import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  title: "Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten Ott-Heinrich | ZEILER.me",
  description: "Auszug aus der Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten Ott-Heinrich des Jahres 1532.",
}

export default function SittenstrafordnungPage() {
  return (
    <ArticleLayout 
      title="Auszug aus der Sittenstrafordnung für Dirnen" 
      subtitle="Des Heidelberger Kurfürsten Ott-Heinrich des Jahres 1532"
      author="Detlef Zeiler"
    >
      <Alert className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Historisches Dokument</AlertTitle>
        <AlertDescription>
          Dieser Text ist ein historisches Dokument und spiegelt die Rechts- und Moralvorstellungen des 16. Jahrhunderts wider. 
          Die darin enthaltenen Ansichten und Strafen entsprechen nicht heutigen ethischen und rechtlichen Standards.
        </AlertDescription>
      </Alert>

      <p className="lead">
        Die folgende Sittenstrafordnung des Heidelberger Kurfürsten Ott-Heinrich aus dem Jahr 1532 gibt einen Einblick in die damaligen moralischen Vorstellungen und das Strafrecht im Bereich der Prostitution. Das Dokument zeigt die harten Strafen, die für Verstöße gegen die damaligen Sittenvorstellungen verhängt wurden.
      </p>

      <div className="my-8 p-6 bg-muted/50 rounded-lg border border-border">
        <h2 className="text-xl font-semibold mb-4 text-center">Sittenstrafordnung für Dirnen des Jahres 1532</h2>
        
        <div className="prose prose-quoteless dark:prose-invert max-w-none">
          <blockquote className="italic">
            <p>
              "Wir, Ota-Henricus, Pfalzgraf bey Rheyn und des Reiches durchlauchtiger Churfürst, ordnen hiermit an und bestimmen, dass sich all seyne Unterthanen, gleich wess Standes, geziemlicher Sittlichkeit zu befleyssigen und den Verlockungen fleischlicher Lust zu enthalten haben, wenn sie nicht dieneten zum Segen der Zeugnis. &gt;&gt; Sollen deswegen sich die ledigen Weibspersonen keusch halten bis zur Ehen, und dieda, so solches missachten und nur zu ihrer Freuden sich lassen von Mannsleut beschlafen oder gar solche hierzus verführen, ihnen gar dafür noch Münz oder Wertens abnehmen, sollen strenglicher Straff unterzogen werden sonder Gnaden, so sie seyn ehrlos und ihnen gebühret Schanden und harte Peynen.
            </p>
            <p>
              Item man solch, welche zur Anzeig gebracht oder beim Sündtun ergriffen, soll verbringen sogleich in den Weibsturm am Staden. Dorten soll einer jeden fürs erst der Unzucht zur Sühnen wegen ein kräftiglicher Stockschilling erteilet werden, solcher ist zu exekutieren im Zuchtstübel im Wölben des Turmgelass. Hierzu soll die Dirnen über die Schramnen geleget werden, ihr die Röck wie das Hemd gelupfet, ihr aber auch die Schlupfen niedergestriffen, drauff ihr der Züchtiger soll 25 kräfftige Hieb auf dem nackten Arsche linieren, dass sies im sündigen Fleische schmerzhaft verspüre. Soll aber kein Knüttel benutzet werden, so ihr kein Knoch werd gebrochen, sondern ein Haselgerten von Kleinfingerstärken und 5 Fuß längen, derarten man soll ausreichlich bevorraten und schmeidig halten in einer Salzessigbeizen.
            </p>
            <p>
              Sojenige aber, dies da tan haben für Löhnung und sich gemacht haben ein lüstig und gar faul Leben, soll man zum Hofe vom Fängnis verbringen und dorten vor aller Leut und Insass zur Schanden und Abschrecknis lassen ihre Kleider vollends aus-ziehen, sie sodann in den Stock spannen. Dann soll der Meister die Karbatschen nehmen und ihr ein halbhundert Schläg verabreichen, so ein jeder recht knallet. Und soll ihr kein Schönheit, noch ihr Gewinsel oder lauthals Plärren von nutzen seyn, sondern der Profoß ist anzuhalten, ihr scharff umb die Lenden zu peitschen und sie auch an den Brüst zwicken machen, daß die Teibelstrieb ihr vergehen.
            </p>
            <p>
              Die so Mannsleut oder gar noch unwissend Burschen zum ihr Beiwohnen ver-führet, soll man die Schamgeissen reiten lassen durch die Gassen und über die Plätz. Soll das Weibsstück im kurzen Hemed, und falls solch ihr zu lang, man es ihr an den Taillen abtrennet, rittlings sich mit der blossen Studen auf die Spitzkanten, die soll seyn scharf gehobelt und die kann noch mit Pfeffer einrieben sein, aufsetzen und ihr die Bein unten geschlossen mit einer 10-pfündigen Ketten. So soll sie der Henkersbüttel umbherkarren, sie mit einer Schellen ausläuten und ihre Schanden überall verkündigen.
            </p>
            <p>
              Solche wieder, die von gieriger Geilen oder nicht halten sich sauber oder gar sind voller Ungeziefer, soll man zum Fluß niederbringen, sie dort ohn Kleider sich lassen bäuchlings zu Ufer legen, ihnen binden am Rücken zusammen Arme und Bein, sie an den Strick von der Balkertwippen hängen, dann hochziehen, daß sie gestreckt baumelet, und sie drauf niederschnellen lassen ins Wasser bis zum Grund. Dorten soll man sie getaucht verhalten für ein Paternoster, nicht gar länger, so sie nicht ersäufe. Kann man bis 10malen wiederholen, bis sie gar gründlich gewassert. Soll man die Dirnen auch ihnen zum Spott für 3 Tag lang ausstellen im Käffig, oder die Huren für 1 - 3 Jahr ins Arbeitshaus stecken und dorten bey scharfer Zucht, harter Arbeit und schmaler Kost gefänglich verwahren."
            </p>
          </blockquote>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Historischer Kontext</h2>
      
      <p>
        Die Sittenstrafordnung des Kurfürsten Ott-Heinrich (auch Ottheinrich geschrieben, 1502-1559) aus dem Jahr 1532 ist ein bemerkenswertes Dokument, das Einblick in die Moralvorstellungen und das Strafrecht des 16. Jahrhunderts gibt. Ottheinrich war ein bedeutender Herrscher der Kurpfalz und bekannt für seine Reformen, darunter auch die Einführung der Reformation in seinem Herrschaftsgebiet.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Prostitution im mittelalterlichen Heidelberg</h3>
      <p>
        Prostitution war im mittelalterlichen und frühneuzeitlichen Heidelberg, wie in vielen anderen Städten dieser Zeit, eine gesellschaftliche Realität. Obwohl moralisch verurteilt, wurde sie oft geduldet und teilweise sogar reguliert. Die Sittenstrafordnung zeigt jedoch, dass unter Kurfürst Ottheinrich ein strengeres Vorgehen gegen die Prostitution angestrebt wurde.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Strafen und öffentliche Demütigung</h3>
      <p>
        Die in der Verordnung beschriebenen Strafen spiegeln die damalige Strafpraxis wider, die stark auf körperliche Züchtigung und öffentliche Demütigung setzte. Die Bestrafung hatte mehrere Funktionen: Sie sollte die Täterinnen bestrafen, abschrecken und gleichzeitig der Bevölkerung als warnendes Beispiel dienen. Die öffentliche Zurschaustellung der Bestrafung war ein wesentlicher Bestandteil des damaligen Strafvollzugs.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Sprachliche Besonderheiten</h3>
      <p>
        Die Sprache der Verordnung ist geprägt von der frühneuhochdeutschen Sprachstufe mit ihren charakteristischen Merkmalen wie uneinheitlicher Rechtschreibung, dialektalen Einflüssen und einer Vielzahl heute nicht mehr gebräuchlicher Begriffe. Die detaillierte Beschreibung der Strafen und die drastische Wortwahl verdeutlichen die Härte des damaligen Strafrechts.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg my-8 border border-border">
        <h3 className="text-xl font-semibold mb-3">Anmerkung zur Authentizität</h3>
        <p className="mb-4">
          Bei historischen Dokumenten wie diesem ist es wichtig, ihre Authentizität kritisch zu betrachten. Die vorliegende Sittenstrafordnung wird als historisches Dokument präsentiert, sollte aber im Kontext der Geschichtsforschung und -vermittlung gesehen werden. Der Text gibt einen Einblick in die Rechts- und Moralvorstellungen der frühen Neuzeit, unabhängig von seiner genauen Überlieferung.
        </p>
        <p>
          Für ein tieferes Verständnis der Prostitution im mittelalterlichen Heidelberg empfiehlt sich auch die Lektüre des Artikels <a href="/detlef/projekte/heidelberg-im-mittelalter/das-aelteste-gewerbe" className="text-primary hover:underline">Das älteste Gewerbe im alten Heidelberg</a>, der weitere Aspekte dieses Themas beleuchtet.
        </p>
      </div>
    </ArticleLayout>
  )
}
