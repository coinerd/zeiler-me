import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105">
            <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ZEILER.me</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 animate-fade-in">
            <MainNav />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
