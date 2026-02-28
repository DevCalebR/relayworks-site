import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RelayWorks terms for early-stage SaaS and automation products.",
  alternates: {
    canonical: "https://getrelayworks.com/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="space-y-6">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: February 28, 2026</p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Service scope</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          RelayWorks provides early-stage SaaS and automation tools on an as-available basis. Product
          capabilities may evolve as features move from beta to general availability.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Acceptable use</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          You agree not to misuse the services, interfere with security controls, or use the platform
          for unlawful activity.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Third-party services</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Some products depend on third-party providers such as Twilio for communications and optional
          market data providers. Availability may be impacted by those dependencies.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Liability</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Services are provided without warranties to the fullest extent permitted by law. RelayWorks
          is not liable for indirect, incidental, or consequential damages.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Questions about these terms can be sent to
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
