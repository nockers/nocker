import { Help } from "./help"
import { WidgetConfig } from "./widgetConfig"

export type Project = {
  id: string
  helps: Help[]
  widgetConfig: WidgetConfig
}
