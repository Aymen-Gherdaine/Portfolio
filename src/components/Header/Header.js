import Link from "next/link";
import styles from "./Header.module.css";
import { Sun, Moon } from "react-feather";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo_link}>
        <h1 className={styles.logo}>AG</h1>
      </Link>

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
      <button className={styles.theme_icon}>
        <Sun size="1.5rem" />
      </button>
    </header>
  );
};

export default Header;
