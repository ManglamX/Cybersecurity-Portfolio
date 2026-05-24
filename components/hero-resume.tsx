import { profile } from "@/data/profile"

export function HeroResume() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-balance">MANGLAM JAISWAL</h1>
        <p className="mt-3 text-muted-foreground">
          Mumbai, Maharashtra · +91 8052615183 ·{" "}
          <a href="mailto:manglam.codes@gmail.com" className="underline underline-offset-4">
            manglam.codes@gmail.com
          </a>
        </p>
        <p className="mt-1 text-muted-foreground">
          <a
            href="https://www.linkedin.com/in/manglam-jaiswal"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          {" · "}
          <a
            href="https://github.com/ManglamX"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
        </p>
        <p className="mt-6 max-w-3xl leading-relaxed">
          Third-year B.E. Electronics & Computer Science student (Honors in Cybersecurity) at Fr. Conceicao Rodrigues
          College of Engineering with skills in full-stack development, cybersecurity, and the Internet of Things (IoT).
          IoT Lead at Project Cell, leading real-world tech projects. Internship experience at Apraava Energy with
          strong problem solving, collaboration, and industry exposure.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
          >
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded-md border px-4 py-2">
            Contact
          </a>
          {/* If you upload your PDF, point to /resume.pdf in public/ and uncomment */}
          {/* <a href="/resume.pdf" className="inline-flex items-center rounded-md border px-4 py-2">Download Resume (PDF)</a> */}
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border px-4 py-2"
              aria-label="Download Resume (opens in a new tab)"
            >
              Download Resume
            </a>
          ) : null}
        </div>
      </div>
    </header>
  )
}
