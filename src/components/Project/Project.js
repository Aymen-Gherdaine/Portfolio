import RevealAnimation from "@/components/Animation/RevealAnimation";
import laghata_project from "../../../public/laghata_project.jpg";
import styles from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
import { GitHub, LogIn } from "react-feather";

const Project = () => {
  return (
    <div className={styles.project_wrapper}>
      <div className={styles.project_image_wrapper}>
        <Image
          src={laghata_project}
          alt="laghata project image"
          width={500}
          height={500}
          className={styles.project_image}
        />
      </div>

      <div className={styles.project_title_wrapper}>
        <h1 className={styles.project_title}>
          <RevealAnimation>
            Laghata<span className={styles.project_title_dotte}>.</span>
          </RevealAnimation>
        </h1>

        <div className={styles.line_wrapper}></div>
        <div className={styles.project_links}>
          <Link
            href="https://github.com/Aymen-Gherdaine/laghata-marketplace"
            className={styles.social_icon}
            target="_blank"
          >
            <RevealAnimation>
              <GitHub size="1.7rem" />
            </RevealAnimation>
          </Link>
          <Link
            href="https://laghata.com"
            className={styles.social_icon}
            target="_blank"
          >
            <RevealAnimation>
              <LogIn size="1.7rem" />
            </RevealAnimation>
          </Link>
        </div>
      </div>

      <div className={styles.project_details_wrapper}>
        <RevealAnimation>
          The Laghata app serves as a marketplace connecting individuals eager
          to rent out their equipment for various activities and adventures.
          Whether you're seeking gear for outdoor pursuits or thrilling
          experiences.
        </RevealAnimation>
      </div>
    </div>
  );
};

export default Project;
