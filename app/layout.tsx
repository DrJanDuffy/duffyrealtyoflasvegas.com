import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.duffyrealtyoflasvegas.com'),
  title: 'Dr. Jan Duffy - Award Winning Buyer Agent | Beazer Homes Las Vegas',
  description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas. Find your perfect new construction home in Henderson, Las Vegas, Boulder City, and Mesquite.',
  alternates: {
    canonical: 'https://www.duffyrealtyoflasvegas.com',
  },
  openGraph: {
    title: 'Dr. Jan Duffy - Award Winning Buyer Agent | Beazer Homes Las Vegas',
    description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas. Find your perfect new construction home in Henderson, Las Vegas, Boulder City, and Mesquite.',
    url: 'https://www.duffyrealtyoflasvegas.com',
    siteName: 'Duffy Realty of Las Vegas',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Award Winning Buyer Agent',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy - Award Winning Buyer Agent | Beazer Homes Las Vegas',
    description: 'Dr. Jan Duffy is the Award Winning Buyer Agent for Beazer Homes in Las Vegas. Find your perfect new construction home in Henderson, Las Vegas, Boulder City, and Mesquite.',
    images: ['https://www.duffyrealtyoflasvegas.com/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1JC6VLTL8P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1JC6VLTL8P');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
