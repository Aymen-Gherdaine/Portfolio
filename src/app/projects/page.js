import styles from "./projects.module.css";
import Project from "@/components/Project/Project";
import PageTitle from "@/components/PageTitle/PageTitle";
import { projects } from "@/db/projects";

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <PageTitle title="Projects" />
      <div className={styles.projects_container}>
        {projects.map((project) => {
          return <Project project_details={project} key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
