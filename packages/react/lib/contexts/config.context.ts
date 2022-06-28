import {
  type Customer,
  type Help,
  type Nocker,
  type WidgetConfig,
  widgetConfigDefault,
} from "@nocker/client"
import { createContext } from "react"

type Value = {
  client: Nocker | null
  isLoggingIn: boolean
  widgetConfig: WidgetConfig
  customer: Customer | null
  helps: Help[]
  setWidgetConfig(widgetConfig?: WidgetConfig): void
  setCustomer(customer?: Customer): void
  setHelps(helps?: Help[]): void
}

export const ConfigContext = createContext<Value>({
  client: null,
  isLoggingIn: false,
  widgetConfig: widgetConfigDefault,
  customer: null,
  helps: [],
  setWidgetConfig() {
    return
  },
  setCustomer() {
    return
  },
  setHelps() {
    return
  },
})
