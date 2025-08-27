import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

export function getAllProjects(): Project[] {
  return projects.slice().sort((a, b) => a.title.localeCompare(b.title));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
