import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Detlef und Julian Zeiler
              </h1>
              <p className="max-w-[700px] text-white md:text-xl">
                Herzlich Willkommen auf unseren Seiten. Hier finden Sie eine Sammlung von Artikeln, die wir im Laufe der Zeit geschrieben haben.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-10 animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Besondere Artikel
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Eine Auswahl unserer besonderen Werke und Projekte.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="card-transition border-t-4 border-primary shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Neuenheim wird Stadtteil von Heidelberg</CardTitle>
                  <CardDescription>
                    Detlef Zeiler im Gespräch mit Otto Jäger und Ludwig Merz
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Eine historische Betrachtung der Eingemeindung Neuenheims als Stadtteil von Heidelberg.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz" passHref className="w-full">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors duration-300">Artikel lesen</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="card-transition border-t-4 border-secondary shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Auswirkungen von Open Source Lizenzen</CardTitle>
                  <CardDescription>
                    Julian Zeiler über ideologische Grundlagen von Lizenzmodellen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Eine Analyse der Auswirkungen verschiedener Open-Source-Lizenzen und ihrer ideologischen Grundlagen.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen" passHref className="w-full">
                    <Button variant="outline" className="w-full hover:bg-secondary hover:text-white transition-colors duration-300">Artikel lesen</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="card-transition border-t-4 border-accent shadow-lg hover:shadow-xl">
                <CardHeader>
                  <CardTitle>Alexander von Humboldts Südamerikareise</CardTitle>
                  <CardDescription>
                    Detlef Zeiler über die bahnbrechende Forschungsreise
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Die wissenschaftliche Expedition Alexander von Humboldts durch Südamerika von 1799 bis 1804.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/detlef/geschichte/alexander-von-humboldts-sdamerikareise" passHref className="w-full">
                    <Button variant="outline" className="w-full hover:bg-accent hover:text-white transition-colors duration-300">Artikel lesen</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-10 animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Weitere Themen
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Entdecken Sie weitere Bereiche unserer Arbeit.
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mt-8">
                <Link href="/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse" className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-md hover-lift">
                    <div className="h-40 bg-gradient-to-r from-primary/80 to-primary p-6 flex items-end">
                      <h3 className="text-xl font-bold text-white">Hexenglauben und Hexenprozesse</h3>
                    </div>
                    <div className="p-6 bg-card">
                      <p className="text-sm text-muted-foreground">Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.</p>
                    </div>
                  </div>
                </Link>
                <Link href="/detlef/medien/geruechte-rumores-drehbuch" className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-md hover-lift">
                    <div className="h-40 bg-gradient-to-r from-secondary/80 to-secondary p-6 flex items-end">
                      <h3 className="text-xl font-bold text-white">Gerüchte - Rumores (Drehbuch)</h3>
                    </div>
                    <div className="p-6 bg-card">
                      <p className="text-sm text-muted-foreground">Drehbuch und Storyboard zu einem Kurzfilm.</p>
                    </div>
                  </div>
                </Link>
                <Link href="/detlef/projekte/old-providence-die-insel-providencia" className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-md hover-lift">
                    <div className="h-40 bg-gradient-to-r from-accent/80 to-accent p-6 flex items-end">
                      <h3 className="text-xl font-bold text-white">Die Insel Providencia</h3>
                    </div>
                    <div className="p-6 bg-card">
                      <p className="text-sm text-muted-foreground">Old Providence – Kulturelle Vielfalt in der Karibik.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-10 animate-slide-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Über uns
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Detlef und Julian Zeiler teilen ihre Leidenschaft für Geschichte, Medien und Technologie.
              </p>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 md:grid-cols-2">
                <Card className="h-full card-transition">
                  <CardHeader>
                    <CardTitle>Detlef Zeiler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Forscher und Autor mit Schwerpunkt auf Geschichte und Medien. Besonderes Interesse für Lokalgeschichte und historische Entwicklungen.
                    </p>
                  </CardContent>
                </Card>
                <Card className="h-full card-transition">
                  <CardHeader>
                    <CardTitle>Julian Zeiler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Fokus auf IT, Technologie und die Auswirkungen von technologischen Entwicklungen auf die Gesellschaft.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
