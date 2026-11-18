import { HeroAtmosphere } from "@/components/hero-atmosphere";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero — load choreography */}
        <section className="relative min-h-[100svh] overflow-hidden border-b border-hairline">
          <HeroAtmosphere />
          <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-5 pt-20 pb-16 sm:px-8 sm:pb-20 sm:pt-16">
            <p className="enter text-[12px] tracking-[0.08em] text-steel uppercase">
              Technology company · {brand.region}
            </p>
            <h1 className="enter-1 mt-5 text-6xl leading-[0.92] font-semibold tracking-[-0.06em] text-ink sm:text-7xl lg:text-8xl">
              vyltrum
            </h1>
            <p className="enter-2 mt-8 max-w-xl text-xl leading-snug font-medium tracking-[-0.03em] text-ink sm:text-2xl">
              {brand.tagline}
            </p>
            <p className="enter-2 mt-4 max-w-md text-[13px] leading-relaxed text-steel sm:text-sm">
              The house is forming. Products will follow — each with its own name, under Vyltrum.
            </p>
            <div className="enter-3 mt-10 flex flex-wrap gap-3">
              <Button href="#coming-soon">Coming soon</Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-b border-hairline bg-snow/35">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <p className="text-[12px] tracking-[0.08em] text-steel uppercase">About</p>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-4 max-w-3xl text-3xl leading-[1.1] font-semibold tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
                A technology house for what comes next.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-steel sm:text-[15px]">
                {brand.description}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-4 max-w-2xl text-[13px] leading-relaxed text-steel sm:text-[15px]">
                {brand.model}
              </p>
            </Reveal>
          </div>
        </section>

        {/* What we have */}
        <section id="foundations" className="scroll-mt-20 border-b border-hairline bg-snow/20">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <p className="text-[12px] tracking-[0.08em] text-steel uppercase">Today</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                What we have
              </h2>
              <p className="mt-4 max-w-xl text-[13px] text-steel sm:text-sm">
                No product is live yet. The foundations are in place so we can build cleanly.
              </p>
            </Reveal>

            <ul className="mt-12 divide-y divide-hairline border-y border-hairline">
              {brand.foundations.map((item, i) => (
                <Reveal key={item.title} delay={40 + i * 50}>
                  <li className="grid gap-3 py-8 sm:grid-cols-[64px_1fr] sm:items-baseline sm:gap-8">
                    <span className="text-[12px] text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.035em] text-ink sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-steel">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Coming soon */}
        <section id="coming-soon" className="scroll-mt-20 border-b border-hairline bg-snow/35">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <p className="text-[12px] tracking-[0.08em] text-steel uppercase">Products</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Coming soon
              </h2>
              <p className="mt-4 max-w-xl text-[13px] text-steel sm:text-sm">
                The first product is still in the lab. When it leaves, it will have its own name —
                and a reason to exist.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-12 border border-hairline bg-snow/60 px-6 py-16 text-center sm:px-10 sm:py-20">
                <p className="text-[12px] tracking-[0.08em] text-steel uppercase">Chapter zero</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                  Building in silence.
                </p>
                <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-steel">
                  We are shaping the first instrument under Vyltrum. If you care about what we make —
                  or want to shape it with us — start the conversation now.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button
                    href={`mailto:${brand.email}?subject=I%20want%20to%20build%20with%20Vyltrum`}
                  >
                    Build with us
                  </Button>
                  <Button href="#about" variant="secondary">
                    Read the vision
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 bg-snow/35">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <Reveal>
              <p className="text-[12px] tracking-[0.08em] text-steel uppercase">Contact</p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Say hello
              </h2>
              <p className="mt-4 max-w-lg text-[13px] text-steel sm:text-sm">
                Partnerships, questions, or early interest — we read every message.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <dl className="mt-12 divide-y divide-hairline border-y border-hairline">
                <div className="grid gap-2 py-6 sm:grid-cols-[160px_1fr] sm:items-baseline">
                  <dt className="text-[12px] text-steel">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-[15px] font-medium tracking-[-0.02em] text-ink hover:underline"
                    >
                      {brand.email}
                    </a>
                  </dd>
                </div>
                <div className="grid gap-2 py-6 sm:grid-cols-[160px_1fr] sm:items-baseline">
                  <dt className="text-[12px] text-steel">Web</dt>
                  <dd className="text-[15px] font-medium tracking-[-0.02em]">{brand.domain}</dd>
                </div>
                <div className="grid gap-2 py-6 sm:grid-cols-[160px_1fr] sm:items-baseline">
                  <dt className="text-[12px] text-steel">Region</dt>
                  <dd className="text-[15px] font-medium tracking-[-0.02em]">{brand.region}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-10">
                <Button href={`mailto:${brand.email}`}>Email Vyltrum</Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
