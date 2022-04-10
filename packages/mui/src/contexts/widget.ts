import type { WidgetRoot } from "@knockr/client"
import { createContext } from "react"

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
