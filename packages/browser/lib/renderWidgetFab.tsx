import { ThemeProvider } from "@mui/material"
import {
  Emotion,
  Ticket,
  WidgetConfig,
  WidgetEmotionSubmit,
  WidgetFab,
  WidgetTicketSubmit,
} from "@nocker/mui"
import { captureException } from "@sentry/hub"
import React from "react"
import { createRoot } from "react-dom/client"
import { StateProvider } from "./components"
import { InternalState } from "./models"

type Props = {
  widgetConfig?: WidgetConfig | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(data: Ticket | Emotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const renderWidgetFab = (props: Props) => {
  try {
    const state = new InternalState()

    const theme = state.getTheme()

    const nockerElement = document.querySelector("#nocker")

    if (nockerElement !== null) {
      return null
    }

    const element = document.createElement("div")

    element.id = "nocker"

    document.body.appendChild(element)

    const root = createRoot(element)

    root.render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <WidgetFab
            onOpen={props.onOpen}
            onClose={props.onClose}
            onSubmitted={props.onSubmitted}
            onSubmitEmotion={props.onSubmitEmotion}
            onSubmitTicket={props.onSubmitTicket}
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
