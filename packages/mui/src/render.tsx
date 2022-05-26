import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { WidgetEmotion, WidgetEnvironment, WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/browser"
import React from "react"
import { createRoot } from "react-dom/client"
import { NockerFab } from "./components/NockerFab"
import { NockerProvider } from "./components/NockerProvider"
import { createConfig, initSentry } from "./utils"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  projectId: string
  environment?: WidgetEnvironment | null
  baseURL?: string | null
  theme?: ThemeOptions | null
  disableSentry?: boolean
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
}

export const render = (props: Props) => {
  if (props.disableSentry !== true) {
    initSentry()
  }

  if (typeof props.projectId === "undefined" || props.projectId === null) {
    throw new Error("projectId is required")
  }

  try {
    const defaultTheme = createDefaultTheme(
      props.theme?.palette?.mode ?? "light"
    )

    const theme = createTheme(defaultTheme, props.theme ?? {})

    const config = createConfig({
      projectId: props.projectId,
      baseURL: props.baseURL,
      environment: props.environment,
    })

    const element = document.createElement("div")

    document.body.appendChild(element)

    const root = createRoot(element)

    root.render(
      <ThemeProvider theme={theme}>
        <NockerProvider config={config}>
          <NockerFab
            onOpen={props.onOpen}
            onClose={props.onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
          />
        </NockerProvider>
      </ThemeProvider>
    )
  } catch (error) {
    captureException(error)
  }
}
