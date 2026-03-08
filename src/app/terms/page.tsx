import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "RelayWorks terms and SMS conditions for customer care and account notifications.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <article className="space-y-6">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: March 8, 2026</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Service scope</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          RelayWorks provides customer care, account notification, SaaS, and automation services on
          an as-available basis. Service capabilities may evolve through regular updates and releases.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">SMS consent</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          By submitting the RelayWorks SMS consent form and checking the consent box, you agree to
          receive customer care and account notification text messages from RelayWorks at the mobile
          number you provide. Consent is not a condition of purchase.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Message frequency and carrier charges</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Message frequency varies based on your account activity and support needs. Message and data
          rates may apply according to your wireless carrier plan.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">STOP and HELP</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Reply STOP to opt out of SMS messages. Reply HELP for help. You can also contact{" "}
          <a className="text-sky-700 hover:text-sky-900" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
          {" "}for assistance.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Acceptable use and liability</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          You agree not to misuse RelayWorks services, interfere with security controls, or use the
          platform for unlawful activity. Services are provided without warranties to the fullest
          extent permitted by law, and RelayWorks is not liable for indirect or consequential damages.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Questions about these terms can be sent to
          {" "}
          <a className="text-sky-700 hover:text-sky-900" href={`mailto:${siteConfig.generalEmail}`}>
            {siteConfig.generalEmail}
          </a>
          {" "}or reviewed on the{" "}
          <Link className="text-sky-700 hover:text-sky-900" href="/sms-consent">
            SMS consent page
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
