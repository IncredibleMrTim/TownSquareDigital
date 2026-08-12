import { TESTIMONIALS } from "@/data/content"

const STAR_RATING_COUNT = 5

export default function Testimonials() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">What our clients say</h2>
          <p className="text-lg text-stone">Real feedback from real tradespeople.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-line bg-white p-8 transition-all hover:shadow-md"
            >
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: STAR_RATING_COUNT }, (_, index) => (
                  <span key={index} className="text-sm text-brand-brick">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mb-6 text-sm leading-relaxed text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{testimonial.name}</div>
                  <div className="text-xs text-muted">{testimonial.trade}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
