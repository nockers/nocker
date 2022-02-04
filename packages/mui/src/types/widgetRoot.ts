import {
  WidgetCustomer,
  WidgetHelp,
  WidgetHelpCategory,
  WidgetHelpTreeItem,
} from "../types"

export type WidgetRoot = {
  customer: WidgetCustomer
  helps: WidgetHelp[]
  helpCategories: WidgetHelpCategory[]
  helpTreeItems: WidgetHelpTreeItem[]
}
