"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { navLinks } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-[92rem] items-center justify-between px-6 py-6">
        <Link href="/" aria-label="Aster Shore home" onClick={() => setOpen(false)}>
          <BrandMark />
        </Link>
        <div className="hidden items-center gap-10 font-serif text-lg text-white/92 md:flex">
          {navLinks.map((link) => (
            <Link className="transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="grid h-11 w-11 place-items-center text-white/90 transition hover:text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#091123]/94 px-6 pb-8 pt-4 backdrop-blur-xl md:hidden">
          <div className="grid gap-1 font-serif text-xl text-white/92">
            {navLinks.map((link) => (
              <Link
                className="border-b border-white/8 py-4 transition hover:text-white"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link className="py-4 text-white/72 transition hover:text-white" href="/vote/" onClick={() => setOpen(false)}>
              身份投票
            </Link>
            <Link className="py-4 text-white/72 transition hover:text-white" href="/meals" onClick={() => setOpen(false)}>
              轻食日历
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
