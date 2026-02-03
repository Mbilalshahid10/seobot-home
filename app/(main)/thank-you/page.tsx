import { Metadata } from 'next'
import NavbarSeobot from '@/components/NavbarSeobot'
import FooterSeobot from '@/components/FooterSeobot'
import ThankYouContent from './ThankYouContent'

export const metadata: Metadata = {
  title: 'Thank You | UpRank',
  description: "Thanks for your interest in UpRank. We're in development and will notify you when the product is ready.",
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen">
      <NavbarSeobot />
      <ThankYouContent />
      <FooterSeobot />
    </main>
  )
}
