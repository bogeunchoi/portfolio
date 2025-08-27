import { projects } from "@/data/projects";

export function getAllProjects() {
  return projects.slice().sort((a, b) => a.title.localeCompare(b.title));
}
