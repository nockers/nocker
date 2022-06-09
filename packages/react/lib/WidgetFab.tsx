import { Grow } from "@mui/material"
import type { WidgetConfig, Emotion, Ticket } from "@nocker/client"
import React, { FC, useState } from "react"
import { Widget } from "./Widget"
import { ButtonFloating } from "./components/button/ButtonFloating"
import { useWidgetConfig } from "./hooks"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"

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
      <Grow in={!isOpen} unmountOnExit>
        <div className={"fixed right-4 bottom-4"}>
          <ButtonFloating
            type={widgetConfig.fabType}
            text={widgetConfig.fabText}
            icon={widgetConfig.fabIcon}
            onClick={onOpen}
          />
        </div>
      </Grow>
      <Grow in={isOpen} unmountOnExit>
        <div className={"fixed right-4 bottom-4 w-80"}>
          <Widget
            widgetConfig={widgetConfig}
            pagePath={null}
            pageTitle={null}
            onClose={onClose}
            onSubmitted={props.onSubmitted}
            onSubmitEmotion={props.onSubmitEmotion}
            onSubmitTicket={props.onSubmitTicket}
            onError={props.onError}
            onDone={onDone}
          />
        </div>
      </Grow>
    </>
  )
}
