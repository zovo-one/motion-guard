/**
 * feature-gate.d.ts — ambient types for the canonical `feature-gate.js`.
 *
 * The JS itself is copied verbatim from the engine (single source of truth for
 * license verification) and MUST NOT be edited. This declaration file lets the
 * TypeScript service worker import it under `--strict` without `allowJs`. Only
 * the exports Motion Guard actually consumes are typed; keep in sync with
 * engine/5-design-ux-ui-monetization/monetization/feature-gate.js.
 */

export type ZovoTier = 'free' | 'trial' | 'pro';

export interface VerifyResult {
  ok: boolean;
  tier: ZovoTier;
  trialEndsAt?: number | null;
  reason?: string;
}

export const LICENSE_ALARM: string;

export function setEventSink(fn: (name: string, detail?: Record<string, unknown>) => void): void;
export function emit(name: string, detail?: Record<string, unknown>): void;
export function clearLicense(): Promise<void>;
export function verifyLicenseKey(licenseKey: string, extKey: string): Promise<VerifyResult>;
export function startTrial(extKey: string, days?: number): Promise<{ ok: boolean; tier?: ZovoTier; trialEndsAt?: number; reason?: string }>;
export function getTier(extKey: string): Promise<ZovoTier>;
export function isPro(extKey: string): Promise<boolean>;
export function trialDaysLeft(): Promise<number>;
export function registerLicenseAlarm(extKey: string): void;
export function gate<T>(
  extKey: string,
  handlers: { pro?: () => T; free?: () => T; onLocked?: () => void }
): Promise<T | undefined>;
