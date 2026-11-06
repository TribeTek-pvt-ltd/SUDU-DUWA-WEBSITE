import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, farmLocation, source } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Valid email address is required." },
        { status: 400 }
      );
    }

    const subscriberPayload = {
      email: email.trim().toLowerCase(),
      farmLocation: farmLocation ? String(farmLocation).trim() : "Sri Lanka",
      source: source || "website_retention_capture",
      timestamp: new Date().toISOString(),
    };

    console.log("[STOCK ALERT SUBSCRIBER RECEIVED]:", JSON.stringify(subscriberPayload, null, 2));

    const retentionWebhookUrl = process.env.RETENTION_WEBHOOK_URL;
    if (retentionWebhookUrl) {
      try {
        await fetch(retentionWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(subscriberPayload),
        });
      } catch (err) {
        console.error("[RETENTION WEBHOOK ERROR]:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed to seed stock alerts and biosecurity updates.",
    });
  } catch (error) {
    console.error("[RETENTION API ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}

