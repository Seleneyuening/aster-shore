import { JournalPreview } from "@/components/JournalPreview";
import { PageHero } from "@/components/PageHero";

const categories = ["Thoughts", "Beauty", "Growth", "AI", "Travel"];

export default function JournalPage() {
  return (
    <main>
      <PageHero title="Journal" subtitle="Thoughts, notes, and small discoveries along the way." />
      <section className="bg-shore-ink px-5 pt-14">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => (
            <button className="border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/72 transition hover:bg-white/14" key={category}>
              {category}
            </button>
          ))}
        </div>
      </section>
      <JournalPreview all />
    </main>
  );
}
