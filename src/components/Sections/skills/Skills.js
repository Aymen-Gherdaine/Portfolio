import Link from "next/link";
import Image from "next/image";
import skills from "../../../../content/skills";
import PageTitle from "@/components/PageTitle/PageTitle";
import styles from "@/components/Sections/skills/skills.module.css";
import RevealAnimation from "@/components/Animation/RevealAnimation";

const Skills = () => {
  return (
    <section className={styles.wrapper} id="skills">
      <PageTitle title="Skills" />
      <div className={styles.skills_container}>
        {skills?.map((skill) => {
          return (
            <RevealAnimation delay={skill.animation_delay} key={skill.tech}>
              <div className={styles.skill_wrapper}>
                <ul className={styles.list_style}>
                  <li>
                    <Link href={skill.documentation} target="_blank">
                      <Image
                        src={skill.icon}
                        alt={skill.tech}
                        width={150}
                        height={150}
                        className={styles.tech_icon}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </RevealAnimation>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
