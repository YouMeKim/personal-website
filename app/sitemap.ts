import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
export const dynamic = "force-static";
const baseUrl = "https://example.com";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/about", "/projects", "/resume", "/contact"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() })).concat(getProjects().map((project) => ({ url: `${baseUrl}/projects/${project.slug}`, lastModified: new Date() }))); }
