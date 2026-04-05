import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { rating, comment, page } = await req.json();

    if (!rating || !["positive", "negative"].includes(rating)) {
      return NextResponse.json({ error: "Invalid rating" }, { status: 400 });
    }

    const emoji = rating === "positive" ? "😊" : "😞";
    const label = rating === "positive" ? "Positive" : "Negative";

    const htmlContent = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 0;">
        <div style="background: #09090b; border-radius: 12px; padding: 32px; color: #fff;">
          <h2 style="margin: 0 0 24px; font-size: 18px; font-weight: 600; color: #fafafa;">
            New Portfolio Feedback
          </h2>
          <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4);">Rating</p>
            <p style="margin: 0; font-size: 24px;">${emoji} ${label}</p>
          </div>
          ${
            comment
              ? `<div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                  <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4);">Comment</p>
                  <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.8); line-height: 1.5;">${comment}</p>
                </div>`
              : ""
          }
          <div style="background: rgba(255,255,255,0.05); border-radius: 8px; padding: 16px;">
            <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.4);">Page</p>
            <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.8);">${page || "Unknown"}</p>
          </div>
        </div>
      </div>
    `;

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: "Portfolio Feedback", email: "hello.kaykay@gmail.com" },
        to: [{ email: "hello.kaykay@gmail.com", name: "Kay" }],
        subject: `${emoji} ${label} feedback on ${page || "your portfolio"}`,
        htmlContent,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Feedback email error:", error);
    return NextResponse.json(
      { error: "Failed to send feedback" },
      { status: 500 }
    );
  }
}
