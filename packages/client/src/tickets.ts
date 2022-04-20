import { Client } from "./client"
import { Config, WidgetTicket } from "./types"

export type CreateTicketRequest = {
  type?: string | null
  text: string
  imageText?: string | null
  pagePath: string
  pageTitle?: string | null
  appPlatform?: string | null
  appVersion?: string | null
  appDevice?: string | null
  emotionId?: string | null
}

export type CreateTicketResponse = WidgetTicket

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
