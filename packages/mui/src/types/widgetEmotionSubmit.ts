import { WidgetGrade } from "@nocker/client"

export type WidgetEmotionSubmit = {
  type: string
  grade: WidgetGrade
  pagePath: string
  pageTitle: string | null
}
