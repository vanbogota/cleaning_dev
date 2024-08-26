import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CustomFormData } from "@/components/order-form/types";

const email = process.env.EMAIL_USER;
const password = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

export async function POST(request: Request) {
  
  try {
    const formData: CustomFormData = await request.json();

      const info = await transporter.sendMail({
        from: `"Notos Service" <${email}>`,
        to: "vanbogota@gmail.com",
        subject: "New customer",
        text: "New Customer:",
        html: `<p><b>Name:</b> ${formData.name} </p>
              <p><b>House address:</b> ${formData.address}</p>
              <p><b>Desirable date:</b> ${formData.date}</p>
              <p><b>Type of cleaning:</b> ${formData.option}</p>
              <p><b>Notes:</b> ${formData.note}</p>
              <p><b>Contact details:</b> ${formData.email}, ${formData.phone}</p>`
      });

      console.log("Message sent: %s", info.messageId);
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ success: false, error: 'Failed to send email' }, {status: 500});
    }  
}
