import { WidgetEnvironment } from "./widgetEnvironment"

export type WidgetCustomer = {
  id: string
  environment: WidgetEnvironment
  userId: string | null
  name: string | null
  projectId: string
}
