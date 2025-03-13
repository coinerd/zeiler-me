import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, BookOpen, CalendarDays, GraduationCap, History, School } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeidelbergerSchulgeschichtenAnfaengePage() {
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
            Die Anfänge
          </h1>
          <h2 className="text-2xl text-muted-foreground">
            Frühe Schulgeschichte in Heidelberg
          </h2>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Die Geschichte der Schulbildung in Heidelberg reicht weit zurück und ist eng mit der Entwicklung der Stadt und der Universität verbunden. Bereits im Mittelalter gab es in Heidelberg verschiedene Bildungseinrichtungen, die den Grundstein für das heutige Schulwesen legten.
        </p>
        <p className="leading-7">
          Auf dieser Seite erfahren Sie mehr über die frühen Anfänge des Heidelberger Schulwesens, von den ersten Klosterschulen bis hin zu den ersten städtischen Bildungseinrichtungen im späten Mittelalter und der frühen Neuzeit.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-10 space-y-10">
        {/* Section 1: Klosterschulen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Die ersten Klosterschulen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Die frühesten Bildungseinrichtungen in der Region Heidelberg waren Klosterschulen, die hauptsächlich der Ausbildung des geistlichen Nachwuchses dienten. Das Kloster Lorsch, gegründet im 8. Jahrhundert, unterhielt eine solche Schule, in der junge Mönche in Latein, Theologie und den sieben freien Künsten (Grammatik, Rhetorik, Dialektik, Arithmetik, Geometrie, Musik und Astronomie) unterrichtet wurden.
            </p>
            <p className="leading-7">
              Auch das Kloster Schönau im nahegelegenen Odenwald, gegründet 1142, verfügte über eine Klosterschule. Diese Schulen waren jedoch nicht für die breite Bevölkerung zugänglich, sondern dienten primär der Ausbildung von Klerikern und gelegentlich Söhnen des Adels.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung einer mittelalterlichen Klosterschule]
                </div>
              </div>
            </div>
            <p className="leading-7">
              In diesen frühen Schulen wurde der Unterricht von Mönchen erteilt, die selbst eine entsprechende Ausbildung erhalten hatten. Der Fokus lag auf dem Lesen und Schreiben lateinischer Texte, insbesondere religiöser Schriften, sowie auf dem liturgischen Gesang. Die Schüler lernten durch wiederholtes Abschreiben und Auswendiglernen, kritisches Denken oder eigenständiges Forschen waren nicht Teil des Lehrplans.
            </p>
          </div>
        </section>

        {/* Section 2: Domschule und Stiftsschulen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Domschule und Stiftsschulen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Mit der Gründung des Bistums Worms, zu dem Heidelberg im frühen Mittelalter gehörte, entstand auch eine Domschule in Worms. Diese Schule hatte einen höheren Bildungsanspruch als die Klosterschulen und diente der Ausbildung von Weltgeistlichen, die später in den Pfarreien tätig sein sollten.
            </p>
            <p className="leading-7">
              In Heidelberg selbst gab es seit dem 12. Jahrhundert eine Stiftsschule am Heiliggeistspital. Diese Schule, die dem Heiliggeistspital angegliedert war, diente zunächst der Ausbildung von Chorknaben und späteren Kanonikern des Stifts. Mit der Zeit öffnete sie sich jedoch auch für Söhne wohlhabender Bürger, die eine grundlegende Bildung erhalten sollten.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Das Heiliggeistspital</CardTitle>
                <CardDescription>Zentrum der frühen Bildung in Heidelberg</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Das Heiliggeistspital wurde 1196 von Pfalzgraf Konrad von Hohenstaufen gegründet und diente ursprünglich der Versorgung von Armen und Kranken. Im 13. Jahrhundert wurde es zu einem Kollegiatstift umgewandelt, an dem auch eine Schule eingerichtet wurde. Diese Stiftsschule gilt als Vorläufer des späteren Heidelberger Gymnasiums.
                </p>
                <p className="leading-7 mt-4">
                  Der Unterricht fand in Räumen des Spitals statt und umfasste zunächst hauptsächlich religiöse Inhalte. Mit der Zeit wurden jedoch auch weltliche Fächer wie Latein, Rhetorik und Arithmetik unterrichtet. Die Schüler waren überwiegend Chorknaben, die im Gottesdienst mitwirkten, aber auch Söhne wohlhabender Bürger, die eine grundlegende Bildung erhalten sollten.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Die Stiftsschule am Heiliggeistspital war lange Zeit die einzige formale Bildungseinrichtung in Heidelberg und legte den Grundstein für die spätere Entwicklung des städtischen Schulwesens. Der Unterricht wurde von Kanonikern des Stifts erteilt, die selbst eine theologische Ausbildung hatten. Die Schüler lernten Lesen, Schreiben und Rechnen, aber auch Latein und Kirchengesang.
            </p>
          </div>
        </section>

        {/* Section 3: Gründung der Universität und ihre Auswirkungen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            Gründung der Universität und ihre Auswirkungen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Ein entscheidender Wendepunkt in der Bildungsgeschichte Heidelbergs war die Gründung der Universität im Jahr 1386 durch Kurfürst Ruprecht I. Die Universität Heidelberg ist die älteste Universität auf dem Gebiet des heutigen Deutschlands und zog von Anfang an Gelehrte und Studenten aus ganz Europa an.
            </p>
            <p className="leading-7">
              Die Gründung der Universität hatte auch Auswirkungen auf das Schulwesen in Heidelberg. Es entstand ein Bedarf an vorbereitenden Schulen, die Schüler auf ein Universitätsstudium vorbereiten konnten. So entwickelte sich aus der Stiftsschule am Heiliggeistspital nach und nach eine Art Vorbereitungsschule für die Universität.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung der Gründung der Universität Heidelberg 1386]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Die Universität selbst hatte anfangs vier Fakultäten: die Artistenfakultät (später philosophische Fakultät), die theologische, die juristische und die medizinische Fakultät. Die Artistenfakultät diente als eine Art Grundstudium, das alle Studenten durchlaufen mussten, bevor sie sich in einer der höheren Fakultäten spezialisieren konnten. In gewisser Weise übernahm die Artistenfakultät damit auch Funktionen einer höheren Schule.
            </p>
            <p className="leading-7">
              Die Universität brachte auch neue pädagogische Ideen nach Heidelberg. Der Humanismus, der im 15. und 16. Jahrhundert an der Universität Einzug hielt, betonte die Bedeutung der klassischen Bildung und der alten Sprachen, insbesondere des Griechischen neben dem Lateinischen. Diese humanistischen Ideen beeinflussten nach und nach auch die Schulbildung in Heidelberg.
            </p>
          </div>
        </section>

        {/* Section 4: Erste städtische Schulen */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <School className="mr-2 h-5 w-5" />
            Erste städtische Schulen
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Im späten Mittelalter und der frühen Neuzeit entstanden in Heidelberg die ersten städtischen Schulen, die nicht mehr direkt der Kirche unterstanden. Diese Entwicklung war Teil eines allgemeinen Trends in den Städten des Heiligen Römischen Reiches, in denen das erstarkende Bürgertum ein eigenes Bildungswesen aufbaute.
            </p>
            <p className="leading-7">
              Die erste städtische Schule in Heidelberg wurde vermutlich im 15. Jahrhundert gegründet. Sie diente der Ausbildung von Bürgersöhnen, die später im Handel, im Handwerk oder in der Stadtverwaltung tätig sein sollten. Der Unterricht umfasste Lesen, Schreiben und Rechnen, aber auch praktische Kenntnisse für den Handel wie Buchhaltung und Warenkunde.
            </p>
            <Card className="my-6">
              <CardHeader>
                <CardTitle>Die deutsche Schule</CardTitle>
                <CardDescription>Bildung für das Bürgertum</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-7">
                  Neben der lateinischen Schule, die auf ein Universitätsstudium vorbereitete, entstand in Heidelberg im 16. Jahrhundert auch eine "deutsche Schule". In dieser Schule wurde auf Deutsch unterrichtet, nicht auf Latein, und der Fokus lag auf praktischen Kenntnissen für das bürgerliche Leben.
                </p>
                <p className="leading-7 mt-4">
                  Die deutsche Schule war für Kinder gedacht, die später einen Handwerksberuf erlernen oder im Handel tätig sein sollten. Sie lernten Lesen, Schreiben und Rechnen, aber auch praktische Fertigkeiten wie das Verfassen von Geschäftsbriefen oder die Grundlagen der Buchhaltung. Der Unterricht wurde von einem Schulmeister erteilt, der vom Stadtrat angestellt wurde.
                </p>
              </CardContent>
            </Card>
            <p className="leading-7">
              Mit der Reformation, die in der Kurpfalz 1556 unter Kurfürst Ottheinrich eingeführt wurde, kam es zu weiteren Veränderungen im Schulwesen. Die Reformation betonte die Bedeutung der Bildung für alle Gläubigen, da jeder in der Lage sein sollte, die Bibel selbst zu lesen. Dies führte zu einem Ausbau des Schulwesens und zur Gründung weiterer Schulen, auch für Mädchen.
            </p>
            <p className="leading-7">
              In der Schulordnung von 1556, die Kurfürst Ottheinrich erließ, wurde erstmals eine allgemeine Schulpflicht für Jungen und Mädchen festgelegt. Auch wenn diese Schulpflicht in der Praxis nicht immer durchgesetzt werden konnte, markiert sie doch einen wichtigen Schritt in der Entwicklung des Heidelberger Schulwesens.
            </p>
          </div>
        </section>

        {/* Section 5: Gründung des Gymnasiums */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            Gründung des Gymnasiums
          </h2>
          <div className="space-y-4">
            <p className="leading-7">
              Ein Meilenstein in der Heidelberger Schulgeschichte war die Gründung des Gymnasiums im Jahr 1546. Kurfürst Friedrich II. gründete diese höhere Schule, die auf ein Universitätsstudium vorbereiten sollte. Das Gymnasium, das zunächst als "Paedagogium" bezeichnet wurde, hatte seinen Sitz im ehemaligen Dominikanerkloster in der Heidelberger Altstadt.
            </p>
            <p className="leading-7">
              Das Gymnasium war eine humanistische Bildungsanstalt, in der großer Wert auf die klassischen Sprachen Latein und Griechisch gelegt wurde. Der Unterricht umfasste aber auch Hebräisch, Rhetorik, Dialektik, Arithmetik, Musik und Astronomie. Die Schüler, ausschließlich Jungen, waren in der Regel zwischen 10 und 16 Jahre alt.
            </p>
            <div className="my-6 relative h-60 overflow-hidden rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-muted-foreground text-sm text-center p-4">
                  [Historische Darstellung des Heidelberger Gymnasiums im 16. Jahrhundert]
                </div>
              </div>
            </div>
            <p className="leading-7">
              Das Gymnasium stand unter der Aufsicht der Universität, und viele seiner Lehrer waren zugleich Dozenten an der Universität. Dies gewährleistete ein hohes akademisches Niveau und eine enge Verzahnung von Schule und Universität. Die besten Absolventen des Gymnasiums erhielten Stipendien für ein Universitätsstudium.
            </p>
            <p className="leading-7">
              Das Heidelberger Gymnasium entwickelte sich im Laufe der Jahrhunderte weiter und besteht bis heute als Kurfürst-Friedrich-Gymnasium (KFG). Es ist damit eine der ältesten kontinuierlich bestehenden Schulen in Deutschland und hat die Bildungsgeschichte Heidelbergs maßgeblich geprägt.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Zeitleiste: Frühe Heidelberger Schulgeschichte</h2>
          <div className="space-y-6">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">8. Jahrhundert</p>
                <p className="text-muted-foreground">Gründung der Klosterschule in Lorsch</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">1142</p>
                <p className="text-muted-foreground">Gründung des Klosters Schönau mit Klosterschule</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">1196</p>
                <p className="text-muted-foreground">Gründung des Heiliggeistspitals in Heidelberg</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">13. Jahrhundert</p>
                <p className="text-muted-foreground">Einrichtung einer Stiftsschule am Heiliggeistspital</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">1386</p>
                <p className="text-muted-foreground">Gründung der Universität Heidelberg durch Kurfürst Ruprecht I.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">15. Jahrhundert</p>
                <p className="text-muted-foreground">Gründung der ersten städtischen Schule in Heidelberg</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div className="h-full w-0.5 bg-border"></div>
              </div>
              <div className="pb-6">
                <p className="text-lg font-semibold">1546</p>
                <p className="text-muted-foreground">Gründung des Heidelberger Gymnasiums (Paedagogium) durch Kurfürst Friedrich II.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <CalendarDays className="h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">1556</p>
                <p className="text-muted-foreground">Einführung der Reformation in der Kurpfalz und Erlass einer Schulordnung mit allgemeiner Schulpflicht durch Kurfürst Ottheinrich</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Related Links */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Weitere Informationen</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/buerger-und-bauern">
            <Button variant="outline" className="w-full justify-start">
              <School className="mr-2 h-4 w-4" />
              Bürger und Bauern
            </Button>
          </Link>
          <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-18te-jahrhundert">
            <Button variant="outline" className="w-full justify-start">
              <History className="mr-2 h-4 w-4" />
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
