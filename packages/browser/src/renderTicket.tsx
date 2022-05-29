import { ThemeOptions, ThemeProvider } from "@mui/material"
import { WidgetEmotion, WidgetEnvironment, WidgetTicket } from "@nocker/client"
import { NockerTicket, WidgetTicketSubmit } from "@nocker/mui"
import { captureException } from "@sentry/browser"
import React from "react"
import { createRoot } from "react-dom/client"
import { StateProvider } from "./components"
import { InternalState } from "./models"

type Props = {
  element: HTMLElement
  projectId: string
  environment?: WidgetEnvironment | null
  baseURL?: string | null
  theme?: ThemeOptions
  disableSentry?: boolean
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const renderTicket = (props: Props) => {
  try {
    const state = new InternalState()

    const theme = state.getTheme()

    const root = createRoot(props.element)

    root.render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <NockerTicket
            onSubmitted={props.onSubmitted}
            onSubmit={props.onSubmit}
            onError={props.onError}
            onDone={props.onDone}
          />
        </ThemeProvider>
      </StateProvider>,
    )
  } catch (error) {
    captureException(error)
  }

  return null
}
