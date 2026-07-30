export interface TeamAvatar {
    initials: string;
    bgHex: string;
}

export interface StatItem {
    value: string;
    label: string;
}

export interface CorePillar {
    slug: string;
    title: string;
    description: string;
    iconName: string;
    accentColor: "#a67c00" | "#355396";
}

export interface WhoWeAreData {
    slug: string;
    badge: string;
    title: {
        prefix: string;
        highlight: string;
        suffix: string;
    };
    narrative: {
        paragraph1: string;
        paragraph2: string;
    };
    teamSummary: {
        countText: string;
        subRolesText: string;
        avatars: TeamAvatar[];
    };
    stats: StatItem[];
    pillars: CorePillar[];
    quickCta: {
        headline: string;
        subheadline: string;
        buttonText: string;
        href: string;
    };
}

export const whoWeAreData: WhoWeAreData = {
    slug: "who-we-are-growth-partner",
    badge: "WHO WE ARE",
    title: {
        prefix: "Your Growth Partner,",
        highlight: "Not Just An Agency",
        suffix: "",
    },
    narrative: {
        paragraph1:
            "Founded in 2018, DigitalsDaddy has grown from a specialized design-and-tech studio into one of India's most respected full-stack web development and AI transformation firms — with hubs in Delhi NCR, Mumbai, and Bangalore.",
        paragraph2:
            "We don't take on every client. We take on the right ones — businesses serious about scaling who want a long-term engineering partner genuinely invested in their bottom-line success.",
    },
    teamSummary: {
        countText: "40+ passionate team members",
        subRolesText: "Designers · Full-Stack Developers · AI Engineers · Growth Marketers",
        avatars: [
            { initials: "AK", bgHex: "#355396" },
            { initials: "PS", bgHex: "#a67c00" },
            { initials: "RV", bgHex: "#1e293b" },
            { initials: "NM", bgHex: "#355396" },
            { initials: "DG", bgHex: "#a67c00" },
        ],
    },
    stats: [
        { value: "10+", label: "Years in Business" },
        { value: "2608+", label: "Projects Delivered" },
        { value: "98%", label: "Client Retention" },
    ],
    pillars: [
        {
            slug: "results-first-mindset",
            title: "Results-First Mindset",
            description:
                "We measure success in true business outcomes — qualified leads, sub-second performance, and ROI — not vanity metrics.",
            iconName: "Target",
            accentColor: "#a67c00",
        },
        {
            slug: "transparent-reporting",
            title: "Transparent Reporting",
            description:
                "Real-time analytics dashboards and bi-weekly strategic reviews. Clear communication and complete visibility — always.",
            iconName: "BarChart2",
            accentColor: "#355396",
        },
        {
            slug: "creative-excellence",
            title: "Creative & UX Excellence",
            description:
                "Every design decision is purposeful. We combine modern aesthetic systems with conversion psychology and accessibility.",
            iconName: "Sparkles",
            accentColor: "#a67c00",
        },
        {
            slug: "long-term-thinking",
            title: "Long-Term Architecture",
            description:
                "We build digital assets that compound in value over time. Your web platform today is an infrastructure investment for tomorrow.",
            iconName: "ShieldCheck",
            accentColor: "#355396",
        },
    ],
    quickCta: {
        headline: "Ready to scale together?",
        subheadline: "Let's discuss your next engineering or growth milestone.",
        buttonText: "START NOW",
        href: "/contact",
    },
};