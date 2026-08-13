import Image from "next/image"
import { WORK_EXAMPLES } from "@/data/content"

export default function WorkExamples() {
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-brand-navy">
            Our work
          </h1>
          <p className="mx-auto max-w-xl text-lg text-stone">
            A few of the sites I&apos;ve built for tradespeople and small
            businesses.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {WORK_EXAMPLES.map((project) => (
            <a
              key={project.name}
              href={project.url}
              aria-disabled={!project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl border border-line bg-white transition-all hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={`Screenshot of the ${project.name} website`}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8">
                <h2 className="mb-2 font-display text-xl font-semibold text-brand-navy">
                  {project.name}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-stone">
                  {project.description}
                </p>
                {project.url ? (
                  <span className="text-sm font-medium text-brand-brick">
                    Visit site →
                  </span>
                ) : (
                  <span className="text-sm font-medium text-brand-brick">
                    Coming soon!
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
