export type ProductCategory = "SaaS" | "Automation" | "Tools";
export type ProductStatus = "for_sale";
export type BillingType = "one_time" | "subscription";
export type CheckoutType = "stripe_payment_link" | "stripe_checkout_session";

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
  priceDisplay: string;
  billingType: BillingType;
  checkoutType: CheckoutType;
  checkoutRoute: string;
  checkoutUrl?: string;
  stripePriceIdEnv?: string;
  appUrl?: string;
  repoUrl?: string;
  status: ProductStatus;
};

export const productCategories: ProductCategory[] = [
  "SaaS",
  "Automation",
  "Tools",
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
      "A Next.js SaaS app that turns missed calls into booked jobs. When a customer calls a business Twilio number and the forwarded call is missed, the app records the call and lead in Postgres, starts an SMS qualification flow, stores inbound/outbound messages via Prisma, notifies the owner by SMS after ZIP is collected, and provides a protected dashboard to manage leads.",
    problem:
      "Service businesses lose revenue when missed calls never become qualified follow-ups.",
    solution:
      "CallBackCloser captures missed-call leads and runs a structured SMS flow so owners get qualified opportunities without manual triage.",
    features: [
      "Missed call detection",
      "Call recording",
      "SMS qualification flow",
      "Message history (Prisma)",
      "Owner notify after ZIP",
      "Protected dashboard",
    ],
    techStack: ["Next.js", "Twilio", "Postgres", "Prisma"],
    priceDisplay: "$99/month",
    billingType: "subscription",
    checkoutType: "stripe_checkout_session",
    checkoutRoute: "/buy/callbackcloser",
    stripePriceIdEnv: "STRIPE_PRICE_CALLBACKCLOSER",
    repoUrl: "https://github.com/DevCalebR/callbackcloser",
    status: "for_sale",
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
    techStack: ["Python", "task scheduling", "notifications"],
    priceDisplay: "$49/month",
    billingType: "subscription",
    checkoutType: "stripe_checkout_session",
    checkoutRoute: "/buy/document-expiration-tracker",
    stripePriceIdEnv: "STRIPE_PRICE_DOCUMENT_EXPIRATION_TRACKER",
    repoUrl:
      "https://github.com/DevCalebR/document-expiration-tracker-and-alert-system",
    status: "for_sale",
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
    priceDisplay: "$39/month",
    billingType: "subscription",
    checkoutType: "stripe_checkout_session",
    checkoutRoute: "/buy/usd-cad-news-alerts",
    stripePriceIdEnv: "STRIPE_PRICE_USD_CAD_NEWS_ALERTS",
    repoUrl: "https://github.com/DevCalebR/usdcad-news-alert-bot",
    status: "for_sale",
  },
  {
    slug: "portfolio-dashboard",
    name: "Portfolio Dashboard",
    byline: "Portfolio Dashboard by RelayWorks",
    category: "Tools",
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
    priceDisplay: "$149 one-time",
    billingType: "one_time",
    checkoutType: "stripe_checkout_session",
    checkoutRoute: "/buy/portfolio-dashboard",
    stripePriceIdEnv: "STRIPE_PRICE_PORTFOLIO_DASHBOARD",
    repoUrl: "https://github.com/DevCalebR/portfolio-dashboard",
    status: "for_sale",
  },
  {
    slug: "client-quote-generator",
    name: "Client Quote Generator",
    byline: "Client Quote Generator by RelayWorks",
    category: "Tools",
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
    priceDisplay: "$129 one-time",
    billingType: "one_time",
    checkoutType: "stripe_checkout_session",
    checkoutRoute: "/buy/client-quote-generator",
    stripePriceIdEnv: "STRIPE_PRICE_CLIENT_QUOTE_GENERATOR",
    repoUrl: "https://github.com/DevCalebR/client-quote-generator",
    status: "for_sale",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
