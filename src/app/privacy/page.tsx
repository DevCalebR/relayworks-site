import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RelayWorks privacy policy for early-stage SaaS and automation services.",
  alternates: {
    canonical: "https://getrelayworks.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <article className="space-y-6">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: February 28, 2026</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">What we collect</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          RelayWorks collects account and contact details you provide directly, plus operational data
          required to run our products.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">How we use data</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Data is used to deliver core product functionality, support customer accounts, improve
          reliability, and communicate service updates.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Twilio usage for CallBackCloser</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          CallBackCloser by RelayWorks uses Twilio to process voice and SMS flows. This includes SMS
          and voice metadata needed for service delivery, lead qualification, and owner notifications.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Retention and security</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          We retain data only as long as necessary to operate services and meet legal obligations. We
          use reasonable technical safeguards, but no method of transmission or storage is guaranteed
          to be perfectly secure.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          For privacy questions, email
          {" "}
          <a className="text-sky-700 hover:text-sky-900" href="mailto:hello@getrelayworks.com">
            hello@getrelayworks.com
          </a>
          .
        </p>
      </section>
    </article>
  );
}
