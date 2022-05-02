import { Client } from "./client"
import { Emotion } from "./emotion"
import { Emotions } from "./emotions"
import { Ticket } from "./ticket"
import { Tickets } from "./tickets"
import { Config, WidgetCustomer, WidgetEnvironment, WidgetHelp } from "./types"
import { WidgetConfig } from "./types/widgetConfig"

export type LoginRequest = {
  environment: WidgetEnvironment
}

export type LoginResponse = {
  projectId: string
  customer: WidgetCustomer
  helps: WidgetHelp[]
  widgetConfig: WidgetConfig
}

export class Knockr extends Client {
  constructor(private config: Config) {
    super(config)
    this.config = config
  }

  login() {
    return this.post<LoginRequest, LoginResponse>({
      url: `${this.baseURL}/widgets/${this.projectId}/login`,
      data: { environment: this.environment },
    })
  }

  customer() {}

  tickets(): Tickets

  tickets(ticketId: string): Ticket

  tickets(ticketId?: string) {
    if (typeof ticketId === "undefined") {
      return new Tickets(this.config)
    }

    return new Ticket(this.config, ticketId)
  }

  emotions(): Emotions

  emotions(emotionId: string): Emotion

  emotions(emotionId?: string) {
    if (typeof emotionId === "undefined") {
      return new Emotions(this.config)
    }

    return new Emotion(this.config, emotionId)
  }
}
