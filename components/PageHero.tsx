export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="shore-bg relative overflow-hidden px-5 pb-20 pt-36">
      <div className="stars absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <h1 className="font-serif text-6xl md:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{subtitle}</p>
      </div>
    </section>
  );
}
