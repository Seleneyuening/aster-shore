import { BookOpen, CalendarCheck, Moon, RotateCcw } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const items = [
  { title: "Daily Reset", icon: RotateCcw },
  { title: "Boot Plan", icon: CalendarCheck },
  { title: "Learning", icon: BookOpen },
  { title: "Reflection", icon: Moon }
];

export default function TheCurrentPage() {
  return (
    <main>
      <PageHero title="The Current" subtitle="Small systems. Quiet momentum. A life in motion." />
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
        <div className="glass mx-auto mt-8 max-w-7xl p-8">
          <h2 className="font-serif text-4xl">Boot Plan</h2>
          <p className="mt-3 text-shore-mist">Coming soon</p>
        </div>
      </section>
    </main>
  );
}
