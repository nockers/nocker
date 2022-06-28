import { Box, Grow } from "@mui/material"
import { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import {
  useWidgetConfig,
  WidgetEmotionSubmit,
  WidgetTicketSubmit,
} from "@nocker/react"
import React, { FC, useState } from "react"
import { Widget } from "./Widget"
import { ButtonFloating } from "./components/button/ButtonFloating"

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
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const [isOpen, setOpen] = useState(false)

  const onCloseWidget = () => {
    setOpen(false)
    props.onClose?.()
  }

  const onOpenWidget = () => {
    setOpen(true)
    props.onOpen?.()
  }

  const onDone = () => {
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
            onClose={onCloseWidget}
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
          <ButtonFloating
            type={widgetConfig.fabType}
            text={widgetConfig.fabText}
            icon={widgetConfig.fabIcon}
            isLoading={false}
            onClick={onOpenWidget}
          />
        </Box>
      </Grow>
    </>
  )
}
