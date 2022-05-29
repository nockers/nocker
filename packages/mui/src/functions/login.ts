import { Nocker, WidgetEnvironment } from "@nocker/client"
import { InternalState } from "../internals"
import { createConfig, initSentry } from "../utils"

type Props = {
  projectId: string
  environment?: WidgetEnvironment | null
  baseURL?: string | null
  disableSentry?: boolean
}

export const login = async (props: Props) => {
  if (props.disableSentry !== true) {
    initSentry()
  }

  if (typeof props.projectId === "undefined" || props.projectId === null) {
    throw new Error("projectId is Required")
  }

  const state = new InternalState()

  if (state.isLoggingIn) {
    return null
  }

  const config = createConfig({
    projectId: props.projectId,
    baseURL: props.baseURL,
    environment: props.environment,
  })

  const client = new Nocker({
    projectId: config.projectId,
    environment: config.environment,
    baseURL: config.baseURL,
  })

  state.setLoginState(true)

  const widgetLogin = await client.login()

  if (widgetLogin instanceof Error) {
    state.setLoginState(false)
    throw widgetLogin
  }

  state.setProjectId(props.projectId)

  state.setEnvironment(props.environment)

  state.setBaseURL(props.baseURL)

  state.setCustomer(widgetLogin.customer)

  state.setWidgetConfig(widgetLogin.widgetConfig)

  state.setLoginState(false)

  return null
}
