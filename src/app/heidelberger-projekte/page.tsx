import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HeidelbergerProjektePage() {
  return (
    <div>
      {/* Hero Section with Heidelberg-themed Gradient Background */}
      <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary via-primary/80 to-secondary/90">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4">
              Heidelberger Projekte von Detlef Zeiler
            </h1>
            <div className="w-24 h-1 bg-white rounded-full mb-6"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Eine Sammlung von Projekten und Artikeln mit Bezug zu Heidelberg und seiner Geschichte von Detlef Zeiler.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Container */}
      <div className="container px-4 py-16 md:px-6">
        {/* Introduction */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-muted/40 rounded-xl p-6 md:p-10 border border-border/50 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-primary">Über die Heidelberger Projekte von Detlef Zeiler</h2>
            <p className="text-muted-foreground mb-6">
              Heidelberg, eine der ältesten Universitätsstädte Deutschlands, hat eine reiche Geschichte, 
              die bis ins Mittelalter zurückreicht. Diese Sammlung umfasst Artikel zu verschiedenen Aspekten 
              der Heidelberger Geschichte, von der Eingemeindung Neuenheims bis hin zu mittelalterlichen 
              Phänomenen wie dem Hexenglauben, der Universität, dem Strafrecht und dem sozialen Leben.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Geschichte</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Mittelalter</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Lokalgeschichte</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Neuenheim</span>
            </div>
          </div>
        </div>

        {/* Featured Map */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="relative h-64 md:h-96 bg-muted rounded-xl overflow-hidden border border-border/50">
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/5">
              <div className="text-center p-6">
                <h3 className="text-xl font-bold mb-2">Heidelberg Map View</h3>
                <p className="text-sm text-muted-foreground">
                  Eine interaktive Karte wird in einer zukünftigen Aktualisierung hinzugefügt, 
                  um die Standorte der Heidelberger Projekte zu visualisieren.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Cards */}
        <h2 className="text-2xl font-bold mb-8 flex items-center animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
              <path d="M9 22V12"></path>
              <path d="M15 22V12"></path>
            </svg>
          </div>
          Heidelberg im Mittelalter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "300ms" }}>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Stadtgründung - Stadtentwicklung</CardTitle>
              <CardDescription className="text-primary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Die historische Entwicklung der Stadt Heidelberg im Mittelalter.
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
          
          <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "400ms" }}>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Universität und Studenten</CardTitle>
              <CardDescription className="text-secondary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Geschichte der Universität Heidelberg und das Studentenleben im Mittelalter.
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
          
          <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "500ms" }}>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Strafrecht und Strafvollzug</CardTitle>
              <CardDescription className="text-accent/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Das Strafrechtssystem und der Strafvollzug im mittelalterlichen Heidelberg.
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
          
          <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "600ms" }}>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Sittenstrafordnung für Dirnen</CardTitle>
              <CardDescription className="text-primary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Auszug aus der Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten Ott-Heinrich.
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
          
          <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "700ms" }}>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Das älteste Gewerbe</CardTitle>
              <CardDescription className="text-secondary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Prostitution im mittelalterlichen Heidelberg.
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
          
          <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "800ms" }}>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Hexenglauben und Hexenprozesse</CardTitle>
              <CardDescription className="text-accent/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.
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
          
          <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "900ms" }}>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Juden im mittelalterlichen Heidelberg</CardTitle>
              <CardDescription className="text-primary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Geschichte der jüdischen Gemeinde im mittelalterlichen Heidelberg.
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
          
          <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "1000ms" }}>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Armenpflege und soziale Einrichtungen</CardTitle>
              <CardDescription className="text-secondary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Soziale Fürsorge im mittelalterlichen Heidelberg.
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
          
          <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "1100ms" }}>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Praktische Heimatkunde</CardTitle>
              <CardDescription className="text-accent/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Tipps und Aufgaben für Lehrer und Schüler zur praktischen Heimatkunde im Heidelberger Raum.
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
        
        {/* Other Heidelberg Projects */}
        <h2 className="text-2xl font-bold mb-8 flex items-center animate-slide-up" style={{ animationDelay: "1200ms" }}>
          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
              <path d="M9 22V12"></path>
              <path d="M15 22V12"></path>
            </svg>
          </div>
          Weitere Heidelberger Projekte
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "1300ms" }}>
            <CardHeader className="bg-primary/5 pb-4">
              <CardTitle>Neuenheim wird Stadtteil von Heidelberg</CardTitle>
              <CardDescription className="text-primary/80">Otto Jäger und Ludwig Merz</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Eine historische Betrachtung der Eingemeindung Neuenheims als Stadtteil von Heidelberg.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz" passHref className="w-full">
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
          
          <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "1400ms" }}>
            <CardHeader className="bg-secondary/5 pb-4">
              <CardTitle>Hexenglauben und Hexenprozesse</CardTitle>
              <CardDescription className="text-secondary/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberg-im-mittelalter" passHref className="w-full">
                <Button variant="outline" className="w-full hover:bg-secondary hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  Zur Übersicht
                </Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "1500ms" }}>
            <CardHeader className="bg-accent/5 pb-4">
              <CardTitle>Praktische Heimatkunde</CardTitle>
              <CardDescription className="text-accent/80">Heidelberg im Mittelalter</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Tipps und Aufgaben für Lehrer und Schüler zur praktischen Heimatkunde im Heidelberger Raum.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/heidelberg-im-mittelalter" passHref className="w-full">
                <Button variant="outline" className="w-full hover:bg-accent hover:text-white transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  Zur Übersicht
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        {/* Historical Timeline Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "1600ms" }}>
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                <path d="M12 8v4l3 3"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            Historische Zeitlinie
          </h2>
          
          <div className="relative border-l-2 border-primary/20 pl-8 pb-8 space-y-8">
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">1392</h3>
              <p className="text-muted-foreground">Früheste dokumentierte Hexenprozesse in der Region Heidelberg</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">1871</h3>
              <p className="text-muted-foreground">Eingemeindung von Schlierbach als erster Vorort</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">1891</h3>
              <p className="text-muted-foreground">Eingemeindung von Neuenheim, beschrieben im Artikel von Otto Jäger und Ludwig Merz</p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold">1920</h3>
              <p className="text-muted-foreground">Beginn moderner heimatkundlicher Forschung in Heidelberg</p>
            </div>
          </div>
        </section>
        
        {/* Contact/Further Reading Section */}
        <section className="animate-slide-up" style={{ animationDelay: "1700ms" }}>
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 md:p-8 text-center border border-border/50">
            <h2 className="text-2xl font-bold mb-4">Interesse an weiteren Heidelberg-Projekten?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Wir sind stets auf der Suche nach Materialien zur Geschichte Heidelbergs. 
              Wenn Sie Dokumente, Fotos oder Geschichten teilen möchten, kontaktieren Sie uns.
            </p>
            <Link href="/impressum" passHref>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
