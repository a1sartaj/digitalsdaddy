export interface SupportFeature {
    title: string;
    iconName: "Headphones" | "Clock" | "ShieldCheck";
    accentHex: "#a67c00" | "#355396";
}

export interface SupportInfo {
    image: string;
    imageAlt: string;
    statusBadge: string;
    overlayTitle: string;
    overlaySubtitle: string;
    features: SupportFeature[];
}

export interface GetInTouchData {
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
    supportInfo: SupportInfo;
    servicesList: string[];
    cta: {
        label: string;
        href: string;
    };
}

export const getInTouchData: GetInTouchData = {
    slug: "get-in-touch-contact",
    badge: {
        label: "LET'S TALK GROWTH",
        aiHighlight: "SUB-1 HOUR RESPONSE ⚡",
    },
    title: {
        prefix: "Ready To Scale Your",
        highlight: "Digital & AI Vision?",
        suffix: "Get In Touch",
    },
    subtitle:
        "Whether you need an enterprise web application, custom AI agents, or performance ad scaling, our engineering team is ready to assist.",
    supportInfo: {
        image: "/images/customer-support.png",
        imageAlt: "Dedicated Customer Support Specialist",
        statusBadge: "SUPPORT TEAM ONLINE",
        overlayTitle: "24/7 Dedicated Assistance",
        overlaySubtitle:
            "Our technical and growth specialists are standing by to guide your digital strategy.",
        features: [
            {
                title: "Direct Access to Senior Engineers & Leads",
                iconName: "Headphones",
                accentHex: "#355396",
            },
            {
                title: "Guaranteed Sub-1 Hour Response Time",
                iconName: "Clock",
                accentHex: "#a67c00",
            },
            {
                title: "Strict NDA & Data Privacy Standards",
                iconName: "ShieldCheck",
                accentHex: "#355396",
            },
        ],
    },
    servicesList: [
        "Full-Stack Web Dev (Next.js/MERN)",
        "AI Agents & Autonomous Workflows",
        "Mobile App Development",
        "UI/UX Design & Prototyping",
        "PPC & Performance Marketing",
        "Technical SEO & CRO",
    ],
    cta: {
        label: "SEND YOUR MESSAGE",
        href: "/contact",
    },
};