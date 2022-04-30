import { Client } from "./client"
import { Config, WidgetTicket } from "./types"

export type CreateTicketData = {
  type?: string | null
  text: string
  imageText?: string | null
  pagePath: string
  pageTitle?: string | null
  appPlatform?: string | null
  appVersion?: string | null
  appDevice?: string | null
  slug?: string
  tags?: string[]
  emotionId?: string | null
}

export type ReadTicketParams = {
  slug?: string
  surveyId?: string
}

export class Tickets extends Client {
  constructor(config: Config) {
    super(config)
  }

  async create(data: CreateTicketData) {
    return this.post<CreateTicketData, WidgetTicket>({
      url: `${this.baseURL}/widgets/${this.projectId}/tickets`,
      data,
    })
  }

  async read(params: ReadTicketParams) {
    if (typeof params.slug === "string") {
      return this.get<WidgetTicket[]>({
        url: `${this.baseURL}/widgets/${this.projectId}/emotions?slug=${params.slug}`,
      })
    }

    return this.get<WidgetTicket[]>({
      url: `${this.baseURL}/widgets/${this.projectId}/emotions`,
    })
  }
}
