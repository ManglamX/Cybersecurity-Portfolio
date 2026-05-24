"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Shield } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Electronics & Computer Science",
      institution: "Fr. Conceicao Rodrigues College of Engineering, Bandra",
      period: "Pursuing",
      special: "Honors in Cybersecurity",
      cgpa: "CGPA: 8.79 / 10",
      icon: Award,
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "St. Michael's Convent School",
      period: "2023",
      score: "70.2%",
      icon: GraduationCap,
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Fatima School",
      period: "2021",
      score: "77%",
      icon: GraduationCap,
    },
  ]

  return (
    <section id="education" className="py-20 border-b border-primary/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
            &lt;ACADEMIC_RECORDS /&gt;
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-black/50 border border-primary/30 hover:border-primary/60 rounded-lg p-6 backdrop-blur-sm transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      <edu.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-lg text-primary group-hover:text-accent transition-colors">
                        {edu.degree}
                        {edu.field && <span className="text-accent"> — {edu.field}</span>}
                      </h3>
                      <p className="text-sm font-mono text-muted-foreground mt-1">{edu.institution}</p>
                      {edu.cgpa && (
                        <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-primary border border-primary/30 px-3 py-1 rounded bg-primary/5">
                          <Award className="w-3 h-3" />
                          {edu.cgpa}
                        </div>
                      )}
                      {edu.score && (
                        <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-primary border border-primary/30 px-3 py-1 rounded bg-primary/5">
                          <Award className="w-3 h-3" />
                          {edu.score}
                        </div>
                      )}
                      {edu.special && (
                        <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-accent border border-accent/30 px-2 py-1 rounded bg-accent/5 ml-2">
                          <Shield className="w-3 h-3" />
                          {edu.special}
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-mono text-muted-foreground border border-primary/20 px-3 py-1 rounded bg-primary/5">
                      {edu.period}
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
