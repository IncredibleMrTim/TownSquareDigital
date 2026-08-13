import Image from "next/image"
import { SERVICES } from "@/data/content"
import { IMG_HAPPY_WORKER } from "@/lib/theme"

export default function Services() {
  return (
    <section id="services-list" className="bg-cream-dark px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-5 font-display text-4xl font-bold text-brand-navy">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-stone">
              I won&apos;t bundle you into a package stuffed with features
              you&apos;ll never touch. Tell me what your business needs,
              I&apos;ll build exactly that — simple, clean, and affordable.
            </p>
            <div className="relative h-[280px] w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src={IMG_HAPPY_WORKER}
                alt="Approachable local professional ready to help small businesses"
                fill
                sizes="(min-width: 768px) 460px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {SERVICES.map((service) => (
              <div
                key={service.name}
                className="flex items-start gap-4 rounded-xl border border-line bg-white px-6 py-5 transition-all hover:shadow-sm"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-brick" />
                <div>
                  <div className="mb-0.5 font-semibold text-ink">
                    {service.name}
                  </div>
                  <div className="text-sm text-muted">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
