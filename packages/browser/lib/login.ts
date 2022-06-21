import { Environment, Nocker } from "@nocker/client"
import { State } from "./models"
import { initSentry } from "./utils"

type Props = {
  projectId: string
  environment?: Environment | null
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

  const state = new State()

  if (state.isLoggingIn) {
    return null
  }

  const client = new Nocker({
    projectId: props.projectId,
    environment: props.environment,
    baseURL: props.baseURL,
  })

  state.setLoginState(true)

  const widgetLogin = await client.login()

  if (widgetLogin instanceof Error) {
    state.setErrorState(true)
    state.setLoginState(false)
    throw widgetLogin
  }

  state.setClient(client)

  state.setCustomer(widgetLogin.customer)

  state.setWidgetConfig(widgetLogin.widgetConfig)

  state.setLoginState(false)

  return null
}
