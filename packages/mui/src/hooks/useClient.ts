import { Config, Knockr } from "@knockr/client"
import { useContext } from "react"
import { ConfigContext } from "../contexts"

export const useClient = (defaultConfig?: Config) => {
  const config = useContext(ConfigContext)

  return new Knockr({
    projectId: defaultConfig?.projectId ?? config.projectId,
    environment: defaultConfig?.environment ?? config.environment,
    baseURL: defaultConfig?.baseURL ?? config.baseURL,
  })
}
