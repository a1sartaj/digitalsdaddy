export interface FooterLink {
  label: string;
  href: string;
  isAiHighlight?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  platform: string;
  href: string;
  iconName: string;
}

export interface FooterOfficeLocation {
  city: string;
  regionTag: string;
  address: string;
  phone: string;
}

export interface FooterData {
  slug: string;
  brand: {
    logoPath: string;
    logoAlt: string;
    description: string;
  };
  topBarContacts: {
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    address: string;
  };
  socials: FooterSocialLink[];
  offices: FooterOfficeLocation[];
  linkGroups: FooterLinkGroup[];
  quickActions: {
    whatsAppLabel: string;
    whatsAppHref: string;
    message: string;
    supportAvatar?: string;
  };
  legal: {
    copyrightText: string;
    disclaimer: string;
    certifications: string[];
    links: FooterLink[];
  };
}

export const footerData: FooterData = {
  slug: "digitals-daddy-footer",
  brand: {
    logoPath: "/logo/logo.png",
    logoAlt: "DigitalsDaddy Logo",
    description:
      "India's premier full-service digital transformation agency helping brands scale through strategic Web Design, Artificial Intelligence, Mobile Apps, SEO, and Performance Marketing since 2015.",
  },
  topBarContacts: {
    phone: "+91 98182 86609",
    phoneHref: "tel:+919818286609",
    email: "support@digitalsdaddy.com",
    emailHref: "mailto:support@digitalsdaddy.com",
    address: "BVM Marg, DLF Phase 2, Sector 25, Gurugram, India",
  },
  socials: [
    { platform: "LinkedIn", href: "https://linkedin.com", iconName: "Linkedin" },
    { platform: "Instagram", href: "https://instagram.com", iconName: "Instagram" },
    { platform: "X (Twitter)", href: "https://x.com", iconName: "Twitter" },
    { platform: "Facebook", href: "https://facebook.com", iconName: "Facebook" },
    { platform: "YouTube", href: "https://youtube.com", iconName: "Youtube" },
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
  linkGroups: [
    {
      title: "Digital Marketing",
      links: [
        { label: "PPC & Google Ads", href: "/services/performance-marketing" },
        { label: "SEO & Content Marketing", href: "/services/seo-cro" },
        { label: "Social Media Marketing", href: "/services/social-influencer-marketing" },
        { label: "Marketing Automation", href: "/services/performance-marketing" },
        { label: "Leads & Sales Funnels", href: "/services/performance-marketing" },
        { label: "Web Analytics & Conversion", href: "/services/seo-cro" },
      ],
    },
    {
      title: "Web & App Engineering",
      links: [
        { label: "Website Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Artificial Intelligence", href: "/services/web-development", isAiHighlight: true },
        { label: "UI/UX Design", href: "/services/ui-ux-design" },
        { label: "eCommerce Web Development", href: "/services/web-development" },
        { label: "CMS & Re-Design", href: "/services/web-development" },
      ],
    },
    {
      title: "Branding & Creative",
      links: [
        { label: "Brand Designing & Identity", href: "/services/ui-ux-design" },
        { label: "PR & Branding Strategy", href: "/services/ui-ux-design" },
        { label: "Influencer Marketing", href: "/services/social-influencer-marketing" },
        { label: "Online Reputation Management", href: "/services/social-influencer-marketing" },
        { label: "Video Marketing & Editing", href: "/services/social-influencer-marketing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Case Studies & Portfolio", href: "/projects" },
        { label: "Blog & Insights", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ],
  quickActions: {
    whatsAppLabel: "WhatsApp Us",
    whatsAppHref: "https://wa.me/919818286609",
    message: "Hi, can I talk to Digitals Daddy support?",
    supportAvatar: "",
  },
  legal: {
    copyrightText: "© 2026 Digital Daddy. All rights reserved.",
    disclaimer:
      "Disclaimer: Third-party logos, photos, and videos are used for reference purposes only and do not imply endorsement.",
    certifications: ["ISO 9001 Certified", "GST Registered"],
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
};