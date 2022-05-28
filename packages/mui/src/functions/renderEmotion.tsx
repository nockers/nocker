import { ThemeProvider } from "@mui/material"
import { WidgetEmotion, WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/browser"
import React from "react"
import { createRoot } from "react-dom/client"
import { NockerEmotion, StateProvider } from "../components"
import { InternalState } from "../internals"
import { WidgetEmotionSubmit } from "../types"

type Props = {
  element: HTMLElement
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onSubmit?(data: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const renderEmotion = (props: Props) => {
  try {
    const state = new InternalState()

    const theme = state.getTheme()

    const root = createRoot(props.element)

    root.render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <NockerEmotion
            onSubmitted={props.onSubmitted}
            onSubmit={props.onSubmit}
            onError={props.onError}
          />
        </ThemeProvider>
      </StateProvider>,
    )
  } catch (error) {
    captureException(error)
  }

  return null
}
