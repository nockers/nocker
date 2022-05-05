import { Client } from "./client"
import { Emotion } from "./emotion"
import { Emotions } from "./emotions"
import { Ticket } from "./ticket"
import { Tickets } from "./tickets"
import { Config, WidgetEnvironment, WidgetLogin } from "./types"

export type LoginData = {
  environment: WidgetEnvironment
}

export class Knockr extends Client {
  constructor(private config: Config) {
    super(config)
    this.config = config
  }

  async login() {
    const widgetLogin = await this.post<LoginData, WidgetLogin>({
      url: `${this.baseURL}/widgets/${this.projectId}/login`,
      data: { environment: this.environment },
    })

    if (widgetLogin instanceof Error) {
      return widgetLogin
    }

    return widgetLogin
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
