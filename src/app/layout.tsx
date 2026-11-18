import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { brand } from "@/lib/brand";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = `https://${brand.domain}`;
const title = `${brand.name} — ${brand.tagline.replace(/\.$/, "")}`;
const description =
  "European technology house for products that earn their own names. Built in silence — ships when ready.";
const sharePhrase = "Systems that become products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${brand.name}`,
  },
  description,
  applicationName: brand.name,
  keywords: [
    "Vyltrum",
    "technology company",
    "Europe",
    "product house",
    "systems",
    "vyltrum.eu",
  ],
  authors: [{ name: brand.name, url: siteUrl }],
  creator: brand.name,
  publisher: brand.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: brand.name,
    title: sharePhrase,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${brand.name} — ${sharePhrase}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: sharePhrase,
    description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetbrains.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-mono text-ink">
        {children}
      </body>
    </html>
  );
}
