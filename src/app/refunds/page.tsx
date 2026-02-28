import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "RelayWorks refund policy for subscriptions and early-stage products.",
  alternates: {
    canonical: "https://getrelayworks.com/refunds",
  },
};

export default function RefundsPage() {
  return (
    <article className="space-y-6">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Refund Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: February 28, 2026</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Subscriptions</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          For paid subscriptions, contact RelayWorks within 14 days of the first billing date for a
          review of a first-cycle refund request.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Non-refundable items</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Usage-based charges from third-party services and completed implementation services are
          non-refundable unless required by law.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">How to request a refund</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Email
          {" "}
          <a className="text-sky-700 hover:text-sky-900" href="mailto:support@getrelayworks.com">
            support@getrelayworks.com
          </a>
          {" "}
          with account details and the reason for the request. We review requests promptly.
        </p>
      </section>
    </article>
  );
}
