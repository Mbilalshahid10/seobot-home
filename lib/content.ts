// Landing page copy — single source of truth.
// Clone workflow: edit this file (copy) + tailwind.config.js (theme).
// Most fields are optional — omit what you don't need, components skip gracefully.

// ── Text primitives ──
export type StyledSegment = {
  text: string;
  style: "gradient" | "muted" | "accent" | "strong";
};
export type RichText = (string | StyledSegment)[];

// ── Reusable building blocks ──
export interface CTAItem {
  text: string;
  href: string;
  icon?: string;
  variant?: "default" | "outline";
  trackingName?: string; // maps to data-cta-name; falls back to `text` if omitted
  trackingLocation?: string; // maps to data-cta-location; falls back to section name if omitted
}

export interface ListItem {
  icon?: string;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  icon?: string; // Material icon name (used by FAQC)
}

// ── Section content (almost everything optional) ──

export interface BrandContent {
  name: string;
  logoPath: string;
  logoAlt?: string; // defaults to name
  copyrightYear?: string; // defaults to current year
}

export interface MetaContent {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  ogImage?: string;
}

export interface HeroContent {
  headline: RichText; // the one thing every hero needs
  badge?: string;
  qualifier?: string;
  subhead?: string;
  ctas?: CTAItem[];
  trustLine?: { icon: string; text: string }[];
}

export interface HeroBContent {
  headline: RichText;
  subhead?: string;
  ctas?: CTAItem[];
  image?: { src: string; alt: string };
  socialProofLabel?: string;
  socialProofLogos?: { src: string; alt: string }[];
}

export interface ProblemContent {
  eyebrow?: string;
  headline?: RichText;
  description?: string;
  painCard?: { title?: string; icon?: string; items: ListItem[] };
  solutionCard?: {
    title?: string;
    subtitle?: string;
    icon?: string;
    items: ListItem[];
  };
}

export interface MechanismContent {
  badge?: { text: string; icon?: string };
  headline?: string;
  description?: RichText;
  before?: { label: string; icon?: string; quote: string };
  after?: { label: string; icon?: string; quote: string };
  closingLine?: string;
}

export interface OfferContent {
  badge?: string;
  headline?: RichText;
  description?: string;
  accessCard?: {
    label?: string;
    items?: ListItem[];
    disclaimer?: string;
  };
  scarcity?: { badge?: string; description?: string };
}

export interface FAQContent {
  eyebrow?: string;
  headline?: string;
  items: FAQItem[]; // at least the items are needed, otherwise no FAQ
  cta?: CTAItem;
  supportText?: string;
  supportLink?: { text: string; href: string };
}

export interface FooterLinkGroup {
  title: string;
  links: { text: string; href: string }[];
}

export interface FooterContent {
  copyright?: string;
  links?: { text: string; href: string }[];
  linkGroups?: FooterLinkGroup[];
}

export interface SignupContent {
  placeholder?: string;
  buttonText?: string;
  buttonTextSubmitting?: string;
  buttonIcon?: string;
  redirectPath?: string;
}

export interface ThankYouContent {
  metaTitle?: string;
  metaDescription?: string;
  heading?: string;
  description?: string;
  cta?: { text: string; href: string; icon?: string };
}

// ── Top-level: only brand + meta required, sections optional ──
export interface SiteContent {
  brand: BrandContent;
  meta: MetaContent;
  hero?: HeroContent;
  heroB?: HeroBContent;
  problem?: ProblemContent;
  mechanism?: MechanismContent;
  offer?: OfferContent;
  faq?: FAQContent;
  footer?: FooterContent;
  signup?: SignupContent;
  thankYou?: ThankYouContent;
}

// ── Current Seoscribed content ──
export const content: SiteContent = {
  brand: {
    name: "Seoscribed",
    logoPath: "/seoscribed-logo.webp",
    logoAlt: "Seoscribed",
    copyrightYear: "2026",
  },

  meta: {
    title: "Seoscribed",
    description:
      "AI-powered local content for directory founders scaling location pages.",
    keywords: ["seo", "directory", "location pages", "local content", "ai"],
    author: "Ahmad S.",
    ogImage: "/og.png",
  },

  hero: {
    badge: "Beta Access Open",
    qualifier:
      "For directory founders scaling location pages across hundreds of cities.",
    headline: [
      "500 location pages. Zero rankings.\n",
      { text: "We fix that in under an hour.", style: "gradient" },
    ],
    subhead:
      "You built the directory. You uploaded the data. But Google sees 500 pages of identical copy \u2014 and it\u2019s ranking none of them.",
    ctas: [
      {
        text: "See the Difference",
        href: "#mechanism",
        icon: "arrow_downward",
        variant: "default",
        trackingName: "See the Difference",
        trackingLocation: "hero",
      },
      {
        text: "Get Free Beta Access",
        href: "#get-access",
        icon: "arrow_forward",
        variant: "outline",
        trackingName: "Get Free Beta Access",
        trackingLocation: "hero",
      },
    ],
    trustLine: [
      { icon: "credit_card_off", text: "No credit card required" },
      { icon: "group", text: "Limited to 75 beta members" },
    ],
  },

  heroB: {
    headline: [
      "500 location pages.\n",
      { text: "Zero rankings.", style: "muted" },
      "\nWe fix that ",
      { text: "in under an hour.", style: "gradient" },
    ],
    subhead:
      "AI-powered local content that makes every location page genuinely unique — so Google actually ranks them.",
    ctas: [
      {
        text: "Get Free Beta Access",
        href: "#get-access",
        variant: "default",
        trackingName: "Get Free Beta Access",
        trackingLocation: "hero",
      },
      {
        text: "See How It Works",
        href: "#mechanism",
        variant: "outline",
        trackingName: "See How It Works",
        trackingLocation: "hero",
      },
    ],
    image: {
      src: "/og.png",
      alt: "Seoscribed app showing location page content generation",
    },
    socialProofLabel: "Trusted by directory founders",
  },

  problem: {
    eyebrow: "Why your pages aren\u2019t ranking",
    headline: [
      "Google demands unique content. \n",
      { text: "You have 500 identical pages.", style: "muted" },
    ],
    description:
      "Your directory is built. Your data is ready. But every location page needs genuinely different content \u2014 and right now, the options are painful.",
    painCard: {
      title: "Current Workflow",
      icon: "close",
      items: [
        {
          icon: "remove_circle_outline",
          text: "Three weeks of copy-pasting city names into ChatGPT. Page 1 and page 47 read identically.",
        },
        {
          icon: "remove_circle_outline",
          text: 'Every page opens with "Welcome to {City}, where you\'ll find..." \u2014 and Google notices.',
        },
        {
          icon: "remove_circle_outline",
          text: "$15,000 to freelancers who deliver the same filler with different city names swapped in.",
        },
        {
          icon: "warning",
          text: "You check Search Console. Most of your pages aren\u2019t even indexed. Duplicate content penalty.",
        },
      ],
    },
    solutionCard: {
      title: "With Seoscribed",
      subtitle: "The Local Context Engine",
      icon: "auto_awesome",
      items: [
        {
          icon: "check",
          text: "Upload CSV, generate 500 pages instantly.",
        },
        {
          icon: "check",
          text: "Location-aware context (landmarks, facts).",
        },
        {
          icon: "check",
          text: "Built-in uniqueness scoring per page.",
        },
        {
          icon: "check",
          text: "Done in under 1 hour. Free during beta.",
        },
      ],
    },
  },

  mechanism: {
    badge: { text: "The Local Context Engine", icon: "memory" },
    headline: "Why it works when ChatGPT doesn\u2019t.",
    description: [
      "ChatGPT writes from its training data. Feed it 500 cities and you get 500 versions of the same generic paragraph. Seoscribed\u2019s ",
      { text: "Local Context Engine", style: "strong" },
      " researches each location individually \u2014 pulling real neighborhoods, landmarks, demographic data, local institutions, and market stats \u2014 then weaves them into content that reads like it was written by someone who actually lives there.",
    ],
    before: {
      label: "ChatGPT Output \u2014 Austin, TX",
      icon: "close",
      quote:
        '\u201CWelcome to Austin, TX, where you\u2019ll find a wide range of quality dental providers. Austin is known for its vibrant culture and growing population. Whether you need a routine cleaning or cosmetic dentistry, Austin has many great options to choose from...\u201D',
    },
    after: {
      label: "Seoscribed Output \u2014 Austin, TX",
      icon: "check",
      quote:
        '\u201CFrom Austin\u2019s vibrant South Congress district to family practices expanding near Round Rock and Cedar Park, the city\u2019s 964,000 residents have access to a growing network fueled by UT Austin\u2019s dental school pipeline...\u201D',
    },
    closingLine:
      "Same city. Same prompt. Completely different output \u2014 because one researched, the other guessed.",
  },

  offer: {
    badge: "Join the Beta",
    headline: [
      "Your directory deserves \n",
      { text: "content as unique as each city.", style: "accent" },
    ],
    description:
      "Join as a founding member. Free access during beta \u2014 we\u2019ll generate a sample page for your niche within 24 hours.",
    accessCard: {
      label: "Free Beta Access Includes",
      items: [
        { icon: "check_circle", text: "Unlimited page generation" },
        {
          icon: "check_circle",
          text: "Built-in uniqueness scoring per page",
        },
        {
          icon: "check_circle",
          text: "Direct CMS push (WordPress, Webflow, more)",
        },
        {
          icon: "check_circle",
          text: "Free sample page for your niche within 24 hours",
        },
        {
          icon: "check_circle",
          text: "Priority support & feature requests",
        },
      ],
      disclaimer:
        "No credit card. No commitment. If the output doesn\u2019t meet your standard, just walk away.",
    },
    scarcity: {
      badge: "Beta limited to 75 founding members",
      description:
        "Capped at 75 to maintain generation quality and give every founding member hands-on support.",
    },
  },

  faq: {
    eyebrow: "Before you commit",
    headline: "Answers to what you\u2019re already thinking.",
    supportText:
      "Still have questions? We\u2019re happy to help you evaluate if Seoscribed is the right fit.",
    supportLink: { text: "Learn how it works", href: "#mechanism" },
    items: [
      {
        question: "How is this different from ChatGPT?",
        answer:
          "ChatGPT generates one page at a time. Loop it with a script and every page still sounds the same. Seoscribed pulls real local context \u2014 landmarks, neighborhoods, demographics \u2014 to make each page genuinely distinct.",
        icon: "psychology",
      },
      {
        question: "Will Google flag AI-generated content?",
        answer:
          "Google penalizes duplicate content, not AI content itself. Every page gets a uniqueness score before publish. If any page is too similar to another, you\u2019ll see it first.",
        icon: "verified_user",
      },
      {
        question: "Can I see a sample before I decide?",
        answer:
          "Yes. Every founding member gets a free sample page generated for their niche within 24 hours of signing up. If the output doesn\u2019t meet your standard, no commitment \u2014 you\u2019re in beta, not a contract.",
        icon: "preview",
      },
    ],
    cta: {
      text: "Get Free Beta Access",
      href: "#get-access",
      icon: "arrow_forward",
      trackingName: "Get Free Beta Access",
      trackingLocation: "faq",
    },
  },

  footer: {
    copyright: "\u00A9 2026 Seoscribed. All rights reserved.",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
    ],
    linkGroups: [
      {
        title: "Product",
        links: [
          { text: "How It Works", href: "#mechanism" },
          { text: "Get Access", href: "#get-access" },
        ],
      },
      {
        title: "Legal",
        links: [
          { text: "Privacy Policy", href: "/privacy" },
          { text: "Terms of Service", href: "/terms" },
        ],
      },
    ],
  },

  signup: {
    placeholder: "Your email address",
    buttonText: "Get Free Beta Access",
    buttonTextSubmitting: "Submitting...",
    buttonIcon: "arrow_forward",
    redirectPath: "/thank-you",
  },

  thankYou: {
    metaTitle: "Thank You | Seoscribed",
    metaDescription:
      "Thanks for your interest in Seoscribed. We're in development and will notify you when the product is ready.",
    heading: "Thanks for providing your information",
    description:
      "We\u2019re currently in development and will let you know when the product is ready to test.",
    cta: {
      text: "Back to Seoscribed",
      href: "/",
      icon: "arrow_forward",
    },
  },
};
