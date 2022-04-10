import { WidgetEnvironment } from "@knockr/client"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { captureException, init } from "@sentry/browser"
import React from "react"
import reactDOM from "react-dom"
import { KnockrFab } from "./components/KnockrFab"
import { KnockrProvider } from "./components/KnockrProvider"
import { createConfig } from "./utils"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  projectId: string
  baseURL: string
  environment: WidgetEnvironment
  colorMode: "dark" | "light"
  theme?: ThemeOptions
  disableSentry?: boolean
}

export const render = (props: Props) => {
  if (props.disableSentry !== true) {
    init({
      dsn: "https://6e199171fc8e4bc29906ad62cf2178e2@o482319.ingest.sentry.io/6312067",
      tracesSampleRate: 1.0,
      environment: process?.env?.NODE_ENV ?? "production",
      beforeSend(event) {
        for (const exception of event.exception?.values ?? []) {
          console.error(exception.value)
        }
        return event
      },
    })
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
          <KnockrFab />
        </KnockrProvider>
      </ThemeProvider>,
      container
    )
  } catch (error) {
    captureException(error)
  }
}
