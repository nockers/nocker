import {
  WidgetConfig,
  widgetConfigDefault,
  WidgetCustomer,
  WidgetHelp,
} from "@nocker/client"
import { createContext } from "react"

type Context = {
  isLoading: boolean
  projectId: string
  customer: WidgetCustomer
  helps: WidgetHelp[]
  widgetConfig: WidgetConfig
}

export const WidgetContext = createContext<Context>({
  isLoading: true,
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  widgetConfig: widgetConfigDefault,
  customer: {
    id: "xxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "DEVELOPMENT",
    userId: null,
    name: null,
  },
  helps: [],
})
