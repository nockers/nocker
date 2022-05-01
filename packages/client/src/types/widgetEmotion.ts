import { WidgetEnvironment } from "./widgetEnvironment"
import { WidgetGrade } from "./widgetGrade"

export type WidgetEmotion = {
  id: string
  environment: WidgetEnvironment
  grade: WidgetGrade
  gradeSum: number | null
  type: string
  slug: string | null
  pagePath: string
  pageTitle: string | null
  projectId: string
  customerId: string
  ticketId: string | null
  surveyId: string | null
}
