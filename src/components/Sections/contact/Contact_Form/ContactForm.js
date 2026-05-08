"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import sendEmail from "@/app/_actions";
import styles from "./contactForm.module.css";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [nameVal, emailVal, msgVal] = watch(["name", "email", "message"]);

  const onSubmit = async (data) => {
    const result = await sendEmail(data);
    if (result?.success) {
      toast.success("Your message was sent successfully");
      reset();
      return;
    }
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={`${styles.fieldInner} ${nameVal ? styles.hasValue : ""}`}>
        <label className={styles.fieldLabel} htmlFor="name">Name</label>
        <input
          className={styles.fieldInput}
          type="text"
          id="name"
          autoComplete="off"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={`${styles.fieldInner} ${emailVal ? styles.hasValue : ""}`}>
        <label className={styles.fieldLabel} htmlFor="email">Email</label>
        <input
          className={styles.fieldInput}
          type="email"
          id="email"
          autoComplete="off"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={`${styles.fieldInner} ${msgVal ? styles.hasValue : ""}`}>
        <label className={styles.fieldLabel} htmlFor="message">Message</label>
        <textarea
          className={styles.fieldTextarea}
          id="message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
      </div>

      <div className={styles.formFooter}>
        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          <span>{isSubmitting ? "Sending..." : "Send message"}</span>
          {!isSubmitting && <span className={styles.submitArrow}>→</span>}
        </button>
        <span className={styles.formNote}>Usually within 24h</span>
      </div>
    </form>
  );
}
