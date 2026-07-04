import type { Metadata } from "next";
import { ArrowRight, BookOpen, CalendarCheck, Moon, RotateCcw, Salad, Vote } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "The Current",
  description: "Small systems. Quiet momentum. A life in motion."
};


const items = [
  { title: "Daily Reset", icon: RotateCcw },
  { title: "Boot Plan", icon: CalendarCheck },
  { title: "Learning", icon: BookOpen },
  { title: "Reflection", icon: Moon }
];

const systems = [
  {
    href: "/vote/",
    title: "身份投票 · Identity Votes",
    body: "每一次行动，都是为你想成为的人投的一票。每日打卡、照片证据、断卡温柔提醒 —— 最小动作也算一票。",
    status: "Live",
    icon: Vote
  },
  {
    href: "/meals",
    title: "轻食日历 · Light Meals",
    body: "每日饮食计划、家中食材库存和轻食菜单推荐。Eat well, live lightly.",
    status: "Live",
    icon: Salad
  }
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
        <div className="mx-auto mt-8 grid max-w-7xl gap-5 md:grid-cols-2">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <Link href={system.href} key={system.title} className="glass block p-8 transition hover:-translate-y-1 hover:bg-white/12">
                <div className="flex items-start justify-between gap-5">
                  <Icon className="h-6 w-6 text-shore-coral" />
                  <span className="border border-white/15 px-3 py-1 text-xs text-white/62">{system.status}</span>
                </div>
                <h2 className="mt-8 font-serif text-4xl">{system.title}</h2>
                <p className="mt-3 max-w-xl text-shore-mist">{system.body}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-sm text-shore-coral">
                  Open <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
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
