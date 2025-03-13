import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, History, School, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichtenBuergerBauernPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte/heidelberger-schulgeschichten"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zur Übersicht
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <History className="mr-1 h-4 w-4" />
              Historisch
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Bildung
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Bürger und Bauern
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Bildung für verschiedene Stände
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Im Heidelberg der frühen Neuzeit war Bildung stark vom sozialen Stand geprägt. Während die Söhne wohlhabender Bürger und Adeliger Zugang zu höherer Bildung hatten, blieb den Kindern einfacher Bauern und Handwerker oft nur eine rudimentäre Schulbildung. Diese Seite beleuchtet die unterschiedlichen Bildungswege und -chancen für verschiedene gesellschaftliche Gruppen im historischen Heidelberg.
        </p>
        <p className="leading-7">
          Erfahren Sie mehr über die Entwicklung des städtischen Schulwesens, die Bildung auf dem Land und die langsame Demokratisierung der Bildung vom 16. bis zum 18. Jahrhundert.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Städtisches Schulwesen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Das städtische Schulwesen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              In Heidelberg entwickelte sich ab dem 16. Jahrhundert ein differenziertes städtisches Schulwesen. Neben dem Gymnasium, das auf ein Universitätsstudium vorbereitete, entstanden verschiedene Schultypen für unterschiedliche Bevölkerungsgruppen und Bildungsziele.
            </p>
            <p className="leading-7">
              Die "Deutsche Schule" oder "Teutsche Schule" war für Kinder des Bürgertums gedacht, die später im Handel oder Handwerk tätig sein sollten. Hier wurde auf Deutsch unterrichtet, nicht auf Latein, und der Fokus lag auf praktischen Kenntnissen wie Lesen, Schreiben, Rechnen und berufsbezogenen Fertigkeiten.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung einer deutschen Schule im 16. Jahrhundert]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Für die ärmeren Stadtbewohner gab es die "Armenschule", die von der Stadt oder von wohltätigen Stiftungen finanziert wurde. Hier erhielten die Kinder eine elementare Bildung, die vor allem auf religiöse Unterweisung und die Grundlagen des Lesens und Schreibens ausgerichtet war. Der Schulbesuch war oft unregelmäßig, da die Kinder zum Familieneinkommen beitragen mussten.
            </p>
            <p className="leading-7">
              Mädchen hatten in der Regel keinen Zugang zum Gymnasium. Für sie gab es spezielle "Mädchenschulen", in denen neben Lesen, Schreiben und Religion vor allem hauswirtschaftliche Fertigkeiten vermittelt wurden. Diese Schulen wurden oft von Nonnen oder unverheirateten Frauen geleitet.
            </p>
          </div>
        </section>

        {/* Section 2: Bildung auf dem Land */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <User className="mr-2 h-5 w-5" />
            Bildung auf dem Land
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              In den Dörfern rund um Heidelberg war die Bildungssituation deutlich schlechter als in der Stadt. Dorfschulen entstanden meist erst im Laufe des 17. und 18. Jahrhunderts, oft auf Initiative der Kirche oder des Landesherrn. Vor dieser Zeit gab es in vielen Dörfern keine formale Schulbildung.
            </p>
            <p className="leading-7">
              Die Dorfschule war in der Regel eine einklassige Schule, in der Kinder verschiedenen Alters gemeinsam unterrichtet wurden. Der Lehrer, oft der Küster oder ein anderer Kirchendiener, hatte selbst nur eine begrenzte Bildung und unterrichtete neben seiner kirchlichen Tätigkeit. Der Unterricht fand häufig im Winter statt, wenn auf den Feldern weniger Arbeit anfiel.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Der Dorfschulmeister</CardTitle>
                <CardDescription>Lehrer, Küster und Gemeindemitarbeiter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Der typische Dorfschulmeister im 17. und 18. Jahrhundert war ein Mann mit vielfältigen Aufgaben. Neben dem Unterrichten der Kinder war er oft auch als Küster in der Kirche tätig, leitete den Kirchenchor, spielte die Orgel und übernahm verschiedene Verwaltungsaufgaben in der Gemeinde.
                </p>
                <p className="leading-7 mt-4">
                  Seine Ausbildung war meist rudimentär. Viele Dorfschulmeister hatten selbst nur die Dorfschule besucht und wurden dann vom Pfarrer oder einem erfahrenen Schulmeister angelernt. Erst im Laufe des 18. Jahrhunderts entstanden die ersten Lehrerseminare, in denen Dorfschullehrer systematisch ausgebildet wurden.
                </p>
                <p className="leading-7 mt-4">
                  Die Bezahlung war gering und setzte sich aus verschiedenen Quellen zusammen: ein kleines Gehalt von der Gemeinde, Naturalien von den Bauern und Schulgeld von den Eltern. Viele Schulmeister betrieben nebenbei eine kleine Landwirtschaft oder übten ein Handwerk aus, um ihren Lebensunterhalt zu sichern.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Der Unterricht in der Dorfschule konzentrierte sich auf religiöse Unterweisung, Lesen, etwas Schreiben und die Grundrechenarten. Die Kinder lernten aus dem Katechismus, der Bibel und speziellen Fibeln. Der Schwerpunkt lag auf dem Auswendiglernen und der moralischen Erziehung, nicht auf dem Verstehen oder kritischen Denken.
            </p>
            <p className="leading-7">
              Die Schulpflicht, die in der Kurpfalz bereits im 16. Jahrhundert eingeführt wurde, konnte auf dem Land oft nicht durchgesetzt werden. Viele Kinder besuchten die Schule nur unregelmäßig oder gar nicht, weil sie bei der Feldarbeit helfen mussten oder weil die Eltern den Wert der Bildung nicht erkannten.
            </p>
          </div>
        </section>

        {/* Section 3: Bildung für verschiedene Stände */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Bildung für verschiedene Stände
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die Bildungschancen in der frühen Neuzeit waren stark vom sozialen Stand abhängig. Adelige Kinder wurden oft von Hauslehrern unterrichtet oder besuchten spezielle Ritterakademien, in denen neben akademischen Fächern auch höfische Umgangsformen, Reiten, Fechten und moderne Sprachen gelehrt wurden.
            </p>
            <p className="leading-7">
              Die Söhne wohlhabender Bürger, Kaufleute und Beamter besuchten das Gymnasium und anschließend oft die Universität. Sie konnten Karrieren in der Verwaltung, im Rechtswesen, in der Kirche oder als Ärzte anstreben. Die Töchter dieser Familien erhielten in der Regel eine hauswirtschaftliche Bildung, manchmal ergänzt durch Musik, Literatur und Fremdsprachen.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Darstellung verschiedener Bildungswege für unterschiedliche Stände]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Handwerkerkinder lernten in der deutschen Schule die Grundlagen des Lesens, Schreibens und Rechnens, bevor sie eine Lehre begannen. Die Berufsbildung erfolgte dann im Rahmen des Zunftwesens durch die praktische Ausbildung bei einem Meister. Nach der Lehrzeit gingen viele Gesellen auf Wanderschaft, um ihre Kenntnisse zu erweitern und Erfahrungen zu sammeln.
            </p>
            <p className="leading-7">
              Die Kinder von Bauern und Tagelöhnern hatten die schlechtesten Bildungschancen. Viele von ihnen besuchten die Schule nur sporadisch oder gar nicht und blieben Analphabeten. Ihre Ausbildung bestand hauptsächlich aus der praktischen Mitarbeit in der Landwirtschaft, wo sie die notwendigen Fertigkeiten von ihren Eltern lernten.
            </p>
          </div>
        </section>

        {/* Section 4: Bildungsreformen im 17. und 18. Jahrhundert */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <History className="mr-2 h-5 w-5" />
            Bildungsreformen im 17. und 18. Jahrhundert
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Im Laufe des 17. und 18. Jahrhunderts kam es zu wichtigen Bildungsreformen, die auch in Heidelberg und Umgebung Auswirkungen hatten. Der Pietismus, eine protestantische Erneuerungsbewegung, betonte die Bedeutung der Bildung für alle Bevölkerungsschichten und förderte den Ausbau des Volksschulwesens.
            </p>
            <p className="leading-7">
              Kurfürst Karl Theodor, der von 1742 bis 1799 regierte, führte mehrere Bildungsreformen durch. Er gründete 1763 die Kurpfälzische Akademie der Wissenschaften in Mannheim und erließ 1770 eine neue Schulordnung, die den Schulbesuch für alle Kinder verpflichtend machte und einheitliche Standards für den Unterricht festlegte.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Die Schulordnung von 1770</CardTitle>
                <CardDescription>Ein Meilenstein in der pfälzischen Bildungsgeschichte</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Die von Kurfürst Karl Theodor erlassene Schulordnung von 1770 war ein wichtiger Schritt zur Vereinheitlichung und Verbesserung des Schulwesens in der Kurpfalz. Sie regelte detailliert den Schulbesuch, die Unterrichtsinhalte, die Qualifikation der Lehrer und die Finanzierung der Schulen.
                </p>
                <p className="leading-7 mt-4">
                  Alle Kinder zwischen 6 und 14 Jahren waren zum Schulbesuch verpflichtet, und die Eltern mussten Schulgeld zahlen. Für arme Familien übernahm die Gemeinde oder eine Stiftung die Kosten. Der Unterricht umfasste Religion, Lesen, Schreiben, Rechnen und praktische Kenntnisse für das tägliche Leben.
                </p>
                <p className="leading-7 mt-4">
                  Die Schulordnung legte auch fest, dass jede Gemeinde eine Schule unterhalten musste und dass die Lehrer eine angemessene Ausbildung haben sollten. In der Praxis dauerte es jedoch noch Jahrzehnte, bis diese Vorgaben flächendeckend umgesetzt wurden.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Die Ideen der Aufklärung beeinflussten auch die Pädagogik. Reformer wie Johann Heinrich Pestalozzi und Johann Bernhard Basedow entwickelten neue pädagogische Konzepte, die das Kind in den Mittelpunkt stellten und eine ganzheitliche Bildung anstrebten. Diese Ideen fanden nach und nach auch Eingang in die Schulpraxis in Heidelberg und Umgebung.
            </p>
            <p className="leading-7">
              Trotz aller Reformen blieb die Bildung bis weit ins 19. Jahrhundert hinein stark vom sozialen Stand geprägt. Erst mit der Einführung der allgemeinen Schulpflicht und dem Ausbau des öffentlichen Schulwesens im 19. Jahrhundert wurden die Bildungschancen allmählich demokratisiert.
            </p>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/anfaenge">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Die Anfänge
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-18te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <School className="mr-2 h-4 w-4" />
              Das 18. Jahrhundert
            </Button>
          </Link>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-10 text-center">
        <Separator className="my-8" />
        <p className="text-sm text-muted-foreground">
          © 1996-2025 Detlef Zeiler - Alle Rechte vorbehalten
        </p>
      </div>
    </div>
  )
}
