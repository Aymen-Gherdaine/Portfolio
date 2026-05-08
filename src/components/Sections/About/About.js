import profile from "../../../../content/profile";
import AboutClient from "./AboutClient";

export default function About() {
  return <AboutClient aboutText={profile.about_me_paragraph} />;
}
