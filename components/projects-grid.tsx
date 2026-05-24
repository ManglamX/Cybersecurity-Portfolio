"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { Github, ExternalLink, Terminal } from "lucide-react"
import { isValidUrl, sanitizeText } from "@/lib/security"

export function ProjectsGrid() {
  // Filter and validate projects for security
  const secureProjects = projects.filter(project => {
    const hasValidDemo = !project.demo || isValidUrl(project.demo)
    const hasValidRepo = !project.repo || isValidUrl(project.repo)
    return hasValidDemo && hasValidRepo
  }).map(project => ({
    ...project,
    title: sanitizeText(project.title),
    description: sanitizeText(project.description),
    tech: project.tech.map(t => sanitizeText(t))
  }))

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-end justify-between gap-4 mb-12 border-b border-primary/30 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono">
              &lt;SECURE_ARCHIVES /&gt;
            </h2>
            <p className="text-muted-foreground mt-2 font-mono text-sm">
              // Accessing classified project files...
            </p>
          </div>
          <a 
            href={isValidUrl("https://github.com/ManglamX") ? "https://github.com/ManglamX" : "#"} 
            className="text-sm text-accent hover:text-accent/80 font-mono flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all repositories on GitHub"
          >
            [VIEW_ALL_REPOS] <Terminal className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {secureProjects.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-primary/30 hover:border-primary/80 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                <div className="relative h-48 w-full border-b border-primary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-colors duration-300" />
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt={sanitizeText(p.title)}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  {/* Scanline effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 z-20" />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-mono text-primary group-hover:text-accent transition-colors">
                    {p.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-sm text-muted-foreground">
                  <p className="line-clamp-3 mb-4 font-mono text-xs leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-primary/30 text-primary/80 text-[10px] font-mono hover:bg-primary/10">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto pt-4 border-t border-primary/10">
                  <div className="flex items-center gap-3 w-full">
                    {p.demo && isValidUrl(p.demo) && (
                      <Button asChild size="sm" variant="ghost" className="flex-1 hover:bg-primary/20 hover:text-primary font-mono text-xs border border-transparent hover:border-primary/50">
                        <a 
                          href={p.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View demo for ${p.title}`}
                        >
                          <ExternalLink className="w-3 h-3 mr-2" /> DEMO
                        </a>
                      </Button>
                    )}
                    {p.repo && isValidUrl(p.repo) && (
                      <Button asChild size="sm" variant="ghost" className="flex-1 hover:bg-accent/20 hover:text-accent font-mono text-xs border border-transparent hover:border-accent/50">
                        <a 
                          href={p.repo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`View source code for ${p.title}`}
                        >
                          <Github className="w-3 h-3 mr-2" /> CODE
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
