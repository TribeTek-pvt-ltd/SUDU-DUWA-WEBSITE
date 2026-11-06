import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, inquiryType, message, quantity, farmName, source } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name or Farm Name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Contact phone number is required." },
        { status: 400 }
      );
    }

    const leadPayload = {
      name: name.trim(),
      phone: phone.trim(),
      farmName: farmName ? String(farmName).trim() : name.trim(),
      inquiryType: inquiryType || "General Inquiry",
      quantity: quantity ? String(quantity).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      source: source || "website_contact_form",
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "unknown",
      ip: req.headers.get("x-forwarded-for") || "unknown",
    };

    // Structured logging for production observability & CRM ingestion
    console.log("[INCOMING LEAD RECEIVED]:", JSON.stringify(leadPayload, null, 2));

    // If an external webhook is configured (e.g. Zapier, Slack, or WhatsApp Cloud API)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
        });
      } catch (webhookErr) {
        console.error("[LEAD WEBHOOK ERROR]:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received. Our hatchery team will follow up within 2–4 hours.",
      leadId: `sd-${Date.now()}`,
    });
  } catch (error) {
    console.error("[CONTACT API ERROR]:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error processing inquiry." },
      { status: 500 }
    );
  }
}

