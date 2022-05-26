import { Box, Grow } from "@mui/material"
import { WidgetConfig, WidgetEmotion, WidgetTicket } from "@nocker/client"
import React, { FC, useContext, useState } from "react"
import { WidgetContext } from "../contexts"
import { useWidgetConfig } from "../hooks"
import { ButtonTrigger } from "./button/ButtonTrigger"
import { NockerCard } from "./NockerCard"

type Props = {
  widgetConfig?: WidgetConfig | null
  pagePath?: string | null
  pageTitle?: string | null
  onOpen?(): void
  onClose?(): void
  onSubmitted?(ticket: WidgetTicket | WidgetEmotion): void
  onError?(error: Error): void
  onDone?(): void
}

export const NockerFab: FC<Props> = (props) => {
  const widget = useContext(WidgetContext)

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

  if (widget.isLoading) {
    return null
  }

  return (
    <>
      <Grow in={isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <NockerCard
            widgetConfig={props.widgetConfig}
            pagePath={props.pagePath}
            isNotEmbedded={true}
            hasHelps={false}
            onClose={onClose}
            onSubmitted={props.onSubmitted}
            onError={props.onError}
            onDone={onDone}
          />
        </Box>
      </Grow>
      <Grow in={!isOpen} unmountOnExit>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <ButtonTrigger
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
