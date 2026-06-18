import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, FileText, Code, BookOpen, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getCollectionArticles } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Artikel | zeiler.me',
  description: 'Artikel zu Technologie, Programmierung und IT-Themen von Julian Zeiler',
  openGraph: {
    title: 'Artikel | zeiler.me',
    description: 'Artikel zu Technologie, Programmierung und IT-Themen von Julian Zeiler',
    url: 'https://zeiler.me/julian/artikel',
    siteName: 'zeiler.me',
    type: 'website',
  },
};

// Map of tag-to-icon associations for visual variety
const tagIcons: Record<string, LucideIcon> = {
  web: Code,
  technologie: Code,
  internet: Code,
  agile: FileText,
  entwicklung: Code,
  software: Code,
  'open-source': BookOpen,
  lizenzen: BookOpen,
};

function getIconForTags(tags: string[]): LucideIcon {
  for (const tag of tags) {
    const icon = tagIcons[tag.toLowerCase()];
    if (icon) return icon;
  }
  return Lightbulb;
}

export default function ArtikelOverviewPage() {
  const articles = getCollectionArticles('julian');

  return (
    <div className="animate-fade-in">
      {/* Hero Section with background image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10">
        <div className="absolute inset-0">
          <Image
            src="/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-2.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 max-w-4xl py-12 lg:py-16">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
                Artikel
              </h1>
              <div className="h-1 w-40 rounded bg-gradient-to-r from-primary to-accent"></div>
              <p className="text-xl text-muted-foreground">
                Technologie, Programmierung und IT-Themen von Julian Zeiler
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-4xl">
        {/* Introduction Section */}
        <div className="my-8">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Eine Sammlung von Artikeln zu verschiedenen Themen aus den Bereichen
            Softwareentwicklung, Web-Technologien und Open Source. Diese Beiträge bieten Einblicke
            in aktuelle Entwicklungen und grundlegende Konzepte der IT-Welt.
          </p>
        </div>

        <Separator className="my-8" />

        {/* Articles Grid — now dynamic from MDX content */}
        <div
          className={`grid gap-6 sm:grid-cols-1 ${articles.length >= 3 ? 'lg:grid-cols-2' : ''} my-8`}
        >
          {articles.map((article, index) => {
            const Icon = getIconForTags(article.frontmatter.tags);
            const isLastAndOdd = index === articles.length - 1 && articles.length % 2 === 1;

            return (
              <Card
                key={article.slug}
                className={`group cursor-pointer overflow-hidden transition-colors hover:border-primary ${
                  isLastAndOdd ? 'lg:col-span-2' : ''
                }`}
              >
                <Link href={`/julian/artikel/${article.slug}`} className="focus:outline-none">
                  {/* Visual header bar with gradient */}
                  <div className="h-2 bg-gradient-to-r from-secondary via-primary to-accent" />
                  <CardHeader className="p-6">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Icon className="h-5 w-5 text-primary" />
                      <span>{article.frontmatter.title}</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.frontmatter.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="line-clamp-3 leading-7">
                      {/* Show first ~200 chars of content as preview */}
                      {article.content
                        .replace(/^#+\s+.*$/gm, '')
                        .replace(/\n+/g, ' ')
                        .trim()
                        .slice(0, 200)}
                      …
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {article.frontmatter.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="transition-colors group-hover:bg-primary group-hover:text-white"
                    >
                      Weiterlesen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Additional Info with decorative image */}
        <div className="mt-12 overflow-hidden rounded-lg bg-muted/50">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
            <div className="relative min-h-[160px] md:col-span-1">
              <Image
                src="/images/detlef/projekte/heiligenberg/geschichte/image-5.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:col-span-3">
              <h2 className="mb-4 text-2xl font-bold">Über diese Artikel</h2>
              <p className="mb-4 leading-7">
                Die hier vorgestellten Artikel befassen sich mit verschiedenen Aspekten der
                Informationstechnologie und Softwareentwicklung. Sie sind das Ergebnis von Julians
                langjähriger Erfahrung in der IT-Branche und seinem Interesse an der Verbreitung von
                Wissen in diesen Bereichen.
              </p>
              <p className="leading-7">
                Weitere Artikel werden in regelmäßigen Abständen hinzugefügt, um aktuelle
                Entwicklungen und neue Technologien zu behandeln.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
