import { WidgetGrade } from "@knockr/client"

export const useEmotionText = (grade: WidgetGrade | null) => {
  if (grade === 0) {
    return "非常に良くない"
  }

  if (grade === 1) {
    return "あまり良くない"
  }

  if (grade === 2) {
    return "良くも悪くもない"
  }

  if (grade === 3) {
    return "そこそこ良い"
  }

  if (grade === 4) {
    return "非常に良い"
  }

  return ""
}
