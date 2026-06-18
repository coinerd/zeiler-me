'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { SearchButton } from '@/components/search-button';
import { mainNavigation } from '@/lib/navigation';

const detlefNav = mainNavigation.find((n) => n.href === '/detlef')!;
const detlefSections = detlefNav.children ?? [];
const navLinkClasses =
  'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-accent/80 dark:focus:bg-accent/80';

const mobileLinkClasses =
  'block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground';

/* ------------------------------------------------------------------ */
/*  Desktop Mega-Menu                                                 */
/* ------------------------------------------------------------------ */
function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap justify-center gap-4 p-2 md:p-4">
        {/* Detlef */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-md text-sm font-medium hover:bg-muted">
            Detlef Zeiler
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary p-6 no-underline outline-none transition-shadow duration-200 hover:shadow-lg focus:shadow-md"
                    href="/detlef"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-primary-foreground">
                      Detlef Zeiler
                    </div>
                    <p className="text-sm leading-tight text-primary-foreground/80">
                      Übersicht der Artikel und Projekte von Detlef Zeiler.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>

              <div className="space-y-3">
                <div className="font-medium text-primary">Themenbereiche</div>
                {detlefSections.map((section) => (
                  <div key={section.href}>
                    <NavigationMenuLink asChild>
                      <Link href={section.href} className={navLinkClasses}>
                        <div className="text-sm font-medium leading-none">{section.title}</div>
                        {section.description && (
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {section.description}
                          </p>
                        )}
                      </Link>
                    </NavigationMenuLink>
                    {section.children && section.children.length > 0 && (
                      <div className="ml-4 space-y-1 border-l border-border/30 pl-3">
                        {section.children.map((sub) => (
                          <NavigationMenuLink asChild key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block py-0.5 text-xs text-muted-foreground transition-colors hover:text-primary"
                            >
                              {sub.title}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Julian */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-md text-sm font-medium hover:bg-muted">
            Julian Zeiler
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-secondary p-6 no-underline outline-none transition-shadow duration-200 hover:shadow-lg focus:shadow-md"
                    href="/julian"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-secondary-foreground">
                      Julian Zeiler
                    </div>
                    <p className="text-sm leading-tight text-secondary-foreground/80">
                      Artikel und Projekte von Julian Zeiler.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>

              <div className="space-y-3">
                <div className="font-medium text-primary">Artikel</div>
                <NavigationMenuLink asChild>
                  <Link href="/julian/artikel" className={navLinkClasses}>
                    <div className="text-sm font-medium leading-none">Alle Artikel</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Beiträge zu Softwareentwicklung, Web und Technologie.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Tags */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/tags" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
              Tags
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Drawer                                                     */
/* ------------------------------------------------------------------ */
function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col gap-1 overflow-y-auto py-4">
      {/* Detlef section */}
      <Accordion type="multiple" defaultValue={[]} className="w-full">
        <AccordionItem value="detlef" className="border-b-0">
          <AccordionTrigger className="px-3 py-2 text-base font-semibold hover:no-underline">
            Detlef Zeiler
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <Link href="/detlef" className={mobileLinkClasses} onClick={onClose}>
              Übersicht
            </Link>
            <div className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Themenbereiche
            </div>
            {detlefSections.map((section) => (
              <div key={section.href}>
                <Link href={section.href} className={mobileLinkClasses} onClick={onClose}>
                  {section.title}
                </Link>
                {section.children && (
                  <div className="ml-3 mt-1 border-l border-border/40 pl-4">
                    {section.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className={`${mobileLinkClasses} text-xs`}
                        onClick={onClose}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        {/* Julian section */}
        <AccordionItem value="julian" className="border-b-0">
          <AccordionTrigger className="px-3 py-2 text-base font-semibold hover:no-underline">
            Julian Zeiler
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            <Link href="/julian" className={mobileLinkClasses} onClick={onClose}>
              Übersicht
            </Link>

            <div className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Artikel
            </div>
            <Link href="/julian/artikel" className={mobileLinkClasses} onClick={onClose}>
              Alle Artikel
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Standalone links */}
      <Link href="/tags" className={mobileLinkClasses} onClick={onClose}>
        Tags
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/[0.97] backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Zum Hauptinhalt springen
      </a>
      <div className="container flex h-[60px] items-center sm:justify-between sm:space-x-0">
        {/* Logo */}
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block text-[16px] font-bold tracking-[-0.03em]">
              zeiler<span className="text-primary/50">.</span>me
            </span>
          </Link>
        </div>

        {/* Right side: nav + actions */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden items-center md:flex" aria-label="Hauptnavigation">
            <DesktopNav />
          </nav>

          {/* Mobile hamburger — hidden on desktop */}
          <div className="md:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label="Menü öffnen"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] overflow-y-auto sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <MobileNav onClose={() => setMobileOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>

          <ThemeToggle />
          <SearchButton />
        </div>
      </div>
    </header>
  );
}
