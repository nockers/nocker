import { Config } from "@knockr/client"
import { createContext } from "react"

export const ConfigContext = createContext<Config>({
  projectId: "xxxxxxxxxxxxxxxxxxxxx",
  baseURL: "http://localhost:3000/api",
  environment: "PRODUCTION",
  // emotionMessage: "このページはお役に立ちましたか？",
  // endMessage: "ありがとうございました！"
})
