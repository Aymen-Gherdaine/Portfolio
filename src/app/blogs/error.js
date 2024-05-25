"use client";

import Image from "next/image";
import styles from "@/app/blogs/blogs.module.css";
import RevealAnimation from "@/components/Animation/RevealAnimation";
import not_found from "../../../public/not-found.png";

const Error = () => {
  return (
    <RevealAnimation delay="0.8">
      <main className={styles.not_found_wrapper}>
        <Image
          src={not_found}
          alt="image 404 not found if there is an error that occured"
          width={500}
          height={500}
        />
      </main>
    </RevealAnimation>
  );
};

export default Error;
