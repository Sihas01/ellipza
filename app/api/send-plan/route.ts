import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { planName, planPrice, planPricePrefix } = body;

    if (!planName || !planPrice) {
      return NextResponse.json(
        { success: false, message: "Plan details are required." },
        { status: 400 }
      );
    }

    // Send via FormSubmit.co AJAX endpoint
    const response = await fetch("https://formsubmit.co/ajax/ellipza@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Plan Selection: ${planName} (${planPricePrefix} ${planPrice}) - Ellipza Technologies`,
        selected_package: `${planName} (${planPricePrefix} ${planPrice})`,
        message: `A visitor has selected the "${planName}" plan (${planPricePrefix} ${planPrice}) on the Ellipza Technologies website. Please follow up.`,
        _template: "table",
      }),
    });

    const data = await response.json();

    if (response.ok || data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || "FormSubmit error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Send plan email error:", error);
    return NextResponse.json(
      { success: false, message: "Server error sending email." },
      { status: 500 }
    );
  }
}
