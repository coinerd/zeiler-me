import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, History, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Universität und Studenten im Heidelberger Mittelalter | ZEILER.me",
  description: "Die Heidelberger Universität feierte 1986 ihr 600-jähriges Bestehen und rühmt sich, die älteste deutsche Universität zu sein.",
}

export default function UniversitaetUndStudentenPage() {
  return (
    <ArticleLayout 
      title="Universität und Studenten im Heidelberger Mittelalter" 
      subtitle="Geschichte der ältesten deutschen Universität"
      author="Detlef Zeiler"
    >
      <p className="lead">
        Die Heidelberger Universität feierte im Jahr 1986 ihr 600-jähriges Bestehen und rühmt sich, die älteste deutsche Universität zu sein. Die Gründung durch Kurfürst Ruprecht I. im Jahr 1386 markierte den Beginn einer langen und wechselvollen Geschichte.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <History className="mr-2 h-5 w-5 text-primary" />
            Einleitung
          </h2>
          <p className="text-muted-foreground mb-4">
            Die Heidelberger Universität feierte 1986 ihr 600-jähriges Bestehen und rühmt sich, die älteste deutsche Universität zu sein. Ihre Gründung fällt in eine Zeit, in der das Konzept der Universität als Bildungsinstitution in Europa bereits etabliert war.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zur Geschichte
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Motive für den Aufbau
          </h2>
          <p className="text-muted-foreground mb-4">
            Der ehrgeizige Wittelsbacher Ruprecht I. wollte das durch viele kleine Besitztümer zerschnittene pfälzische Territorium abrunden und eine einheitliche Verwaltung aufbauen. Dafür brauchte er kenntnisreiche Leute.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zu den Motiven
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5 text-primary" />
            Ausbau und Finanzierung
          </h2>
          <p className="text-muted-foreground mb-4">
            Im Jahre 1398 vergab der Papst auf Bitten der Kurfürsten der Universität 12 Pfründen aus den Domstiften Speyer und Worms und aus weiteren Stiften der beiden Städte und dem Territorium der Kurpfalz.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zur Finanzierung
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Users className="mr-2 h-5 w-5 text-primary" />
            Studentenunruhen
          </h2>
          <p className="text-muted-foreground mb-4">
            Das Zusammenleben von Studenten, Bürgern und Hofbediensteten war nicht immer friedlich. Konflikte und Unruhen prägten das mittelalterliche Universitätsleben in Heidelberg.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zu den Unruhen
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Die Universität Heidelberg im Mittelalter</h2>
      
      <p>
        Die Gründung der Universität Heidelberg im Jahr 1386 durch Kurfürst Ruprecht I. war ein bedeutender Schritt in der Entwicklung der Stadt. Als älteste Universität auf dem Gebiet des heutigen Deutschlands hat sie eine reiche und komplexe Geschichte, die eng mit der politischen und kulturellen Entwicklung der Kurpfalz verbunden ist.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Gründungsphase und erste Jahre</h3>
      <p>
        Die Universität wurde nach dem Vorbild der Pariser Universität gegründet und erhielt ihre Gründungsurkunde vom Papst Urban VI. am 23. Oktober 1385. Der offizielle Lehrbetrieb begann am 18. Oktober 1386 mit einer feierlichen Eröffnung in der Heiliggeistkirche. In den ersten Jahren waren die Bedingungen bescheiden - der Unterricht fand in angemieteten Räumen statt, und die Zahl der Studenten und Professoren war überschaubar.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Struktur und Organisation</h3>
      <p>
        Die mittelalterliche Universität war in vier Fakultäten gegliedert: die Artistenfakultät (später philosophische Fakultät) als Grundstufe sowie die höheren Fakultäten Theologie, Jura und Medizin. Die Artistenfakultät vermittelte das Grundwissen in den sieben freien Künsten (Grammatik, Rhetorik, Dialektik, Arithmetik, Geometrie, Musik und Astronomie) und war Voraussetzung für das Studium an den höheren Fakultäten.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Das Leben der Studenten</h3>
      <p>
        Die Studenten im mittelalterlichen Heidelberg kamen aus verschiedenen Regionen, vorwiegend aus dem Rheinland und Süddeutschland. Sie lebten in Bursen, gemeinschaftlichen Wohnhäusern, in denen sie unter Aufsicht eines Magisters studierten und lebten. Das Studentenleben war streng reglementiert, doch kam es immer wieder zu Konflikten mit der Stadtbevölkerung und zu Ausschreitungen.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg my-8 border border-border">
        <h3 className="text-xl font-semibold mb-3">Weiterführende Informationen</h3>
        <p className="mb-4">
          Die detaillierte Geschichte der Universität Heidelberg im Mittelalter, ihre Gründungsmotive, Finanzierung und die Konflikte zwischen Studenten und Stadtbevölkerung finden Sie in den verlinkten Unterseiten. Diese Seiten bieten tiefere Einblicke in die historischen Prozesse, die zur Entwicklung der ältesten deutschen Universität geführt haben.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zur Einleitung
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zu den Gründungsmotiven
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zum Ausbau und Finanzierung
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zu den Studentenunruhen
          </Link>
        </div>
      </div>
    </ArticleLayout>
  )
}
