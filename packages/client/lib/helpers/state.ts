import { Customer, Help, WidgetConfig } from "@nocker/core"

export class State {
  static #isInitialized = false

  static #isLoggingIn = false

  static #isLoggedIn = false

  static #widgetConfig: WidgetConfig | null = null

  static #customer: Customer | null = null

  static #helps: Help[] = []

  get isInitialized() {
    return State.#isInitialized
  }

  initialize() {
    State.#isInitialized = true
  }

  get isLoggingIn() {
    return State.#isLoggingIn
  }

  startLoginProcess() {
    State.#isLoggingIn = true
  }

  endLoginProcess() {
    State.#isLoggingIn = false
  }

  get isLoggedIn() {
    return State.#isLoggedIn
  }

  login() {
    State.#isLoggedIn = true
  }

  logout() {
    State.#isLoggedIn = false
    State.#widgetConfig = null
    State.#customer = null
  }

  get widgetConfig() {
    return State.#widgetConfig
  }

  updateWidgetConfig(widgetConfig: WidgetConfig | null) {
    State.#widgetConfig = widgetConfig
  }

  get customer() {
    return State.#customer
  }

  updateCustomer(customer: Customer | null) {
    State.#customer = customer
  }

  get helps() {
    return State.#helps
  }

  updateHelps(helps: Help[]) {
    State.#helps = helps
  }
}
