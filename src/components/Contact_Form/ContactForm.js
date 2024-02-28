"use client";

import styles from "./contactForm.module.css";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import sendEmail from "@/app/_actions";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // function that handle the user form submit
  const onSubmit = async (data) => {
    // sending the form to our server action fnc(sendEmail)
    const result = await sendEmail(data);

    // toast success
    if (result?.success) {
      toast.success("Your message was sent successfuly");
      reset();
      return;
    }

    //toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.name_email_container}>
        <div className={styles.name_wrapper}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={styles.name}
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className={styles.email_wrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={styles.email}
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>
      <div className={styles.message_container}>
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Message"
          className={styles.message}
          {...register("message", {
            required: "A message is required",
          })}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <button
        disabled={isSubmitting}
        type="submit"
        className={styles.submit_btn}
      >
        {isSubmitting ? "Sending..." : <p>Let&apos;s talk</p>}
      </button>
    </form>
  );
}
