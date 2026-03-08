import { NextResponse } from "next/server";
import { getVisibleProductBySlug } from "@/lib/products";

type StripeCheckoutSessionResponse = {
  url?: string;
  error?: {
    message?: string;
  };
};

function getBaseUrl(request: Request) {
  const envBaseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (envBaseUrl && envBaseUrl.startsWith("http")) {
    return envBaseUrl.replace(/\/$/, "");
  }

  return new URL(request.url).origin;
}

async function createStripeCheckoutSession({
  slug,
  request,
}: {
  slug: string;
  request: Request;
}) {
  const product = getVisibleProductBySlug(slug);

  if (!product || product.status !== "for_sale") {
    return NextResponse.json({ error: "Product not available for checkout." }, { status: 404 });
  }

  if (product.checkoutType === "stripe_payment_link") {
    if (!product.checkoutUrl) {
      return NextResponse.json(
        { error: `Missing checkoutUrl for ${product.slug}.` },
        { status: 500 },
      );
    }

    return NextResponse.redirect(product.checkoutUrl, { status: 303 });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json({ error: "Missing STRIPE_SECRET_KEY." }, { status: 500 });
  }

  if (!product.stripePriceIdEnv) {
    return NextResponse.json(
      { error: `Missing stripePriceIdEnv for ${product.slug}.` },
      { status: 500 },
    );
  }

  const stripePriceId = process.env[product.stripePriceIdEnv];

  if (!stripePriceId) {
    return NextResponse.json(
      {
        error: `Missing ${product.stripePriceIdEnv}. Set it to a Stripe Price ID for ${product.slug}.`,
      },
      { status: 500 },
    );
  }

  const baseUrl = getBaseUrl(request);
  const params = new URLSearchParams();

  params.set("mode", product.billingType === "subscription" ? "subscription" : "payment");
  params.set("success_url", `${baseUrl}/success?product=${product.slug}&session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${baseUrl}/cancel?product=${product.slug}`);
  params.set("line_items[0][price]", stripePriceId);
  params.set("line_items[0][quantity]", "1");
  params.set("client_reference_id", product.slug);
  params.set("metadata[product_slug]", product.slug);

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
    cache: "no-store",
  });

  const stripeData = (await stripeResponse.json()) as StripeCheckoutSessionResponse;

  if (!stripeResponse.ok || !stripeData.url) {
    return NextResponse.json(
      {
        error:
          stripeData.error?.message ?? "Stripe checkout session could not be created.",
      },
      { status: 502 },
    );
  }

  return NextResponse.redirect(stripeData.url, { status: 303 });
}

function extractSlugFromPath(pathname: string) {
  const match = pathname.match(/\/api\/checkout\/?([^/?#]+)/);

  return match?.[1] ?? "";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slugFromQuery = url.searchParams.get("slug")?.trim() ?? "";
  const slugFromPath = extractSlugFromPath(url.pathname);
  const slug = slugFromQuery || slugFromPath;

  if (!slug) {
    return NextResponse.json({ error: "Missing product slug." }, { status: 400 });
  }

  return createStripeCheckoutSession({ slug, request });
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  let slug = "";

  if (contentType.includes("application/json")) {
    const payload = (await request.json()) as { slug?: string };
    slug = payload.slug?.trim() ?? "";
  } else {
    const formData = await request.formData();
    slug = String(formData.get("slug") ?? "").trim();
  }

  if (!slug) {
    return NextResponse.json({ error: "Missing product slug." }, { status: 400 });
  }

  return createStripeCheckoutSession({ slug, request });
}
