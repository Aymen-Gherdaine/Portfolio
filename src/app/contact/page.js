import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.form_title}>Let&apos;s talk</h1>
      <form type="submit" className={styles.form}>
        <div className={styles.name_email_container}>
          <div className={styles.name_wrapper}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className={styles.name}
              placeholder="Name"
            />
          </div>
          <div className={styles.email_wrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={styles.email}
              placeholder="Email"
            />
          </div>
        </div>
        <div className={styles.message_container}>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Message"
            id="message"
            className={styles.message}
          />
        </div>
        <button className={styles.submit_btn}>Let&apos;s talk</button>
      </form>
    </div>
  );
};

export default Contact;
