"use client"

import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Palette, Globe } from "lucide-react"

interface ProVersionToggleProps {
  isProVersion: boolean
  setIsProVersion: (isPro: boolean) => void
}

export default function ProVersionToggle({ isProVersion, setIsProVersion }: ProVersionToggleProps) {
  const { t } = useTranslation()

  return (
    <Card className="border-yellow-200 dark:border-yellow-800 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
          <Crown className="h-5 w-5" />
          {t("proVersion")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Palette className="h-4 w-4" />
            {t("customThemes")}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="h-4 w-4" />
            {t("moreCurrencies")}
          </div>
        </div>

        <Button
          onClick={() => setIsProVersion(!isProVersion)}
          className="w-full"
          variant={isProVersion ? "secondary" : "default"}
        >
          {isProVersion ? t("downgrade") : t("upgradeToPro")}
        </Button>
      </CardContent>
    </Card>
  )
}
