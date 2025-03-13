import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, Map } from "lucide-react"

export const metadata: Metadata = {
  title: "Stadtgründung - Stadtentwicklung | ZEILER.me",
  description: "Der bestimmende Faktor für die Besiedlung und die kulturelle Erschließung des Heidelberger Raumes war die Gründung der Benediktinerabtei Lorsch im Jahre 764.",
}

export default function StadtgruendungStadtentwicklungPage() {
  return (
    <ArticleLayout 
      title="Stadtgründung - Stadtentwicklung" 
      subtitle="Die Entstehung und Entwicklung Heidelbergs im Mittelalter"
      author="Detlef Zeiler"
    >
      <p className="lead">
        Der bestimmende Faktor für die Besiedlung und die kulturelle Erschließung des Heidelberger Raumes war die Gründung der Benediktinerabtei Lorsch im Jahre 764. In den Urkunden des Lorscher Codex werden lange vor der Gründung der Stadt Heidelberg heutige Stadtteile erwähnt: Neuenheim 765, Handschuhsheim 765, Rohrbach 766, Kirchheim 767, Wieblingen 767 und Bergheim 769.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Stadtverfassung
          </h2>
          <p className="text-muted-foreground mb-4">
            Der bestimmende Faktor für die Besiedlung und die kulturelle Erschließung des Heidelberger Raumes war die Gründung der Benediktinerabtei Lorsch im Jahre 764. Die Urkunden des Lorscher Codex erwähnen viele heutige Stadtteile lange vor der eigentlichen Stadtgründung.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zur Stadtverfassung
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Map className="mr-2 h-5 w-5 text-primary" />
            Entstehung und Namensgebung
          </h2>
          <p className="text-muted-foreground mb-4">
            Vermutlich während der Amtszeit Pfalzgraf Rudolfs entstand unter seiner Burg eine Versorgungssiedlung, die später als Heidelberg bezeichnet wurde. Burg und Siedlung gehörten den Bischöfen von Worms, und die Pfalzgrafen nahmen sie von ihnen zu Lehen.
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zur Entstehung und Namensgebung
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Map className="mr-2 h-5 w-5 text-primary" />
            Der Stadtaufbau von Heidelberg
          </h2>
          <p className="text-muted-foreground mb-4">
            Der Grundriß der staufischen Kernaltstadt zeigt durch seine Regelmäßigkeit die planmäßige Anlage neben dem bereits bestehenden Weiler. Die Altstadt war von der Planken- bis zur Grabengasse 600 m lang und an der Grabengasse 450 m breit. Parallel zum Neckar erstreckte sich die Hauptstraße als Längsachse vom Obertor zum Untertor (später Mitteltor).
          </p>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Mehr zum Stadtaufbau
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Historische Entwicklung Heidelbergs</h2>
      
      <p>
        Die Geschichte Heidelbergs als Stadt beginnt im Hochmittelalter, obwohl die Region bereits deutlich früher besiedelt war. Die strategisch günstige Lage am Neckar, geschützt durch die umliegenden Berge, machte das Gebiet zu einem idealen Siedlungsplatz.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Vorgeschichte und frühe Besiedlung</h3>
      <p>
        Lange vor der eigentlichen Stadtgründung war der Heidelberger Raum bereits besiedelt. Die Römer hinterließen ihre Spuren, und nach dem Zusammenbruch des Römischen Reiches siedelten sich Alemannen und später Franken in der Region an. Mit der Gründung des Klosters Lorsch im 8. Jahrhundert begann eine systematischere Erschließung des Gebiets.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Stadtgründung unter den Staufern</h3>
      <p>
        Die eigentliche Stadtgründung erfolgte vermutlich unter den Staufern im 12. Jahrhundert. Die planmäßige Anlage der Altstadt mit ihrem regelmäßigen Grundriss deutet auf eine bewusste Stadtplanung hin. Die Stadt entwickelte sich zunächst als Versorgungssiedlung für die Burg, gewann aber bald an eigenständiger Bedeutung.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Heidelberg unter den Pfalzgrafen</h3>
      <p>
        Mit der Übernahme durch die Pfalzgrafen bei Rhein begann für Heidelberg eine Zeit des Aufschwungs. Die Stadt wurde zur Residenz der Kurfürsten und entwickelte sich zu einem bedeutenden politischen und kulturellen Zentrum. Die Gründung der Universität im Jahr 1386 durch Ruprecht I. markierte einen weiteren wichtigen Meilenstein in der Stadtgeschichte.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg my-8 border border-border">
        <h3 className="text-xl font-semibold mb-3">Weiterführende Informationen</h3>
        <p className="mb-4">
          Die detaillierte Geschichte der Stadtgründung, -entwicklung und -verfassung Heidelbergs finden Sie in den verlinkten Unterseiten. Diese Seiten bieten tiefere Einblicke in die historischen Prozesse, die zur Entstehung und Entwicklung der Stadt geführt haben.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zur Stadtverfassung
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zur Entstehung und Namensgebung
          </Link>
          <Link 
            href="/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Zum Stadtaufbau
          </Link>
        </div>
      </div>
    </ArticleLayout>
  )
}
