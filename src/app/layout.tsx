import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vyltrum — Systems that become products",
  description:
    "Vyltrum is a European technology company. Products under the house ship with their own names — same engineering DNA.",
  metadataBase: new URL("https://vyltrum.eu"),
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
