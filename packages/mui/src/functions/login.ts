import { createTheme, ThemeOptions } from "@mui/material"
import { Nocker, WidgetEnvironment } from "@nocker/client"
import { InternalState } from "../internals"
import { createConfig, createDefaultTheme, initSentry } from "../utils"

type Props = {
  projectId: string
  environment?: WidgetEnvironment | null
  baseURL?: string | null
  theme?: ThemeOptions | null
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

  const defaultTheme = createDefaultTheme(props.theme?.palette?.mode ?? "light")

  const theme = createTheme(defaultTheme, props.theme ?? {})

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

  state.updateLoginState(true)

  const widgetLogin = await client.login()

  if (widgetLogin instanceof Error) {
    state.updateLoginState(false)
    throw widgetLogin
  }

  state.setProjectId(props.projectId)

  state.setEnvironment(props.environment)

  state.setBaseURL(props.baseURL)

  state.setCustomer(widgetLogin.customer)

  state.setWidgetConfig(widgetLogin.widgetConfig)

  state.setTheme(theme)

  state.updateLoginState(false)

  return null
}
