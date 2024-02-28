"use server";

import { EmailTemplate } from "@/Emails/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Send form content to my email using resend
async function sendEmail(data) {
  if (data) {
    const { name, email, message } = data;

    try {
      const result = await resend.emails.send({
        from: "Aymen Gherdaine Coontact Form <onboarding@resend.dev>",
        to: ["gherdaineaymen1995@gmail.com"],
        subject: "Message from portfolio contact page",
        reply_to: email,
        react: EmailTemplate({ name, email, message }),
      });

      return { success: true, result };
    } catch (error) {
      return { success: false, error };
    }
  }
}

export default sendEmail;
