"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CyberHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight
        canvas.width = width
        canvas.height = height

        // Particle system for cyber effect
        const particles: Array<{
            x: number
            y: number
            vx: number
            vy: number
            size: number
        }> = []

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
            })
        }

        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
            ctx.fillRect(0, 0, width, height)

            // Draw connections
            ctx.strokeStyle = "rgba(0, 255, 65, 0.1)"
            ctx.lineWidth = 1
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 150) {
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }

            // Draw and update particles
            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                ctx.fillStyle = "#00ff41"
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()
            })

            requestAnimationFrame(animate)
        }

        animate()

        const handleResize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-primary/20">
            {/* Animated Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-30"
            />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4"
                    >
                        <span className="text-primary font-mono text-sm md:text-xl tracking-widest border border-primary/30 px-4 py-2 rounded bg-primary/5">
                            SYSTEM_STATUS: <span className="text-green-500">ONLINE</span>
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter relative">
                        <span className="cyber-glitch text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary" data-text="MANGLAM JAISWAL">
                            MANGLAM JAISWAL
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-mono">
                        <span className="text-primary">&lt;</span>
                        <span className="text-accent">FullStack</span>
                        <span className="text-primary"> /&gt;</span>
                        {" | "}
                        <span className="text-primary">&lt;</span>
                        <span className="text-accent">CyberSecurity</span>
                        <span className="text-primary"> /&gt;</span>
                        {" | "}
                        <span className="text-primary">&lt;</span>
                        <span className="text-accent">IoT</span>
                        <span className="text-primary"> /&gt;</span>
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button
                            size="lg"
                            className="bg-primary text-black hover:bg-primary/80 font-mono border border-primary shadow-[0_0_15px_rgba(0,255,65,0.5)] hover:shadow-[0_0_25px_rgba(0,255,65,0.7)] transition-all"
                            asChild
                        >
                            <a href="#projects">INITIALIZE_PROJECTS</a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent/10 font-mono shadow-[0_0_15px_rgba(0,184,255,0.3)] hover:shadow-[0_0_25px_rgba(0,184,255,0.5)] transition-all"
                            asChild
                        >
                            <a href="#contact">ESTABLISH_UPLINK</a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 border-r-2 border-b-2 border-accent/30 rounded-br-3xl"></div>

            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20"></div>
        </section>
    )
}
