"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";
import { LIGHT_COLOR, DARK_COLOR } from "@/constants";
import RevealAnimation from "../Animation/RevealAnimation";

const Header = ({ initialTheme }) => {
  // state for handleling theme color
  const [theme, setTheme] = React.useState(initialTheme);

  // function for toggling the theme color
  function handleToggleTheme() {
    // setting a variable that take the oposite theme color
    const newTheme = theme === "light" ? "dark" : "light";

    // set the theme state to the newTheme color
    setTheme(newTheme);

    // set the newTheme color in browser cookie setting
    Cookie.set("color-theme", newTheme, {
      expires: 1000,
    });

    // setting theme colors object depanding on the current theme
    const newThemeColor = newTheme === "light" ? LIGHT_COLOR : DARK_COLOR;

    // set root variable that pointe to the documentElement
    const root = document.documentElement;

    // set the "data-color-theme" attribute in html root elem to the newTheme color
    root.setAttribute("data-color-theme", newTheme);

    // set each newThemeColor key&value to the document style property
    Object.entries(newThemeColor).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }
  return (
    <header className={styles.header}>
      <RevealAnimation delay="0.2">
        <Link href="#hero_section" className={styles.logo_link}>
          <h1 className={styles.logo}>
            A<span className={styles.title_dotte}>.</span>
          </h1>
        </Link>
      </RevealAnimation>

      <div className={styles.link_wrapper}>
        <RevealAnimation delay="0.3">
          <ul className={styles.container_list}>
            <li>
              <Link href="#skills" className={styles.link}>
                Skills
              </Link>
            </li>
          </ul>
        </RevealAnimation>
        <RevealAnimation delay="0.4">
          <ul className={styles.container_list}>
            <li>
              <Link href="#projects_section" className={styles.link}>
                Projects
              </Link>
            </li>
          </ul>
        </RevealAnimation>
        <RevealAnimation delay="0.5">
          <ul className={styles.container_list}>
            <li>
              <Link href="#contact_section" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </RevealAnimation>
      </div>
      <RevealAnimation delay="0.5">
        <button className={styles.theme_icon} onClick={handleToggleTheme}>
          {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
        </button>
      </RevealAnimation>
    </header>
  );
};

export default Header;
