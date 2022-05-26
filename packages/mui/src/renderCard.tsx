import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import { WidgetEmotion, WidgetEnvironment, WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/browser"
import React from "react"
import { createRoot } from "react-dom/client"
import { NockerCard } from "./components"
import { NockerProvider } from "./components/NockerProvider"
import { createConfig, initSentry } from "./utils"
import { createDefaultTheme } from "./utils/createDefaultTheme"

type Props = {
  element: HTMLElement
  projectId: string
  environment?: WidgetEnvironment | null
  baseURL?: string | null
  theme?: ThemeOptions
  disableSentry?: boolean
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
}

export const renderCard = (props: Props) => {
  if (props.disableSentry !== true) {
    initSentry()
  }

  if (typeof props.element === "undefined" || props.element === null) {
    throw new Error("element is required")
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

    const root = createRoot(props.element)

    root.render(
      <ThemeProvider theme={theme}>
        <NockerProvider config={config}>
          <NockerCard onSubmitted={props.onSubmitted} onError={props.onError} />
        </NockerProvider>
      </ThemeProvider>
    )
  } catch (error) {
    captureException(error)
  }
}
