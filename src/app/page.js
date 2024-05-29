import HomePageHero from "@/components/HomePageHero/HomePageHero";
import Projects from "./projects/page";
import Contact from "./contact/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <HomePageHero />
      <Projects />
      <Contact />
    </main>
  );
}
