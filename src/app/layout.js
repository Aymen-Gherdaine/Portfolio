import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { cookies } from "next/headers";
import "./globals.css";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { DARK_COLOR, LIGHT_COLOR } from "../constants";
import Providers from "./providers";

export const metadata = {
  title: "Aymen Gherdaine Portfolio",
  description: "Aymen Gherdaine Portfolio",
};

export default function RootLayout({ children }) {
  // get the theme-color from user browser cookies
  const savedTheme = cookies().get("color-theme");
  // set the theme color to user prefrence or to light mode
  const theme = savedTheme?.value || "dark";

  return (
    <html
      lang="en"
      className={inter.className}
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_COLOR : DARK_COLOR}
    >
      <body className={styles.wrapper}>
        <Providers>
          <Header initialTheme={theme} />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
