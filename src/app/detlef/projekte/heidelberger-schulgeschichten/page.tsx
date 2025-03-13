import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, BookOpen, Building, Clock, School } from "lucide-react"
import Link from "next/link"

export default function HeidelbergerSchulgeschichtenPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Back Link */}
      <div className="mb-4">
        <Link
          href="/detlef/projekte"
          className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="mr-1 h-3 w-3" />
          Zurück zu Projekten
        </Link>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Badge className="px-3 py-1" variant="outline">
              <School className="mr-1 h-4 w-4" />
              Bildungsgeschichte
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <Building className="mr-1 h-4 w-4" />
              Heidelberg
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Heidelberger Schulgeschichten
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Die Entwicklung des Schulwesens in Heidelberg spiegelt die Geschichte der Stadt und ihrer Gesellschaft wider. Von den mittelalterlichen Anfängen bis in die moderne Zeit zeigt sich ein faszinierender Wandel in der Bildungsgeschichte.
        </p>
        <p className="leading-7">
          Diese Dokumentation erfasst die wichtigsten Epochen und Ereignisse der Heidelberger Schulgeschichte vom Mittelalter bis ins 20. Jahrhundert.
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Chronologische Übersicht</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>Die Anfänge</CardTitle>
              </div>
              <CardDescription>
                Bildung im mittelalterlichen Heidelberg
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Eines der am wenigsten drängenden Probleme zur Zeit der Heidelberger Stadtgründung im 12. Jahrhundert war der Aufbau von Schulen. Im krassen Gegensatz zur römischen Tradition, die im Zeitalter der Völkerwanderung rasch zerfallen war, galt Bildung im Mittelalter der weltlichen Oberschicht als nicht besonders erstrebenswert.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/anfaenge" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-secondary/5">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <CardTitle>Bürger und Bauern</CardTitle>
              </div>
              <CardDescription>
                Städtewachstum vom 11. bis 14. Jahrhundert
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Vom 11. bis zum 14. Jahrhundert ist in ganz Mitteleuropa ein enormes Städtewachstum zu verzeichnen. Während um das Jahr Tausend 200 bis 300 Städte in Mitteleuropa geschätzt werden, sind es Ende des 15. Jahrhunderts 4000, darunter allerdings 2800 Orte unter 1000 Einwohner.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/buerger-und-bauern" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-accent/5">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <CardTitle>Das 18. Jahrhundert</CardTitle>
              </div>
              <CardDescription>
                Wirtschaftliche Entwicklung und Volksbildung
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Bürger und Bauern, die als Untertanen gehalten werden sollten, konnten - vor allem bei materieller Not - wenig Bildungsbeflissenheit entwickeln. Das rächte sich im 18. Jahrhundert, als eine bessere Volksbildung allmählich auch für die wirtschaftliche Entwicklung wichtiger wurde.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-18te-jahrhundert" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <CardTitle>Das 19. Jahrhundert</CardTitle>
              </div>
              <CardDescription>
                Pädagogische Aufbruchsstimmung und Staatskontrolle
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Bei aller - auch von den deutschen Dichtern mitgetragenen - pädagogischen Aufbruchsstimmung darf man nicht vergessen, dass als Erblast des 18. Jahrhunderts der stete Blick "nach oben", zum staatlichen Entscheidungsträger hin, weiterlebte. Mehr Wissen für das Volk sollte auf keinen Fall zu "Aufruhr" führen.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-19te-jahrhundert" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-secondary/5">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                <CardTitle>Das 20. Jahrhundert</CardTitle>
              </div>
              <CardDescription>
                Weltkriege und ihre Auswirkungen auf die Schulentwicklung
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Am Beginn und in der Mitte unseres Jahrhunderts stehen zwei Ereignisse, die auch in der pädagogischen Diskussion eine Rolle spielen: Der Erste und der Zweite Weltkrieg. Sowohl die Kriegsjahre von 1914 bis 1918, als auch die von 1939 bis 1945 hatten Folgen für die Schulentwicklung.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/das-20te-jahrhundert" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Special Topics Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Besondere Themen</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-accent/5">
              <div className="flex items-center gap-2">
                <School className="h-5 w-5 text-accent" />
                <CardTitle>KFG in der NS-Zeit</CardTitle>
              </div>
              <CardDescription>
                Die Lehrerschaft des Heidelberger Kurfürst-Friedrich-Gymnasiums in der Zeit des Nationalsozialismus
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                "Schluss mit dem verkalkten Paukersystem. Wir revolutionieren die Schule." Mit dieser Schlagzeile erschien das badische Kampfblatt der NSDAP ("Der Führer") am 23. Juni 1934, kurz vor dem sog. Röhm-Putsch.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/lehrerschaft-kfg-3tes-reich" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>Schülerunruhen 1968</CardTitle>
              </div>
              <CardDescription>
                Protest am Kurfürst-Friedrich-Gymnasium
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                "Einen 'nächtlichen' Sturmangriff erlebte das Kurfürst-Friedrich-Gymnasium am späten Donnerstagabend. Die schwere Glastür im Innenhof konnte dem Protest von rund 150 Schülern und Studenten gegen ein schwebendes Ausschlussverfahren, das über drei ehemalige Mitglieder der Schülermitverwaltung verhängt worden ist, keinen Einhalt gebieten."
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberger-schulgeschichten/schuelerunruhen-am-kfg" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Weiterlesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Project Context */}
      <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Über dieses Projekt</h2>
        <p className="leading-7 mb-4">
          Die Dokumentation der Heidelberger Schulgeschichte ist ein historisches Projekt, das die Entwicklung der Bildungslandschaft in Heidelberg über mehrere Jahrhunderte erfasst. Es beleuchtet die Wechselwirkungen zwischen gesellschaftlichen Veränderungen und den Bildungseinrichtungen der Stadt.
        </p>
        <p className="leading-7">
          Besonders hervorgehoben werden die Schulen in ihrer Rolle als Spiegel gesellschaftlicher und politischer Verhältnisse, etwa während der NS-Zeit oder in der Studentenbewegung der 1960er Jahre.
        </p>
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
