import { WidgetConfig } from "./widgetConfig"
import { WidgetCustomer } from "./widgetCustomer"
import { WidgetHelp } from "./widgetHelp"

export type WidgetLogin = {
  projectId: string
  customer: WidgetCustomer
  helps: WidgetHelp[]
  widgetConfig: WidgetConfig
  accessToken: string | null
  refreshToken: string | null
}
