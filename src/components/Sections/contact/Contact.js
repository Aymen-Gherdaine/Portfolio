"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./contact.module.css";
import ContactForm from "./Contact_Form/ContactForm";

const ease = [0.16, 1, 0.3, 1];

const revealVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.contactGrid}>
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease }}
        >
          <h2 className={styles.contactHeading}>
            Let&apos;s build<br />
            something<br />
            <span className={styles.accent}>great.</span>
          </h2>

          <Link href="mailto:contact@aymengherdaine.dev" className={styles.contactEmail}>
            contact@aymengherdaine.dev
          </Link>

          <p className={styles.mobileNote}>
            Reach me by email or fill in the form — I usually reply within 24 hours.
          </p>

          <div className={styles.contactSocials}>
            <Link
              href="https://github.com/Aymen-Gherdaine"
              className={styles.socialItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialLine} />
              <span className={styles.socialLabel}>GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aymen-gherdaine"
              className={styles.socialItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialLine} />
              <span className={styles.socialLabel}>LinkedIn</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease, delay: 0.13 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
