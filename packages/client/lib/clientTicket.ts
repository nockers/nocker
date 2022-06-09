import { Client } from "./client"
import { Config } from "./types"

export class ClientTicket extends Client {
  constructor(config: Config, private ticketId: string) {
    super(config)
  }
}
