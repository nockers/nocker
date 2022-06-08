import {
  type Nocker,
  WidgetConfig,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetHelp,
} from "@nocker/client"
import { createContext } from "react"

export type Context = {
  isLoggingIn: boolean
  client: Nocker | null
  customer: WidgetCustomer | null
  helps: WidgetHelp[]
  widgetConfig: WidgetConfig
}

export const ConfigContext = createContext<Context>({
  isLoggingIn: false,
  client: null,
  widgetConfig: widgetConfigDefault,
  customer: null,
  helps: [],
})
