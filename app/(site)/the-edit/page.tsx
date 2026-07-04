import type { Metadata } from "next";
import { ArrowRight, Flower2, Gem, Shirt, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "The Edit",
  description: "Discover beauty. Build a life that feels like your own."
};


const items = [
  { title: "Beauty", icon: Gem },
  { title: "Skincare", icon: Flower2 },
  { title: "Style", icon: Shirt },
  { title: "Rituals", icon: Sparkles }
];

export default function TheEditPage() {
  return (
    <main>
      <PageHero title="The Edit" subtitle="Discover beauty. Build a life that feels like your own." />
      <section className="bg-shore-ink px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div className="glass p-7" key={item.title}>
                <Icon className="mb-10 h-6 w-6 text-shore-coral" />
                <h2 className="font-serif text-3xl">{item.title}</h2>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-8 max-w-7xl">
          <Link href="https://beauty.snowqin.com" className="glass inline-flex items-center gap-3 px-6 py-4 text-shore-mist transition hover:-translate-y-1">
            Explore Beauty Atlas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
