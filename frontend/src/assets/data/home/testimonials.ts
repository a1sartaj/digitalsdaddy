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
            slug: "proquest",
            clientName: "Ms. Neha",
            role: "Director",
            company: "ProQuest",
            avatar: "/avatars/rahul.webp",
            rating: 5,
            aiHighlightTag: "AI AGENT WORKFLOWS",
            quote:
                "Influencer collaborations were seamless and incredibly effective. They found the perfect partners to amplify our message",
            impactMetric: "+240% Conversion Lift",
            accentHex: "#a67c00",
        },
        {
            slug: "green-portfolio",
            clientName: "Mr. Diwam",
            role: "CEO",
            company: "Green Portfolio",
            avatar: "/avatars/priya.webp",
            rating: 5,
            aiHighlightTag: "PERFORMANCE AD TECH",
            quote:
                "Content they created was consistently engaging and perfectly aligned with our brand voice. Their community management is top-notch!",
            impactMetric: "10x Campaign Scale",
            accentHex: "#355396",
        },
        {
            slug: "advise-tree",
            clientName: "Mrs. Rubal",
            role: "Director",
            company: "Advise Tree",
            avatar: "/avatars/vikram.webp",
            rating: 5,
            aiHighlightTag: "HEADLESS NEXT.JS STACK",
            quote:
                "Data-driven approach transformed our social presence. We saw a significant increase in engagement and leads. Highly recommend!",
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