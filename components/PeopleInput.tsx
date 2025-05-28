"use client"

import type React from "react"

import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus } from "lucide-react"

interface PeopleInputProps {
  numberOfPeople: number
  setNumberOfPeople: (count: number) => void
}

export default function PeopleInput({ numberOfPeople, setNumberOfPeople }: PeopleInputProps) {
  const { t } = useTranslation()

  const increment = () => {
    setNumberOfPeople(numberOfPeople + 1)
  }

  const decrement = () => {
    if (numberOfPeople > 1) {
      setNumberOfPeople(numberOfPeople - 1)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(99, Number(e.target.value) || 1))
    setNumberOfPeople(value)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor="people-count">{t("numberOfPeople")}</Label>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={decrement} disabled={numberOfPeople <= 1} className="h-12 w-12">
          <Minus className="h-4 w-4" />
        </Button>

        <Input
          id="people-count"
          type="number"
          inputMode="numeric"
          min="1"
          max="99"
          value={numberOfPeople}
          onChange={handleChange}
          className="text-center text-lg h-12 flex-1"
        />

        <Button variant="outline" size="icon" onClick={increment} className="h-12 w-12">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
