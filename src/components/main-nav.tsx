import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Stadtgründung - Stadtentwicklung",
    href: "/detlef/projekte/heidelberg-im-mittelalter/stadtgruendung-stadtentwicklung",
    description: "Die historische Entwicklung der Stadt Heidelberg im Mittelalter.",
  },
  {
    title: "Universität und Studenten",
    href: "/detlef/projekte/heidelberg-im-mittelalter/universitaet-und-studenten",
    description: "Geschichte der Universität Heidelberg und das Studentenleben im Mittelalter.",
  },
  {
    title: "Strafrecht und Strafvollzug",
    href: "/detlef/projekte/heidelberg-im-mittelalter/strafrecht-und-strafvollzug",
    description: "Das Strafrechtssystem und der Strafvollzug im mittelalterlichen Heidelberg.",
  },
  {
    title: "Sittenstrafordnung für Dirnen",
    href: "/detlef/projekte/heidelberg-im-mittelalter/sittenstrafordnung-fuer-dirnen",
    description: "Auszug aus der Sittenstrafordnung für Dirnen des Heidelberger Kurfürsten Ott-Heinrich.",
  },
  {
    title: "Das älteste Gewerbe",
    href: "/detlef/projekte/heidelberg-im-mittelalter/das-aelteste-gewerbe",
    description: "Prostitution im mittelalterlichen Heidelberg.",
  },
  {
    title: "Hexenglauben und Hexenprozesse",
    href: "/detlef/projekte/heidelberg-im-mittelalter/hexenglauben-und-hexenprozesse",
    description: "Die Ursprünge der Hexenverfolgung und deren Besonderheiten in Heidelberg.",
  },
  {
    title: "Juden im mittelalterlichen Heidelberg",
    href: "/detlef/projekte/heidelberg-im-mittelalter/juden-im-mittelalterlichen-heidelberg",
    description: "Geschichte der jüdischen Gemeinde im mittelalterlichen Heidelberg.",
  },
  {
    title: "Armenpflege und soziale Einrichtungen",
    href: "/detlef/projekte/heidelberg-im-mittelalter/armenpflege-und-soziale-einrichtungen",
    description: "Soziale Fürsorge im mittelalterlichen Heidelberg.",
  },
  {
    title: "Praktische Heimatkunde",
    href: "/detlef/projekte/heidelberg-im-mittelalter/praktische-heimatkunde",
    description: "Tipps und Aufgaben für Lehrer und Schüler zur praktischen Heimatkunde im Heidelberger Raum.",
  },
  {
    title: "Neuenheim wird Stadtteil von Heidelberg",
    href: "/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz",
    description: "Detlef Zeiler im Gespräch mit Otto Jäger und Ludwig Merz über die Eingemeindung Neuenheims.",
  },
  {
    title: "Die Insel Providencia",
    href: "/detlef/projekte/old-providence-die-insel-providencia",
    description: "Old Providence – Kulturelle Vielfalt in der Karibik.",
  },
  {
    title: "Der Heiligenberg bei Heidelberg",
    href: "/detlef/projekte/heiligenberg",
    description: "Geschichte und Bedeutung des Heiligenbergs bei Heidelberg.",
  },
  {
    title: "Die Elsenz und der Kraichgau",
    href: "/detlef/projekte/die-elsenz-und-der-kraichgau",
    description: "Erkundung der Region zwischen Odenwald und Schwarzwald.",
  },
  {
    title: "Heidelberger Schulgeschichten",
    href: "/detlef/projekte/heidelberger-schulgeschichten",
    description: "Die Entwicklung des Schulwesens in Heidelberg vom Mittelalter bis heute.",
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Detlef Zeiler</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-800 p-6 no-underline outline-none focus:shadow-md"
                    href="/detlef"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium text-white">
                      Detlef Zeiler
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Artikel, Projekte und Medien von Detlef Zeiler.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li className="col-span-1">
                <Link href="/detlef/geschichte/alexander-von-humboldts-sdamerikareise" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Alexander von Humboldt</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Südamerikareise und wissenschaftliche Errungenschaften.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/detlef/medien/geruechte-rumores-drehbuch" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Gerüchte – Rumores</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Drehbuch und Storyboard zu einem Kurzfilm.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/detlef/geschichte/was-mich-betrifft" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Was mich (be)trifft</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Menschenwürde und Rechtsstaat - Persönliche Reflexionen.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/detlef/projekte/dritte-gewalt-strafvollzug" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Dritte Gewalt - Strafvollzug</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Ein Videofilmprojekt über das Justizsystem und den Strafvollzug.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/detlef/medien/medienerziehung" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Medienerziehung</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Themen und Aspekte moderner Medienerziehung.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/detlef/projekte/heidelberg-im-mittelalter" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Heidelberg im Mittelalter</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Historische Artikel über das mittelalterliche Heidelberg.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/heidelberger-projekte" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Heidelberger Projekte</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Sammlung von Projekten mit Bezug zu Heidelberg.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Heidelberg im Mittelalter</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.slice(0, 9).map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Julian Zeiler</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
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
              </li>
              <li className="col-span-1">
                <Link href="/julian/artikel" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Alle Artikel</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Übersicht aller Artikel von Julian Zeiler.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/julian/artikel/was-ist-das-web-20" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Web 2.0</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Was ist das Web 2.0? Ein Blick auf die Evolution des Internets.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/julian/artikel/agile-methoden-in-der-softwareentwicklung" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Agile Methoden</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Agile Methoden in der Softwareentwicklung.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li className="col-span-1">
                <Link href="/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700">
                    <div className="text-sm font-medium leading-none">Open Source Lizenzen</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
                      Auswirkungen von Ideologien der Open Source Lizenzen.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
