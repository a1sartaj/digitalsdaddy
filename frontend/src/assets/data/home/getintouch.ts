export interface ContactChannel {
    type: string;
    label: string;
    value: string;
    href: string;
    iconName: string;
}

export interface OfficeLocation {
    city: string;
    regionTag: string;
    address: string;
    phone?: string;
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
    channels: ContactChannel[];
    offices: OfficeLocation[];
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
    channels: [
        {
            type: "email",
            label: "Email Us",
            value: "hello@digitalsdaddy.in",
            href: "mailto:hello@digitalsdaddy.in",
            iconName: "Mail",
        },
        {
            type: "phone",
            label: "Head Office Phone",
            value: "0124 4973371",
            href: "tel:01244973371",
            iconName: "Phone",
        },
        {
            type: "whatsapp",
            label: "Direct & WhatsApp",
            value: "+91 98182 86609",
            href: "https://wa.me/919818286609",
            iconName: "MessageSquare",
        },
    ],
    offices: [
        {
            city: "Delhi NCR",
            regionTag: "Head Office",
            address: "BVM Marge, DLF 2, Cyber City, Gurgaon, India",
            phone: "0124 4973371",
        },
        {
            city: "Mumbai",
            regionTag: "West India Office",
            address: "1204, One BKC, Bandra Kurla Complex, Mumbai, Maharashtra — 400051",
            phone: "+91 98182 86609",
        },
        {
            city: "Bangalore",
            regionTag: "South India Office",
            address: "WeWork Embassy, Koramangala, Bangalore, Karnataka — 560034",
            phone: "+91 98182 86609",
        },
    ],
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