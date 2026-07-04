import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-shore-ink px-5 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <BrandMark />
          <p className="mt-4 text-white/58">A quiet future for beautiful living.</p>
          <p className="mt-6 text-white/58">hello@astershore.com</p>
        </div>
        <div className="grid gap-3 text-sm text-white/64 md:grid-cols-2">
          {[...navLinks, { href: "/contact", label: "Contact" }].map((link) => (
            <Link className="hover:text-white" href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-4 text-sm text-white/42">
        <p>© 2026 Aster Shore. All rights reserved.</p>
        <p>Built with quiet intention.</p>
      </div>
    </footer>
  );
}
