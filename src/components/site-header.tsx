import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="enter-fade absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-[-0.04em] text-ink"
          aria-label="Vyltrum home"
        >
          vyltrum
        </Link>
        <nav className="flex items-center gap-7 text-[12px] tracking-[-0.01em] text-steel">
          <a
            href="#about"
            className="transition-colors duration-[var(--duration-press)] ease-[ease] hover:text-ink"
          >
            About
          </a>
          <a
            href="#coming-soon"
            className="transition-colors duration-[var(--duration-press)] ease-[ease] hover:text-ink"
          >
            Products
          </a>
          <a
            href="#contact"
            className="transition-colors duration-[var(--duration-press)] ease-[ease] hover:text-ink"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
