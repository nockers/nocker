import type { EmotionGrade } from "@nocker/client"

export type WidgetEmotionSubmit = {
  type: string
  grade: EmotionGrade
  pagePath: string
  pageTitle: string | null
}
