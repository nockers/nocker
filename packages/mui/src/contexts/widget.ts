import { createContext } from "react"
import type { WidgetRoot } from "../client/types"

export const WidgetContext = createContext<WidgetRoot>({
  customer: {
    id: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "PRODUCTION",
    externalId: null,
    name: null,
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
  },
  helps: [],
  helpCategories: [],
  helpTreeItems: [],
})
