import RevealAnimation from "@/components/Animation/RevealAnimation";
import styles from "./pageTitle.module.css";

const PageTitle = ({ title }) => {
  return (
    <div className={styles.title_wrapper}>
      <h1 className={styles.title}>
        <RevealAnimation>
          {title}
          <span className={styles.title_dotte}>.</span>
        </RevealAnimation>
      </h1>

      <div className={styles.line_wrapper}></div>
    </div>
  );
};

export default PageTitle;
