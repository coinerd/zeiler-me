import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const heidelbergMittelalterComponents: { title: string; href: string; description: string }[] = [
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
]

const heiligenbergComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Übersicht",
    href: "/detlef/projekte/heiligenberg",
    description: "Informationen zum Heiligenberg bei Heidelberg.",
  },
  {
    title: "Geschichte",
    href: "/detlef/projekte/heiligenberg/geschichte",
    description: "Die Geschichte des Heiligenbergs.",
  },
  {
    title: "Der unheimliche Berg",
    href: "/detlef/projekte/heiligenberg/der-unheimliche-berg",
    description: "Mythen und Legenden rund um den Heiligenberg.",
  },
  {
    title: "MOPÄD",
    href: "/detlef/projekte/heiligenberg/mopaed",
    description: "Mobile Pädagogik am Heiligenberg.",
  },
  {
    title: "Projekt",
    href: "/detlef/projekte/heiligenberg/projekt",
    description: "Projektbeschreibung zum Heiligenberg.",
  },
]

const elsenzKraichgauComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Geographische Lage",
    href: "/detlef/projekte/die-elsenz-und-der-kraichgau/geographische-lage",
    description: "Die geographische Lage der Elsenz und des Kraichgaus.",
  },
  {
    title: "Geschichte und Politik",
    href: "/detlef/projekte/die-elsenz-und-der-kraichgau/geschichte-und-politik",
    description: "Die Geschichte und Politik der Region.",
  },
  {
    title: "Kultur und Religion",
    href: "/detlef/projekte/die-elsenz-und-der-kraichgau/kultur-religion",
    description: "Kultur und Religion in der Region.",
  },
]

const neuenheimComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Überblick",
    href: "/detlef/projekte/neuenheim/ueberblick",
    description: "Ein Überblick über Neuenheim.",
  },
  {
    title: "Eingemeindung",
    href: "/detlef/projekte/neuenheim/eingemeindung",
    description: "Die Eingemeindung Neuenheims nach Heidelberg.",
  },
  {
    title: "Interview Krauch",
    href: "/detlef/projekte/neuenheim/interview-krauch",
    description: "Interview mit Herrn Krauch.",
  },
  {
    title: "Ist halb Europa",
    href: "/detlef/projekte/neuenheim/ist-halb-europa",
    description: "Neuenheim ist halb Europa.",
  },
  {
    title: "Otto Jäger und Ludwig Merz",
    href: "/detlef/projekte/neuenheim/otto-jaeger-ludwig-merz",
    description: "Detlef Zeiler im Gespräch mit Otto Jäger und Ludwig Merz.",
  },
]

const schulgeschichtenComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Anfänge",
    href: "/detlef/projekte/heidelberger-schulgeschichten/anfaenge",
    description: "Die Anfänge des Heidelberger Schulwesens.",
  },
  {
    title: "Bürger und Bauern",
    href: "/detlef/projekte/heidelberger-schulgeschichten/buerger-und-bauern",
    description: "Bürger und Bauern im Heidelberger Schulwesen.",
  },
  {
    title: "Das 18. Jahrhundert",
    href: "/detlef/projekte/heidelberger-schulgeschichten/das-18te-jahrhundert",
    description: "Das Heidelberger Schulwesen im 18. Jahrhundert.",
  },
  {
    title: "Das 19. Jahrhundert",
    href: "/detlef/projekte/heidelberger-schulgeschichten/das-19te-jahrhundert",
    description: "Das Heidelberger Schulwesen im 19. Jahrhundert.",
  },
  {
    title: "Das 20. Jahrhundert",
    href: "/detlef/projekte/heidelberger-schulgeschichten/das-20te-jahrhundert",
    description: "Das Heidelberger Schulwesen im 20. Jahrhundert.",
  },
  {
    title: "Lehrerschaft KFG 3. Reich",
    href: "/detlef/projekte/heidelberger-schulgeschichten/lehrerschaft-kfg-3tes-reich",
    description: "Die Lehrerschaft des KFG im 3. Reich.",
  },
  {
    title: "Schülerunruhen am KFG",
    href: "/detlef/projekte/heidelberger-schulgeschichten/schuelerunruhen-am-kfg",
    description: "Schülerunruhen am Kurfürst-Friedrich-Gymnasium.",
  },
]

const deutschComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Erörterung",
    href: "/detlef/deutsch/errterung",
    description: "Materialien zur Erörterung.",
  },
  {
    title: "Essay",
    href: "/detlef/deutsch/essay-themen/essay",
    description: "Materialien zum Essay.",
  },
  {
    title: "Fremdenfeindlichkeit",
    href: "/detlef/deutsch/fremdenfeindlichkeit",
    description: "Materialien zum Thema Fremdenfeindlichkeit.",
  },
  {
    title: "Nayirah",
    href: "/detlef/deutsch/nayirah",
    description: "Materialien zu Nayirah.",
  },
  {
    title: "Needful Things",
    href: "/detlef/deutsch/needful-things---in-einer-kleinen-stadt",
    description: "Materialien zu Needful Things.",
  },
  {
    title: "Texterörterung",
    href: "/detlef/deutsch/texterrterung",
    description: "Materialien zur Texterörterung.",
  },
  {
    title: "Textinterpretation",
    href: "/detlef/deutsch/textinterpretation",
    description: "Materialien zur Textinterpretation.",
  },
  {
    title: "Menschliche Moral",
    href: "/detlef/deutsch/versuch-einer-beschreibung-menschlicher-moral",
    description: "Versuch einer Beschreibung menschlicher Moral.",
  },
  {
    title: "Vom Text zum Schaubild",
    href: "/detlef/deutsch/vom-text-zum-schaubild",
    description: "Vom Text zum Schaubild.",
  },
]

const geschichteComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Alexander von Humboldts Südamerikareise",
    href: "/detlef/geschichte/alexander-von-humboldts-sdamerikareise",
    description: "Die wissenschaftliche Expedition Alexander von Humboldts durch Südamerika von 1799 bis 1804.",
  },
  {
    title: "Berthold von Rohrbach",
    href: "/detlef/geschichte/berthold-von-rohrbach",
    description: "Informationen zu Berthold von Rohrbach.",
  },
  {
    title: "Besuch in Simferopol 2018",
    href: "/detlef/geschichte/besuch-in-simferopol-2018",
    description: "Besuch in Simferopol im Jahr 2018.",
  },
  {
    title: "Ceausescu",
    href: "/detlef/geschichte/ceausescu",
    description: "Informationen zu Ceausescu.",
  },
  {
    title: "Gerüchte",
    href: "/detlef/geschichte/gerchte",
    description: "Informationen zu Gerüchten.",
  },
  {
    title: "Hooligans - Angry Young Men",
    href: "/detlef/geschichte/hooligans---angry-young-men",
    description: "Informationen zu Hooligans.",
  },
  {
    title: "Sind wir nur Tiere",
    href: "/detlef/geschichte/sind-wir-nur-tiere",
    description: "Sind wir nur Tiere?",
  },
  {
    title: "Was mich betrifft",
    href: "/detlef/geschichte/was-mich-betrifft",
    description: "Was mich betrifft.",
  },
  {
    title: "Zeit der Intrigen",
    href: "/detlef/geschichte/zeit-der-intrigen",
    description: "Zeit der Intrigen.",
  },
]

const medienComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Gerüchte - Rumores (Drehbuch)",
    href: "/detlef/medien/geruechte-rumores-drehbuch",
    description: "Drehbuch und Storyboard zu einem Kurzfilm.",
  },
  {
    title: "Medienerziehung",
    href: "/detlef/medien/medienerziehung",
    description: "Informationen zur Medienerziehung.",
  },
]

const julianArtikelComponents: { title: string; href: string; description: string }[] = [
  {
    title: "Agile Methoden in der Softwareentwicklung",
    href: "/julian/artikel/agile-methoden-in-der-softwareentwicklung",
    description: "Agile Methoden in der Softwareentwicklung.",
  },
  {
    title: "Auswirkungen von Ideologien der Open Source Lizenzen",
    href: "/julian/artikel/auswirkungen-von-ideologien-der-open-source-lizenzen",
    description: "Auswirkungen von Ideologien der Open Source Lizenzen.",
  },
  {
    title: "Was ist das Web 2.0?",
    href: "/julian/artikel/was-ist-das-web-20",
    description: "Eine Erklärung des Web 2.0.",
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
            <div className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3">
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
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-full justify-between text-left">Heidelberg im Mittelalter</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {heidelbergMittelalterComponents.map((component) => (
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
                  <NavigationMenuTrigger className="w-full justify-between text-left">Der Heiligenberg</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {heiligenbergComponents.map((component) => (
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
                  <NavigationMenuTrigger className="w-full justify-between text-left">Die Elsenz und der Kraichgau</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {elsenzKraichgauComponents.map((component) => (
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
              </div>
              
              <div className="space-y-3">
                <div className="font-medium text-primary">Weitere Projekte</div>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-full justify-between text-left">Neuenheim</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {neuenheimComponents.map((component) => (
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
                  <NavigationMenuTrigger className="w-full justify-between text-left">Heidelberger Schulgeschichten</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {schulgeschichtenComponents.map((component) => (
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
                <ul className="space-y-2">
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
        
        <NavigationMenuItem>
          <Link href="/impressum" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
              Impressum
            </NavigationMenuLink>
          </Link>
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
