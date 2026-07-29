export interface AiTrendFeature {
  _id?: string;
  slug: string;
  title: string;
  aiTrendBadge: string;
  description: string;
  impactMetric: string;
  iconName: string;
  accentHex: "#a67c00" | "#355396";
}

export interface WhyChooseUsData {
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
  features: AiTrendFeature[];
  cta: {
    label: string;
    href: string;
  };
}

export const whyChooseUsData: WhyChooseUsData = {
  slug: "why-digital-daddy",
  badge: {
    label: "WHY DIGITAL DADDY",
    aiHighlight: "AI-POWERED GROWTH ⚡",
  },
  title: {
    prefix: "We Don't Just Build.",
    highlight: "We Grow Businesses.",
    suffix: "",
  },
  subtitle:
    "There are hundreds of agencies in India. Here's what makes Digital Daddy different — and why 98% of our clients renew their contracts every year.",
  features: [
    {
      slug: "strategy-before-execution",
      title: "Strategy Before Execution",
      aiTrendBadge: "DATA-DRIVEN AUDIT",
      description:
        "Every project starts with a comprehensive digital audit and growth strategy. We never start designing until we understand your business deeply.",
      impactMetric: "90% Delivery Speed",
      iconName: "Target",
      accentHex: "#a67c00",
    },
    {
      slug: "speed-without-compromise",
      title: "Speed Without Compromise",
      aiTrendBadge: "AGILE AI WORKFLOWS",
      description:
        "Fast turnarounds without cutting corners. Our agile workflows mean you get quality work, faster than the industry standard — every time.",
      impactMetric: "98% Client Satisfaction",
      iconName: "Zap",
      accentHex: "#355396",
    },
    {
      slug: "dedicated-account-managers",
      title: "Dedicated Account Managers",
      aiTrendBadge: "DIRECT COLLABORATION",
      description:
        "One point of contact who knows your business inside-out. No being passed around, no confusing communication chains.",
      impactMetric: "96% On-Budget Delivery",
      iconName: "PhoneCall",
      accentHex: "#a67c00",
    },
    {
      slug: "roi-focused-reporting",
      title: "ROI-Focused Reporting",
      aiTrendBadge: "REAL-TIME DASHBOARDS",
      description:
        "Real-time dashboards and monthly strategy calls. We track revenue, leads, and growth — not just impressions and clicks.",
      impactMetric: "98% Client Retention",
      iconName: "BarChart3",
      accentHex: "#355396",
    },
  ],
  cta: {
    label: "TALK TO OUR GROWTH TEAM",
    href: "/contact",
  },
};