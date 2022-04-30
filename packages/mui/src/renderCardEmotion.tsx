import { WidgetEmotion, WidgetEnvironment, WidgetTicket } from "@knockr/client"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { captureException } from "@sentry/browser"
import React from "react"
import reactDOM from "react-dom"
import { KnockrEmotion } from "./components"
import { KnockrProvider } from "./components/KnockrProvider"
import { createConfig, initSentry } from "./utils"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  element: HTMLElement
  projectId: string
  baseURL: string
  environment: WidgetEnvironment
  colorMode: "dark" | "light"
  theme?: ThemeOptions
  disableSentry?: boolean
  path?: string
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
}

export const renderCardEmotion = (props: Props) => {
  if (props.disableSentry !== true) {
    initSentry()
  }

  try {
    const container = document.createElement("div")

    document.body.appendChild(container)

    const defaultTheme = createDefaultTheme(props.colorMode)

    const theme = createTheme(props.theme ?? defaultTheme)

    const config = createConfig({
      projectId: props.projectId,
      baseURL: props.baseURL,
      environment: props.environment,
    })

    reactDOM.render(
      <ThemeProvider theme={theme}>
        <KnockrProvider config={config}>
          <KnockrEmotion
            pagePath={props.path}
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
