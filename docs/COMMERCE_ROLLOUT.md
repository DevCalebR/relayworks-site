# Commerce Rollout

This document describes how product catalog commerce is configured on `getrelayworks.com`.

## Single Source of Truth

All product catalog data lives in:

- `src/content/products.ts`

Each product entry includes:

- `slug`
- `name`
- `shortDescription`
- `longDescription`
- `priceDisplay`
- `billingType` (`one_time` or `subscription`)
- `checkoutType` (`stripe_payment_link` or `stripe_checkout_session`)
- `checkoutUrl` (when `stripe_payment_link`)
- `checkoutRoute` (internal purchase route, e.g. `/buy/callbackcloser`)
- `appUrl` (optional)
- `repoUrl` (optional)
- `status` (`for_sale`)

## Stripe Configuration

Stripe checkout is started by:

- `src/app/api/checkout/route.ts`

### Required env vars

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_SITE_URL` (production base URL used for redirects)
- `PUBLIC_PRODUCT_ALLOWLIST` (comma-separated slugs to show publicly, e.g. `callbackcloser`)
- `.env.example` contains a copy-ready template for local setup.

For checkout-session products, set one price ID env var per product:

- `STRIPE_PRICE_CALLBACKCLOSER`
- `STRIPE_PRICE_DOCUMENT_EXPIRATION_TRACKER`
- `STRIPE_PRICE_USD_CAD_NEWS_ALERTS`
- `STRIPE_PRICE_PORTFOLIO_DASHBOARD`
- `STRIPE_PRICE_CLIENT_QUOTE_GENERATOR`

## How Success/Cancel URLs Are Set

The checkout route handler sets URLs per request:

- `success_url = ${NEXT_PUBLIC_SITE_URL}/success?product=<slug>&session_id={CHECKOUT_SESSION_ID}`
- `cancel_url = ${NEXT_PUBLIC_SITE_URL}/cancel?product=<slug>`

Pages:

- `src/app/success/page.tsx`
- `src/app/cancel/page.tsx`

## Temporarily Hiding Products

Public product visibility is controlled in one place:

- `src/lib/products.ts`

The helper reads:

- `PUBLIC_PRODUCT_ALLOWLIST` from environment variables.
- If the env var is unset or empty, it defaults to `callbackcloser`.

Current intended temporary setting:

- `PUBLIC_PRODUCT_ALLOWLIST=callbackcloser`

Examples:

- Show only CallbackCloser: `PUBLIC_PRODUCT_ALLOWLIST=callbackcloser`
- Show two products: `PUBLIC_PRODUCT_ALLOWLIST=callbackcloser,usd-cad-news-alerts`
- Show all products again: `PUBLIC_PRODUCT_ALLOWLIST=*`

All public pages, product detail routes, buy routes, checkout session creation, and sitemap entries use this helper. Hidden products return `404` on direct product/buy routes and are excluded from navigation surfaces and sitemap output.

## How to Add or Edit a Product

1. Open `src/content/products.ts`.
2. Add or update the product object in the `products` array.
3. Ensure `status` is `for_sale`.
4. Set checkout settings:
   - For Stripe Checkout Sessions:
     - `checkoutType: "stripe_checkout_session"`
     - `checkoutRoute: "/buy/<slug>"`
     - `stripePriceIdEnv: "STRIPE_PRICE_<SOMETHING>"`
     - Add the new env var with a real Stripe Price ID.
   - For Stripe Payment Links:
     - `checkoutType: "stripe_payment_link"`
     - `checkoutUrl: "https://buy.stripe.com/..."`
     - `checkoutRoute: "/buy/<slug>"` (still used for internal buy page)
5. Confirm the product appears correctly on:
   - `/`
   - `/products`
   - `/pricing`
   - `/products/<slug>`
   - `/buy/<slug>`

## End-to-End Test Checklist

1. Start app: `npm run dev`.
2. Open `/products` and verify each card shows `Buy now`.
3. Open `/pricing` and verify each product has a `Buy now` CTA.
4. Open `/buy/<slug>` for each product and click `Buy now with Stripe`.
5. Confirm redirect to Stripe checkout.
6. Complete payment in Stripe test mode and verify redirect to:
   - `/success?product=<slug>&session_id=...`
7. Cancel checkout and verify redirect to:
   - `/cancel?product=<slug>`
8. Verify footer links are reachable:
   - `/terms`
   - `/privacy`
   - `/refunds`
   - `/contact`
