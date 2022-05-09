import { Config, WidgetConfig, widgetConfigDefault } from "@knockr/client"
import { createContext } from "react"

type Context = Config & {
  widgetConfig?: WidgetConfig | null
}

export const ConfigContext = createContext<Context>({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  baseURL: "http://localhost:3000/api",
  environment: "PRODUCTION",
  widgetConfig: widgetConfigDefault,
})
