// Visitor Retention & Lifecycle Tracker for SUDU DUWA AQUA PRODUCTS

import { trackReturningVisitor } from "./analytics";

const STORAGE_KEYS = {
  FIRST_VISIT: "sd_first_visit",
  LAST_VISIT: "sd_last_visit",
  VISIT_COUNT: "sd_visit_count",
  SUBSCRIBED_EMAIL: "sd_subscribed_email",
};

export interface VisitorRetentionState {
  isReturning: boolean;
  visitCount: number;
  daysSinceLastVisit: number;
  isSubscribed: boolean;
  subscribedEmail?: string;
}

/**
 * Checks and records visitor sessions. Fires a GA4 event if the user is a returning visitor.
 */
export function recordVisitorSession(): VisitorRetentionState {
  if (typeof window === "undefined") {
    return {
      isReturning: false,
      visitCount: 1,
      daysSinceLastVisit: 0,
      isSubscribed: false,
    };
  }

  try {
    const now = Date.now();
    const firstVisit = localStorage.getItem(STORAGE_KEYS.FIRST_VISIT);
    const lastVisit = localStorage.getItem(STORAGE_KEYS.LAST_VISIT);
    const rawCount = localStorage.getItem(STORAGE_KEYS.VISIT_COUNT);
    const subscribedEmail = localStorage.getItem(STORAGE_KEYS.SUBSCRIBED_EMAIL);

    let visitCount = rawCount ? parseInt(rawCount, 10) : 0;
    let isReturning = false;
    let daysSinceLastVisit = 0;

    if (!firstVisit) {
      // First-time visitor
      localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, now.toString());
      localStorage.setItem(STORAGE_KEYS.LAST_VISIT, now.toString());
      localStorage.setItem(STORAGE_KEYS.VISIT_COUNT, "1");
      visitCount = 1;
    } else {
      // Returning visitor session check (session threshold: 30 minutes)
      const lastVisitTime = lastVisit ? parseInt(lastVisit, 10) : now;
      const timeDiffMs = now - lastVisitTime;
      const isNewSession = timeDiffMs > 30 * 60 * 1000;

      daysSinceLastVisit = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));

      if (isNewSession) {
        visitCount += 1;
        localStorage.setItem(STORAGE_KEYS.VISIT_COUNT, visitCount.toString());
        localStorage.setItem(STORAGE_KEYS.LAST_VISIT, now.toString());
      }

      if (visitCount > 1) {
        isReturning = true;
        if (isNewSession) {
          trackReturningVisitor({
            visitCount,
            daysSinceLastVisit,
          });
        }
      }
    }

    return {
      isReturning,
      visitCount,
      daysSinceLastVisit,
      isSubscribed: !!subscribedEmail,
      subscribedEmail: subscribedEmail || undefined,
    };
  } catch {
    return {
      isReturning: false,
      visitCount: 1,
      daysSinceLastVisit: 0,
      isSubscribed: false,
    };
  }
}

/**
 * Save subscribed email in localStorage for persistent recognition
 */
export function markEmailSubscribed(email: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEYS.SUBSCRIBED_EMAIL, email);
  } catch {
    // Ignore private browsing storage restrictions
  }
}

