export interface SubMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuCategory {
  title: string;
  links: SubMenuLink[];
}

export interface NavItem {
  Id?: number;
  slug: string;
  label: string;
  type: "dropdown" | "link";
  href?: string;
  description?: string;
  actionLabel?: string;
  menuData?: MegaMenuCategory[];
}

export interface MenuContactDirectory {
  title: string;
  location: {
    country: string;
    address: string;
  };
  phone: {
    display: string;
    raw: string;
  };
  email: {
    display: string;
    href: string;
  };
  website: {
    display: string;
    href: string;
  };
  cta: {
    label: string;
    href: string;
  };
}

export interface MenuData {
  navigation: NavItem[];
  contactDirectory: MenuContactDirectory;
  footer: {
    copyright: string;
    links: SubMenuLink[];
  };
}

export const navbarData: NavItem[] = [
  {
    slug: "ai-emerging-tech",
    label: "AI & Emerging Tech",
    type: "dropdown",
    href: "/ai-solutions",
    description:
      "Cutting-edge generative AI, machine learning automation, and predictive data science solutions.",
    actionLabel: "EXPLORE AI STACK",
    menuData: [
      {
        title: "Artificial Intelligence",
        links: [
          {
            label: "GENERATIVE AI INTEGRATION",
            href: "/services/ai-integration",
          },
          {
            label: "MARKETING & PROCESS AUTOMATION",
            href: "/services/ai-automation",
          },
          {
            label: "PREDICTIVE ANALYTICS & DATA SCIENCE",
            href: "/services/predictive-analytics",
          },
        ],
      },
    ],
  },
  {
    slug: "marketing-branding",
    label: "Marketing & Branding",
    type: "dropdown",
    href: "/marketing",
    description:
      "Data-driven performance campaigns, search engine optimization, PR strategies, and social growth.",
    actionLabel: "BOOST YOUR GROWTH",
    menuData: [
      {
        title: "Digital Marketing",
        links: [
          {
            label: "PERFORMANCE & LEAD ACQUISITION",
            href: "/services/performance-marketing",
          },
          {
            label: "SEO & CONVERSION RATE OPTIMIZATION",
            href: "/services/seo-cro",
          },
          {
            label: "SOCIAL & INFLUENCER MARKETING",
            href: "/services/social-influencer-marketing",
          },
        ],
      },
      {
        title: "PR & Branding",
        links: [
          {
            label: "PR & BRANDING STRATEGY",
            href: "/services/pr-brand-strategy",
          },
          {
            label: "ONLINE REPUTATION MANAGEMENT",
            href: "/services/social-influencer-marketing",
          },
          {
            label: "BRAND DESIGN & VISUAL IDENTITY",
            href: "/services/ui-ux-design",
          },
        ],
      },
    ],
  },
  {
    slug: "web-app-solutions",
    label: "Web & App Solutions",
    type: "dropdown",
    href: "/solutions",
    description:
      "End-to-end full-stack web engineering, cross-platform mobile apps, UI/UX systems, and headless commerce.",
    actionLabel: "VIEW ALL SOLUTIONS",
    menuData: [
      {
        title: "Engineering & Design",
        links: [
          {
            label: "FULL-STACK WEB ENGINEERING",
            href: "/services/web-development",
          },
          {
            label: "NATIVE & CROSS-PLATFORM MOBILE APPS",
            href: "/services/mobile-app-development",
          },
          {
            label: "PRODUCT UI/UX & BRAND DESIGN",
            href: "/services/ui-ux-design",
          },
        ],
      },
      {
        title: "Platforms & Systems",
        links: [
          {
            label: "HEADLESS E-COMMERCE ENGINES",
            href: "/services/ecommerce-development",
          },
          {
            label: "ENTERPRISE WEB REDESIGN & CMS",
            href: "/services/cms-redesign",
          },
        ],
      },
    ],
  },
  {
    slug: "hire-tech-talent",
    label: "Hire Dedicated Tech",
    type: "dropdown",
    href: "/hire-tech",
    description:
      "Extend your engineering team on-demand with senior full-stack developers, product designers, and API engineers.",
    actionLabel: "HIRE TALENT NOW",
    menuData: [
      {
        title: "Dedicated Experts",
        links: [
          {
            label: "DEDICATED FULL-STACK DEVELOPERS",
            href: "/hire/developers",
          },
          {
            label: "ON-DEMAND UI/UX PRODUCT DESIGNERS",
            href: "/hire/designers",
          },
          {
            label: "API & BACKEND INTEGRATION ENGINEERS",
            href: "/hire/api-engineers",
          },
        ],
      },
    ],
  },
  {
    slug: "industries",
    label: "Industries",
    type: "dropdown",
    href: "/industries",
    description:
      "Specialized digital architecture and growth solutions engineered for specific enterprise verticals.",
    actionLabel: "EXPLORE INDUSTRIES",
    menuData: [
      {
        title: "Sectors We Serve",
        links: [
          {
            label: "FINTECH & BANKING SYSTEMS",
            href: "/industries/fintech",
          },
          {
            label: "HEALTHCARE & MEDTECH",
            href: "/industries/healthcare",
          },
          {
            label: "E-COMMERCE & RETAIL",
            href: "/industries/ecommerce",
          },
          {
            label: "REAL ESTATE & PROPTECH",
            href: "/industries/real-estate",
          },
        ],
      },
    ],
  },
];

export const menuOverlayData: MenuData = {
  navigation: navbarData,
  contactDirectory: {
    title: "HEAD OFFICE DIRECTORY",
    location: {
      country: "Gurugram, India",
      address: "BVM Marg, DLF Phase 2, Sector 25",
    },
    phone: {
      display: "+91 98182 86609",
      raw: "+919818286609",
    },
    email: {
      display: "support@digitalsdaddy.com",
      href: "mailto:support@digitalsdaddy.com",
    },
    website: {
      display: "www.digitalsdaddy.com",
      href: "https://www.digitalsdaddy.com",
    },
    cta: {
      label: "GET IN TOUCH",
      href: "/contact",
    },
  },
  footer: {
    copyright: "© 2026 DigitalsDaddy. All Rights Reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};