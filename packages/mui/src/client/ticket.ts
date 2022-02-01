import { Client } from "./client"
import { Config, Environment, TicketStatus, TicketType } from "./types"

export type UpdateTicketRequest = {
  text: string
}

export type UpdateTicketResponse = {
  id: string
  environment: Environment
  type: TicketType | null
  status: TicketStatus
  text: string
  helpId: string | null
}

export class Ticket extends Client {
  constructor(config: Config, private ticketId: string) {
    super(config)
  }

  async update(data: UpdateTicketRequest) {
    return this.post<UpdateTicketRequest, UpdateTicketResponse>({
      url: `${this.baseURL}/widgets/${this.projectId}/tickets/${this.ticketId}`,
      data,
    })
  }
}
