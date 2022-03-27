import { WidgetEnvironment } from "./widgetEnvironment"
import { WidgetTag } from "./widgetTag"

export type WidgetHelp = {
  id: string
  title: string
  body: { [key in string]?: any }
  categoryId: string
  projectId: string
  environment: WidgetEnvironment
  tags: WidgetTag[]
}
