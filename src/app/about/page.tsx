import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how RelayWorks builds production-minded SaaS and automation products.",
  alternates: {
    canonical: "https://getrelayworks.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About RelayWorks</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          RelayWorks builds practical products for teams that need automation and SaaS systems to
          perform under real-world operating constraints.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Execution over hype</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Products are designed around operational bottlenecks and measurable outcomes.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Engineering discipline</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Validation, observability, and repeatable workflows are treated as baseline product
            requirements.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Productized iteration</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Each release cycle improves reliability, UX clarity, and operator trust.
          </p>
        </article>
      </section>
    </div>
  );
}
