import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 1000;
}

export async function POST(request: Request) {
  try {
    const { name, email, message, recaptchaToken, phone } =
      await request.json();

    // Validate inputs
    if (!name || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!validateMessage(message)) {
      return NextResponse.json(
        { error: "Message must be between 10 and 1000 characters" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      }
    );

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json({ error: "Invalid reCAPTCHA" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Black Pearl Labs Contact Form <onboarding@resend.dev>",
      to: [process.env.ADMIN_EMAIL as string],
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
