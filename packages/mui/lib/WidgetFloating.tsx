import { Box, Grow } from "@mui/material"
import { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "@nocker/react"
import React, { FC } from "react"
import { Widget } from "./Widget"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  isOpen: boolean
  onClose(): void
  onSubmitted?(data: Ticket | Emotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
  position?: {
    bottom?: number
    top?: number
    left?: number
    right?: number
  }
}

export const WidgetFloating: FC<Props> = (props) => {
  const position = props.position ?? { bottom: 16, right: 16 }

  return (
    <Grow in={props.isOpen} unmountOnExit>
      <Box sx={{ position: "fixed", ...position, zIndex: 4 }}>
        <Widget
          widgetConfig={props.widgetConfig}
          pagePath={null}
          pageTitle={null}
          isNotEmbedded={true}
          onClose={props.onClose}
          onSubmitted={props.onSubmitted}
          onSubmitEmotion={props.onSubmitEmotion}
          onSubmitTicket={props.onSubmitTicket}
          onError={props.onError}
          onDone={props.onDone}
        />
      </Box>
    </Grow>
  )
}
