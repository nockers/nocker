import { widgetConfigDefault } from "@nocker/core"
import { Client } from "./client"
import { ClientCustomer } from "./clientCustomer"
import { ClientEmotion } from "./clientEmotion"
import { ClientEmotions } from "./clientEmotions"
import { ClientHelp } from "./clientHelp"
import { ClientHelps } from "./clientHelps"
import { ClientProject } from "./clientProject"
import { ClientTicket } from "./clientTicket"
import { ClientTickets } from "./clientTickets"
import { Config } from "./types"

export class Nocker extends Client {
  constructor(private config: Config) {
    super(config)
  }

  customers(customerId: string): ClientCustomer

  customers(customerId: string) {
    return new ClientCustomer(this.config, customerId)
  }

  emotions(): ClientEmotions

  emotions(emotionId: string): ClientEmotion

  emotions(emotionId?: string) {
    if (typeof emotionId === "undefined") {
      return new ClientEmotions(this.config)
    }
    return new ClientEmotion(this.config, emotionId)
  }

  helps(): ClientHelps

  helps(helpId: string): ClientHelps

  helps(helpId?: string) {
    if (typeof helpId === "undefined") {
      return new ClientHelps(this.config)
    }
    return new ClientHelp(this.config, helpId)
  }

  project() {
    return new ClientProject(this.config)
  }

  tickets(): ClientTickets

  tickets(ticketId: string): ClientTicket

  tickets(ticketId?: string) {
    if (typeof ticketId === "undefined") {
      return new ClientTickets(this.config)
    }
    return new ClientTicket(this.config, ticketId)
  }

  get currentWidgetConfig() {
    return this.state.widgetConfig ?? widgetConfigDefault
  }

  get currentCustomer() {
    return this.state.customer
  }

  get currentHelps() {
    return this.state.helps
  }
}
