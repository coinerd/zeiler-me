import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CalendarDays, History, MessageSquare, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NeuenheimInterviewKrauchPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte/neuenheim"
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
              <MessageSquare className="mr-1 h-4 w-4" />
              Interview
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <History className="mr-1 h-4 w-4" />
              Zeitzeuge
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Krieg der Knöpfe
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Interview mit Helmut Krauch
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          In diesem Interview erzählt Helmut Krauch, geboren 1927 in Neuenheim, von seinen Kindheitserinnerungen an den Stadtteil in den 1930er Jahren. Besonders lebendig schildert er den "Krieg der Knöpfe" - die Rivalität zwischen den Kindern aus Neuenheim und Handschuhsheim, die an den gleichnamigen Roman von Louis Pergaud erinnert.
        </p>
        <p className="leading-7">
          Das Interview wurde im Rahmen des Projekts "Neuenheim - Geschichte und Geschichten" im Jahr 2010 geführt und gibt einen authentischen Einblick in das Alltagsleben im Heidelberger Stadtteil Neuenheim vor dem Zweiten Weltkrieg.
        </p>
      </div>

      {/* Interviewee Information */}
      <div className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Der Zeitzeuge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="aspect-square bg-muted relative overflow-hidden rounded-md">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-xl font-semibold">Helmut Krauch</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  <span>Geboren 1927 in Heidelberg-Neuenheim</span>
                </div>
                <p className="leading-7">
                  Helmut Krauch wuchs in der Ladenburger Straße in Neuenheim auf. Sein Vater war Handwerker und betrieb eine kleine Schreinerei. Nach dem Besuch der Volksschule in Neuenheim absolvierte Helmut eine Lehre als Elektriker. Im Zweiten Weltkrieg wurde er als junger Mann zum Kriegsdienst eingezogen und geriet in amerikanische Gefangenschaft. Nach dem Krieg kehrte er nach Neuenheim zurück, wo er bis zu seinem Tod im Jahr 2015 lebte.
                </p>
                <p className="leading-7">
                  Helmut Krauch war für seine lebendigen Erzählungen über das alte Neuenheim bekannt und engagierte sich in der lokalen Geschichtsforschung. Er sammelte Fotografien, Dokumente und Erinnerungsstücke aus der Geschichte des Stadtteils und stellte sie für verschiedene Ausstellungen und Publikationen zur Verfügung.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interview Content */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Das Interview</h2>
        
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-md">
              <p className="font-medium">
                Herr Krauch, wie haben Sie Ihre Kindheit in Neuenheim in Erinnerung?
              </p>
            </div>
            <div className="pl-4 border-l-2 border-muted">
              <p className="leading-7">
                Meine Kindheit in Neuenheim war wunderbar. Wir hatten damals viel mehr Freiheiten als die Kinder heute. Nach der Schule waren wir immer draußen, haben auf den Straßen und Wiesen gespielt. Es gab ja kaum Autos, und die Straßen gehörten uns Kindern. Wir kannten jeden Winkel in Neuenheim, jede Gasse, jeden Hinterhof. Und wir kannten auch fast alle Leute, die hier wohnten. Neuenheim war damals noch viel dörflicher, obwohl es schon zu Heidelberg gehörte. Viele Familien lebten seit Generationen hier, und es gab noch viele Handwerksbetriebe und kleine Läden.
              </p>
              <p className="leading-7 mt-4">
                Besonders schön war es im Sommer, wenn wir zum Neckar gingen. Wir haben dort gebadet und sind von den Bäumen ins Wasser gesprungen. Das war natürlich verboten, aber die Erwachsenen haben meist ein Auge zugedrückt. Im Winter sind wir Schlitten gefahren, am Philosophenweg oder auf dem Heiligenberg. Und wenn der Neckar zugefroren war, was damals noch öfter vorkam als heute, konnten wir sogar auf dem Eis Schlittschuh laufen.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-md">
              <p className="font-medium">
                Sie haben den "Krieg der Knöpfe" erwähnt. Was hat es damit auf sich?
              </p>
            </div>
            <div className="pl-4 border-l-2 border-muted">
              <p className="leading-7">
                Ja, der "Krieg der Knöpfe" - das war die Rivalität zwischen uns Neuenheimer Kindern und denen aus Handschuhsheim. Obwohl die beiden Stadtteile direkt nebeneinander liegen, gab es eine starke Rivalität. Wir haben uns regelrechte Schlachten geliefert, mit Stöcken als Schwertern und selbstgebauten Schilden aus alten Kisten. Manchmal haben wir auch mit Steinschleudern geschossen, aber meist nur auf Blechdosen oder andere Ziele, nicht aufeinander.
              </p>
              <p className="leading-7 mt-4">
                Der Name "Krieg der Knöpfe" kam daher, dass wir den "Gefangenen" die Knöpfe von der Kleidung abgeschnitten haben. Das war eine Art Trophäe. Wer viele Knöpfe gesammelt hatte, war ein Held. Natürlich gab es dann zu Hause Ärger, wenn man mit fehlenden Knöpfen nach Hause kam. Meine Mutter hat immer geschimpft und die Knöpfe wieder angenäht. Aber am nächsten Tag ging es weiter.
              </p>
              <p className="leading-7 mt-4">
                Es war nie wirklich böse gemeint, und oft haben wir nach den "Schlachten" auch wieder zusammen gespielt. Es war mehr ein Spiel, eine Art Ritual. Und es hat uns zusammengeschweißt. Wir Neuenheimer hielten zusammen gegen die "Hendschemer", wie wir die Handschuhsheimer nannten. Heute muss ich darüber lachen, aber damals war es todernst für uns.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-md">
              <p className="font-medium">
                Wie sah der Alltag in Neuenheim in den 1930er Jahren aus?
              </p>
            </div>
            <div className="pl-4 border-l-2 border-muted">
              <p className="leading-7">
                Der Alltag war geprägt von Arbeit und einfachen Vergnügungen. Die meisten Leute arbeiteten hart, sechs Tage die Woche. Mein Vater stand jeden Morgen um fünf Uhr auf und arbeitete bis spät in den Abend in seiner Schreinerei. Meine Mutter kümmerte sich um den Haushalt und half im Gemüsegarten, den wir am Stadtrand hatten. Fast jede Familie hatte so einen Garten, in dem Gemüse und Obst angebaut wurde.
              </p>
              <p className="leading-7 mt-4">
                Die Straßen in Neuenheim waren damals noch nicht alle gepflastert, und es gab viel mehr kleine Geschäfte als heute. An jeder Ecke gab es einen Bäcker, einen Metzger oder einen Kolonialwarenladen. Die Leute kauften täglich ein, denn Kühlschränke waren noch selten. Der Milchmann kam mit seinem Wagen, und wir Kinder holten mit unseren Kannen die Milch. Auch der Kohlenhändler kam regelmäßig, denn geheizt wurde mit Kohleöfen.
              </p>
              <p className="leading-7 mt-4">
                Am Sonntag gingen die meisten Familien in die Kirche, entweder in die evangelische Kirche in der Lutherstraße oder in die katholische in der Uferstraße. Danach gab es oft einen Spaziergang am Neckar oder auf dem Heiligenberg. Manchmal sind wir auch mit der Straßenbahn in die Stadt gefahren, um Verwandte zu besuchen oder ins Kino zu gehen. Das war immer ein besonderes Ereignis.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-md">
              <p className="font-medium">
                Wie haben Sie die Veränderungen in Neuenheim im Laufe der Jahrzehnte erlebt?
              </p>
            </div>
            <div className="pl-4 border-l-2 border-muted">
              <p className="leading-7">
                Die Veränderungen waren enorm. Nach dem Krieg begann der Wiederaufbau, und Neuenheim entwickelte sich immer mehr zu einem modernen Stadtteil. Viele alte Häuser wurden abgerissen und durch Neubauten ersetzt. Die kleinen Läden verschwanden nach und nach, und große Supermärkte kamen. Die Straßen wurden asphaltiert, und der Verkehr nahm zu. Das dörfliche Neuenheim meiner Kindheit gibt es heute kaum noch.
              </p>
              <p className="leading-7 mt-4">
                Besonders einschneidend war der Bau des Neuenheimer Feldes in den 1960er Jahren. Dort, wo früher Felder und Gärten waren, entstanden die Universitätsinstitute und Kliniken. Das hat viele neue Menschen nach Neuenheim gebracht, vor allem Studierende und Universitätsangehörige. Dadurch hat sich auch die soziale Struktur verändert. Früher lebten hier hauptsächlich Handwerker, Arbeiter und kleine Angestellte. Heute wohnen hier viele Akademiker und wohlhabende Leute.
              </p>
              <p className="leading-7 mt-4">
                Was ich besonders bedauere, ist der Verlust der Gemeinschaft. Früher kannte jeder jeden, und man half sich gegenseitig. Heute kennen viele nicht einmal ihre Nachbarn. Aber es gibt auch positive Veränderungen. Die Lebensqualität ist in vieler Hinsicht besser geworden. Die Häuser haben moderne Heizungen und Bäder, die medizinische Versorgung ist besser, und es gibt mehr kulturelle Angebote. Und durch die vielen internationalen Studierenden und Wissenschaftler ist Neuenheim weltoffener und bunter geworden.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-md">
              <p className="font-medium">
                Was möchten Sie den heutigen Neuenheimern mit auf den Weg geben?
              </p>
            </div>
            <div className="pl-4 border-l-2 border-muted">
              <p className="leading-7">
                Ich würde den heutigen Neuenheimern raten, sich mehr für die Geschichte ihres Stadtteils zu interessieren. Es ist wichtig zu wissen, woher man kommt und wie sich alles entwickelt hat. Neuenheim hat eine reiche Geschichte, die weit über die Eingemeindung nach Heidelberg zurückreicht. Schon die Römer hatten hier eine Siedlung, und im Mittelalter war Neuenheim ein wichtiges Dorf am Neckar.
              </p>
              <p className="leading-7 mt-4">
                Außerdem würde ich mir wünschen, dass die Gemeinschaft wieder gestärkt wird. Nachbarschaftshilfe, Vereine, gemeinsame Feste - all das trägt dazu bei, dass man sich in seinem Stadtteil zu Hause fühlt. Neuenheim ist mehr als nur ein Wohnort, es ist ein Stück Heimat mit einer eigenen Identität.
              </p>
              <p className="leading-7 mt-4">
                Und schließlich sollten die Neuenheimer darauf achten, dass ihr Stadtteil lebenswert bleibt. Der zunehmende Verkehr, die steigenden Mieten, der Verlust von Grünflächen - das sind Probleme, die angegangen werden müssen. Neuenheim sollte ein Ort bleiben, an dem Menschen aller Generationen und sozialen Schichten gut leben können, nicht nur ein exklusives Viertel für Wohlhabende.
              </p>
              <p className="leading-7 mt-4">
                Wenn ich an meine Kindheit in Neuenheim zurückdenke, dann erinnere ich mich vor allem an das Gefühl der Freiheit und der Zugehörigkeit. Dieses Gefühl wünsche ich auch den Kindern, die heute hier aufwachsen. Sie sollen Neuenheim als einen Ort erleben, an dem sie sich entfalten können und an den sie sich ihr Leben lang gerne erinnern werden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/neuenheim/ueberblick">
            <Button variant="outline" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Überblick: Neuenheim
            </Button>
          </Link>
          <Link href="/detlef/projekte/neuenheim/ist-halb-europa">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
              Neuenheim ist halb Europa
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
