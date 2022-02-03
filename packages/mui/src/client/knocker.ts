import { Client } from "./client"
import { Ticket } from "./ticket"
import { Tickets } from "./tickets"
import type {
  Config,
  WidgetCustomer,
  WidgetEnvironment,
  WidgetHelp,
  WidgetHelpCategory,
} from "./types"
import { WidgetHelpTreeItem } from "./types/widgetHelpTreeItem"

export * from "./types"

export type LoginRequest = {
  environment: WidgetEnvironment
}

export type LoginResponse = {
  customer: WidgetCustomer
  helps: WidgetHelp[]
  helpCategories: WidgetHelpCategory[]
  helpTreeItems: WidgetHelpTreeItem[]
}

export class Knocker extends Client {
  constructor(private config: Config) {
    super(config)
    this.config = config
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
