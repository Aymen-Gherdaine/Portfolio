"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const ease = [0.16, 1, 0.3, 1];

const TIMELINE = [
  {
    year: "2019",
    title: "Master's — Networks & Systems",
    desc: "Graduated with a Master's in Network & Systems Administration. Built a strong foundation in infrastructure, security, and architecture thinking.",
  },
  {
    year: "2020",
    title: "Contact with web",
    desc: "Started building Shopify stores — customizing themes, then Liquid, then wanting more control. The beginning of everything.",
  },
  {
    year: "2022",
    title: "Concordia Bootcamp — Montréal",
    desc: "Full-stack web development in Montreal. React, Node, MongoDB, REST APIs. Shipped Laghata as the final project.",
  },
  {
    year: "2023",
    title: "Freelance clients",
    desc: "L'Hirondelle nonprofit redesign, BTH Expert in Algeria. Real clients, real constraints, real deliverables.",
  },
  {
    year: "Now",
    title: "Freelance + open to opportunities",
    desc: "Building client projects while looking for the right team to grow with long-term.",
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function AboutClient({ aboutText }) {
  return (
    <section className={styles.section} id="about">
      <div className={styles.aboutGrid}>
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease }}
        >
          <h2 className={styles.aboutTitle}>
            Building things<br />
            that actually<br />
            <span className={styles.accent}>work.</span>
          </h2>
          <p className={styles.aboutText}>{aboutText}</p>
        </motion.div>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease, delay: 0.13 }}
        >
          <div className={styles.timeline}>
            {TIMELINE.map((item) => (
              <div key={item.year} className={styles.timelineItem}>
                <span className={styles.tYear}>{item.year}</span>
                <div>
                  <p className={styles.tTitle}>{item.title}</p>
                  <p className={styles.tSub}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
