export interface FaqItem {
  _id?: string;
  slug: string;
  question: string;
  answer: string;
  category: string;
  isAiHighlight?: boolean;
}

export interface FaqsData {
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
  questions: FaqItem[];
  cta: {
    label: string;
    href: string;
  };
}

export const faqsData: FaqsData = {
  slug: "frequently-asked-questions",
  badge: {
    label: "COMMON QUESTIONS",
    aiHighlight: "CLEAR ANSWERS & AI INSIGHTS ⚡",
  },
  title: {
    prefix: "Frequently Asked",
    highlight: "Questions & Insights",
    suffix: "",
  },
  subtitle:
    "Everything you need to know about website design, mobile app engineering, SEO techniques, referral programs, and why DigitalsDaddy leads digital transformation in India.",
  questions: [
    {
      slug: "what-do-website-development-companies-in-india-do",
      question: "What does a website development company in India do?",
      answer:
        "A full-service website development company in India designs, engineers, tests, and deploys digital platforms. Services range from custom UI/UX design, full-stack Next.js and MERN development, e-commerce integrations, and cloud infrastructure setup to embedding AI agents and automated workflows for business scaling.",
      category: "Web Development",
      isAiHighlight: false,
    },
    {
      slug: "why-choose-an-indian-website-development-company",
      question: "Why choose an Indian website development company?",
      answer:
        "Partnering with an Indian development company offers global access to elite engineering talent, high cost-efficiency (saving up to 60–70% compared to US/EU agency rates), rapid agile sprint cycles across time zones, and proven expertise in cutting-edge AI, cloud, and full-stack frameworks.",
      category: "Global Advantages",
      isAiHighlight: true,
    },
    {
      slug: "who-is-the-best-website-designing-company-in-india",
      question: "Who is the best website designing company in India?",
      answer:
        "DigitalsDaddy is widely recognized as a top website designing and development agency in India. We combine conversion-focused UI/UX design with sub-second Next.js engineering and generative AI integrations, ensuring your brand stands out and converts visitors into long-term clients.",
      category: "Agency Recognition",
      isAiHighlight: false,
    },
    {
      slug: "how-to-hire-the-best-mobile-app-development-company-in-india",
      question: "How to hire the best mobile app development company in India?",
      answer:
        "To hire the best app team: 1) Review their portfolio for native (iOS/Android) and cross-platform (React Native/Flutter) builds. 2) Assess their backend microservices and security standards. 3) Look for AI integration capabilities. 4) Ensure clear communication and dedicated account management, like DigitalsDaddy provides.",
      category: "App Engineering",
      isAiHighlight: true,
    },
    {
      slug: "why-digitals-daddy-is-the-best-website-and-app-development-company-in-india",
      question: "Why DigitalsDaddy is the best website and app development company in India?",
      answer:
        "DigitalsDaddy stands apart by focusing on true business outcomes rather than vanity metrics. With an 8+ year track record, sub-800ms page load speeds, a 98% client retention rate, custom AI LLM/agent integrations, and transparent reporting, we act as a dedicated growth partner rather than just another vendor.",
      category: "DigitalsDaddy Advantage",
      isAiHighlight: true,
    },
    {
      slug: "best-ui-designing-company-in-india",
      question: "Which is the best UI/UX designing company in India?",
      answer:
        "DigitalsDaddy offers elite UI/UX design services centered on conversion psychology, accessible design systems, and seamless user journeys. We craft modern wireframes, interactive Figma prototypes, and responsive interfaces that elevate brand authority.",
      category: "UI/UX Design",
      isAiHighlight: false,
    },
    {
      slug: "how-to-join-your-referral-program",
      question: "How to join your referral program?",
      answer:
        "Joining the DigitalsDaddy Referral Partner Program is simple! Sign up through our Partner Portal, introduce businesses seeking web development, mobile apps, AI solutions, or performance marketing, and earn competitive recurring commissions or flat bonuses upon contract sign-off.",
      category: "Partnerships",
      isAiHighlight: false,
    },
    {
      slug: "which-is-the-best-digital-marketing-agency-in-india",
      question: "Which is the best digital marketing agency in India?",
      answer:
        "DigitalsDaddy leads performance marketing and digital growth in India. By combining AI-driven predictive ad bidding across Google, Meta, and YouTube with technical SEO and high-converting landing page optimization, we deliver industry-leading ROI for B2B and DTC brands.",
      category: "Digital Marketing",
      isAiHighlight: true,
    },
    {
      slug: "how-do-i-conduct-keyword-research",
      question: "How do I conduct keyword research effectively?",
      answer:
        "To conduct research: 1) Identify core topics and seed terms. 2) Use SEO tools (Ahrefs, SEMrush, Google Keyword Planner) to evaluate search volume and keyword difficulty. 3) Analyze search intent (informational vs transactional). 4) Leverage AI clustering tools to group keywords into content pillars that drive high organic authority.",
      category: "SEO Strategy",
      isAiHighlight: true,
    },
    {
      slug: "which-seo-techniques-are-popular",
      question: "Which SEO techniques are popular and effective in 2026?",
      answer:
        "Top techniques include: 1) Technical Core Web Vitals optimization for sub-second page loads. 2) AI Content Optimization & Semantic Entity Search (RAG/LLM readiness). 3) Topic Cluster Content Architecture. 4) Schema Markup & Structured Data. 5) High-authority digital PR link acquisition.",
      category: "SEO Strategy",
      isAiHighlight: true,
    },
  ],
  cta: {
    label: "HAVE MORE QUESTIONS? CONTACT US",
    href: "/contact",
  },
};