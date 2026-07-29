export interface ProcessStep {
  stepNumber: string;
  slug: string;
  title: string;
  titleColor: "#a67c00" | "#355396"; // Alternating brand accent color
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface HowWeWorkData {
  slug: string;
  badge: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  subtitle: string;
  steps: ProcessStep[];
  cta: {
    label: string;
    href: string;
  };
}

export const howWeWorkData: HowWeWorkData = {
  slug: "how-we-work-methodology",
  badge: "HOW WE WORK",
  title: {
    prefix: "A Process Built for",
    highlight: "Consistent Results",
    suffix: "",
  },
  subtitle:
    "Our structured 4-phase methodology ensures every project is delivered on time, on budget, and above expectations — without fail.",
  steps: [
    {
      stepNumber: "01",
      slug: "discovery-strategy",
      title: "Discovery & Strategy",
      titleColor: "#a67c00",
      description:
        "We dive deep into your business, audience, and competitive landscape to craft a tailored digital strategy aligned with your growth goals.",
      deliverables: ["Market & Audience Audit", "Technical Architecture Roadmap", "ROI & KPI Benchmarks"],
      iconName: "Compass",
    },
    {
      stepNumber: "02",
      slug: "design-prototype",
      title: "Design & Prototype",
      titleColor: "#355396",
      description:
        "Our designers create wireframes, mockups, and interactive prototypes — reviewed and approved at every stage to match your vision perfectly.",
      deliverables: ["Wireframes & UX Flows", "Interactive Figma Prototypes", "Design System & UI Kit"],
      iconName: "Palette",
    },
    {
      stepNumber: "03",
      slug: "build-optimize",
      title: "Build & Optimize",
      titleColor: "#a67c00",
      description:
        "We build robust, scalable solutions while optimizing for speed, accessibility, and search visibility from the very first line of code.",
      deliverables: ["Clean Next.js / Cloud Code", "Core Web Vitals Speed Testing", "Security & SEO Audit"],
      iconName: "Code2",
    },
    {
      stepNumber: "04",
      slug: "launch-scale",
      title: "Launch & Scale",
      titleColor: "#355396",
      description:
        "We launch with confidence, monitor performance closely, and deploy growth marketing to amplify your reach and accelerate results.",
      deliverables: ["CI/CD Deployment", "Real-Time Analytics Setup", "Ongoing Scale & Maintenance"],
      iconName: "Rocket",
    },
  ],
  cta: {
    label: "START YOUR PROJECT WITH US",
    href: "/contact",
  },
};