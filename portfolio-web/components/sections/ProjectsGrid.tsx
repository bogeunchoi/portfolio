import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function ProjectsGrid() {
  const projects = getFeaturedProjects();
  return (
    <Section title="Featured Projects" subtitle="최근 작업 중 일부입니다.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Section>
  );
}
