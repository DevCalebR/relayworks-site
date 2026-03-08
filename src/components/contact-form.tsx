"use client";

import { useState } from "react";
import type { Product } from "@/content/products";
import { siteConfig } from "@/lib/site";

type ContactFormProps = {
  products: Product[];
};

type FormState = {
  name: string;
  email: string;
  product: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  product: "",
  message: "",
};

export function ContactForm({ products }: ContactFormProps) {
  const [formState, setFormState] = useState<FormState>(initialState);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `RelayWorks inquiry${
      formState.product ? ` - ${formState.product}` : ""
    }`;

    const body = [
      `Name: ${formState.name}`,
      `Email: ${formState.email}`,
      `Product: ${formState.product || "General inquiry"}`,
      "",
      formState.message,
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.generalEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            required
            value={formState.name}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, name: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </label>

        <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            required
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
        </label>
      </div>

      <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="product">
        Product focus (optional)
        <select
          id="product"
          value={formState.product}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, product: event.target.value }))
          }
          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        >
          <option value="">General inquiry</option>
          {products.map((product) => (
            <option key={product.slug} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1 text-sm font-semibold text-slate-700" htmlFor="message">
        Message
        <textarea
          id="message"
          rows={6}
          required
          value={formState.message}
          onChange={(event) =>
            setFormState((prev) => ({ ...prev, message: event.target.value }))
          }
          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 font-normal text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Send via email
      </button>
      <p className="text-xs text-slate-500">
        This form uses your default email app (`mailto:`) and does not send data through third-party services.
      </p>
    </form>
  );
}
