import HomePageHero from "@/components/Sections/HomePageHero/HomePageHero";
import Skills from "@/components/Sections/skills/Skills";
import Projects from "@/components/Sections/Projects/Projects";
import About from "@/components/Sections/About/About";
import Contact from "@/components/Sections/contact/Contact";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
