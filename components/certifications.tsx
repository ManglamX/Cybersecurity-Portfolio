"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Shield, Cloud, Database, Network, Code2 } from "lucide-react"

export function Certifications() {
    const certifications = [
        {
            title: "Jr Penetration Tester (Learning Path)",
            issuer: "TryHackMe",
            description: "Comprehensive penetration testing learning path covering network security, web application testing, and exploitation techniques",
            icon: Shield,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1QESAxBmM63a0hDgp0IWsRaaQke3Xtekw/view?usp=sharing",
        },
        {
            title: "Cyber Security 101 (Learning Path)",
            issuer: "TryHackMe",
            description: "Core security concepts, attack types, and defensive strategies",
            icon: Shield,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1c3Ka-shBUiG1Nn0CM50wRSnG8ZSE1KEb/view?usp=sharing",
        },
        {
            title: "Pre Security (Learning Path)",
            issuer: "TryHackMe",
            description: "Networking fundamentals, Linux, Windows, and web security essentials",
            icon: Network,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1Eu_3OnlHSDaockCI37Syjd3j6fNMelud/view?usp=sharing",
        },
        {
            title: "Advent of Cyber 2025",
            issuer: "TryHackMe",
            description: "Hands-on challenges in log analysis, OSINT, threat detection, and incident response",
            icon: Shield,
            color: "text-accent",
            link: "https://drive.google.com/file/d/18XUOaFr8KOqt-cDOCeXYFSLBr1X6Mo0T/view?usp=sharing",
        },
        {
            title: "AWS Academy Graduate - Cloud Architecting",
            issuer: "Amazon Web Services",
            description: "Cloud architecture, AWS services, deployment strategies, and scalable infrastructure design",
            icon: Cloud,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1RuVAznB6RZDwIYlQX1J_V0r3WUhLopFS/view?usp=sharing",
        },
        {
            title: "Internet Crimes and Cyber Security",
            issuer: "NPTEL / IIT Madras",
            description: "8-week comprehensive course on internet crimes, cyber law, and security practices",
            icon: Shield,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1dZMYoSd7Xe9bMXH1Ann_lC20FdqaF5Tx/view?usp=sharing",
        },
        {
            title: "Cryptography: A Hands-on Approach",
            issuer: "Udemy",
            description: "Practical cryptography implementation and security protocols",
            icon: Shield,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1CfO6tDXlV5gvA7oZaL5HkRLPYfEo9zIE/view?usp=sharing",
        },
        {
            title: "Blockchain and its Applications",
            issuer: "NPTEL / IIT Kharagpur",
            description: "12-week comprehensive course on blockchain technology, distributed ledgers, and real-world applications",
            icon: Database,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1OPQT2oot08obqdl179_8a93iREBfulrn/view?usp=sharing",
        },
        {
            title: "Introduction to Internet of Things",
            issuer: "NPTEL / IIT Kharagpur",
            description: "12-week comprehensive IoT course covering fundamentals, protocols, and applications",
            icon: Network,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1dZMYoSd7Xe9bMXH1Ann_lC20FdqaF5Tx/view?usp=sharing",
        },
        {
            title: "Research Methodology",
            issuer: "NPTEL / IIT Madras",
            description: "8-week systematic approach to research design, data collection, analysis, and academic writing",
            icon: Award,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1pTdaFdyOdDSsQoiR8t58Nh-Xj0D8PUrb/view?usp=sharing",
        },
        {
            title: "Social Network Analysis",
            issuer: "NPTEL / IIT Madras",
            description: "12-week course on analysis of social networks, graph theory, and network visualization techniques",
            icon: Network,
            color: "text-primary",
            link: "https://drive.google.com/file/d/15n9Abtlw-fPn-yWJpQCLcx_BtUXGJDGE/view?usp=sharing",
        },
        {
            title: "Python for Data Science",
            issuer: "NPTEL / IIT Madras",
            description: "4-week intensive course on Python programming for data analysis and visualization",
            icon: Code2,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1fDnkRffLIxuRnZbS4tcrOVD86CDm9bPq/view?usp=sharing",
        },
    ]

    return (
        <section id="certifications" className="py-20 border-b border-primary/20">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
                        &lt;CERTIFICATIONS /&gt;
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.a
                                key={idx}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-black/50 border border-primary/30 hover:border-primary/80 rounded-lg p-6 backdrop-blur-sm transition-all h-full flex flex-col hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`${cert.color} group-hover:scale-110 transition-transform`}>
                                            <cert.icon className="w-8 h-8" />
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="font-mono font-bold text-sm text-primary group-hover:text-accent transition-colors mb-2 flex-grow">
                                        {cert.title}
                                    </h3>

                                    <div className="text-xs font-mono text-muted-foreground border-t border-primary/10 pt-3 mt-auto">
                                        <Award className="w-3 h-3 inline mr-1" />
                                        {cert.issuer}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Summary Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-black/50 border border-accent/30 rounded-lg p-4 backdrop-blur-sm"
                    >
                        <div className="flex items-center justify-center gap-2 text-sm font-mono">
                            <Award className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">TOTAL_CERTIFICATIONS:</span>
                            <span className="text-accent font-bold">{certifications.length}</span>
                            <span className="text-muted-foreground ml-4">|</span>
                            <span className="text-muted-foreground ml-4">DOMAINS:</span>
                            <span className="text-primary">Cybersecurity</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-primary">Cloud</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-primary">IoT</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-primary">Data Science</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
