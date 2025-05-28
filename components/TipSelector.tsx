"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TipSelectorProps {
  tipPercentage: number
  setTipPercentage: (percentage: number) => void
}

export default function TipSelector({ tipPercentage, setTipPercentage }: TipSelectorProps) {
  const { t } = useTranslation()
  const presetTips = [10, 15, 20]

  return (
    <div className="space-y-3">
      <Label className="text-base font-medium text-gray-700 dark:text-gray-300">{t("tipPercentage")}</Label>

      <div className="grid grid-cols-3 gap-3">
        {presetTips.map((preset) => (
          <Button
            key={preset}
            variant={tipPercentage === preset ? "default" : "outline"}
            onClick={() => setTipPercentage(preset)}
            className={`h-12 font-semibold text-base transition-all duration-200 ${
              tipPercentage === preset 
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105" 
                : "bg-white hover:bg-blue-50 text-gray-700 border-2 border-gray-300 hover:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
            }`}
          >
            {preset}%
          </Button>
        ))}
      </div>

      <div className="flex items-center space-x-2">
        <Label htmlFor="custom-tip" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("custom")}:
        </Label>
        <div className="relative flex-1">
          <Input
            id="custom-tip"
            type="number"
            inputMode="numeric"
            min="0"
            max="100"
            step="0.1"
            value={tipPercentage}
            onChange={(e) => {
              const value = Number(e.target.value)
              if (value >= 0 && value <= 100) {
                setTipPercentage(value || 0)
              }
            }}
            className="pr-8 font-medium"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 font-medium">
            %
          </span>
        </div>
      </div>
    </div>
  )
}
