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
  setCustomer(customer?: Customer): void
}

export const ConfigContext = createContext<Value>({
  client: null,
  isLoggingIn: false,
  widgetConfig: widgetConfigDefault,
  customer: null,
  helps: [],
  setCustomer() {
    return
  },
})
