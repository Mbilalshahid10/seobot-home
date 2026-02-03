'use client'

export const META_CR_KEY = 'meta_complete_registration_sent'
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

export async function trackMeta(eventName: string, options: TrackMetaOptions = {}) {
  if (typeof window === 'undefined') return

  const eventId = generateEventId()
  const { email, phone, customData } = options

  if (typeof (window as any).fbq === 'function') {
    ;(window as any).fbq('track', eventName, customData || {}, { eventID: eventId })
  }

  try {
    void fetch('/api/meta-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        email,
        phone,
        customData: customData || {},
        sourceUrl: window.location.href,
      }),
    })
  } catch {
    // Best-effort; ignore CAPI errors
  }
}

