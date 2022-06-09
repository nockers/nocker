import { Client } from "./client"
import { ClientEmotion } from "./clientEmotion"
import { ClientEmotions } from "./clientEmotions"
import { ClientTicket } from "./clientTicket"
import { ClientTickets } from "./clientTickets"
import { Config } from "./types"

export class Nocker extends Client {
  constructor(private config: Config) {
    super(config)
  }

  customer() {
    return null
  }

  tickets(): ClientTickets

  tickets(ticketId: string): ClientTicket

  tickets(ticketId?: string) {
    if (typeof ticketId === "undefined") {
      return new ClientTickets(this.config)
    }
    return new ClientTicket(this.config, ticketId)
  }

  emotions(): ClientEmotions

  emotions(emotionId: string): ClientEmotion

  emotions(emotionId?: string) {
    if (typeof emotionId === "undefined") {
      return new ClientEmotions(this.config)
    }
    return new ClientEmotion(this.config, emotionId)
  }
}
