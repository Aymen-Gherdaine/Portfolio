"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./projects.module.css";

const ease = [0.16, 1, 0.3, 1];

const revealVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function ProjectsClient({ projects }) {
  return (
    <section className={styles.section} id="projects">
      <motion.div
        className={styles.sectionHeader}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease }}
      >
        <h2 className={styles.sectionTitle}>
          WORK<span className={styles.accent}>.</span>
        </h2>
        <span className={styles.sectionMeta}>{projects.length} projects</span>
      </motion.div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          const tags = project.techstack.split(" · ").filter(Boolean);
          const num = String(index + 1).padStart(2, "0");

          return (
            <motion.div
              key={project.id}
              className={styles.projectItem}
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, ease, delay: 0.05 }}
            >
              <span className={styles.projectNum}>{num}</span>

              <div className={styles.projectBody}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <div className={styles.projectTags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>

              <div className={styles.projectLinks}>
                {project.github && (
                  <Link
                    href={project.github}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </Link>
                )}
                {project.website && (
                  <Link
                    href={project.website}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ↗
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
