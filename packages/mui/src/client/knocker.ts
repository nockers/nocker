import { Client } from "./client"
import { Ticket } from "./ticket"
import { Tickets } from "./tickets"
import type { Config, Customer, Environment, Help, HelpCategory } from "./types"
import { HelpTreeItem } from "./types/helpTreeItem"

export * from "./types"

export type LoginRequest = {
  environment: Environment
}

export type LoginResponse = {
  customer: Customer
  helps: Help[]
  helpCategories: HelpCategory[]
  helpTreeItems: HelpTreeItem[]
}

export class Knocker extends Client {
  constructor(private config: Config) {
    super(config)
  }

  async login() {
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
}
