import { WidgetEnvironment } from "./widgetEnvironment"

export type WidgetCustomer = {
  id: string
  projectId: string
  environment: WidgetEnvironment
  userId: string | null
  name: string | null
}
