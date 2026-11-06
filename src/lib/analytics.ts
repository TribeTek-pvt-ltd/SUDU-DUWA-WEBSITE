// Google Analytics 4 & Pixel Event Tracking Utility for SUDU DUWA AQUA PRODUCTS

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-KSZXHD6LQP";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

/**
 * Low-level event dispatcher to Google Analytics 4
 */
export function trackGAEvent(
  action: string,
  parameters: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", action, parameters);
      if (process.env.NODE_ENV === "development") {
        console.log(`[GA4 Event] ${action}:`, parameters);
      }
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: action, ...parameters });
    }
  } catch (error) {
    console.error("[GA4 Tracking Error]", error);
  }

  // Also support Meta Pixel standard events if configured
  try {
    if (typeof window.fbq === "function") {
      if (action === "generate_lead" || action === "contact_form_submit") {
        window.fbq("track", "Lead", {
          content_name: (parameters.form_name as string) || "General Lead",
          category: (parameters.inquiry_type as string) || "Aquaculture",
        });
      } else if (action === "sign_up" || action === "newsletter_signup") {
        window.fbq("track", "CompleteRegistration", {
          content_name: "Stock Alert Newsletter",
        });
      } else if (action === "view_item") {
        window.fbq("track", "ViewContent", {
          content_name: parameters.item_name,
          content_category: parameters.item_category,
        });
      }
    }
  } catch (err) {
    console.error("[Meta Pixel Tracking Error]", err);
  }
}

// ── KEY CONVERSION EVENTS ──────────────────────────────────────────────────

/**
 * GA4 Key Event: Contact Form Submission / Lead Generation
 * Used across the Contact page, Hero lead box, and Products inquiry form.
 */
export function trackContactSubmit(params: {
  formName: string;
  inquiryType?: string;
  farmName?: string;
  quantity?: string;
}): void {
  trackGAEvent("generate_lead", {
    form_name: params.formName,
    inquiry_type: params.inquiryType || "General",
    farm_name: params.farmName || "Unspecified",
    quantity: params.quantity || "Unspecified",
    currency: "LKR",
    value: 100, // Nominal lead value for conversion reporting
  });

  trackGAEvent("contact_form_submit", {
    form_name: params.formName,
    inquiry_type: params.inquiryType || "General",
  });
}

/**
 * GA4 Key Event: Product View & Product List View
 * Measures engagement with Nauplii, PL, and Lab Services.
 */
export function trackProductView(product: {
  name: string;
  category: string;
}): void {
  trackGAEvent("view_item", {
    items: [
      {
        item_id: product.name.toLowerCase().replace(/\s+/g, "-"),
        item_name: product.name,
        item_category: product.category,
      },
    ],
  });

  trackGAEvent("product_page_view", {
    product_name: product.name,
    category: product.category,
  });
}

/**
 * GA4 Key Event: Product Catalog / Seed Availability Page View
 */
export function trackProductListView(): void {
  trackGAEvent("view_item_list", {
    item_list_name: "Vannamei Seeds & Services Catalog",
  });
}

/**
 * GA4 Key Event: Newsletter / Email Retention Sign-up
 * Tracks users opting in to seed stocking alerts and biosecurity guides.
 */
export function trackNewsletterSignup(params: {
  email: string;
  source: string;
  farmLocation?: string;
}): void {
  trackGAEvent("sign_up", {
    method: "stock_alert_email",
    source: params.source,
    location: params.farmLocation || "Sri Lanka",
  });

  trackGAEvent("newsletter_signup", {
    source: params.source,
    opt_in_type: "seed_stock_alerts",
  });
}

/**
 * GA4 Key Event: WhatsApp Lead / Click-to-Chat
 * WhatsApp is the primary transactional channel in regional aquaculture.
 */
export function trackWhatsAppClick(params: {
  source: string;
  productName?: string;
}): void {
  trackGAEvent("generate_lead", {
    method: "whatsapp",
    source: params.source,
    product_name: params.productName || "General Inquire",
  });

  trackGAEvent("whatsapp_click", {
    source: params.source,
    product_name: params.productName || "General Inquire",
  });
}

/**
 * GA4 Retention Tracking: Returning Visitor Event
 */
export function trackReturningVisitor(params: {
  visitCount: number;
  daysSinceLastVisit: number;
}): void {
  trackGAEvent("returning_visitor", {
    visit_count: params.visitCount,
    days_since_last_visit: params.daysSinceLastVisit,
  });
}
