import type { WidgetHelp, WidgetHelpCategory } from "../types"

export type WidgetHelpSubCategory = WidgetHelpCategory & {
  children: WidgetHelp[]
}

export type WidgetHelpTreeItem = WidgetHelpCategory & {
  children: (WidgetHelpSubCategory | WidgetHelp)[]
}
