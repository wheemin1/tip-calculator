"use client"

import { useEffect } from "react"
import "@/lib/i18n"

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // Update language from localStorage on client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage) {
        const { default: i18n } = require("@/lib/i18n")
        i18n.changeLanguage(savedLanguage)
      }
    }
  }, [])

  return <>{children}</>
}
