import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Mountain, 
  ListChecks, 
  FileText, 
  Lightbulb,
  Video,
  Camera,
  Presentation
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  Timeline, 
  TimelineItem, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot, 
  TimelineHeader, 
  TimelineIcon, 
  TimelineTitle,
  TimelineDescription
} from "@/components/timeline";

export default function UnserProjektPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Unser Projekt
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Mountain className="h-3 w-3" />
              <span>Heiligenberg</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Video className="h-3 w-3" />
              <span>Dokumentation</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              <span>Schülerprojekt</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8 prose prose-lg max-w-none dark:prose-invert">
        <p className="lead">
          Das Heiligenberg-Projekt entstand 1985 als eine Initiative zur Dokumentation und Erforschung der 
          historischen und kulturellen Bedeutung des Heiligenbergs bei Heidelberg. In Zusammenarbeit mit 
          Schülern, Experten und der MOPÄD-Gruppe (Mobile Pädagogen) wurde ein umfassendes Videofilmprojekt 
          realisiert, das die Geschichte, Legenden und archäologische Bedeutung des Berges dokumentiert.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-primary" />
                <span>Projektübersicht</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="flex flex-col space-y-1">
                <a href="#schueler" className="px-3 py-2 rounded-md hover:bg-muted flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Die Schüler</span>
                </a>
                <a href="#experten" className="px-3 py-2 rounded-md hover:bg-muted flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Experten</span>
                </a>
                <a href="#arbeitsschritte" className="px-3 py-2 rounded-md hover:bg-muted flex items-center gap-2">
                  <ListChecks className="h-4 w-4" />
                  <span>Arbeitsschritte</span>
                </a>
                <a href="#ergebnisse" className="px-3 py-2 rounded-md hover:bg-muted flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Ergebnisse</span>
                </a>
                <a href="#ausblick" className="px-3 py-2 rounded-md hover:bg-muted flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>Ausblick</span>
                </a>
              </nav>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <span>MOPÄD</span>
              </CardTitle>
              <CardDescription>
                Mobile Pädagogen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                MOPÄD ist ein chamäleonartiges "Gebilde", das im Jahre 1985 über ein Videofilmprojekt zum 
                Heiligenberg bei Heidelberg entstanden ist und sich von Projekt zu Projekt ändert.
              </p>
              <Link 
                href="/detlef/projekte/heiligenberg/mopaed" 
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                Mehr über MOPÄD erfahren →
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Die Schüler */}
          <section id="schueler">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Die Schüler</span>
                </CardTitle>
                <CardDescription>
                  Teilnehmer und ihre Rollen im Projekt
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Das Projekt wurde mit Schülern des Heidelberger Bunsen-Gymnasiums durchgeführt. Die Schüler 
                  waren aktiv an allen Phasen des Projekts beteiligt - von der Recherche über die Dreharbeiten 
                  bis hin zur Nachbearbeitung des Filmmaterials.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Camera className="h-4 w-4 text-primary" />
                      <span>Filmteam</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Kameraführung</li>
                      <li>Tonaufnahme</li>
                      <li>Beleuchtung</li>
                      <li>Regie-Assistenz</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Rechercheteam</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Historische Quellen</li>
                      <li>Interviews vorbereiten</li>
                      <li>Drehbuch-Mitarbeit</li>
                      <li>Faktenchecks</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm italic mt-4">
                  Die Schüler erhielten zu Beginn des Projekts eine umfassende Einweisung in die Videofilmtechnik 
                  durch die MOPÄD-Gruppe, um sie auf ihre Aufgaben vorzubereiten.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Experten */}
          <section id="experten">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Experten</span>
                </CardTitle>
                <CardDescription>
                  Fachliche Unterstützung und Beratung
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Für die inhaltliche Tiefe des Projekts war die Zusammenarbeit mit Experten verschiedener 
                  Fachrichtungen entscheidend. Sie stellten ihr Wissen zur Verfügung und standen für Interviews 
                  vor der Kamera bereit.
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Dr. Bernd Heukemes (Archäologie)</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm mb-2">
                        Dr. Heukemes war maßgeblich an den archäologischen Ausgrabungen am Heiligenberg beteiligt 
                        und konnte detaillierte Einblicke in die Funde und deren Bedeutung geben.
                      </p>
                      <p className="text-sm italic">
                        "Ein Berg - verehrt und gefürchtet" - so charakterisierte Dr. Heukemes treffend das 
                        Verhältnis der Heidelberger zum Heiligenberg.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Prof. Dr. Renate Ludwig (Geschichte)</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Als Expertin für die mittelalterliche Geschichte Heidelbergs erläuterte Prof. Ludwig 
                        die Bedeutung des Michaelsklosters und die Entwicklung der Klosteranlagen auf dem Heiligenberg.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Dr. Peter Marzolff (Bauforschung)</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm">
                        Dr. Marzolff erklärte die architektonischen Besonderheiten der Klosterruinen und 
                        die Baugeschichte der verschiedenen Anlagen auf dem Heiligenberg.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Arbeitsschritte */}
          <section id="arbeitsschritte">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-primary" />
                  <span>Arbeitsschritte</span>
                </CardTitle>
                <CardDescription>
                  Chronologischer Ablauf des Projekts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <BookOpen className="h-4 w-4" />
                      </TimelineIcon>
                      <TimelineTitle>Recherchephase</TimelineTitle>
                    </TimelineHeader>
                    <TimelineConnector />
                    <TimelineContent>
                      <TimelineDescription>Januar - März 1985</TimelineDescription>
                      <p className="text-sm mt-2">
                        Sammlung historischer Quellen, Literaturrecherche, Besuch von Archiven und 
                        Vorbereitung der Interviews mit Experten.
                      </p>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Presentation className="h-4 w-4" />
                      </TimelineIcon>
                      <TimelineTitle>Konzeptionsphase</TimelineTitle>
                    </TimelineHeader>
                    <TimelineConnector />
                    <TimelineContent>
                      <TimelineDescription>April 1985</TimelineDescription>
                      <p className="text-sm mt-2">
                        Erstellung des Drehbuchs, Planung der Drehorte und -zeiten, technische Vorbereitung 
                        und Einweisung der Schüler in die Videofilmtechnik.
                      </p>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Camera className="h-4 w-4" />
                      </TimelineIcon>
                      <TimelineTitle>Dreharbeiten</TimelineTitle>
                    </TimelineHeader>
                    <TimelineConnector />
                    <TimelineContent>
                      <TimelineDescription>Mai - August 1985</TimelineDescription>
                      <p className="text-sm mt-2">
                        Durchführung der Dreharbeiten an verschiedenen Orten auf dem Heiligenberg, 
                        Interviews mit Experten und Aufnahme von Landschafts- und Detailaufnahmen.
                      </p>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon>
                        <Video className="h-4 w-4" />
                      </TimelineIcon>
                      <TimelineTitle>Postproduktion</TimelineTitle>
                    </TimelineHeader>
                    <TimelineContent>
                      <TimelineDescription>September - Dezember 1985</TimelineDescription>
                      <p className="text-sm mt-2">
                        Sichtung und Auswahl des Materials, Schnitt, Vertonung, Erstellung von Grafiken 
                        und Texteinblendungen, Fertigstellung des Films.
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </section>

          {/* Ergebnisse */}
          <section id="ergebnisse">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Ergebnisse</span>
                </CardTitle>
                <CardDescription>
                  Projektergebnisse und Veröffentlichungen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Das Projekt führte zu mehreren konkreten Ergebnissen, die die Geschichte und Bedeutung 
                  des Heiligenbergs dokumentieren und einem breiteren Publikum zugänglich machen.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mt-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Dokumentarfilm "Der Heiligenberg bei Heidelberg"</h3>
                    <p className="text-sm">
                      Ein 45-minütiger Dokumentarfilm, der die Geschichte des Berges von der keltischen Besiedlung 
                      bis zur Gegenwart nachzeichnet. Der Film wurde im lokalen Fernsehen ausgestrahlt und ist 
                      in Bildungseinrichtungen als Lehrmaterial verfügbar.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Begleitbroschüre</h3>
                    <p className="text-sm">
                      Eine illustrierte Broschüre mit vertiefenden Informationen zu den im Film behandelten Themen, 
                      ergänzt durch Karten, Zeitleisten und Quellenangaben.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Ausstellung</h3>
                    <p className="text-sm">
                      Eine temporäre Ausstellung im Kurpfälzischen Museum Heidelberg, die Fundstücke, Fotografien 
                      und Informationstafeln zum Heiligenberg präsentierte.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Webseite</h3>
                    <p className="text-sm">
                      Die vorliegende Webseite, die als digitales Archiv des Projekts dient und die wichtigsten 
                      Informationen zum Heiligenberg zusammenfasst.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Ausblick */}
          <section id="ausblick">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span>Ausblick</span>
                </CardTitle>
                <CardDescription>
                  Zukünftige Entwicklungen und Projekte
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Das Heiligenberg-Projekt hat den Grundstein für weitere Initiativen gelegt und das Interesse 
                  an der Geschichte des Berges neu belebt.
                </p>
                
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Digitalisierung des Archivmaterials:</strong> Alle gesammelten Materialien sollen 
                      digitalisiert und online zugänglich gemacht werden.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Virtuelle Rekonstruktion:</strong> Eine 3D-Rekonstruktion der Klosteranlagen in 
                      verschiedenen historischen Phasen ist in Planung.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Folgeforschung:</strong> Neue archäologische Untersuchungen könnten weitere Erkenntnisse 
                      über die frühe Besiedlung des Berges liefern.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 rounded-full bg-primary/20 p-1">
                      <Lightbulb className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">
                      <strong>Bildungsprogramme:</strong> Entwicklung von Führungen und Workshops für Schulklassen 
                      und interessierte Besucher.
                    </span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-center italic">
                    "Das Heiligenberg-Projekt ist nicht abgeschlossen, sondern ein fortlaufender Prozess der 
                    Entdeckung und Vermittlung. Jede Generation findet neue Zugänge zu diesem besonderen Ort."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-10 flex justify-between">
        <Link 
          href="/detlef/projekte/heiligenberg/der-unheimliche-berg"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>← Der unheimliche Berg</span>
        </Link>
        <Link 
          href="/detlef/projekte/heiligenberg/mopaed"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <span>MOPÄD - Mobile Pädagogen →</span>
        </Link>
      </div>
    </div>
  );
}
