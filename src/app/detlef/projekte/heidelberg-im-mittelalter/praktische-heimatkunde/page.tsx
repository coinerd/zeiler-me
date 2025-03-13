import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Praktische Heimatkunde | ZEILER.me",
  description: "Im Frühjahr 1986 haben wir, die Lehrer der Gruppe MOPÄD, den Schüler-Videofilm 'Zeitensprung' über die Geschichte des Heiligenbergs in mehreren Heidelberger Schulen vorgeführt.",
}

export default function PraktischeHeimatkundePage() {
  return (
    <ArticleLayout 
      title="Praktische Heimatkunde" 
      subtitle="Ein medienpädagogisches Projekt zum mittelalterlichen Heidelberg"
      author="Detlef Zeiler"
    >
      <p className="lead">
        Im Frühjahr 1986 haben wir, die Lehrer der Gruppe MOPÄD, den im Jahr zuvor fertiggestellten Schüler-Videofilm ("Zeitensprung") über die Geschichte des Heiligenbergs in mehreren Heidelberger Schulen vorgeführt. Eine achte Klasse im Bunsen-Gymnasium wollte daraufhin ebenfalls einen Film zu einem lokalgeschichtlichen Thema drehen.
      </p>

      <h2>Vom Lehrplan zum Filmprojekt</h2>
      <p>
        Vom Lehrplan her bot sich das Thema Mittelalter an. Die meisten Schüler setzten als Maßstab für ihre Filmpläne sofort eigene Film- und Fernseherlebnisse an und malten sich gruselige Henkerszenen über das ach so finstere Mittelalter aus. Und perfekt wie im Kino sollte alles werden. Wir mußten erst einmal gegensteuern, um die Erwartungen dann nicht zu enttäuschen.
      </p>
      <p>
        Schon die ersten Einführungen in die Bedienung der Kamera und des Videorecorders an zwei Nachmittagen machten deutlich, daß wir kaum mit Vorerfahrungen rechnen konnten.
      </p>

      <h2>Historische Recherche</h2>
      <p>
        Die erste Phase unserer Arbeit bestand in der historischen Recherche. Dafür hatten wir die denkbar besten Voraussetzungen, da für den Herbst des Jahres 1986 die 600-Jahr-Feier der Universität angekündigt war und überall die Vorbereitungen auf Hochtouren liefen (große Teile der während des 30-jährigen Krieges entführten "Bibliotheca Palatina" sollten in die Stadt zurückkommen).
      </p>
      <p>
        Zudem war das Mittelalter über das Buchereignis "Der Name der Rose", das gerade verfilmt worden war, zu einem öffentlichen Gesprächsthema ersten Ranges geworden. Öffentliche Ereignisse erleichtern Medienprojekte in der Schule: Kaum ein Experte, der uns nicht gerne unterstützt hätte, das Stadtarchiv stand uns offen - und im Keller der Friedrich-Ebert-Schule fanden wir sogar ein Modell des mittelalterlichen Heidelberg, das der inzwischen verstorbene Schulleiter, Wolfgang Wanek, aus Lego-Teilen erbaut hat.
      </p>
      <p>
        Hier ließen sich die räumlichen Verhältnisse und der Aufbau der alten Stadt darstellen, und zusätzlich konnten die Schüler Kameraführung, Arbeit mit Bildausschnitten und dergleichen schon ein wenig einüben.
      </p>

      <div className="bg-muted/50 p-6 rounded-lg my-6 border border-border">
        <h3 className="text-xl font-semibold mb-3">Gruppenarbeit im Medienprojekt</h3>
        <p>
          Wichtig für die Projektarbeit mit Schülern ist die richtige Aufteilung in Gruppen. Einige Schüler sind besser bei der Recherche, bei der Befragung der Experten und dem Sammeln von Informationen. Andere sind besser bei der technischen Arbeit: Filmen, begleitende Fotoaufnahmen, Tonaufnahmen. Wieder andere können besser Spielszenen inszenieren und umsetzen.
        </p>
        <p className="mt-3">
          Und genau hier liegt eine wichtige Aufgabe für Lehrer oder Medienpädagogen, die historische Unterrichtsprojekte leiten: Die eher fachlichen Arbeiten (die natürlich schon durch das Verlassen der Lernwelt Schule reizvoll werden) müssen ergänzt werden durch unterhaltsame Passagen, die sich ins Fachliche einfügen lassen.
        </p>
      </div>

      <h2>Spielszenen als didaktisches Element</h2>
      <p>
        Wie schon beim Film zur Geschichte des Heiligenberges haben wir auch hier wieder Spielszenen gefunden, welche die Aussagen der Experten sowohl verstärken oder kontrastieren, als auch zur Auflockerung der Arbeit und des späteren Filmes dienen. Dabei mußte das Schulgebäude bisweilen verlassen werden, um in alten Hinterhöfen, in Kellergewölben, auf dem Marktplatz oder kleinen Seitengassen zu spielen und zu filmen.
      </p>

      <h3>Marktplatzszenen und Schandstrafen</h3>
      <p>
        Begonnen haben wir mit einer Szene auf dem Marktplatz, auf dem sich damals ein großer Teil des öffentlichen Lebens abspielte. Auch Bestrafungen bei kleineren Vergehen, für die ein städtisches Gericht zuständig war, wurden damals hier zur Abschreckung vorgenommen.
      </p>
      <p>
        Wir haben einige Originalinstrumente zur Drangsalierung der Verurteilten nachgebaut:
      </p>
      <ul className="list-disc pl-6 space-y-1 my-4">
        <li>Einen Drehkäfig ("Triller")</li>
        <li>Einen "Fußstock"</li>
        <li>Eine "Halsgeige" ("Zankgeige")</li>
      </ul>
      <p>
        Alles Gegenstände, die Herr Wanek, der ehemalige Leiter der Ebertschule, und einer unserer beratenden Experten in einem Modell nachgebaut hatten. Die öffentliche Vorführung der "Schandstrafen", die wir auf dem Marktplatz filmten, fand viele belustigte Zuschauer. Der "Pranger" scheint seinen Reiz zu haben.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg my-6 border border-border">
        <h3 className="text-xl font-semibold mb-3">Historische Reflexion</h3>
        <p>
          Die Schadenfreude der früheren Zuschauer konnten wir aber nur mit Mühe nachvollziehen. In einigen anderen Ländern, z.B. in den USA ("shaming punishments") oder etlichen "Entwicklungsländern" scheint es ähnliche Schandstrafen auch heute noch zu geben.
        </p>
        <p className="mt-3">
          Mit dem Blick zurück auf eine weit zurückliegende fremde Kultur in der eigenen Stadt sieht man eventuell auch genauer noch bestehende Unterschiede im Hinblick auf fremde Kulturen in unserer Zeit.
        </p>
      </div>

      <h2>Fazit: Heimatkunde als lebendige Geschichtsvermittlung</h2>
      <p>
        Unser Filmprojekt zum mittelalterlichen Heidelberg hat gezeigt, wie wertvoll praktische Heimatkunde für das Geschichtsverständnis sein kann. Durch die aktive Auseinandersetzung mit historischen Quellen, Experten und die kreative Umsetzung in Spielszenen haben die Schülerinnen und Schüler nicht nur Wissen erworben, sondern auch wichtige Medienkompetenzen entwickelt.
      </p>
      <p>
        Die Verbindung von lokalgeschichtlicher Recherche mit medienpädagogischer Projektarbeit schafft Lernerfahrungen, die weit über den regulären Unterricht hinausgehen und nachhaltig im Gedächtnis bleiben.
      </p>
    </ArticleLayout>
  )
}
