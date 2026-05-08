import { projects } from "../../../../content/projects";
import ProjectsClient from "./ProjectsClient";

export default function Projects() {
  const data = projects.map(({ id, name, description, techstack, github, website }) => ({
    id,
    name,
    description,
    techstack,
    github,
    website,
  }));

  return <ProjectsClient projects={data} />;
}
