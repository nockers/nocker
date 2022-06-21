import { ThemeProvider } from "@mui/material"
import {
  Emotion,
  Ticket,
  WidgetEmotion,
  WidgetEmotionSubmit,
} from "@nocker/mui"
import { captureException } from "@sentry/hub"
import React from "react"
import { createRoot } from "react-dom/client"
import { StateProvider } from "./components"
import { State } from "./models"

type Props = {
  element: HTMLElement
  onSubmitted?(data: Ticket | Emotion): void
  onSubmit?(emotion: WidgetEmotionSubmit): void
  onError?(error: Error): void
}

export const renderWidgetEmotion = (props: Props) => {
  try {
    const state = new State()

    const theme = state.getTheme()

    const root = createRoot(props.element)

    root.render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <WidgetEmotion
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
