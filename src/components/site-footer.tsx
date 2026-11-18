export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-snow/40 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-[15px] font-semibold tracking-[-0.04em]">vyltrum</p>
          <p className="mt-0.5 text-[12px] text-steel">vyltrum.eu · Technology · Europe</p>
        </div>
        <div className="flex flex-wrap gap-6 text-[12px] text-steel">
          <a href="#about" className="hover:text-ink">
            About
          </a>
          <a href="#coming-soon" className="hover:text-ink">
            Products
          </a>
          <a href="mailto:hello@vyltrum.eu" className="hover:text-ink">
            hello@vyltrum.eu
          </a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
