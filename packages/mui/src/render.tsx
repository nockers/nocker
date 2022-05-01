import { WidgetEmotion, WidgetEnvironment, WidgetTicket } from "@knockr/client"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { captureException } from "@sentry/browser"
import React from "react"
import reactDOM from "react-dom"
import { KnockrFab } from "./components/KnockrFab"
import { KnockrProvider } from "./components/KnockrProvider"
import { createConfig, initSentry } from "./utils"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  projectId: string
  baseURL?: string | null
  environment?: WidgetEnvironment | null
  colorMode?: "dark" | "light" | null
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

  try {
    const container = document.createElement("div")

    document.body.appendChild(container)

    const defaultTheme = createDefaultTheme(props.colorMode ?? "light")

    const theme = createTheme(props.theme ?? defaultTheme)

    const config = createConfig({
      projectId: props.projectId,
      baseURL: props.baseURL,
      environment: props.environment,
    })

    reactDOM.render(
      <ThemeProvider theme={theme}>
        <KnockrProvider config={config}>
          <KnockrFab
            onOpen={props.onOpen}
            onClose={props.onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
          />
        </KnockrProvider>
      </ThemeProvider>,
      container
    )
  } catch (error) {
    captureException(error)
  }
}
