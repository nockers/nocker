import { ThemeProvider } from "@mui/material"
import { WidgetEmotion, WidgetTicket } from "@nocker/client"
import {
  NockerCard,
  WidgetEmotionSubmit,
  WidgetTicketSubmit,
} from "@nocker/mui"
import { captureException } from "@sentry/minimal"
import React from "react"
import { createRoot } from "react-dom/client"
import { StateProvider } from "./components"
import { InternalState } from "./models"

type Props = {
  element: HTMLElement
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const renderCard = (props: Props) => {
  try {
    const state = new InternalState()

    const theme = state.getTheme()

    const root = createRoot(props.element)

    root.render(
      <StateProvider>
        <ThemeProvider theme={theme}>
          <NockerCard
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
