"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import { Github } from "lucide-react"

export function SiteHeader() {
  const { setTheme } = useTheme()

  useEffect(() => {
    setTheme("dark") // Force dark theme
  }, [setTheme])

  return (
    <header className="sticky top-0 z-50 border-b border-primary/30 bg-black/80 backdrop-blur-md">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 group" aria-label="Home">
            <div className="relative w-8 h-8 flex items-center justify-center border border-primary/50 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <span className="font-mono text-primary font-bold">M</span>
            </div>
            <span className="font-mono font-bold tracking-tight text-primary group-hover:text-accent transition-colors">
              MANGLAM_JAISWAL
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {["ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
                <li key={item}>
                  <a
                    className="text-xs font-mono tracking-widest hover:text-primary transition-colors relative group py-2"
                    href={`#${item.toLowerCase()}`}
                  >
                    <span className="text-primary/50 mr-1">&lt;</span>
                    {item}
                    <span className="text-primary/50 ml-1">/&gt;</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ManglamX"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors border border-primary/20 px-3 py-1.5 rounded bg-black/50 hover:bg-primary/10 hover:border-primary/50"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-muted-foreground border border-primary/20 px-2 py-1 rounded bg-black/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              SYSTEM_ONLINE
            </div>
            <Button asChild size="sm" className="bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 font-mono text-xs">
              <a href="#contact">INIT_CONTACT</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
