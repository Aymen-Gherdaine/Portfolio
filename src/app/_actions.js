"use server";

import EmailTemplate from "@/components/Email_Template/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(data) {
  console.log(data);

  if (data) {
    const { name, email, message } = data;

    try {
      const result = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["gherdaineaymen1995@gmail.com"],
        subject: "Contact form submission",
        text: `Name: ${name}\n Email:${email}\n Message: ${message}`,
        react: EmailTemplate({ name, email, message }),
      });

      return { success: true, result };
    } catch (error) {
      return { success: false, error };
    }
  }
}

export default sendEmail;
