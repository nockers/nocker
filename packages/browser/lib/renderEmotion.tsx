import { ThemeProvider } from "@mui/material"
import { WidgetEmotion, WidgetTicket } from "@nocker/client"
import { NockerEmotion, WidgetEmotionSubmit } from "@nocker/mui"
import { captureException } from "@sentry/minimal"
import React from "react"
import { createRoot } from "react-dom/client"
import { StateProvider } from "./components"
import { InternalState } from "./models"

type Props = {
  element: HTMLElement
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
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
