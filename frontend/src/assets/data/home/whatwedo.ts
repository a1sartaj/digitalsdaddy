export interface ServiceDetailCard {
  _id?: string;
  slug: string;
  title: string;
  titleHighlightColor: "#a67c00" | "#355396"; // Gold vs Regal Blue header accent mapping
  description: string;
  features: string[];
  iconName: string;
  href: string;
}

export interface WhatWeDoData {
  slug: string;
  badge: string;
  title: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  subtitle: string;
  services: ServiceDetailCard[];
  cta: {
    label: string;
    href: string;
  };
}

export const whatWeDoData: WhatWeDoData = {
  slug: "what-we-do-complete-solutions",
  badge: "WHAT WE DO",
  title: {
    prefix: "Complete Digital Solutions",
    highlight: "Under One Roof",
    suffix: "",
  },
  subtitle:
    "From concept to launch and beyond — we cover every dimension of your digital journey with precision, creativity, and measurable impact.",
  services: [
    {
      slug: "ppc-performance-marketing",
      title: "PPC & Performance Marketing",
      titleHighlightColor: "#a67c00",
      description:
        "Maximize your ad spend with precision-targeted campaigns across Google, Meta, and YouTube.",
      features: [
        "Google Search, Display & Shopping Ads",
        "YouTube & Video Advertising",
        "Remarketing & Retargeting Campaigns",
        "Landing Page Design & A/B Testing",
        "Weekly Performance Dashboards",
      ],
      iconName: "BarChart3",
      href: "/services/performance-marketing",
    },
    {
      slug: "social-media-marketing",
      title: "Social Media Marketing",
      titleHighlightColor: "#355396",
      description:
        "Build a thriving community, grow brand awareness, and drive real sales through strategic social media management.",
      features: [
        "Instagram, Facebook, LinkedIn & Twitter",
        "Content Calendar & Creative Design",
        "Community Management & Engagement",
        "Paid Social Advertising (Meta Ads)",
        "Influencer Collaboration & Outreach",
      ],
      iconName: "Send",
      href: "/services/social-influencer-marketing",
    },
    {
      slug: "seo-content-marketing",
      title: "SEO & Content Marketing",
      titleHighlightColor: "#a67c00",
      description:
        "Dominate search rankings and build long-term organic authority with our data-driven SEO approach.",
      features: [
        "Technical SEO Audits & On-Page Optimization",
        "Keyword Research & Competitive Analysis",
        "Content Strategy & Blog Writing",
        "Link Building & Domain Authority Growth",
        "Monthly Rankings & Traffic Reports",
      ],
      iconName: "Search",
      href: "/services/seo-cro",
    },
    {
      slug: "website-development",
      title: "Website Development",
      titleHighlightColor: "#355396",
      description:
        "We build blazing-fast, conversion-optimized websites that make a lasting impression. Every pixel is crafted with purpose.",
      features: [
        "Custom UI/UX Design & Wireframing",
        "React, Next.js & WordPress Development",
        "E-Commerce (Shopify, WooCommerce)",
        "Performance & Core Web Vitals Optimization",
        "CMS Integration & Team Training",
      ],
      iconName: "Globe",
      href: "/services/web-development",
    },
    {
      slug: "branding-identity-design",
      title: "Branding & Identity Design",
      titleHighlightColor: "#a67c00",
      description:
        "We craft visual identities and brand systems that communicate your values and make you truly unforgettable.",
      features: [
        "Logo Design & Brand Guidelines",
        "Color Palette, Typography & Brand Voice",
        "Brand Collateral & Print Materials",
        "Packaging Design & Product Branding",
        "Full Rebranding & Brand Refresh",
      ],
      iconName: "PenTool",
      href: "/services/ui-ux-design",
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      titleHighlightColor: "#355396",
      description:
        "Native and cross-platform apps for iOS & Android that keep your business in your customers' pockets.",
      features: [
        "iOS & Android Native Development",
        "React Native & Flutter Cross-Platform",
        "UI/UX Prototyping & User Testing",
        "API Integration & Backend Services",
        "App Store Submission & Support",
      ],
      iconName: "Smartphone",
      href: "/services/mobile-app-development",
    },
  ],
  cta: {
    label: "EXPLORE ALL SERVICES",
    href: "/solutions",
  },
};