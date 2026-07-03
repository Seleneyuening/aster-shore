import { BookOpen, Compass, Flower2, Gem, Moon, Shell, Sparkles, Telescope, Waves } from "lucide-react";

export const navLinks = [
  { href: "/journal", label: "Journal" },
  { href: "/the-edit", label: "The Edit" },
  { href: "/the-current", label: "The Current" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
];

export const worlds = [
  { href: "/the-edit", title: "The Edit", intro: "Beauty, taste, and a life with texture.", body: "审美、仪式、风格和生活质感。", icon: Flower2 },
  { href: "/the-current", title: "The Current", intro: "Small systems for a life in motion.", body: "计划、习惯、复盘和安静成长。", icon: Waves },
  { href: "/projects", title: "The Observatory", intro: "Ideas, AI, and worlds in progress.", body: "创作实验、未来项目和未完成的星图。", icon: Telescope }
];

export const heroCards = [
  { href: "/the-edit", title: "The Edit", body: "Beauty, taste, and a life with texture.", icon: Gem },
  { href: "/the-current", title: "The Current", body: "Small systems for a life in motion.", icon: Moon },
  { href: "/projects", title: "The Observatory", body: "Ideas, AI, and worlds in progress.", icon: Telescope }
];

export const posts = [
  { category: "Thoughts", title: "The morning I stopped chasing speed", excerpt: "真正的自由，不是逃离什么，而是选择什么。", date: "May 20, 2026", visual: "visual-coast" },
  { category: "The Edit", title: "A small ritual for feeling like myself again", excerpt: "简单、温和、有效，是我一直坚持的原则。", date: "May 18, 2026", visual: "visual-beauty" },
  { category: "AI Creation", title: "Building a private universe with AI", excerpt: "工具不是终点，创造属于自己的世界才是终点。", date: "May 15, 2026", visual: "visual-stars" },
  { category: "Growth", title: "让每天更接近自己", excerpt: "温柔的系统，比短暂的热情更可靠。", date: "May 12, 2026", visual: "visual-coast" },
  { category: "Beauty", title: "香气、镜子与早晨", excerpt: "仪式感不是复杂，是认真对待自己的开始。", date: "May 08, 2026", visual: "visual-beauty" },
  { category: "Travel", title: "海岸线上的片刻", excerpt: "有些答案，会在安静的路上慢慢出现。", date: "May 02, 2026", visual: "visual-stars" }
];

export const projects = [
  { title: "SignalScope", body: "AI trends, creator intelligence, and signal discovery.", status: "In development", icon: Sparkles },
  { title: "Beauty Atlas", body: "A curated beauty and skincare system.", href: "https://beauty.snowqin.com", status: "Live", icon: Flower2 },
  { title: "Boot Plan", body: "A daily reset and personal operating system.", status: "Coming soon", icon: BookOpen },
  { title: "Poetry Sea", body: "A visual universe of Chinese poetry.", href: "https://shihai.snowqin.com", status: "Live", icon: Shell }
];
