import { project as raytracer } from "./raytracer";
import { project as grommetProject } from "./grommet-project";
import { project as project3 } from "./project-3";
import { project as hpeAccessibility } from "./hpe-accessibility";

export const projects = [raytracer, grommetProject, project3, hpeAccessibility];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);
