import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, Scale, Building, Map } from "lucide-react"

export const metadata: Metadata = {
  title: "Strafrecht und Strafvollzug | ZEILER.me",
  description: "Aus heutiger Sicht erscheinen Strafrecht, Strafverfahren und Strafvollzug im Mittelalter als unvorstellbar grausam und mitleidslos.",
}

export default function StrafrechtUndStrafvollzugPage() {
  return (
    <ArticleLayout 
      title="Strafrecht und Strafvollzug" 
      subtitle="Recht und Strafe im mittelalterlichen Heidelberg"
      author="Detlef Zeiler"
    >
      <p className="lead">
        Aus heutiger Sicht erscheinen Strafrecht, Strafverfahren und Strafvollzug im Mittelalter als unvorstellbar grausam und mitleidslos. Die mit fantasievollen Qualen verbundenen öffentlich vollstreckten Hinrichtungen wurden von der Obrigkeit bewusst als Volksfeste inszeniert.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Scale className="mr-2 h-5 w-5 text-primary" />
            Strafe - der Triumph des Guten
          </h2>
          <p className="text-muted-foreground mb-4">
            Aus heutiger Sicht erscheinen Strafrecht, Strafverfahren und Strafvollzug im Mittelalter als unvorstellbar grausam und mitleidslos. Die öffentlichen Hinrichtungen wurden bewusst als Volksfeste inszeniert.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zum Strafverständnis
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <FileText className="mr-2 h-5 w-5 text-primary" />
            Constitutio Criminalis Carolina
          </h2>
          <p className="text-muted-foreground mb-4">
            Das erste allgemeine deutsche Strafgesetzbuch war die Constitutio Criminalis Carolina (Peinliche Halsgerichtsordnung Kaiser Karls V.), die 1532 auf dem Regensburger Reichstag verabschiedet wurde.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zur Carolina
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Verbrechen und Strafen
          </h2>
          <p className="text-muted-foreground mb-4">
            Für Tötungsdelikte wurde stets die Todesstrafe (meist Rädern und Enthaupten) verhängt. Vieh- und Getreidediebstahl sowie Diebstahl in Kirchen, Schmieden und Mühlen zog in der Regel den Tod durch den Strang nach sich.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zu Verbrechen und Strafen
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Building className="mr-2 h-5 w-5 text-primary" />
            Strafordnung in Heidelberg
          </h2>
          <p className="text-muted-foreground mb-4">
            Wer in unseren Tagen auf Heidelbergs Marktplatz verweilt, ahnt kaum, daß zwischen Rathaus und Heiliggeistkirche jahrhundertelang Menschen enthauptet wurden. Der Marktplatz war Zentrum des öffentlichen Lebens und des Strafvollzugs.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zur Strafordnung
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Map className="mr-2 h-5 w-5 text-primary" />
            Richtstätten und Gefängnisse
          </h2>
          <p className="text-muted-foreground mb-4">
            Auch außerhalb der Stadt gab es eine stattliche Anzahl von Richtstätten. An der Kreuzung Rohrbacherstraße / Bergheimerstraße befand sich einst der "Rabenstein", wo ebenfalls mit dem Schwerte gerichtet wurde.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zu Richtstätten und Gefängnissen
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Strafrecht im mittelalterlichen Heidelberg</h2>
      
      <p>
        Das mittelalterliche Strafrecht in Heidelberg war, wie in anderen Städten dieser Zeit, geprägt von einer Mischung aus lokalen Rechtsgewohnheiten, überregionalen Rechtstraditionen und kirchlichen Einflüssen. Die Stadt Heidelberg als Residenz der Pfalzgrafen hatte dabei ihre eigenen Besonderheiten in der Rechtsprechung und im Strafvollzug.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Rechtsprechung und Gerichtsbarkeit</h3>
      <p>
        Die Gerichtsbarkeit in Heidelberg war zwischen verschiedenen Instanzen aufgeteilt. Der Stadtrat übte die niedere Gerichtsbarkeit aus und war für kleinere Vergehen zuständig. Die höhere Gerichtsbarkeit, insbesondere bei schweren Verbrechen, lag beim Pfalzgrafen oder seinen Beauftragten. Daneben gab es noch die kirchliche Gerichtsbarkeit, die vor allem für Vergehen gegen die Religion und für bestimmte Personengruppen wie Kleriker zuständig war.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Strafvollzug und öffentliche Hinrichtungen</h3>
      <p>
        Der Strafvollzug im mittelalterlichen Heidelberg war, wie überall im Mittelalter, stark auf Abschreckung ausgerichtet. Hinrichtungen wurden öffentlich vollzogen, oft auf dem Marktplatz, der das Zentrum des städtischen Lebens bildete. Die Zurschaustellung der Bestrafung sollte die Macht der Obrigkeit demonstrieren und potenzielle Täter abschrecken. Neben der Todesstrafe gab es eine Vielzahl anderer Strafen wie Verstümmelungen, Pranger, Verbannung oder Geldstrafen.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Gefängnisse und Haftbedingungen</h3>
      <p>
        Gefängnisse im heutigen Sinne existierten im mittelalterlichen Heidelberg kaum. Die Haft diente in erster Linie der Verwahrung bis zum Prozess oder bis zur Vollstreckung des Urteils, nicht als eigenständige Strafe. Die Haftbedingungen waren entsprechend hart und unhygienisch. Gefangene wurden oft in Türmen, Kellern oder anderen ungeeigneten Räumlichkeiten untergebracht.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg my-8 border border-border">
        <h3 className="text-xl font-semibold mb-3">Weiterführende Informationen</h3>
        <p className="mb-4">
          Die detaillierten Aspekte des Strafrechts und Strafvollzugs im mittelalterlichen Heidelberg finden Sie in den verlinkten Unterseiten. Diese Seiten bieten tiefere Einblicke in die historischen Praktiken und Orte der Rechtsprechung in der Stadt.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Strafe - der Triumph des Guten
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Constitutio Criminalis Carolina
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Verbrechen und Strafen
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Strafordnung in Heidelberg
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Richtstätten und Gefängnisse
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Anmerkungen
          </Link>
        </div>
      </div>
    </ArticleLayout>
  )
}
