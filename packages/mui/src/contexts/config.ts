import {
  WidgetConfig,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetEnvironment,
  WidgetHelp,
} from "@nocker/client"
import { createContext } from "react"

export type ConfigContext = {
  isLoggingIn: boolean
  projectId: string | null
  environment: WidgetEnvironment
  baseURL: string
  customer: WidgetCustomer | null
  helps: WidgetHelp[]
  widgetConfig: WidgetConfig
}

export const ConfigContext = createContext<ConfigContext>({
  isLoggingIn: true,
  projectId: null,
  environment: "PRODUCTION",
  baseURL: "https://nocker.app/api",
  widgetConfig: widgetConfigDefault,
  customer: null,
  helps: [],
})
