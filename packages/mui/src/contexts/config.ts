import { createContext } from "react"
import type { Config } from "../client/types"

export const ConfigContext = createContext<Config>({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  baseURL: "http://localhost:3000/api",
  environment: "PRODUCTION",
})
