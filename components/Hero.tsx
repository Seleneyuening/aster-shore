import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { heroCards } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-5 pt-28">
      <div className="stars absolute inset-0 -z-10 opacity-25" />
      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 pb-20 md:grid-cols-[1.08fr_.92fr]">
        <div className="max-w-4xl">
          <p className="fade-up mb-5 font-serif text-2xl text-[#cbb8ff] md:text-3xl">Aster Shore</p>
          <h1 className="fade-up max-w-4xl font-serif text-5xl leading-[.96] text-white drop-shadow-[0_12px_50px_rgba(0,0,0,.42)] [animation-delay:90ms] md:text-7xl lg:text-8xl">
            A quiet future for beautiful living.
          </h1>
          <p className="fade-up mt-7 max-w-2xl text-xl leading-9 text-white/80 [animation-delay:180ms]">
            A living archive of beauty, systems,
            <br />
            and creative worlds in progress.
          </p>
          <p className="fade-up mt-6 max-w-xl text-lg leading-9 text-white/72 [animation-delay:260ms]">
            在星光与海岸之间，
            <br />
            记录审美、成长、创造与未来。
          </p>
          <a href="#worlds" className="fade-up group mt-9 inline-flex items-center gap-8 rounded-full border border-white/20 bg-gradient-to-r from-[#8d7bf6]/90 to-[#e78ac8]/90 px-7 py-4 font-serif text-lg text-white shadow-glow transition hover:-translate-y-1 [animation-delay:340ms]">
            Enter the shore <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>
        <div className="grid gap-5 self-end pb-6 md:self-center md:pb-0">
          {heroCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link className="hero-glass fade-up group flex min-h-28 items-center justify-between gap-6 px-7 py-6 transition duration-300 hover:-translate-y-1 hover:bg-white/18" href={card.href} key={card.title} style={{ animationDelay: `${450 + index * 110}ms` }}>
                <Icon className="h-8 w-8 shrink-0 text-[#c8b4ff]" />
                <span className="min-w-0 flex-1">
                  <strong className="font-serif text-3xl font-normal">{card.title}</strong>
                  <span className="mt-2 block text-white/72">{card.body}</span>
                </span>
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
