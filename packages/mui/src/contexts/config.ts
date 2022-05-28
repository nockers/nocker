import {
  WidgetConfig,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetEnvironment,
  WidgetHelp,
} from "@nocker/client"
import { createContext } from "react"

type Context = {
  isLoggingIn: boolean
  projectId: string | null
  environment: WidgetEnvironment
  baseURL: string
  customer: WidgetCustomer | null
  helps: WidgetHelp[]
  widgetConfig: WidgetConfig
}

export const ConfigContext = createContext<Context>({
  isLoggingIn: true,
  projectId: null,
  environment: "PRODUCTION",
  baseURL: "https://nocker.app/api",
  widgetConfig: widgetConfigDefault,
  customer: null,
  helps: [],
})
