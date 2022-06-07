import { Theme } from "@mui/material"
import {
  WidgetConfig,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetEnvironment,
} from "@nocker/client"
import { createDefaultTheme } from "@nocker/mui"

export class InternalState {
  static isLoggingIn = false

  static projectId: string | null = null

  static environment: WidgetEnvironment = "PRODUCTION"

  static baseURL = "https://nocker.app/api"

  static theme: Theme = createDefaultTheme("light")

  static customer: WidgetCustomer | null = null

  static widgetConfigLocal: WidgetConfig | null = null

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
      projectId: InternalState.projectId,
      environment: InternalState.environment,
      baseURL: InternalState.baseURL,
      customer: InternalState.customer,
      helps: [],
      widgetConfig:
        InternalState.widgetConfigLocal ?? InternalState.widgetConfig,
    }
  }

  setWidgetConfigLocal(widgetConfig: Partial<WidgetConfig>) {
    if (typeof widgetConfig === "undefined") {
      return null
    }
    InternalState.widgetConfigLocal = {
      ...widgetConfigDefault,
      ...widgetConfig,
    }
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

  setProjectId(projectId: string) {
    InternalState.projectId = projectId
    return null
  }

  setEnvironment(environment?: WidgetEnvironment | null) {
    InternalState.environment = environment ?? "PRODUCTION"
    return null
  }

  setBaseURL(baseURL?: string | null) {
    InternalState.baseURL = baseURL ?? "https://nocker.app/api"
    return null
  }

  setCustomer(widgetCustomer: WidgetCustomer) {
    InternalState.customer = widgetCustomer
    return null
  }
}
