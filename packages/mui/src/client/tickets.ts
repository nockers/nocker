import { Client } from "./client"
import { Config, Environment, TicketStatus, TicketType } from "./types"

export type CreateTicketRequest = {
  text: string
}

export type CreateTicketResponse = {
  id: string
  environment: Environment
  type: TicketType | null
  status: TicketStatus
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
