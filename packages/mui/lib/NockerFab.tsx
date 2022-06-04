import { Box, Grow } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@nocker/client"
import React, { FC, useContext, useState } from "react"
import { ConfigContext } from "./contexts"
import { useWidgetConfig } from "./hooks"
import { WidgetEmotionSubmit, WidgetTicketSubmit } from "./types"
import { ButtonTrigger } from "./components/button/ButtonTrigger"
import { NockerCard } from "./NockerCard"

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
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <NockerCard
            widgetConfig={props.widgetConfig}
            pagePath={null}
            pageTitle={null}
            isNotEmbedded={true}
            hasHelps={false}
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
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
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
