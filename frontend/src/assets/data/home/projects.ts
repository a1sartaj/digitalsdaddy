export interface ProjectItem {
    _id?: string;
    slug: string;
    title: string;
    client: string;
    category: string;
    description: string;
    impactMetric: string;
    image: string;
    techStack: string[];
    href: string;
}

export interface ProjectsSectionData {
    slug: string;
    badge: string;
    title: {
        prefix: string;
        highlight: string;
        suffix: string;
    };
    subtitle: string;
    projects: ProjectItem[];
    cta: {
        label: string;
        href: string;
    };
}

export const projectsSectionData: ProjectsSectionData = {
    slug: "featured-delivered-projects",
    badge: "FEATURED CASE STUDIES",
    title: {
        prefix: "Recent",
        highlight: "Projects",
        suffix: "",
    },
    subtitle:
        "Explore how we engineer custom AI platforms, microservice web applications, and scalable mobile products built for speed and measurable business growth.",
    projects: [
        {
            slug: "ai-automated-sales-engine",
            title: "Generative AI Sales & Lead Engine",
            client: "FinTech Global",
            category: "Artificial Intelligence",
            description: "Embedded autonomous LLM agents and multi-channel automated workflows to qualify and nurture inbound enterprise leads in real time.",
            impactMetric: "+240% Lead Conversion",
            image: "/projects/project-1.png",
            techStack: ["Next.js", "Python", "OpenAI API", "Tailwind CSS"],
            href: "/projects/ai-sales-engine",
        },
        {
            slug: "headless-ecommerce-platform",
            title: "High-Throughput Headless Commerce",
            client: "Omni Store",
            category: "Full-Stack Web Dev",
            description: "Engineered a headless storefront with sub-second page loads, microservice APIs, and custom checkout funnels handling high holiday traffic.",
            impactMetric: "3.2x Revenue Growth",
            image: "/projects/project-2.png",
            techStack: ["Next.js", "Node.js", "GraphQL", "MongoDB"],
            href: "/projects/headless-ecommerce",
        },
        {
            slug: "proptech-analytics-dashboard",
            title: "Real Estate Analytics & PropTech App",
            client: "Apex Properties",
            category: "Mobile & Web App",
            description: "Built an interactive real estate portal featuring real-time market data visualization, automated property matching, and virtual tours.",
            impactMetric: "10x Data Processing",
            image: "/projects/project-3.png",
            techStack: ["React Native", "TypeScript", "PostgreSQL", "AWS"],
            href: "/projects/proptech-analytics",
        },
        {
            slug: "healthcare-telemedicine-portal",
            title: "HIPAA-Compliant Telehealth System",
            client: "HealthCloud AI",
            category: "Enterprise Software",
            description: "Designed a secure web and mobile patient care portal with encrypted video consultations, automated prescription workflows, and AI diagnostics.",
            impactMetric: "99.9% System Uptime",
            image: "/projects/project-4.jpg",
            techStack: ["Next.js", "WebRTC", "Express.js", "Docker"],
            href: "/projects/telehealth-portal",
        },
    ],
    cta: {
        label: "EXPLORE ALL CASE STUDIES",
        href: "/projects",
    },
};