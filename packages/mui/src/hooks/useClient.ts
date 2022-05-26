import { Config, Nocker } from "@nocker/client"
import { useContext } from "react"
import { ConfigContext } from "../contexts"

export const useClient = (defaultConfig?: Config) => {
  const config = useContext(ConfigContext)

  return new Nocker({
    projectId: defaultConfig?.projectId ?? config.projectId,
    environment: defaultConfig?.environment ?? config.environment,
    baseURL: defaultConfig?.baseURL ?? config.baseURL,
  })
}
