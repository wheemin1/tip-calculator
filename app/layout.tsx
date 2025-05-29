import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import I18nProvider from "@/components/I18nProvider"
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tip & Split Calculator",
  description: "A simple and lightweight tip calculator for splitting bills easily.",
  generator: 'v0.dev',
  keywords: ['tip calculator', 'split bill', 'tip and split calculator', 'bill sharing'],
  openGraph: {
    title: 'Tip & Split Calculator',
    description: 'Split your bill and calculate tips with ease.',
    url: 'https://tipcalculationtip.netlify.app',
    siteName: 'Tip & Split Calculator',
    images: [
      {
        url: 'https://tipcalculationtip.netlify.app/og-image.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tip & Split Calculator" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="CXwW2ROvezFAamVFZYXX26sxDGQ9YjNOHBPFGM7LA6U" />

        {/* SEO Meta Tags */}
        <meta name="keywords" content="tip calculator, split bill, tip and split calculator, bill sharing" />
        <meta name="author" content="hmkin" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tip & Split Calculator" />
        <meta property="og:description" content="Split your bill and calculate tips with ease." />
        <meta property="og:site_name" content="Tip & Split Calculator" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tip & Split Calculator" />
        <meta name="twitter:description" content="Quickly calculate tips and split bills on the go." />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
