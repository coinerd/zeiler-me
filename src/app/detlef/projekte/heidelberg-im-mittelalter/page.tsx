import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function HeidelbergImMittelalterPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary via-primary/80 to-secondary/90 rounded-xl mb-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4">
              Heidelberg im Mittelalter
            </h1>
            <div className="w-24 h-1 bg-white rounded-full mb-6"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Eine Sammlung historischer Artikel über das mittelalterliche Heidelberg von Detlef Zeiler
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <div className="mb-12 max-w-3xl mx-auto">
        <div className="bg-muted/40 rounded-xl p-6 md:p-10 border border-border/50 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-primary">Über diese Sammlung</h2>
          <p className="text-muted-foreground mb-6">
            Diese Sammlung von Artikeln bietet Einblicke in verschiedene Aspekte des mittelalterlichen Heidelbergs. 
            Von der Stadtgründung über das Universitätsleben bis hin zu sozialen Einrichtungen und dem Rechtssystem 
            werden zahlreiche Facetten der mittelalterlichen Stadt beleuchtet. Die Artikel eignen sich sowohl für 
            historisch Interessierte als auch für Schüler und Lehrer, die sich mit der Lokalgeschichte Heidelbergs 
            beschäftigen möchten.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Geschichte</span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Mittelalter</span>
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Heidelberg</span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Lokalgeschichte</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        Inhaltsverzeichnis
      </h2>

      {/* Article Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "100ms" }}>
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle>Stadtgründung - Stadtentwicklung</CardTitle>
            <CardDescription className="text-primary/80">Heidelbergs Ursprünge</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Über die Stadtgründung, Stadtentwicklung und Stadtverfassung - Heidelberg: Entstehung und Namensgebung - Der Stadtaufbau von Heidelberg.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "200ms" }}>
          <CardHeader className="bg-secondary/5 pb-4">
            <CardTitle>Universität und Studenten</CardTitle>
            <CardDescription className="text-secondary/80">Akademisches Leben</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Über die Motive für den Aufbau einer Universität in Heidelberg, den Ausbau und Finanzierung der Universität und die Studentenunruhen im alten Heidelberg.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-secondary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "300ms" }}>
          <CardHeader className="bg-accent/5 pb-4">
            <CardTitle>Strafrecht und Strafvollzug</CardTitle>
            <CardDescription className="text-accent/80">Rechtssystem</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Über Strafe, Constitutio Criminalis Carolina, Verbrechen und Strafen, Strafordnung sowie Richtstätten und Gefängnisse im mittelalterlichen Heidelberg.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-accent hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "400ms" }}>
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle>Sittenstrafordnung für Dirnen</CardTitle>
            <CardDescription className="text-primary/80">Historisches Dokument</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Auszug aus der Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten Ott-Heinrich des Jahres 1532.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/sittenstrafordnung-fuer-dirnen" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "500ms" }}>
          <CardHeader className="bg-secondary/5 pb-4">
            <CardTitle>Das älteste Gewerbe</CardTitle>
            <CardDescription className="text-secondary/80">Gesellschaftsgeschichte</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              "Der gemeinen Frauen Haus", so wurden im Mittelalter die Freudenhäuser genannt. Aus pfälzischen und Heidelberger Quellen erfahren wir zu diesem Thema folgendes.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/das-aelteste-gewerbe" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-secondary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "600ms" }}>
          <CardHeader className="bg-accent/5 pb-4">
            <CardTitle>Hexenglauben und Hexenprozesse</CardTitle>
            <CardDescription className="text-accent/80">Religiöse Geschichte</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg - Historische Dokumente und Berichte.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-accent hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "700ms" }}>
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle>Juden im mittelalterlichen Heidelberg</CardTitle>
            <CardDescription className="text-primary/80">Kulturgeschichte</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Die Geschichte der jüdischen Bevölkerung im mittelalterlichen Heidelberg ist äußerst wechselhaft: Je nach Laune von Pfalzgraf und Bevölkerung werden die Juden bald vertrieben, bald wieder wohlwollend aufgenommen.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/juden-im-mittelalterlichen-heidelberg" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "800ms" }}>
          <CardHeader className="bg-secondary/5 pb-4">
            <CardTitle>Armenpflege und soziale Einrichtungen</CardTitle>
            <CardDescription className="text-secondary/80">Sozialgeschichte</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Die mittelalterliche Armenpflege war von religiösen Vorstellungen geprägt und wurde fast ausschließlich von der Kirche durchgeführt.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/armenpflege-und-soziale-einrichtungen" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-secondary hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "900ms" }}>
          <CardHeader className="bg-accent/5 pb-4">
            <CardTitle>Praktische Heimatkunde</CardTitle>
            <CardDescription className="text-accent/80">Pädagogisches Material</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Im Frühjahr 1986 haben wir, die Lehrer der Gruppe MOPÄD, den im Jahr zuvor fertiggestellten Schüler-Videofilm ("Zeitensprung") über die Geschichte des Heiligenbergs in mehreren Heidelberger Schulen vorgeführt.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde" passHref className="w-full">
              <Button variant="outline" className="w-full hover:bg-accent hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                Artikel lesen
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Author Section */}
      <section className="mb-16 bg-muted/30 rounded-xl p-6 md:p-8 border border-border/50">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
            DZ
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Über den Autor</h3>
            <p className="text-muted-foreground mb-4">
              Diese Sammlung wurde von Detlef Zeiler zusammengestellt, einem Historiker und Pädagogen mit besonderem 
              Interesse an der Geschichte Heidelbergs. Die Artikel basieren auf umfangreichen Recherchen in historischen 
              Quellen und Archiven und bieten einen authentischen Einblick in das mittelalterliche Leben der Stadt.
            </p>
            <Link href="/detlef" passHref>
              <Button variant="outline" size="sm">
                Mehr über Detlef Zeiler
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
              <path d="M9 22V12"></path>
              <path d="M15 22V12"></path>
            </svg>
          </div>
          Weitere Heidelberger Projekte
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/heidelberger-projekte" className="group">
            <div className="p-4 rounded-lg border border-border/50 bg-card hover:bg-accent/5 transition-colors duration-300">
              <h3 className="font-medium mb-2 group-hover:text-accent transition-colors duration-300">Alle Heidelberger Projekte</h3>
              <p className="text-sm text-muted-foreground">Entdecken Sie weitere Projekte und Artikel mit Bezug zu Heidelberg.</p>
            </div>
          </Link>
          <Link href="/detlef/projekte/heiligenberg" className="group">
            <div className="p-4 rounded-lg border border-border/50 bg-card hover:bg-accent/5 transition-colors duration-300">
              <h3 className="font-medium mb-2 group-hover:text-accent transition-colors duration-300">Der Heiligenberg bei Heidelberg</h3>
              <p className="text-sm text-muted-foreground">Geschichte und Bedeutung des Heiligenbergs bei Heidelberg.</p>
            </div>
          </Link>
          <Link href="/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz" className="group">
            <div className="p-4 rounded-lg border border-border/50 bg-card hover:bg-accent/5 transition-colors duration-300">
              <h3 className="font-medium mb-2 group-hover:text-accent transition-colors duration-300">Neuenheim wird Stadtteil von Heidelberg</h3>
              <p className="text-sm text-muted-foreground">Detlef Zeiler im Gespräch mit Otto Jäger und Ludwig Merz über die Eingemeindung Neuenheims.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
