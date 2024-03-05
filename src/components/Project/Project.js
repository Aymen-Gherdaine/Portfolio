import RevealAnimation from "@/components/Animation/RevealAnimation";
import styles from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
import { GitHub, LogIn } from "react-feather";

const Project = ({ project_details }) => {
  const { name, image, description, techstack, github, website } =
    project_details;

  return (
    <div className={styles.project_wrapper}>
      <RevealAnimation>
        <div className={styles.project_image_wrapper}>
          <Image
            src={image}
            alt="laghata project image"
            width={500}
            height={500}
            className={styles.project_image}
          />
        </div>
      </RevealAnimation>

      <div className={styles.project_title_wrapper}>
        <h1 className={styles.project_title}>
          <RevealAnimation>
            {name}
            <span className={styles.project_title_dotte}>.</span>
          </RevealAnimation>
        </h1>

        <div className={styles.line_wrapper}></div>
        <div className={styles.project_links}>
          <Link href={github} className={styles.social_icon} target="_blank">
            <RevealAnimation>
              <GitHub size="1.7rem" />
            </RevealAnimation>
          </Link>
          <Link href={website} className={styles.social_icon} target="_blank">
            <RevealAnimation>
              <LogIn size="1.7rem" />
            </RevealAnimation>
          </Link>
        </div>
      </div>

      <div className={styles.project_details_wrapper}>
        <RevealAnimation delay="0.4">
          <p className={styles.project_tech_wrapper}>{techstack}</p>
        </RevealAnimation>

        <RevealAnimation delay="0.5">{description}</RevealAnimation>
      </div>
    </div>
  );
};

export default Project;
