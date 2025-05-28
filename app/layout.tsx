import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import I18nProvider from "@/components/I18nProvider"
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "A simple and lightweight tip calculator",
  generator: 'v0.dev'
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
        <meta name="apple-mobile-web-app-title" content="Tip Calculator" />
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
