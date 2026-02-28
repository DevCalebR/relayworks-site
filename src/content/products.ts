export type ProductCategory = "SaaS" | "Automation" | "Portfolio";
export type ProductStatus = "Beta" | "Portfolio" | "Waitlist";

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  ctaLabel: string;
};

export type Product = {
  slug: string;
  name: string;
  byline: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  status: ProductStatus;
  primaryCtaLabel: string;
  repoUrl?: string;
  pricingTiers?: PricingTier[];
};

export const productCategories: ProductCategory[] = [
  "SaaS",
  "Automation",
  "Portfolio",
];

export const products: Product[] = [
  {
    slug: "callbackcloser",
    name: "CallBackCloser",
    byline: "CallBackCloser by RelayWorks",
    category: "SaaS",
    shortDescription:
      "Turn missed calls into booked jobs with automated SMS qualification.",
    longDescription:
      "A Next.js SaaS MVP that turns missed calls into booked jobs. When a customer calls a business's Twilio number and the forwarded call is missed, the app records the call and lead in Postgres, starts an SMS qualification flow (subscription-gated), stores inbound/outbound messages via Prisma, notifies the owner by SMS after ZIP is collected, and provides a protected dashboard to manage leads.",
    problem:
      "Service businesses lose revenue when missed calls never become qualified follow-ups.",
    solution:
      "CallBackCloser captures missed-call leads and runs a structured SMS flow so owners get qualified opportunities without manual triage.",
    features: [
      "Missed call detection",
      "Call recording",
      "SMS qualification (subscription-gated)",
      "Message history (Prisma)",
      "Owner notify after ZIP",
      "Protected dashboard",
    ],
    techStack: ["Next.js", "Twilio", "Postgres", "Prisma"],
    status: "Beta",
    primaryCtaLabel: "Contact",
    pricingTiers: [
      {
        name: "Starter",
        price: "$99",
        cadence: "/month",
        description: "For local teams validating a missed-call recovery workflow.",
        features: [
          "Up to 250 qualified leads/month",
          "Core SMS qualification flow",
          "Dashboard lead tracking",
          "Email support",
        ],
        ctaLabel: "Get Starter",
      },
      {
        name: "Pro",
        price: "$249",
        cadence: "/month",
        description: "For operators running higher call volume across service areas.",
        features: [
          "Up to 1,500 qualified leads/month",
          "Advanced qualification branching",
          "Priority owner notifications",
          "Priority support",
        ],
        ctaLabel: "Get Pro",
      },
    ],
  },
  {
    slug: "portfolio-dashboard",
    name: "Portfolio Dashboard",
    byline: "Portfolio Dashboard by RelayWorks",
    category: "Portfolio",
    shortDescription:
      "Backtest research workflow UI: create runs, view history, inspect charts.",
    longDescription:
      "Vite + React + TypeScript SPA showcasing a backtest research workflow: dashboard overview, run history table, validated run creation form, and run detail charts.",
    problem:
      "Research workflows are hard to review when run results and parameters are fragmented across tools.",
    solution:
      "Portfolio Dashboard centralizes experiment runs, validation, and chart-level inspection in one interface.",
    features: [
      "Dashboard overview",
      "Run history table",
      "Validated run creation form",
      "Run detail charts",
    ],
    techStack: ["Vite", "React", "TypeScript"],
    status: "Portfolio",
    primaryCtaLabel: "Contact",
  },
  {
    slug: "usd-cad-news-alerts",
    name: "USD/CAD News Alerts",
    byline: "USD/CAD News Alerts by RelayWorks",
    category: "Automation",
    shortDescription:
      "Ranked US/Canada macro events with scheduled plain-text alerts.",
    longDescription:
      "Fetches upcoming US/Canada economic events, ranks them, and schedules plain-text alerts with optional USD/CAD context from OANDA. Defaults to ForexFactory calendar scraping with a local 10-minute cache.",
    problem:
      "Manually tracking macro catalysts is inconsistent and often misses timing windows.",
    solution:
      "USD/CAD News Alerts ranks relevant events and pushes scheduled plain-text notifications with practical market context.",
    features: [
      "US/Canada calendar ingestion",
      "Event ranking pipeline",
      "Scheduled plain-text alerts",
      "Optional OANDA USD/CAD context",
      "Local 10-minute cache",
    ],
    techStack: ["Python", "scheduling", "caching", "optional OANDA"],
    status: "Beta",
    primaryCtaLabel: "Contact",
  },
  {
    slug: "document-expiration-tracker",
    name: "Document Expiration Tracker",
    byline: "Document Expiration Tracker by RelayWorks",
    category: "Automation",
    shortDescription:
      "Track expirations and get alerts before renewals are missed.",
    longDescription:
      "Tracks document expiration dates and sends alerts so nothing expires unexpectedly.",
    problem:
      "Critical documents often expire silently until they block operations.",
    solution:
      "Document Expiration Tracker maintains clear timelines and pre-expiration alerts so teams can renew on schedule.",
    features: [
      "Central expiration timeline",
      "Renewal reminder scheduling",
      "Configurable lead times",
      "Simple owner notifications",
    ],
    techStack: ["Generic stack"],
    status: "Waitlist",
    primaryCtaLabel: "Join waitlist",
  },
  {
    slug: "client-quote-generator",
    name: "Client Quote Generator",
    byline: "Client Quote Generator by RelayWorks",
    category: "Portfolio",
    shortDescription:
      "Client intake -> editable quotes with totals + FX preview.",
    longDescription:
      "React + TypeScript + Vite client intake wizard and quote workflow with multi-step validation, editable line items + totals, list/search/filter + detail views, local persistence, and live FX conversion preview with cached rates and graceful fallback.",
    problem:
      "Quote preparation breaks down when intake, calculations, and FX context live in disconnected steps.",
    solution:
      "Client Quote Generator provides a guided intake-to-quote workflow with validation, editable totals, and resilient FX previews.",
    features: [
      "Multi-step intake validation",
      "Editable line items and totals",
      "List/search/filter and detail views",
      "Local persistence",
      "Live FX conversion preview with cached fallback",
    ],
    techStack: ["Vite", "React", "TypeScript"],
    status: "Portfolio",
    primaryCtaLabel: "Contact",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
