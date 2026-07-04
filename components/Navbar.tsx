"use client";

import { ChevronDown, Moon } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { navLinks } from "@/lib/content";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-6">
        <Link href="/" aria-label="Aster Shore home">
          <BrandMark />
        </Link>
        <div className="hidden items-center gap-10 font-serif text-lg text-white/92 md:flex">
          {navLinks.map((link) => (
            <Link className="transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 text-sm text-white/90">
          <button className="grid h-9 w-9 place-items-center transition hover:text-[#cbb8ff]" aria-label="Toggle color mode">
            <Moon className="h-5 w-5 fill-white" />
          </button>
          <span className="inline-flex items-center gap-1">EN <ChevronDown className="h-3 w-3" /></span>
        </div>
      </nav>
    </header>
  );
}
