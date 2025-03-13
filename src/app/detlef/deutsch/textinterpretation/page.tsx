import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function TextinterpretationPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Textinterpretation
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Deutsch</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>Beispiele</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <p className="text-lg text-muted-foreground">
          Eine Sammlung von Beispielen für Textinterpretationen verschiedener literarischer Werke.
          Diese Beispiele können als Orientierung für eigene Interpretationen dienen.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <h2 className="text-2xl font-bold mb-4">Beispiele für Textinterpretationen</h2>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {/* Example 1 */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Armer und reicher Teufel</h3>
              <p className="text-sm text-muted-foreground mb-4">Ernst Bloch, 1930</p>
              <div className="flex flex-col gap-2">
                <Link 
                  href="https://www.zeiler.me/detlef/deutsch/fremdenfeindlichkeit/armer-und-reicher-teufel"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Interpretation</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <a 
                  href="http://www2.klett.de/sixcms/media.php/229/313965_0016.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Textvorlage</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Example 2 */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Ein netter Kerl</h3>
              <p className="text-sm text-muted-foreground mb-4">Gabriele Wohmann, 1978</p>
              <div className="flex flex-col gap-2">
                <Link 
                  href="https://www.zeiler.me/detlef/deutsch/textinterpretation/ein-netter-kerl"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Interpretation</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <a 
                  href="http://za.lernnetz2.de/docs/2010/msa/msa_deutsch_schuelerheft.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Textvorlage</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Example 3 */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Geier</h3>
              <p className="text-sm text-muted-foreground mb-4">Theo Schmich, 1974</p>
              <div className="flex flex-col gap-2">
                <a 
                  href="http://www.theo-schmich.de/#Geschichten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Textvorlage</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Example 4 */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Wie ist der Mensch?</h3>
              <p className="text-sm text-muted-foreground mb-4">Michel de Montaigne</p>
              <div className="flex flex-col gap-2">
                <Link 
                  href="https://www.zeiler.me/detlef/deutsch/textinterpretation/einige-beispiele/wie-ist-der-mensch-michel-de-montaigne"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Interpretation</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Example 5 */}
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Das Eiserne Kreuz</h3>
              <p className="text-sm text-muted-foreground mb-4">Heiner Müller</p>
              <div className="flex flex-col gap-2">
                <Link 
                  href="https://www.zeiler.me/detlef/deutsch/textinterpretation/das-eiserne-kreuz"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Interpretation</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
                <Link 
                  href="https://www.zeiler.me/detlef/geschichte/das-eiserne-kreuz"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <span>Zur Textvorlage</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        <div className="bg-muted/40 p-6 rounded-md border mt-8">
          <h3 className="text-xl font-semibold mb-4">Über Textinterpretation</h3>
          <p>
            Die Textinterpretation ist eine grundlegende Methode der Literaturanalyse. Sie zielt darauf ab, 
            einen Text nicht nur inhaltlich zu erfassen, sondern auch seine tiefere Bedeutung, Struktur, 
            Sprache und Intention zu verstehen. Die hier vorgestellten Beispiele dienen als Anregung und 
            Orientierung für eigene Interpretationen.
          </p>
        </div>
      </div>
    </div>
  );
}
