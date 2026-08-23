export const portfolioData = {
  personal: {
    name: "SK Sahil Ali",
    kanjiName: "佐比留", // Stylized phonetics
    title: "Software Developer & Systems Craftsman",
    location: "Kolkata, India",
    email: "sahilali6290@gmail.com",
    phone: "+91 62903 02422",
    github: "https://github.com/SahillAli3031",
    linkedin: "https://www.linkedin.com/in/sk-sahil-ali-394107282/",
    resumeUrl: "/Latest_Resume.pdf",
    avatar: "/sahilda.jpeg",
    tagline: "Bridging the serenity of minimalist interfaces with the robustness of distributed systems.",
    summary: "Software Developer specializing in full-stack architecture, high-throughput RESTful & microservice APIs, multi-role security (RBAC), and reactive web & mobile applications. Driven by the Japandi ethos: uncompromising craftsmanship, deliberate simplicity, and resilient engineering."
  },

  metrics: [
    { label: "Production Platforms", value: "3+", suffix: "", description: "High-traffic systems deployed & maintained" },
    { label: "APIs & Microservices", value: "45+", suffix: "", description: "Engineered with FastAPI, Node.js & Express" },
    { label: "Academic Excellence", value: "7.82", suffix: " GPA", description: "B.Tech Computer Science & Engineering" },
    { label: "Role-Based Workflows", value: "100%", suffix: " RBAC", description: "Multi-tier authentication & security" }
  ],

  philosophy: [
    {
      kanji: "和",
      concept: "Wa (Harmony)",
      english: "Harmonious Systems",
      desc: "Balancing client-side elegance with server-side resilience. Every interface, API contract, and database query is crafted to work in seamless equilibrium."
    },
    {
      kanji: "静",
      concept: "Shizuka (Serenity)",
      english: "Clean Code & Reliability",
      desc: "Minimizing cognitive load through declarative architectures, predictable state management, and robust error-handling pipelines."
    },
    {
      kanji: "匠",
      concept: "Takumi (Craftsmanship)",
      english: "Uncompromising Detail",
      desc: "Devotion to engineering mastery—from microsecond API response optimizations to micro-interactions that elevate user delight."
    }
  ],

  experience: [
    {
      role: "Software Developer",
      company: "Deep Duo Foundation",
      location: "Kolkata, India",
      period: "2025 – 2026",
      type: "Full-time Engineering",
      highlights: [
        "Architected and engineered Sonarhaat, a multi-stakeholder B2B2C jewellery ecosystem linking vendors, BIS compliance bodies, hallmarking labs, and retail buyers.",
        "Built and maintained enterprise-grade web applications including BoddhIQ, Paper Submission platforms, and Conference & Event Management systems.",
        "Engineered scalable REST APIs, role-based access control (RBAC), secure token workflows (JWT), and real-time push notification pipelines.",
        "Spearheaded cross-platform integration between web portals and Flutter mobile apps with comprehensive API testing and automated debugging cycles."
      ],
      technologies: ["Node.js", "FastAPI", "Python", "React.js", "Next.js", "Flutter", "PostgreSQL", "MongoDB", "Prisma", "JWT", "Cloudinary"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech.)",
      field: "Computer Science and Engineering",
      institution: "Sister Nivedita University",
      location: "Kolkata, India",
      year: "Graduation 2025",
      gpa: "7.82 GPA",
      achievements: [
        "Specialized in Distributed Computing, Algorithm Design, and Modern Web Architectures.",
        "Participated in the IIC–MoE’s Innovation Cell Regional Meet (2024), demonstrating innovative product thinking and technical leadership."
      ]
    }
  ],

  projects: [
    {
      id: "sonarhaat",
      title: "Sonarhaat",
      subtitle: "Multi-Role B2B2C Jewellery Marketplace",
      category: "Full-Stack & Marketplace",
      period: "Aug 2025 – Jan 2026",
      featured: true,
      kanji: "金市",
      accent: "#B8764B",
      overview: "A comprehensive digital trade ecosystem connecting jewellery manufacturers, BIS regulatory authorities, certified hallmarking centers, and end-consumers with granular trust protocols.",
      roleDetails: "Built core backend microservices in FastAPI and Node.js, designed RBAC permission matrices, created multi-tier product catalog dashboards, and resolved critical concurrency bottlenecks.",
      techStack: ["Node.js", "FastAPI", "Python", "React", "Next.js", "TypeScript", "MongoDB", "JWT", "REST APIs", "Cloudinary", "Git/GitHub"],
      keyFeatures: [
        "Multi-role RBAC for Sellers, BIS Inspectors, Hallmarking Centers & Consumers",
        "Secure document verification & BIS digital certification tracking",
        "High-performance catalog with sub-50ms search indexing",
        "Integrated Cloudinary media pipelines with automated image compression"
      ],
      metrics: {
        roles: "4 Distinct Stakeholders",
        speed: "Sub-50ms API response",
        security: "JWT + RBAC Matrix"
      },
      codeSnippet: `// FastAPI RBAC Decorator & Security Dependency
@router.post("/verify-hallmark", dependencies=[Depends(RequireRole(["BIS_OFFICER", "HALLMARK_CENTER"]))])
async def verify_hallmark_batch(
    payload: HallmarkVerificationRequest,
    current_user: User = Depends(get_current_active_user),
    db: AsyncSession = Depends(get_db_session)
):
    """Processes digital certification & triggers verified status webhook"""
    result = await HallmarkService.verify_and_stamp(db, payload, officer_id=current_user.id)
    return {"status": "SUCCESS", "certificate_uid": result.uid, "timestamp": result.certified_at}`
    },

    {
      id: "boddhiq",
      title: "BoddhIQ",
      subtitle: "Unified Learning Community & CodeLab Platform",
      category: "EdTech & Mobile Systems",
      period: "Jan 2026 – Apr 2026",
      featured: true,
      kanji: "菩提",
      accent: "#5E725F",
      overview: "A full-scale collaborative ecosystem empowering students, educators, and academic institutes with structured video courses, interactive CodeLab sandboxes, hackathon portals, and live discussion hubs.",
      roleDetails: "Backend Full-Stack Developer — Built server architectures with NeonDB PostgreSQL and Prisma ORM, engineered community discussion queues, and delivered synchronized web-to-Flutter mobile APIs.",
      techStack: ["React.js", "Next.js", "Flutter", "Node.js", "Express.js", "NeonDB (PostgreSQL)", "Prisma", "REST APIs", "JWT", "JavaScript", "Dart", "Cloudinary"],
      keyFeatures: [
        "Integrated CodeLab execution sandbox with multi-language parsing",
        "Live hackathon scoring engine and automated team formation",
        "Seamless synchronization between Next.js web portal and Flutter iOS/Android apps",
        "Type-safe relational database schema with NeonDB and Prisma ORM"
      ],
      metrics: {
        platform: "Web + iOS + Android",
        db: "Serverless PostgreSQL",
        sync: "Real-time sync"
      },
      codeSnippet: `// Prisma ORM Community Interaction Workflow
export async function submitHackathonSubmission(req: AuthenticatedRequest, res: Response) {
  const { hackathonId, repositoryUrl, liveDemoUrl, teamMemberIds } = req.body;
  
  const submission = await prisma.$transaction(async (tx) => {
    const entry = await tx.submission.create({
      data: { hackathonId, repositoryUrl, liveDemoUrl, submittedById: req.user.id }
    });
    await tx.activityLog.create({
      data: { action: 'HACKATHON_SUBMISSION', entityId: entry.id, userId: req.user.id }
    });
    return entry;
  });
  return res.status(201).json({ success: true, submissionId: submission.id });
}`
    },

    {
      id: "conference-cms",
      title: "Conference Management System",
      subtitle: "Dynamic Multi-Tenant Academic & Event CMS",
      category: "Cloud CMS & Custom Domains",
      period: "Mar 2026 – Aug 2026",
      featured: true,
      kanji: "会議",
      accent: "#2D3A4B",
      overview: "A production-grade CMS platform designed to let universities and organizations instantiate, customize, publish, and host dynamic international conference portals with instantaneous custom domain DNS mapping.",
      roleDetails: "Full-Stack Developer — Built customizable theme templates, paper submission review workflows, automated email notifications, and automated DNS routing on Railway.",
      techStack: ["Next.js", "React.js", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary", "REST APIs", "Framer Motion", "Railway", "DNS/Custom Domain Routing"],
      keyFeatures: [
        "Instant multi-tenant site generation with customized conference branding",
        "Custom DNS / Domain binding system with automated SSL handshake",
        "Integrated academic paper submission & peer review scoring system",
        "Responsive presentation layouts animated with Framer Motion & CSS"
      ],
      metrics: {
        deployment: "Zero-Downtime Railway",
        domains: "Dynamic Multi-Tenant DNS",
        media: "Cloudinary CDN"
      },
      codeSnippet: `// Next.js Multi-Tenant Custom Domain Routing
export async function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const currentHost = hostname.replace(\`.\${process.env.NEXT_PUBLIC_ROOT_DOMAIN}\`, "");
  
  // Resolve custom domain or tenant subdomain
  const conference = await getConferenceByHost(hostname, currentHost);
  if (conference) {
    return NextResponse.rewrite(new URL(\`/_sites/\${conference.slug}\${req.nextUrl.pathname}\`, req.url));
  }
  return NextResponse.next();
}`
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "State architecture, hooks, context, SSR/CSR" },
      { name: "Next.js", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "App router, SSR, SSG, Server Actions, multi-tenant" },
      { name: "Three.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", description: "3D geometry, shaders, lighting, camera physics" },
      { name: "Tailwind CSS", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", description: "Design systems, responsive flex/grid, micro-animations" },
      { name: "Figma", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "UI/UX, prototyping, wireframing, design systems" },
      { name: "Flutter", level: 82, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "Cross-platform iOS/Android, Dart, state management" }
    ],
    backend: [
      { name: "Node.js", level: 94, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "REST architectures, middleware, cluster scaling" },
      { name: "FastAPI", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", description: "Async I/O, Pydantic schemas, high-throughput APIs" },
      { name: "Python", level: 91, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Backend logic, scripting, data processing" },
      { name: "Express", level: 94, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "API routing, middleware pipelines" },
      { name: "Redis", level: 86, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", description: "Caching, queue management, pub/sub" }
    ],
    databasesCloud: [
      { name: "PostgreSQL", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Relational modeling, indexing, serverless pooling" },
      { name: "MongoDB", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Document schemas, aggregation pipelines, replica sets" },
      { name: "Prisma ORM", level: 93, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", description: "Type-safe queries, relational joins, migrations" },
      { name: "Docker", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerization, compose orchestration" },
      { name: "Vercel", level: 90, icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg", description: "CI/CD pipelines, edge deployments" },
      { name: "GitHub", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Branching strategies, PR reviews, automation workflows" }
    ],
    languages: [
      { name: "JavaScript", level: 96, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Python", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Dart", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "HTML5", level: 98, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", level: 98, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ]
  },

  honors: [
    {
      title: "IIC–MoE’s Innovation Cell Regional Meet",
      organization: "Ministry of Education Innovation Cell",
      year: "2024",
      description: "Represented university at the prestigious regional innovation meet, presenting software architecture concepts and collaborative tech platforms."
    }
  ]
};
