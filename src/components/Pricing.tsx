import { PRICING } from "@/data/content"

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream-dark px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">
            Real prices for real budgets
          </h2>
          <p className="mx-auto max-w-xl text-lg text-stone">
            I set my prices with small business budgets in mind — not what the
            market will bear. Pay once to get online, or add the Care Plan to
            keep your site running smoothly every month. What you see is what
            you pay.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-brand-navy outline-2 outline-brand-brick"
                  : "border border-line bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-flex self-start rounded-full bg-brand-brick px-3 py-1 text-xs font-bold tracking-widest text-white uppercase">
                  Most popular
                </div>
              )}
              <div
                className={`mb-1 text-sm font-semibold tracking-widest uppercase ${
                  plan.highlight ? "text-navy-mist" : "text-muted"
                }`}
              >
                {plan.name}
              </div>
              <div className="mb-1 flex items-end gap-1">
                <span
                  className={`font-display text-4xl font-bold ${
                    plan.highlight ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`mb-1.5 text-sm ${
                    plan.highlight ? "text-navy-mist" : "text-muted"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`mb-6 text-sm ${
                  plan.highlight ? "text-[#c8d8ea]" : "text-muted"
                }`}
              >
                {plan.desc}
              </p>
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-brick text-xs text-white">
                      ✓
                    </span>
                    <span
                      className={
                        plan.highlight ? "text-[#dce8f0]" : "text-stone"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full rounded-lg py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90 ${
                  plan.highlight ? "bg-brand-brick" : "bg-brand-navy"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Not sure which plan?{" "}
          <a
            href="#contact"
            className="font-medium text-brand-navy underline underline-offset-2"
          >
            Drop me a message
          </a>{" "}
          and we&apos;ll work it out together.
        </p>
      </div>
    </section>
  )
}
