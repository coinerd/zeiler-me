import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, User } from "lucide-react";

export default function TexteroerterungPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fade-in">
      {/* Hero Section */}
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
            Texterörterung
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded"></div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>Deutsch</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>Thomas Hobbes</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="my-8">
        <p className="text-lg text-muted-foreground">
          Auszüge aus dem „Leviathan" (S. 40 – 43) von Thomas Hobbes, einem der bedeutendsten politischen Philosophen der Neuzeit.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div className="bg-muted/40 p-6 rounded-md border mb-8">
          <h3 className="text-xl font-semibold mb-4">Informationen zum Autor</h3>
          <p>
            Thomas Hobbes (1588-1679) war ein englischer Mathematiker, Staatstheoretiker und Philosoph. 
            Sein 1651 erschienenes Hauptwerk „Leviathan oder Stoff, Form und Gewalt eines bürgerlichen und 
            kirchlichen Staates" gilt als eines der einflussreichsten Werke der politischen Philosophie.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Aus: Thomas Hobbes, Leviathan oder Stoff, Form und Gewalt eines bürgerlichen und kirchlichen Staates, 
            hg. v. Iring Fetscher, Neuwied und Berlin 1966.
          </p>
        </div>

        <Card className="mb-8 background-gradient text-muted-foreground">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Auszug aus dem Leviathan</h2>
            <div className="space-y-4">
              <p>
                „[…] Die Natur hat die Menschen hinsichtlich ihrer körperlichen und geistigen Fähigkeiten so gleich geschafften, 
                dass trotz der Tatsache, dass bisweilen der eine einen offensichtlich stärkeren Körper oder gewandteren Geist 
                als der andere besitzt, der Unterscheid zwischen den Menschen alles in allem doch nicht so beträchtlich ist, 
                als dass der eine auf Grund dessen einen Vorteil beanspruchen könnte, den ein anderer nicht ebenso gut für sich 
                verlangen dürfte.
              </p>
              <p>
                Denn was die Körperstärke betrifft, so ist der Schwächste stark genug, den Stärksten zu töten – entweder durch 
                Hinterlist oder durch ein Bündnis mit anderen, die sich in derselben Gefahr wie er selbst befinden. Und was die 
                geistigen Fähigkeiten betrifft, so finde ich, dass die Gleichheit unter den Menschen noch größer ist als bei der 
                Körperstärke – einmal abgesehen von den auf Wörtern beruhenden Künsten und besonders von der Fertigkeit, nach 
                allgemeinen und unfehlbaren Regeln vorzugehen, was man Wissenschaft nennt. [...] Denn Klugheit ist nur Erfahrung, 
                die alle Menschen, die sich gleich lang mit dem gleichen Dinge beschäftigen, gleichermaßen erwerben.
              </p>
              <p>
                [...] So liegen also in der menschlichen Natur drei hauptsächliche Konfliktursachen: erstens Konkurrenz, zweitens 
                Misstrauen, drittens Ruhmsucht. Die erste führt zu Übergriffen der Menschen des Gewinns, die zweite der Sicherheit 
                und die dritte des Ansehens wegen. Die ersten wenden Gewalt an, um sich zum Herrn über andere Männer und deren 
                Frauen, Kinder und Vieh zu machen, die zweiten, um dies zu verteidigen und die dritten wegen Kleinigkeiten wie ein 
                Wort, ein Lächeln, eine verschiedene Meinung oder jedes andere Zeichen von Geringschätzung, das entweder direkt 
                gegen sie selbst gerichtet ist oder in einem Tadel ihrer Verwandtschaft, ihrer Freunde, ihres Volkes, ihres Berufs 
                oder ihres Namens besteht.
              </p>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Das natürliche Recht und der Naturzustand</h3>
          
          <div className="bg-primary/5 p-6 rounded-md border-l-4 border-primary">
            <p className="mb-4">
              „Das natürliche Recht ist die Freiheit eines jeden, seine eigene Macht nach seinem WiIlen zur Erhaltung seiner 
              eigenen Natur einzusetzen und folglich alles zu tun, was er als das geeignetste Mittel ansieht.
            </p>
            <p>
              Unter Freiheit versteht man nach der eigentlichen Bedeutung des Wortes die Abwesenheit äußerer Hindernisse. […]"
            </p>
          </div>
          
          <p className="text-lg">
            Hobbes beschreibt hier das Naturrecht als die grundlegende Freiheit jedes Menschen, alles zu tun, was er für seine 
            Selbsterhaltung als notwendig erachtet. Diese Freiheit ist nur durch äußere Hindernisse begrenzt.
          </p>
          
          <div className="bg-secondary/10 p-6 rounded-md border">
            <p className="mb-4">
              „Aus der Gleichheit der Fähigkeiten entsteht eine Gleichheit der Hoffnung, unsere Absichten erreichen zu können. 
              Und wenn daher zwei Menschen nach demselben Gegenstand streben, den sie jedoch nicht zusammen genießen können, 
              so werden sie Feinde und sind in Verfolgung ihrer Absicht, die grundsätzliche Selbsterhaltung ist, bestrebt, 
              sich gegenseitig zu vernichten oder zu unterwerfen.
            </p>
            <p className="mb-4">
              Und wegen dieses gegenseitigen Misstrauens gibt es für niemanden einen anderen Weg, sich selbst zu sichern, als 
              Vorbeugung/Zuvorkommen: nämlich dass ein jeder mit Gewalt oder List all jene sich so lange zu unterwerfen versucht, 
              solange er sieht, dass es noch solche gibt, vor denen er sich hüten müsse. Und dies ist nicht mehr, als seine 
              Selbsterhaltung fordert und ist allgemein erlaubt.
            </p>
            <p>
              Daraus ergibt sich klar, dass die Menschen während der Zeit, in der sie ohne eine allgemeine, sie alle im Zaum 
              haltende Macht leben, sich in einem Zustand befinden, der Krieg genannt wird, und zwar in einem Krieg eines jeden 
              gegen jeden."
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Die Einsetzung des Staates</h3>
          
          <div className="bg-muted/40 p-6 rounded-md border">
            <p>
              „Ein Staat wird eingesetzt genannt, wenn bei einer Menge von Menschen, die freiwillig zusammengekommen sind, 
              jeder mit jedem, dass alle demjenigen Menschen oder demjenigen Zusammenschluss gehorchen, dem der Großteil die 
              Stimme gab, damit er die Rolle aller übernehme. Jeder von ihnen ist verpflichtet, sei es, dass sie ihm die Stimme 
              gegeben haben, sei es, dass sie sie ihm nicht gegeben haben, ihm, den der Großteil gewählt hat, zu gehorchen, und 
              er ist für den Urheber aller seiner Maßnahmen zu halten. Denn wenn man nicht versteht, dass die Stimmen aller im 
              Großteil erfasst worden sind, ist man umsonst zusammengekommen und ihm von jedem entgegen einem Ziel versprochen 
              worden, natürlich den Frieden und der Schutz aller."
            </p>
          </div>
          
          <p className="text-lg">
            Hier beschreibt Hobbes die Einsetzung eines Staates durch einen Gesellschaftsvertrag, bei dem die Menschen freiwillig 
            zusammenkommen und sich mehrheitlich einer Autorität unterwerfen, um dem Naturzustand des "Krieges aller gegen alle" 
            zu entkommen und Frieden sowie Schutz zu erlangen.
          </p>
        </div>

        <div className="my-10 p-6 border rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5">
          <h3 className="text-xl font-semibold mb-4">Über die Texterörterung</h3>
          <p>
            Die Texterörterung ist eine Form der Auseinandersetzung mit einem Text, bei der es darum geht, die Aussagen und 
            Argumente des Textes zu analysieren, zu interpretieren und kritisch zu reflektieren. Im Gegensatz zur reinen 
            Textinterpretation steht bei der Texterörterung die Auseinandersetzung mit den im Text enthaltenen Thesen und 
            Argumenten im Vordergrund.
          </p>
        </div>
      </div>
    </div>
  );
}
