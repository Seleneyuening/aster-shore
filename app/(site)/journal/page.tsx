import type { Metadata } from "next";
import { JournalList } from "@/components/JournalList";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Journal",
  description: "Thoughts, notes, and small discoveries along the way."
};

export default function JournalPage() {
  return (
    <main>
      <PageHero title="Journal" subtitle="Thoughts, notes, and small discoveries along the way." />
      <JournalList />
    </main>
  );
}
