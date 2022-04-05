import { WidgetEnvironment } from "./widgetEnvironment"
import { WidgetGrade } from "./widgetGrade"

export type WidgetEmotion = {
  id: string
  projectId: string
  environment: WidgetEnvironment
  customerId: string
  ticketId: string | null
  grade: WidgetGrade
  path: string | null
}
