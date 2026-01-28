import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "sales@mpsuae.com",
    pass: process.env.SMTP_PASSWORD,
  },
});

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: '"MPS Contact Form" <sales@mpsuae.com>',
      to: "sales@mpsuae.com",
      replyTo: data.email,
      subject: `New Contact: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This message was sent from the MPS website contact form.</p>
      `,
    });
    console.log("Contact email sent successfully to sales@mpsuae.com");
    return true;
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return false;
  }
}
