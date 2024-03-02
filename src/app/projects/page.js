import styles from "./projects.module.css";
import Project from "@/components/Project/Project";
import PageTitle from "@/components/PageTitle/PageTitle";

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <PageTitle title="Projects" />
      <div className={styles.projects_container}>
        <Project />
      </div>
    </section>
  );
};

export default Projects;
