import { FC, ReactNode } from "react"
import Link from "next/link"

interface ArticleLayoutProps {
  title: string
  subtitle?: string
  author: string
  children: ReactNode
}

export const ArticleLayout: FC<ArticleLayoutProps> = ({
  title,
  subtitle,
  author,
  children,
}) => {
  return (
    <div className="container py-10 animate-fade-in">
      <div className="mb-10">
        <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent mb-8 rounded-full" />
        <h1 className="text-4xl font-bold mb-4 relative">
          {title}
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary rounded-full"></span>
        </h1>
        {subtitle && (
          <h2 className="text-2xl font-medium text-muted-foreground mb-4">{subtitle}</h2>
        )}
        <p className="text-muted-foreground mb-8 italic">Von {author}</p>
      </div>
      
      <article className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-secondary/80 prose-img:rounded-xl prose-img:shadow-lg">
        <div className="animate-slide-up">
          {children}
        </div>
      </article>
      
      <div className="mt-16 border-t pt-8 text-center">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
