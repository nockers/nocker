import { WidgetEnvironment } from "./widgetEnvironment"
import { WidgetTag } from "./widgetTag"

export type WidgetHelp = {
  id: string
  projectId: string
  environment: WidgetEnvironment
  title: string
  body: string
  tags: WidgetTag[]
}
