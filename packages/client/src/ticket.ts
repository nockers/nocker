import { Client } from "./client"
import { Config } from "./types"

export class Ticket extends Client {
  constructor(config: Config, private ticketId: string) {
    super(config)
  }
}
