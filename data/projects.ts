export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
  image: string
}

export const projects: Project[] = [
  {
    slug: "vaultspend",
    title: "VaultSpend – 100% Private Local-First Expense Tracker",
    description:
      "Privacy-first mobile expense tracker with zero cloud sync or telemetry. Features secure 6-digit PIN lock with rate-limiting, smart analytics with Chart.js, dark/light mode support, and manages daily expenses, income, bills, and budgets. Built with React, Ionic, and Capacitor for native mobile experience with local IndexedDB storage via Dexie.js. Includes encrypted backup/restore and local notifications.",
    tech: ["React 19", "Ionic", "Capacitor", "Zustand", "Dexie.js", "Chart.js", "Android"],
    repo: "https://github.com/ManglamX/VaultSpend",
    demo: undefined,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
  },
  {
    slug: "cve-reranker",
    title: "CVE ReRanker – AI-Powered Vulnerability Prioritization",
    description:
      "Ranked vulnerabilities based on the user's actual software inventory for better patch prioritization. Used AI trained on 200,000+ CVEs to analyze vulnerability descriptions and predict severity with 77% accuracy. Built a full web platform with CVE lookup, bulk upload, inventory analysis, and automated daily vulnerability updates.",
    tech: ["AI/ML", "Python", "Web Platform", "CVE Analysis", "Vulnerability Management"],
    repo: undefined,
    demo: "https://cve-reranker.vercel.app",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  },
  {
    slug: "esp-monitor-wifi-security",
    title: "ESP Monitor – Real-Time Wi-Fi Security Monitor",
    description:
      "Monitored Wi-Fi networks in real time to detect deauthentication attacks and beacon spam. Displayed live wireless channel activity on an embedded LCD dashboard. Built a real-time monitoring system for analyzing and tracking network security events.",
    tech: ["ESP32", "WiFi Security", "Real-time Monitoring", "Embedded Systems"],
    repo: "https://github.com/ManglamX/ESP-Monitor",
    demo: undefined,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop",
  },
  {
    slug: "stegavault",
    title: "StegaVault – Steganography & Forensics Toolkit",
    description:
      "Hide secret messages inside normal files like images, audio, or documents without visible changes. Detect hidden data inside suspicious files with a confidence-based analysis system. Works fully offline on your computer with Web UI, CLI, and terminal dashboard support.",
    tech: ["Steganography", "Python", "Forensics", "Web UI", "CLI"],
    repo: "https://github.com/ManglamX/StegaVault",
    demo: undefined,
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=600&fit=crop",
  },
  {
    slug: "nexushire",
    title: "NexusHire – AI-Powered Recruitment Platform",
    description:
      "Recruiters get a 3D skill-match visualization, a live Kanban pipeline, instant high-match alerts, and one-click offer letter delivery. Candidates get a resume builder, a 3D job-fit graph with auto-apply, and an AI mock interview tailored to the role they applied for. Rejected candidates see exactly which skills cost them the role, with curated resources to close those gaps.",
    tech: ["AI", "React", "3D Visualization", "Recruitment", "Node.js"],
    repo: undefined,
    demo: "https://nexushire.vercel.app",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    slug: "fixlit-smart-lighting",
    title: "FixLit – Smart Lighting Control System",
    description:
      "Energy-saving IoT solution using ESP32-CAM and OpenCV for automated lighting with app-based presets and ambient detection.",
    tech: ["ESP32-CAM", "OpenCV", "IoT", "Mobile App"],
    demo: "https://fixlit.netlify.app",
    repo: "https://github.com/Slavik2475/Fixlit",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
  },
  {
    slug: "alumni-website",
    title: "Alumni Website Development",
    description:
      "Dynamic website for Electronics Engineering batch of 1999 with profiles, search, and event management.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Angular"],
    demo: "https://ee-batch1999.vercel.app/",
    repo: "https://github.com/ManglamX/EE_Batch1999",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    slug: "alcohol-detection-prevention",
    title: "Alcohol Detection and Accident Prevention",
    description:
      "Safety system with automated motor shutdown on alcohol detection, Firebase logging, and email alerts. Demonstrated practical application of IoT in automotive safety.",
    tech: ["Arduino", "ESP32", "Firebase", "Email Alerts", "IoT"],
    demo: "https://drive.google.com/file/d/1UC8FUfdTYsdqpWJV1scYbbeI6nCRlFEG/view",
    repo: "https://github.com/ManglamX/Accident-Prevention",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
  },
  {
    slug: "voice-controlled-lighting",
    title: "Voice-Controlled Lighting Automation",
    description:
      "Automated project room lighting system with voice command integration and mobile app backup controls. Combined IoT with voice recognition technology.",
    tech: ["Voice Control", "ESP32", "Mobile App", "IoT"],
    demo: undefined,
    repo: "https://github.com/ManglamX/Voxon",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    slug: "waste-classification-system",
    title: "AI-Powered Waste Classification System",
    description:
      "Waste-classification system using a ResNet50 model to identify items (plastic, metal, paper, etc.) and map them to recyclable, compostable, or non-recyclable categories. Uses generative AI (Gemini API) for recycling suggestions and decomposition times.",
    tech: ["ResNet50", "Gemini API", "Generative AI", "PDF Reports"],
    demo: "https://drive.google.com/drive/folders/1oyzeUu4Ili1kv6Sn3LUl9RVOXoZ3wpjt",
    repo: "https://github.com/ManglamX/Wasteclassificationproject",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop",
  },
  {
    slug: "climate-change-education",
    title: "Climate Change Education Platform",
    description:
      "Interactive education website featuring cache-based automated learning podcast module generation with quizzes, and gamified content like mini-games and animations. Includes progress tracker, infographics, and community hub.",
    tech: ["Web Development", "Gamification", "Podcasts", "Community Hub"],
    demo: undefined,
    repo: "https://github.com/ManglamX/Climate-Change-Education-App",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
  },
]