"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile } from "@/data/profile"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, FileDown, Terminal, Github, Code2, Braces, Shield } from "lucide-react"
import { isValidUrl, sanitizeText } from "@/lib/security"

export function Contact() {
  // Validate all URLs before rendering
  const contactItems = [
    { 
      icon: Mail, 
      label: "EMAIL", 
      value: "manglam.codes@gmail.com", 
      href: "mailto:manglam.codes@gmail.com" 
    },
    { 
      icon: Phone, 
      label: "PHONE", 
      value: "+91 8052615183", 
      href: "tel:+918052615183" 
    },
    { 
      icon: MapPin, 
      label: "LOCATION", 
      value: sanitizeText("Mumbai, Maharashtra"), 
      href: null 
    },
    { 
      icon: Linkedin, 
      label: "LINKEDIN", 
      value: "Connect on LinkedIn", 
      href: isValidUrl("https://www.linkedin.com/in/manglam-jaiswal") ? "https://www.linkedin.com/in/manglam-jaiswal" : null
    },
    { 
      icon: Github, 
      label: "GITHUB", 
      value: "View GitHub Profile", 
      href: isValidUrl("https://github.com/ManglamX") ? "https://github.com/ManglamX" : null
    },
    { 
      icon: Code2, 
      label: "HACKERRANK", 
      value: "View HackerRank Profile", 
      href: isValidUrl("https://www.hackerrank.com/profile/raaj_jaiswal1990") ? "https://www.hackerrank.com/profile/raaj_jaiswal1990" : null
    },
    { 
      icon: Braces, 
      label: "LEETCODE", 
      value: "View LeetCode Profile", 
      href: isValidUrl("https://leetcode.com/u/ManglamX/") ? "https://leetcode.com/u/ManglamX/" : null
    },
    { 
      icon: Shield, 
      label: "TRYHACKME", 
      value: "View TryHackMe Profile", 
      href: isValidUrl("https://tryhackme.com/p/ManglamX") ? "https://tryhackme.com/p/ManglamX" : null
    },
  ].filter(item => item.href !== null || item.href === null) // Keep all items but validate URLs

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
            &lt;ESTABLISH_CONTACT /&gt;
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

          <Card className="bg-black/50 border-primary/30 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs font-mono text-primary/70">contact_interface.sh</div>
              <Terminal className="w-4 h-4 text-primary/50" />
            </div>

            <CardHeader>
              <CardTitle className="text-2xl font-mono text-accent">
                INITIATE_COMMUNICATION_PROTOCOL
              </CardTitle>
              <p className="text-sm font-mono text-muted-foreground mt-2">
                // Open to collaboration and new opportunities
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {contactItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-3 rounded border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all h-full"
                      >
                        <div className="text-primary group-hover:text-accent transition-colors">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-mono text-muted-foreground">{item.label}</div>
                          <div className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3 rounded border border-primary/20 h-full">
                        <div className="text-primary">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-mono text-muted-foreground">{item.label}</div>
                          <div className="text-sm font-mono text-foreground">{item.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {profile.resumeUrl && isValidUrl(profile.resumeUrl) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 rounded border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all group mt-6"
                    aria-label="Download Resume (opens in new tab)"
                  >
                    <FileDown className="w-5 h-5 text-accent group-hover:animate-bounce" />
                    <span className="font-mono text-accent font-bold">DOWNLOAD_RESUME.pdf</span>
                  </a>
                </motion.div>
              )}

              <div className="mt-6 pt-4 border-t border-primary/20">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>RESPONSE_TIME: &lt; 24 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
