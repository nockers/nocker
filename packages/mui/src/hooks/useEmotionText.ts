import { WidgetGrade } from "@knockr/client"

type Config = {
  gradeFiveMessage: string
  gradeFourMessage: string
  gradeThreeMessage: string
  gradeTwoMessage: string
  gradeOneMessage: string
}

export const useEmotionText = (config: Config, grade: WidgetGrade | null) => {
  if (grade === 0) {
    return config.gradeOneMessage
  }

  if (grade === 1) {
    return config.gradeTwoMessage
  }

  if (grade === 2) {
    return config.gradeThreeMessage
  }

  if (grade === 3) {
    return config.gradeFourMessage
  }

  if (grade === 4) {
    return config.gradeFiveMessage
  }

  return "予期しないエラー"
}
