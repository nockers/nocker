import { captureException } from "@sentry/minimal"
import {
  Config,
  WidgetEnvironment,
  WidgetTicketStatus,
  WidgetTicketType,
} from "../types"
import { Client } from "./client"

export type CreateTicketRequest = {
  text: string
  type: string | null
  imageText: string | null
}

export type CreateTicketResponse = {
  id: string
  environment: WidgetEnvironment
  type: WidgetTicketType | null
  status: WidgetTicketStatus
  text: string
  helpId: string | null
}

export class Tickets extends Client {
  constructor(config: Config) {
    super(config)
  }

  async create(data: CreateTicketRequest) {
    return this.post<CreateTicketRequest, CreateTicketResponse>({
      url: `${this.baseURL}/widgets/${this.projectId}/tickets`,
      data,
    })
  }
}
