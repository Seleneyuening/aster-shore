import { FeatureCards } from "@/components/FeatureCards";
import { Hero } from "@/components/Hero";
import { HomeMotion } from "@/components/HomeMotion";
import { JournalPreview } from "@/components/JournalPreview";
import { Manifesto } from "@/components/Manifesto";
import { ProjectsGrid } from "@/components/ProjectsGrid";

export default function HomePage() {
  return (
    <main>
      <div className="home-cover">
        <HomeMotion />
        <Hero />
        <FeatureCards />
        <JournalPreview />
      </div>
      <ProjectsGrid compact />
      <Manifesto />
    </main>
  );
}
