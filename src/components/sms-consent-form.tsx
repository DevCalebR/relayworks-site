"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

const consentText =
  "By checking this box, you agree to receive customer care and account notification text messages from RelayWorks at the mobile number provided. Message frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt out. Consent is not a condition of purchase.";

function normalizePhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/[^\d+]/g, "");
}

export function SmsConsentForm() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedPhone = normalizePhoneNumber(phoneNumber);

    if (!fullName.trim()) {
      setErrorMessage("Enter your full name to continue.");
      return;
    }

    if (normalizedPhone.length < 10) {
      setErrorMessage("Enter a valid mobile phone number.");
      return;
    }

    if (!hasConsent) {
      setErrorMessage("You must check the SMS consent box before submitting.");
      return;
    }

    setErrorMessage("");

    const subject = "RelayWorks SMS consent request";
    const body = [
      "RelayWorks SMS Consent Submission",
      "",
      `Full name: ${fullName.trim()}`,
      `Mobile phone number: ${phoneNumber.trim()}`,
      `Email: ${email.trim() || "Not provided"}`,
      `Consent granted: Yes`,
      "",
      `Consent disclosure: ${consentText}`,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Standalone web consent form</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use this public form to opt in to RelayWorks customer care and account notification text
            messages. Submitting opens your default email app with a prefilled consent request to{" "}
            {siteConfig.supportEmail}.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="full-name">
            Full name
            <input
              id="full-name"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>

          <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="mobile-phone">
            Mobile phone number
            <input
              id="mobile-phone"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>
        </div>

        <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="email">
          Email (optional)
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <label className="flex items-start gap-3" htmlFor="sms-consent">
            <input
              id="sms-consent"
              name="smsConsent"
              type="checkbox"
              checked={hasConsent}
              onChange={(event) => setHasConsent(event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
            />
            <span className="space-y-2">
              <span className="block text-sm font-semibold text-slate-900">
                I agree to receive customer care and account notification text messages from
                RelayWorks at the number provided.
              </span>
              <span className="block text-sm leading-6 text-slate-600">{consentText}</span>
            </span>
          </label>
        </div>

        {errorMessage ? (
          <p className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {errorMessage}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Submit SMS consent
          </button>
          <p className="text-xs leading-5 text-slate-500">
            This consent workflow is public, requires no login, and is intended for RelayWorks
            customer care and account notifications only.
          </p>
        </div>
      </div>
    </form>
  );
}
