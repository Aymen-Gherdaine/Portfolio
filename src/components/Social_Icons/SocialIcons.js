import styles from "./SocialIcons.module.css";
import Link from "next/link";
import { GitHub, Twitter, Linkedin } from "react-feather";

const SocialIcons = () => {
  return (
    <div className={styles.social_icon_container}>
      <Link
        href="https://github.com/Aymen-Gherdaine"
        className={styles.social_icon}
        target="_blank"
      >
        <GitHub size="1.7rem" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/aymen-gherdaine"
        className={styles.social_icon}
        target="_blank"
      >
        <Linkedin size="1.7rem" />
      </Link>
      <Link
        href="https://github.com/Aymen-Gherdaine"
        className={styles.social_icon}
        target="_blank"
      >
        <Twitter size="1.7rem" />
      </Link>
    </div>
  );
};

export default SocialIcons;
