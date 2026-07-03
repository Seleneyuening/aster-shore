import { Sprout } from "lucide-react";

export function BrandMark() {
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
