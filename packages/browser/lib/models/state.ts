import { Theme } from "@mui/material"
import { Customer, Nocker, Project, WidgetConfig } from "@nocker/mui"
import { createDefaultTheme } from "@nocker/mui"

type CustomerEffect = (customer: Customer) => void

type ProjectEffect = (project: Project) => void

export class State {
  static isLoggingIn = false

  static client: Nocker | null = null

  static theme: Theme = createDefaultTheme("light")

  static widgetConfigOverride: Partial<WidgetConfig> = {}

  static customerEffects: CustomerEffect[] = []

  static projectEffects: ProjectEffect[] = []

  get client() {
    return State.client
  }

  get customer() {
    return State.client?.currentCustomer ?? null
  }

  get widgetConfig() {
    return State.client?.currentWidgetConfig ?? null
  }

  get helps() {
    return State.client?.currentHelps ?? []
  }

  get isLoggingIn() {
    return State.isLoggingIn
  }

  get widgetConfigOverride() {
    return State.widgetConfigOverride
  }

  listenCustomerEffect(method: CustomerEffect) {
    State.customerEffects.push(method)
    return null
  }

  listenProjectEffect(method: ProjectEffect) {
    State.projectEffects.push(method)
    return null
  }

  setLoginState(isLoggingIn: boolean) {
    State.isLoggingIn = isLoggingIn
    return null
  }

  setWidgetConfigOverride(widgetConfig: Partial<WidgetConfig>) {
    if (typeof widgetConfig === "undefined") {
      return null
    }
    State.widgetConfigOverride = widgetConfig
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

  setProject(project: Project) {
    for (const effect of State.projectEffects) {
      effect(project)
    }
    State.projectEffects = []
    return null
  }

  setCustomer(customer: Customer) {
    for (const effect of State.customerEffects) {
      effect(customer)
    }
    State.customerEffects = []
    return null
  }
}
