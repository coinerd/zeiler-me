import Link from 'next/link';
import { authors } from '@/lib/authors';

const detlef = authors.detlef!;
const julian = authors.julian!;

const footerLinkClasses =
  'text-[13px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors duration-200';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-12 md:py-16">
      <div className="container max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[-0.02em] transition-colors hover:text-primary"
            >
              zeiler<span className="text-primary/50">.me</span>
            </Link>
            <p className="text-xs text-muted-foreground/80">
              Geschichte · Medien · Technologie aus Heidelberg
            </p>
          </div>

          {/* Detlef */}
          <nav aria-label="Detlef Zeiler Navigation" className="flex flex-col gap-2">
            <h3 className="mb-3 text-sm font-semibold text-foreground/80">Detlef Zeiler</h3>
            <Link href={detlef.href} className={footerLinkClasses}>
              Übersicht
            </Link>
            {detlef.sections.map((section) => (
              <Link key={section.href} href={section.href} className={footerLinkClasses}>
                {section.title}
              </Link>
            ))}
          </nav>

          {/* Julian */}
          <nav aria-label="Julian Zeiler Navigation" className="flex flex-col gap-2">
            <h3 className="mb-3 text-sm font-semibold text-foreground/80">Julian Zeiler</h3>
            <Link href={julian.href} className={footerLinkClasses}>
              Übersicht
            </Link>
            {julian.sections.map((section) => (
              <Link key={section.href} href={section.href} className={footerLinkClasses}>
                {section.title}
              </Link>
            ))}
          </nav>

          {/* Meta */}
          <nav aria-label="Allgemeine Navigation" className="flex flex-col gap-2">
            <h3 className="mb-3 text-sm font-semibold text-foreground/80">Allgemeines</h3>
            <Link href="/" className={footerLinkClasses}>
              Startseite
            </Link>
            <Link href="/tags" className={footerLinkClasses}>
              Tags
            </Link>
            <Link href="/impressum" className={footerLinkClasses}>
              Impressum
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-border/20 pt-6 text-center">
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
