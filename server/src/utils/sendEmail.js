import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection failed:", error.message);
  } else {
    console.log("Email service ready");
  }
});

export const sendContactEmail = async ({ name, email, company, message }) => {
  await transporter.sendMail({
    from: `"Portfolio Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `🎯 New Lead: ${name}${company ? ` from ${company}` : ""}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          🎯 New Lead from Your Portfolio
        </h2>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>👤 Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>🏢 Company:</strong> ${
            company || "Not provided"
          }</p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #374151;">💬 Message:</h3>
          <p style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; line-height: 1.6;">
            ${message}
          </p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Received on ${new Date().toLocaleString()}</p>
          <p>Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    `,
  });
};
