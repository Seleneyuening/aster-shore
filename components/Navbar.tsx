import Link from "next/link";
import { Bell, ChevronDown } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { navLinks } from "@/lib/content";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ece6dc] bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto grid max-w-[88rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-5">
        <Link href="/" aria-label="轻食日历首页">
          <BrandMark />
        </Link>
        <div className="hidden items-center gap-10 text-[15px] font-semibold text-[#2f332c] md:flex">
          {navLinks.map((link) => (
            <Link className="border-b-2 border-transparent py-2 transition hover:border-[#6f835e] hover:text-[#566c45]" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto hidden items-center gap-5 md:flex">
          <Bell className="h-5 w-5 text-[#555a50]" />
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e7e5d6] text-[#6f835e]">枝</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#2f332c]">Selene <ChevronDown className="h-4 w-4" /></span>
        </div>
      </nav>
    </header>
  );
}
