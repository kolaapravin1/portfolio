import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const TO_EMAIL = process.env.CONTACT_EMAIL || "kolaapravin.work@gmail.com";

    let transporter;

    // If SMTP is not configured, fall back to an ethereal test account for local/dev testing
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ success: false, message: "SMTP server not configured on server" }, { status: 500 });
      }

      // development fallback: ethereal test account
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    } else {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    }

    const html = `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project type:</strong> ${projectType}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `;

    const info = await transporter.sendMail({
      from: `${name} <${email}>`,
      to: TO_EMAIL,
      subject: `[Portfolio la irundhu someone mailed!] ${subject || "New message"}`,
      text: message,
      html,
    });

    const result = { success: true, id: (info && info.messageId) || null } as any;

    // if ethereal test account was used, provide the preview URL to help debugging in dev
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) result.preview = previewUrl;

    return NextResponse.json(result);
  } catch (err) {
    console.error("/api/contact error:", err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
