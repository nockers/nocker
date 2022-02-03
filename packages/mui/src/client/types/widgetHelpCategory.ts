import type { WidgetEnvironment } from "../types"

export type WidgetHelpCategory = {
  id: string
  name: string
  parentCategoryId: string
  projectId: string
  environment: WidgetEnvironment
}
