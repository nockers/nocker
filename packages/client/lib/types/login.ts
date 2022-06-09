import { Customer } from "./customer"
import { Help } from "./help"
import { WidgetConfig } from "./widgetConfig"

export type Login = {
  projectId: string
  customer: Customer
  helps: Help[]
  widgetConfig: WidgetConfig
  accessToken: string | null
  refreshToken: string | null
}
