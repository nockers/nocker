import { captureException } from "@sentry/minimal"
import {
  Config,
  WidgetEnvironment,
  WidgetTicketStatus,
  WidgetTicketType,
} from "../types"
import { Client } from "./client"

export type UpdateTicketRequest = {
  text: string
}

export type UpdateTicketResponse = {
  id: string
  environment: WidgetEnvironment
  type: WidgetTicketType | null
  status: WidgetTicketStatus
  text: string
  helpId: string | null
}

export class Ticket extends Client {
  constructor(config: Config, private ticketId: string) {
    super(config)
  }

  update(data: UpdateTicketRequest) {
    return this.post<UpdateTicketRequest, UpdateTicketResponse>({
      url: `${this.baseURL}/widgets/${this.projectId}/tickets/${this.ticketId}`,
      data,
    })
  }
}
