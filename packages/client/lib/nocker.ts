import { Client } from "./client"
import { Emotion } from "./emotion"
import { Emotions } from "./emotions"
import { Ticket } from "./ticket"
import { Tickets } from "./tickets"
import { Config } from "./types"

export class Nocker extends Client {
  constructor(private config: Config) {
    super(config)
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
