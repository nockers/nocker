import { WidgetCustomer, WidgetHelp } from "../types"

export type WidgetRoot = {
  projectId: string
  customer: WidgetCustomer
  helps: WidgetHelp[]
}
