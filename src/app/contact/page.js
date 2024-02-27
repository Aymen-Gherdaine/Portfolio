import styles from "./contact.module.css";
import ContactForm from "../../components/Contact_Form/ContactForm";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.form_title}>Let&apos;s talk</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
