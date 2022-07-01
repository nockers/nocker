import { Ticket } from "@nocker/core"
import { Client } from "./client"
import { Config } from "./types"

export class ClientTicket extends Client {
  constructor(config: Config, private ticketId: string) {
    super(config)
  }

  /**
   * チケットを取得する
   * @returns
   */
  async read() {
    return this.call<Ticket, null>({
      method: "GET",
      path: `/tickets/${this.ticketId}`,
    })
  }
}
