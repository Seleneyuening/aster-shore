import Link from "next/link";
import { worlds } from "@/lib/content";

export function FeatureCards() {
  return (
    <section id="worlds" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.28em] text-[#cbb8ff]">Choose your tide</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {worlds.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} key={item.title} className="tide-card quiet-card group min-h-80 p-8 transition duration-300">
                <Icon className="h-9 w-9 text-[#a996ff]" />
                <div className="mt-24">
                  <h2 className="font-serif text-4xl">{item.title}</h2>
                  <p className="mt-5 text-lg leading-7 text-white/78">{item.intro}</p>
                  <p className="mt-4 leading-7 text-white/55">{item.body}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
