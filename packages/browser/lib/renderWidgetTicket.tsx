import { ThemeOptions, ThemeProvider } from "@mui/material"
import {
  Emotion,
  Environment,
  Ticket,
  WidgetTicket,
  WidgetTicketSubmit,
} from "@nocker/mui"
import { captureException } from "@sentry/hub"
import React from "react"
import { createRoot } from "react-dom/client"
import { StateProvider } from "./components"
import { State } from "./models"

type Props = {
  element: HTMLElement
  projectId: string
  environment?: Environment | null
  baseURL?: string | null
  theme?: ThemeOptions
  disableSentry?: boolean
  onSubmitted?(data: Ticket | Emotion): void
  onSubmit?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const renderWidgetTicket = (props: Props) => {
  try {
    const state = new State()

    const theme = state.getTheme()

    const root = createRoot(props.element)

    root.render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <WidgetTicket
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
