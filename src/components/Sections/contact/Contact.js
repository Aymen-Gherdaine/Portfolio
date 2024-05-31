import styles from "./contact.module.css";
import ContactForm from "./Contact_Form/ContactForm";
import RevealAnimation from "@/components/Animation/RevealAnimation";
import PageTitle from "@/components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <section className={styles.wrapper} id="contact_section">
      <PageTitle title="Contact" />
      <RevealAnimation delay="0.3">
        <h1 className={styles.form_title}>Let&apos;s talk</h1>
      </RevealAnimation>

      <ContactForm />
    </section>
  );
};

export default Contact;
