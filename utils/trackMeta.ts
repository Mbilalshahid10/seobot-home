'use client'

import { parseCookie, ATTR_COOKIE_NAME } from '@/utils/cookies'

type TrackMetaOptions = {
  email?: string
  phone?: string
  customData?: Record<string, any>
}

const generateEventId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

/**
 * Read _fbc cookie (set by Meta Pixel), or construct from fbclid in attribution cookie.
 */
function getFbc(): string | undefined {
  if (typeof document === 'undefined') return undefined
  const cookies = parseCookie()

  // Prefer the _fbc cookie set by the pixel
  if (cookies['_fbc']) return cookies['_fbc']

  // Fallback: construct from fbclid stored in attribution cookie
  try {
    const raw = cookies[ATTR_COOKIE_NAME]
    if (!raw) return undefined
    const attr = JSON.parse(decodeURIComponent(raw))
    if (attr.fbclid) {
      return `fb.1.${Date.now()}.${attr.fbclid}`
    }
  } catch {
    // ignore malformed cookie
  }
  return undefined
}

/**
 * Read _fbp cookie (set by Meta Pixel).
 */
function getFbp(): string | undefined {
  if (typeof document === 'undefined') return undefined
  const cookies = parseCookie()
  return cookies['_fbp'] || undefined
}

export async function trackMeta(eventName: string, options: TrackMetaOptions = {}) {
  if (typeof window === 'undefined') return

  const eventId = generateEventId()
  const { email, phone, customData } = options

  if (typeof (window as any).fbq === 'function') {
    ;(window as any).fbq('track', eventName, customData || {}, { eventID: eventId })
  }

  const fbc = getFbc()
  const fbp = getFbp()

  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(4000),
      body: JSON.stringify({
        eventName,
        eventId,
        email,
        phone,
        fbc,
        fbp,
        customData: customData || {},
        sourceUrl: window.location.href,
      }),
    })
  } catch {
    // Best-effort; ignore CAPI errors
  }
}

/**
 * Fire only the server-side CAPI event (no client-side fbq call).
 * Used for PageView deduplication when the pixel may already have fired.
 */
export async function trackMetaServerOnly(eventName: string, eventId: string, options: TrackMetaOptions = {}) {
  if (typeof window === 'undefined') return

  const { email, phone, customData } = options
  const fbc = getFbc()
  const fbp = getFbp()

  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(4000),
      body: JSON.stringify({
        eventName,
        eventId,
        email,
        phone,
        fbc,
        fbp,
        customData: customData || {},
        sourceUrl: window.location.href,
      }),
    })
  } catch {
    // Best-effort; ignore CAPI errors
  }
}
