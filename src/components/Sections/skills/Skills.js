"use client";

import { motion } from "framer-motion";
import styles from "./skills.module.css";

const ease = [0.16, 1, 0.3, 1];

const SKILL_GROUPS = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "HTML & CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    label: "Tools & Cloud",
    items: ["Git & GitHub", "Azure", "AWS S3", "Netlify / Vercel"],
  },
  {
    label: "CMS & Platforms",
    items: ["WordPress", "Decap CMS", "Shopify"],
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <motion.div
        className={styles.sectionHeader}
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease }}
      >
        <h2 className={styles.sectionTitle}>
          SKILLS<span className={styles.accent}>.</span>
        </h2>
        <span className={styles.sectionMeta}>4 categories</span>
      </motion.div>

      <div className={styles.skillsGrid}>
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.label}
            className={styles.skillsCategory}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease, delay: gi % 2 === 0 ? 0.05 : 0.13 }}
          >
            <p className={styles.catLabel}>{group.label}</p>
            <div className={styles.skillList}>
              {group.items.map((name) => (
                <div key={name} className={styles.skillItem}>
                  <span className={styles.skillName}>{name}</span>
                  <span className={styles.skillDot} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
