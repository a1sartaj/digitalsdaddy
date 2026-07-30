export interface VideoBrandingData {
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
  video: {
    youtubeId: string;
    title: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  cta: {
    label: string;
    href: string;
  };
}

export const brandingData: VideoBrandingData = {
  slug: "branding-video-showcase",
  badge: {
    label: "BRAND SHOWCASE",
    aiHighlight: "WATCH OUR REEL ⚡",
  },
  title: {
    prefix: "How We Elevate Brands Through",
    highlight: "Digital Excellence",
    suffix: "& AI Innovation",
  },
  subtitle:
    "Take an inside look into how DigitalsDaddy transforms enterprise web apps, scales performance ad funnels, and engineers custom AI solutions.",
  video: {
    youtubeId: "l-S2Y3SF3mM", // Replace with your actual YouTube Video ID
    title: "DigitalsDaddy 2026 Agency Vision & Showcase",
  },
  features: [
    {
      title: "Strategic Brand Identity",
      description: "Crafting memorable design systems and visual stories.",
    },
    {
      title: "Sub-Second Engineering",
      description: "Building ultra-fast Next.js web applications at global scale.",
    },
    {
      title: "AI & Growth Automation",
      description: "Scaling conversions with autonomous workflows and predictive ads.",
    },
  ],
  cta: {
    label: "EXPLORE OUR BRAND SERVICES",
    href: "/services/ui-ux-design",
  },
};