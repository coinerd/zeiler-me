"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

// Data for Julian's articles
const julianArtikelComponents = [
  {
    title: "Agile Methoden in der Softwareentwicklung",
    href: "/julian/artikel/agile-methoden-in-der-softwareentwicklung",
    description: "Agile Methoden in der Softwareentwicklung.",
  },
  {
    title: "Auswirkungen von Ideologien der Open-Source-Lizenzen",
    href: "/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen",
    description: "Auswirkungen von Ideologien der Open-Source-Lizenzen.",
  },
  {
    title: "Was ist das Web 2.0?",
    href: "/julian/artikel/was-ist-das-web-20",
    description: "Was ist das Web 2.0?",
  },
]

export function MainNav() {
  // Force refresh with a timestamp comment
  // Updated: 2025-03-13T21:36:40
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Detlef Zeiler</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-800 p-6 no-underline outline-none focus:shadow-md"
                    href="/detlef"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                      Detlef Zeiler
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Übersicht der Artikel und Projekte von Detlef Zeiler.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
              
              <div className="space-y-3">
                <div className="font-medium text-primary">Themenbereiche</div>
                <Link href="/detlef/deutsch" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Deutsch</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Unterrichtsmaterialien und Textbeispiele.
                    </p>
                  </NavigationMenuLink>
                </Link>
                <Link href="/detlef/geschichte" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Geschichte</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Historische Artikel und Analysen.
                    </p>
                  </NavigationMenuLink>
                </Link>
                <Link href="/detlef/medien" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Medien</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Medienproduktionen und Medienerziehung.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </div>
              
              <div className="space-y-3">
                <div className="font-medium text-primary">Projekte</div>
                <Link href="/detlef/projekte/heidelberg-im-mittelalter" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Heidelberg im Mittelalter</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Historische Studien zum mittelalterlichen Heidelberg.
                    </p>
                  </NavigationMenuLink>
                </Link>
                <Link href="/detlef/projekte/heiligenberg" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Der Heiligenberg</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Informationen zum Heiligenberg bei Heidelberg.
                    </p>
                  </NavigationMenuLink>
                </Link>
                <Link href="/detlef/projekte/die-elsenz-und-der-kraichgau" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Die Elsenz und der Kraichgau</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Die Region Elsenz und Kraichgau.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </div>
              
              <div className="space-y-3">
                <div className="font-medium text-primary">Weitere Projekte</div>
                <Link href="/detlef/projekte/neuenheim" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Neuenheim</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Studien zum Heidelberger Stadtteil Neuenheim.
                    </p>
                  </NavigationMenuLink>
                </Link>
                <Link href="/detlef/projekte/heidelberger-schulgeschichten" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Heidelberger Schulgeschichten</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Geschichte des Heidelberger Schulwesens.
                    </p>
                  </NavigationMenuLink>
                </Link>
                <Link href="/detlef/projekte/old-providence-die-insel-providencia" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Die Insel Providencia</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Old Providence – Kulturelle Vielfalt in der Karibik.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Julian Zeiler</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-800 p-6 no-underline outline-none focus:shadow-md"
                    href="/julian"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                      Julian Zeiler
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Artikel und Projekte von Julian Zeiler.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
              
              <div className="space-y-3">
                <div className="font-medium text-primary">Artikel</div>
                <ul className="space-y-2 list-none p-0 m-0" style={{ listStyleType: 'none' }}>
                  {julianArtikelComponents.map((component) => (
                    <li key={component.title}>
                      <Link href={component.href} legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                          <div className="text-sm font-medium leading-none">{component.title}</div>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
