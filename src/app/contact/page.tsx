import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RelayWorks for product questions, waitlist access, or implementation support.",
  alternates: {
    canonical: "https://getrelayworks.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact RelayWorks</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Reach us directly for product demos, availability, and integration discussions.
        </p>
        <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          <p>
            <span className="font-semibold text-slate-900">General:</span>{" "}
            <a className="text-sky-700 hover:text-sky-900" href="mailto:hello@getrelayworks.com">
              hello@getrelayworks.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-900">Support:</span>{" "}
            <a className="text-sky-700 hover:text-sky-900" href="mailto:support@getrelayworks.com">
              support@getrelayworks.com
            </a>
          </p>
        </div>
      </section>

      <ContactForm products={products} />
    </div>
  );
}
