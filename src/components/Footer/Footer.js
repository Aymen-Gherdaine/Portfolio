import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© 2026 Aymen Gherdaine</span>
      <div className={styles.links}>
        <Link
          href="https://github.com/Aymen-Gherdaine"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/aymen-gherdaine"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        <Link href="mailto:contact@aymengherdaine.dev" className={styles.link}>
          Email
        </Link>
      </div>
    </footer>
  );
}
