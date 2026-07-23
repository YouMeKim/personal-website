import { ProjectCard } from "@/components/project-card";
import { getProjects } from "@/lib/projects";
export const metadata = { title: "Projects" };
export default function Projects() { const projects = getProjects(); return <section><p className="font-medium text-[var(--accent)]">Selected work</p><h1 className="mt-3 text-5xl font-bold">Projects with an engineering story.</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">A selection of work that demonstrates product judgment, systems thinking, and ownership.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div></section>; }
