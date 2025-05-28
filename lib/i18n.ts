import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      title: "Tip Calculator",
      calculator: "Bill Calculator",
      billAmount: "Bill Amount",
      tipPercentage: "Tip Percentage",
      numberOfPeople: "Number of People",
      custom: "Custom",
      results: "Results",
      tipAmount: "Tip Amount",
      totalAmount: "Total Amount",
      perPerson: "Per Person",
      splitBetween: "Split between",
      person: "person",
      people: "people",
      share: "Share",
      reset: "Reset",
      enterBillAmount: "Enter bill amount to see results",
      shareCalculation: "Share Calculation",
      scanQRCode: "Scan QR code to view calculation",
      copyLink: "Copy Link",
      copied: "Copied!",
      billSplit: "Bill Split",
      tip: "tip",
      advertisement: "Advertisement",
      proVersion: "Pro Version",
      customThemes: "Custom Themes",
      moreCurrencies: "More Currencies",
      upgradeToPro: "Upgrade to Pro",
      downgrade: "Downgrade",
      tipCalculator: "Tip Calculator",
    },
  },
  ko: {
    translation: {
      title: "팁 계산기",
      calculator: "청구서 계산기",
      billAmount: "총 청구 금액",
      tipPercentage: "팁 비율",
      numberOfPeople: "인원수",
      custom: "사용자 정의",
      results: "결과",
      tipAmount: "팁 금액",
      totalAmount: "총 금액",
      perPerson: "1인당",
      splitBetween: "분할 인원",
      person: "명",
      people: "명",
      share: "공유",
      reset: "재설정",
      enterBillAmount: "청구 금액을 입력하여 결과를 확인하세요",
      shareCalculation: "계산 결과 공유",
      scanQRCode: "QR 코드를 스캔하여 계산 결과 보기",
      copyLink: "링크 복사",
      copied: "복사됨!",
      billSplit: "청구서 분할",
      tip: "팁",
      advertisement: "광고",
      proVersion: "프로 버전",
      customThemes: "사용자 정의 테마",
      moreCurrencies: "추가 통화",
      upgradeToPro: "프로로 업그레이드",
      downgrade: "다운그레이드",
      tipCalculator: "팁 계산기",
    },
  },
}

// Initialize i18n for both server and client
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
