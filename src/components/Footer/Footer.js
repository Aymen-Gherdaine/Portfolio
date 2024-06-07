import styles from "./Footer.module.css";
import Link from "next/link";
import SocialIcons from "../Social_Icons/SocialIcons";
import RevealAnimation from "../Animation/RevealAnimation";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.link_wrapper}>
        <ul className={styles.container__list}>
          <RevealAnimation delay="0.3">
            <li>
              <Link href="#skills" className={styles.link}>
                Blog
              </Link>
            </li>
          </RevealAnimation>
        </ul>
        <ul className={styles.container__list}>
          <RevealAnimation delay="0.4">
            <li>
              <Link href="#projects_section" className={styles.link}>
                Projects
              </Link>
            </li>
          </RevealAnimation>
        </ul>
        <ul className={styles.container__list}>
          <RevealAnimation delay="0.5">
            <li>
              <Link href="#contact_section" className={styles.link}>
                Contact
              </Link>
            </li>
          </RevealAnimation>
        </ul>
      </div>

      <RevealAnimation delay="0.6">
        <SocialIcons />
      </RevealAnimation>

      <div className={styles.copywrite_container}>
        <RevealAnimation delay="0.7">
          <p className={styles.copywrite_text}>
            © 2024 Aymen Gherdaine. All rights reserved.
          </p>
        </RevealAnimation>
      </div>
    </footer>
  );
};

export default Footer;
