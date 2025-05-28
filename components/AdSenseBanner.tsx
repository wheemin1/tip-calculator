"use client"

import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"

export default function AdSenseBanner() {
  const { t } = useTranslation()

  return (
    <Card className="bg-gray-100 dark:bg-gray-800">
      <CardContent className="p-4">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm mb-2">{t("advertisement")}</p>
          <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
            <p className="text-xs">[AdSense Banner Placeholder]</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
