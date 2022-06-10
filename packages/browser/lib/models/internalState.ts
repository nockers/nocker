import { Theme } from "@mui/material"
import {
  Customer,
  Nocker,
  WidgetConfig,
  widgetConfigDefault,
} from "@nocker/mui"
import { createDefaultTheme } from "@nocker/mui"

export class InternalState {
  static isLoggingIn = false

  static client: Nocker | null = null

  static theme: Theme = createDefaultTheme("light")

  static customer: Customer | null = null

  static widgetConfigOverride: Partial<WidgetConfig> = {}

  static widgetConfig: WidgetConfig = widgetConfigDefault

  static effects: (() => void)[] = []

  get isLoggingIn() {
    return InternalState.isLoggingIn
  }

  listenLoginState(method: () => void) {
    if (InternalState.isLoggingIn) {
      InternalState.effects.push(method)
    }
    return null
  }

  setLoginState(isLoggingIn: boolean) {
    InternalState.isLoggingIn = isLoggingIn
    if (isLoggingIn) return null
    for (const func of InternalState.effects) {
      func()
    }
    InternalState.effects = []
    return null
  }

  getConfig() {
    return {
      isLoggingIn: InternalState.isLoggingIn,
      client: InternalState.client,
      customer: InternalState.customer,
      helps: [],
      widgetConfig: {
        ...widgetConfigDefault,
        ...InternalState.widgetConfig,
        ...InternalState.widgetConfigOverride,
      },
    }
  }

  setWidgetConfigOverride(widgetConfig: Partial<WidgetConfig>) {
    if (typeof widgetConfig === "undefined") {
      return null
    }
    InternalState.widgetConfigOverride = widgetConfig
    return null
  }

  setWidgetConfig(widgetConfig: WidgetConfig) {
    if (typeof widgetConfig === "undefined") {
      return null
    }
    InternalState.widgetConfig = widgetConfig
    return null
  }

  setTheme(theme: Theme) {
    InternalState.theme = theme
    return null
  }

  getTheme(): Theme {
    return InternalState.theme
  }

  setClient(client: Nocker) {
    InternalState.client = client
    return null
  }

  setCustomer(customer: Customer) {
    InternalState.customer = customer
    return null
  }
}
