import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "轻食日历",
  description: "每日饮食计划、家中食材库存和轻食菜单推荐。"
};

const mealLinks = [
  { href: "/meals", label: "首页" },
  { href: "/meals#week-plan", label: "一周菜单" },
  { href: "/meals/ingredients", label: "食材库" },
  { href: "/meals#shopping", label: "购物清单" },
  { href: "/meals#history", label: "我的记录" }
];

function MealBrand() {
  return (
    <span className="inline-flex items-center gap-3">
      <Sprout className="h-10 w-10 text-[#9aa886]" />
      <span>
        <span className="block font-serif text-3xl leading-none tracking-[.08em] text-[#20251f]">轻食日历</span>
        <span className="mt-1 block text-xs tracking-[.12em] text-[#7c806f]">- Eat well, live lightly</span>
      </span>
    </span>
  );
}

export default function MealsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fbfaf6] text-[#2f332c] [color-scheme:light]">
      <header className="sticky top-0 z-50 border-b border-[#ece6dc] bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto grid max-w-[88rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-5">
          <Link href="/meals" aria-label="轻食日历首页">
            <MealBrand />
          </Link>
          <div className="hidden items-center gap-10 text-[15px] font-semibold text-[#2f332c] md:flex">
            {mealLinks.map((link) => (
              <Link className="border-b-2 border-transparent py-2 transition hover:border-[#6f835e] hover:text-[#566c45]" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-[#6f7668] transition hover:text-[#45513e]">
            <ArrowLeft className="h-4 w-4" /> Aster Shore
          </Link>
        </nav>
      </header>
      {children}
      <footer className="border-t border-[#e9dfcf] bg-[#fbf8ef] px-5 py-10 text-[#6f7668]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm">
          <p>轻食日历 · TODAY&apos;S TABLE · WEEK PLAN · PANTRY</p>
          <p className="text-[#9b9483]">An Aster Shore project · Local-first</p>
        </div>
      </footer>
    </div>
  );
}
