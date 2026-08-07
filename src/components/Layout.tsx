import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { WhatsAppButton } from '@/components/site/WhatsAppButton'
import { CursorLight } from '@/components/site/CursorLight'
import { trackPageView } from '@/analytics/tracker'

export default function Layout() {
  useEffect(() => {
    trackPageView()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-animal-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CursorLight />
    </div>
  )
}
