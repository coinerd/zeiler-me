import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">ZEILER.me</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <NavigationMenu>
              <ul className="nav-list flex flex-wrap justify-center gap-4 p-2 md:p-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 rounded-md font-medium">Detlef Zeiler</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-800 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow duration-200"
                            href="/detlef/projekte"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Detlef Zeiler
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Artikel und Projekte von Detlef Zeiler
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <NavigationMenuLink asChild>
                          <Link href="/detlef/projekte/heidelberg-im-mittelalter" legacyBehavior passHref>
                            <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-accent/80 dark:focus:bg-accent/80">
                              <div className="text-sm font-medium leading-none">Heidelberg im Mittelalter</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Hexenglauben und mehr zur Geschichte von Heidelberg
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <Link href="/detlef/projekte/neuenheim" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-accent/80 dark:focus:bg-accent/80">
                            <div className="text-sm font-medium leading-none">Neuenheim</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Neuenheim wird Stadtteil von Heidelberg
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                      <div>
                        <Link href="/detlef/medien" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-accent/80 dark:focus:bg-accent/80">
                            <div className="text-sm font-medium leading-none">Medien</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Artikel und Projekte zum Thema Medien
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 rounded-md font-medium">Julian Zeiler</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-800 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow duration-200"
                            href="/julian/artikel"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              Julian Zeiler
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Artikel und Projekte von Julian Zeiler
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <Link href="/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-accent/80 dark:focus:bg-accent/80">
                            <div className="text-sm font-medium leading-none">Open Source Lizenzen</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Auswirkungen von Ideologien der Open Source Lizenzen
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </ul>
            </NavigationMenu>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
