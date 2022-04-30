import { WidgetEmotion } from "./widgetEmotion"
import { WidgetEnvironment } from "./widgetEnvironment"
import { WidgetTicketStatus } from "./widgetTicketStatus"
import { WidgetTicketType } from "./widgetTicketType"

export type WidgetTicket = {
  id: string
  environment: WidgetEnvironment
  type: WidgetTicketType | null
  status: WidgetTicketStatus
  text: string
  slug: string | null
  pagePath: string
  pageTitle: string | null
  projectId: string
  customerId: string
  emotionId: string | null
  emotion: WidgetEmotion | null
  helpId: string | null
  surveyId: string | null
}
