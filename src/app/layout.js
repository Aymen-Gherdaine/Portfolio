import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { DARK_COLOR, LIGHT_COLOR } from "../constants";

export const metadata = {
  title: "Aymen Gherdaine Portfolio",
  description: "Aymen Gherdaine Portfolio",
};

export default function RootLayout({ children }) {
  const theme = "dark";
  return (
    <html
      lang="en"
      className={inter.className}
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_COLOR : DARK_COLOR}
    >
      <body className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
