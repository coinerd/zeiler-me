import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function BertholdVonRohrbachPage() {
  return (
    <article className="container max-w-3xl py-6 lg:py-10 animate-fade-in">
      {/* Back Navigation */}
      <Link href="/detlef/geschichte" className="inline-flex items-center rounded-md border px-3 py-1 text-sm shadow-sm gap-1.5 transition-colors mb-6 hover:bg-muted">
        <ArrowLeft className="h-4 w-4" />
        <span>Zurück zur Geschichte-Übersicht</span>
      </Link>

      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="rounded-md px-3 py-1">Mittelalter</Badge>
          <Badge variant="outline" className="rounded-md px-3 py-1">Ketzerverfolgung</Badge>
          <Badge variant="outline" className="rounded-md px-3 py-1">Lokalgeschichte</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Berthold von Rohrbach
        </h1>
        <div className="h-1 w-40 bg-gradient-to-r from-primary to-accent rounded"></div>
      </div>

      {/* Metadata */}
      <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
        <div className="inline-flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <time dateTime="1360">1360</time>
        </div>
        <div className="inline-flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>Speyer, Deutschland</span>
        </div>
        <div className="inline-flex items-center gap-1">
          <BookOpen className="h-4 w-4" />
          <span>Kirchengeschichte</span>
        </div>
      </div>
      
      <Separator className="my-6" />

      {/* Main Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl font-medium">
          Grausam und schrecklich war das Ende eines Rohrbachers, der sich mit der kirchlichen Justiz angelegt hatte.
        </p>

        <Card className="my-8 bg-primary/5 not-prose">
          <CardContent className="p-6">
            <p className="italic text-muted-foreground">
              &quot;Bruder Berthold von Rohrbach war Mitglied einer der im 13.-15. Jahrhundert immer wieder auflebenden Sektierergruppen, die in ihren Glaubensansichten von der kirchlichen Lehre abwichen und freieren religiösen Anschauungen huldigten.&quot;
            </p>
          </CardContent>
        </Card>

        <p>
          Da sie nun andere Gläubige von ihren Ideen zu überzeugen versuchten, ging die Kirche durch die „Inquisition", eine Art kirchliche Justizbehörde, mit aller Härte gegen die Ketzer vor.
        </p>

        <p>
          Berthold, Angehöriger der Gemeinschaft der „Gottesfreunde", zog in den Landen umher und predigte seine Lehre, bis man ihn in Würzburg festnahm und vor das Inquisitionsgericht stellte, das ihn verwarnte.
        </p>

        <p>
          Als er aber dennoch weiterpredigte, wurde er erneut verhaftet und zur höchsten Strafe verurteilt. Im Jahre 1360 wurde das Urteil vollstreckt und Berthold bei lebendigem Leibe in Speyer verbrannt.
        </p>

        <h2 className="text-2xl font-bold mt-8">Historischer Kontext</h2>
        
        <p>
          Die Ketzerverfolgung im 14. Jahrhundert war ein Instrument der Kirche, um abweichende Glaubenslehren zu unterdrücken. Die Inquisition, als kirchliche Sondergerichtsbarkeit, hatte die Aufgabe, die Lehren der Kirche gegen ketzerische Ansichten zu verteidigen und Andersdenkende zu bestrafen.
        </p>

        <p>
          Die „Gottesfreunde", zu denen Berthold von Rohrbach gehörte, waren eine mystische Bewegung, die eine direkte Beziehung zu Gott ohne kirchliche Vermittlung anstrebte. Diese Ansichten standen im Widerspruch zur offiziellen Kirchenlehre und wurden als gefährliche Ketzerei eingestuft.
        </p>

        <h2 className="text-2xl font-bold mt-8">Bedeutung für Rohrbach</h2>
        
        <p>
          Dieser tragische Fall zeigt, wie auch kleine Orte wie Rohrbach (heute ein Stadtteil von Heidelberg) mit den großen religiösen und politischen Strömungen des Mittelalters verbunden waren. Berthold von Rohrbach steht exemplarisch für die Spannungen zwischen individueller religiöser Überzeugung und institutioneller kirchlicher Macht im mittelalterlichen Deutschland.
        </p>
      </div>

      {/* Footer Section */}
      <div className="mt-8">
        <Separator className="my-4" />
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 1996-2025 Detlef und Julian Zeiler
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/detlef/geschichte">Alle Artikel</Link>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/detlef">Detlef Zeiler</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
