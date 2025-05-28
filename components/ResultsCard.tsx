"use client"

import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultsCardProps {
  billAmount: number
  tipAmount: number
  totalAmount: number
  amountPerPerson: number
  numberOfPeople: number
  currency: string
}

export default function ResultsCard({
  billAmount,
  tipAmount,
  totalAmount,
  amountPerPerson,
  numberOfPeople,
  currency,
}: ResultsCardProps) {
  const { t } = useTranslation()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  if (billAmount === 0) {
    return (
      <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardContent className="pt-6">
          <p className="text-center text-gray-600 dark:text-gray-400 font-medium">{t("enterBillAmount")}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 transition-all duration-300 hover:shadow-lg border-green-200 dark:border-green-700/50">
      <CardHeader>
        <CardTitle className="text-lg text-gray-800 dark:text-gray-100">{t("results")}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-white/70 dark:bg-black/30 rounded-lg border border-white/50 dark:border-gray-600/50">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("tipAmount")}</p>
            <p className="text-xl font-bold text-green-600 dark:text-green-400 transition-all duration-300">
              {currency}
              {formatCurrency(tipAmount)}
            </p>
          </div>

          <div className="text-center p-3 bg-white/70 dark:bg-black/30 rounded-lg border border-white/50 dark:border-gray-600/50">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("totalAmount")}</p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-all duration-300">
              {currency}
              {formatCurrency(totalAmount)}
            </p>
          </div>
        </div>

        <div className="text-center border-t border-gray-200 dark:border-gray-600 pt-4 bg-white/50 dark:bg-black/20 rounded-lg p-4 border border-white/50 dark:border-gray-600/50">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{t("perPerson")}</p>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 transition-all duration-300">
            {currency}
            {formatCurrency(amountPerPerson)}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-medium">
            {t("splitBetween")} {numberOfPeople} {numberOfPeople === 1 ? t("person") : t("people")}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
