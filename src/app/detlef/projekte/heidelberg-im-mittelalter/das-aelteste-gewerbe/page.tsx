import { ArticleLayout } from "@/components/article-layout"
import { Metadata } from "next"
import { AlertTriangle, History, BookOpen, FileText, Users } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Das älteste Gewerbe im alten Heidelberg | ZEILER.me",
  description: "\"Der gemeinen Frauen Haus\", so wurden im Mittelalter die Freudenhäuser genannt. Aus pfälzischen und Heidelberger Quellen erfahren wir zu diesem Thema folgendes.",
}

export default function AeltestesGewerbePage() {
  return (
    <ArticleLayout 
      title="Das älteste Gewerbe im alten Heidelberg" 
      subtitle="Prostitution im mittelalterlichen Heidelberg"
      author="Detlef Zeiler"
    >
      <Alert className="mb-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Historisches Thema</AlertTitle>
        <AlertDescription>
          Dieser Text behandelt historische Aspekte der Prostitution im mittelalterlichen Heidelberg und spiegelt die damaligen gesellschaftlichen Verhältnisse wider.
        </AlertDescription>
      </Alert>

      <p className="lead">
        "Der gemeinen Frauen Haus", so wurden im Mittelalter die Freudenhäuser genannt. Aus pfälzischen und Heidelberger Quellen erfahren wir zu diesem Thema folgendes Bild der Prostitution im mittelalterlichen Heidelberg.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Die Frauenhäuser in Heidelberg</h2>
      
      <p>
        Eines der "Frauenhäuser" lag in der Nähe der westlichen Stadtmauer in der Großmantelgasse. Die erste Erwähnung dieses Hauses findet man in einem pfälzischen Copialbuch des Generallandesarchivs. An Fastnacht des Jahres 1422 wurde dort der Begleiter einer fürstlichen Persönlichkeit schwer mißhandelt. Er war mit seiner Herrin auf der Durchreise, denn die Gräfin aus Württemberg hatte die Absicht, eine Hochzeit in Darmstadt zu besuchen. Der Kavalier mußte seinen Seitensprung schwer büßen. Er geriet mit einem der "Fürweßer" d.h. Aufseher eines solchen Hauses in Streit, man zog blank, wobei dem Gast die Hand abgehauen wurde. Diese Tatsache wurde ihm sogar vom Kurfürsten urkundlich bestätigt.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <History className="mr-2 h-5 w-5 text-primary" />
            Universitätsverordnungen
          </h3>
          <p className="text-muted-foreground">
            Im Laufe des 15. Jahrhunderts, und zwar in den Jahren 1442, 1444, 1454 und 1460 ergingen eine Reihe von Verordnungen der Universität gegen das längere Verweilen und Zechen von Studenten in solchen Häusern. Diese Verordnungen zeigen, dass die Universität versuchte, ihre Studenten von den Frauenhäusern fernzuhalten.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 border border-border hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-3 flex items-center">
            <BookOpen className="mr-2 h-5 w-5 text-primary" />
            Der Beichtspiegel von 1494
          </h3>
          <p className="text-muted-foreground">
            Ein Geistlicher, Heinrich Knoblochtzer, verfaßte im Jahre 1494 einen Beichtspiegel für Laien. Darin werden u.a. die im bürgerlichen Leben am häufigsten vorkommenden Sünden, 38 an der Zahl, aufgezählt. Den staatlichen Beamten werden lebhafte Vorwürfe wegen ihrer Nachsicht gemacht.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Regelungen und Vorschriften</h2>
      
      <p>
        Vor allem mißbilligt der Verfasser des Beichtspiegels, daß die Aufseher öffentlicher Häuser den Huren gestatten, in schändlichen und schlampigen Kleidungen auf die Straße und in die Kirche zu gehen. Mancher junge Mann wird damit zu Unlauterkeit der Begierde und vielleicht auch des Tuns bei einem solchen Anblick gereizt, der vielleicht sonst nicht daran gedacht hätte. Der Verfasser weist darauf hin, daß die öffentlichen Häuser nur zugelassen sind, um größere Übel der ledigen Gesellen zu vermeiden. Die Dirnen sollen jedoch weder im Hause selbst noch außerhalb mit Worten, Tun oder mit Gebärden jemanden "dartzu reitzen".
      </p>

      <p className="mt-4">
        Außer Hause sollen sie bei Gesellschaften, auf offenen Plätzen, auf Märkten oder bei Kirchweihen in ziemlicher Kleidung gehen. In der Kirche sollen sie so stehen, daß sie niemanden sehen und von niemandem gesehen werden. Nur sie selbst sollen den Altar sehen können. Außerdem sollen die Amtleute darauf achten, daß die Dirnen unter Eiden und unter Androhung schwerer Strafen mit keinem wissentlich sich zu schaffen machen, der im Ehestand lebt oder ein Gelübde der Keuschheit abgelegt hat. Zu diesen zählen alle Epistler, Evangelier, geistliche und weltliche Priester und Ordensleute.
      </p>

      <p className="mt-4">
        Weiterhin sollen die Verwalter alle "Frauenwirte" und "Frauenwirtinnen" dazu anhalten, daß sie keine Dirne ausleihen mit oder ohne derselben Wissen. Das könnte dazu führen, daß die armen Dirnen veranlaßt werden, noch länger in solchem Elend zu leben. Hieraus geht hervor, daß die Unzucht an und für sich damals weder als strafbar noch als Sünde aufgefaßt wurde. Es wurden nur die Verletzungen von seiten der Besucher jener Häuser geahndet. Außerdem machte sich strafbar, wer irgendeinen Zwang gegen die Insassinnen ausübte oder wer sie dazu anhielt, anzulocken oder zu verführen.
      </p>

      <div className="my-8 p-6 bg-muted/50 rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <FileText className="mr-2 h-5 w-5 text-primary" />
          Sittenverfall und Reformen
        </h3>
        <p className="mb-4">
          Auf einen Sittenverfall im 15. Jahrhundert deutet ein Erlaß des Pfalzgrafen Johann als Bischof von Regensburg hin. Er klagt 1508 seinen Clerus des zuchtlosen Lebenswandels an, indem sie ihre Concumbinen und Kinder ungescheut in ihren Wohnungen bei sich hätten.
        </p>
        <p>
          Der streng calvinistische Kurfürst Friedrich III., der Fromme, bestimmte in seiner Eheordnung von 1563 die gesetzliche Strafandrohung nicht allein gegen Ehebruch, sondern auch gegen jede "uneheliche Beiwohnung, Hurerei, Kuppelei und dergleichen Leichtfertigkeiten." In diese Zeit muß auch das Eingehen der "Frauenhäuser" gesetzt werden. Ludwig VI. nahm im Jahre 1582 die Eheordnung vollständig in sein Landrecht auf und bestätigte sie ausdrücklich.
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Gesellschaftliche Einordnung</h2>
      
      <p>
        Die Prostitution im mittelalterlichen Heidelberg war, wie in vielen anderen Städten dieser Zeit, eine gesellschaftliche Realität, die zwar moralisch verurteilt, aber dennoch geduldet wurde. Die "Frauenhäuser" waren eine institutionalisierte Form der Prostitution, die unter gewissen Auflagen und Regelungen existieren durfte. Diese ambivalente Haltung spiegelt die komplexe Beziehung der mittelalterlichen Gesellschaft zur Sexualität wider.
      </p>

      <p className="mt-4">
        Bemerkenswert ist, dass die Prostitution selbst nicht als strafbar galt, sondern nur bestimmte Umstände oder Verhaltensweisen im Zusammenhang mit ihr. Dies änderte sich erst mit dem Einfluss der Reformation und insbesondere des Calvinismus, der zu einer strengeren moralischen Haltung und schließlich zur Schließung der "Frauenhäuser" führte.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg my-8 border border-border">
        <h3 className="text-xl font-semibold mb-3 flex items-center">
          <Users className="mr-2 h-5 w-5 text-primary" />
          Weiterführende Informationen
        </h3>
        <p className="mb-4">
          Die Prostitution im mittelalterlichen Heidelberg steht in engem Zusammenhang mit den allgemeinen Sittenvorstellungen und dem Strafrecht dieser Zeit. Für ein tieferes Verständnis empfehlen sich folgende weiterführende Artikel:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/sittenstrafordnung-fuer-dirnen" className="text-primary hover:underline">
              Auszug aus der Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten Ott-Heinrich des Jahres 1532
            </Link>
          </li>
          <li>
            <Link href="/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug" className="text-primary hover:underline">
              Strafrecht und Strafvollzug im mittelalterlichen Heidelberg
            </Link>
          </li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
