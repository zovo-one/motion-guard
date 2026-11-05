/**
 * paywall.d.ts — ambient types for the canonical `paywall.js` controller.
 *
 * The JS is copied verbatim from the engine and MUST NOT be edited. This lets
 * popup.ts / options.ts import `ZovoPaywall` under `--strict`. Keep in sync
 * with engine/5-design-ux-ui-monetization/monetization/paywall.js.
 */

export interface ZovoPaywallInit {
  extName?: string;
  extKey?: string;
  price?: number;
  priceNote?: string;
  reframe?: string;
  guaranteeDays?: number;
  trialDays?: number;
  freeFeatures?: string[];
  proFeatures?: string[];
  onEvent?: (name: string, detail?: Record<string, unknown>) => void;
}

export interface ZovoPaywallApi {
  init(opts?: ZovoPaywallInit): void;
  open(context?: Record<string, unknown>): Promise<void>;
  close(): void;
}

export const ZovoPaywall: ZovoPaywallApi;
