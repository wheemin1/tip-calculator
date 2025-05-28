"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  isDarkMode: boolean
  setIsDarkMode: (isDark: boolean) => void
}

export default function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <Button variant="outline" size="icon" onClick={() => setIsDarkMode(!isDarkMode)} className="h-10 w-10">
      {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
