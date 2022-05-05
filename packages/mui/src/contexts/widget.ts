import type { WidgetCustomer, WidgetHelp } from "@knockr/client"
import { createContext } from "react"

type WidgetRoot = {
  projectId: string
  customer: WidgetCustomer
  helps: WidgetHelp[]
}

export const WidgetContext = createContext<WidgetRoot>({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  customer: {
    id: "xxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "PRODUCTION",
    userId: null,
    name: null,
  },
  helps: [],
})
