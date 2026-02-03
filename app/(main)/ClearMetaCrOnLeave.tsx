'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { META_CR_KEY } from '@/utils/trackMeta'

/**
 * Clears the Meta CompleteRegistration sent flag when the user navigates away
 * from /thank-you so the next visit to thank-you can fire the event again.
 */
export default function ClearMetaCrOnLeave() {
  const pathname = usePathname()
  useEffect(() => {
    if (pathname !== '/thank-you') {
      sessionStorage.removeItem(META_CR_KEY)
    }
  }, [pathname])
  return null
}
