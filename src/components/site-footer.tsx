import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-10 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {new Date().getFullYear()} ZEILER.me | Alle Rechte vorbehalten
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/detlef"
            className="text-sm font-medium text-primary underline-offset-4 hover:text-primary/80 hover:underline transition-colors"
          >
            Detlef Zeiler
          </Link>
          <Link
            href="/julian"
            className="text-sm font-medium text-secondary underline-offset-4 hover:text-secondary/80 hover:underline transition-colors"
          >
            Julian Zeiler
          </Link>
          <Link
            href="/impressum"
            className="text-sm font-medium text-accent underline-offset-4 hover:text-accent/80 hover:underline transition-colors"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  )
}
