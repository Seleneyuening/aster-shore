import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/content";

export function ProjectsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="bg-[linear-gradient(180deg,#091123,#101b3f)] px-5 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.28em] text-[#cbb8ff]">In the distance</p>
        <h2 className="mt-4 font-serif text-5xl md:text-6xl">{compact ? "Selected Projects" : "Projects"}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">Tools, archives, and experiments orbiting the shore.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            const body = (
              <div className="project-card quiet-card h-full p-8 transition hover:-translate-y-1 hover:bg-white/12">
                <Icon className="mb-12 h-7 w-7 text-shore-mist" />
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-serif text-4xl">{project.title}</h3>
                  <span className="border border-white/15 bg-white/8 px-3 py-1 text-xs text-white/62">{project.status}</span>
                </div>
                <p className="mt-4 text-white/68">{project.body}</p>
                <p className="mt-8 inline-flex items-center gap-2 text-sm text-shore-coral">
                  {project.href ? "Visit project" : project.status} {project.href && <ArrowRight className="h-4 w-4" />}
                </p>
              </div>
            );
            return project.href ? <Link href={project.href} key={project.title}>{body}</Link> : <div key={project.title}>{body}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
