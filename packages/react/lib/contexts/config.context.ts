import {
  type Customer,
  type Help,
  type Nocker,
  type WidgetConfig,
  widgetConfigDefault,
} from "@nocker/client"
import { createContext } from "react"

type Value = {
  isError: boolean
  isLoggingIn: boolean
  client: Nocker | null
  customer: Customer | null
  helps: Help[]
  widgetConfig: WidgetConfig
}

export const ConfigContext = createContext<Value>({
  isError: false,
  isLoggingIn: false,
  client: null,
  widgetConfig: widgetConfigDefault,
  customer: null,
  helps: [],
})
