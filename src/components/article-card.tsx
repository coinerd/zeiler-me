import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
  category?: string;
  image?: string;
  borderColor?: 'primary' | 'secondary' | 'accent';
}

export function ArticleCard({
  title,
  description,
  href,
  category,
  image,
  borderColor = 'primary',
}: ArticleCardProps) {
  if (image) {
    return (
      <Card className="card-transition overflow-hidden border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {category && (
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                {category}
              </span>
            )}
            <h3 className="text-lg font-bold leading-tight text-white drop-shadow-md">{title}</h3>
          </div>
        </div>
        <CardContent className="pb-4 pt-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <Link href={href} className="w-full">
            <Button
              variant="outline"
              className="group flex h-9 w-full items-center justify-between rounded-md border-border/50 text-[13px] font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
            >
              <span>Artikel lesen</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  const borderClass = {
    primary: 'border-t-2 border-primary/25',
    secondary: 'border-t-2 border-secondary/25',
    accent: 'border-t-2 border-accent/40',
  }[borderColor];

  return (
    <Card
      className={`${borderClass} card-transition border border-border/50 bg-card shadow-[0_1px_2px_rgba(0,0,0,0.03)]`}
    >
      {category && (
        <span className="block px-6 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/40">
          {category}
        </span>
      )}
      <CardHeader className={category ? 'pb-3 pt-2' : 'pb-3'}>
        <CardTitle className="text-[15px] font-semibold leading-[1.4] tracking-[-0.01em]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-5">
        <p className="text-[14px] leading-[1.7] text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button
            variant="outline"
            className="group flex h-9 w-full items-center justify-between rounded-md border-border/50 text-[13px] font-medium text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
          >
            <span>Artikel lesen</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
