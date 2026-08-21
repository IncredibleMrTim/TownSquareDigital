import { sendGAEvent } from "@next/third-parties/google"

/**
 * Shared Google Analytics event helper — every component that tracks a
 * click or interaction should call this instead of `sendGAEvent` directly,
 * so event dispatch stays in one place.
 */
export function trackGAClick(
  eventName: string,
  params: Record<string, string> = {},
) {
  sendGAEvent("event", eventName, params)
}
