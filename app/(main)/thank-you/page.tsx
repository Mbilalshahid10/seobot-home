import { Metadata } from 'next'
import ThankYouContent from './ThankYouContent'
import Logo from "@/components/Logo"
import { content } from '@/lib/content'

const brand = content.brand
const ty = content.thankYou
const footer = content.footer
const year = brand.copyrightYear ?? new Date().getFullYear().toString()

export const metadata: Metadata = {
  title: ty?.metaTitle ?? `Thank You | ${brand.name}`,
  description: ty?.metaDescription ?? `Thanks for your interest in ${brand.name}. We're in development and will notify you when the product is ready.`,
}

export default function ThankYouPage() {
  const copyright = footer?.copyright ?? `\u00A9 ${year} ${brand.name}. All rights reserved.`

  return (
    <div className="landing-page-scope bg-[#F8F6F1] text-[#1A1A19] min-h-screen">
      {/* NAV — Same as landing page */}
      <nav className="sticky top-0 z-50 bg-[#F8F6F1]/80 backdrop-blur-md border-b border-[#E0DBD2]">
        <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center">
          <Logo href="/" />
        </div>
      </nav>

      <ThankYouContent />

      {/* FOOTER — Same as landing page */}
      <footer className="py-10 bg-[#141413] border-t border-[#2A2A28]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#706B63]">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>{copyright}</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              {footer?.links?.map((link) => (
                <a key={link.href} className="hover:text-white transition-colors" href={link.href}>
                  {link.text}
                </a>
              )) ?? (
                <>
                  <a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
                  <a className="hover:text-white transition-colors" href="/terms">Terms of Service</a>
                </>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
