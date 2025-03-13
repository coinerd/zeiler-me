import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowRight, Building, History, MapPin, Newspaper, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NeuenheimPage() {
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
              <MapPin className="mr-1 h-4 w-4" />
              Stadtteil
            </Badge>
            <Badge className="px-3 py-1" variant="outline">
              <History className="mr-1 h-4 w-4" />
              Geschichte
            </Badge>
          </div>
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Neuenheim
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 border border-border">
        <p className="leading-7 mb-4">
          Neuenheim ist ein Stadtteil von Heidelberg mit einer reichen Geschichte und kulturellen Bedeutung. Von einem ehemals eigenständigen Dorf entwickelte sich Neuenheim zu einem wichtigen Teil der Universitätsstadt Heidelberg.
        </p>
        <p className="leading-7">
          Dieses Projekt dokumentiert die Geschichte Neuenheims, seine Eingemeindung nach Heidelberg und die persönlichen Erinnerungen seiner Bewohner.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8">
        <div className="aspect-video bg-muted relative overflow-hidden rounded-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <Building className="h-16 w-16 text-muted-foreground/50" />
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground text-center">
          Historische Ansicht von Neuenheim
        </p>
      </div>

      {/* Main Content Sections */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Projektbereiche</h2>
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <CardTitle>Überblick</CardTitle>
              </div>
              <CardDescription>
                Allgemeine Informationen über Neuenheim
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Ein Überblick über die geografische Lage, die Bevölkerung und die wichtigsten Merkmale des Stadtteils Neuenheim.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/neuenheim/ueberblick" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-secondary/5">
              <div className="flex items-center gap-2">
                <History className="h-5 w-5 text-secondary" />
                <CardTitle>Die Eingemeindung Neuenheims</CardTitle>
              </div>
              <CardDescription>
                Der Prozess der Eingliederung in die Stadt Heidelberg
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Die Geschichte der Eingemeindung Neuenheims nach Heidelberg im Jahr 1891 und die damit verbundenen Veränderungen für die Bevölkerung.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/neuenheim/eingemeindung" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-accent/5">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <CardTitle>Neuenheim ist halb Europa</CardTitle>
              </div>
              <CardDescription>
                Die kulturelle Vielfalt des Stadtteils
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Ein Blick auf die kulturelle Vielfalt Neuenheims und wie verschiedene europäische Einflüsse den Stadtteil geprägt haben.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/neuenheim/ist-halb-europa" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transition-all hover:shadow-md">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-primary" />
                <CardTitle>Interviews und Zeitzeugen</CardTitle>
              </div>
              <CardDescription>
                Persönliche Erinnerungen an Neuenheim
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary/70" />
                  <span>Interview mit Helmut Krauch: "Krieg der Knöpfe"</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary/70" />
                  <span>Otto Jäger und Ludwig Merz über die Eingemeindung</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/detlef/projekte/neuenheim/interview-krauch" className="w-full">
                <Button variant="outline" className="w-full flex items-center justify-between">
                  <span>Interviews lesen</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-10 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Über das Projekt</h2>
        <p className="leading-7 mb-4">
          Dieses Projekt dokumentiert die Geschichte und Entwicklung des Heidelberger Stadtteils Neuenheim. Durch Interviews mit Zeitzeugen, historische Recherchen und die Sammlung von Dokumenten wird die Vergangenheit dieses besonderen Ortes lebendig gehalten.
        </p>
        <p className="leading-7">
          Besonderer Dank gilt den Zeitzeugen, die ihre Erinnerungen und Erfahrungen mit uns geteilt haben, sowie allen, die zur Dokumentation der Geschichte Neuenheims beigetragen haben.
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
