import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { siteConfig } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "RelayWorks | Automation + SaaS Products",
    template: "%s | RelayWorks",
  },
  description:
    "RelayWorks builds automation systems and SaaS products that help teams run cleaner, faster workflows.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Automation + SaaS Products`,
    description:
      "Explore RelayWorks products across SaaS, automation, and operations tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Automation + SaaS Products`,
    description:
      "Automation-first software products by RelayWorks for real-world operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${ibmPlexMono.variable} bg-site-bg text-slate-900 antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="hero-glow left-[8%] top-[-18rem]" />
            <div className="hero-glow right-[3%] top-[8rem]" />
            <div className="hero-glow left-[25%] bottom-[-20rem]" />
          </div>

          <div className="flex min-h-screen flex-col">
            <SiteNavbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
