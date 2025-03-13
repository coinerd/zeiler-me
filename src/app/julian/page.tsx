import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function JulianPage() {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section className="w-full py-12 md:py-20 lg:py-24 gradient-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4">
              Julian Zeiler
            </h1>
            <div className="w-24 h-1 bg-white rounded-full mb-6"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Fokus auf IT, Technologie und die Auswirkungen von technologischen Entwicklungen auf die Gesellschaft.
            </p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <div className="container px-4 py-16 md:px-6">
        {/* Introduction and Featured Work */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-muted/40 rounded-xl p-6 md:p-10 border border-border/50 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Über Julian Zeiler</h2>
            <p className="text-muted-foreground mb-6">
              Julian Zeiler beschäftigt sich mit den Schnittstellen zwischen Technologie und Gesellschaft.
              Sein Fokus liegt auf der Analyse, wie Software-Entwicklung, Lizenzmodelle und 
              technologische Innovationen unsere Arbeits- und Lebensweise beeinflussen.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Technologie</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Open Source</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Digitale Gesellschaft</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Innovation</span>
            </div>
          </div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Artikel Section */}
          <section className="md:col-span-12 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="mb-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <path d="M14 2v6h6"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Artikel</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow">
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Was ist das Web 2.0?</CardTitle>
                  <CardDescription className="text-secondary/80">Technologie & Internet</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Ein Blick auf die Evolution des Internets und die neue Sichtweise, die das Web 2.0 mit sich brachte.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/julian/artikel/was-ist-das-web-20" passHref className="w-full">
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

              <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow">
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Agile Methoden in der Softwareentwicklung</CardTitle>
                  <CardDescription className="text-secondary/80">Entwicklungsmethodik</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Die agile Softwareentwicklung als beste Vorgehensweise in der Umsetzung von Web 2.0 Projekten.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/julian/artikel/agile-methoden-in-der-softwareentwicklung" passHref className="w-full">
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

              <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow">
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Auswirkungen von Ideologien der Open Source Lizenzen</CardTitle>
                  <CardDescription className="text-secondary/80">Open Source Software</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Eine Analyse der Auswirkungen verschiedener Open-Source-Lizenzen und ihrer ideologischen Grundlagen.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen" passHref className="w-full">
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
            </div>

            <div className="mt-6 text-center">
              <Link href="/julian/artikel" passHref>
                <Button variant="secondary" className="mt-4">
                  Alle Artikel anzeigen
                </Button>
              </Link>
            </div>
          </section>
          
          {/* Future Article Ideas Section */}
          <section className="md:col-span-12 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Geplante Themen</h2>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-border/50">
              <h3 className="text-xl font-semibold mb-4">Kommende Artikel</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-accent text-xs">→</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Die Zukunft der Softwareentwicklung</h4>
                    <p className="text-sm text-muted-foreground">Trends und Prognosen für die nächsten 10 Jahre in der Technologiebranche.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-primary text-xs">→</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Datenschutz im digitalen Zeitalter</h4>
                    <p className="text-sm text-muted-foreground">Wie neue Technologien und Regulierungen unsere Online-Privatsphäre formen.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-secondary text-xs">→</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Künstliche Intelligenz und Ethik</h4>
                    <p className="text-sm text-muted-foreground">Ethische Herausforderungen bei der Entwicklung und dem Einsatz von KI-Systemen.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        
        {/* Contact Section */}
        <section className="animate-slide-up" style={{ animationDelay: "300ms" }}>
          <div className="bg-muted rounded-xl p-6 md:p-8 text-center shadow-sm border border-border/50">
            <h2 className="text-2xl font-bold mb-4">Kontakt aufnehmen</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Bei Fragen zu meinen technologischen Artikeln oder Interesse an einer Zusammenarbeit, nehmen Sie gerne Kontakt auf.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/impressum" passHref>
                <Button className="bg-secondary hover:bg-secondary/90 text-white">
                  Impressum und Kontakt
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
