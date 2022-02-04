import { useContext } from "react"
import { Knockr } from "../client"
import { ConfigContext } from "../contexts/config"
import { Config } from "../types"

export const useClient = (defaultConfig?: Config) => {
  const config = useContext(ConfigContext)

  return new Knockr({
    projectId: defaultConfig?.projectId ?? config.projectId,
    environment: defaultConfig?.environment ?? config.environment,
    baseURL: defaultConfig?.baseURL ?? config.baseURL,
  })
}
