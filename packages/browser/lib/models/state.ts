import { Theme } from "@mui/material"
import {
  Customer,
  Nocker,
  WidgetConfig,
  widgetConfigDefault,
} from "@nocker/mui"
import { createDefaultTheme } from "@nocker/mui"

export class State {
  static isLoggingIn = false

  static isError = false

  static client: Nocker | null = null

  static theme: Theme = createDefaultTheme("light")

  static customer: Customer | null = null

  static widgetConfigOverride: Partial<WidgetConfig> = {}

  static widgetConfig: WidgetConfig = widgetConfigDefault

  static effects: (() => void)[] = []

  get isLoggingIn() {
    return State.isLoggingIn
  }

  listenLoginState(method: () => void) {
    if (State.isLoggingIn) {
      State.effects.push(method)
    }
    return null
  }

  setErrorState(isError: boolean) {
    State.isError = isError
    return null
  }

  setLoginState(isLoggingIn: boolean) {
    State.isLoggingIn = isLoggingIn
    if (isLoggingIn) return null
    for (const func of State.effects) {
      func()
    }
    State.effects = []
    return null
  }

  getProviderValue(isLoggingIn?: boolean) {
    return {
      isError: State.isError,
      isLoggingIn: isLoggingIn ?? State.isLoggingIn,
      client: State.client,
      customer: State.customer,
      helps: [],
      widgetConfig: {
        ...widgetConfigDefault,
        ...State.widgetConfig,
        ...State.widgetConfigOverride,
      },
    }
  }

  setWidgetConfigOverride(widgetConfig: Partial<WidgetConfig>) {
    if (typeof widgetConfig === "undefined") {
      return null
    }
    State.widgetConfigOverride = widgetConfig
    return null
  }

  setWidgetConfig(widgetConfig: WidgetConfig) {
    if (typeof widgetConfig === "undefined") {
      return null
    }
    State.widgetConfig = widgetConfig
    return null
  }

  setTheme(theme: Theme) {
    State.theme = theme
    return null
  }

  getTheme(): Theme {
    return State.theme
  }

  setClient(client: Nocker) {
    State.client = client
    return null
  }

  setCustomer(customer: Customer) {
    State.customer = customer
    return null
  }
}
