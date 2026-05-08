import { Unbounded, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Providers from "./providers";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Aymen Gherdaine",
  description: "Full-Stack Developer — Next.js, React, Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${plusJakarta.variable}`}>
      <body>
        <Providers>
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
