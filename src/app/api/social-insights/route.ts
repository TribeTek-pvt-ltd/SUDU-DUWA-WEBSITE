import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Endpoint for social media insights integration, automated webhook registration,
 * and social performance metric aggregation for monthly reporting.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // 1. Meta / Facebook Graph API Webhook Verification Challenge
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const expectedToken = process.env.META_WEBHOOK_VERIFY_TOKEN || "sududuwa_insights_verify_2026";

  if (mode === "subscribe" && token === expectedToken) {
    return new NextResponse(challenge, { status: 200 });
  }

  // 2. Return Social Media Channel & Connected Insights Status for Monthly Reports
  return NextResponse.json({
    status: "active",
    reportingCycle: "Monthly Automated Analytics",
    connectedChannels: [
      {
        channel: "WhatsApp Community",
        type: "Community Group & Direct API",
        url: "https://chat.whatsapp.com/CsRdedlj0xgC1hbjHDlnUi",
        directSupport: "https://wa.me/94706665295",
        status: "active",
        trackedEvents: ["community_join", "direct_inquiry", "click_to_chat"],
      },
      {
        channel: "Facebook Page",
        handle: "@sududuwaaquaproducts",
        url: "https://www.facebook.com/sududuwaaquaproducts",
        status: "connected",
        insightsSync: "Meta Business Suite",
      },
      {
        channel: "Google Analytics 4 & Search Console",
        property: "SUDU DUWA AQUA PRODUCTS",
        measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KSZXHD6LQP",
        status: "connected",
        keyEventsTracked: [
          "generate_lead",
          "contact_form_submit",
          "view_item_list",
          "view_item",
          "sign_up",
          "newsletter_signup",
          "returning_visitor"
        ],
      },
      {
        channel: "AI Assistant Crawlers",
        endpoints: ["/llms.txt", "/llms-full.txt", "/robots.txt", "/sitemap.xml"],
        agentsPermitted: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "PerplexityBot", "ClaudeBot"],
        status: "indexed",
      },
      {
        channel: "Uptime & Health Monitoring",
        endpoints: ["/api/health", "/api/uptime"],
        status: "operational",
        recommendedServices: ["UptimeRobot (5-min HTTP ping)", "BetterStack", "Pingdom"],
      }
    ],
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[Social Webhook Event Received]", body);
    return NextResponse.json({ received: true, timestamp: new Date().toISOString() });
  } catch {
    return NextResponse.json({ received: false }, { status: 400 });
  }
}

