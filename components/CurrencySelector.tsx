"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CurrencySelectorProps {
  currency: string
  setCurrency: (currency: string) => void
}

const currencies = [
  { code: "$", name: "USD", symbol: "$" },
  { code: "€", name: "EUR", symbol: "€" },
  { code: "£", name: "GBP", symbol: "£" },
  { code: "₩", name: "KRW", symbol: "₩" },
]

export default function CurrencySelector({ currency, setCurrency }: CurrencySelectorProps) {
  return (
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="w-20">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((curr) => (
          <SelectItem key={curr.code} value={curr.code}>
            <span className="flex items-center gap-2">
              {curr.symbol} {curr.name}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
