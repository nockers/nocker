import { ThemeProvider } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@nocker/client"
import { captureException } from "@sentry/browser"
import React from "react"
import { createRoot } from "react-dom/client"
import { NockerFab, StateProvider } from "../components"
import { InternalState } from "../internals"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "../types"

type Props = {
  widgetConfig?: WidgetConfig | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onSubmitEmotion?(data: WidgetEmotionSubmit): void
  onSubmitTicket?(data: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const render = (props: Props) => {
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
          <NockerFab
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
