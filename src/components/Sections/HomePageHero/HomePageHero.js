import Image from "next/image";
import profile from "../../../../content/profile";
import styles from "./Hero.module.css";
import RevealAnimation from "../../Animation/RevealAnimation";
import SocialIcons from "../../Social_Icons/SocialIcons";

export default function HomePageHero() {
  return (
    <section className={styles.home_page_hero} id="hero_section">
      <section className={styles.about}>
        <RevealAnimation delay="0.5">
          <h1 className={styles.title}>
            {profile.about_me_title}
            <span className={styles.title_dotte}>.</span>
          </h1>
        </RevealAnimation>
        <RevealAnimation delay="0.7">
          <p className={styles.about_me_paragraph}>
            {profile.about_me_paragraph}
          </p>
        </RevealAnimation>
        <RevealAnimation delay="0.35">
          <SocialIcons />
        </RevealAnimation>
        <RevealAnimation delay="0.45">
          <a
            href={profile.resume_href}
            download={profile.resume_file_download}
            target="_blank"
          >
            <button className={styles.resume_btn}>My resume</button>
          </a>
        </RevealAnimation>
      </section>
      <section className={styles.profile}>
        <RevealAnimation delay="0.5">
          <Image
            src={profile.image}
            alt="Picture of the author"
            width={450}
            height={450}
            style={{
              borderRadius: "58% 42% 23% 77% / 55% 52% 48% 45%",
            }}
            priority
          />
        </RevealAnimation>
      </section>
    </section>
  );
}
