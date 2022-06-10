import { Emotion } from "./emotion"
import { Environment } from "./environment"
import { TicketStatus } from "./ticketStatus"
import { TicketType } from "./ticketType"

export type Ticket = {
  id: string
  environment: Environment
  type: TicketType | null
  status: TicketStatus
  text: string
  slug: string | null
  pagePath: string
  pageTitle: string | null
  projectId: string
  customerId: string
  emotionId: string | null
  emotion: Emotion | null
  helpId: string | null
  surveyId: string | null
}
