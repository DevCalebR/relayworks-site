import type { Metadata } from "next";
import Link from "next/link";
import { SmsConsentForm } from "@/components/sms-consent-form";
import { siteConfig } from "@/lib/site";

const sampleConfirmationMessage =
  "RelayWorks: You're subscribed to customer care and account update texts from RelayWorks. Msg freq varies. Msg & data rates may apply. Reply HELP for help or STOP to opt out.";

const sampleHelpMessage = `RelayWorks: For help, reply to this message or email ${siteConfig.supportEmail}. Reply STOP to opt out. Msg & data rates may apply.`;

const messageExamples = [
  "callback coordination",
  "support updates",
  "service status updates",
  "account notifications",
];

export const metadata: Metadata = {
  title: "SMS Consent",
  description:
    "Public RelayWorks SMS consent page for customer care and account notification text messages.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/sms-consent`,
  },
};

export default function SmsConsentPage() {
  return (
    <article className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl space-y-4">
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
            RelayWorks SMS consent
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            RelayWorks SMS consent page
          </h1>
          <p className="text-base leading-7 text-slate-600">
            This public page shows the standalone web opt-in method RelayWorks uses for customer care
            and account notification text messages. It does not require login, cookies, or dashboard
            access to review the consent workflow.
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
        <SmsConsentForm />

        <aside className="space-y-4">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Opt-in method under review</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              RelayWorks uses a standalone public web consent form for SMS customer care and account
              notifications. The consent checkbox on this page is user-selectable and not preselected.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/privacy" className="text-sky-700 hover:text-sky-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sky-700 hover:text-sky-900">
                Terms & Conditions
              </Link>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">What messages you may receive</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {messageExamples.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">How to opt out</h2>
          <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <p>Reply STOP to opt out.</p>
            <p>Reply HELP for help.</p>
            <p>
              You can also email{" "}
              <a
                className="text-sky-700 hover:text-sky-900"
                href={`mailto:${siteConfig.supportEmail}`}
              >
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Program scope</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            RelayWorks only uses this SMS consent flow for customer care and account notification use
            cases, including callback coordination, support communication, service status updates, and
            account notices. It is not presented as a marketing or promotional signup.
          </p>
        </section>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Sample confirmation message</h2>
          <blockquote className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 text-slate-700">
            {sampleConfirmationMessage}
          </blockquote>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Sample help message</h2>
          <blockquote className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 text-slate-700">
            {sampleHelpMessage}
          </blockquote>
        </section>
      </section>
    </article>
  );
}
