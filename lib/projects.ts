import { z } from "zod";
export const projectSchema = z.object({ title: z.string(), slug: z.string(), summary: z.string(), published: z.boolean(), featured: z.boolean(), categories: z.array(z.string()), technologies: z.array(z.string()), role: z.string(), demoUrl: z.string().url().optional(), repositoryUrl: z.string().url().optional() });
export type Project = z.infer<typeof projectSchema>;
const projects: Project[] = [
  { title: "Signals", slug: "signals", summary: "An observability workspace that turns production events into actionable decisions.", published: true, featured: true, categories: ["Backend", "Cloud"], technologies: ["TypeScript", "PostgreSQL", "OpenTelemetry"], role: "Technical lead", repositoryUrl: "https://github.com/YouMeKim/signals" },
  { title: "Studio", slug: "studio", summary: "A collaborative interface for teams to make complex configuration approachable.", published: true, featured: true, categories: ["Frontend"], technologies: ["React", "TypeScript", "Accessibility"], role: "Staff engineer", demoUrl: "https://example.com" },
  { title: "Relay", slug: "relay", summary: "A reliable job orchestration service for event-driven workflows.", published: true, featured: true, categories: ["Backend", "Cloud"], technologies: ["Node.js", "Redis", "AWS"], role: "System designer", repositoryUrl: "https://github.com/YouMeKim/relay" }
];
export function getProjects() { return projects.filter((project) => project.published); }
export function getFeaturedProjects() { return getProjects().filter((project) => project.featured); }
export function getProject(slug: string) { return getProjects().find((project) => project.slug === slug); }
