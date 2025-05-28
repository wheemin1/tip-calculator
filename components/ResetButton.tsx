"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

interface ResetButtonProps {
  onReset: () => void
}

export default function ResetButton({ onReset }: ResetButtonProps) {
  const { t } = useTranslation()

  return (
    <Button 
      variant="outline" 
      onClick={onReset} 
      className="w-full font-medium text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
    >
      <RotateCcw className="h-4 w-4 mr-2" />
      {t("reset")}
    </Button>
  )
}
