import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DetlefPage() {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section className="w-full py-12 md:py-20 lg:py-24 gradient-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white mb-4">
              Detlef Zeiler
            </h1>
            <div className="w-24 h-1 bg-white rounded-full mb-6"></div>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Forscher und Autor mit Schwerpunkt auf Geschichte und Medien. Besonderes Interesse für Lokalgeschichte und historische Entwicklungen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <div className="container px-4 py-16 md:px-6">
        {/* Introduction and Featured Work */}
        <div className="mb-16 animate-slide-up">
          <div className="bg-muted/40 rounded-xl p-6 md:p-10 border border-border/50 shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-primary">Über Detlef Zeiler</h2>
            <p className="text-muted-foreground mb-6">
              Detlef Zeiler verbindet historische Recherche mit medialer Vermittlung. 
              Seine Arbeiten umfassen lokale Geschichte Heidelbergs, internationale Projekte in Südamerika 
              und der Karibik sowie pädagogische Konzepte zur Geschichtsvermittlung.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Geschichte</span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Forschung</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">Medien</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Heidelberg</span>
            </div>
          </div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Geschichte Section */}
          <section className="md:col-span-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="mb-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 8v4l3 3"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Geschichte</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-t-4 border-primary hover:shadow-lg transition-shadow">
                <CardHeader className="bg-primary/5 pb-4">
                  <CardTitle>Alexander von Humboldts Südamerikareise</CardTitle>
                  <CardDescription className="text-primary/80">1799-1804</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Die bahnbrechende Forschungsreise Alexander von Humboldts durch Südamerika.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/detlef/geschichte/alexander-von-humboldts-sdamerikareise" passHref className="w-full">
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
            </div>
          </section>
          
          {/* Projekte Section */}
          <section className="md:col-span-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="mb-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                  <path d="M12 20v-8"></path>
                  <path d="M17 20V8"></path>
                  <path d="M22 4v16"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Projekte</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-t-4 border-secondary hover:shadow-lg transition-shadow">
                <CardHeader className="bg-secondary/5 pb-4">
                  <CardTitle>Neuenheim wird Stadtteil von Heidelberg</CardTitle>
                  <CardDescription className="text-secondary/80">Otto Jäger und Ludwig Merz</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Eine historische Betrachtung der Eingemeindung Neuenheims als Stadtteil von Heidelberg.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz" passHref className="w-full">
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
                  <CardTitle>Hexenglauben und Hexenprozesse</CardTitle>
                  <CardDescription className="text-secondary/80">Heidelberg im Mittelalter</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse" passHref className="w-full">
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
          </section>
          
          {/* Medien Section */}
          <section className="md:col-span-4 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="mb-4 flex items-center">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                  <path d="m2 16 4 4 4-4"></path>
                  <path d="M22 12v-2a4 4 0 0 0-4-4H9l2 2h7a2 2 0 0 1 2 2v2Z"></path>
                  <path d="M18 12v2a4 4 0 0 1-4 4H4l2 2h8a6 6 0 0 0 6-6v-2Z"></path>
                  <path d="M14 6 8.8 11.2"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Medien</h2>
            </div>
            
            <div className="space-y-6">
              <Card className="border-t-4 border-accent hover:shadow-lg transition-shadow">
                <CardHeader className="bg-accent/5 pb-4">
                  <CardTitle>Gerüchte - Rumores</CardTitle>
                  <CardDescription className="text-accent/80">Drehbuch</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    Drehbuch und Storyboard zu einem Kurzfilm.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/detlef/medien/geruechte-rumores-drehbuch" passHref className="w-full">
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
          </section>
        </div>
        
        {/* More Projects */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="mb-8 flex items-center">
            <h2 className="text-2xl font-bold mr-4">Weitere Projekte</h2>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-lift transition-all duration-300">
              <CardHeader className="relative overflow-hidden p-0">
                <div className="h-48 bg-gradient-to-r from-secondary/70 to-primary/70 flex items-end p-6">
                  <CardTitle className="text-white">Praktische Heimatkunde</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="mb-2">Heidelberg im Mittelalter</CardDescription>
                <p className="text-sm text-muted-foreground">
                  Tipps und Aufgaben für Lehrer und Schüler zur praktischen Heimatkunde im Heidelberger Raum.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde" passHref className="w-full">
                  <Button variant="outline" className="w-full flex justify-between items-center group">
                    <span>Artikel lesen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover-lift transition-all duration-300">
              <CardHeader className="relative overflow-hidden p-0">
                <div className="h-48 bg-gradient-to-r from-accent/70 to-secondary/70 flex items-end p-6">
                  <CardTitle className="text-white">Die Insel Providencia</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="mb-2">Old Providence</CardDescription>
                <p className="text-sm text-muted-foreground">
                  Old Providence – Kulturelle Vielfalt in der Karibik.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/detlef/projekte/old-providence-die-insel-providencia" passHref className="w-full">
                  <Button variant="outline" className="w-full flex justify-between items-center group">
                    <span>Artikel lesen</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="animate-slide-up" style={{ animationDelay: "500ms" }}>
          <div className="bg-muted rounded-xl p-6 md:p-8 text-center shadow-sm border border-border/50">
            <h2 className="text-2xl font-bold mb-4">Kontakt aufnehmen</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Bei Fragen zu meinen Artikeln oder Interesse an Zusammenarbeit, nehmen Sie gerne Kontakt auf.
            </p>
            <Link href="/impressum" passHref>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Impressum und Kontakt
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
