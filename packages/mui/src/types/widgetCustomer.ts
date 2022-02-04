import type { WidgetEnvironment } from "../types"

export type WidgetCustomer = {
  id: string
  environment: WidgetEnvironment
  externalId: string | null
  name: string | null
  projectId: string
}
