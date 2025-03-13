import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Neuenheim wird Stadtteil von Heidelberg | ZEILER.me",
  description: "Detlef Zeiler im Gespräch mit Otto Jäger und Ludwig Merz über die Eingemeindung Neuenheims als Stadtteil von Heidelberg.",
}

export default function NeuenheimPage() {
  return (
    <ArticleLayout 
      title="Neuenheim wird Stadtteil von Heidelberg" 
      author="Detlef Zeiler"
    >
      <p className="lead">
        Detlef Zeiler im Gespräch mit Otto Jäger und Ludwig Merz: Sie kannten noch viele, die die Eingemeindung Neuenheims selbst miterlebt hatten. Waren die Neuenheimer damals glücklich, endlich nach Heidelberg einge­meindet zu sein?
      </p>

      <h2>Otto Jaeger:</h2>
      <p>
        Im Grunde war es eine ungeheure Belastung für die Bevölkerung von Neuenheim, als Neuenheim noch ein Dorf war. Denn urplötzlich hat man Neuen­heim entdeckt, am Hang des Hei­ligenberges, aber auch in der Ebe­ne, gewissermaßen als Luftkur­ort, als Villenort auf der Nordseite von Heidelberg.
      </p>

      <p>
        Der Hauptteil der Äcker war ja im Besitz vom Kloster Schönau. Und die waren dann willig, Bau­gelände abzugeben. Und so kam's dann allmählich, dass da ein Haus gebaut worden ist und dort. So ist die Gartenstraße entstanden, das ist die heutige Schröderstraße. Und so hat sich das dann ausgeweitet. Der Mönchhof hat sich nach Sü­den gewandt. Und Neuenheim hat dann Platz gewonnen nach Nord­en. In der Höhe der Rahmengasse und der Schröderstraße hat sich diese Bewegung getroffen. Da wurden die ersten großen Häuser hingestellt. Mein Haus in der Schrö­derstraße 11 ist 1891 gebaut wor­den von einer Freifrau. Deren Mann war Reichsrat - und war dann in Pension in Zürich. Die haben in Neuenheim ihr Haus gebaut. Das war an und für sich ein Villenvier­tel. Die Architekten waren scharf drauf, besonders die Schröders vom Mönchhof; das waren Archi­tekten, und die haben dann grö­ßere Objekte da hingestellt.
      </p>

      <h3>Soziale Unterschiede</h3>
      <h4>Wir haben historischen Boden und wir sind was…</h4>
      <p>
        Man hat unterschieden: Die einen waren 'Urneuemer'. Der Stamm der Bauern, die sind ein paar hundert Jahre zurückgegan­gen. Und die waren für sich ge­schlossen. Das hat da vielleicht an der Rahmengasse aufgehört. Die letzten Bauern waren dort noch: Christmann usw. Und die 'Neuemer' ware stolze Leut. Dass dort ein Kastell war von den Römern her, das hat man gewusst. "Mir habe da historischer Bode und mir sind was!" Und die Eingemeindung ist ja eigentlich nur vonstatten gegan­gen, weil Neuenheim durch die Bautätigkeit das Gas hat legen müssen und das Wasser, alle die Instrumente, die eben zum Haus­bau nötig waren. Und das hat man eben nicht mehr gekonnt. Die waren überschuldet. Und Heidel­berg hat schon immer darauf ge­lechzt, des 'Neiene' einzunehmen und über die Brücke zu kommen. (lacht)
      </p>

      <p>
        Und da war ja 1877 die neue Brücke gebaut worden. Das war natürlich ein Riesenfortschritt für Neuenheim. Neuenheim, Hand­schuhsheim und die ganze Berg­straße hatten jahrelang drum ge­kämpft, dass diese Brücke gebaut worden ist, dass die 'B 3' verlängert wird auf dieser Seite. Und nach­dem die Brück gebaut war, hat eine rege Bautätigkeit stattgefun­den. Die Brückenstraße ist die Fort­setzung der 'B 3' von Basel nach Hamburg...
      </p>

      <h2>Ludwig Merz:</h2>
      <p>
        Die hat Format: Gastwirtschaften, Cafés, und vor allem Kaufhäuser. Das ist eine re­präsentative Straße.
      </p>

      <h2>Otto Jaeger:</h2>
      <p>
        Die Brücke war das Entscheidende!
      </p>

      <h3>Was war davor?</h3>

      <h2>Otto Jaeger:</h2>
      <p>
        Da war eigentlich nichts. Es war noch nicht einmal eine Überfahrt dort.
      </p>

      <h3>Was für Leute sind denn dann nach Neuenheim gezogen?</h3>

      <h2>Otto Jaeger:</h2>
      <p>
        Professoren haben ihre Häuser gebaut, und zwar die Neuenheimer Landstraße entlang sind die Häuser gebaut worden. Und dann war in der Bergstraße ein vornehmes Viertel: ein Notar hat dort gewohnt, Gerichtsbeamte usw. Das waren also die "besseren Leut". Und die haben dann auch meistens bei den Handwerkern in Neuenheim arbeiten lassen. Also Schuster und Schneider und dann vor allen Dingen Schlosser und Schreiner. In meiner Jugend gab es schon gute Schlossereibetriebe; die haben so sechs bis acht Gesel­len gehabt. Da war schon was los bei denen. Die haben dann gut leben können, die sind reich geworden dadurch, dass sie sich qualifiziert haben als gute Maurer oder Schreiner usw, was man eben gebraucht hat, um ein Haus zu bauen.
      </p>

      <p>
        Wenn ich mich recht erinnere, ist in dieser Zeit das Lehrersemi­nar gebaut worden in der Keplerstraße. Die Blumenthalstraße ist da verlängert worden. Auf der an­deren Seite der Blumenthaistraße ist das Gelände mindestens 10 Meter abgefallen nach Hand­schuhsheim rüber.
      </p>
    </ArticleLayout>
  )
}
