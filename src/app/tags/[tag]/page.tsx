/**
 * Tag Page — Lists all articles with a specific tag
 */
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllTags, getArticlesByTag } from '@/lib/content';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import Image from 'next/image';
import { Tag, ArrowRight } from 'lucide-react';
import { withBasePath } from '@/lib/utils';

// Image pool for tag hero variety
const heroImages = [
  '/images/detlef/projekte/heiligenberg/geschichte/image-5.jpg',
  '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg',
  '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg',
  '/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-1.jpg',
  '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-2.jpg',
  '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg',
  '/images/detlef/geschichte/thalmann/image-3.jpg',
  '/images/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/image-1.jpg',
  '/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-2.jpg',
  '/images/detlef/projekte/old-providence-die-insel-providencia/image-1.jpg',
];

// Thumbnail images for article cards
const cardImages = [
  '/images/detlef/projekte/heiligenberg/geschichte/image-3.jpg',
  '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg',
  '/images/detlef/projekte/neuenheim/ist-halb-europa/image-1.jpg',
  '/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-3.jpg',
  '/images/detlef/geschichte/thalmann/image-1.jpg',
  '/images/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/die-elsenz/image-1.jpg',
  '/images/detlef/projekte/heidelberger-schulgeschichten/anfaenge/image-1.jpg',
  '/images/detlef/medien/geruechte-rumores-drehbuch/image-1.jpg',
  '/images/detlef/projekte/old-providence-die-insel-providencia/image-1.jpg',
  '/images/detlef/projekte/neuenheim/interview-krauch/image-1.jpg',
];

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  return {
    title: `Artikel zum Thema "${decodedTag}" | ${siteConfig.name}`,
    description: `Alle Artikel mit dem Tag "${decodedTag}" auf zeiler.me`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const articles = getArticlesByTag(decodedTag);

  if (articles.length === 0) {
    notFound();
  }

  // Deterministic image selection based on tag name
  const imageIndex = decodedTag.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const heroImage = (heroImages[imageIndex % heroImages.length] ?? heroImages[0]) as string;

  return (
    <main className="animate-fade-in">
      {/* Cinematic Hero Section */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={withBasePath(heroImage)}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        </div>
        <div className="container relative z-10 max-w-4xl py-16">
          <Link href="/tags" className="text-sm text-white/60 transition-colors hover:text-white">
            ← Alle Themen
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Tag className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {decodedTag}
              </h1>
              <p className="mt-1 text-lg text-white/70">
                {articles.length} {articles.length === 1 ? 'Artikel' : 'Artikel'} gefunden
              </p>
            </div>
          </div>
          <div className="mt-8 h-1 w-40 rounded bg-gradient-to-r from-white/60 to-white/10"></div>
        </div>
      </section>

      {/* Articles list — with image thumbnails */}
      <div className="container max-w-4xl py-16">
        <div className="space-y-6">
          {articles.map((article, index) => {
            const href =
              article.collection === 'julian'
                ? `/julian/artikel/${article.slug}`
                : `/${article.collection}/${article.slug}`;

            const cardImage = (cardImages[index % cardImages.length] ?? cardImages[0]) as string;

            return (
              <article
                key={`${article.collection}-${article.slug}`}
                className="group overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <Link href={href}>
                  <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden md:col-span-1 md:h-full md:min-h-[180px]">
                      <Image
                        src={withBasePath(cardImage)}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-background/30 md:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
                    </div>
                    {/* Content */}
                    <div className="flex flex-col justify-center p-6 md:col-span-3">
                      <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-muted px-2.5 py-0.5 font-medium">
                          {article.collection === 'julian' ? 'Julian' : 'Detlef'}
                        </span>
                        {article.frontmatter.date && (
                          <time dateTime={article.frontmatter.date}>
                            {new Date(article.frontmatter.date).toLocaleDateString('de-DE')}
                          </time>
                        )}
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="mb-2 text-xl font-semibold transition-colors group-hover:text-primary">
                            {article.frontmatter.title}
                          </h2>
                          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {article.frontmatter.description}
                          </p>
                        </div>
                        <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
