import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Users, 
  Video, 
  Mountain, 
  Mail, 
  Phone, 
  MapPin,
  Film,
  Camera,
  Presentation,
  Lightbulb,
  BookOpen,
  School
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MopaedPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            MOPÄD - Mobile Pädagogen
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Video className="h-3 w-3" />
              <span>Medienpädagogik</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Bildungsprojekte</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Mountain className="h-3 w-3" />
              <span>Heiligenberg</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          MOPÄD ist ein chamäleonartiges "Gebilde", das im Jahre 1985 über ein Videofilmprojekt zum 
          Heiligenberg bei Heidelberg entstanden ist und sich von Projekt zu Projekt ändert: Mal werden 
          Schüler, Jugendliche und Lehrer in die Videofilmtechnik eingewiesen, um mit ihnen z.B. einen 
          Film über eine Schulpartnerschaft drehen zu können. Mal nimmt die aktive Filmarbeit selbst 
          alle Aufmerksamkeit in Anspruch - z.B. wenn gerade zwei Filme parallel gedreht werden - , 
          mal werden fremde Videoarbeiten, pädagogisches Film- und Tonmaterial oder auch medienpädagogische 
          Streitfragen besprochen.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Main Content Area */}
        <div className="md:col-span-2 space-y-8">
          {/* About MOPÄD */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Über MOPÄD</span>
              </CardTitle>
              <CardDescription>
                Ein flexibles Konzept für medienpädagogische Projekte
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Die Gruppe ist in jeder Hinsicht mobil: Vom Einsatzort bis zur personellen Zusammensetzung. 
                Inhaltliche Vorlieben liegen in der Erforschung und Darstellung lokaler und regionaler Kultur.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Film className="h-4 w-4 text-primary" />
                    <span>Medienpädagogik</span>
                  </h3>
                  <p className="text-sm">
                    MOPÄD vermittelt praktische Medienkompetenz durch aktive Projektarbeit. Teilnehmer lernen 
                    nicht nur die technischen Aspekte der Medienproduktion, sondern auch kritisches Denken und 
                    kreative Ausdrucksformen.
                  </p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Flexible Teamstruktur</span>
                  </h3>
                  <p className="text-sm">
                    Je nach Projekt und Anforderungen setzt sich das MOPÄD-Team aus verschiedenen Experten zusammen: 
                    Medienpädagogen, Filmemacher, Historiker, Lehrer und weitere Fachleute bringen ihre spezifischen 
                    Kompetenzen ein.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Unsere Prinzipien</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Lernen durch Handeln:</strong> Praktische Erfahrung steht im Mittelpunkt unserer Arbeit.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Lokaler Bezug:</strong> Wir fokussieren uns auf Themen mit regionalem und kulturellem Bezug.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Interdisziplinarität:</strong> Wir verbinden verschiedene Fachgebiete und Perspektiven.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Partizipation:</strong> Alle Teilnehmer werden aktiv in den kreativen Prozess einbezogen.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="h-5 w-5 text-primary" />
                <span>Ausgewählte Projekte</span>
              </CardTitle>
              <CardDescription>
                Bisherige Projekte und Erfolge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-muted/20 rounded-lg border border-muted">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-primary/20 p-2">
                      <Mountain className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Der Heiligenberg bei Heidelberg (1985)</h3>
                  </div>
                  <p className="text-sm mb-3">
                    Das Gründungsprojekt von MOPÄD. Ein Dokumentarfilm über die Geschichte und kulturelle 
                    Bedeutung des Heiligenbergs, erstellt in Zusammenarbeit mit Schülern des Bunsen-Gymnasiums 
                    Heidelberg und lokalen Historikern.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-3 w-3" />
                    <span>Dokumentarfilm</span>
                    <span className="mx-2">•</span>
                    <Users className="h-3 w-3" />
                    <span>Schülerprojekt</span>
                    <span className="mx-2">•</span>
                    <BookOpen className="h-3 w-3" />
                    <span>Lokalgeschichte</span>
                  </div>
                </div>

                <div className="p-4 bg-muted/20 rounded-lg border border-muted">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-primary/20 p-2">
                      <School className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Schulpartnerschaft Heidelberg-Cambridge (1987)</h3>
                  </div>
                  <p className="text-sm mb-3">
                    Dokumentation einer Schulpartnerschaft zwischen dem Heidelberg College und einer Schule in 
                    Cambridge. Schüler beider Schulen wurden in die Filmproduktion einbezogen und erstellten 
                    gemeinsam einen zweisprachigen Film.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Video className="h-3 w-3" />
                    <span>Bildungsdokumentation</span>
                    <span className="mx-2">•</span>
                    <Users className="h-3 w-3" />
                    <span>Internationale Zusammenarbeit</span>
                  </div>
                </div>

                <div className="p-4 bg-muted/20 rounded-lg border border-muted">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-primary/20 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Spuren der Römer im Neckartal (1990)</h3>
                  </div>
                  <p className="text-sm mb-3">
                    Eine filmische Erkundung römischer Siedlungsspuren im Neckartal. Das Projekt verband 
                    archäologische Forschung mit moderner Medienpädagogik und wurde in Kooperation mit dem 
                    Kurpfälzischen Museum durchgeführt.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="h-3 w-3" />
                    <span>Historische Dokumentation</span>
                    <span className="mx-2">•</span>
                    <BookOpen className="h-3 w-3" />
                    <span>Archäologie</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Stimmen zu MOPÄD</span>
              </CardTitle>
              <CardDescription>
                Was Teilnehmer und Partner über uns sagen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/10 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="italic text-sm mb-2">
                        "Die Zusammenarbeit mit MOPÄD hat unseren Schülern nicht nur technische Fähigkeiten 
                        vermittelt, sondern auch ein tieferes Verständnis für die Geschichte unserer Region. 
                        Ein einzigartiges pädagogisches Konzept!"
                      </p>
                      <p className="text-sm font-semibold">Maria Schmidt</p>
                      <p className="text-xs text-muted-foreground">Lehrerin, Bunsen-Gymnasium Heidelberg</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/10 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="italic text-sm mb-2">
                        "Als ehemaliger Teilnehmer eines MOPÄD-Projekts kann ich sagen, dass diese Erfahrung 
                        meinen beruflichen Werdegang entscheidend geprägt hat. Die praktische Medienarbeit 
                        und das selbstständige Arbeiten haben mir wertvolle Kompetenzen vermittelt."
                      </p>
                      <p className="text-sm font-semibold">Thomas Müller</p>
                      <p className="text-xs text-muted-foreground">Ehemaliger Teilnehmer, heute Filmemacher</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>Kontakt</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Anschrift</h3>
                  <address className="not-italic text-sm text-muted-foreground">
                    MOPÄD - Mobile Pädagogen<br />
                    c/O Medienforum Heidelberg<br />
                    Am Karlstor 1<br />
                    69117 Heidelberg
                  </address>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-sm text-muted-foreground">06221-978921</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">E-Mail</h3>
                  <a 
                    href="mailto:dz@2dz.de" 
                    className="text-sm text-primary hover:underline"
                  >
                    dz@2dz.de
                  </a>
                </div>
              </div>

              <Button className="w-full mt-4">
                Kontakt aufnehmen
              </Button>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Presentation className="h-5 w-5 text-primary" />
                <span>Angebote</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <Video className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Workshops zur Videofilmtechnik</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <Camera className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Dokumentarfilmproduktion</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <School className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Medienpädagogische Projekte für Schulen</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <BookOpen className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Dokumentation lokaler Geschichte und Kultur</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-primary/20 p-1">
                    <Presentation className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">Fortbildungen für Lehrkräfte</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Related Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>Verwandte Seiten</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>
                  <Link 
                    href="/detlef/projekte/heiligenberg"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <Mountain className="h-4 w-4" />
                    <span>Heiligenberg Übersicht</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/detlef/projekte/heiligenberg/geschichte"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Die Geschichte des Heiligenbergs</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/detlef/projekte/heiligenberg/der-unheimliche-berg"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <Mountain className="h-4 w-4" />
                    <span>Der unheimliche Berg</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/detlef/projekte/heiligenberg/projekt"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    <Presentation className="h-4 w-4" />
                    <span>Unser Projekt</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-10 flex justify-between">
        <Link 
          href="/detlef/projekte/heiligenberg/projekt"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>← Unser Projekt</span>
        </Link>
        <Link 
          href="/detlef/projekte/heiligenberg"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>Zurück zur Übersicht →</span>
        </Link>
      </div>
    </div>
  );
}
