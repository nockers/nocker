import { WidgetEnvironment } from "./widgetEnvironment"
import { WidgetTicketStatus } from "./widgetTicketStatus"
import { WidgetTicketType } from "./widgetTicketType"

export type WidgetTicket = {
  id: string
  projectId: string
  environment: WidgetEnvironment
  type: WidgetTicketType | null
  status: WidgetTicketStatus
  text: string
  helpId: string | null
}
