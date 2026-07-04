import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Experiments, tools, and worlds in progress."
};


export default function ProjectsPage() {
  return (
    <main>
      <PageHero title="Projects" subtitle="Experiments, tools, and worlds in progress." />
      <ProjectsGrid />
      <section className="bg-shore-ink px-5 pb-24">
        <div className="glass mx-auto max-w-7xl p-8">
          <h2 className="font-serif text-4xl">Future Projects</h2>
          <p className="mt-3 max-w-2xl text-white/64">New tools, essays, visual worlds, and quiet systems will gather here as Aster Shore grows.</p>
        </div>
      </section>
    </main>
  );
}
