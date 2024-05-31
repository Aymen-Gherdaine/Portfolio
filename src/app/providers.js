"use client";

import { Toaster } from "sonner";
import styles from "./page.module.css";

export default function Providers({ children }) {
  return (
    <div className={styles.wrapper}>
      {children}
      <Toaster position="top-right" richColors expand closeButton />
    </div>
  );
}
