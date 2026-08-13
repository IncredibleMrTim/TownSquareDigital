import { FEATURES } from "@/data/content"

export default function Features() {
  return (
    <section className="bg-brand-navy px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-white">
            I feel your frustration — that&apos;s why I&apos;m here
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy-mist">
            I&apos;ve spent years building websites for companies of all sizes —
            from start-ups to corporates. The one thing that always stuck with
            me? The little guy always got the worst deal.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-brand-navy-light bg-brand-navy-light/25 p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-brick text-xl font-bold text-white">
                {feature.icon}
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy-mist">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
