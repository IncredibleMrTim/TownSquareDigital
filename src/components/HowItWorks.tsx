import { STEPS } from "@/data/content"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">
            Simple as a phone call
          </h2>
          <p className="mx-auto max-w-xl text-lg text-stone">
            You don&apos;t need to know anything about websites — that&apos;s my
            job. Here&apos;s how it works.
          </p>
        </div>
        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute top-8 right-1/4 left-1/4 hidden h-px border-t-2 border-dashed border-[#d0c8b8] md:block" />
          {STEPS.map((step, index) => (
            <div key={step.num} className="relative text-center">
              <div
                className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 font-display text-xl font-bold ${
                  index === 1
                    ? "border-brand-navy bg-brand-navy text-white"
                    : "border-[#d0c8b8] bg-white text-brand-navy"
                }`}
              >
                {step.num}
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-stone">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
