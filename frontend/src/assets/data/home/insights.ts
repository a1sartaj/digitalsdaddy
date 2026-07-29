export interface InsightArticle {
    _id?: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    aiHighlightTag: string;
    readTime: string;
    publishedAt: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    image: string;
    featured?: boolean;
}

export interface InsightsData {
    slug: string;
    badge: {
        label: string;
        aiHighlight: string;
    };
    title: {
        prefix: string;
        highlight: string;
        suffix: string;
    };
    subtitle: string;
    articles: InsightArticle[];
    cta: {
        label: string;
        href: string;
    };
}

export const insightsData: InsightsData = {
    slug: "digital-insights-blog",
    badge: {
        label: "DIGITAL INSIGHTS",
        aiHighlight: "TECH & AI TRENDS ⚡",
    },
    title: {
        prefix: "Engineering Knowledge &",
        highlight: "Digital Transformation",
        suffix: "Insights",
    },
    subtitle:
        "Explore our latest articles on autonomous AI agents, sub-second web performance, composable commerce, and enterprise digital strategy.",
    articles: [
        {
            slug: "building-autonomous-ai-agents-langgraph-2026",
            title: "Architecting Enterprise Autonomous AI Agents with LangGraph & Next.js",
            excerpt:
                "A deep dive into building deterministic multi-agent state machines that execute complex customer workflows with sub-second vector RAG retrieval.",
            content:
                "Autonomous AI agents are revolutionizing enterprise workflows. By combining stateful graph orchestration with private vector databases, organizations can deploy autonomous digital workers capable of completing multi-step tasks deterministically...",
            category: "Artificial Intelligence",
            aiHighlightTag: "AI TREND 2026",
            readTime: "6 min read",
            publishedAt: "July 24, 2026",
            author: {
                name: "Sartaj Alam",
                role: "MERN & AI Engineer",
                avatar: "/authors/sartaj.webp",
            },
            image: "/blog/ai-agents-architecture.png",
            featured: true,
        },
        {
            slug: "sub-second-nextjs-performance-optimization",
            title: "Sub-800ms Page Load Speeds: Core Web Vitals Optimization at Scale",
            excerpt:
                "How we optimize Next.js App Router applications for maximum conversion efficiency, aggressive server caching, and minimal JS hydration overhead.",
            content:
                "Achieving sub-second response times globally requires a relentless focus on hydration overhead, server-side caching policies, and edge rendering. In this article, we outline our battle-tested performance checklist for Next.js App Router applications...",
            category: "Full-Stack Web Dev",
            aiHighlightTag: "HIGH SCALE STACK",
            readTime: "5 min read",
            publishedAt: "July 18, 2026",
            author: {
                name: "Priya Sharma",
                role: "Lead Frontend Architect",
                avatar: "/authors/priya.webp",
            },
            image: "/blog/nextjs-performance.png",
            featured: false,
        },
        {
            slug: "composable-headless-commerce-shopify-hydrogen",
            title: "Headless E-Commerce: Why Legacy Storefronts Are Falling Behind in 2026",
            excerpt:
                "Comparing monolithic e-commerce platforms against composable GraphQL storefronts powered by Next.js and Shopify Hydrogen.",
            content:
                "Traditional monolithic e-commerce setups struggle to keep up with modern consumer expectations around speed and dynamic personalization. Composable commerce allows engineering teams to decouple the UI layer entirely...",
            category: "E-Commerce",
            aiHighlightTag: "COMPOSABLE TECH",
            readTime: "7 min read",
            publishedAt: "July 10, 2026",
            author: {
                name: "Rohan Verma",
                role: "E-Commerce Strategist",
                avatar: "/authors/rohan.webp",
            },
            image: "/blog/headless-commerce.png",
            featured: false,
        },
    ],
    cta: {
        label: "EXPLORE ALL INSIGHTS",
        href: "/blog",
    },
};