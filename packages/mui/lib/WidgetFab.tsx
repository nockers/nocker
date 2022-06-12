import { Box, Grow } from "@mui/material"
import { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import {
  ConfigContext,
  useWidgetConfig,
  WidgetEmotionSubmit,
  WidgetTicketSubmit,
} from "@nocker/react"
import React, { FC, useContext, useState } from "react"
import { Widget } from "./Widget"
import { ButtonTrigger } from "./components/button/ButtonTrigger"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(data: Ticket | Emotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const WidgetFab: FC<Props> = (props) => {
  const config = useContext(ConfigContext)

  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const [isOpen, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
    props.onClose?.()
  }

  const onOpen = () => {
    setOpen(true)
    props.onOpen?.()
  }

  const onDone = () => {
    setOpen(false)
    props.onDone?.()
  }

  return (
    <>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 4 }}>
          <Widget
            widgetConfig={props.widgetConfig}
            pagePath={null}
            pageTitle={null}
            isNotEmbedded={true}
            onClose={onClose}
            onSubmitted={props.onSubmitted}
            onSubmitEmotion={props.onSubmitEmotion}
            onSubmitTicket={props.onSubmitTicket}
            onError={props.onError}
            onDone={onDone}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 4 }}>
          <ButtonTrigger
            isLoggingIn={config.isLoggingIn}
            config={{
              text: widgetConfig.fabText,
            }}
            onOpen={onOpen}
          />
        </Box>
      </Grow>
    </>
  )
}
