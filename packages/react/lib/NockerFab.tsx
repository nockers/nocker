import { Grow } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@nocker/client"
import React, { FC, useState } from "react"
import { NockerCard } from "./NockerCard"
import { ButtonAction } from "./components/button/ButtonAction"
import { useWidgetConfig } from "./hooks"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"

type Props = {
  widgetConfig?: Partial<WidgetConfig> | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(data: WidgetTicket | WidgetEmotion): void
  onSubmitEmotion?(emotion: WidgetEmotionSubmit): void
  onSubmitTicket?(ticket: WidgetTicketSubmit): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerFab: FC<Props> = (props) => {
  const widgetConfig = useWidgetConfig(props.widgetConfig)

  const [isOpen, setOpen] = useState(false)

  console.log(widgetConfig)

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
          <ButtonAction
            text={widgetConfig.fabText}
            icon={widgetConfig.fabIcon}
            onClick={onOpen}
          />
        </div>
      </Grow>
      <Grow in={isOpen} unmountOnExit>
        <div className={"fixed right-4 bottom-4 w-80"}>
          <NockerCard
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
