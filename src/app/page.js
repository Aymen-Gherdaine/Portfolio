import HomePageHero from "@/components/Sections/HomePageHero/HomePageHero";
import Projects from "@/components/Sections/Projects/Projects";
import Contact from "@/components/Sections/contact/Contact";
import Skills from "@/components/Sections/skills/Skills";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
