import type { Metadata } from "next";
import Link from "next/link";
import { VyltrumAdPlayer } from "@/components/vyltrum-ad-player";
import { brand } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Ad",
  description: "Vyltrum brand ad — Hello Zoom beat with the Node mark.",
  robots: { index: false, follow: false },
};

export default function AdPage() {
  return (
    <main className="min-h-[100svh] bg-ink text-snow">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <p className="text-[12px] tracking-[0.08em] text-steel uppercase">
              Brand film
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
              Vyltrum ad
            </h1>
            <p className="mt-2 max-w-md text-[13px] leading-relaxed text-steel">
              Logo open → Hello Zoom → logo close. Square 1080 for social.
            </p>
          </div>
          <Link
            href="/"
            className="text-[12px] tracking-[-0.01em] text-steel transition-colors hover:text-snow"
          >
            ← Site
          </Link>
        </div>

        <div className="overflow-hidden border border-hairline/30 bg-mist/5">
          <VyltrumAdPlayer />
        </div>
      </div>
    </main>
  );
}
