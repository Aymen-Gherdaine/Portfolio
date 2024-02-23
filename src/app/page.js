"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TextAnimation from "../components/Animation/TextAnimation";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <TextAnimation text="Hey, I'm Aymen" className={styles.title} />

        <p className={styles.about_me_paragraph}>
          Full-stack web developer with a foundation in computer science,
          specializing in Network and System Administration. Proficient in
          leveraging my skills to create user-friendly and visually appealing
          websites. Experienced in working with the Shopify e-commerce platform.
        </p>
      </section>
      <section className={styles.profile}>
        <Image
          src="/profile.png"
          alt="Picture of the author"
          width={450}
          height={450}
          style={{
            borderRadius: "50%",
          }}
        />
      </section>
    </main>
  );
}
