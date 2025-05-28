"use client"

import type React from "react"

import { useTranslation } from "react-i18next"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface BillInputProps {
  billAmount: number
  setBillAmount: (amount: number) => void
  currency: string
}

export default function BillInput({ billAmount, setBillAmount, currency }: BillInputProps) {
  const { t } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Remove all non-numeric characters except decimal point
    const cleanValue = value.replace(/[^\d.]/g, "")
    
    // Ensure only one decimal point
    const parts = cleanValue.split(".")
    let formatted = parts[0]
    if (parts.length > 1) {
      formatted += "." + parts[1].substring(0, 2) // Limit to 2 decimal places
    }
    
    // Add thousand separators
    const integerPart = formatted.split(".")[0]
    const decimalPart = formatted.split(".")[1]
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    const finalFormatted = decimalPart !== undefined ? `${formattedInteger}.${decimalPart}` : formattedInteger
    
    const numericValue = Number.parseFloat(cleanValue) || 0
    setBillAmount(numericValue)
  }

  const displayValue = billAmount > 0 ? 
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(billAmount) : ""

  return (
    <div className="space-y-2">
      <Label htmlFor="bill-amount" className="text-gray-700 dark:text-gray-300 font-medium">{t("billAmount")}</Label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-400 font-medium">
          {currency}
        </span>
        <Input
          id="bill-amount"
          type="text"
          inputMode="decimal"
          placeholder="0.00"
          value={displayValue}
          onChange={handleChange}
          className="pl-8 text-lg font-medium"
        />
      </div>
    </div>
  )
}
