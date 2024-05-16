"use client";
import Image from "next/image";
import styles from "./page.module.css";
import RevealAnimation from "../components/Animation/RevealAnimation";
import SocialIcons from "@/components/Social_Icons/SocialIcons";

export default function Home() {
  return (
    <main>
      <section className={styles.home_page_hero}>
        <section className={styles.about}>
          <RevealAnimation>
            <h1 className={styles.title}>
              Hey, I&apos;m Aymen<span className={styles.title_dotte}>.</span>
            </h1>
          </RevealAnimation>
          <RevealAnimation>
            <p className={styles.about_me_paragraph}>
              Full-stack web developer with a foundation in computer science,
              specializing in Network and System Administration. Proficient in
              leveraging my skills to create user-friendly and visually
              appealing websites. Experienced in working with the Shopify
              e-commerce platform.
            </p>
          </RevealAnimation>
          <RevealAnimation delay="0.35">
            <SocialIcons />
          </RevealAnimation>
          <RevealAnimation delay="0.45">
            <a
              href="Aymen-Gherdaine Resume.pdf"
              download="Aymen-Gherdaine Resume.pdf"
            >
              <button className={styles.resume_btn}>My resume</button>
            </a>
          </RevealAnimation>
        </section>
        <section className={styles.profile}>
          <RevealAnimation>
            <Image
              src="/profile.png"
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
    </main>
  );
}
