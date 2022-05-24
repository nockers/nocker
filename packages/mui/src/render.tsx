import { WidgetEmotion, WidgetEnvironment, WidgetTicket } from "@knockr/client"
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { captureException } from "@sentry/browser"
import React from "react"
import { createRoot } from "react-dom/client"
import { KnockrFab } from "./components/KnockrFab"
import { KnockrProvider } from "./components/KnockrProvider"
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
        <KnockrProvider config={config}>
          <KnockrFab
            onOpen={props.onOpen}
            onClose={props.onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
          />
        </KnockrProvider>
      </ThemeProvider>
    )
  } catch (error) {
    captureException(error)
  }
}
