import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-slate-600">
          &copy; {year} RelayWorks. Automation + SaaS products built for real ops.
        </p>

        <nav aria-label="Footer links" className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/contact" className="text-slate-600 hover:text-slate-900">
            Contact
          </Link>
          <Link href="/sms-consent" className="text-slate-600 hover:text-slate-900">
            SMS Consent
          </Link>
          <Link href="/privacy" className="text-slate-600 hover:text-slate-900">
            Privacy
          </Link>
          <Link href="/terms" className="text-slate-600 hover:text-slate-900">
            Terms
          </Link>
          <Link href="/refunds" className="text-slate-600 hover:text-slate-900">
            Refunds
          </Link>
        </nav>
      </div>
    </footer>
  );
}
