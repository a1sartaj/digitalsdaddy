export interface TestimonialItem {
    _id?: string;
    slug: string;
    clientName: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    aiHighlightTag: string;
    quote: string;
    impactMetric: string;
    accentHex: "#a67c00" | "#355396";
}

export interface TestimonialData {
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
    testimonials: TestimonialItem[];
    cta: {
        label: string;
        href: string;
    };
}

export const testimonials: TestimonialData = {
    slug: "client-love-testimonials",
    badge: {
        label: "CLIENT STORIES",
        aiHighlight: "98% RETENTION RATE ⚡",
    },
    title: {
        prefix: "What Founders & Leaders",
        highlight: "Say About Working",
        suffix: "With Us",
    },
    subtitle:
        "Discover how our full-stack engineering and AI transformations drive tangible business ROI, scale speed, and build lasting digital authority.",
    testimonials: [
        {
            slug: "coverfox-transformation",
            clientName: "Rahul Sharma",
            role: "VP of Digital Engineering",
            company: "Coverfox Insurance",
            avatar: "/avatars/rahul.webp",
            rating: 5,
            aiHighlightTag: "AI AGENT WORKFLOWS",
            quote:
                "DigitalsDaddy revamped our core digital funnel with sub-second page performance and integrated AI lead qualification. Our conversion rate increased by 240% within 90 days.",
            impactMetric: "+240% Conversion Lift",
            accentHex: "#a67c00",
        },
        {
            slug: "dettol-global-campaigns",
            clientName: "Priya Malhotra",
            role: "Global Brand Strategist",
            company: "Reckitt / Dettol",
            avatar: "/avatars/priya.webp",
            rating: 5,
            aiHighlightTag: "PERFORMANCE AD TECH",
            quote:
                "Their team operates like an extension of our internal engineering group. Transparent reporting, zero fluff, and exceptional technical execution across all our digital touchpoints.",
            impactMetric: "10x Campaign Scale",
            accentHex: "#355396",
        },
        {
            slug: "organic-india-ecommerce",
            clientName: "Vikram Mehta",
            role: "Head of Growth & E-Commerce",
            company: "Organic India",
            avatar: "/avatars/vikram.webp",
            rating: 5,
            aiHighlightTag: "HEADLESS NEXT.JS STACK",
            quote:
                "Transitioning to a headless architecture handled by DigitalsDaddy dropped our load times below 800ms globally. Our checkout drop-off rate fell dramatically.",
            impactMetric: "sub-800ms Load Time",
            accentHex: "#a67c00",
        },
        {
            slug: "proburst-brand-scaling",
            clientName: "Ananya Roy",
            role: "Chief Marketing Officer",
            company: "Proburst Nutrition",
            avatar: "/avatars/ananya.webp",
            rating: 5,
            aiHighlightTag: "PREDICTIVE MARKETING AI",
            quote:
                "From identity redesign to multi-channel ad automation, DigitalsDaddy delivered a comprehensive system that scaled our revenues consistently month-over-month.",
            impactMetric: "3.4x Revenue ROI",
            accentHex: "#355396",
        },
    ],
    cta: {
        label: "READ MORE CLIENT STORIES",
        href: "/case-studies",
    },
};