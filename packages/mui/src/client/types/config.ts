import { WidgetEnvironment } from "./widgetEnvironment"

export type Config = {
  projectId: string
  environment?: WidgetEnvironment
  baseURL?: string
}
