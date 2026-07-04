import { PageHero } from "@/components/PageHero";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Aster Shore" subtitle="A growing collection of ideas, systems, tools, and stories." />
      <section className="bg-shore-ink px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-4xl leading-tight text-white md:text-5xl">
            Aster Shore is not a company in the traditional sense.
          </p>
          <p className="mt-8 text-lg leading-8 text-white/72">
            It is a growing collection of ideas, systems, tools, and stories for building a more beautiful and intentional life.
          </p>
          <p className="mt-8 text-lg leading-8 text-white/68">
            Aster Shore 不是一个传统意义上的公司。它是一个持续生长的世界，收集关于审美、系统、创造与未来生活的想法、工具和故事。
          </p>
          <p className="mt-10 text-sm uppercase tracking-[0.22em] text-shore-mist">Founder / Independent Creator</p>
        </div>
      </section>
    </main>
  );
}
