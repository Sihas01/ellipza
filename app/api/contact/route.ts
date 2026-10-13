import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const services = new Set([
  "Web Development",
  "Mobile App",
  "AI Solutions",
  "Digital Marketing",
  "Other",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Silently accept bot submissions caught by the honeypot.
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true });
    }

    const firstName = clean(body.firstName, 80);
    const lastName = clean(body.lastName, 80);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 30);
    const service = clean(body.service, 80);
    const message = clean(body.message, 5000);

    if (!firstName || !lastName || !email || !message || !services.has(service)) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Missing Resend contact form environment variables.");
      return NextResponse.json(
        { success: false, message: "Email is not configured yet. Please contact us directly." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New ${service} enquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact email error:", error);
      return NextResponse.json(
        { success: false, message: "We couldn't send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "We couldn't send your message. Please try again." },
      { status: 500 }
    );
  }
}
