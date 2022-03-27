import { createContext } from "react"
import type { WidgetRoot } from "../types"

export const WidgetContext = createContext<WidgetRoot>({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  customer: {
    id: "xxxxxxxxxxxxxxxxxxxxx",
    environment: "PRODUCTION",
    userId: null,
    name: null,
    projectId: "xxxxxxxxxxxxxxxxxxxxx",
  },
  helps: [],
})
