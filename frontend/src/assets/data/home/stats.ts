export interface StatMetric {
    _id?: string;
    slug: string;
    numberValue: number;
    suffix?: string;
    title: string;
    subtitle: string;
    iconName: string;
    accentHex: "#a67c00" | "#355396";
}

export interface StatsData {
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
    metrics: StatMetric[];
}

export const statsData: StatsData = {
    slug: "company-growth-stats",
    badge: {
        label: "PROVEN TRACK RECORD",
        aiHighlight: "MEASURABLE IMPACT ⚡",
    },
    title: {
        prefix: "Numbers That Prove Our",
        highlight: "Engineering & Growth",
        suffix: "Excellence",
    },
    subtitle:
        "Over a decade of engineering high-scale web platforms, mobile apps, and performance marketing campaigns for global brands.",
    metrics: [
        {
            slug: "successful-projects",
            numberValue: 2608,
            suffix: "+",
            title: "Successful Projects",
            subtitle: "Delivered across various industries",
            iconName: "CheckCircle2",
            accentHex: "#a67c00",
        },
        {
            slug: "happy-customers",
            numberValue: 1287,
            suffix: "+",
            title: "Happy Customers",
            subtitle: "Satisfied clients in 10 years",
            iconName: "Users",
            accentHex: "#355396",
        },
        {
            slug: "digital-marketing",
            numberValue: 958,
            suffix: "+",
            title: "Digital Marketing",
            subtitle: "Campaigns scaled for business growth",
            iconName: "TrendingUp",
            accentHex: "#a67c00",
        },
        {
            slug: "web-app-design",
            numberValue: 1650,
            suffix: "+",
            title: "Web & App Design",
            subtitle: "Built with modern, advanced code",
            iconName: "Code2",
            accentHex: "#355396",
        },
    ],
};