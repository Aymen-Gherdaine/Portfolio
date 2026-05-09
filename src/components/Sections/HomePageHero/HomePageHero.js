"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";

const ease = [0.16, 1, 0.3, 1];

export default function HomePageHero() {
  return (
    <section className={styles.hero} id="hero_section">
      <div className={styles.glow} aria-hidden="true" />

      <motion.nav
        className={styles.nav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
      >
        <span className={styles.logo}>
          AG<span className={styles.logoDot}>.</span>
        </span>
        <div className={styles.navLinks}>
          <Link href="#skills" className={styles.navLink}>Skills</Link>
          <Link href="#projects" className={styles.navLink}>Work</Link>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#contact" className={styles.navLink}>Contact</Link>
        </div>
        <div className={styles.navStatus}>
          <span className={styles.statusDot} />
          Available for work
        </div>
      </motion.nav>

      <div className={styles.heroMain}>
        <motion.p
          className={styles.heroEyebrow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
        >
          — Full-Stack Developer
        </motion.p>

        <h1 className={styles.heroName}>
          <span className={styles.nameLine}>
            <motion.span
              className={`${styles.nameWord} ${styles.nameAccent}`}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease, delay: 0.45 }}
            >
              AYMEN
            </motion.span>
          </span>
          <span className={styles.nameLine}>
            <motion.span
              className={`${styles.nameWord} ${styles.nameWordLast}`}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease, delay: 0.63 }}
            >
              GHERDAINE
            </motion.span>
          </span>
        </h1>

        <div className={styles.heroBottom}>
          <motion.div
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 18, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease, delay: 0.85 }}
          >
            <p className={styles.taglineStack}>Next.js · React · Node.js</p>
            <p className={styles.taglineDesc}>
              I build complete web solutions — from architecture and backend logic
              to UI and deployment. Detail-oriented, client-first.
            </p>
          </motion.div>

          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 1 }}
          >
            <Link href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
              View my work <span className={styles.btnArrow}>→</span>
            </Link>
            <Link href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
              Let&apos;s talk <span className={styles.btnArrow}>→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className={styles.heroBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 1.15 }}
      >
        <span className={styles.barYear}>© 2026 Aymen Gherdaine</span>
        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          Scroll
        </div>
      </motion.div>
    </section>
  );
}
