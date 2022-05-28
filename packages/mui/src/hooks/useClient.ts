import { Config, Nocker } from "@nocker/client"
import { useContext } from "react"
import { ConfigContext } from "../contexts"

export const useClient = (defaultConfig?: Config) => {
  const config = useContext(ConfigContext)

  const projectId = defaultConfig?.projectId ?? config.projectId

  if (projectId === null) {
    return null
  }

  return new Nocker({
    projectId,
    environment: defaultConfig?.environment ?? config.environment,
    baseURL: defaultConfig?.baseURL ?? config.baseURL,
  })
}
