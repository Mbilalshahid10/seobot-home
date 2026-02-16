'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/posthog'

export default function SectionTracker() {
  const firedRef = useRef<Set<string>>(new Set())

  useEffect(() => {
    // Dev-mode analytics contract enforcement — tree-shaken in production
    if (process.env.NODE_ENV === "development") {
      const sections = document.querySelectorAll<HTMLElement>("[data-track-section]");
      sections.forEach((el) => {
        const name = el.getAttribute("data-track-section");
        if (!el.id) {
          console.error(
            `[Analytics Contract] Section "${name}" missing id attribute for scroll anchors`
          );
        }
        const ctas = el.querySelectorAll("a[href], button:not([type='submit']):not([data-state])");
        ctas.forEach((cta) => {
          if (!cta.getAttribute("data-cta-name")) {
            console.warn(
              `[Analytics Contract] CTA in "${name}" missing data-cta-name: ${cta.textContent?.trim()}`
            );
          }
        });
      });
    }

    const timer = setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>('[data-track-section]')
      if (sections.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const name = (entry.target as HTMLElement).dataset.trackSection
            if (!name || firedRef.current.has(name)) return
            firedRef.current.add(name)
            trackEvent('section_viewed', { section_name: name })
          })
        },
        { threshold: 0.3 }
      )

      sections.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return null
}
