"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Share2, Copy, Check } from "lucide-react"
import type { CalculationResult } from "@/app/page"

interface ShareResultProps {
  result: CalculationResult
}

export default function ShareResult({ result }: ShareResultProps) {
  const { t } = useTranslation()
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const generateShareData = () => {
    const shareText = `${t("billSplit")}: ${result.currency}${result.billAmount.toFixed(2)} + ${result.tipPercentage}% ${t("tip")} = ${result.currency}${result.totalAmount.toFixed(2)} (${result.currency}${result.amountPerPerson.toFixed(2)} ${t("perPerson")})`

    const shareUrl = `${window.location.origin}?bill=${result.billAmount}&tip=${result.tipPercentage}&people=${result.numberOfPeople}&currency=${encodeURIComponent(result.currency)}`

    return { shareText, shareUrl }
  }

  const generateQRCode = async (text: string) => {
    try {
      // Use a simple QR code API service instead of the qrcode library
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`
      setQrCodeUrl(qrUrl)
    } catch (error) {
      console.error("Error generating QR code:", error)
    }
  }

  const handleShare = async () => {
    const { shareText, shareUrl } = generateShareData()

    // Generate QR code
    await generateQRCode(shareUrl)

    // Try native sharing first
    if (navigator.share) {
      try {
        await navigator.share({
          title: t("tipCalculator"),
          text: shareText,
          url: shareUrl,
        })
        return
      } catch (error) {
        console.log("Share cancelled or not supported")
      }
    }

    // Fallback to opening dialog
    setIsOpen(true)
  }

  const copyToClipboard = async () => {
    const { shareText, shareUrl } = generateShareData()
    const textToCopy = `${shareText}\n${shareUrl}`

    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Failed to copy:", error)
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = textToCopy
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (result.billAmount === 0) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="default" 
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition-all duration-200" 
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4 mr-2" />
          {t("share")}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-gray-800 dark:text-gray-100">{t("shareCalculation")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {qrCodeUrl && (
            <div className="text-center">
              <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code" className="mx-auto w-48 h-48 border-2 border-gray-200 dark:border-gray-600 rounded-lg" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">{t("scanQRCode")}</p>
            </div>
          )}

          <Button onClick={copyToClipboard} className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                {t("copied")}
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                {t("copyLink")}
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
