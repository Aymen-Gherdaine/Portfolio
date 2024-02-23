import styles from "./Footer.module.css";
import Link from "next/link";
import { GitHub, Twitter, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.link_wrapper}>
        <ul className={styles.container__list}>
          <li>
            <Link href="/blogs" className={styles.link}>
              Blog
            </Link>
          </li>
        </ul>
        <ul className={styles.container__list}>
          <li>
            <Link href="/projects" className={styles.link}>
              Projects
            </Link>
          </li>
        </ul>
        <ul className={styles.container__list}>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.social_icon_container}>
        <Link
          href="https://github.com/Aymen-Gherdaine"
          className={styles.social_icon}
          target="_blank"
        >
          <GitHub size="1.5rem" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aymen-gherdaine"
          className={styles.social_icon}
          target="_blank"
        >
          <Linkedin size="1.5rem" />
        </Link>
        <Link
          href="https://github.com/Aymen-Gherdaine"
          className={styles.social_icon}
          target="_blank"
        >
          <Twitter size="1.5rem" />
        </Link>
      </div>
      <div className={styles.copywrite_container}>
        <p className={styles.copywrite_text}>
          © 2024 Aymen Gherdaine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
