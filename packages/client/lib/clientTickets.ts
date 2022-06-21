import { Ticket } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

export type CreateTicketData = {
  type?: string | null
  text: string
  imageText?: string | null
  pagePath?: string | null
  pageTitle?: string | null
  appVersion?: string | null
  tags?: string[]
  emotionId?: string | null
}

export type ReadTicketParams = {
  surveyId?: string
}

export class ClientTickets extends Client {
  constructor(config: Config) {
    super(config)
  }

  async create(data: CreateTicketData) {
    return await this.call<Ticket, CreateTicketData>({
      method: "POST",
      path: "tickets",
      body: data,
    })
  }

  async read(params: ReadTicketParams) {
    if (typeof params.surveyId === "string") {
      return this.call<Ticket[], null>({
        method: "GET",
        path: `tickets?surveyId=${params.surveyId}`,
      })
    }

    return this.call<Ticket[], null>({
      method: "GET",
      path: "tickets",
    })
  }
}
