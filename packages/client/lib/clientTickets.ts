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

export type ReadTicketsParams = {
  surveyId?: string
}

/**
 * チケット
 */
export class ClientTickets extends Client {
  constructor(config: Config) {
    super(config)
  }

  /**
   * チケットを作成する
   * @param data
   * @returns
   */
  async create(data: CreateTicketData) {
    return await this.call<Ticket, CreateTicketData>({
      method: "POST",
      path: "/tickets",
      body: data,
    })
  }

  /**
   * チケットを取得する
   * @param params
   * @returns
   */
  async read(params: ReadTicketsParams) {
    if (typeof params.surveyId === "string") {
      return this.call<Ticket[], null>({
        method: "GET",
        path: `/tickets?surveyId=${params.surveyId}`,
      })
    }

    return this.call<Ticket[], null>({
      method: "GET",
      path: "/tickets",
    })
  }
}
