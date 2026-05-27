import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'

export const metadata: Metadata = {
  title: {
    default: 'Apeksha Nanda | Portfolio',
    template: '%s | Apeksha Nanda',
  },
  description: 'Software Engineering Portfolio showcasing full-stack web and mobile development applications.',
  openGraph: {
    title: 'Apeksha Nanda | Portfolio',
    description: 'Software Engineering Portfolio showcasing full-stack web and mobile development applications.',
    siteName: 'Apeksha Nanda Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-slate-200 bg-[#0B0D12] transition-colors duration-300',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased font-sans min-h-screen flex flex-col relative overflow-x-hidden">
        
        {/* --- PREMIUM AMBIENT GLOW LAYER --- */}
        <div className="absolute inset-0 pointer-events-none flex justify-center z-0 overflow-hidden">
          {/* Main top radial ambient blue glow */}
          <div className="absolute top-[-15%] h-[500px] w-[700px] rounded-full bg-blue-500/10 blur-[100px] md:h-[700px] md:w-[1000px] md:blur-[130px]" />
          
          {/* Subtle concentric arch highlight */}
          <div className="absolute top-0 h-[500px] w-[500px] rounded-full border border-blue-500/[0.04] bg-gradient-to-b from-blue-500/[0.01] to-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        </div>

        {/* Navigation Bar */}
        <Navbar />
        
        {/* Main Content Wrapper */}
        <main className="flex-auto pt-28 w-full max-w-3xl mx-auto px-6 relative z-10">
          {children}
        </main>
        
        {/* Footer & Analytics */}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}