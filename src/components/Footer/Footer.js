import styles from "./Footer.module.css";
import Link from "next/link";
import SocialIcons from "../Social_Icons/SocialIcons";

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

      <SocialIcons />
      <div className={styles.copywrite_container}>
        <p className={styles.copywrite_text}>
          © 2024 Aymen Gherdaine. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
