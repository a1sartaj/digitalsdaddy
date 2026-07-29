export interface HeroSlideItem {
    topHead: string;
    title: string;
    description: string;
    button: string;
    href: string;
}

// Global hero background video path
export const heroVideo: string = "/videos/hero/hero-video.mp4";

export const datas: HeroSlideItem[] = [
    {
        topHead: "Generative AI  ·  LLM Agents  ·  Automation  ·  Predictive Data",
        title: "Engineering Scalable AI Products & Web Applications.",
        description: "digitalsdaddy.in empowers brands with custom generative AI models, microservice web applications, and automated growth channels built for speed and long-term scale.",
        button: "START YOUR PROJECT",
        href: "/contact",
    },
    {
        topHead: "Generative AI & Automation",
        title: "Enterprise LLM Workflows & Custom AI Agent Integration.",
        description: "Embed custom LLMs, automated customer support pipelines, and intelligent process workflows to streamline enterprise operations and boost efficiency.",
        button: "EXPLORE AI SOLUTIONS",
        href: "/ai-solutions",
    },
    {
        topHead: "Full-Stack Web & Mobile",
        title: "High-Performance Next.js, Cloud & Mobile Product Architecture.",
        description: "Modern, high-speed web applications and cross-platform mobile apps built with Next.js, React, Node, and resilient microservices.",
        button: "VIEW SOLUTIONS",
        href: "/solutions",
    },
    {
        topHead: "Growth & Dedicated Talent",
        title: "Performance Marketing, SEO & Dedicated Tech Engineering.",
        description: "Data-driven acquisition funnels paired with elite, dedicated full-stack developers and product designers to scale your tech team on-demand.",
        button: "HIRE TECH TALENT",
        href: "/hire-tech",
    },
];