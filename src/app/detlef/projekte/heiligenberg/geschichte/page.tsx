import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { History, Landmark, MapPin, Shovel, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GeschichteDesHeiligenbergsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Die Geschichte des Heiligenbergs
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <History className="h-3 w-3" />
              <span>Geschichte</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Landmark className="h-3 w-3" />
              <span>Archäologie</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Heidelberg</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p>
          Die 1978 wiederaufgenommenen Restaurierungsarbeiten am Kloster St. Michael hatten es sich zum Ziel gesetzt, 
          dem Besucher ein räumliches Nachempfinden der ehemaligen Klosteranlage zu ermöglichen. Verantwortlich für das 
          Gelingen dieses Vorhabens waren neben den Geldgebern vor allem P. Marzolff, Bauforscher am Institut für Ur- und 
          Frühgeschichte der Universität Heidelberg, der engagierte Architekt B. Burger und auch B. Heukemes, der immer 
          wieder sein Wissen zur Verfügung stellte.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {/* Restaurierungsarbeiten */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shovel className="h-5 w-5 text-primary" />
              <span>Restaurierungsarbeiten und Herausforderungen</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Leider musste man während der Arbeiten entdecken, dass in den vergangenen Jahrzehnten neben beaufsichtigten 
              Grabungen auch Raubgrabungen vorgenommen worden waren, die Beschädigungen und Zerstörungen zur Folge gehabt hatten. 
              Auch der zur nationalsozialistischen Zeit eingesetzte Aufräumdienst hatte vielfach mehr geschadet denn genutzt.
            </p>
            <p>
              Türen waren dort eingesetzt worden, wo keine hingehörten und andere wiederum waren zugemauert worden. So hatte man 
              lange Zeit nicht gewusst, welchem Zweck die einzelnen Räume gedient hatten. Es ist eigentlich nur den Aufzeichnungen 
              des Architekten Koch die Chance zu verdanken, den ehemaligen Zustand der Ruine wiederherstellen zu können. Dieser 
              hatte seit 1911 immer wieder dort oben gearbeitet.
            </p>
            <p>
              Obwohl jetzt oft vom Boden her aufgebaut werden musste, entspricht alles heute Sichtbare dem ursprünglichen Zustand 
              und entspringt keineswegs den Phantasien der Archäologen und Architekten. Ihrer mühevollen Kleinarbeit ist es zu 
              verdanken, dass der Besucher des Heiligenbergs heute die Möglichkeit hat, eine recht ungewöhnliche und einzigartige 
              Klosteranlage betrachten zu können.
            </p>
            <p>
              Lediglich die einst wohl imposante Höhe der Bauten ist aufgrund fehlenden Materials nicht rekonstruierbar und nur 
              auf dem Merianstich von 1645 nachzuempfinden.
            </p>
          </CardContent>
        </Card>

        {/* Frühgeschichte */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              <span>Frühgeschichte und Besiedlung</span>
            </CardTitle>
            <CardDescription>
              Das bedeutendste Ergebnis der Grabungen ist, dass nunmehr feststeht, dass der Heiligenberg seit ca. 1000 v. Chr. 
              lange Zeit ununterbrochen besiedelt war.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Jungsteinzeit und Bronzezeit</h3>
                <p>
                  Das älteste auf dem Heiligenberg gefundene Stück stammt aus der mittleren Jungsteinzeit. Es handelt sich um eine 
                  Lanzenspitze. Sie ist freilich kein Beweis für eine dauerhafte Besiedlung des Berges zu jener Zeit und wird eher 
                  von Jägern aus dem Neckarvorland stammen, die den Berg für die Holzausbeute und als Weideland nutzten.
                </p>
                <p>
                  Eindeutig scheint der Berg seit dem Ende der Bronzezeit dicht besiedelt gewesen zu sein. Hier beginnen die Funde 
                  sich zu häufen. Eine andauernde Siedlungstätigkeit durch ein und dieselbe keltische Bevölkerungsgruppe beginnt und 
                  dauert über Jahrhunderte hinweg an, bis ca. 250 v. Chr.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Keltische Siedlung</h3>
                <p>
                  Die Größe dieser Siedlung entsprach in etwa der heutigen Heidelberger Altstadt und konnte gut an die 2000 Menschen 
                  aufnehmen. Außergewöhnlich war, dass auch der Gipfel selbst besiedelt war. Im Laufe der Zeit entstanden dann auch 
                  außerhalb der Ringwälle, die vermutlich aus fortgeschrittener keltischer Zeit stammen, den Berg hinab Behausungen.
                </p>
                <p>
                  Die zentrale Funktion dieser Siedlung lässt sich zum einen an ihrer Größe, zum anderen aber auch daran erkennen, 
                  dass dort oben Eisenbarren gefunden worden sind. Die Herstellung von Eisenbarren ist insofern ein Hinweis auf die 
                  Bedeutung des Ortes, da sie das Zahlungsmittel jener Zeit waren und nur in Fürstenburgen hergestellt werden durften.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Warum der Heiligenberg?</h3>
              <p>
                Dass ausgerechnet der Heiligenberg Sitz einer bedeutenden Siedlung geworden ist, hatte sicherlich mehrere Gründe:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Er befindet sich an einer südwestlichen Ecke des mittleren Odenwaldes und grenzt sich deutlich von anderen Bergen ab</li>
                <li>Im Gegensatz zum Königstuhl, der nach hinten flach verläuft, fällt er an allen vier Seiten steil ab, so dass er leicht zu verteidigen war</li>
                <li>Von seinem Gipfel hat man eine hervorragende Sicht über die Rheinebene und in das Neckartal hinein</li>
                <li>An seinem Fuß kreuzen sich Handelswege durch die Rheinebene</li>
                <li>Der Ort war geeignet, in dem hier flachen Neckar eine Furt anzulegen</li>
              </ul>
            </div>

            <div className="mt-4">
              <p className="italic text-muted-foreground">
                Ein ungelöstes Rätsel ist geblieben, warum die Siedlung auf dem Heiligenberg ca. 250 v. Chr. aufgegeben wurde. 
                Dass sie aufgegeben wurde, ist offensichtlich, da für diese Zeit plötzlich kaum noch Funde vorzuweisen sind, 
                während sie vorher und einige Zeit später wieder reichlich vorhanden sind.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Römische Zeit */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" />
              <span>Römische Zeit und Merkurtempel</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Im 16./17. Jahrhundert ist man noch von der Aussagekraft der römischen Inschriftsteine überzeugt gewesen, 
              die zahlreiche Hinweise z.B. auf Merkurtempel beinhalten. Das beweisen z.B. die Schriften Melanchthons. 
              Später erschien es unglaubhaft, dass es im rechtsrheinischen Gebiet ein römisches Gipfelheiligtum gegeben haben soll.
            </p>
            <p>
              Die kürzlich durchgeführten Grabungen haben endlich Klarheit geschaffen. Man hat die Überreste eines römischen 
              Merkurtempels gefunden. Leider mussten sie, um das Gesamtbild der Klosteranlage herstellen zu können, wieder 
              zugeschüttet werden. Für den Besucher wurden die Umrisse im Langhaus aber mit Pflastersteinen kenntlich gemacht.
            </p>
            <p>
              Es ist anzunehmen, dass zur Zeit der Errichtung des Tempels noch Überreste der keltischen Anlage sichtbar gewesen sind. 
              Unter dem Tempel hat man die Reste einer mutmaßlichen keltischen Opfergrube ausmachen können. Wahrscheinlich hatte der 
              Ort im Bewusstsein der Bevölkerung einen gewissen Stellenwert beibehalten.
            </p>
            <p>
              Denn auch die Weihung eines Tempels für den Gott Mercurius Cimbrianus, der germanischen Ursprungs ist, oder auch die 
              für einen keltischen Mercurius Visucius, lassen die Annahme zu, dass die Römer ihr Heiligtum bewusst an einem Ort 
              errichtet haben, an dem sie nichtrömischen Vorstellungen Raum geben konnten - ein Beispiel für kluge Kulturpolitik?
            </p>
            <p>
              Außer dem Merkurtempel lässt die Anzahl der gefundenen Trümmerstücke vermuten, dass sich dort oben noch weitere 
              Tempel befunden haben. Man fand Trümmer, die zu einem beheizbaren Gebäude gehört haben. Hierbei hat es sich vielleicht 
              um die Herberge für die Pilger gehandelt.
            </p>
            <p>
              Eine militärische Nutzung des Berges durch die Römer ist unwahrscheinlich. Es mag sein, dass sich auf dem vorderen 
              Gipfel ein Wachtturm befunden hat. Vor allem ist er aber ein kultischer Ort gewesen.
            </p>
          </CardContent>
        </Card>

        {/* Frühmittelalter */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Frühmittelalter und Klostergründung</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bereits in der späten Antike sind die römischen Gebäude, möglicherweise von frühen Christen, zerstört worden. 
              Das betraf aber nur ihre Innenausstattung, die üppig und anspruchsvoll gewesen ist. Das Mauerwerk des obengenannten 
              Tempels blieb bestehen und wurde später als kleine Grabkapelle benützt. Man hat zahlreiche merowingische Gräber gefunden. 
              Das älteste stammt spätestens aus der Zeit um 600 n. Chr.
            </p>
            <p>
              Die Siedlung dieser Neubewohner könnte, verstreuten Funden nach zu schließen, ebenfalls auf dem Berg gelegen haben. 
              Das wäre für unsere Gegend im frühsten Mittelalter ein bemerkenswertes Faktum.
            </p>
            <p>
              Im 7./8. Jahrhundert wird dann das Leben auf dem Berg wieder intensiver. Die Ringwälle werden wieder instandgesetzt, 
              und manches deutet daraufhin, dass ein fränkischer Königshof entstand. Man kann vermuten, dass er der Sitz eines 
              königlichen Beauftragten gewesen ist und zentrale Funktionen dort ausgeübt wurden. Teilweise waren es recht prächtige Bauten.
            </p>
            <p>
              Als in spätkarolingischer Zeit die fränkische Herrschaft gefestigt war, benötigten die Könige die gesicherten 
              Höhenpositionen nicht mehr und verlagerten ihre Machtzentren in die Ebene. Dies betraf auch die Anlage auf dem Heiligenberg, 
              so dass Ludwig III. sich 872 entschloss, den "Aberinsberg" mit seinen ganzen Besitztümern dem Benediktinerkloster Lorsch zu schenken.
            </p>
            <p>
              Diese Schenkung ist aus mehreren Urkunden bekannt. In diesen Urkunden ist stets die Rede von einer "Aberinsburg". 
              Das hatte man bisher für einen Schreibfehler gehalten. Jetzt weiß man, dass es sich tatsächlich um eine Burganlage 
              und nicht nur um einen relativ wertlosen Berg gehandelt hat.
            </p>
          </CardContent>
        </Card>

        {/* Kloster St. Michael */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-primary" />
              <span>Kloster St. Michael</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Wie der Berg, der ursprünglich "Aberinsberg" hieß, zu dem Namen "Allerheiligenberg" oder verkürzt "Heiligenberg" 
              gekommen ist, lässt sich nicht eindeutig klären. Ein Hinweis könnten die beiden Klöster St. Michael und St. Stefan 
              gewesen sein sowie die Tatsache, dass auf dem Berg schließlich ein namentlich bekannter Heiliger verehrt worden ist. 
              Dies war der ehemalige Abt des Klosters Hirsau, Friedrich, der nach seiner Vertreibung hier als Asylant Zuflucht fand.
            </p>
            <p>
              Eine weitere Möglichkeit für die Namensgebung ist die Verbindung mit dem Kloster "Allerheiligen" im Schwarzwald, 
              von wo der Erzbischof von Mainz im 13. Jahrhundert neue Mönche auf den Heiligenberg holen ließ.
            </p>
            <p>
              In diesem Zusammenhang interessant ist auch die Benennung des Klosters St. Michael. Da sowohl Merkur als auch St. Michael 
              die Patrone sind, die die Seelen in das Reich der Toten geleiten, war das die direkte Fortführung des römischen Kultes, 
              der wie bereits erwähnt wiederum an einheimische Kulte anknüpfte.
            </p>
            <p>
              Bald nach dem Jahr 1000 kam es zur Planung einer großen neuen Klosteranlage, die aber erst in mehreren Etappen den heute 
              verfolgbaren Umfang annahm, d.h. eine Länge von ca. 95 m und eine Breite von ca. 44 m erreichte.
            </p>
            <p>
              Es ist kein Zufall, dass die Pläne in diese Zeit zurückgehen. Um 1000 herum beginnt überall in Europa eine rege 
              Kirchenbautätigkeit. Das hatte einen einfachen Grund. Jesus hatte gesagt "Mein Reich währe 1000 Jahre". Daher glaubte man, 
              der Weltuntergang stünde kurz bevor. Um ihre Seelen zu retten, gingen die Menschen in die Klöster oder spendeten ihr 
              Vermögen der Kirche.
            </p>
            <p>
              Während nun der Platz in den Klöstern zu eng wurde, hatte man gleichzeitig die nötigen Mittel, um bauliche Erweiterungen 
              vorzunehmen. Man wartete mehrere Jahre, und als der Weltuntergang nicht kam, fing man an zu bauen.
            </p>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Bauliche Besonderheiten</h3>
              <p>
                Die Klosteranlage auf dem Heiligenberg weist einige bauliche Besonderheiten auf:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  Statt wie sonst üblich wurde der Kreuzgang im Anschluss an die Ostteile der Kirche, also in östlicher Verlängerung 
                  der Kirchenachse, angelegt. Dadurch verblieben ihm statt vier nur drei Seiten.
                </li>
                <li>
                  Neben dem rechten Kreuzgang wurde ein besonderer Raum eingerichtet: wohl ein Kapitelsaal. Wenn die Erklärung zutrifft, 
                  dann würde es sich um einen der ältesten Kapitelsäle der europäischen Klosterarchitektur handeln.
                </li>
                <li>
                  In seiner Mitte befindet sich im Boden ein Loch, das man lange Zeit für eine Zisterne gehalten hat. Es scheint sich 
                  eher um einen Gerner (Ossuarium) zu handeln, d.h. um einen Raum, der die Gebeine aus aufgelassenen Mönchsgräbern aufnahm.
                </li>
                <li>
                  Eine weitere wichtige Besonderheit ist der geräumige Vorhof westlich vor der Kirche. Er war nicht ein Eingangshof 
                  (die Kirche betrat man von der Seite her), sondern Begräbnisstätte, in der man vornehme Tote, die als Laien nicht in 
                  der Klausur bestattet werden konnten, zur Ruhe bettete - unmittelbar über den frühen Gräbern aus fränkischer Zeit.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Ende des Klosters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              <span>Ende des Klosters und Verfall</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Unklar erschien bisher die Endphase des Klosters St. Michael, da aus ihr kaum Urkunden vorhanden sind. 
              Aufgrund der letzten Ausgrabungen darf man nun annehmen, dass es einen nicht geringen Wohlstand hatte und auch noch, 
              im Gegensatz zu vielen anderen Klöstern, die unruhigen Zeiten des Bauernkrieges überstand. Es wurde wohl erst aufgegeben, 
              als in der Kurpfalz die Reformation endgültig eingeführt wurde.
            </p>
            <p>
              Eine Episode aus der Spätzeit des Klosters ist die Geschichte mit dem Glockenturm gewesen, der 1503 einstürzte und 
              mehrere Mönche im Schlaf erschlug. Diese Geschichte erschien bisher nicht glaubhaft, da die Existenz dieses Turms 
              scheinbar noch auf Merians Stich nachzuweisen war. Bei den letzten Grabungen wurden jetzt aber an anderer Stelle Reste 
              gefunden, die dem für 1503 überlieferten Turm angehört haben dürften.
            </p>
            <p>
              Damit wäre Merians Vierungsturm ein Ersatzturm für den alten Turm, und der Stich wäre tatsächlich als eine historische 
              Quelle verwertbar. Insbesondere, da er sehr schön den baulichen Zustand des Klosters im 17. Jahrhundert darstellt.
            </p>
            <p>
              Es war zwar noch sehr viel mehr vorhanden als heute, aber wir erkennen bereits eindeutig eine bauliche Ruine, die immer 
              mehr zerfallen sollte. Dieser Vorgang hat sich beschleunigt, nachdem die Universität Heidelberg, als die neue Besitzerin, 
              den Berg 1589 als Steinbruch freigegeben hatte.
            </p>
            <p>
              Als Steinbruch diente die Ruine bis in unser Jahrhundert hinein. So erklärt sich, dass an vielen Häusern, insbesondere 
              in Handschuhsheim und in der Heidelberger Altstadt bei genauerem Hinsehen Steine entdeckt werden können, die einst 
              Bestandteil des Klosters St. Michael gewesen sind.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Links */}
      <div className="mt-10 flex justify-between">
        <Link 
          href="/detlef/projekte/heiligenberg"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>← Zurück zur Heiligenberg Übersicht</span>
        </Link>
        <Link 
          href="/detlef/projekte/heiligenberg/der-unheimliche-berg"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>Der unheimliche Berg →</span>
        </Link>
      </div>
    </div>
  );
}
