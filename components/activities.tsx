"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Target, Shield } from "lucide-react"

export function Activities() {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 4% on TryHackMe Globally",
      description: "Ranked in the top 4% of cybersecurity practitioners worldwide on TryHackMe platform, demonstrating advanced skills in penetration testing, threat detection, and security analysis",
      color: "text-yellow-500",
      highlight: true,
    },
    {
      icon: Shield,
      title: "48th / 1700 in Hacker's Gambit OWASP National CTF",
      description: "Secured 48th rank out of 1700 participants in OWASP National Level CTF competition, showcasing exceptional cybersecurity problem-solving and competitive skills",
      color: "text-accent",
      highlight: true,
    },
  ]

  return (
    <section id="activities" className="py-20 border-b border-primary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
            &lt;ACHIEVEMENTS_LOG /&gt;
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-black/50 border ${achievement.highlight ? 'border-yellow-500/50 hover:border-yellow-500' : 'border-primary/30 hover:border-primary/60'} rounded-lg p-5 backdrop-blur-sm transition-all h-full ${achievement.highlight ? 'shadow-[0_0_15px_rgba(234,179,8,0.2)]' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className={`${achievement.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <achievement.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-sm text-primary group-hover:text-accent transition-colors mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
