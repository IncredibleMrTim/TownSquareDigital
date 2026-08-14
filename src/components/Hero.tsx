import Image from "next/image"
import { HERO_BADGES } from "@/data/content"
import { IMG_HERO } from "@/lib/theme"

export default function Hero() {
  return (
    <section id="services" className="bg-cream px-6 pt-32 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream-dark px-3 py-1.5 text-xs font-semibold tracking-widest text-brand-navy uppercase">
            Built for the little guy
          </div>
          <h1 className="mb-6 font-display text-5xl leading-tight font-bold text-brand-navy md:text-6xl">
            Your website. How you want it.{" "}
            <em className="text-brand-brick not-italic">No surprises.</em>
          </h1>
          <p className="mb-4 text-lg leading-relaxed text-stone">
            I&apos;ve heard the same story from trades and small businesses time
            and again — big agency promises, amazing pitch, then a price tag
            that&apos;s just too high. I started Town Square Digital to change
            that. Simple websites, only the features you actually need, at a
            price that makes sense.
          </p>
          <p className="mb-8 text-sm text-muted">
            Based in Gosport (PO13), serving tradespeople and small
            businesses across Gosport, Portsmouth, Southampton, Fareham and
            the surrounding areas — plus UK-wide.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-brick px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get your free quote →
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg border border-[#c8bfad] px-7 py-3.5 text-base font-medium text-ink"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            {HERO_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-stone"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cream-dark text-xs font-bold text-brand-navy">
                  ✓
                </span>
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative h-95 overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(27,51,88,0.16)]">
            <Image
              src={IMG_HERO}
              alt="Tradesperson at work — the kind of local business Town Square Digital helps get online"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_top,rgba(27,51,88,0.33),transparent)]" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-line bg-white px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="font-display text-2xl font-bold text-brand-navy">
              £299
            </div>
            <div className="mt-0.5 text-xs text-muted">Starter sites from</div>
          </div>
          <div className="absolute -top-5 -right-5 rounded-xl bg-brand-brick px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)]">
            <div className="font-display text-2xl font-bold text-white">
              5–10
            </div>
            <div className="mt-0.5 text-xs text-[#f5c5b0]">days to go live</div>
          </div>
        </div>
      </div>
    </section>
  )
}
