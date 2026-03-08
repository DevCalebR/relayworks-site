import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RelayWorks privacy policy for customer care and account notification services.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <article className="space-y-6">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: March 8, 2026</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">What we collect</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          RelayWorks collects contact details you provide directly, including your name, mobile phone
          number, optional email address, and operational data needed to support your account.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">How we use data</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          We use this information to deliver customer care and account notification text messages,
          coordinate callbacks, send support updates, and communicate service status information.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">SMS data use</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          If you opt in to SMS from RelayWorks, we use your mobile number to send customer care and
          account notification texts. Message frequency varies. Message and data rates may apply based
          on your wireless plan.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Opt-out and help</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          You can opt out of SMS messages at any time by replying STOP. For help, reply HELP or email{" "}
          <a className="text-sky-700 hover:text-sky-900" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Sharing and retention</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          We retain data only as long as needed to operate our services, support customer accounts,
          and meet legal obligations. We do not sell your phone number. Service providers that help us
          deliver communications may process message metadata on our behalf.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          For privacy questions, email
          {" "}
          <a className="text-sky-700 hover:text-sky-900" href={`mailto:${siteConfig.generalEmail}`}>
            {siteConfig.generalEmail}
          </a>
          {" "}or review our{" "}
          <Link className="text-sky-700 hover:text-sky-900" href="/sms-consent">
            SMS consent page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
