import { useContext } from "react"
import { Knocker } from "../client"
import { ConfigContext } from "../contexts/config"

export const useClient = () => {
  const config = useContext(ConfigContext)

  return new Knocker({
    projectId: config.projectId,
    environment: config.environment,
    baseURL: config.baseURL,
  })
}
