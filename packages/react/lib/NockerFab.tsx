import { Grow } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@nocker/client"
import React, { FC, useState } from "react"
import { Nocker } from "./Nocker"
import { ButtonAction } from "./components/button/ButtonAction"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: WidgetConfig | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerFab: FC<Props> = (props) => {
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
          <ButtonAction icon={""} onClick={onOpen} />
        </div>
      </Grow>
      <Grow in={isOpen} unmountOnExit>
        <div className={"fixed right-4 bottom-4 w-80"}>
          <Nocker
            widgetConfig={props.widgetConfig}
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
