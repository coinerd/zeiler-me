/**
 * Tags Index Page — Lists all available tags
 */
import type { Metadata } from 'next';
import { getAllTags, getArticlesByTag } from '@/lib/content';
import { siteConfig } from '@/lib/config';
import Link from 'next/link';
import Image from 'next/image';
import { withBasePath } from '@/lib/utils';
import { Tag, Hash } from 'lucide-react';

export const metadata: Metadata = {
  title: `Alle Themen | ${siteConfig.name}`,
  description: 'Übersicht aller Themen und Tags auf zeiler.me',
};

// Image pool for tag visual variety
const tagImages = [
  '/images/detlef/projekte/heiligenberg/geschichte/image-5.jpg',
  '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-1.jpg',
  '/images/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse/image-1.jpg',
  '/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-1.jpg',
  '/images/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz/image-2.jpg',
  '/images/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde/image-1.jpg',
  '/images/detlef/geschichte/thalmann/image-3.jpg',
  '/images/detlef/projekte/heiligenberg/der-unheimliche-berg/image-2.jpg',
  '/images/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage/image-1.jpg',
  '/images/detlef/projekte/old-providence-die-insel-providencia/image-1.jpg',
];

// Color palette for tag cards
const tagColors = [
  { bg: 'from-primary/20 to-primary/5', border: 'border-primary/20', text: 'text-primary' },
  { bg: 'from-secondary/20 to-secondary/5', border: 'border-secondary/20', text: 'text-secondary' },
  { bg: 'from-accent/20 to-accent/5', border: 'border-accent/20', text: 'text-accent' },
  {
    bg: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    bg: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-500/20',
    text: 'text-violet-600 dark:text-violet-400',
  },
  {
    bg: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
  },
];

export default async function TagsIndexPage() {
  const tags = getAllTags();

  // Get count for each tag
  const tagData = tags.map((tag, index) => ({
    tag,
    count: getArticlesByTag(tag).length,
    image: tagImages[index % tagImages.length] as string,
    color: tagColors[index % tagColors.length]!,
  }));

  return (
    <main className="animate-fade-in">
      {/* Cinematic Hero Section */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={withBasePath('/images/detlef/projekte/heiligenberg/geschichte/image-3.jpg')}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        <div className="container relative z-10 max-w-4xl py-16">
          <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
            ← Startseite
          </Link>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <Hash className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Alle Themen
              </h1>
              <p className="mt-1 text-lg text-white/70">
                {tags.length} {tags.length === 1 ? 'Thema' : 'Themen'} auf zeiler.me
              </p>
            </div>
          </div>
          <div className="mt-8 h-1 w-40 rounded bg-gradient-to-r from-white/60 to-white/10"></div>
        </div>
      </section>

      {/* Tags Grid — immersive cards with images */}
      <div className="container max-w-4xl py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tagData.map(({ tag, count, image, color }) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="group relative overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              {/* Card image background */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${color.bg}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                {/* Floating count badge */}
                <div className="absolute right-3 top-3 rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                  {count} {count === 1 ? 'Artikel' : 'Artikel'}
                </div>
              </div>
              {/* Card content */}
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <Tag className={`h-4 w-4 ${color.text}`} />
                  <h2 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {tag}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
