"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Intern",
      company: "Apraava Energy",
      location: "On-site",
      period: "Jun 2025 – Jul 2025",
      responsibilities: [
        "Contributed to the AMI (Advanced Metering Infrastructure) project by working on WFM, HES, and MDM platforms for data validation, entry, and inventory management",
        "Gained end-to-end exposure to smart meter data flow, lab testing, field operations, network management, and corporate workflows",
        "Utilized Microsoft Excel and Data Analysis skills for processing and managing metering infrastructure data",
      ],
    },
    {
      title: "IoT Programming Engineer Intern",
      company: "NCC Telecom Pvt. Ltd.",
      location: "Mumbai",
      period: "Dec 2025 – Feb 2026",
      responsibilities: [
        "Programmed and configured IoT-based automation devices for smart home systems",
        "Assisted installation, testing, and troubleshooting across client locations",
        "Supported demonstrations and maintained system records",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 border-b border-primary/20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
            &lt;WORK_HISTORY /&gt;
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/50 border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm group">
                  <CardHeader className="border-b border-primary/10">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-mono text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                          <Briefcase className="w-5 h-5" />
                          {exp.title}
                        </CardTitle>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm font-mono text-accent">{exp.company}</p>
                          <p className="text-xs font-mono text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border border-primary/20 px-3 py-1 rounded bg-primary/5">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex items-start gap-3 text-sm font-mono text-muted-foreground">
                          <span className="text-primary mt-1 flex-shrink-0">&gt;</span>
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
