import { FeatureCards } from "@/components/FeatureCards";
import { Hero } from "@/components/Hero";
import { JournalPreview } from "@/components/JournalPreview";
import { Manifesto } from "@/components/Manifesto";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function HomePage() {
  return (
    <main>
      <div className="home-cover">
        <Hero />
        <FeatureCards />
        <JournalPreview />
      </div>
      <ProjectsGrid compact />
      <Manifesto />
    </main>
  );
}
