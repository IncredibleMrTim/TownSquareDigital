import Image from "next/image"
import { ABOUT_STATS } from "@/data/content"

export default function About() {
  return (
    <section id="about" className="bg-brand-navy px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=650&h=480&fit=crop&auto=format"
            alt="Small business owner at their desk"
            fill
            sizes="(min-width: 768px) 500px, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="mb-5 font-display text-4xl font-bold text-white">
            I started Town Square Digital for the little guy
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-navy-mist">
            Over the years I&apos;ve developed websites for start-ups, mid-sized
            companies, and large corporates — budgets ranging from a few
            thousand pounds to hundreds of thousands. But it was always the
            smaller companies that stuck with me.
          </p>
          <p className="mb-8 text-base leading-relaxed text-navy-mist">
            Again and again I&apos;d speak to trades people and small business
            owners who told me the same thing: agencies call with big promises
            that sound amazing, but the price tag is just too high. They&apos;d
            end up squeezed into overblown contracts packed with stuff
            they&apos;d never use. I felt their frustration — so I did something
            about it. Town Square Digital exists to give the little guy a fair
            shot. No big promises, no overpriced packages. Just your website,
            how you want it.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {ABOUT_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 font-display text-3xl font-bold text-brand-brick">
                  {stat.value}
                </div>
                <div className="text-xs tracking-wide text-navy-mist uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
