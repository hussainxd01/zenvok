import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 10_000,
});

// ❌ DO NOT verify on startup in production
// transporter.verify(...) ← remove this

export const sendContactEmail = async ({ name, email, company, message }) => {
  try {
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
            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>🏢 Company:</strong> ${company || "Not provided"}</p>
          </div>

          <div>
            <h3>💬 Message:</h3>
            <p style="background:#fff;padding:15px;border-left:4px solid #2563eb;">
              ${message}
            </p>
          </div>

          <p style="font-size:12px;color:#6b7280;margin-top:20px;">
            Received on ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });
  } catch (error) {
    console.error("❌ Email send failed:", error.message);
    // DO NOT throw
    // DO NOT return
  }
};
