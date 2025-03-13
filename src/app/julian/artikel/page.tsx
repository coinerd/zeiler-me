import Link from "next/link";
import { ArrowRight, FileText, Code, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ArtikelOverviewPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Artikel
          </h1>
          <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-xl text-muted-foreground">
            Technologie, Programmierung und IT-Themen von Julian Zeiler
          </p>
        </div>
      </div>
      
      {/* Introduction Section */}
      <div className="my-8">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Eine Sammlung von Artikeln zu verschiedenen Themen aus den Bereichen Softwareentwicklung, Web-Technologien und Open Source.
          Diese Beiträge bieten Einblicke in aktuelle Entwicklungen und grundlegende Konzepte der IT-Welt.
        </p>
      </div>
      
      <Separator className="my-8" />
      
      {/* Articles Grid */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 my-8">
        <Card className="group cursor-pointer overflow-hidden transition-colors hover:border-primary">
          <Link href="/julian/artikel/was-ist-das-web-20" className="focus:outline-none">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Code className="h-5 w-5 text-primary" />
                <span>Was ist das Web 2.0?</span>
              </CardTitle>
              <CardDescription className="text-base">
                Ein Blick auf die Evolution des Internets
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="leading-7">
                Die neue Version des Webs (2.0) bedeutet nicht, dass hier eine völlig neue Technologie zum Einsatz kommt. 
                Denn erstens ist es nicht eine Technologie - es sind mehrere - und zweitens gibt es diese Technologien bereits seit einer ganzen Weile und drittens 
                ist das Web 2.0 auch eine Art neue Sichtweise auf das Internet.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Web</Badge>
                <Badge variant="secondary">Technologie</Badge>
              </div>
              <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                Weiterlesen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Link>
        </Card>
        
        <Card className="group cursor-pointer overflow-hidden transition-colors hover:border-primary">
          <Link href="/julian/artikel/agile-methoden-in-der-softwareentwicklung" className="focus:outline-none">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-5 w-5 text-primary" />
                <span>Agile Methoden</span>
              </CardTitle>
              <CardDescription className="text-base">
                Moderne Ansätze in der Softwareentwicklung
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="leading-7">
                Die agile Softwareentwicklung gilt besonders in Web 2.0 Projekten als die beste Vorgehensweise in der Umsetzung des Projekts.
                Doch was bedeutet es ein Projekt agil umzusetzen?
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Agile</Badge>
                <Badge variant="secondary">Entwicklung</Badge>
              </div>
              <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                Weiterlesen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Link>
        </Card>
        
        <Card className="group cursor-pointer overflow-hidden transition-colors hover:border-primary lg:col-span-2">
          <Link href="/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen" className="focus:outline-none">
            <CardHeader className="p-6">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Auswirkungen von Ideologien der Open Source Lizenzen</span>
              </CardTitle>
              <CardDescription className="text-base">
                Ein tiefgreifender Blick auf Open Source Lizenzmodelle
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="leading-7">
                Linux ist Open Source. Das wissen wohl die meisten, die schon einmal von diesem Betriebssystem gehört haben. 
                Vielleicht haben einige auch schon von der General Public License (GPL) gehört, der Lizenz, unter der ein großer Anteil 
                der Open Source Software - auch Linux - veröffentlicht wurde und wird. Aber welche Auswirkungen diese und andere 
                Lizenzen für Autoren, Entwickler und Anwender dieser Programme haben, darüber wissen die Wenigsten Bescheid.
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Open Source</Badge>
                <Badge variant="secondary">Lizenzen</Badge>
                <Badge variant="secondary">Software</Badge>
              </div>
              <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                Weiterlesen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Link>
        </Card>
      </div>
      
      {/* Additional Info */}
      <div className="bg-muted/50 rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-bold mb-4">Über diese Artikel</h2>
        <p className="leading-7 mb-4">
          Die hier vorgestellten Artikel befassen sich mit verschiedenen Aspekten der Informationstechnologie und 
          Softwareentwicklung. Sie sind das Ergebnis von Julians langjähriger Erfahrung in der IT-Branche und 
          seinem Interesse an der Verbreitung von Wissen in diesen Bereichen.
        </p>
        <p className="leading-7">
          Weitere Artikel werden in regelmäßigen Abständen hinzugefügt, um aktuelle Entwicklungen und neue 
          Technologien zu behandeln.
        </p>
      </div>
    </div>
  );
}
