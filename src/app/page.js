import HomePageHero from "@/components/HomePageHero/HomePageHero";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <HomePageHero />
      <Projects />
      <Contact />
    </>
  );
}
