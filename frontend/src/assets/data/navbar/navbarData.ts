export interface SubMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuCategory {
  title: string;
  links: SubMenuLink[];
}

export interface NavItem {
  Id?: number; // ASP.NET MS SQL standard Int Primary Key mapping placeholder
  slug: string; // Unique string locator
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
  defaultActiveSlug: string;
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
    description: "Cutting-edge generative AI, machine learning automation, and predictive data science solutions.",
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
    slug: "web-app-solutions",
    label: "Web & App Solutions",
    type: "dropdown",
    href: "/solutions",
    description: "End-to-end full-stack web engineering, cross-platform mobile apps, UI/UX systems, and headless commerce.",
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
    slug: "growth-marketing",
    label: "Growth & Performance Marketing",
    type: "dropdown",
    href: "/marketing",
    description: "Data-driven performance campaigns, search engine optimization, PR strategies, and social growth.",
    actionLabel: "BOOST YOUR GROWTH",
    menuData: [
      {
        title: "Acquisition & Strategy",
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
            label: "PR, BRANDING & REPUTATION",
            href: "/services/pr-brand-strategy",
          },
          {
            label: "SOCIAL & INFLUENCER MARKETING",
            href: "/services/social-influencer-marketing",
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
    description: "Extend your engineering team on-demand with senior full-stack developers, product designers, and API engineers.",
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
];

export const menuOverlayData: MenuData = {
  defaultActiveSlug: "ai-emerging-tech",
  navigation: navbarData,
  contactDirectory: {
    title: "HEAD OFFICE DIRECTORY",
    location: {
      country: "Gurugram, India",
      address: "BVM Marg, DLF Phase 2, Sector 25",
    },
    phone: {
      display: "+91 9818286609",
      raw: "+919818286609",
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
    copyright: `© ${new Date().getFullYear()} DigitalsDaddy. All Rights Reserved.`,
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};