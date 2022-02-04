import type { WidgetEnvironment } from "../types"

export type WidgetHelp = {
  id: string
  title: string
  body: { [key in string]?: any }
  categoryId: string
  projectId: string
  environment: WidgetEnvironment
}
