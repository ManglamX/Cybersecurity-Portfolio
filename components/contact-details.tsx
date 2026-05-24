import { profile } from "@/data/profile"

export function ContactDetails() {
  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-2xl lg:text-3xl font-semibold">Contact</h2>
      <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <dt className="text-sm text-muted-foreground">Name</dt>
          <dd className="font-medium">MANGLAM JAISWAL</dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Location</dt>
          <dd className="font-medium">Mumbai, India</dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Phone</dt>
          <dd className="font-medium">
            <a href="tel:+918052615183" className="underline underline-offset-4">
              +91 8052615183
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Email</dt>
          <dd className="font-medium">
            <a href="mailto:manglam.codes@gmail.com" className="underline underline-offset-4">
              manglam.codes@gmail.com
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Website</dt>
          <dd className="font-medium">
            <a
              href="https://manglam.me"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              manglam.me
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">LinkedIn</dt>
          <dd className="font-medium">
            <a
              href="https://www.linkedin.com/in/manglam-jaiswal"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              linkedin.com/in/manglam-jaiswal
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">GitHub</dt>
          <dd className="font-medium">
            <a
              href="https://github.com/ManglamX"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              github.com/ManglamX
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">TryHackMe</dt>
          <dd className="font-medium">
            <a
              href="https://tryhackme.com/p/ManglamX"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              tryhackme.com/p/ManglamX
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">LeetCode</dt>
          <dd className="font-medium">
            <a
              href="https://leetcode.com/u/ManglamX"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              leetcode.com/u/ManglamX
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted-foreground">Resume</dt>
          <dd className="font-medium">
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                Download Resume
              </a>
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>
    </div>
  )
}
